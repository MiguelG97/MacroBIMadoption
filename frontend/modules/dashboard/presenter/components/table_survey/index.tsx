import {
  section1,
  section2,
  section5,
  section6,
} from "@/core/shared/constants/questions";
import {
  useAppDispatch,
  useAppSelector,
} from "@/core/shared/redux/store";
import {
  ChartDataItem,
  ISectionItem,
  questionnaire,
} from "@/core/shared/types/section_Questionnarie";
import {
  countAnswer,
  ProcessDataUtils,
} from "@/modules/dashboard/domain/process_data/process_data";
import React, {
  useEffect,
  useState,
} from "react";

export default function Table_survey({
  sectionX,
}: {
  sectionX: ISectionItem;
}) {
  const dispatch = useAppDispatch();

  const { value } = useAppSelector(
    (state) => state.questionnarieSlice
  );
  //states
  const [questionnaire, setQuestionnarie] =
    useState<questionnaire>();

  useEffect(() => {
    //bussiness logic
    const answerCounter: countAnswer | null =
      ProcessDataUtils.processData(
        sectionX,
        true
      );
    if (!answerCounter) return; //in case it's null
    console.log(answerCounter);
    //5) store the accumulated data and question name in a hook state
    let finalValues = Object.values(
      answerCounter
    ) as [
      {
        answerName: string;
        count: number;
      }
    ];

    //reorder the data
    finalValues = finalValues.sort(
      (a, b) => b.count - a.count
    );

    //Transform the data
    let chartData: ChartDataItem[] =
      finalValues.map((x) => {
        return {
          name: x.answerName,
          value: x.count,
        };
      });
    setQuestionnarie({
      question: sectionX.default,
      chartData,
    });
  }, [value]);
  return <div>index</div>;
}
