import { useDispatch, useSelector } from "react-redux";
import Input from "../../../form/Input";
import { expenseAction } from "../../../store/Expense-slice";

const ExpenseForm = (props) => {
  const currentDate = new Date().toJSON().slice(0, 10);

  const generalValidation = (val) => {
    if (val.trim().length !== 0) {
      return { valid: true };
    } else {
      return { valid: false, msg: "required!" };
    }
  };
  const priceValidation = (val) => {
    if (val.trim().length !== 0) {
      if (+val > 0) {
        return {
          valid: true,
        };
      } else return { valid: false, msg: "amount can't be negative!" };
    } else return { valid: false, msg: "required!" };
  };
  const dispatch = useDispatch();
  const { isExpenseDataValid } = useSelector((state) => state.expense);
  const { expenseData } = useSelector((state) => state.expense);
  const submitHandler = () => {
    dispatch(expenseAction.setTouched());
    if (isExpenseDataValid) {
      console.log(expenseData);
      dispatch(expenseAction.reset());
      props.showOverlay(false);
    }
  };

  return (
    <div className="w-full p-4 space-y-4">
      <Input
        label="Name"
        inputParams={{ type: "text", placeholder: "enter name of item" }}
        validation={(val) => generalValidation(val)}
      />
      <Input
        label="Price(₹)"
        inputParams={{ type: "number", placeholder: "enter price ", min: 0 }}
        validation={(val) => priceValidation(val)}
      />

      <Input
        label="Date"
        inputParams={{
          type: "date",
          placeholder: "enter price ",
          min: "2023-07-13",
          max: currentDate,
        }}
        validation={(val) => generalValidation(val)}
      />

      <div className="pt-6 pb-3">
        <button
          className="block px-6 py-1 mx-auto text-white rounded-full outline-none bg-primary"
          onClick={submitHandler}
        >
          Add +
        </button>
      </div>
    </div>
  );
};
export default ExpenseForm;
