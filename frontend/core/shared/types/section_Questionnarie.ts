export interface IAnswerPostgres {
  Assessment: string;
  Campaign: string;
  Item_ID: string;
  Item_Title: string;
  Item_Type: string;
  Statement_Labels: string;
  User_Email: string;
  User_ID: string;
  User_Input: string;
  User_Labels: string;
  User_Name: string;
  Verification_Status: string;
}

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
