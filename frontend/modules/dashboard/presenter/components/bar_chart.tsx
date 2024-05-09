import { COLORS } from "@/core/shared/constants/theme";
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
  const [questionnaire, setQuestionnarie] =
    useState<questionnaire>();

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

    //reorder the data
    finalValues = finalValues.sort(
      (a, b) => b.count - a.count
    );

    const chartData: ChartDataItem[] =
      finalValues.map((x) => ({
        name: x.answerName,
        value: x.count,
      }));
    setQuestionnarie({
      question: sectionX.default,
      chartData,
    });
  }, []);
  return (
    <div
      className="bg-[#f7f9fb] w-[632px] h-[620px]
  rounded-2xl flex flex-col p-[24px]"
    >
      <p
        className="secondary_100 line-clamp-2 font-semibold
      text-[14px]"
      >
        Does your institution offer BIM-related
        educational content within its programmes?
      </p>
      <div
        className="flex flex-row justify-between items-center
      w-full h-full"
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
              left: 0,
            }}
          >
            <Tooltip />
            <CartesianGrid
              fill="#f7f9fb"
              horizontal={false}
              stroke="#ebedef"
            />
            <XAxis
              domain={[0, 40]}
              axisLine={false}
              tickLine={false}
              type="number"
              dataKey={"value"}
            />
            <YAxis
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
    </div>
  );
}
