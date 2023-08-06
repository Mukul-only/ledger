import Card from "../../UI/Card";
import ExpenseCard from "./ExpenseCard";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {
  return (
    <Card className="my-6">
      <ExpenseFilter />
      <ExpenseCard />
    </Card>
  );
};
export default Expenses;
