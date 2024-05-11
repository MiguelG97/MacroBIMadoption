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
import {
  useAppDispatch,
  useAppSelector,
} from "@/core/shared/redux/store";
import { setActiveTooltipAccValue } from "../../controllers/section_quest_slice";

export default function Pie_chart_bim({
  sectionX,
}: {
  sectionX: ISectionItem;
}) {
  const { activeToolTipAccumValue } =
    useAppSelector((state) => state.sectionQst);
  const dispatch = useAppDispatch();
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
    const chartData: ChartDataItem[] =
      finalValues.map((x) => {
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
    console.log(chartData, accum);
  }, []);

  //handlers
  const onMouseMovePieChart = (
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
          <PieChart
            onMouseMove={onMouseMovePieChart}
          >
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
            <Tooltip
              content={<Render_Tooltip />}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
