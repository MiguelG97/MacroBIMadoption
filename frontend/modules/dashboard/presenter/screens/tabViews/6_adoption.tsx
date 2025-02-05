import { OrgSectionName } from "@/core/shared/enums/campaign_sections_enum";
import { useAppSelector } from "@/core/shared/redux/store";
import { IQuestionnaire } from "@/core/shared/types/postgresql_schema_types";
import React, { useMemo } from "react";
import Pie_chart_bim from "../../components/pie_chart";
import Bar_chart_bim from "../../components/bar_chart";
import Table_survey from "../../components/table_survey";
import { ArrangePattern } from "@/core/shared/types/chart_types";
import Image from "next/image";

export default function Adoption_tabView() {
  /**Redux toolkit */
  const { questionnaires } = useAppSelector((state) => state.dbSlice);

  const questionnairesAdoption = useMemo<IQuestionnaire[]>(() => {
    const filteredQuestionnaires = questionnaires.filter(
      (qst) => qst.sectionName === OrgSectionName.Adoption
    );
    return filteredQuestionnaires;
  }, [questionnaires]);
  return (
    <div
      className="flex flex-col px-[2.4rem] pb-[2.4rem] pt-[2.4rem] 
              h-full gap-[2.4rem] overflow-y-auto w-full"
    >
      <div className="flex flex-row gap-[2.4rem] w-full justify-center">
        <Pie_chart_bim questionnaire={questionnairesAdoption[0]} />
        <Pie_chart_bim questionnaire={questionnairesAdoption[1]} />
      </div>
      <div className="flex flex-row gap-[2.4rem] w-full justify-center">
        <Bar_chart_bim questionnaire={questionnairesAdoption[2]} />
        <Bar_chart_bim questionnaire={questionnairesAdoption[3]} />
      </div>
      <div className="flex flex-row gap-[2.4rem] w-full justify-center">
        <Pie_chart_bim questionnaire={questionnairesAdoption[4]} />
        <Bar_chart_bim questionnaire={questionnairesAdoption[5]} />
      </div>
      <div className="flex flex-row gap-[2.4rem] w-full justify-center">
        <Bar_chart_bim questionnaire={questionnairesAdoption[6]} />
        <Pie_chart_bim questionnaire={questionnairesAdoption[7]} />
      </div>
      <div className="flex flex-row gap-[2.4rem] w-full justify-center">
        <Table_survey questionnaire={questionnairesAdoption[8]} />
        <Pie_chart_bim
          questionnaire={questionnairesAdoption[9]}
          increaseHeight
        />
      </div>
      <div className="flex flex-row gap-[2.4rem] w-full justify-center">
        <Table_survey questionnaire={questionnairesAdoption[10]} />
      </div>
      <div className="flex flex-row gap-[2.4rem] w-full justify-center">
        <Pie_chart_bim
          questionnaire={questionnairesAdoption[11]}
          transformPercentageToRating
          arrangePattern={ArrangePattern.byAnswerChoices}
        />
        <Pie_chart_bim
          questionnaire={questionnairesAdoption[12]}
          transformPercentageToRating
          arrangePattern={ArrangePattern.byAnswerChoices}
        />
      </div>
      <div className="flex flex-row gap-[2.4rem] w-full justify-center">
        <Pie_chart_bim
          questionnaire={questionnairesAdoption[13]}
          transformPercentageToRating
          arrangePattern={ArrangePattern.byAnswerChoices}
        />
        <Pie_chart_bim
          questionnaire={questionnairesAdoption[14]}
          transformPercentageToRating
          arrangePattern={ArrangePattern.byAnswerChoices}
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
