"use client";
import PieChartComp from "@/core/shared/components/pieChart";
import { setData } from "@/core/shared/redux/slices/questionnarie_slice";
import { useAppDispatch } from "@/core/shared/redux/store";
import { excelUtils } from "@/core/utils/readExcelUtils";
import Dashboard_screen from "@/modules/dashboard/presenter/screens/dashboard_screen";
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
      console.log(jsonAnswers);
      dispatch(setData(jsonAnswers));
    };
    excel();
  }, []);
  return <DashboardScreen />;
}
