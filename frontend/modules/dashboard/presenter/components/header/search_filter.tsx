import { IconFilterFilled, IconSearch } from "@tabler/icons-react";
import React from "react";

export default function Search_filter() {
  return (
    <div
      className="flex bg-white rounded-[30px] px-4   mr-[10px]
    h-[42px] items-center gap-4"
    >
      <div
        className="bg-bgneutral-200 rounded-[50px] px-4 py-[6px] ml-[-4px]
      flex items-center gap-2 w-[200px]"
      >
        <IconSearch size={16} className="text-txcolor-200" />
        <p className="text-txcolor-300 font-extralight">Search...</p>
      </div>
      <div className="flex cursor-pointer items-center  h-full">
        <IconFilterFilled size={18} className="text-txcolor-300" />
      </div>
    </div>
  );
}
