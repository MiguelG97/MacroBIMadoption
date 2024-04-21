"use client";
import { excelUtils } from "@/core/utils/readExcelUtils";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    excelUtils.readExcel();
  }, []);
  return <main>hey</main>;
}
