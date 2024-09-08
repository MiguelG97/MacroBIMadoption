"use client";
import { useAppDispatch, useAppSelector } from "@/core/shared/redux/store";
import {
  IconAffiliate,
  IconBook,
  IconBuildingStore,
  IconSchool,
  IconSearch,
} from "@tabler/icons-react";
import { DM_Sans, Poppins } from "next/font/google";
import {
  setSelectedSectIndex,
  setSelectedSection,
} from "../../../../modules/dashboard/presenter/controllers/section_quest_slice";
import { themeTailwind } from "../../theme/tailwindTheme";
import { Collapse } from "@mui/material";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

const poppings = Poppins({
  weight: "700",
  subsets: ["latin"],
});
const dmSans = DM_Sans({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
});

export default function Left_drawer() {
  //states
  const { selectedSectionIndex } = useAppSelector(
    (select) => select.sectionQst
  );
  const dispatch = useAppDispatch();
  const [isExpanded, setExpanded] = useState({ educ: false, org: false });

  //constants
  const { colors } = themeTailwind.theme;
  const elSections = [
    {
      id: 1,
      name: "Higher Education Programmes",
      icon: (
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
      icon: (
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
      icon: (
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
      icon: (
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
  const oaSections = [
    {
      id: 5,
      name: "Organisational Information",
      icon: (
        <IconSchool
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
      icon: (
        <IconBook
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
      icon: (
        <IconBuildingStore
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
      icon: (
        <IconAffiliate
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
      icon: (
        <IconAffiliate
          color={`${
            selectedSectionIndex === 9
              ? colors.quaternary[100]
              : colors.txcolor[400]
          } `}
        />
      ),
    },
  ];

  //handlers
  const onSectionClick = (index: number, sectionName: string) => {
    dispatch(setSelectedSectIndex(index));
    dispatch(setSelectedSection(sectionName));
  };

  return (
    <div
      className={`w-[29rem] h-full bg-white  pr-[3.2rem] 
        pt-[5.6rem] flex flex-col gap-[3.2rem] text-txcolor-200`}
    >
      {/* 1) title */}
      <div className="w-full flex flex-row  text-center pl-16">
        <p
          className={`${poppings.className} uppercase text-[2.6rem]
        leading-[100%] tracking-normal `}
        >
          Macro BIM Adoption
        </p>
      </div>

      {/* 2) separator */}
      <div className="h-1 border-t-[1px]  mr-[-3.2rem]"></div>

      {/* 3) elSections */}
      <div
        className={`flex flex-col gap-3 ${dmSans.className} 
        mr-[-3.2rem] h-full overflow-y-auto`}
      >
        <div className="flex flex-col gap-4">
          <div
            onClick={() =>
              setExpanded({ ...isExpanded, educ: !isExpanded.educ })
            }
            className="flex w-full items-center justify-between
          cursor-pointer pr-6 pl-8"
          >
            <p
              className="text-[1.6rem] text-txcolor-200 font-bold
            tracking-[0.2rem]"
            >
              EDUCATION LANDSCAPE
            </p>
            <div className="w-[2rem]">
              <IoIosArrowDown
                className={`${isExpanded.educ ? "rotate-180" : ""} 
                 `}
                color={colors.secondary[100]}
                size={20}
              />
            </div>
          </div>
          <Collapse
            className="pl-12"
            orientation="vertical"
            in={isExpanded.educ}
          >
            {elSections.map((section) => (
              <div
                key={section.id}
                className={`flex flex-row gap-[0.8rem] items-start py-[1rem] pl-[0.8rem]
            rounded-l-[1.2rem] transition-[background] duration-300 cursor-pointer  
            ${
              selectedSectionIndex === section.id
                ? "border-r-[0.4rem] border-r-quaternary-100 bg-bgneutral-100"
                : ""
            } hover:border-r-[0.4rem]`}
                onClick={() => onSectionClick(section.id, section.name)}
              >
                <div>{section.icon}</div>
                <p
                  className={`${
                    selectedSectionIndex === section.id
                      ? "text-txcolor-200 font-bold"
                      : "text-txcolor-400"
                  }  
              line-clamp-2 text-[1.5rem]`}
                >
                  {section.name}
                </p>
              </div>
            ))}
          </Collapse>
        </div>
        <div className="flex flex-col gap-4">
          <div
            onClick={() => setExpanded({ ...isExpanded, org: !isExpanded.org })}
            className={`flex w-full items-center justify-between
          cursor-pointer pr-6 pl-8 py-2 ${
            isExpanded.org
              ? "border-l-[0.4rem] border-l-quaternary-100 bg-bgneutral-100"
              : ""
          }`}
          >
            <p
              className="text-[1.6rem] text-txcolor-200 font-bold
            tracking-[0.2rem]"
            >
              ORGANIZATIONAL ADOPTION
            </p>
            <div className="w-[2rem]">
              <IoIosArrowDown
                className={`${isExpanded.org ? "rotate-180" : ""}`}
                color={
                  isExpanded.org
                    ? colors.quaternary[100]
                    : colors.secondary[100]
                }
                size={20}
              />
            </div>
          </div>
          <Collapse
            className="pl-12"
            orientation="vertical"
            in={isExpanded.org}
          >
            {oaSections.map((section) => (
              <div
                key={section.id}
                className={`flex flex-row gap-[0.8rem] items-start py-[1rem] pl-[0.8rem]
            rounded-l-[1.2rem] transition-[background] duration-300 cursor-pointer  
            ${
              selectedSectionIndex === section.id
                ? "border-r-[0.4rem] border-r-quaternary-100 bg-bgneutral-100"
                : ""
            } hover:border-r-[0.4rem]`}
                onClick={() => onSectionClick(section.id, section.name)}
              >
                <div>{section.icon}</div>
                <p
                  className={`${
                    selectedSectionIndex === section.id
                      ? "text-txcolor-200 font-bold"
                      : "text-txcolor-400"
                  }  
              line-clamp-2 text-[1.5rem]`}
                >
                  {section.name}
                </p>
              </div>
            ))}
          </Collapse>
        </div>
      </div>
    </div>
  );
}

//reusable component where we pass category along its sessions
