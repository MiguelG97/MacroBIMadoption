export interface IAnswerSchema {
  Assessment: string;
  Campaign: string;
  "Item ID": string;
  "Item Title": string;
  "Item Type": string;
  "Statement Labels": string;
  "User Email": string;
  "User ID": string;
  "User Input": string;
  "User Labels": string;
  "User Name": string;
  "Verification Status": string;
}

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
