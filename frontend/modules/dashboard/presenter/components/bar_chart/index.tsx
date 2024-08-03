import { COLORS } from "@/core/shared/theme/theme";

import React, { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ProcessDataModel } from "../../../domain/process_data/process_data_model";
import { useAppDispatch, useAppSelector } from "@/core/shared/redux/store";

import Render_Tooltip from "./tooltip";
import { CategoricalChartState } from "recharts/types/chart/types";
import { setActiveTooltipAccValue } from "../../controllers/section_quest_slice";

import { IQuestionnaire } from "@/core/shared/types/postgresql_schema_types";
import { ChartDataItem } from "@/core/shared/types/chart_types";

export default function Bar_chart_bim({
  questionnaire,
  fullWidth = false,
  increaseHeight = false,
  increaseTextHeight = false,
}: {
  questionnaire: IQuestionnaire;
  fullWidth?: boolean;
  increaseHeight?: boolean;
  increaseTextHeight?: boolean;
}) {
  /**Redux toolkit */
  const dispatch = useAppDispatch();
  const { activeToolTipAccumValue } = useAppSelector(
    (state) => state.sectionQst
  );
  const { answers } = useAppSelector((state) => state.dbSlice);
  /**States */
  const [chartData, setChartData] = useState<ChartDataItem[]>([]);
  /**Effects */
  useEffect(() => {
    if (answers.length === 0 || !questionnaire) return;
    //filter the answers
    const filteredAnswers = answers.filter(
      (x) => x.questionId === questionnaire.questionId
    );

    const choicesCounted = ProcessDataModel._shared.countChoices({
      answers: filteredAnswers,
      questionnaire,
    });

    //format the choices counted to conform to the chart data structure
    let choicesCountedValues = Object.values(choicesCounted) as [
      {
        choice: string;
        count: number;
      }
    ];

    //reorder the data
    choicesCountedValues = choicesCountedValues.sort(
      (a, b) => b.count - a.count
    );

    //change data format
    let chartData: ChartDataItem[] = choicesCountedValues.map((x) => {
      return {
        name: x.choice,
        value: x.count,
      };
    });

    //only pick the first 5 values!
    chartData = chartData.slice(0, 5);
    setChartData(chartData);
  }, [answers, questionnaire]);
  /**handlers*/
  const onMouseMoveBarChart = (e: CategoricalChartState) => {
    if (!e.activeLabel) return;

    let accValue = 0;
    chartData.forEach((x) => (accValue += x.value));
    if (accValue === activeToolTipAccumValue) return; //it's still the same pie chart

    dispatch(setActiveTooltipAccValue(accValue));
  };
  return (
    <div
      className={`bg-[#ffffff] w-full  h-min ${
        fullWidth ? "max-w-[1400px]" : "max-w-[700px]"
      }
  rounded-[20px] flex flex-col p-[24px] items-center
  shadow-[0_25px_50px_-12px_rgb(0,0,0,0.1)]`}
    >
      {chartData.length > 0 && (
        <>
          <div className="min-w-[400px] max-w-[600px] text-center">
            <p
              className={`text-black line-clamp-3 font-semibold
      text-[15px] ${increaseTextHeight && "px-4"}`}
            >
              {questionnaire.title}
            </p>
          </div>
          <div
            className={`flex flex-row justify-between items-center
      w-full ${increaseHeight ? "h-[270px]" : "h-[230px]"}`}
          >
            <ResponsiveContainer width={"100%"} height={"100%"}>
              <BarChart
                onMouseMove={onMouseMoveBarChart}
                layout="vertical"
                data={chartData}
                margin={{
                  top: 20,
                  right: 10,
                  bottom: 0,
                  left: -80,
                }}
              >
                <Tooltip content={<Render_Tooltip />} />
                <CartesianGrid
                  fill="#f7f9fb"
                  horizontal={false}
                  stroke="#ebedef"
                />
                <XAxis
                  // domain={[0, "dataMax"]}
                  domain={[
                    0,
                    (dataMax: number) => {
                      const rest = dataMax % 5;
                      return dataMax + 5 - rest;
                    },
                  ]}
                  axisLine={false}
                  tickLine={false}
                  type="number"
                  dataKey={"value"}
                />
                <YAxis
                  width={fullWidth ? 520 : 360}
                  tick={{
                    fontSize: 14,
                    height: 40,
                    width: fullWidth ? 380 : 280,
                  }}
                  axisLine={false}
                  tickLine={false}
                  dataKey="name"
                  type="category"
                />
                <Bar
                  // background={{ fill: "#eee" }}
                  radius={[0, 6, 6, 0]}
                  dataKey="value"
                  fill={COLORS[0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </>
      )}

      {/* skeleton */}
      {chartData.length === 0 && (
        <div
          className="h-[280px] animate-pulse flex flex-col
    gap-2"
        >
          <div
            className="min-w-[260px] w-full  bg-slate-200 h-8
          mt-6"
          />
          <div
            className="flex flex-row gap-6 items-center justify-center
          h-full"
          >
            <div className="h-[140px] rounded-full w-[140px] bg-slate-200" />
            <div className="h-[140px] w-[200px] bg-slate-200" />
          </div>
        </div>
      )}
    </div>
  );
}
