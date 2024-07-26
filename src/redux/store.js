import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "./expenseSlice";

const store = configureStore({
  reducer: {
    expense: expenseReducer,
  },
});

export default store;
