import { COLORS } from "@/core/shared/theme/theme";

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
import Render_Tooltip from "./tooltip";
import { CategoricalChartState } from "recharts/types/chart/types";
import { useAppDispatch, useAppSelector } from "@/core/shared/redux/store";
import { setActiveTooltipAccValue } from "../../controllers/section_quest_slice";
import { IQuestionnary } from "@/core/shared/types/postgresql_schema_types";

export default function Pie_chart_bim({
  questionnary,
  isLoading = true,
  sectionX,
  increaseHeight = false,
  increaseTextHeight = false,
}: {
  questionnary?: IQuestionnary;
  isLoading?: boolean;
  sectionX: ISectionItem;
  increaseHeight?: boolean;
  increaseTextHeight?: boolean;
}) {
  /**OLD CODE */
  const { activeToolTipAccumValue } = useAppSelector(
    (state) => state.sectionQst
  );
  const { value } = useAppSelector((state) => state.questionnarieSlice);

  const dispatch = useAppDispatch();
  //states
  const [questionnaire, setQuestionnarie] = useState<questionnaire>();

  const [accumValue, setAccumValue] = useState<number>(0);

  useEffect(() => {
    //bussiness logic
    const answerCounter = ProcessDataUtils.processData(sectionX);

    if (!answerCounter) return; //in case it's null

    //5) store the accumulated data and question name in a hook state
    let finalValues = Object.values(answerCounter) as [
      {
        answerName: string;
        count: number;
      }
    ];

    //delete unwanted characters
    finalValues = finalValues.map((x) => {
      x.answerName = x.answerName.replaceAll("[", "");
      x.answerName = x.answerName.replaceAll("]", "");
      return x;
    }) as [
      {
        answerName: string;
        count: number;
      }
    ];

    //reorder the data
    finalValues = finalValues.sort((a, b) => b.count - a.count);

    //get accumulated value whole doing the following operation!
    let accum = 0;
    const chartData: ChartDataItem[] = finalValues.map((x) => {
      accum += x.count;
      return {
        name: x.answerName,
        value: x.count,
      };
    });
    setQuestionnarie({
      question: sectionX.default,
      chartData,
    });
    setAccumValue(accum);
  }, [value]);

  //handlers
  const onMouseMovePieChart = (e: CategoricalChartState) => {
    if (!e.activeLabel) return;

    if (accumValue === activeToolTipAccumValue) return;

    dispatch(setActiveTooltipAccValue(accumValue));
  };
  /**NEW CODE */
  return (
    <div
      className="bg-[#ffffff] rounded-2xl flex flex-col
       p-[24px] items-center w-full h-min
       shadow-[0_25px_50px_-22px_rgb(0,0,0,0.1)] max-w-[700px]"
    >
      {!isLoading && (
        <>
          <div className="text-center min-w-[400px] max-w-[600px]">
            <p
              className={`secondary_100 line-clamp-3 font-semibold
      text-[15px] ${increaseTextHeight && "px-3"}`}
            >
              {questionnaire?.question}
            </p>
          </div>

          {/* apparently we need to set the height here, other way the stupid chart
      does not work on nested div elements */}
          <div
            className={`flex flex-row justify-between items-center
            ${increaseHeight ? "h-[270px]" : "h-[230px]"} w-full`}
          >
            <ResponsiveContainer>
              <PieChart onMouseMove={onMouseMovePieChart}>
                <Pie
                  data={questionnaire?.chartData}
                  paddingAngle={5}
                  label
                  nameKey={"name"}
                  dataKey={"value"}
                  innerRadius={60}
                  outerRadius={80}
                >
                  {questionnaire?.chartData.map((x, index) => {
                    let color = "";
                    if (x.name === "Yes") {
                      color = "#f37f72";
                    } else if (x.name === "No") {
                      color = "#444444";
                    } else if (x.name === "Not sure") {
                      color = "#87a8c3";
                    } else {
                      color = COLORS[index];
                    }
                    return (
                      <Cell
                        stroke="0"
                        key={`cell-${index}`}
                        fill={`${color}`}
                      />
                    );
                  })}
                </Pie>
                <Legend
                  content={Render_legend_content}
                  layout="vertical"
                  align="right"
                  verticalAlign="middle"
                />
                <Tooltip content={<Render_Tooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </>
      )}

      {/* skeleton */}
      {isLoading && (
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
