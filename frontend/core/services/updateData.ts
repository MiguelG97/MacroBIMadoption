import { utils } from "xlsx";
import { IExcelRowJson } from "../utils/excel/excel_types";
import { excelUtils } from "../utils/excel/excel_util_model";

export class UpdateData {
  public static async updateAcademicProgramme() {
    const workbook = await excelUtils.readExcel();
    const sheets = workbook?.Sheets;
    if (!sheets) return;
    let jsonRows: IExcelRowJson[] = utils.sheet_to_json(sheets.Answers);

    //i) find the academic programme questionnaire
    jsonRows = jsonRows.filter((x) => Number(x["Item ID"]) === 1662403538116);

    //ii) get user ids and link them with their user input data
    const userUpdateData: { userId: number; userInput: string[] }[] = [];

    jsonRows.map((x) => {
      if (!x["User Input"]) return;

      //override user input data if there are duplicates
      if (userUpdateData.some((a) => a.userId === Number(x["User ID"]))) {
        const index = userUpdateData.findIndex(
          (b) => b.userId === Number(x["User ID"])
        );
        const userData = userUpdateData[index];
        userData.userInput = x["User Input"].split(" | ");
        userUpdateData[index] = userData;
      }
      //if not, just push it to the list
      else {
        userUpdateData.push({
          userId: Number(x["User ID"]),
          userInput: x["User Input"].split(" | "),
        });
      }
    });
    console.log(userUpdateData);
  }
}
