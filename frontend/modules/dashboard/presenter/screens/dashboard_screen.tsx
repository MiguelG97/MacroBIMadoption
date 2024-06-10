import Header from "../components/header";
import Left_drawer from "../components/left_drawer";
import Bar_chart_bim from "../components/bar_chart";
import Pie_chart_bim from "../components/pie_chart";
import { section1 } from "@/core/shared/constants/questions";
import Educ_Unit_dashboard from "./educational_units";
import Research_dashboard from "./research";
import { useAppSelector } from "@/core/shared/redux/store";
import Courses_bim_dashboard from "./courses_bim_training";
import Collaboration_dashboard from "./collaboration";

export default function Dashboard_screen() {
  //workaround for handling different client and server content
  // const [isClient, setIsClient] = useState(false);
  // useEffect(() => {
  //   setIsClient(true);
  // }, []);

  const { selectedSectionIndex } = useAppSelector(
    (select) => select.sectionQst
  );

  const screens = [
    <Educ_Unit_dashboard key={0} />,
    <Research_dashboard key={1} />,
    <Courses_bim_dashboard key={2} />,
    <Collaboration_dashboard key={3} />,
  ];
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
        {screens[selectedSectionIndex]}
      </div>
    </div>
  );
}
