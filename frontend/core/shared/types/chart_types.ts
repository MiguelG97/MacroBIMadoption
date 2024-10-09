export interface IChartDataItem {
  name: string;
  value: number;
  id?: number;
  abbreviation?: string;
}

export enum ArrangePattern {
  descending,
  byAnswerChoices,
}
