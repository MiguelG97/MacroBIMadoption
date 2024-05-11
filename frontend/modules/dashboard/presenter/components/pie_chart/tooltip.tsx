import { useAppSelector } from "@/core/shared/redux/store";
import { Props } from "recharts/types/component/DefaultTooltipContent";

export default function Render_Tooltip(
  props: Props<
    number | string | Array<number | string>,
    number | string
  >
) {
  const { activeToolTipAccumValue } =
    useAppSelector((state) => state.sectionQst);

  if (
    !props.payload ||
    props.payload.length === 0 ||
    activeToolTipAccumValue === 0
  )
    return null;
  const { payload } = props;

  //there is no access to the total accumulated number!
  return (
    <div
      className="w-min h-min flex bg-[#f4f7fe] p-4
      rounded-xl backdrop-blur-2xl bg-opacity-10 gap-4
      items-center"
    >
      <p className="">{payload[0].name}</p>

      <p>{`${(
        ((payload[0].value as number) * 100) /
        activeToolTipAccumValue
      ).toFixed(1)}%`}</p>
    </div>
  );
}
