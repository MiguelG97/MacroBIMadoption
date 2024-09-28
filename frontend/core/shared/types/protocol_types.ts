//protocol <> campaign
export interface IProtocolSection {
  id: number;
  name: string;
  icon: (activeSectionIndex: number) => JSX.Element;
}
export interface IProtocol {
  id: string;
  protocolName: string;
  onClickSection: (index: number, sectionName: string) => void;
  sections: IProtocolSection[];
}
