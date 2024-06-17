import React from "react";
import Pie_chart_bim from "../components/pie_chart";
import { section6 } from "@/core/shared/constants/questions";
import Bar_chart_bim from "../components/bar_chart";
import Table_survey from "../components/table_survey";

export default function Collaboration_dashboard() {
  return (
    <div
      className="flex flex-col p-6 
h-full gap-6 overflow-y-auto w-full"
    >
      <div
        className="flex flex-row gap-6 w-full
justify-evenly "
      >
        <Pie_chart_bim sectionX={section6[0]} />
        <Bar_chart_bim sectionX={section6[1]} />
      </div>
      <div
        className="flex flex-row gap-6 w-full
justify-evenly "
      >
        <Bar_chart_bim sectionX={section6[2]} />

        {/* issue with table when resizing down! it maintains the expanded col width! */}
        <Table_survey
          sectionX={section6[3]}
          isTableAlone={false}
        />
      </div>
    </div>
  );
}
