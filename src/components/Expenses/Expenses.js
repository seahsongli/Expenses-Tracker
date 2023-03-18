import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2020");
  const yearInputHandler = (year) => {
    setFilterYear(year);
    console.log(year);
  };
  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onChangeFilter={yearInputHandler}
          selectedYear={filterYear}
        ></ExpensesFilter>
        <ExpensesChart expenses = {filteredExpenses}/>
        <ExpensesList expenses = {filteredExpenses}/>
      </Card>
    </div>
  );
}

export default Expenses;
