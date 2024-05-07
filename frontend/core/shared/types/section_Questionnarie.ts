export interface ISectionItem {
  question_id: number;
  es: string;
  default: string;
  answers: string[];
  chart?: "bar" | "pie";
}
