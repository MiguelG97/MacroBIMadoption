import { OrgSectionName } from "@/core/shared/enums/campaign_sections_enum";
import { useAppSelector } from "@/core/shared/redux/store";
import { IQuestionnaire } from "@/core/shared/types/postgresql_schema_types";
import React, { useMemo } from "react";
import Bar_chart_bim from "../../components/bar_chart";
import Pie_chart_bim from "../../components/pie_chart";

export default function OrgInformation_tabView() {
  /**Redux toolkit */
  const { questionnaires } = useAppSelector((state) => state.dbSlice);

  const questionnairesOrgInfo = useMemo<IQuestionnaire[]>(() => {
    const filteredQuestionnaires = questionnaires.filter(
      (qst) => qst.sectionName === OrgSectionName.Org_information
    );
    return filteredQuestionnaires;
  }, [questionnaires]);

  return (
    <div
      className="flex flex-col px-[2.4rem] pb-[2.4rem] pt-[2.4rem] 
                  h-full gap-[2.4rem] overflow-y-auto w-full"
    >
      <div className="flex flex-row gap-[2.4rem] w-full justify-center">
        <Bar_chart_bim questionnaire={questionnairesOrgInfo[0]} />
        <Pie_chart_bim questionnaire={questionnairesOrgInfo[1]} />
      </div>
      <div className="flex flex-row gap-[2.4rem] w-full justify-center">
        <Bar_chart_bim questionnaire={questionnairesOrgInfo[2]} />
        <Bar_chart_bim questionnaire={questionnairesOrgInfo[3]} />
      </div>
      <div className="flex flex-row gap-[2.4rem] w-full justify-center">
        <Pie_chart_bim questionnaire={questionnairesOrgInfo[4]} />
        <Bar_chart_bim questionnaire={questionnairesOrgInfo[5]} />
      </div>
      <div className="flex flex-row gap-[2.4rem] w-full justify-center">
        <Pie_chart_bim questionnaire={questionnairesOrgInfo[6]} />
        <Pie_chart_bim questionnaire={questionnairesOrgInfo[7]} />
      </div>
    </div>
  );
}
