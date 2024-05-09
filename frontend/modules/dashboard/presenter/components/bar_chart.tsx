import { COLORS } from "@/core/shared/constants/theme";
import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "Yes", value: 35 },
  { name: "Not sure", value: 31 },
  { name: "No", value: 27 },
  { name: "Yes", value: 22 },
  { name: "Not sure", value: 21 },
  { name: "No", value: 19 },
  { name: "Yes", value: 15 },
  { name: "Not sure", value: 11 },
  { name: "No", value: 6 },
];

export default function Bar_chart_bim() {
  return (
    <div
      className="bg-[#f7f9fb] w-[632px] h-[620px]
  rounded-2xl flex flex-col p-[24px]"
    >
      <p
        className="secondary_100 line-clamp-2 font-semibold
      text-[14px]"
      >
        Does your institution offer BIM-related
        educational content within its programmes?
      </p>
      <div
        className="flex flex-row justify-between items-center
      w-full h-full"
      >
        <ResponsiveContainer
          width={"100%"}
          height={"100%"}
        >
          <BarChart
            layout="vertical"
            data={data}
            margin={{
              top: 20,
              right: 10,
              bottom: 0,
              left: 0,
            }}
          >
            <Tooltip />
            <CartesianGrid
              fill="#f7f9fb"
              horizontal={false}
              stroke="#ebedef"
            />
            <XAxis
              domain={[0, 40]}
              axisLine={false}
              tickLine={false}
              type="number"
              dataKey={"value"}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              dataKey="name"
              type="category"
            />
            <Bar
              // background={{ fill: "#eee" }}
              radius={[0, 6, 6, 0]}
              dataKey="value"
              fill={COLORS[0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
