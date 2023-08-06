const ExpenseFilter = (props) => {
  return (
    <div className="rounded-full  mb-8 w-max mx-auto">
      <select
        name="cars"
        id="cars"
        className="w-64 bg-primary-400 text-white px-4 py-2 rounded-full outline-none border-r-8 border-primary-400  cursor-pointer"
      >
        <option>Select month</option>
        <option value="January">January</option>
        <option value="February">February</option>
        <option value="March">March</option>
        <option value="April">April</option>
        <option value="May">May</option>
        <option value="June">June</option>
        <option value="July">July</option>
        <option value="August">August</option>
        <option value="September">September</option>
        <option value="October">October</option>
        <option value="November">November</option>
        <option value="December">December</option>
      </select>
    </div>
  );
};
export default ExpenseFilter;
