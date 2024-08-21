import MSelector from "@/core/shared/components/MSelector";
import { useAppSelector } from "@/core/shared/redux/store";
import { Popover, SelectChangeEvent } from "@mui/material";
import { IconFilterFilled, IconSearch } from "@tabler/icons-react";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch } from "react-redux";
import { setAcademicProgrammeFilter } from "../../controllers/filter_slice";
import { AcademicProgType } from "@/core/shared/enums/filter_enum";

export default function Search_filter() {
  /**Redux toolkit */
  const { academicProgFilter } = useAppSelector((x) => x.filterSlice);
  const dispatch = useDispatch();
  /**States */
  const [anchorFilter, setAnchorFilter] = useState<Element | null>(null);
  const [isFilterOpen, setFilterOpen] = useState(false);
  /**Handlers */
  const onClickFilter = (e: React.MouseEvent) => {
    setAnchorFilter(e.currentTarget);
    setFilterOpen(true);
  };
  const onChangeAcaProgFilter = (e: SelectChangeEvent) => {
    dispatch(setAcademicProgrammeFilter(e.target.value as AcademicProgType));
  };
  return (
    <div
      className="flex bg-white rounded-[30px] px-[1.6rem]   mr-[1rem]
    h-[4.4rem] items-center gap-[1.6rem]"
    >
      <div
        className="bg-bgneutral-200 rounded-[5rem] px-[1.6rem] py-[0.6rem] ml-[-0.4rem]
      flex items-center gap-[0.8rem] w-[20rem]"
      >
        <IconSearch size={16} className="text-txcolor-200" />
        <p className="text-txcolor-300 font-extralight">Search...</p>
      </div>
      <div
        className="flex cursor-pointer items-center  h-full"
        onClick={onClickFilter}
      >
        <IconFilterFilled
          size={18}
          className="text-txcolor-300 hover:text-txcolor-200"
        />
      </div>
      <Popover
        sx={{
          "& .MuiPaper-root": {
            boxShadow: "0px 0px 24px 4px rgba(0,0,0,0.06)",
          },
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        open={isFilterOpen}
        onClose={() => {
          setAnchorFilter(null);
          setFilterOpen(false);
        }}
        anchorEl={anchorFilter}
      >
        <div
          className="rounded-[0.8rem] w-[22.4rem] h-[30rem] bg-white
        p-[1.6rem] flex flex-col gap-[1.2rem]"
        >
          <p
            className="text-[12px] text-txcolor-300 tracking-widest
            "
          >
            FILTER BY:
          </p>
          <div className="flex flex-col gap-[0.8rem]">
            <div className="flex justify-between">
              <p className="text-[14px] font-bold">Academic Program</p>
              <div className="cursor-pointer">
                <IoIosArrowDown color="black" />
              </div>
            </div>
            <MSelector
              defaultValue={academicProgFilter}
              menuItems={[
                { text: "All Levels", value: "All Levels" },
                { text: "Undergraduate Level", value: "Undergraduate" },
                { text: "Postgraduate Level", value: "Postgraduate" },
              ]}
              onChangeCallback={onChangeAcaProgFilter}
            />
          </div>
        </div>
      </Popover>
    </div>
  );
}
