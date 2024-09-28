import { DM_Sans, Poppins } from "next/font/google";

import TreeView from "./tree_view";
import { IProtocol } from "../../types/protocol_types";
import { eduLandSections } from "../../constants/section_tabs";

const poppings = Poppins({
  weight: "700",
  subsets: ["latin"],
});
const dmSans = DM_Sans({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
});

export default function Left_drawer() {
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

      {/* 3) Sections */}
      <div
        className={`flex flex-col gap-3 ${dmSans.className} 
        mr-[-3.2rem] h-full overflow-y-auto`}
      >
        <TreeView />
      </div>
    </div>
  );
}

//reusable component where we pass category along its sessions
