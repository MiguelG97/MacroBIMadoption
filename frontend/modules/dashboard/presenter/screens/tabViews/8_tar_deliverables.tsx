import React, { useCallback, useMemo } from "react";
import Pie_chart_bim from "../../components/pie_chart";
import Bar_chart_bim from "../../components/bar_chart";
import { useAppSelector } from "@/core/shared/redux/store";
import { IQuestionnaire } from "@/core/shared/types/postgresql_schema_types";
import { OrgSectionName } from "@/core/shared/enums/campaign_sections_enum";
import { FilterApp } from "@/modules/dashboard/domain/filter_app/filterApp";
import Image from "next/image";

export default function TargetDeliv_tabView() {
  /**Redux toolkit */
  const { questionnaires } = useAppSelector((state) => state.dbSlice);
  const { answers, users } = useAppSelector((state) => state.dbSlice);
  const { countryFilter } = useAppSelector((state) => state.filterSlice);

  const questionnairesTarDeliv = useMemo<IQuestionnaire[]>(() => {
    const filteredQuestionnaires = questionnaires.filter(
      (qst) => qst.sectionName === OrgSectionName.Target_deliv
    );
    return filteredQuestionnaires;
  }, [questionnaires]);

  const calcTotalAnswers = useCallback(
    (questionnaire: IQuestionnaire) => {
      const filteredAnswers = FilterApp.filterAnswers({
        answers,
        users,
        questionnaire,
        countryFilter,
      });
      const totalNetAnswers = filteredAnswers.filter(
        (a) => a.userAnswer && a.userAnswer !== ""
      ).length;
      return totalNetAnswers;
    },
    [answers, users, countryFilter]
  );
  return (
    <div
      className="flex flex-col px-[2.4rem] pb-[2.4rem] pt-[2.4rem] 
            h-full gap-[2.4rem] overflow-y-auto w-full"
    >
      <div className="flex flex-row gap-[2.4rem] w-full justify-center">
        <Pie_chart_bim questionnaire={questionnairesTarDeliv[0]} />
        <Bar_chart_bim
          questionnaire={questionnairesTarDeliv[1]}
          totalAnswers={calcTotalAnswers(questionnairesTarDeliv[0])}
        />
      </div>
      <div className="flex flex-row gap-[2.4rem] w-full justify-center">
        <Pie_chart_bim questionnaire={questionnairesTarDeliv[2]} />
        <Bar_chart_bim
          questionnaire={questionnairesTarDeliv[3]}
          totalAnswers={calcTotalAnswers(questionnairesTarDeliv[2])}
        />
      </div>
      <div className="flex flex-row gap-[2.4rem] w-full justify-center">
        <Pie_chart_bim questionnaire={questionnairesTarDeliv[4]} />
        <Bar_chart_bim
          questionnaire={questionnairesTarDeliv[5]}
          totalAnswers={calcTotalAnswers(questionnairesTarDeliv[4])}
        />
      </div>
      <div className="flex flex-row gap-[2.4rem] w-full justify-center">
        <Pie_chart_bim questionnaire={questionnairesTarDeliv[6]} />
        <Bar_chart_bim
          questionnaire={questionnairesTarDeliv[7]}
          totalAnswers={calcTotalAnswers(questionnairesTarDeliv[6])}
        />
      </div>
      <div className="flex flex-row gap-[2.4rem] w-full justify-center">
        <Pie_chart_bim questionnaire={questionnairesTarDeliv[8]} />
        <Bar_chart_bim
          questionnaire={questionnairesTarDeliv[9]}
          totalAnswers={calcTotalAnswers(questionnairesTarDeliv[8])}
        />
      </div>
      <div className="flex flex-row gap-[2.4rem] w-full justify-center">
        <Pie_chart_bim questionnaire={questionnairesTarDeliv[10]} />
        <Bar_chart_bim
          questionnaire={questionnairesTarDeliv[11]}
          totalAnswers={calcTotalAnswers(questionnairesTarDeliv[10])}
        />
      </div>
      <div className="flex flex-row gap-[2.4rem] w-full justify-center">
        <Pie_chart_bim questionnaire={questionnairesTarDeliv[12]} />
        <Bar_chart_bim
          questionnaire={questionnairesTarDeliv[13]}
          totalAnswers={calcTotalAnswers(questionnairesTarDeliv[12])}
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
