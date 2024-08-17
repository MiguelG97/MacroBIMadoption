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
import { themeTailwind } from "@/core/shared/theme/tailwindTheme";

export default function Bar_chart_bim({
  questionnaire,
  fullWidth = false,
  increaseHeight = false,
  isThreeLinesHeadline = false,
}: {
  questionnaire: IQuestionnaire;
  fullWidth?: boolean;
  increaseHeight?: boolean;
  isThreeLinesHeadline?: boolean;
}) {
  /**Redux toolkit */
  const dispatch = useAppDispatch();
  const { activeToolTipAccumValue } = useAppSelector(
    (state) => state.sectionQst
  );
  const { answers } = useAppSelector((state) => state.dbSlice);
  /**States */
  const { colors: themeColor } = themeTailwind.theme;
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
        fullWidth ? "max-w-[143rem]" : "max-w-[70rem]"
      }
  rounded-[1.6rem] flex flex-col pt-[2.4rem] px-[2.4rem] pb-[0.8rem] items-center
  shadow-[0_25px_50px_-12px_rgb(0,0,0,0.1)]`}
    >
      {chartData.length > 0 && (
        <>
          <div
            className={`text-center min-w-[40rem] max-w-[60rem]
              ${
                isThreeLinesHeadline ? "min-h-[5.174rem]" : "min-h-[3.45rem]"
              }  flex items-center`}
          >
            <p
              className={`text-txcolor-100 line-clamp-3 font-semibold
      text-[15px] `}
            >
              {questionnaire.title}
            </p>
          </div>
          <div
            className={`flex flex-row justify-between items-center
      w-full ${increaseHeight ? "h-[27rem]" : "h-[23rem]"}`}
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
                  domain={[
                    0,
                    (dataMax: number) => {
                      if (dataMax > 8) {
                        let originalTick = dataMax / 4;
                        const rest = originalTick % 5;
                        if (rest > 0) {
                          originalTick += 5 - rest;
                        }
                        return originalTick * 4;
                      } else {
                        return 8;
                      }
                    },
                  ]}
                  axisLine={false}
                  tickLine={false}
                  type="number"
                  dataKey={"value"}
                  fontSize={"1.6rem"}
                  tickCount={5}
                  minTickGap={5}
                  // ticks={[0, 5, 10, 15, 20]}
                  // interval={"preserveStartEnd"}
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
                  fill={themeColor.primary[100]}
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
