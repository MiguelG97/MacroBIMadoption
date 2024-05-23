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
import { ProcessDataUtils } from "../../domain/process_data/process_data";
import { useAppSelector } from "@/core/shared/redux/store";

const data = [
  { name: "Yes", value: 35 },
  { name: "Not sure", value: 31 },
  { name: "No", value: 27 },
  { name: "Yes", value: 22 },
  { name: "Not sure", value: 21 },
  { name: "No", value: 19 },
  { name: "Yes", value: 15 },
  { name: "Not sure", value: 11 },
  { name: "No", value: 6 },
];

export default function Bar_chart_bim({
  sectionX,
}: {
  sectionX: ISectionItem;
}) {
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
    const answerCounter =
      ProcessDataUtils.processData(sectionX);
    if (!answerCounter) return; //in case it's null

    //5) store the accumulated data and question name in a hook state
    let finalValues = Object.values(
      answerCounter
    ) as [
      {
        answerName: string;
        count: number;
      }
    ];

    //delete unwanted characters
    finalValues = finalValues.map((x) => {
      x.answerName = x.answerName.replaceAll(
        "[",
        ""
      );
      x.answerName = x.answerName.replaceAll(
        "]",
        ""
      );
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
  return (
    <div
      className="bg-[#ffffff] w-full h-min
  rounded-[20px] flex flex-col p-[24px]
  shadow-[0_25px_50px_-12px_rgb(0,0,0,0.25)]"
    >
      {value.length > 0 && (
        <>
          <div className=" max-w-[432px] text-center">
            <p
              className="secondary_100 line-clamp-2 font-semibold
      text-[15px]"
            >
              {questionnaire?.question}
            </p>
          </div>
          <div
            className="flex flex-row justify-between items-center
      w-full h-[230px]"
          >
            <ResponsiveContainer
              width={"100%"}
              height={"100%"}
            >
              <BarChart
                layout="vertical"
                data={questionnaire?.chartData}
                margin={{
                  top: 20,
                  right: 10,
                  bottom: 0,
                  left: -80,
                }}
              >
                <Tooltip />
                <CartesianGrid
                  fill="#f7f9fb"
                  horizontal={false}
                  stroke="#ebedef"
                />
                <XAxis
                  // domain={[0, 30]}
                  axisLine={false}
                  tickLine={false}
                  type="number"
                  dataKey={"value"}
                />
                <YAxis
                  width={360}
                  tick={{ fontSize: 14 }}
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
    </div>
  );
}
