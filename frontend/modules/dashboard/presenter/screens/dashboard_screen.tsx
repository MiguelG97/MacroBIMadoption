import Header from "../components/header";
import Left_drawer from "../components/left_drawer";
import Bar_chart_bim from "../components/bar_chart";
import Pie_chart_bim from "../components/pie_chart";

import Higher_educ_tabView from "./tabViews/0_higher_education";
import Academic_research_tabView from "./tabViews/academic_research";
import { useAppSelector } from "@/core/shared/redux/store";
import Bim_training_tabView from "./tabViews/bim_training_courses";
import Collaboration_tabView from "./tabViews/collaboration";
import Educ_framework_tabView from "./tabViews/educational_framework";

export default function Dashboard_screen() {
  const { selectedSectionIndex } = useAppSelector(
    (select) => select.sectionQst
  );

  const screens = [
    <Higher_educ_tabView key={0} />,
    <Academic_research_tabView key={1} />,
    <Bim_training_tabView key={2} />,
    <Educ_framework_tabView key={3} />,
    <Collaboration_tabView key={4} />,
  ];
  return (
    <div className="flex flex-row h-screen bg-[#ffffff]">
      {/* how to make it collabsible */}
      <Left_drawer />
      <div
        className="flex flex-col justify-start items-center
       bg-[#f4f7fe] w-full min-w-[1000px]"
      >
        <Header />

        {/* canvas */}
        {screens[selectedSectionIndex]}
      </div>
    </div>
  );
}
