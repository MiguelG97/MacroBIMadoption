import {
  AcademicProgType,
  CountriesEnum,
} from "@/core/shared/enums/filters_enum";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface filterState {
  academicProgFilter: AcademicProgType;
  countryFilter: CountriesEnum;
}

// Define the initial state using that type
const initialState: filterState = {
  academicProgFilter: AcademicProgType["All Levels"],
  countryFilter: CountriesEnum.All,
};

export const filterSlice = createSlice({
  name: "filterSlice",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setAcademicProgrammeFilter: (
      state,
      action: PayloadAction<AcademicProgType>
    ) => {
      state.academicProgFilter = action.payload;
    },
    setCountryFilter: (state, action: PayloadAction<CountriesEnum>) => {
      state.countryFilter = action.payload;
    },
  },
});

export const { setAcademicProgrammeFilter, setCountryFilter } =
  filterSlice.actions;

export default filterSlice.reducer;
