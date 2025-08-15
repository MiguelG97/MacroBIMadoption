import { utils } from "xlsx";
import { IExcelRowJson } from "../utils/excel/excel_types";
import { excelUtils } from "../utils/excel/excel_util_model";
import {
  IAnswer,
  IQuestionnaire,
  IUser,
} from "../shared/types/postgresql_schema_types";
import { ApolloError } from "@apollo/client";
import { client } from "../shared/apollo/context";
import {
  FindAllAnswersQuery,
  FindAllQuestionnariesQuery,
  FindAllUsersQuery,
} from "../utils/generator/graphql";
import { qFindAllUsers } from "../shared/gql/queries/users";
import { qFindAllAnswers } from "../shared/gql/queries/answers";
import { qFindAllQuestionnaries } from "../shared/gql/queries/questionnaries";

export class CreateData {
  public static async sendExcelDataToPostgresql({
    mutationCreateQuestionnaries,
    mutationCreateUsers,
    mutationCreateAnswers,
    mutationCreateAnswer,
    excelPath,
    country,
    questionnaires,
    campaignAlreadyExist,
  }: {
    mutationCreateQuestionnaries: any;
    mutationCreateUsers: any;
    mutationCreateAnswers: any;
    mutationCreateAnswer: any;
    excelPath: string;
    country:
      | "peru"
      | "brazil"
      | "tunisia"
      | "mexico"
      | "ecuador"
      | "colombia"
      | "united kingdom";
    questionnaires: IQuestionnaire[];
    campaignAlreadyExist: boolean;
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
      //4.1)send questionnaires:
      if (!campaignAlreadyExist) {
        const res1 = await mutationCreateQuestionnaries({
          variables: {
            createManyQuestionnairesInput: {
              questionnairesInput: questionnaires,
            },
          },
        });
      }

      //4.2)send users
      //Fetch current users and filter users that do no exist yet
      const currentUsers = await client.query<FindAllUsersQuery>({
        query: qFindAllUsers,
        fetchPolicy: "network-only",
      });
      const newUserModels = userModels.filter(
        (u) =>
          !currentUsers.data.findAllUsers
            .map((uu) => uu.userId)
            .includes(u.userId)
      );

      const res2 = await mutationCreateUsers({
        variables: {
          createManyUsersInput: { manyUsersInput: newUserModels },
        },
      });

      //4.3)send answers
      //filter also for existing answers ids!
      const currentAnswers = await client.query<FindAllAnswersQuery>({
        query: qFindAllAnswers,
        fetchPolicy: "network-only",
      });
      const currentQuestionnaries =
        await client.query<FindAllQuestionnariesQuery>({
          query: qFindAllQuestionnaries,
          fetchPolicy: "network-only",
        });

      const qIdsToIgnore = [
        //those questionnaires are not supposed to be displayed in the dashboard
        1696139171941, 1696139477406, 1696139949919, 1696140883180,
        //those not appear in excel questionnary sheet either
        1697541525184, 1662925111505, 1686658373293,
      ];

      const filteredAnswerModels: IAnswer[] = [];
      for (let i = 0; i < answerModels.length; i++) {
        //ignore answers that do not match to an existing or valid questionnaire Id
        if (
          qIdsToIgnore.includes(answerModels[i].questionId) ||
          !currentQuestionnaries.data.findAllQuestionnaires
            .map((q) => q.questionId)
            .includes(answerModels[i].questionId)
        )
          continue;
        //check if an existing answer that belongs to an user has already being answered!
        if (
          currentAnswers.data.findAllAnswers.some(
            (a) =>
              a.questionId === answerModels[i].questionId &&
              a.userId === answerModels[i].userId
          )
        )
          continue;
        filteredAnswerModels.push(answerModels[i]);
      }

      const res3 = await mutationCreateAnswers({
        variables: {
          createManyAnswersInput: { createAnswersInput: filteredAnswerModels },
        },
      });
      const successad = "good!";
    } catch (error) {
      throw error;
    }
  }
}
