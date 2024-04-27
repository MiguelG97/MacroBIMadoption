export default function Dashboard_screen() {
  return (
    <div className="flex flex-row h-screen">
      <div
        className="w-[212px]  border-r-2 border-r-[#f1f1f1]
      px-4 py-5 flex flex-col gap-4"
      >
        <p className="primary_100">Sections</p>
        <div className="flex flex-col gap-1">
          <p className="secondary_100 pl-4 line-clamp-2">
            Educational units
          </p>
          <p className="secondary_100 pl-4 line-clamp-2">
            Research
          </p>
          <p className="secondary_100 pl-4 line-clamp-2">
            Short courses and BIM-related training
          </p>
        </div>
      </div>
      <div
        className="flex flex-col justify-center items-center
      flex-1"
      >
        Charts
      </div>
    </div>
  );
}
