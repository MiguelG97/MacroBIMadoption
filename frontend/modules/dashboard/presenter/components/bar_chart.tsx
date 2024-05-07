import React from "react";
import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "Yes", value: 35 },
  { name: "Not sure", value: 21 },
  { name: "No", value: 13 },
];
export default function Bar_chart_bim() {
  return (
    <div
      className="bg-[#f7f9fb] w-[432px] h-[280px]
rounded-2xl flex flex-col p-[24px]"
    >
      <p
        className="secondary_100 line-clamp-2 font-semibold
    text-[14px]"
      >
        {/* {questionnaire?.question} */}
        Does your institution offer BIM-related
        educational content within its programmes?
      </p>
      <div className="flex flex-row justify-between items-center">
        <BarChart
          data={data}
          width={730}
          height={250}
        >
          <XAxis dataKey={"name"} />
          <YAxis />
          <Bar dataKey="value" />
        </BarChart>
      </div>
    </div>
  );
}
