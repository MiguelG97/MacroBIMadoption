import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface filterState {
  academicProgFilter: "All Levels" | "Undergraduate" | "Postgraduate";
}

// Define the initial state using that type
const initialState: filterState = {
  academicProgFilter: "All Levels",
};

export const filterSlice = createSlice({
  name: "filterSlice",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setAcademicProgrammeFilter: (
      state,
      action: PayloadAction<"All Levels" | "Undergraduate" | "Postgraduate">
    ) => {
      state.academicProgFilter = action.payload;
    },
  },
});

export const { setAcademicProgrammeFilter } = filterSlice.actions;

export default filterSlice.reducer;
