import { section1 } from "@/core/shared/constants/questions";
import { COLORS } from "@/core/shared/constants/theme";
import { useAppSelector } from "@/core/shared/redux/store";
import { questionnarieItem } from "@/core/shared/types/questionnarieItem";
import { useEffect, useState } from "react";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  Tooltip,
} from "recharts";
interface ChartDataItem {
  name: string;
  value: number;
}

interface questionnaire {
  question: string;
  chartData: ChartDataItem[];
}

interface countAnswer {
  [index: number]: {
    answerName: string;
    count: number;
  };
}
// const data = [
//   { name: "Yes", value: 35 },
//   { name: "Not sure", value: 21 },
//   { name: "No", value: 13 },
// ];

export default function Pie_chart() {
  const section1ID = "1662403538119";

  const questionnarieAnsw = useAppSelector(
    (state) => state.questionnarieSlice
  );
  const [questionnaire, setQuestionnarie] =
    useState<questionnaire>();
  const [data, setData] = useState<
    ChartDataItem[]
  >([]);

  useEffect(() => {
    const anwers = questionnarieAnsw.value.filter(
      (x) => x["Item ID"] === section1ID
    );
    const answer1 = section1.find(
      (x) =>
        x.question_id.toString() === section1ID
    );
    if (!answer1) return;

    //Prepare the count values for each answer
    const answerCounter: countAnswer = {};
    for (const index in answer1.answers) {
      const answ = answer1.answers[index];
      answerCounter[index] = {
        answerName: answ,
        count: 0,
      };
    }

    for (const answer of anwers) {
      //strange, for some of them the User Input column does not exist!!
      //=> this means that it left a blank space! so do not take it into account
      const userInput = answer["User Input"];
      if (!userInput) continue;

      const values = Object.values(
        answerCounter
      ) as [
        {
          answerName: string;
          count: number;
        }
      ];
      const answFound = values.find((x) =>
        x.answerName.includes(userInput)
      );
      //if returns undefined, there is a mismatch between the answers!
      try {
        answFound!.count += 1;
        console.log("hey here", answFound);
      } catch (error) {
        console.log(error, userInput, answer);
      }
    }

    const finalValues = Object.values(
      answerCounter
    ) as [
      {
        answerName: string;
        count: number;
      }
    ];
    const chartData: ChartDataItem[] =
      finalValues.map((x) => ({
        name: x.answerName,
        value: x.count,
      }));
    setQuestionnarie({
      question: answer1.default,
      chartData,
    });

    // console.log("first chart: ", anwers);
  }, []);
  return (
    <div
      className="bg-[#f7f9fb] w-[432px] h-[280px]
  rounded-2xl flex flex-col p-[24px]"
    >
      <p
        className="secondary_100 line-clamp-2 font-semibold
    text-[14px]"
      >
        {questionnaire?.question}
        {/* Does your institution offer BIM-related
        educational content within its programmes? */}
      </p>

      <div className="flex flex-row justify-between items-center">
        <PieChart width={380} height={200}>
          <Pie
            data={questionnaire?.chartData}
            paddingAngle={5}
            label
            nameKey={"name"}
            dataKey={"value"}
            innerRadius={60}
            outerRadius={80}
          >
            {questionnaire?.chartData.map(
              (x, index) => (
                <Cell
                  stroke="0"
                  key={`cell-${index}`}
                  fill={`${COLORS[index]}`}
                />
              )
            )}
          </Pie>
          <Legend
            layout="vertical"
            align="right"
            verticalAlign="middle"
          />
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
}
