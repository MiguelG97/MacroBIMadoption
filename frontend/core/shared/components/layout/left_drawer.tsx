import { DM_Sans, Poppins } from "next/font/google";

import TreeView from "./tree_view";
import Image from "next/image";
import Link from "next/link";

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
      className={`min-w-[24.5rem] w-[24.5rem] h-full bg-white  
        pt-[2.6rem] flex flex-col gap-[1.2rem] text-txcolor-200`}
    >
      {/* 1) title */}
      <div
        className="w-full flex flex-row  text-center items-center
       justify-center h-[12rem] mx-auto relative"
      >
        <Link href={"https://macroadoption.com"} target="_blank">
          <Image
            src={"/assets/images/macro-adoption-logo.png"}
            alt="macrobimadoption"
            width={120}
            height={120}
          />
        </Link>
      </div>

      {/* 2) separator */}
      <div className="h-1 border-t-[1px] mt-2"></div>

      {/* 3) Sections */}
      <div
        className={`flex flex-col gap-3 ${dmSans.className} 
         grow overflow-y-auto mt-6`}
      >
        <TreeView />
      </div>
    </div>
  );
}

//reusable component where we pass category along its sessions
