import Pie_chart_bim from "../../components/pie_chart";
import Bar_chart_bim from "../../components/bar_chart";
import Table_survey from "../../components/table_survey";
import { section34 } from "@/core/shared/constants/old_questions";

export default function Educ_framework_tabView() {
  return (
    <div
      className="flex flex-col p-6 
  h-full gap-6 overflow-y-auto w-full"
    >
      <div
        className="flex flex-row gap-6 w-full
justify-evenly "
      >
        <Pie_chart_bim sectionX={section34[0]} />
        <Bar_chart_bim sectionX={section34[1]} />
      </div>
      <div
        className="flex flex-row gap-6 w-full
justify-evenly "
      >
        <Bar_chart_bim sectionX={section34[2]} fullWidth increaseHeight />
      </div>
      <div
        className="flex flex-row gap-6 w-full
justify-evenly "
      >
        <Table_survey sectionX={section34[3]} isTableAlone />
      </div>
      <div
        className="flex flex-row gap-6 w-full
justify-evenly "
      >
        <Pie_chart_bim sectionX={section34[4]} increaseHeight />
        <Bar_chart_bim sectionX={section34[5]} increaseHeight />
      </div>{" "}
      <div
        className="flex flex-row gap-6 w-full
justify-evenly "
      >
        <Table_survey sectionX={section34[6]} isTableAlone />
      </div>
    </div>
  );
}
