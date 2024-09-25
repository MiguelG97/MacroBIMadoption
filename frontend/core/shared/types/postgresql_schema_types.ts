import { Chart } from "@/core/utils/generator/graphql";

export interface IQuestionnaire {
  questionId: number;
  title: string;
  choices: string[];
  chartType: Chart;
  campaign: string; //Education Landscape | Organisational Adoption
  sectionName: string;
}

export interface IAnswer {
  questionId: number; //turn it into number from the IExcelRowJson Item ID field
  questionTitle: string; //foreign key for IPostQuestionnarie
  userAnswer?: string;
  userEmail: string;
  userId: number;
  assigAuditor?: string;
  verifStatus?: string;
  auditorNote?: string;
  hashtags?: string;
  stateLabels: string;
  //   country: string;//query it from user table
}

export interface IUser {
  userId: number; //turn User ID into a number
  userEmail: string;
  userName: string;
  userLabels: string;
  country: string;
  academicProgramme?: string[];
}
