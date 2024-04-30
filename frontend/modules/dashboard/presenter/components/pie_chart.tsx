import { COLORS } from "@/core/shared/constants/theme";
import { useAppSelector } from "@/core/shared/redux/store";
import { useEffect } from "react";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
} from "recharts";
const data = [
  { name: "Yes", value: 35 },
  { name: "Not sure", value: 21 },
  { name: "No", value: 13 },
];

export default function Pie_chart() {
  const questionnarieAnsw = useAppSelector(
    (state) => state.questionnarieSlice
  );

  useEffect(() => {
    const anwers = questionnarieAnsw.value.filter(
      (x) => x["Item ID"] === "1662403538119"
    );
    console.log("first chart: ", anwers);
  });
  return (
    <div
      className="bg-[#f7f9fb] w-[432px] h-[280px]
  rounded-2xl flex flex-col p-[24px]"
    >
      <p
        className="secondary_100 line-clamp-2 font-semibold
    text-[14px]"
      >
        Does your institution offer BIM-related
        educational content within its programmes?
      </p>

      <div className="flex flex-row justify-between items-center">
        <PieChart
          width={380}
          height={200}
          className=""
        >
          <Pie
            data={data}
            paddingAngle={5}
            nameKey={"name"}
            dataKey={"value"}
            innerRadius={60}
            outerRadius={80}
          >
            {data.map((x, index) => (
              <Cell
                stroke="0"
                key={`cell-${index}`}
                fill={`${COLORS[index]}`}
              />
            ))}
          </Pie>
          <Legend
            layout="vertical"
            align="right"
            verticalAlign="middle"
          />
        </PieChart>
      </div>
    </div>
  );
}
