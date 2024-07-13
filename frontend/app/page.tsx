"use client";
import { setData } from "@/core/shared/redux/slices/questionnarie_slice";
import { useAppDispatch } from "@/core/shared/redux/store";
import {
  IAnswerPostgres,
  IAnswerSchema,
} from "@/core/shared/types/section_Questionnarie";
import { IExcelRowJson } from "@/core/utils/excel/excel_types";
import { excelUtils } from "@/core/utils/excel/excel_util_model";

import { createsManyAnswer } from "@/modules/dashboard/data/gql/mutations/answers";
import { qFindAll } from "@/modules/dashboard/data/gql/queries/answers";
import {
  ApolloProvider,
  gql,
  useMutation,
  useQuery,
} from "@apollo/client";
import dynamic from "next/dynamic";
import { useEffect, useMemo } from "react";
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

  /**Grahpql queries */
  // const [
  //   mutateFunction,
  //   { loading, error, data },
  // ] = useMutation(createsManyAnswer);

  const { loading, error, data } = useQuery(qFindAll, {
    onCompleted: (data) => {
      dispatch(setData(data?.findAll));
    },
  });

  // useMemo(()=> useQuery(qFindAll),[qFindAll])
  // if (data) {
  //   dispatch(setData(data?.findAll));
  // }

  // console.log(data, loading, error);

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
      let jsonAnswers: IAnswerSchema[] =
        utils.sheet_to_json(sheets.Answers);
      let counter = 0;
      jsonAnswers = jsonAnswers.map((x) => {
        // console.log(x["Item ID"]);
        if (
          x["User Input"] &&
          (x["User Input"].includes("[[") ||
            x["User Input"].includes("]]"))
        ) {
          // console.log(x["User Input"]);
          x["User Input"] = x["User Input"]
            .replaceAll("[[", "")
            .replaceAll("]]", "");
          counter++;
        }
        return x;
      });

      const answerInputs: IAnswerPostgres[] =
        jsonAnswers.map((x) => {
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
      console.log(answerInputs);
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

    const postgresqlDB = async () => {
      const workbook = await excelUtils.readExcel();
      const sheets = workbook?.Sheets;
      if (!sheets) return;
      let jsonRows: IExcelRowJson[] = utils.sheet_to_json(
        sheets.Answers
      );
      console.log(jsonRows);
    };

    //Read data from postgresql
    postgresqlDB();
  }, []);
  return <div>hey</div>;
  // return <DashboardScreen />;
}
