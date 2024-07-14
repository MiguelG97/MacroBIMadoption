export interface IPostQuestionnary {
  question_id: number;
  title: string;
  choices: string[];
  chartType?: "bar" | "pie" | "table";
  campaign: string; //Education Landscape | Organizational Adoption
  sectionName: string;
}

export interface IPostAnswer {
  questionId: number; //turn it into number from the IExcelRowJson Item ID field
  questionTitle: string; //foreign key for IPostQuestionnarie
  userAnswer: string;
  userEmail: string;
  userId: number;
  assigAuditor?: string;
  verifStatus?: string;
  auditorNote?: string;
  hashtags?: string;
  stateLabels: string;
  //   country: string;//query it from user table
}

export interface IPostUser {
  userId: number; //turn User ID into a number
  userEmail: string;
  userName: string;
  userLabels: string;
  country: string;
  bimAcademicProgram?: string;
}
