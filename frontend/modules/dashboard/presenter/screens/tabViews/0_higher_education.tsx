import React, { useEffect, useState } from "react";
import Bar_chart_bim from "../../components/bar_chart";
import Pie_chart_bim from "../../components/pie_chart";
import { section1 } from "@/core/shared/constants/old_questions";
import { useAppSelector } from "@/core/shared/redux/store";
import { SectionName } from "@/core/shared/enums/questionnary_enum";
import { IQuestionnaire } from "@/core/shared/types/postgresql_schema_types";

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
    const filteredQuestionnaires = questionnaires.filter(
      (x) => x.sectionName === SectionName.Higher_edu_programmes
    );
    setQstHigherEduc(filteredQuestionnaires);
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
        <Pie_chart_bim questionnaire={questionnariesHigherEduc[0]} />
        <Pie_chart_bim questionnaire={questionnariesHigherEduc[2]} />
      </div>
      <div
        className="flex flex-row gap-6 w-full
   justify-evenly"
      >
        {/* 3 and 4, make sure are the same questions! */}
        <Pie_chart_bim questionnaire={questionnariesHigherEduc[3]} />
        <Pie_chart_bim
          questionnaire={questionnariesHigherEduc[4]}
          increaseTextHeight
        />
      </div>

      <div
        className="flex flex-row gap-6 w-full
   justify-evenly"
      >
        <Bar_chart_bim sectionX={section1[1]} />
        <Bar_chart_bim sectionX={section1[5]} />
      </div>
      <div
        className="flex flex-row gap-6 w-full
   justify-evenly"
      >
        <Bar_chart_bim sectionX={section1[6]} increaseTextHeight />
        <Bar_chart_bim sectionX={section1[7]} />
      </div>
      <div
        className="flex flex-row gap-6 w-full
   justify-evenly"
      >
        <Bar_chart_bim sectionX={section1[8]} />
        <Bar_chart_bim sectionX={section1[9]} />
      </div>
      <div
        className="flex flex-row gap-6
   w-full justify-evenly"
      >
        <Bar_chart_bim sectionX={section1[10]} />
        <Bar_chart_bim sectionX={section1[11]} />
      </div>
      <div
        className="flex flex-row gap-6 w-full
   justify-evenly"
      >
        <Bar_chart_bim sectionX={section1[12]} />
        <Bar_chart_bim sectionX={section1[13]} />
      </div>
      <div
        className="flex flex-row gap-6 w-full
   justify-evenly"
      >
        <Bar_chart_bim sectionX={section1[14]} />
        <Bar_chart_bim sectionX={section1[15]} />
      </div>
    </div>
  );
}
