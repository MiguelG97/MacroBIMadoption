import {
  DataGrid,
  GridColDef,
  GridColumnHeaderParams,
  GridRenderCellParams,
} from "@mui/x-data-grid";
import type {} from "@mui/x-data-grid/themeAugmentation";

import { useAppSelector } from "@/core/shared/redux/store";

import React, { useEffect, useState } from "react";
import { IQuestionnaire } from "@/core/shared/types/postgresql_schema_types";
import { IChartDataItem } from "@/core/shared/types/chart_types";
import { ProcessDataModel } from "@/modules/dashboard/domain/process_data_app/process_data_model";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { themeTailwind } from "@/core/shared/theme/tailwindTheme";
import { FilterApp } from "@/modules/dashboard/domain/filter_app/filterApp";

export default function Table_survey({
  questionnaire,
  isTableAlone = true,
}: {
  questionnaire: IQuestionnaire;
  isTableAlone?: boolean;
}) {
  const { answers, users } = useAppSelector((state) => state.dbSlice);
  const { countryFilter } = useAppSelector((state) => state.filterSlice);

  /**States */
  const { colors: themeColor } = themeTailwind.theme;
  const [tableData, setTableData] = useState<IChartDataItem[]>([]);
  /**Effects */
  useEffect(() => {
    if (answers.length === 0 || !questionnaire) return;
    // //filter the answers
    // const filteredAnswers = answers.filter(
    //   (x) => x.questionId === questionnaire.questionId
    // );
    const filteredAnswers = FilterApp.filterAnswers({
      answers,
      users,
      questionnaire,
      countryFilter,
    });

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
    const tableData: IChartDataItem[] = choicesCountedValues.map((x, id) => {
      return {
        name: x.choice,
        value: x.count,
        id,
      };
    });

    setTableData(tableData);
  }, [answers, questionnaire, countryFilter]);

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
          columnHeader: {
            ":focus": {
              outline: "none",
            },
          },
          cellCheckbox: {
            ":focus-within": {
              outline: "none",
            },
          },
        },
      },
      MuiCheckbox: {
        styleOverrides: {
          root: {
            "&.Mui-disabled": {
              "[data-testid='CheckBoxOutlineBlankIcon']": {
                color: themeColor.disabled[100],
              },
              "[data-testid='IndeterminateCheckBoxIcon']": {
                color: themeColor.disabled[100],
              },
            },
            "[data-testid='CheckBoxOutlineBlankIcon']": {
              color: "rgba(0,0,0,0.6)",
            },
            "[data-testid='CheckBoxIcon']": {
              color: themeColor.tertiary[100],
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
                checkboxSelection
                disableMultipleRowSelection
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
