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
import { setActiveTooltipAccValue } from "../../controllers/campaign_section_slice";
import { IQuestionnaire } from "@/core/shared/types/postgresql_schema_types";
import { ProcessDataModel } from "@/modules/dashboard/domain/process_data_app/process_data_model";
import {
  ArrangePattern,
  IChartDataItem,
} from "@/core/shared/types/chart_types";
import { themeTailwind } from "@/core/shared/theme/tailwindTheme";
import { FilterApp } from "@/modules/dashboard/domain/filter_app/filterApp";
import { percentageToRating } from "@/core/shared/constants/answers";

export default function Pie_chart_bim({
  questionnaire,
  increaseHeight = false,
  isThreeLinesHeadline = false,
  arrangePattern = ArrangePattern.descending,
  transformPercentageToRating = false,
  totalAnswers,
}: {
  questionnaire: IQuestionnaire;
  increaseHeight?: boolean;
  isThreeLinesHeadline?: boolean;
  arrangePattern?: ArrangePattern;
  transformPercentageToRating?: boolean;
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
  /**Use effects */
  //get the answers that are linked to this questionnaire
  useEffect(() => {
    if (answers.length === 0 || !questionnaire) return;

    let filteredAnswers = FilterApp.filterAnswers({
      answers,
      users,
      questionnaire,
      countryFilter,
    });
    if (transformPercentageToRating) {
      filteredAnswers = filteredAnswers.map((f) => ({
        ...f,
        userAnswer: f.userAnswer
          ? percentageToRating[f.userAnswer]
          : f.userAnswer,
      }));
    }

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

    //reorder the data in descendent way or display data following qst choice order
    switch (arrangePattern) {
      case ArrangePattern.descending:
        choicesCountedValues = choicesCountedValues.sort(
          (a, b) => b.count - a.count
        );
        break;
      case ArrangePattern.byAnswerChoices:
        break;
      default:
        break;
    }

    //change data format
    const chartData: IChartDataItem[] = choicesCountedValues.map((x) => {
      return {
        name: x.choice,
        value: x.count,
      };
    });
    setChartData(chartData);

    //for total answers, we are not considering blank inputs
    const totalNetAnswers =
      totalAnswers ??
      filteredAnswers.filter((a) => a.userAnswer && a.userAnswer !== "").length;
    setTotalNetAnswers(totalNetAnswers); //do not considering the accumulation due to the multipleChoice!
  }, [answers, questionnaire, countryFilter]); //weird shit, it's not enough passing answers, since the first and answer render, the questionnaire is not ready yet!

  /**Handlers */
  const onMouseMovePieChart = (e: CategoricalChartState) => {
    if (!e.activeLabel) return; //only when hovered on a pie chart section
    if (totalNetAnswers === activeToolTipAccumValue) return; //it's still the same pie chart

    dispatch(setActiveTooltipAccValue(totalNetAnswers));
  };
  return (
    <div
      className="bg-[#ffffff] rounded-[1.6rem] flex flex-col
       pt-[2.4rem] px-[2.4rem] pb-[0.8rem] items-center w-full h-min
       shadow-[0_25px_50px_-22px_rgb(0,0,0,0.1)] max-w-[700px]"
    >
      {chartData.length > 0 && (
        <>
          <div
            className={`text-center min-w-[400px] max-w-[600px]
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

          {/* apparently we need to set the height here, other way the stupid chart
      does not work on nested div elements */}
          <div
            className={`flex flex-row justify-between items-center
            ${increaseHeight ? "h-[270px]" : "h-[230px]"} w-full`}
          >
            <ResponsiveContainer>
              <PieChart onMouseMove={onMouseMovePieChart}>
                <Pie
                  fontSize={"1.6rem"}
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
                    if (["Yes", "No", "Not sure"].includes(x.name)) {
                      if (x.name === "Yes") {
                        color = themeColor.primary[100];
                      } else if (x.name === "No") {
                        color = themeColor.secondary[100];
                      } else if (x.name === "Not sure") {
                        color = themeColor.quaternary[200];
                      }
                    } else if (chartData.length <= 3) {
                      const colors = [
                        themeColor.primary[100],
                        themeColor.secondary[100],
                        themeColor.quaternary[200],
                      ];
                      color = colors[index];
                    } else {
                      const colors = [
                        themeColor.primary[100],
                        themeColor.secondary[100],
                        themeColor.quaternary[100],
                        themeColor.quaternary[200],
                        themeColor.quaternary[300],
                      ];
                      color = colors[index];
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
