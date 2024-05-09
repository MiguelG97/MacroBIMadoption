export interface ISectionItem {
  question_id: number;
  es: string;
  default: string;
  answers: string[];
  chart?: "bar" | "pie";
}

export interface ChartDataItem {
  name: string;
  value: number;
}

export interface questionnaire {
  question: string;
  chartData: ChartDataItem[];
}
