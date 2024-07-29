import React, { useEffect, useState } from "react";
import Pie_chart_bim from "../../components/pie_chart";
import Bar_chart_bim from "../../components/bar_chart";
import Table_survey from "../../components/table_survey";
import { useAppSelector } from "@/core/shared/redux/store";
import { IQuestionnaire } from "@/core/shared/types/postgresql_schema_types";
import { SectionName } from "@/core/shared/enums/questionnary_enum";

export default function Bim_training_tabView() {
  /**Redux toolkit */
  const { questionnaires } = useAppSelector((state) => state.dbSlice);
  /**States */
  const [questionnariesTrainingCourses, setQstTrainingCourses] = useState<
    IQuestionnaire[]
  >([]);
  /**Effects */
  //get all the questionnaires and render 1 chart per each questionnaire that belongs to this section
  useEffect(() => {
    if (questionnaires.length === 0) return;

    const filteredQuestionnaires = questionnaires.filter(
      (x) => x.sectionName === SectionName.Training_courses
    );
    setQstTrainingCourses(filteredQuestionnaires);
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
        <Pie_chart_bim questionnaire={questionnariesTrainingCourses[0]} />
        <Bar_chart_bim questionnaire={questionnariesTrainingCourses[1]} />
      </div>
      <div
        className="flex flex-row gap-6 w-full
justify-evenly "
      >
        <Bar_chart_bim
          questionnaire={questionnariesTrainingCourses[2]}
          increaseHeight
          increaseTextHeight
        />
        <Pie_chart_bim
          questionnaire={questionnariesTrainingCourses[3]}
          increaseHeight
        />
      </div>
      <div
        className="flex flex-row gap-6 w-full
justify-evenly "
      >
        <Table_survey questionnaire={questionnariesTrainingCourses[4]} />
      </div>
    </div>
  );
}