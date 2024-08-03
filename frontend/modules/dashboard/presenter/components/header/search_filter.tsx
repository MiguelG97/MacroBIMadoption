import { IconFilterFilled } from "@tabler/icons-react";
import React from "react";

export default function Search_filter() {
  return (
    <div className="bg-white rounded-[30px] px-4 py-2 flex mr-[10px]">
      <p className="text-txcolor-200">Filter</p>
      <div>
        <IconFilterFilled size={18} className="text-txcolor-100" />
      </div>
    </div>
  );
}
