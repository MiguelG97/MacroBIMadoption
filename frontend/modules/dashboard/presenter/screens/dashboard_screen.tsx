import {
  Cell,
  Legend,
  Pie,
  PieChart,
} from "recharts";
import Header from "../components/header";
import Left_drawer from "../components/left_drawer";

const data = [
  { name: "Yes", value: 35 },
  { name: "Not sure", value: 21 },
  { name: "No", value: 13 },
];
const COLORS = [
  "#95a4fc",
  "#1c1c1c",
  "#baedbd",
  "#b1e3ff",
  "#a8c5da",
];
export default function Dashboard_screen() {
  return (
    <div className="flex flex-row h-screen">
      <Left_drawer />
      <div
        className="flex flex-col justify-start items-center
      flex-1"
      >
        <Header />
        <div
          className="flex flex-col justify-center items-center
        flex-1"
        >
          Charts
          <div
            className="bg-[#f7f9fb] w-[432px] h-[280px]
          rounded-2xl flex flex-col p-[24px]"
          >
            <p
              className="secondary_100 line-clamp-2 font-semibold
            text-[14px]"
            >
              Does your institution offer
              BIM-related educational content
              within its programmes?
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
        </div>
      </div>
    </div>
  );
}
