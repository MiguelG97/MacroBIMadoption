import { OrgSectionName } from "@/core/shared/enums/campaign_sections_enum";
import { useAppSelector } from "@/core/shared/redux/store";
import { IQuestionnaire } from "@/core/shared/types/postgresql_schema_types";
import React, { useMemo } from "react";
import Pie_chart_bim from "../../components/pie_chart";
import { ArrangePattern } from "@/core/shared/types/chart_types";
import Bar_chart_bim from "../../components/bar_chart";
import Image from "next/image";

export default function Interop_tabView() {
  /**Redux toolkit */
  const { questionnaires } = useAppSelector((state) => state.dbSlice);

  const questionnairesInterop = useMemo<IQuestionnaire[]>(() => {
    const filteredQuestionnaires = questionnaires.filter(
      (qst) => qst.sectionName === OrgSectionName.Interop
    );
    return filteredQuestionnaires;
  }, [questionnaires]);
  return (
    <div
      className="flex flex-col px-[2.4rem] pb-[2.4rem] pt-[2.4rem] 
            h-full gap-[2.4rem] overflow-y-auto w-full"
    >
      <div className="flex flex-row gap-[2.4rem] w-full justify-center">
        <Pie_chart_bim questionnaire={questionnairesInterop[0]} />
        <Pie_chart_bim questionnaire={questionnairesInterop[1]} />
      </div>
      <div className="flex flex-row gap-[2.4rem] w-full justify-center">
        <Pie_chart_bim
          questionnaire={questionnairesInterop[2]}
          arrangePattern={ArrangePattern.byAnswerChoices}
        />
        <Pie_chart_bim questionnaire={questionnairesInterop[3]} />
      </div>
      <div className="flex flex-row gap-[2.4rem] w-full justify-center">
        <Bar_chart_bim
          questionnaire={questionnairesInterop[4]}
          fullWidth
          increaseHeight
        />
      </div>
      <div className="flex w-full justify-center">
        <Image
          src={"/assets/images/macrobim_footer.png"}
          alt="macroadoption footer"
          width={"280"}
          height={"50"}
        />
      </div>
    </div>
  );
}
