import Header from "../components/header";
import Left_drawer from "../components/left_drawer";
import Pie_chart from "../components/pie_chart";

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
        flex-1"
        >
          <Pie_chart />
        </div>
      </div>
    </div>
  );
}
