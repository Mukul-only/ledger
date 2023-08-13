import { createSlice } from "@reduxjs/toolkit";
const ExpenseSlice = createSlice({
  name: "Epxense slice",
  initialState: {
    expenseData: {},
    touched: false,
    feildsValidation: {},
    isExpenseDataValid: false,
  },
  reducers: {
    setTouched(state) {
      state.touched = true;
    },
    setExpenseData(state, action) {
      const data = action.payload;
      state.expenseData[data.name] = data.value;
    },
    setFeilsdValidation(state, action) {
      const data = action.payload;
      state.feildsValidation[data.name] = data.valid;

      let temp = true;
      Object.values(state.feildsValidation).forEach((item) => {
        temp = temp && item;
      });
      state.isExpenseDataValid = temp;
    },
    reset(state) {
      state.expenseData = {};
      state.touched = false;
      state.feildsValidation = {};
      state.isExpenseDataValid = false;
    },
  },
});
export const expenseAction = ExpenseSlice.actions;
export default ExpenseSlice;
