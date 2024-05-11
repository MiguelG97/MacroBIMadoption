import {
  IconAffiliate,
  IconBook,
  IconSchool,
  IconSearch,
} from "@tabler/icons-react";
import { Poppins } from "next/font/google";

const poppings = Poppins({
  weight: "700",
  subsets: ["latin"],
});

export default function Left_drawer() {
  const sections = [
    {
      name: "Educational units",
      icon: <IconSchool color="#A3AED0" />,
    },
    {
      name: "Research",
      icon: <IconSearch color="#A3AED0" />,
    },
    {
      name: "Short courses and BIM-related training",
      icon: <IconBook color="#A3AED0" />,
    },
    {
      name: "Collaboration between academia, governement, and/or industry",
      icon: <IconAffiliate color="#A3AED0" />,
    },
  ];

  return (
    <div
      className={`w-[290px]  
pl-10 pr-8 py-14 flex flex-col gap-8 text-[#2B3674]`}
    >
      {/* 1) title */}
      <p
        className={`${poppings.className} uppercase text-[26px]
        leading-[100%] tracking-normal`}
      >
        Macro BIM Adoption
      </p>

      {/* 2) separator */}
      <div className="h-1 border-t-[1px] ml-[-40px] mr-[-32px]"></div>

      {/* 3) sections */}
      {/* <p className="primary_100">Sections</p> */}
      <div className="flex flex-col gap-5">
        {sections.map((x, index) => (
          <div
            key={`sec-${index}`}
            className="flex flex-row gap-1 items-center"
          >
            <div>{x.icon}</div>
            <p
              className={`text-[#A3AED0] cursor-pointer line-clamp-2`}
            >
              {x.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
