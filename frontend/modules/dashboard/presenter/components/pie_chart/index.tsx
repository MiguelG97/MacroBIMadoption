import { section1 } from "@/core/shared/constants/questions";
import { COLORS } from "@/core/shared/constants/theme";
import { useAppSelector } from "@/core/shared/redux/store";

import { useEffect, useState } from "react";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import Render_legend_content from "./legend_content";
import { ProcessDataUtils } from "@/modules/dashboard/domain/process_data/process_data";
import { ISectionItem } from "@/core/shared/types/section_Questionnarie";
interface ChartDataItem {
  name: string;
  value: number;
}

interface questionnaire {
  question: string;
  chartData: ChartDataItem[];
}

export default function Pie_chart_bim({
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
    const finalValues = Object.values(
      answerCounter
    ) as [
      {
        answerName: string;
        count: number;
      }
    ];
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
      className="bg-[#f7f9fb] min-w-[432px] min-h-[280px] 
  rounded-2xl flex flex-col p-[24px] items-center w-min h-min"
    >
      <div className="w-[432px] text-center">
        <p
          className="secondary_100 line-clamp-2 font-semibold
    text-[14px]"
        >
          {questionnaire?.question}
        </p>
      </div>

      <div
        className="flex flex-row justify-between items-center
      h-full w-full"
      >
        <ResponsiveContainer
        // width={"99%"}
        // height={"100%"}
        >
          <PieChart>
            <Pie
              data={questionnaire?.chartData}
              paddingAngle={5}
              label
              nameKey={"name"}
              dataKey={"value"}
              innerRadius={60}
              outerRadius={80}
            >
              {questionnaire?.chartData.map(
                (x, index) => (
                  <Cell
                    stroke="0"
                    key={`cell-${index}`}
                    fill={`${COLORS[index]}`}
                  />
                )
              )}
            </Pie>
            <Legend
              content={Render_legend_content}
              layout="vertical"
              align="right"
              verticalAlign="middle"
            />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
