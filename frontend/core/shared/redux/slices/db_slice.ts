import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  IAnswer,
  IQuestionnary,
  IUser,
} from "../../types/postgresql_schema_types";

interface dbState {
  answers: IAnswer[];
  questionnaries: IQuestionnary[];
  users: IUser[];
}

// Define the initial state using that type
const initialState: dbState = {
  answers: [],
  users: [],
  questionnaries: [],
};

export const dbSlice = createSlice({
  name: "dbSlice",
  initialState,
  reducers: {
    setAnswers: (state, action: PayloadAction<any[]>) => {
      state.answers = action.payload;
    },
    setQuestionnaries: (state, action: PayloadAction<any[]>) => {
      state.questionnaries = action.payload;
    },
    setUsers: (state, action: PayloadAction<any[]>) => {
      state.users = action.payload;
    },
  },
});

export const { setAnswers, setQuestionnaries, setUsers } = dbSlice.actions;

export default dbSlice.reducer;
