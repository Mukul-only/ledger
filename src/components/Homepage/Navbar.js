import Svg from "../SVG/Svg";
import Card from "../UI/Card";
import plus from "../SVG/plus";
import { useState } from "react";
import AddExpense from "./Expenses/AddExpense";
const Navbar = (props) => {
  const [showAddExpenseOverlay, setShowAddExpenseOverlay] = useState(false);
  return (
    <Card
      className={`flex justify-between items-center py-4 border-b border-stroke-light`}
    >
      <div />
      <h1 className="text-xl tracking-[14px] text-primary-100">EXPENSES</h1>
      <Svg
        svg={plus}
        className="w-8 cursor-pointer"
        onClick={() => setShowAddExpenseOverlay(true)}
      />
      {showAddExpenseOverlay && (
        <AddExpense showOverlay={setShowAddExpenseOverlay} />
      )}
    </Card>
  );
};
export default Navbar;
