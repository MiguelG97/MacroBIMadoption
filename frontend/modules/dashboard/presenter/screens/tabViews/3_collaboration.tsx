import React, { useEffect, useState } from "react";
import Pie_chart_bim from "../../components/pie_chart";
import Bar_chart_bim from "../../components/bar_chart";
import Table_survey from "../../components/table_survey";
import { SectionName } from "@/core/shared/enums/questionnary_enum";
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
      (x) => x.sectionName === SectionName.Collaboration
    );
    setQstCollaboration(filteredQuestionnaires);
  }, [questionnaires]);
  return (
    <div
      className="flex flex-col p-6 
h-full gap-6 overflow-y-auto w-full"
    >
      <div
        className="flex flex-row gap-6 w-full
justify-evenly "
      >
        <Pie_chart_bim
          questionnaire={questionnariesCollaboration[0]}
          increaseHeight
        />
        <Bar_chart_bim
          questionnaire={questionnariesCollaboration[1]}
          increaseHeight
        />
      </div>
      <div
        className="flex flex-row gap-6 w-full
justify-evenly "
      >
        <Bar_chart_bim
          questionnaire={questionnariesCollaboration[2]}
          fullWidth
          increaseHeight
        />
      </div>
      <div
        className="flex flex-row gap-6 w-full
        justify-evenly "
      >
        <Table_survey questionnaire={questionnariesCollaboration[3]} />
      </div>
    </div>
  );
}
