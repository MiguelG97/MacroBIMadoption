"use client";
import { useAppDispatch } from "@/core/shared/redux/store";
import { useQuery } from "@apollo/client";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { qFindAllQuestionnaries } from "@/core/shared/gql/queries/questionnaries";
import { qFindAllUsers } from "@/core/shared/gql/queries/users";
import {
  setAnswers,
  setQuestionnaires,
  setUsers,
} from "@/core/shared/redux/slices/db_slice";
import { qFindAllAnswers } from "@/core/shared/gql/queries/answers";
//to disable prerendering and avoid hydratation mismatches (different content between the server and the client)
const DashboardScreen = dynamic(
  () => import("@/modules/dashboard/presenter/screens/dashboard_screen"),
  { ssr: false }
);
export default function Home() {
  const dispatch = useAppDispatch();
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

  return <DashboardScreen />;
}
