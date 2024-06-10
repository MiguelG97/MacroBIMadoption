import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface sectionQstState {
  selectedSectionName: string;
  selectedSectionIndex: number;
  activeToolTipAccumValue: number;
}

// Define the initial state using that type
const initialState: sectionQstState = {
  selectedSectionName: "Educational Units",
  selectedSectionIndex: 0,
  activeToolTipAccumValue: 0,
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
    setSelectedSectIndex: (
      state,
      action: PayloadAction<number>
    ) => {
      state.selectedSectionIndex = action.payload;
    },
    setActiveTooltipAccValue: (
      state,
      action: PayloadAction<number>
    ) => {
      state.activeToolTipAccumValue =
        action.payload;
    },
  },
});

export const {
  setSelectedSection,
  setActiveTooltipAccValue,
  setSelectedSectIndex,
} = sectionQstSlice.actions;

export default sectionQstSlice.reducer;
