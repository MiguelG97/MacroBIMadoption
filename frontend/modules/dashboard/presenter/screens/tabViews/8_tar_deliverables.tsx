import React, { useMemo } from "react";
import Pie_chart_bim from "../../components/pie_chart";
import Bar_chart_bim from "../../components/bar_chart";
import { useAppSelector } from "@/core/shared/redux/store";
import { IQuestionnaire } from "@/core/shared/types/postgresql_schema_types";
import { OrgSectionName } from "@/core/shared/enums/campaign_sections_enum";

export default function TargetDeliv_tabView() {
  /**Redux toolkit */
  const { questionnaires } = useAppSelector((state) => state.dbSlice);

  const questionnairesTarDeliv = useMemo<IQuestionnaire[]>(() => {
    const filteredQuestionnaires = questionnaires.filter(
      (qst) => qst.sectionName === OrgSectionName.Target_deliv
    );
    return filteredQuestionnaires;
  }, [questionnaires]);
  return (
    <div
      className="flex flex-col px-[2.4rem] pb-[2.4rem] pt-[2.4rem] 
            h-full gap-[2.4rem] overflow-y-auto w-full"
    >
      <div className="flex flex-row gap-[2.4rem] w-full justify-center">
        <Pie_chart_bim questionnaire={questionnairesTarDeliv[0]} />
        <Bar_chart_bim questionnaire={questionnairesTarDeliv[1]} />
      </div>
      <div className="flex flex-row gap-[2.4rem] w-full justify-center">
        <Pie_chart_bim questionnaire={questionnairesTarDeliv[2]} />
        <Bar_chart_bim questionnaire={questionnairesTarDeliv[3]} />
      </div>
      <div className="flex flex-row gap-[2.4rem] w-full justify-center">
        <Pie_chart_bim questionnaire={questionnairesTarDeliv[4]} />
        <Bar_chart_bim questionnaire={questionnairesTarDeliv[5]} />
      </div>
      <div className="flex flex-row gap-[2.4rem] w-full justify-center">
        <Pie_chart_bim questionnaire={questionnairesTarDeliv[6]} />
        <Bar_chart_bim questionnaire={questionnairesTarDeliv[7]} />
      </div>
      <div className="flex flex-row gap-[2.4rem] w-full justify-center">
        <Pie_chart_bim questionnaire={questionnairesTarDeliv[8]} />
        <Bar_chart_bim questionnaire={questionnairesTarDeliv[9]} />
      </div>
      <div className="flex flex-row gap-[2.4rem] w-full justify-center">
        <Pie_chart_bim questionnaire={questionnairesTarDeliv[10]} />
        <Bar_chart_bim questionnaire={questionnairesTarDeliv[11]} />
      </div>
      <div className="flex flex-row gap-[2.4rem] w-full justify-center">
        <Pie_chart_bim questionnaire={questionnairesTarDeliv[12]} />
        <Bar_chart_bim questionnaire={questionnairesTarDeliv[13]} />
      </div>
    </div>
  );
}
