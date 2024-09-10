export interface IProtocolSection {
  id: number;
  name: string;
  icon: (selectedSectionIndex: number) => JSX.Element;
}
export interface IProtocol {
  id: string;
  protocolName: string;
  onClickSection: (index: number, sectionName: string) => void;
  sections: IProtocolSection[];
}
