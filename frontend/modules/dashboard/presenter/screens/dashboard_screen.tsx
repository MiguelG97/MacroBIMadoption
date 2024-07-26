import Header from "../components/header";
import Left_drawer from "../components/left_drawer";
import Bar_chart_bim from "../components/bar_chart";
import Pie_chart_bim from "../components/pie_chart";

import Higher_educ_tabView from "./tabViews/0_higher_education";
import { useAppSelector } from "@/core/shared/redux/store";
import Bim_training_tabView from "./tabViews/1_bim_training_courses";
import Collaboration_tabView from "./tabViews/3_collaboration";
import Educ_framework_tabView from "./tabViews/2_educational_framework";

export default function Dashboard_screen() {
  const { selectedSectionIndex } = useAppSelector(
    (select) => select.sectionQst
  );

  const screens = [
    <Higher_educ_tabView key={0} />,
    <Bim_training_tabView key={1} />,
    <Educ_framework_tabView key={2} />,
    <Collaboration_tabView key={3} />,
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
