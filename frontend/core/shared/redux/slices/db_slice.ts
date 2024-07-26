import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  IAnswer,
  IQuestionnaire,
  IUser,
} from "../../types/postgresql_schema_types";

interface dbState {
  answers: IAnswer[];
  questionnaires: IQuestionnaire[];
  users: IUser[];
}

// Define the initial state using that type
const initialState: dbState = {
  answers: [],
  users: [],
  questionnaires: [],
};

export const dbSlice = createSlice({
  name: "dbSlice",
  initialState,
  reducers: {
    setAnswers: (state, action: PayloadAction<any[]>) => {
      state.answers = action.payload;
    },
    setQuestionnaires: (state, action: PayloadAction<any[]>) => {
      state.questionnaires = action.payload;
    },
    setUsers: (state, action: PayloadAction<any[]>) => {
      state.users = action.payload;
    },
  },
});

export const { setAnswers, setQuestionnaires, setUsers } = dbSlice.actions;

export default dbSlice.reducer;
