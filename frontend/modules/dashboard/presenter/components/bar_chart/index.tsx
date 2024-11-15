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
import { ProcessDataModel } from "../../../domain/process_data_app/process_data_model";
import { useAppDispatch, useAppSelector } from "@/core/shared/redux/store";

import Render_Tooltip from "./tooltip";
import { CategoricalChartState } from "recharts/types/chart/types";
import { setActiveTooltipAccValue } from "../../controllers/campaign_section_slice";

import { IQuestionnaire } from "@/core/shared/types/postgresql_schema_types";
import { IChartDataItem } from "@/core/shared/types/chart_types";
import { themeTailwind } from "@/core/shared/theme/tailwindTheme";
import { FilterApp } from "@/modules/dashboard/domain/filter_app/filterApp";

export default function Bar_chart_bim({
  questionnaire,
  fullWidth = false,
  increaseHeight = false,
  isThreeLinesHeadline = false,
  totalAnswers,
}: {
  questionnaire: IQuestionnaire;
  fullWidth?: boolean;
  increaseHeight?: boolean;
  isThreeLinesHeadline?: boolean;
  totalAnswers?: number;
}) {
  /**Redux toolkit */
  const dispatch = useAppDispatch();
  const { activeToolTipAccumValue } = useAppSelector(
    (state) => state.campaignSecSlice
  );
  const { answers, users } = useAppSelector((state) => state.dbSlice);
  const { countryFilter } = useAppSelector((state) => state.filterSlice);

  /**States */
  const { colors: themeColor } = themeTailwind.theme;
  const [chartData, setChartData] = useState<IChartDataItem[]>([]);
  const [totalNetAnswers, setTotalNetAnswers] = useState(0);
  const [isEllipsisMode, setEllipsisMode] = useState(false);
  /**Effects */
  useEffect(() => {
    if (answers.length === 0 || !questionnaire) return;

    const filteredAnswers = FilterApp.filterAnswers({
      answers,
      users,
      questionnaire,
      countryFilter,
    });

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
    let chartData: IChartDataItem[] = choicesCountedValues.map((x) => {
      const words = x.choice.split(" ");
      if (!isEllipsisMode && words.length > 3 + 3 * Number(fullWidth))
        setEllipsisMode(true);

      //make sure those 3 or 6 words [or even 2 words] do not overflow!
      let abbreviation = `${words
        .slice(0, Math.min(3 + 4 * Number(fullWidth), words.length))
        .join(" ")}...`;
      if (abbreviation.length >= 34 * (1 + Number(fullWidth)))
        abbreviation = `${words
          .slice(0, 2 + Number(fullWidth) * 3)
          .join(" ")}...`;

      return {
        name: x.choice,
        abbreviation,
        value: x.count,
      };
    });

    //only pick the first 5 values!
    chartData = chartData.slice(0, 5);

    setChartData(chartData);
    //for total answers, we are not considering blank inputs
    const totalNetAnswers =
      totalAnswers ??
      filteredAnswers.filter((a) => a.userAnswer && a.userAnswer !== "").length;
    setTotalNetAnswers(totalNetAnswers); //do not considering the accumulation due to the multipleChoice!
  }, [answers, questionnaire, countryFilter]);

  /**handlers*/
  const onMouseMoveBarChart = (e: CategoricalChartState) => {
    if (!e.activeLabel) return;
    if (totalNetAnswers === activeToolTipAccumValue) return;

    dispatch(setActiveTooltipAccValue(totalNetAnswers));
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
            <ResponsiveContainer
              //the size of chart is already specified here
              width={"100%"}
              height={"100%"}
            >
              <BarChart
                onMouseMove={onMouseMoveBarChart}
                layout="vertical"
                data={chartData}
                margin={{
                  top: 20,
                  right: 10,
                  bottom: 0,
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
                />
                <YAxis
                  width={fullWidth ? 470 : 230} //...
                  tick={{
                    fontSize: 14,
                    height: 40,
                    width: fullWidth ? 400 : 550, //extended to fit everything in 1 line!
                  }}
                  axisLine={false}
                  tickLine={false}
                  dataKey={isEllipsisMode ? "abbreviation" : "name"}
                  type="category"
                />
                <Bar
                  // background={{ fill: "#eee" }}
                  radius={[0, 6, 6, 0]}
                  dataKey="value"
                  fill={themeColor.primary[100]}
                  // barSize={24}
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
