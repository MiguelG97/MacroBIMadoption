import { useAppDispatch, useAppSelector } from "@/core/shared/redux/store";
import {
  IconAffiliate,
  IconBook,
  IconBuildingStore,
  IconSchool,
  IconSearch,
} from "@tabler/icons-react";
import { DM_Sans, Poppins } from "next/font/google";
import { useState } from "react";
import {
  setSelectedSectIndex,
  setSelectedSection,
} from "../controllers/section_quest_slice";

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

  //constants
  const sections = [
    {
      name: "Higher Education Programmes",
      icon: (
        <IconSchool
          color={`${selectedSectionIndex === 0 ? "#4318FF" : "#A3AED0"} `}
        />
      ),
    },
    {
      name: "Short BIM Training Courses",
      icon: (
        <IconBook
          color={`${selectedSectionIndex === 1 ? "#4318FF" : "#A3AED0"} `}
        />
      ),
    },
    {
      name: "Market-Scale Educational Framework",
      icon: (
        <IconBuildingStore
          color={`${selectedSectionIndex === 2 ? "#4318FF" : "#A3AED0"} `}
        />
      ),
    },
    {
      name: "Collaboration between Academia, Government and Industry",
      icon: (
        <IconAffiliate
          color={`${selectedSectionIndex === 3 ? "#4318FF" : "#A3AED0"} `}
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
      className={`w-[29rem] min-w-[29rem]  bg-white
pl-16 pr-[3.2rem] py-[5.6rem] flex flex-col gap-[3.2rem] text-txcolor-200`}
    >
      {/* 1) title */}
      <div className="w-full flex flex-row  text-center">
        <p
          className={`${poppings.className} uppercase text-[2.6rem]
        leading-[100%] tracking-normal `}
        >
          Macro BIM Adoption
        </p>
      </div>

      {/* 2) separator */}
      <div className="h-1 border-t-[1px] ml-[-4rem] mr-[-3.2rem]"></div>

      {/* 3) sections */}
      <div
        className={`flex flex-col gap-3 ${dmSans.className} 
        mr-[-3.2rem]`}
      >
        {sections.map((x, index) => (
          <div
            key={`sec-${index}`}
            className={`flex flex-row gap-[0.8rem] items-start py-[1.2rem] pl-[0.8rem]
            rounded-l-[1.2rem] duration-500 cursor-pointer 
            ${
              selectedSectionIndex === index
                ? "border-r-[0.4rem] border-r-quaternary-100 bg-bgneutral-100"
                : ""
            }`}
            onClick={() => onSectionClick(index, x.name)}
          >
            <div>{x.icon}</div>
            <p
              className={`${
                selectedSectionIndex === index
                  ? "text-txcolor-200 font-bold"
                  : "text-txcolor-400"
              }  
              line-clamp-2 text-[1.6rem]`}
            >
              {x.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
