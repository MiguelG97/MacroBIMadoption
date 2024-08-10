import { Props } from "recharts/types/component/DefaultLegendContent";

export default function Render_legend_content(props: Props) {
  // console.log("lenged props: ", props);

  return (
    <div
      className="flex flex-col gap-[0.8rem] items-start justify-center
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
            className="flex  w-full gap-[0.4rem]
          items-center justify-between "
          >
            <div className=" flex  gap-[0.4rem] ">
              <div
                style={{
                  backgroundColor: x.color,
                }}
                className={`rounded-full h-[0.4rem] w-[0.4rem] mt-[0.6rem]`}
              />
              <p className="flex-1 text-[14px]">{x.value}</p>
            </div>
            <div>
              <p className="flex-1 text-[14px]">{`${
                (payload?.percent * 100).toFixed(1) ?? 0
              }%`}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
