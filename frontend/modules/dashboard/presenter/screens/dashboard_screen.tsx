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
    <div className="flex flex-row h-screen">
      <Left_drawer />
      <div
        className="flex flex-col justify-start items-center
      flex-1"
      >
        <Header />
        <div
          className="flex flex-col justify-center items-center
        flex-1 gap-4"
        >
          {/* {section1.map((x) => (
            <Pie_chart_bim
              key={x.question_id}
              section1ID={x.question_id.toString()}
            />
          ))} */}
          <Pie_chart_bim
            section1ID={"1665076540133"}
          />

          {/* <Bar_chart_bim /> */}
        </div>
      </div>
    </div>
  );
}
