"use client";
import ApolloContext from "@/core/shared/apollo/context";
import { setData } from "@/core/shared/redux/slices/questionnarie_slice";
import { useAppDispatch } from "@/core/shared/redux/store";
import { excelUtils } from "@/core/utils/readExcelUtils";
import {
  ApolloProvider,
  gql,
  useMutation,
  useQuery,
} from "@apollo/client";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { utils } from "xlsx";
//to disable prerendering and avoid hydratation mismatches (different content between the server and the client)
const DashboardScreen = dynamic(
  () =>
    import(
      "@/modules/dashboard/presenter/screens/dashboard_screen"
    ),
  { ssr: false }
);
export default function Home() {
  const dispatch = useAppDispatch();
  // const [
  //   mutateFunction,
  //   { loading, error, data },
  // ] = useMutation(gql``);

  useEffect(() => {
    const excel = async () => {
      const workbook =
        await excelUtils.readExcel();

      // const { Answers, Questionnaire } =
      //   workbook?.Sheets;
      const sheets = workbook?.Sheets;
      if (!sheets) return;
      //Questionnaire:
      //data is ordered by all items that belong to a column and then it moves on to the next one

      //Answers: convert it to array of json objects to get data as rows since the sheet has a valid header
      const jsonAnswers = utils.sheet_to_json(
        sheets.Answers
      );
      console.log(jsonAnswers);
      dispatch(setData(jsonAnswers));

      //send data!
    };
    excel();
  }, []);
  return <DashboardScreen />;
}
