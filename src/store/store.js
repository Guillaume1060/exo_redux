import { configureStore } from "@reduxjs/toolkit";
import voyageReducer from "./reducer/voyages.reducer";

const store = configureStore({
  reducer: {
    voyages: voyageReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
