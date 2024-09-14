import React, { useEffect, useState } from "react";
import Pie_chart_bim from "../../components/pie_chart";
import Bar_chart_bim from "../../components/bar_chart";
import Table_survey from "../../components/table_survey";
import { EduSectionName } from "@/core/shared/enums/questionnary_enum";
import { useAppSelector } from "@/core/shared/redux/store";
import { IQuestionnaire } from "@/core/shared/types/postgresql_schema_types";

export default function Collaboration_tabView() {
  /**Redux toolkit */
  const { questionnaires } = useAppSelector((state) => state.dbSlice);
  /**States */
  const [questionnariesCollaboration, setQstCollaboration] = useState<
    IQuestionnaire[]
  >([]);
  /**Effects */
  //get all the questionnaires and render 1 chart per each questionnaire that belongs to this section
  useEffect(() => {
    if (questionnaires.length === 0) return;

    const filteredQuestionnaires = questionnaires.filter(
      (x) => x.sectionName === EduSectionName.Collaboration
    );
    setQstCollaboration(filteredQuestionnaires);
  }, [questionnaires]);
  return (
    <div
      className="flex flex-col px-[2.4rem] pb-[2.4rem] pt-[0.8rem] 
h-full gap-[2.4rem] overflow-y-auto w-full"
    >
      <div
        className="flex flex-row gap-[2.4rem] w-full
justify-center "
      >
        <Pie_chart_bim
          questionnaire={questionnariesCollaboration[0]}
          increaseHeight
          isThreeLinesHeadline
        />
        <Bar_chart_bim
          questionnaire={questionnariesCollaboration[1]}
          increaseHeight
          isThreeLinesHeadline
        />
      </div>
      <div
        className="flex flex-row gap-[2.4rem] w-full
justify-center "
      >
        <Bar_chart_bim
          questionnaire={questionnariesCollaboration[2]}
          fullWidth
          increaseHeight
        />
      </div>
      <div
        className="flex flex-row gap-[2.4rem] w-full
        justify-center "
      >
        <Table_survey questionnaire={questionnariesCollaboration[3]} />
      </div>
    </div>
  );
}
