import cross from "../../SVG/cross";
import Svg from "../../SVG/Svg";
import ExpenseForm from "./ExpenseForm";
const AddExpense = (props) => {
  return (
    <div
      className="fixed inset-0 z-20 flex items-center px-5 bg-black bg-opacity-30"
      onClick={() => props.showOverlay(false)}
    >
      <div
        className="flex flex-col w-full bg-white border-2 rounded-lg shadow-lg border-stroke"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="flex items-center justify-between p-4 border-b border-stroke ">
          <h1 className="text-lg font-semibold tracking-tight text-primary-400">
            Add Expense
          </h1>
          <Svg
            svg={cross}
            className="w-6"
            onClick={() => {
              props.showOverlay(false);
            }}
          />
        </div>
        <ExpenseForm showOverlay={props.showOverlay} />
      </div>
    </div>
  );
};
export default AddExpense;
