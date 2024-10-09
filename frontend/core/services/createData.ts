import { utils } from "xlsx";
import { IExcelRowJson } from "../utils/excel/excel_types";
import { excelUtils } from "../utils/excel/excel_util_model";
import {
  IAnswer,
  IQuestionnaire,
  IUser,
} from "../shared/types/postgresql_schema_types";

export class CreateData {
  public static async sendExcelDataToPostgresql({
    mutationCreateQuestionnaries,
    mutationCreateUsers,
    mutationCreateAnswers,
    mutationCreateAnswer,
    excelPath,
    country,
    questionnaires,
  }: {
    mutationCreateQuestionnaries: any;
    mutationCreateUsers: any;
    mutationCreateAnswers: any;
    mutationCreateAnswer: any;
    excelPath: string;
    country: "peru" | "brazil";
    questionnaires: IQuestionnaire[];
  }) {
    const workbook = await excelUtils.readExcel({
      path: excelPath,
    });
    const sheets = workbook?.Sheets;
    if (!sheets) return;
    let jsonRows: IExcelRowJson[] = utils.sheet_to_json(sheets.Answers);

    /**1) read and parse answer data*/
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
        country: country,
        // academicProgramme: [], //depending upon an answer
      };
      userModels.push(user);
    });

    /**3) read questionary data [imported manually]*/

    /**4) send data to postgresql */
    try {
      //4.1)send questionnaires
      const res1 = await mutationCreateQuestionnaries({
        variables: {
          createManyQuestionnairesInput: {
            questionnairesInput: questionnaires,
          },
        },
      });
      //4.2)send users
      const res2 = await mutationCreateUsers({
        variables: {
          createManyUsersInput: { manyUsersInput: userModels },
        },
      });

      //4.3)send answers
      const failedAnswersIndexes: { index: number; error: any }[] = [];
      const qIdsToIgnore = [
        //those questionnaires are not supposed to be displayed in the dashboard
        1696139171941, 1696139477406, 1696139949919, 1696140883180,
        //those not appear in excel questionnary sheet either
        1697541525184, 1662925111505, 1686658373293,
      ];

      const filteredAnswerModels: IAnswer[] = [];
      for (let i = 0; i < answerModels.length; i++) {
        if (qIdsToIgnore.includes(answerModels[i].questionId)) continue;
        filteredAnswerModels.push(answerModels[i]);

        //do not use this individual mutation since takes a lot, only use it for debuging errors

        // await mutationCreateAnswer({
        //   variables: {
        //     createAnswerInput: answerModels[i],
        //   },
        //   onError: (error: any) => {
        //     if (
        //       !error.message.includes("Unique constraint failed on the fields")
        //     ) {
        //       failedAnswersIndexes.push({
        //         index: i,
        //         error: error.graphQLErrors,
        //       });
        //     }
        //   },
        // });
      }
      // console.log(failedAnswersIndexes);

      const res3 = await mutationCreateAnswers({
        variables: {
          createManyAnswersInput: { createAnswersInput: filteredAnswerModels },
        },
      });
    } catch (error) {
      throw error;
    }
  }
}
