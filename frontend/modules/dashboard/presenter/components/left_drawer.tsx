export default function Left_drawer() {
  return (
    <div
      className="w-[212px]  border-r-2 border-r-[#f1f1f1]
px-5 py-24 flex flex-col gap-8"
    >
      <p className="primary_100">Sections</p>
      <div className="flex flex-col gap-2">
        <p className="secondary_100 pl-4 line-clamp-2 cursor-pointer">
          Educational units
        </p>
        <p className="secondary_100 pl-4 line-clamp-2 cursor-pointer">
          Research
        </p>
        <p className="secondary_100 pl-4 line-clamp-2 cursor-pointer">
          Short courses and BIM-related training
        </p>
        <p className="secondary_100 pl-4 line-clamp-2 cursor-pointer">
          Collaboration between academia,
          governement, and/or industry
        </p>
      </div>
    </div>
  );
}
