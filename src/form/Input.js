import { useEffect, useState } from "react";
import useInput from "../hooks/use-input";
import { useDispatch, useSelector } from "react-redux";
import { expenseAction } from "../store/Expense-slice";
import { twMerge } from "tailwind-merge";
const Input = (props) => {
  const { label, val, inputParams, className, validation } = props;
  const [result, setResult] = useState({});
  const {
    value: input,
    setInput,
    isValid,
    hasError,
    setIsTouched,
    inputBlurHandler,
    inputChangeHandler,
    reset,
  } = useInput((value) => result?.valid);
  const preValue = useSelector((state) => state.expense.expenseData[label]);
  const { touched } = useSelector((state) => state.expense);
  const dispatch = useDispatch();
  useEffect(() => {
    if (val) setInput(val);
    if (preValue) setInput(preValue);
  }, []);

  useEffect(() => {
    dispatch(
      expenseAction.setFeilsdValidation({
        name: label,
        valid: isValid,
      })
    );
  }, [isValid]);

  useEffect(() => {
    setIsTouched(touched);
  }, [touched]);

  useEffect(() => {
    setResult(validation(input));
    const identifier = setTimeout(() => {
      dispatch(expenseAction.setExpenseData({ name: label, value: input }));
    }, 500);
    return () => {
      clearTimeout(identifier);
    };
  }, [input]);

  return (
    <div className="flex flex-col ">
      <label
        htmlFor={label}
        className="pl-1 font-medium tracking-tight text-gray-600"
      >
        {label}
      </label>
      <input
        {...inputParams}
        value={input}
        onBlur={inputBlurHandler}
        onChange={inputChangeHandler}
        className={twMerge(
          `outline-none rounded-lg border   px-2 py-1 text-sm ${
            hasError ? "border-red-500" : "border-stroke focus:border-blue-600"
          }`,
          className
        )}
      />
      {hasError && <p className="pl-1 text-xs text-red-600">{result?.msg}</p>}
    </div>
  );
};
export default Input;
