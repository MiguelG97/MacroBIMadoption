import {
  DataGrid,
  GridColDef,
  GridColumnHeaderParams,
  GridRenderCellParams,
  GridRowsProp,
} from "@mui/x-data-grid";

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

  useEffect(() => {
    console.log(questionnaire?.chartData);
  }, [questionnaire]);

  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Name",
      width: 800,
      renderHeader: (
        params: GridColumnHeaderParams
      ) => {
        return (
          <div
            className="text-[#A3AED0]  font-medium
          tracking-[2px]"
          >
            NAME
          </div>
        );
      },
      renderCell: (
        params: GridRenderCellParams
      ) => {
        return <p className="">{params.value}</p>;
      },
    },
    {
      field: "value",
      headerName: "Quantity",
      width: 100,
      renderHeader: (
        params: GridColumnHeaderParams
      ) => {
        return (
          <div
            className="text-[#A3AED0]  font-medium
          tracking-[2px]"
          >
            QUANTITY
          </div>
        );
      },
      renderCell: (
        params: GridRenderCellParams
      ) => {
        return <p className="">{params.value}</p>;
      },
    },
  ];

  return (
    <div
      className="bg-[#ffffff] rounded-2xl flex flex-col
  p-[24px] items-center w-full h-min
  shadow-[0_25px_50px_-22px_rgb(0,0,0,0.1)] max-w-[1400px]"
    >
      {questionnaire &&
        questionnaire.chartData.length > 0 && (
          <>
            <div className=" max-w-[432px] text-center">
              <p
                className="secondary_100 line-clamp-2 font-semibold
      text-[15px]"
              >
                {questionnaire?.question}
              </p>
            </div>

            <div
              className="flex flex-row justify-between items-center
        h-[300px] w-full pt-1"
            >
              <DataGrid
                sx={{ border: "0px solid black" }}
                rows={questionnaire?.chartData.map(
                  (x, index) => {
                    x.id = index;
                    return x;
                  }
                )}
                columns={columns}
                hideFooter
                rowSelection={false}
                disableColumnResize
                disableColumnMenu
                disableColumnSorting
                showColumnVerticalBorder={true}
              />
            </div>
          </>
        )}

      {questionnaire &&
        questionnaire.chartData.length === 0 && (
          <>
            <div
              className="h-[350px] animate-pulse flex flex-col
  gap-2 w-full"
            >
              <div
                className="min-w-[860px] w-full  bg-slate-200 h-8 
        mt-6"
              />
              <div
                className="flex flex-row gap-6 items-center justify-center
        h-full "
              >
                <div className="h-[270px] w-full bg-slate-200" />
              </div>
            </div>
          </>
        )}
    </div>
  );
}
