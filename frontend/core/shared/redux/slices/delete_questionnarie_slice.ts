import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IAnswerPostgres } from "../../types/section_Questionnarie";

// Define a type for the slice state
interface questionnaireState {
  value: IAnswerPostgres[];
}

// Define the initial state using that type
const initialState: questionnaireState = {
  value: [],
};

export const questionnaireSlice = createSlice({
  name: "questionnaireSlice",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<any[]>) => {
      state.value = action.payload;
    },
  },
});

export const { setData } = questionnaireSlice.actions;

export default questionnaireSlice.reducer;
