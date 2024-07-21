import React from "react";
import Pie_chart_bim from "../../components/pie_chart";
import Bar_chart_bim from "../../components/bar_chart";
import Table_survey from "../../components/table_survey";
import { section5 } from "@/core/shared/constants/old_questions";

export default function Bim_training_tabView() {
  return (
    <div
      className="flex flex-col p-6 
h-full gap-6 overflow-y-auto w-full"
    >
      <div
        className="flex flex-row gap-6 w-full
justify-evenly "
      >
        <Pie_chart_bim sectionX={section5[0]} />
        <Bar_chart_bim sectionX={section5[1]} />
      </div>
      <div
        className="flex flex-row gap-6 w-full
justify-evenly "
      >
        <Bar_chart_bim
          sectionX={section5[2]}
          increaseHeight
          increaseTextHeight
        />
        <Pie_chart_bim sectionX={section5[3]} increaseHeight />
      </div>
      <div
        className="flex flex-row gap-6 w-full
justify-evenly "
      >
        <Table_survey sectionX={section5[4]} />
      </div>
    </div>
  );
}
