import Header from "../components/header";
import Left_drawer from "../components/left_drawer";
import Bar_chart_bim from "../components/bar_chart";
import Pie_chart_bim from "../components/pie_chart";
import { section1 } from "@/core/shared/constants/questions";

export default function Dashboard_screen() {
  //workaround for handling different client and server content
  // const [isClient, setIsClient] = useState(false);
  // useEffect(() => {
  //   setIsClient(true);
  // }, []);
  return (
    <div className="flex flex-row h-screen bg-[#ffffff]">
      {/* how to make it collabsible */}
      <Left_drawer />
      <div
        className="flex flex-col justify-start items-center
       bg-[#f4f7fe] w-full min-w-[1000px]"
      >
        <Header />

        {/* canvas */}
        <div
          className="flex flex-col p-6 
        h-full gap-6 overflow-y-auto w-full"
        >
          <div
            className="flex flex-row gap-6 w-full
           justify-evenly "
          >
            <Pie_chart_bim
              sectionX={section1[0]}
            />
            <Pie_chart_bim
              sectionX={section1[2]}
            />
          </div>
          <div
            className="flex flex-row gap-6 w-full
           justify-evenly"
          >
            <Pie_chart_bim
              sectionX={section1[3]}
            />
            <Pie_chart_bim
              sectionX={section1[4]}
            />
          </div>

          <div
            className="flex flex-row gap-6 w-full
           justify-evenly"
          >
            <Bar_chart_bim
              sectionX={section1[1]}
            />
            <Bar_chart_bim
              sectionX={section1[5]}
            />
          </div>
          <div
            className="flex flex-row gap-6 w-full
           justify-evenly"
          >
            <Bar_chart_bim
              sectionX={section1[6]}
            />
            <Bar_chart_bim
              sectionX={section1[7]}
            />
          </div>
          <div
            className="flex flex-row gap-6 w-full
           justify-evenly"
          >
            <Bar_chart_bim
              sectionX={section1[8]}
            />
            <Bar_chart_bim
              sectionX={section1[9]}
            />
          </div>
          <div
            className="flex flex-row gap-6
           w-full justify-evenly"
          >
            <Bar_chart_bim
              sectionX={section1[10]}
            />
            <Bar_chart_bim
              sectionX={section1[11]}
            />
          </div>
          <div
            className="flex flex-row gap-6 w-full
           justify-evenly"
          >
            <Bar_chart_bim
              sectionX={section1[12]}
            />
            <Bar_chart_bim
              sectionX={section1[13]}
            />
          </div>
          <div
            className="flex flex-row gap-6 w-full
           justify-evenly"
          >
            <Bar_chart_bim
              sectionX={section1[14]}
            />
            <Bar_chart_bim
              sectionX={section1[15]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
