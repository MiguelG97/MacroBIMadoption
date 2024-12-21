import {
  EduSectionName,
  OrgSectionName,
} from "../enums/campaign_sections_enum";

//protocol <> campaign
export interface IProtocolSection {
  id: number;
  name: EduSectionName | OrgSectionName;
  icon: (activeSectionIndex: number) => JSX.Element;
}
export interface IProtocol {
  id: string;
  protocolName: string;
  onClickSection: (index: number, sectionName: string) => void;
  sections: IProtocolSection[];
}
