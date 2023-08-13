import { configureStore } from "@reduxjs/toolkit";
import ExpenseSlice from "./Expense-slice";
const store = configureStore({
  reducer: {
    expense: ExpenseSlice.reducer,
  },
});
export default store;
