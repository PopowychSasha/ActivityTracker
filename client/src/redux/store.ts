import { configureStore } from "@reduxjs/toolkit";
import { activitySlice } from "./activity";

export const store = configureStore({
  reducer: {
    activity: activitySlice.reducer,
  },
});
