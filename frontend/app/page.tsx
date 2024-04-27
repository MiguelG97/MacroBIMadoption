"use client";
import PieChartComp from "@/core/shared/components/pieChart";
import { excelUtils } from "@/core/utils/readExcelUtils";
import Dashboard_screen from "@/modules/dashboard/presenter/screens/dashboard_screen";
import { useEffect } from "react";
import { utils } from "xlsx";

export default function Home() {
  useEffect(() => {
    const excel = async () => {
      const workbook =
        await excelUtils.readExcel();
      const { Answers, Questionnaire } =
        workbook?.Sheets;
      //Questionnaire:
      //data is ordered by all items that belong to a column and then it moves on to the next one

      // console.log(Questionnaire);
      // const range = utils.decode_range("C3:D6");
      // console.log(range);

      //Answers: convert it to array of json objects to get data as rows since the sheet has a valid header
      const jsonAnswers =
        utils.sheet_to_json(Answers);
      // console.log(jsonAnswers);
    };
    excel();
  }, []);
  return (
    <Dashboard_screen />
    // <main className="w-screen h-screen">
    //   <PieChartComp />
    // </main>
  );
}
