import { section1 } from "@/core/shared/constants/questions";
import { COLORS } from "@/core/shared/theme/theme";
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
import {
  ChartDataItem,
  ISectionItem,
  questionnaire,
} from "@/core/shared/types/section_Questionnarie";

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

    const chartData: ChartDataItem[] =
      finalValues.map((x) => ({
        name: x.answerName,
        value: x.count,
      }));
    setQuestionnarie({
      question: sectionX.default,
      chartData,
    });
    console.log(chartData);
  }, []);

  return (
    <div
      className="bg-[#ffffff] rounded-2xl flex flex-col
       pt-6 pl-6 pr-6 pb-2 items-center w-full h-min
       shadow-[0_25px_50px_-22px_rgb(0,0,0,0.2)]"
    >
      <div className=" max-w-[432px] text-center">
        <p
          className="secondary_100 line-clamp-2 font-semibold
      text-[14px]"
        >
          {questionnaire?.question}
        </p>
      </div>

      {/* apparently we need to set the height here, other way the stupid chart
      does not work on nested div elements */}
      <div
        className="flex flex-row justify-between items-center
        h-[230px] w-full"
      >
        <ResponsiveContainer>
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
