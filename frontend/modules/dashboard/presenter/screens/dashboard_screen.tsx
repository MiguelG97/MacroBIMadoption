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
    <Higher_educ_tabView key={1} />,
    <Bim_training_tabView key={2} />,
    <Educ_framework_tabView key={3} />,
    <Collaboration_tabView key={4} />,
  ];
  return screens[selectedSectionIndex - 1];
}
