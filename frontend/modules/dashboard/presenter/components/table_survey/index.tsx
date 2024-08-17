import {
  DataGrid,
  GridColDef,
  GridColumnHeaderParams,
  GridRenderCellParams,
  GridRowsProp,
} from "@mui/x-data-grid";
import type {} from "@mui/x-data-grid/themeAugmentation";

import { useAppDispatch, useAppSelector } from "@/core/shared/redux/store";

import React, { useEffect, useState } from "react";
import { IQuestionnaire } from "@/core/shared/types/postgresql_schema_types";
import { ChartDataItem } from "@/core/shared/types/chart_types";
import { ProcessDataModel } from "@/modules/dashboard/domain/process_data/process_data_model";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

export default function Table_survey({
  questionnaire,
  isTableAlone = true,
}: {
  questionnaire: IQuestionnaire;
  isTableAlone?: boolean;
}) {
  const { answers } = useAppSelector((state) => state.dbSlice);

  /**States */
  const [tableData, setTableData] = useState<ChartDataItem[]>([]);
  /**Effects */
  useEffect(() => {
    if (answers.length === 0 || !questionnaire) return;
    //filter the answers
    const filteredAnswers = answers.filter(
      (x) => x.questionId === questionnaire.questionId
    );

    //bussiness logic
    const choicesCounted = ProcessDataModel._shared.countChoices({
      answers: filteredAnswers,
      questionnaire,
      unfoldOtherChoices: true,
    });

    //format the choices counted to conform to the chart data structure
    let choicesCountedValues = Object.values(choicesCounted) as [
      {
        choice: string;
        count: number;
      }
    ];

    //reorder the data
    choicesCountedValues = choicesCountedValues.sort(
      (a, b) => b.count - a.count
    );

    //change data format
    const tableData: ChartDataItem[] = choicesCountedValues.map((x, id) => {
      return {
        name: x.choice,
        value: x.count,
        id,
      };
    });

    setTableData(tableData);
  }, [answers, questionnaire]);

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ITEM",
      // width: 100,
      flex: 1,
      renderHeader: (params: GridColumnHeaderParams) => {
        return (
          <div
            className="text-[#A3AED0]  font-medium
          tracking-[2px] text-[1.4rem]"
          >
            ITEM
          </div>
        );
      },
      renderCell: (params: GridRenderCellParams) => {
        return <p className="opacity-60 text-[1.4rem]">{params.value + 1}</p>;
      },
    },
    {
      field: "name",
      headerName: "REPOSITORY",
      flex: 16,
      // width: repColWidth,
      renderHeader: (params: GridColumnHeaderParams) => {
        return (
          <div
            className="text-[#A3AED0]  font-medium
          tracking-[2px] text-[1.4rem]"
          >
            REPOSITORY
          </div>
        );
      },
      renderCell: (params: GridRenderCellParams) => {
        return <p className="text-[1.4rem]">{params.value}</p>;
      },
    },
  ];

  /**MuiTheme */
  const theme = createTheme({
    components: {
      MuiDataGrid: {
        styleOverrides: {
          cell: {
            ":focus": {
              outline: "none",
            },
          },
        },
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <div
        className={`bg-[#ffffff] rounded-[1.6rem] flex flex-col
  p-[24px] items-center w-full h-min
  shadow-[0_25px_50px_-22px_rgb(0,0,0,0.1)] ${
    isTableAlone ? "max-w-[143rem]" : "max-w-[70rem]"
  } `}
      >
        {tableData.length > 0 && (
          <>
            <div
              className="min-w-[400px] max-w-[600px] text-center
          h-[3.45rem]"
            >
              <p
                className="text-txcolor-100 line-clamp-3 font-semibold
      text-[15px]"
              >
                {questionnaire.title}
              </p>
            </div>

            <div
              className={`flex flex-row justify-between items-center
              ${isTableAlone ? "h-[300px]" : "h-[230px]"}  w-full pt-1`}
            >
              <DataGrid
                sx={{ border: "0px solid black" }}
                rows={tableData.map((x, index) => {
                  x.id = index;
                  return x;
                })}
                columns={columns}
                hideFooter
                rowSelection={true}
                disableColumnResize
                disableColumnMenu
                disableColumnSorting
                showColumnVerticalBorder={true}
              />
            </div>
          </>
        )}

        {tableData.length === 0 && (
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
    </ThemeProvider>
  );
}
