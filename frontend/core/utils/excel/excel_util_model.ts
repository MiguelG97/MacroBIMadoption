import { read, writeFileXLSX } from "xlsx";

export const excelUtils = {
  readExcel: async ({ file }: { file: File }) => {
    const arrayBuffer = await file.arrayBuffer();
    const workbook = read(arrayBuffer);
    return workbook;
  },
};
