import Pie_chart_bim from "../../components/pie_chart";
import Bar_chart_bim from "../../components/bar_chart";
import Table_survey from "../../components/table_survey";
import { useAppSelector } from "@/core/shared/redux/store";
import { useEffect, useState } from "react";
import { IQuestionnaire } from "@/core/shared/types/postgresql_schema_types";
import { SectionName } from "@/core/shared/enums/questionnary_enum";

export default function Educ_framework_tabView() {
  /**Redux toolkit */
  const { questionnaires } = useAppSelector((state) => state.dbSlice);
  /**States */
  const [questionnariesEducFramework, setQstEducFramework] = useState<
    IQuestionnaire[]
  >([]);
  /**Effects */
  //get all the questionnaires and render 1 chart per each questionnaire that belongs to this section
  useEffect(() => {
    if (questionnaires.length === 0) return;

    const filteredQuestionnaires = questionnaires.filter(
      (x) => x.sectionName === SectionName.Educational_framework
    );
    setQstEducFramework(filteredQuestionnaires);
  }, [questionnaires]);
  return (
    <div
      className="flex flex-col px-[2.4rem] pb-[2.4rem] pt-[0.8rem]
  h-full gap-[2.4rem] overflow-y-auto w-full"
    >
      <div
        className="flex flex-row gap-[2.4rem] w-full
justify-evenly "
      >
        <Pie_chart_bim
          questionnaire={questionnariesEducFramework[0]}
          isThreeLinesHeadline
        />
        <Bar_chart_bim questionnaire={questionnariesEducFramework[1]} />
      </div>
      <div
        className="flex flex-row gap-[2.4rem] w-full
justify-evenly "
      >
        <Bar_chart_bim
          questionnaire={questionnariesEducFramework[2]}
          fullWidth
          increaseHeight
        />
      </div>
      <div
        className="flex flex-row gap-[2.4rem] w-full
justify-evenly "
      >
        <Table_survey
          questionnaire={questionnariesEducFramework[3]}
          isTableAlone
        />
      </div>
      <div
        className="flex flex-row gap-[2.4rem] w-full
justify-evenly "
      >
        <Pie_chart_bim
          questionnaire={questionnariesEducFramework[4]}
          increaseHeight
          isThreeLinesHeadline
        />
        <Bar_chart_bim
          questionnaire={questionnariesEducFramework[5]}
          increaseHeight
        />
      </div>
      <div
        className="flex flex-row gap-[2.4rem] w-full
justify-evenly "
      >
        <Table_survey
          questionnaire={questionnariesEducFramework[6]}
          isTableAlone
        />
      </div>
    </div>
  );
}
