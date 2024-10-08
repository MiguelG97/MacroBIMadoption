import {
  IconAffiliate,
  IconBook,
  IconBuildingStore,
  IconDeviceTabletOff,
  IconFileInvoice,
  IconSchool,
  IconShare,
  IconStretching2,
  IconTargetArrow,
} from "@tabler/icons-react";
import { themeTailwind } from "../theme/tailwindTheme";
import { IProtocolSection } from "../types/protocol_types";
const { colors } = themeTailwind.theme;

export const eduLandSections: IProtocolSection[] = [
  {
    id: 1,
    name: "Higher Education Programmes",
    icon: (activeSectionIndex: number) => (
      <IconSchool
        color={`${
          activeSectionIndex === 1 ? colors.tertiary[100] : colors.txcolor[400]
        } `}
      />
    ),
  },
  {
    id: 2,
    name: "Short BIM Training Courses",
    icon: (activeSectionIndex: number) => (
      <IconBook
        color={`${
          activeSectionIndex === 2 ? colors.tertiary[100] : colors.txcolor[400]
        } `}
      />
    ),
  },
  {
    id: 3,
    name: "Market-Scale Educational Framework",
    icon: (activeSectionIndex: number) => (
      <IconBuildingStore
        color={`${
          activeSectionIndex === 3 ? colors.tertiary[100] : colors.txcolor[400]
        } `}
      />
    ),
  },
  {
    id: 4,
    name: "Collaboration between Academia, Government and Industry",
    icon: (activeSectionIndex: number) => (
      <IconAffiliate
        color={`${
          activeSectionIndex === 4 ? colors.tertiary[100] : colors.txcolor[400]
        } `}
      />
    ),
  },
];

export const orgAdoSections: IProtocolSection[] = [
  {
    id: 5,
    name: "Organisational Information",
    icon: (activeSectionIndex: number) => (
      <IconFileInvoice
        color={`${
          activeSectionIndex === 5 ? colors.tertiary[100] : colors.txcolor[400]
        } `}
      />
    ),
  },
  {
    id: 6,
    name: "Adoption",
    icon: (activeSectionIndex: number) => (
      <IconStretching2
        color={`${
          activeSectionIndex === 6 ? colors.tertiary[100] : colors.txcolor[400]
        } `}
      />
    ),
  },
  {
    id: 7,
    name: "Non-adopters",
    icon: (activeSectionIndex: number) => (
      <IconDeviceTabletOff
        color={`${
          activeSectionIndex === 7 ? colors.tertiary[100] : colors.txcolor[400]
        } `}
      />
    ),
  },
  {
    id: 8,
    name: "Targeted deliverables",
    icon: (activeSectionIndex: number) => (
      <IconTargetArrow
        color={`${
          activeSectionIndex === 8 ? colors.tertiary[100] : colors.txcolor[400]
        } `}
      />
    ),
  },
  {
    id: 9,
    name: "Interoperability",
    icon: (activeSectionIndex: number) => (
      <IconShare
        color={`${
          activeSectionIndex === 9 ? colors.tertiary[100] : colors.txcolor[400]
        } `}
      />
    ),
  },
];
