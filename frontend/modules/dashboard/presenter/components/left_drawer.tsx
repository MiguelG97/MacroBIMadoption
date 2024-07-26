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
      name: "Higher education programmes",
      icon: (
        <IconSchool
          color={`${selectedSectionIndex === 0 ? "#4318FF" : "#A3AED0"} `}
        />
      ),
    },
    {
      name: "Short BIM training courses",
      icon: (
        <IconBook
          color={`${selectedSectionIndex === 1 ? "#4318FF" : "#A3AED0"} `}
        />
      ),
    },
    {
      name: "Market-scale educational framework",
      icon: (
        <IconBuildingStore
          color={`${selectedSectionIndex === 2 ? "#4318FF" : "#A3AED0"} `}
        />
      ),
    },
    {
      name: "Collaboration between academia, government and industry",
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
      className={`w-[290px] min-w-[290px]  
pl-10 pr-8 py-14 flex flex-col gap-8 text-[#2B3674]`}
    >
      {/* 1) title */}
      <div className="w-full flex flex-row  text-center">
        <p
          className={`${poppings.className} uppercase text-[26px]
        leading-[100%] tracking-normal `}
        >
          Macro BIM Adoption
        </p>
      </div>

      {/* 2) separator */}
      <div className="h-1 border-t-[1px] ml-[-40px] mr-[-32px]"></div>

      {/* 3) sections */}
      {/* <p className="primary_100">Sections</p> */}
      <div
        className={`flex flex-col gap-3 ${dmSans.className} 
        mr-[-32px]`}
      >
        {sections.map((x, index) => (
          <div
            key={`sec-${index}`}
            className={`flex flex-row gap-2 items-start py-3 pl-2
            rounded-l-xl duration-500 cursor-pointer 
            ${
              selectedSectionIndex === index
                ? "border-r-[4px] border-r-[#4318FF] bg-[#f4f4f4]"
                : ""
            }`}
            onClick={() => onSectionClick(index, x.name)}
          >
            <div>{x.icon}</div>
            <p
              className={`${
                selectedSectionIndex === index
                  ? "text-[#2B3674] font-bold"
                  : "text-[#A3AED0]"
              }  
              line-clamp-2 text-[16px]`}
            >
              {x.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
