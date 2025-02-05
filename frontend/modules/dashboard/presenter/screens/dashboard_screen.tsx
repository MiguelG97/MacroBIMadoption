import Higher_educ_tabView from "./tabViews/1_higher_education";
import { useAppSelector } from "@/core/shared/redux/store";
import Bim_training_tabView from "./tabViews/2_bim_training_courses";
import Collaboration_tabView from "./tabViews/4_collaboration";
import Educ_framework_tabView from "./tabViews/3_educational_framework";
import OrgInformation_tabView from "./tabViews/5_org_info";
import Adoption_tabView from "./tabViews/6_adoption";
import NonAdopters_tabView from "./tabViews/7_non_adopters";
import TargetDeliv_tabView from "./tabViews/8_tar_deliverables";
import { useMemo } from "react";
import Interop_tabView from "./tabViews/9_interoperability";
import Image from "next/image";

export default function Dashboard_screen() {
  const { activeSectionIndex } = useAppSelector(
    (select) => select.campaignSecSlice
  );
  const screens = useMemo(
    () => [
      <Higher_educ_tabView key={1} />,
      <Bim_training_tabView key={2} />,
      <Educ_framework_tabView key={3} />,
      <Collaboration_tabView key={4} />,
      <OrgInformation_tabView key={5} />,
      <Adoption_tabView key={6} />,
      <NonAdopters_tabView key={7} />,
      <TargetDeliv_tabView key={8} />,
      <Interop_tabView key={9} />,
    ],
    []
  );
  return <>{screens[activeSectionIndex - 1]}</>;
}
