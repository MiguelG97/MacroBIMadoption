import { section2 } from "@/core/shared/constants/questions";
import React from "react";
import Bar_chart_bim from "../../components/bar_chart";
import Pie_chart_bim from "../../components/pie_chart";
import Table_survey from "../../components/table_survey";

export default function Academic_research_tabView() {
  return (
    <div
      className="flex flex-col p-6 
h-full gap-6 overflow-y-auto w-full"
    >
      <div
        className="flex flex-row gap-6 w-full
justify-evenly "
      >
        <Pie_chart_bim sectionX={section2[0]} />
        <Bar_chart_bim sectionX={section2[1]} />
      </div>
      <div
        className="flex flex-row gap-6 w-full
justify-evenly "
      >
        <Table_survey sectionX={section2[2]} />
      </div>
    </div>
  );
}
