import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface questionnaireState {
  value: any[];
}

// Define the initial state using that type
const initialState: questionnaireState = {
  value: [],
};

export const questionnarieSlice = createSlice({
  name: "questionnarieSlice",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setData: (
      state,
      action: PayloadAction<any[]>
    ) => {
      state.value = action.payload;
    },
  },
});

export const { setData } =
  questionnarieSlice.actions;

export default questionnarieSlice.reducer;
