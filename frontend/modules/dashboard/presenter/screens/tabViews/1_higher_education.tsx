import React, { useEffect, useState } from "react";
import Bar_chart_bim from "../../components/bar_chart";
import Pie_chart_bim from "../../components/pie_chart";
import { useAppSelector } from "@/core/shared/redux/store";
import { EduSectionName } from "@/core/shared/enums/campaign_sections_enum";
import { IQuestionnaire } from "@/core/shared/types/postgresql_schema_types";
import Table_survey from "../../components/table_survey";
import Image from "next/image";

export default function Higher_educ_tabView() {
  /**Redux toolkit */
  const { questionnaires } = useAppSelector((state) => state.dbSlice);

  /**States */
  const [questionnariesHigherEduc, setQstHigherEduc] = useState<
    IQuestionnaire[]
  >([]);

  /**Effects */
  //get all the questionnaires and render 1 chart per each questionnaire that belongs to this section
  useEffect(() => {
    if (questionnaires.length === 0) return;

    const filteredQuestionnaires = questionnaires.filter(
      (qst) => qst.sectionName === EduSectionName.Higher_edu_programmes
    );
    setQstHigherEduc(filteredQuestionnaires);
  }, [questionnaires]);

  return (
    <div
      className="flex flex-col px-[2.4rem] pb-[2.4rem] pt-[2.4rem] 
h-full gap-[2.4rem] overflow-y-auto w-full"
    >
      <div
        className="flex flex-row gap-[2.4rem] w-full
   justify-center"
      >
        <Pie_chart_bim questionnaire={questionnariesHigherEduc[0]} />
        <Pie_chart_bim questionnaire={questionnariesHigherEduc[2]} />
      </div>
      <div
        className="flex flex-row gap-[2.4rem] w-full
   justify-center"
      >
        <Pie_chart_bim questionnaire={questionnariesHigherEduc[3]} />
        <Pie_chart_bim questionnaire={questionnariesHigherEduc[4]} />
      </div>

      <div
        className="flex flex-row gap-[2.4rem] w-full
   justify-center"
      >
        <Bar_chart_bim questionnaire={questionnariesHigherEduc[1]} />
        <Bar_chart_bim questionnaire={questionnariesHigherEduc[5]} />
      </div>
      <div
        className="flex flex-row gap-[2.4rem] w-full
   justify-center"
      >
        <Bar_chart_bim questionnaire={questionnariesHigherEduc[6]} />
        <Bar_chart_bim questionnaire={questionnariesHigherEduc[7]} />
      </div>
      <div
        className="flex flex-row gap-[2.4rem] w-full
   justify-center"
      >
        <Bar_chart_bim questionnaire={questionnariesHigherEduc[8]} />
        <Bar_chart_bim questionnaire={questionnariesHigherEduc[9]} />
      </div>
      <div
        className="flex flex-row gap-[2.4rem]
   w-full justify-center"
      >
        <Bar_chart_bim questionnaire={questionnariesHigherEduc[10]} />
        <Bar_chart_bim questionnaire={questionnariesHigherEduc[11]} />
      </div>
      <div
        className="flex flex-row gap-[2.4rem] w-full
   justify-center"
      >
        <Bar_chart_bim questionnaire={questionnariesHigherEduc[12]} />
        <Bar_chart_bim questionnaire={questionnariesHigherEduc[13]} />
      </div>
      <div
        className="flex flex-row gap-[2.4rem] w-full
   justify-center"
      >
        <Bar_chart_bim questionnaire={questionnariesHigherEduc[14]} />
        <Bar_chart_bim questionnaire={questionnariesHigherEduc[15]} />
      </div>
      <div
        className="flex flex-row gap-[2.4rem] w-full
justify-center "
      >
        <Pie_chart_bim questionnaire={questionnariesHigherEduc[16]} />
        <Bar_chart_bim questionnaire={questionnariesHigherEduc[17]} />
      </div>
      <div
        className="flex flex-row gap-[2.4rem] w-full
justify-center "
      >
        <Table_survey questionnaire={questionnariesHigherEduc[18]} />
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
