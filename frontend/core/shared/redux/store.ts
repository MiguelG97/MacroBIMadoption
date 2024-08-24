import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { sectionQstSlice } from "@/modules/dashboard/presenter/controllers/section_quest_slice";
import { dbSlice } from "./slices/db_slice";
import { filterSlice } from "@/core/shared/redux/slices/filter_slice";

export const store = configureStore({
  reducer: {
    sectionQst: sectionQstSlice.reducer,
    dbSlice: dbSlice.reducer,
    filterSlice: filterSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
