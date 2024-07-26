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

import Render_Tooltip from "./tooltip";
import { CategoricalChartState } from "recharts/types/chart/types";
import { useAppDispatch, useAppSelector } from "@/core/shared/redux/store";
import { setActiveTooltipAccValue } from "../../controllers/section_quest_slice";
import { IQuestionnaire } from "@/core/shared/types/postgresql_schema_types";
import { ProcessDataModel } from "@/modules/dashboard/domain/process_data/process_data_model";
import { ChartDataItem } from "@/core/shared/types/chart_types";

export default function Pie_chart_bim({
  questionnaire,
  increaseHeight = false,
  increaseTextHeight = false,
}: {
  questionnaire: IQuestionnaire;
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

  /**Use effects */
  //get the answers that are linked to this questionnaire
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
    const chartData: ChartDataItem[] = choicesCountedValues.map((x) => {
      return {
        name: x.choice,
        value: x.count,
      };
    });
    setChartData(chartData);
  }, [answers]);

  /**Handlers */
  const onMouseMovePieChart = (e: CategoricalChartState) => {
    if (!e.activeLabel) return;

    if (chartData.length === activeToolTipAccumValue) return;

    dispatch(setActiveTooltipAccValue(chartData.length));
  };
  return (
    <div
      className="bg-[#ffffff] rounded-2xl flex flex-col
       p-[24px] items-center w-full h-min
       shadow-[0_25px_50px_-22px_rgb(0,0,0,0.1)] max-w-[700px]"
    >
      {chartData.length > 0 && (
        <>
          <div className="text-center min-w-[400px] max-w-[600px]">
            <p
              className={`secondary_100 line-clamp-3 font-semibold
      text-[15px] ${increaseTextHeight && "px-3"}`}
            >
              {questionnaire.title}
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
                  data={chartData}
                  paddingAngle={5}
                  label
                  nameKey={"name"}
                  dataKey={"value"}
                  innerRadius={60}
                  outerRadius={80}
                >
                  {chartData.map((x, index) => {
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
