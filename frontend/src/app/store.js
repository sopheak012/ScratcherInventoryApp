import { configureStore } from "@reduxjs/toolkit";
import scratcherReducer from "../features/scratcherSlice";

export const store = configureStore({
  reducer: {
    scratcher: scratcherReducer,
  },
});
