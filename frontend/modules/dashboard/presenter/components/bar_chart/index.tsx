import { COLORS } from "@/core/shared/theme/theme";
import {
  ChartDataItem,
  ISectionItem,
  questionnaire,
} from "@/core/shared/types/section_Questionnarie";
import React, {
  useEffect,
  useState,
} from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  countAnswer,
  ProcessDataUtils,
} from "../../../domain/process_data/process_data";
import {
  useAppDispatch,
  useAppSelector,
} from "@/core/shared/redux/store";
import {
  section1,
  section2,
  section5,
  section6,
} from "@/core/shared/constants/questions";
import Render_Tooltip from "./tooltip";
import { CategoricalChartState } from "recharts/types/chart/types";
import { setActiveTooltipAccValue } from "../../controllers/section_quest_slice";

export default function Bar_chart_bim({
  sectionX,
  fullWidth = false,
  increaseHeight = false,
  increaseTextHeight = false,
}: {
  sectionX: ISectionItem;
  fullWidth?: boolean;
  increaseHeight?: boolean;
  increaseTextHeight?: boolean;
}) {
  const { activeToolTipAccumValue } =
    useAppSelector((state) => state.sectionQst);
  const dispatch = useAppDispatch();

  const { value } = useAppSelector(
    (state) => state.questionnarieSlice
  );
  //states
  const [questionnaire, setQuestionnarie] =
    useState<questionnaire>();
  const [accumValue, setAccumValue] =
    useState<number>(0);

  useEffect(() => {
    //bussiness logic
    const answerCounter: countAnswer | null =
      ProcessDataUtils.processData(sectionX);
    if (!answerCounter) return; //in case it's null
    console.log(answerCounter);
    //5) store the accumulated data and question name in a hook state
    let finalValues = Object.values(
      answerCounter
    ) as [
      {
        answerName: string;
        count: number;
      }
    ];

    //delete unwanted characters or switch Others by None
    finalValues = finalValues.map((x) => {
      const listNone = [13, 14, 15]; //those only correspond for section1, no indication received yet for other sections!
      let indexNone = section1.findIndex(
        (v) =>
          v.question_id === sectionX.question_id
      );
      indexNone =
        indexNone < 0
          ? section2.findIndex(
              (v) =>
                v.question_id ===
                sectionX.question_id
            )
          : indexNone;
      indexNone =
        indexNone < 0
          ? section5.findIndex(
              (v) =>
                v.question_id ===
                sectionX.question_id
            )
          : indexNone;
      indexNone =
        indexNone < 0
          ? section6.findIndex(
              (v) =>
                v.question_id ===
                sectionX.question_id
            )
          : indexNone;

      if (
        indexNone > 0 &&
        listNone.includes(indexNone) &&
        x.answerName.toLowerCase() === "others"
      ) {
        x.answerName = "None";
      }

      return x;
    }) as [
      {
        answerName: string;
        count: number;
      }
    ];

    //reorder the data
    finalValues = finalValues.sort(
      (a, b) => b.count - a.count
    );

    //get accumulated value whole doing the following operation!
    let accum = 0;
    let chartData: ChartDataItem[] =
      finalValues.map((x) => {
        accum += x.count;
        return {
          name: x.answerName,
          value: x.count,
        };
      });
    //only pick the first 5 values!
    chartData = chartData.slice(0, 5);
    setQuestionnarie({
      question: sectionX.default,
      chartData,
    });
    setAccumValue(accum);
  }, [value]);

  //handlers
  const onMouseMoveBarChart = (
    e: CategoricalChartState
  ) => {
    if (!e.activeLabel) return;

    if (accumValue === activeToolTipAccumValue)
      return;

    dispatch(
      setActiveTooltipAccValue(accumValue)
    );
  };
  return (
    <div
      className={`bg-[#ffffff] w-full  h-min ${
        fullWidth
          ? "max-w-[1400px]"
          : "max-w-[700px]"
      } 
  rounded-[20px] flex flex-col p-[24px] items-center
  shadow-[0_25px_50px_-12px_rgb(0,0,0,0.1)]`}
    >
      {value.length > 0 && (
        <>
          <div className="min-w-[400px] max-w-[600px] text-center">
            <p
              className={`secondary_100 line-clamp-3 font-semibold
      text-[15px] ${
        increaseTextHeight && "px-4"
      }`}
            >
              {questionnaire?.question}
            </p>
          </div>
          <div
            className={`flex flex-row justify-between items-center
      w-full ${
        increaseHeight ? "h-[270px]" : "h-[230px]"
      }`}
          >
            <ResponsiveContainer
              width={"100%"}
              height={"100%"}
            >
              <BarChart
                onMouseMove={onMouseMoveBarChart}
                layout="vertical"
                data={questionnaire?.chartData}
                margin={{
                  top: 20,
                  right: 10,
                  bottom: 0,
                  left: -80,
                }}
              >
                <Tooltip
                  content={<Render_Tooltip />}
                />
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
      {value.length == 0 && (
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
