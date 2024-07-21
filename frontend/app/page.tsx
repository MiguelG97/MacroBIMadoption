"use client";
import { setData } from "@/core/shared/redux/slices/questionnarie_slice";
import { useAppDispatch } from "@/core/shared/redux/store";
import { IAnswer, IUser } from "@/core/shared/types/postgresql_schemas";
import {
  IAnswerPostgres,
  IAnswerSchema,
} from "@/core/shared/types/section_Questionnarie";
import { IExcelRowJson } from "@/core/utils/excel/excel_types";
import { excelUtils } from "@/core/utils/excel/excel_util_model";
import {
  qFindAllAnswers,
  qFindManyAnswers,
  qFindOneAnswer,
} from "@/core/shared/gql/queries/answers";

// import { createsManyAnswer } from "@/modules/dashboard/infrastructure/gql/mutations/answers";
// import { qFindAll } from "@/modules/dashboard/infrastructure/gql/queries/answers";
import { ApolloProvider, gql, useMutation, useQuery } from "@apollo/client";
import dynamic from "next/dynamic";
import { useEffect, useMemo } from "react";
import { utils } from "xlsx";
import {
  qFindAllQuestionnaries,
  qFindManyQuestionnaries,
  qFindOneQuestionnary,
} from "@/core/shared/gql/queries/questionnaries";
import {
  qFindAllUsers,
  qFindManyUsers,
  qFindOneUser,
} from "@/core/shared/gql/queries/users";
import {
  mCreateAnswer,
  mCreateAnswers,
} from "@/core/shared/gql/mutations/answers";
import {
  mCreateQuestionnaries,
  mCreateQuestionnary,
} from "@/core/shared/gql/mutations/questionnaries";
import { Chart } from "@/core/utils/generator/graphql";
import { mCreateUser, mCreateUsers } from "@/core/shared/gql/mutations/users";
//to disable prerendering and avoid hydratation mismatches (different content between the server and the client)
const DashboardScreen = dynamic(
  () => import("@/modules/dashboard/presenter/screens/dashboard_screen"),
  { ssr: false }
);
export default function Home() {
  const dispatch = useAppDispatch();

  /**Grahpql queries */
  const [mutationCreateAnswers] = useMutation(mCreateAnswers, {
    onCompleted: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error.message, error.graphQLErrors);
    },
  });
  const [mutationCreateUsers] = useMutation(mCreateUsers, {
    onCompleted: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error.message, error.graphQLErrors);
    },
  });

  // const { loading, error, data } = useQuery(qFindManyUsers, {
  //   variables: { userIds: [173123] },
  //   onCompleted: (data) => {
  //     console.log(data);
  //   },
  // });

  /**Pre process data to send it to postgresql db */
  useEffect(() => {
    //Load data to postgresql
    const excel = async () => {
      const workbook = await excelUtils.readExcel();

      // const { Answers, Questionnaire } =
      //   workbook?.Sheets;
      const sheets = workbook?.Sheets;
      if (!sheets) return;
      //Questionnaire:
      //data is ordered by all items that belong to a column and then it moves on to the next one

      //Answers: convert it to array of json objects to get data as rows since the sheet has a valid header
      let jsonAnswers: IAnswerSchema[] = utils.sheet_to_json(sheets.Answers);
      let counter = 0;
      jsonAnswers = jsonAnswers.map((x) => {
        // console.log(x["Item ID"]);
        if (
          x["User Input"] &&
          (x["User Input"].includes("[[") || x["User Input"].includes("]]"))
        ) {
          // console.log(x["User Input"]);
          x["User Input"] = x["User Input"]
            .replaceAll("[[", "")
            .replaceAll("]]", "");
          counter++;
        }
        return x;
      });

      const answerInputs: IAnswerPostgres[] = jsonAnswers.map((x) => {
        return {
          Assessment: x.Assessment,
          Campaign: x.Campaign,
          Item_ID: x["Item ID"],
          Item_Title: x["Item Title"],
          Item_Type: x["Item Type"],
          Statement_Labels: x["Statement Labels"],
          User_Email: x["User Email"],
          User_ID: x["User ID"],
          User_Input: x["User Input"],
          User_Labels: x["User Labels"],
          User_Name: x["User Name"],
          Verification_Status: x["Verification Status"],
        };
      });
      // console.log(answerInputs);
      // const mutation = async () => {
      //   const result = await mutateFunction({
      //     variables: {
      //       createAnswerInput: {
      //         Answers: answerInputs,
      //       },
      //     },
      //   });
      //   console.log(result, loading, error, data);
      // };
      // mutation();
      // dispatch(setData(jsonAnswers));

      //send data!
    };
    // excel();

    const sendDataToPostgresql = async () => {
      const workbook = await excelUtils.readExcel();
      const sheets = workbook?.Sheets;
      if (!sheets) return;
      let jsonRows: IExcelRowJson[] = utils.sheet_to_json(sheets.Answers);

      /**send data to answer table*/
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
          questionTitle: x["Item Title"],
          userAnswer: x["User Input"],
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
      //d) send data to postgresql
      try {
        await mutationCreateAnswers({
          variables: {
            createManyAnswersInput: { createAnswersInput: answerModels },
          },
        });
      } catch (error) {
        console.log(error);
      }

      /**send data to user table*/
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
          bimAcademicProgram: "", //depending upon an answer
        };
        userModels.push(user);
      });
      console.log(userModels);

      //c) send data to postgresql
      try {
        await mutationCreateUsers({
          variables: {
            createManyUsersInput: { manyUsersInput: userModels },
          },
        });
      } catch (error) {
        console.log(error);
      }
    };
    sendDataToPostgresql();
  }, []);
  return <div>hey</div>;
  // return <DashboardScreen />;
}
