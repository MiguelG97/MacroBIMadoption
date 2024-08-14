"use client";
import { useAppDispatch } from "@/core/shared/redux/store";

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
import {
  mCreateUser,
  mCreateUsers,
  mUpdateUsers,
} from "@/core/shared/gql/mutations/users";
import { questions_postgresql } from "@/core/shared/constants/questions";
import { IAnswer, IUser } from "@/core/shared/types/postgresql_schema_types";
import {
  setAnswers,
  setQuestionnaires,
  setUsers,
} from "@/core/shared/redux/slices/db_slice";
import { CreateData } from "@/core/services/createData";
import { UpdateData } from "@/core/services/updateData";

//to disable prerendering and avoid hydratation mismatches (different content between the server and the client)
const DashboardScreen = dynamic(
  () => import("@/modules/dashboard/presenter/screens/dashboard_screen"),
  { ssr: false }
);
export default function Home() {
  const dispatch = useAppDispatch();

  /**Grahpql Mutations */
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
  const [mutationCreateQuestionnaries] = useMutation(mCreateQuestionnaries, {
    onCompleted: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error.message, error.graphQLErrors);
    },
  });
  const [mutationCreateAnswer] = useMutation(mCreateAnswer, {
    onCompleted: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error.message, error.graphQLErrors);
    },
  });
  const [mutationUpdateUsers] = useMutation(mUpdateUsers, {
    onCompleted: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error.message, error.graphQLErrors);
    },
  });

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
      dispatch(setQuestionnaires(data.findAllQuestionnaries));
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
    // CreateData.sendExcelDataToPostgresql({
    //   mutationCreateAnswer,
    //   mutationCreateQuestionnaries,
    //   mutationCreateUsers,
    //   mutationCreateAnswers,
    // });
    //update academic programme data
    // UpdateData.updateAcademicProgramme({ mutationUpdateUsers });//
  }, []);
  // return <div>hey</div>;
  return <DashboardScreen />;
}
