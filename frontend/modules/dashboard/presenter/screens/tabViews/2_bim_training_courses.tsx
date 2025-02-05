import React, { useEffect, useState } from "react";
import Pie_chart_bim from "../../components/pie_chart";
import Bar_chart_bim from "../../components/bar_chart";
import Table_survey from "../../components/table_survey";
import { useAppSelector } from "@/core/shared/redux/store";
import { IQuestionnaire } from "@/core/shared/types/postgresql_schema_types";
import { EduSectionName } from "@/core/shared/enums/campaign_sections_enum";
import Image from "next/image";

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
      (x) => x.sectionName === EduSectionName.Training_courses
    );
    setQstTrainingCourses(filteredQuestionnaires);
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
          questionnaire={questionnariesTrainingCourses[0]}
          isThreeLinesHeadline
        />
        <Bar_chart_bim
          questionnaire={questionnariesTrainingCourses[1]}
          isThreeLinesHeadline
        />
      </div>
      <div
        className="flex flex-row gap-[2.4rem] w-full
justify-center "
      >
        <Bar_chart_bim
          questionnaire={questionnariesTrainingCourses[2]}
          increaseHeight
        />
        <Pie_chart_bim
          questionnaire={questionnariesTrainingCourses[3]}
          increaseHeight
        />
      </div>
      <div
        className="flex flex-row gap-[2.4rem] w-full
justify-center "
      >
        <Table_survey questionnaire={questionnariesTrainingCourses[4]} />
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
