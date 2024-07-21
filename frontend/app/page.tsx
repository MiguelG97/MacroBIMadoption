"use client";
import { setData } from "@/core/shared/redux/slices/questionnarie_slice";
import { useAppDispatch } from "@/core/shared/redux/store";
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
import { questions_postgresql } from "@/core/shared/constants/questions";
import { IAnswer, IUser } from "@/core/shared/types/postgresql_schema_types";
import {
  setAnswers,
  setQuestionnaries,
  setUsers,
} from "@/core/shared/redux/slices/db_slice";

//to disable prerendering and avoid hydratation mismatches (different content between the server and the client)
const DashboardScreen = dynamic(
  () => import("@/modules/dashboard/presenter/screens/dashboard_screen"),
  { ssr: false }
);
export default function Home() {
  const dispatch = useAppDispatch();

  /**Grahpql Mutations */
  // const [mutationCreateAnswers] = useMutation(mCreateAnswers, {
  //   onCompleted: (data) => {
  //     console.log(data);
  //   },
  //   onError: (error) => {
  //     console.log(error.message, error.graphQLErrors);
  //   },
  // });
  // const [mutationCreateUsers] = useMutation(mCreateUsers, {
  //   onCompleted: (data) => {
  //     console.log(data);
  //   },
  //   onError: (error) => {
  //     console.log(error.message, error.graphQLErrors);
  //   },
  // });
  // const [mutationCreateQuestionnaries] = useMutation(mCreateQuestionnaries, {
  //   onCompleted: (data) => {
  //     console.log(data);
  //   },
  //   onError: (error) => {
  //     console.log(error.message, error.graphQLErrors);
  //   },
  // });
  // const [mutationCreateAnswer] = useMutation(mCreateAnswer, {
  //   onCompleted: (data) => {
  //     console.log(data);
  //   },
  //   onError: (error) => {
  //     console.log(error.message, error.graphQLErrors);
  //   },
  // });

  /**Grahpql Queries */
  useQuery(qFindAllAnswers, {
    onCompleted: (data) => {
      console.log(data);
      dispatch(setAnswers(data.findAllAnswers));
    },
  });
  useQuery(qFindAllQuestionnaries, {
    onCompleted: (data) => {
      console.log(data);
      dispatch(setQuestionnaries(data.findAllQuestionnaries));
    },
  });
  useQuery(qFindAllUsers, {
    onCompleted: (data) => {
      console.log(data);
      dispatch(setUsers(data.findAllUsers));
    },
  });

  /**Pre process data to send it to postgresql db */
  useEffect(() => {
    //Send data from excel to postgresql
    // const sendDataToPostgresql = async () => {
    //   const workbook = await excelUtils.readExcel();
    //   const sheets = workbook?.Sheets;
    //   if (!sheets) return;
    //   let jsonRows: IExcelRowJson[] = utils.sheet_to_json(sheets.Answers);
    //   /**1) read and paser answer data*/
    //   //a) reorder by item title for convenience
    //   jsonRows.sort((a, b) =>
    //     a["Item Title"] > b["Item Title"]
    //       ? 1
    //       : b["Item Title"] > a["Item Title"]
    //       ? -1
    //       : 0
    //   );
    //   //b)filter them, make sure only to have 1 answer per user!!
    //   const rowsGroupedByAnswerTitle: {
    //     [itemid: string]: IExcelRowJson[];
    //   } = {};
    //   jsonRows.forEach((x: IExcelRowJson) => {
    //     const answerId = x["Item ID"];
    //     if (Object.keys(rowsGroupedByAnswerTitle).includes(answerId)) {
    //       rowsGroupedByAnswerTitle[answerId].push(x);
    //     } else {
    //       rowsGroupedByAnswerTitle[answerId] = [x];
    //     }
    //   });
    //   const answerJsonRows: IExcelRowJson[] = [];
    //   Object.keys(rowsGroupedByAnswerTitle).forEach((answerId) => {
    //     const answerRowsGroup: IExcelRowJson[] =
    //       rowsGroupedByAnswerTitle[answerId];
    //     const userIdsFilter: number[] = [];
    //     answerRowsGroup.forEach((x) => {
    //       const userId = Number(x["User ID"]);
    //       //compute non-repeated values!
    //       if (!userIdsFilter.includes(userId)) {
    //         userIdsFilter.push(userId);
    //         answerJsonRows.push(x);
    //       }
    //     });
    //   });
    //   //c) create instances of answer models
    //   const answerModels: IAnswer[] = [];
    //   answerJsonRows.forEach((x) => {
    //     const answer: IAnswer = {
    //       questionId: Number(x["Item ID"]),
    //       questionTitle: x["Item Title"]
    //         .replaceAll("[[", "")
    //         .replaceAll("]]", ""),
    //       userAnswer: x["User Input"]
    //         ?.replaceAll("[[", "")
    //         .replaceAll("]]", ""),
    //       userEmail: x["User Email"],
    //       userId: Number(x["User ID"]),
    //       assigAuditor: x["Assigned Auditors"],
    //       verifStatus: x["Verification Status"],
    //       auditorNote: x["Auditor Note"],
    //       hashtags: x.Hashtags,
    //       stateLabels: x["Statement Labels"],
    //     };
    //     answerModels.push(answer);
    //   });
    //   console.log(answerModels);
    //   /**2) Read and parse user data*/
    //   //a) collect a sample row for each user
    //   const userIdsFilter: number[] = [];
    //   const userJsonRows: IExcelRowJson[] = jsonRows.filter((x) => {
    //     const userId = Number(x["User ID"]);
    //     //WATCH OUT! SINCE THE LAST REPEATED ROW CONTAINS THE COMPLETED ANSWER!!
    //     //FIXED ON PGADMIN
    //     if (!userIdsFilter.includes(userId)) {
    //       userIdsFilter.push(userId);
    //       return x;
    //     }
    //   });
    //   //b) create instance of users and group them up in a list
    //   const userModels: IUser[] = [];
    //   userJsonRows.forEach((x) => {
    //     const user: IUser = {
    //       userId: Number(x["User ID"]),
    //       userEmail: x["User Email"],
    //       userName: x["User Name"],
    //       userLabels: x["User Labels"],
    //       country: "brazil", //set this manually??
    //       academicProgram: "", //depending upon an answer
    //     };
    //     userModels.push(user);
    //   });
    //   console.log(userModels);
    //   /**3) read questionary data */
    //   /**4) send data to postgresql */
    //   try {
    //     // await mutationCreateQuestionnaries({
    //     //   variables: {
    //     //     createManyQuestionnariesInput: {
    //     //       questionnariesInput: questions_postgresql,
    //     //     },
    //     //   },
    //     // });
    //     // await mutationCreateUsers({
    //     //   variables: {
    //     //     createManyUsersInput: { manyUsersInput: userModels },
    //     //   },
    //     // });
    //     // answers go at the end!
    //     const failedAnswersIndexes: { index: number; error: any }[] = [];
    //     const qIdsToIgnore = [
    //       1696139171941, 1696139477406, 1696139949919, 1696140883180,
    //       //those not appear in excel questionnary sheet either
    //       1697541525184,
    //     ];
    //     for (let i = 0; i < answerModels.length; i++) {
    //       if (qIdsToIgnore.includes(answerModels[i].questionId)) continue;
    //       await mutationCreateAnswer({
    //         variables: {
    //           createAnswerInput: answerModels[i],
    //         },
    //         onError: (error) => {
    //           failedAnswersIndexes.push({
    //             index: i,
    //             error: error.graphQLErrors,
    //           });
    //         },
    //       });
    //     }
    //     console.log(failedAnswersIndexes);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // sendDataToPostgresql(); //remove the square brackets!!
  }, []);
  // return <div>hey</div>;
  return <DashboardScreen />;
}
