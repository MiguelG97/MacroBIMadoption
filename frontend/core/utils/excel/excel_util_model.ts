import { read, writeFileXLSX } from "xlsx";

export const excelUtils = {
  readExcel: async () => {
    const res = await fetch(
      "/assets/files/BIMei Macro Adoption Study.xlsx"
    );
    if (res.ok) {
      const file = await res.arrayBuffer();
      const workbook = read(file);
      // console.log(workbook);
      return workbook;
    }
  },
};
