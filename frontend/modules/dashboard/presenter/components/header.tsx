import { useAppSelector } from "@/core/shared/redux/store";
import { DM_Sans } from "next/font/google";
const dmSans = DM_Sans({
  weight: ["500"],
  subsets: ["latin"],
});
export default function Header() {
  const { selectedSectionName } = useAppSelector(
    (state) => state.sectionQst
  );
  return (
    <div
      className={`h-[60px] w-full  ${dmSans.className}
flex flex-row items-center px-[28px] `}
    >
      <div
        className="flex flex-col  text-[#707EAE]
      "
      >
        <div className="flex flex-row text-[14px]">
          <p>{`Dashboards \xa0\xa0\xa0/`}</p>
          <p>{`\xa0\xa0\xa0 ${selectedSectionName}`}</p>
        </div>
      </div>
    </div>
  );
}
