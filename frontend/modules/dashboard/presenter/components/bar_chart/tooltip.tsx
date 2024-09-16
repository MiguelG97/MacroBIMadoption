import { useAppSelector } from "@/core/shared/redux/store";
import { Props } from "recharts/types/component/DefaultTooltipContent";

export default function Render_Tooltip(
  props: Props<number | string | Array<number | string>, number | string>
) {
  const { activeToolTipAccumValue } = useAppSelector(
    (state) => state.campaignSecSlice
  );

  if (
    !props.payload ||
    props.payload.length === 0 ||
    activeToolTipAccumValue === 0
  )
    return null;
  const { payload } = props;
  // console.log(payload);
  //there is no access to the total accumulated number!
  return (
    <div
      className="w-min h-min flex bg-[#f4f7fe] p-[1.6rem]
      rounded-[1.2rem] backdrop-blur-2xl bg-opacity-10 gap-[1.6rem]
      items-center"
    >
      <p className="text-[1.4rem]">{payload[0].payload.name}</p>

      <div className="text-[1.4rem] flex gap-2">
        <p>{`${payload[0].value}`}</p>
        <p className="text-[1.4rem]">{`(${(
          ((payload[0].value as number) * 100) /
          activeToolTipAccumValue
        ).toFixed(1)}%)`}</p>
      </div>
    </div>
  );
}
