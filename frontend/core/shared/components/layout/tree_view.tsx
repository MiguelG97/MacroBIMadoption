"use client";

import { Collapse } from "@mui/material";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { themeTailwind } from "../../theme/tailwindTheme";
import { IProtocolSection } from "../../types/protocol_types";
import {
  setSelectedSectIndex,
  setSelectedSection,
} from "@/modules/dashboard/presenter/controllers/section_quest_slice";
import {
  eduLandSections,
  orgAdoSections,
} from "../../constants/protocol_sections";
///In another ticket, take care of making this iterative and scalable!

export default function TreeView() {
  //     {
  //   protocols,
  // }: {
  //   protocols: {
  //     id: number;
  //     protocolName: string;
  //     onClickSection: (index: number, sectionName: string) => void;
  //     sections: IProtocolSection[];
  //   }[];
  // }
  /**Redux */
  const dispatch = useAppDispatch();

  const { selectedSectionIndex } = useAppSelector(
    (select) => select.sectionQst
  );
  const { colors } = themeTailwind.theme;

  /**States */
  const [isExpanded, setExpanded] = useState({ educ: true, org: false });

  //   const initState: any = {};
  //   protocols
  //     .map((p) => p.protocolName.split(" ")[0])
  //     .reduce(
  //       (object, name) => Object.assign(object, { [name]: false }),
  //       initState
  //     );

  /**Handlers */
  const onSectionClick = (index: number, sectionName: string) => {
    dispatch(setSelectedSectIndex(index));
    dispatch(setSelectedSection(sectionName));
  };
  const onClickExpandEducation = () => {
    setExpanded({ org: false, educ: !isExpanded.educ });
  };
  const onClickExpandOrganization = () => {
    setExpanded({ educ: false, org: !isExpanded.org });
  };
  return (
    <>
      <div className="flex flex-col ">
        <div
          onClick={onClickExpandEducation}
          className={`flex w-full items-center justify-between
          cursor-pointer pr-6 pl-8 py-2 ${
            isExpanded.educ
              ? "border-l-[0.4rem] border-l-quaternary-100 bg-bgneutral-200"
              : ""
          }`}
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
        <Collapse className="pl-12" orientation="vertical" in={isExpanded.educ}>
          {eduLandSections.map((section) => (
            <div
              key={section.id}
              className={`flex flex-row gap-[0.8rem] items-start py-[1rem] pl-[0.8rem]
            transition-[background] duration-300 cursor-pointer  
            ${
              selectedSectionIndex === section.id
                ? "" //"border-r-[0.4rem] border-r-quaternary-100 "
                : "" //"hover:border-r-[0.4rem] hover:border-r-bgneutral-200"
            } `}
              onClick={() => onSectionClick(section.id, section.name)}
            >
              <div>{section.icon(selectedSectionIndex)}</div>
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
      <div className="flex flex-col ">
        <div
          onClick={onClickExpandOrganization}
          className={`flex w-full items-center justify-between
          cursor-pointer pr-6 pl-8 py-2 ${
            isExpanded.org
              ? "border-l-[0.4rem] border-l-quaternary-100 bg-bgneutral-200"
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
              color={colors.secondary[100]}
              size={20}
            />
          </div>
        </div>
        <Collapse className="pl-12" orientation="vertical" in={isExpanded.org}>
          {orgAdoSections.map((section) => (
            <div
              key={section.id}
              className={`flex flex-row gap-[0.8rem] items-start py-[1rem] pl-[0.8rem]
            transition-[background] duration-300 cursor-pointer 
            ${
              selectedSectionIndex === section.id
                ? "" //border-r-[0.4rem] border-r-quaternary-100
                : "" //"hover:border-r-[0.4rem] hover:border-r-bgneutral-200"
            }`}
              onClick={() => onSectionClick(section.id, section.name)}
            >
              <div>{section.icon(selectedSectionIndex)}</div>
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
      {/* {protocols.map((protocol) => (
        <div className="flex flex-col " key={protocol.id}>
          <div
            onClick={onClickExpand}
            className={`flex w-full items-center justify-between
          cursor-pointer pr-6 pl-8 py-2 ${
            isExpanded.educ
              ? "border-l-[0.4rem] border-l-quaternary-100 bg-bgneutral-200"
              : ""
          }`}
          >
            <p
              className="text-[1.6rem] text-txcolor-200 font-bold
            tracking-[0.2rem]"
            >
              {protocol.protocolName}
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
            {protocol.sections.map((section) => (
              <div
                key={section.id}
                className={`flex flex-row gap-[0.8rem] items-start py-[1rem] pl-[0.8rem]
            transition-[background] duration-300 cursor-pointer  
            ${
              selectedSectionIndex === section.id
                ? "" //"border-r-[0.4rem] border-r-quaternary-100 "
                : "" //"hover:border-r-[0.4rem] hover:border-r-bgneutral-200"
            } `}
                onClick={() =>
                  protocol.onClickSection(section.id, section.name)
                }
              >
                <div>{section.icon(selectedSectionIndex)}</div>
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
      ))} */}
    </>
  );
}
