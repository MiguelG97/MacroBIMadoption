import { read, writeFileXLSX } from "xlsx";

export const excelUtils = {
  readExcel: async ({ path }: { path: string }) => {
    const res = await fetch(path);
    if (res.ok) {
      const file = await res.arrayBuffer();
      const workbook = read(file);
      // console.log(workbook);
      return workbook;
    }
  },
};
