import { useAppSelector } from "@/core/shared/redux/store";
import { DM_Sans } from "next/font/google";
import Search_filter from "./search_filter";
const dmSans = DM_Sans({
  weight: ["500"],
  subsets: ["latin"],
});
export default function Header() {
  const { selectedSectionName } = useAppSelector((state) => state.sectionQst);
  return (
    <div
      className={`h-[10rem] w-full  ${dmSans.className}
flex flex-row items-center justify-between px-[2rem] `}
    >
      <div className="flex flex-col text-txcolor-400  ">
        <div className="flex flex-row text-[1.4rem] ">
          <p>{`Dashboards \xa0\xa0\xa0/`}</p>
          <p>{`\xa0\xa0\xa0 ${selectedSectionName}`}</p>
        </div>
        <p className=" font-bold text-[2.6rem]">{`${selectedSectionName}`}</p>
      </div>

      <Search_filter />
    </div>
  );
}
