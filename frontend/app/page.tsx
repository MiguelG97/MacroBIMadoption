"use client";
import { useAppDispatch } from "@/core/shared/redux/store";
import {
  qFindAllAnswers,
  qFindManyAnswers,
  qFindOneAnswer,
} from "@/core/shared/gql/queries/answers";

import { useMutation, useQuery } from "@apollo/client";
import dynamic from "next/dynamic";
import { useEffect } from "react";
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
import {
  mCreateUser,
  mCreateUsers,
  mUpdateUsers,
} from "@/core/shared/gql/mutations/users";
import {
  setAnswers,
  setQuestionnaires,
  setUsers,
} from "@/core/shared/redux/slices/db_slice";
import { CreateData } from "@/core/services/createData";
import { UpdateData } from "@/core/services/updateData";
import {
  education_questionnaires,
  organization_questionnaires,
} from "@/core/shared/constants/questions";

//to disable prerendering and avoid hydratation mismatches (different content between the server and the client)
const DashboardScreen = dynamic(
  () => import("@/modules/dashboard/presenter/screens/dashboard_screen"),
  { ssr: false }
);
export default function Home() {
  const dispatch = useAppDispatch();

  /**Grahpql Mutations */
  const [mutationCreateAnswers] = useMutation(mCreateAnswers);
  const [mutationCreateUsers] = useMutation(mCreateUsers);
  const [mutationCreateQuestionnaries] = useMutation(mCreateQuestionnaries);
  const [mutationCreateAnswer] = useMutation(mCreateAnswer);
  const [mutationUpdateUsers] = useMutation(mUpdateUsers);
  const [mutationCreateQuestionnaire] = useMutation(mCreateQuestionnary);

  /**Grahpql Queries */
  useQuery(qFindAllAnswers, {
    onCompleted: (data) => {
      dispatch(setAnswers(data.findAllAnswers));
    },
  });
  useQuery(qFindAllQuestionnaries, {
    onCompleted: (data) => {
      dispatch(setQuestionnaires(data.findAllQuestionnaires));
    },
  });
  useQuery(qFindAllUsers, {
    onCompleted: (data) => {
      dispatch(setUsers(data.findAllUsers));
    },
  });

  /**Pre process data to send it to postgresql db */
  useEffect(() => {
    //Send data from excel to postgresql
    // CreateData.sendExcelDataToPostgresql({
    //   mutationCreateQuestionnaries,
    //   mutationCreateUsers,
    //   mutationCreateAnswers,
    //   mutationCreateAnswer,
    //   excelPath: "/assets/files/education/UK-EDU.xlsx",
    //   country: "united kingdom",
    //   questionnaires: organization_questionnaires,
    //   campaignAlreadyExist: true,
    // });
    // update academic programme data
    // UpdateData.updateAcademicProgramme({ mutationUpdateUsers });//
  }, []);

  // return <div>hey</div>;
  return <DashboardScreen />;
}
