import { utils } from "xlsx";
import { IExcelRowJson } from "../utils/excel/excel_types";
import { excelUtils } from "../utils/excel/excel_util_model";
import { IAnswer, IUser } from "../shared/types/postgresql_schema_types";
import { questions_postgresql } from "../shared/constants/questions";

export class CreateData {
  public static async sendExcelDataToPostgresql({
    mutationCreateQuestionnaries,
    mutationCreateUsers,
    mutationCreateAnswer,
  }: {
    mutationCreateQuestionnaries: any;
    mutationCreateUsers: any;
    mutationCreateAnswer: any;
  }) {
    const workbook = await excelUtils.readExcel();
    const sheets = workbook?.Sheets;
    if (!sheets) return;
    let jsonRows: IExcelRowJson[] = utils.sheet_to_json(sheets.Answers);
    /**1) read and paser answer data*/
    //a) reorder by item title for convenience
    jsonRows.sort((a, b) =>
      a["Item Title"] > b["Item Title"]
        ? 1
        : b["Item Title"] > a["Item Title"]
        ? -1
        : 0
    );
    //b)filter them, make sure only to have 1 answer per user!!
    const rowsGroupedByAnswerTitle: {
      [itemid: string]: IExcelRowJson[];
    } = {};
    jsonRows.forEach((x: IExcelRowJson) => {
      const answerId = x["Item ID"];
      if (Object.keys(rowsGroupedByAnswerTitle).includes(answerId)) {
        rowsGroupedByAnswerTitle[answerId].push(x);
      } else {
        rowsGroupedByAnswerTitle[answerId] = [x];
      }
    });
    const answerJsonRows: IExcelRowJson[] = [];
    Object.keys(rowsGroupedByAnswerTitle).forEach((answerId) => {
      const answerRowsGroup: IExcelRowJson[] =
        rowsGroupedByAnswerTitle[answerId];
      const userIdsFilter: number[] = [];
      answerRowsGroup.forEach((x) => {
        const userId = Number(x["User ID"]);
        //compute non-repeated values!
        if (!userIdsFilter.includes(userId)) {
          userIdsFilter.push(userId);
          answerJsonRows.push(x);
        }
      });
    });
    //c) create instances of answer models
    const answerModels: IAnswer[] = [];
    answerJsonRows.forEach((x) => {
      const answer: IAnswer = {
        questionId: Number(x["Item ID"]),
        questionTitle: x["Item Title"]
          .replaceAll("[[", "")
          .replaceAll("]]", ""),
        userAnswer: x["User Input"]?.replaceAll("[[", "").replaceAll("]]", ""),
        userEmail: x["User Email"],
        userId: Number(x["User ID"]),
        assigAuditor: x["Assigned Auditors"],
        verifStatus: x["Verification Status"],
        auditorNote: x["Auditor Note"],
        hashtags: x.Hashtags,
        stateLabels: x["Statement Labels"],
      };
      answerModels.push(answer);
    });
    console.log(answerModels);
    /**2) Read and parse user data*/
    //a) collect a sample row for each user
    const userIdsFilter: number[] = [];
    const userJsonRows: IExcelRowJson[] = jsonRows.filter((x) => {
      const userId = Number(x["User ID"]);
      //WATCH OUT! SINCE THE LAST REPEATED ROW CONTAINS THE COMPLETED ANSWER!!
      //FIXED ON PGADMIN
      if (!userIdsFilter.includes(userId)) {
        userIdsFilter.push(userId);
        return x;
      }
    });
    //b) create instance of users and group them up in a list
    const userModels: IUser[] = [];
    userJsonRows.forEach((x) => {
      const user: IUser = {
        userId: Number(x["User ID"]),
        userEmail: x["User Email"],
        userName: x["User Name"],
        userLabels: x["User Labels"],
        country: "brazil", //set this manually??
        // academicProgram: [], //depending upon an answer
      };
      userModels.push(user);
    });
    console.log(userModels);
    /**3) read questionary data */
    /**4) send data to postgresql */
    try {
      await mutationCreateQuestionnaries({
        variables: {
          createManyQuestionnariesInput: {
            questionnariesInput: questions_postgresql,
          },
        },
      });
      await mutationCreateUsers({
        variables: {
          createManyUsersInput: { manyUsersInput: userModels },
        },
      });
      // answers go at the end!
      const failedAnswersIndexes: { index: number; error: any }[] = [];
      const qIdsToIgnore = [
        1696139171941, 1696139477406, 1696139949919, 1696140883180,
        //those not appear in excel questionnary sheet either
        1697541525184,
      ];
      for (let i = 0; i < answerModels.length; i++) {
        if (qIdsToIgnore.includes(answerModels[i].questionId)) continue;
        await mutationCreateAnswer({
          variables: {
            createAnswerInput: answerModels[i],
          },
          onError: (error: any) => {
            failedAnswersIndexes.push({
              index: i,
              error: error.graphQLErrors,
            });
          },
        });
      }
      console.log(failedAnswersIndexes);
    } catch {}
  }
}
