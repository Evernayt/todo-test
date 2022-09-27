import { configureStore } from "@reduxjs/toolkit";
import TaskSlice from "./reducers/TaskSlice";

const store = configureStore({
  reducer: {
    task: TaskSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
