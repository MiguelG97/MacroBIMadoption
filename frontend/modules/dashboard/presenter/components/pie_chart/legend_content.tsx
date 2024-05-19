import { Props } from "recharts/types/component/DefaultLegendContent";

export default function Render_legend_content(
  props: Props
) {
  // console.log("lenged props: ", props);

  return (
    <div
      className="flex flex-col gap-2 items-start justify-center
       "
      style={{
        width: (props as any).chartWidth / 2.5,
      }}
    >
      {props.payload?.map((x, index) => {
        const payload: any = x.payload;
        return (
          <div
            key={`item-${index}`}
            className="flex  w-full gap-1
          items-center justify-between "
          >
            <div className=" flex  gap-2 ">
              <div
                style={{
                  backgroundColor: x.color,
                }}
                className={`rounded-full h-2 w-2 mt-[6px]`}
              ></div>
              <p className="flex-1">{x.value}</p>
            </div>
            <div>
              <p className="flex-1">{`${
                (payload?.percent * 100).toFixed(
                  1
                ) ?? 0
              }%`}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
