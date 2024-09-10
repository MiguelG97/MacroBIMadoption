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
    icon: (selectedSectionIndex: number) => (
      <IconSchool
        color={`${
          selectedSectionIndex === 1
            ? colors.quaternary[100]
            : colors.txcolor[400]
        } `}
      />
    ),
  },
  {
    id: 2,
    name: "Short BIM Training Courses",
    icon: (selectedSectionIndex: number) => (
      <IconBook
        color={`${
          selectedSectionIndex === 2
            ? colors.quaternary[100]
            : colors.txcolor[400]
        } `}
      />
    ),
  },
  {
    id: 3,
    name: "Market-Scale Educational Framework",
    icon: (selectedSectionIndex: number) => (
      <IconBuildingStore
        color={`${
          selectedSectionIndex === 3
            ? colors.quaternary[100]
            : colors.txcolor[400]
        } `}
      />
    ),
  },
  {
    id: 4,
    name: "Collaboration between Academia, Government and Industry",
    icon: (selectedSectionIndex: number) => (
      <IconAffiliate
        color={`${
          selectedSectionIndex === 4
            ? colors.quaternary[100]
            : colors.txcolor[400]
        } `}
      />
    ),
  },
];

export const orgAdoSections: IProtocolSection[] = [
  {
    id: 5,
    name: "Organisational Information",
    icon: (selectedSectionIndex: number) => (
      <IconFileInvoice
        color={`${
          selectedSectionIndex === 5
            ? colors.quaternary[100]
            : colors.txcolor[400]
        } `}
      />
    ),
  },
  {
    id: 6,
    name: "Adoption",
    icon: (selectedSectionIndex: number) => (
      <IconStretching2
        color={`${
          selectedSectionIndex === 6
            ? colors.quaternary[100]
            : colors.txcolor[400]
        } `}
      />
    ),
  },
  {
    id: 7,
    name: "Non-adopters",
    icon: (selectedSectionIndex: number) => (
      <IconDeviceTabletOff
        color={`${
          selectedSectionIndex === 7
            ? colors.quaternary[100]
            : colors.txcolor[400]
        } `}
      />
    ),
  },
  {
    id: 8,
    name: "Targeted deliverables",
    icon: (selectedSectionIndex: number) => (
      <IconTargetArrow
        color={`${
          selectedSectionIndex === 8
            ? colors.quaternary[100]
            : colors.txcolor[400]
        } `}
      />
    ),
  },
  {
    id: 9,
    name: "Interoperability",
    icon: (selectedSectionIndex: number) => (
      <IconShare
        color={`${
          selectedSectionIndex === 9
            ? colors.quaternary[100]
            : colors.txcolor[400]
        } `}
      />
    ),
  },
];
