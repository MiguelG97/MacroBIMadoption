import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface sectionQstState {
  selectedSectionName: string;
}

// Define the initial state using that type
const initialState: sectionQstState = {
  selectedSectionName: "Educational Units",
};

export const sectionQstSlice = createSlice({
  name: "sectionQst",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setSelectedSection: (
      state,
      action: PayloadAction<string>
    ) => {
      state.selectedSectionName = action.payload;
    },
  },
});

export const { setSelectedSection } =
  sectionQstSlice.actions;

export default sectionQstSlice.reducer;
