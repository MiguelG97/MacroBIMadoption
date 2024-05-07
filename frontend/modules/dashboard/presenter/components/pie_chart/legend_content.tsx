import { Props } from "recharts/types/component/DefaultLegendContent";

export default function Render_legend_content(
  props: Props
) {
  // console.log("lenged props: ", props);

  return (
    <div
      className="flex flex-col gap-2 items-center justify-center"
      style={{
        width: (props as any).chartWidth / 2.5,
      }}
    >
      {props.payload?.map((x, index) => {
        return (
          <div
            key={`item-${index}`}
            className="flex flex-row gap-4 
          items-center"
          >
            <div
              style={{ backgroundColor: x.color }}
              className={`rounded-full h-2 w-2 `}
            ></div>
            <p className="flex-1">{x.value}</p>
          </div>
        );
      })}
    </div>
  );
}
