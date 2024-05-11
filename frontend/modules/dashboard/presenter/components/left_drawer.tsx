import { useAppDispatch } from "@/core/shared/redux/store";
import {
  IconAffiliate,
  IconBook,
  IconSchool,
  IconSearch,
} from "@tabler/icons-react";
import {
  DM_Sans,
  Poppins,
} from "next/font/google";
import { useState } from "react";
import { setSelectedSection } from "../controllers/section_quest_slice";

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
  const dispatch = useAppDispatch();
  const [selectedIndex, setSelectedIndex] =
    useState<number>(0);

  //constants
  const sections = [
    {
      name: "Educational units",
      icon: (
        <IconSchool
          color={`${
            selectedIndex === 0
              ? "#4318FF"
              : "#A3AED0"
          } `}
        />
      ),
    },
    {
      name: "Research",
      icon: (
        <IconSearch
          color={`${
            selectedIndex === 1
              ? "#4318FF"
              : "#A3AED0"
          } `}
        />
      ),
    },
    {
      name: "Short courses and BIM-related training",
      icon: (
        <IconBook
          color={`${
            selectedIndex === 2
              ? "#4318FF"
              : "#A3AED0"
          } `}
        />
      ),
    },
    {
      name: "Collaboration between academia, governement, and/or industry",
      icon: (
        <IconAffiliate
          color={`${
            selectedIndex === 3
              ? "#4318FF"
              : "#A3AED0"
          } `}
        />
      ),
    },
  ];

  //handlers
  const onSectionClick = (
    index: number,
    sectionName: string
  ) => {
    setSelectedIndex(index);
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
            className={`flex flex-row gap-2 items-start py-2 pl-2
            rounded-l-xl duration-500
            ${
              selectedIndex === index
                ? "border-r-[4px] border-r-[#4318FF] bg-[#f4f4f4]"
                : ""
            }`}
            onClick={() =>
              onSectionClick(index, x.name)
            }
          >
            <div>{x.icon}</div>
            <p
              className={`${
                selectedIndex === index
                  ? "text-[#2B3674] font-bold"
                  : "text-[#A3AED0]"
              }  cursor-pointer 
              line-clamp-2 text-[16px] leading-6 `}
            >
              {x.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
