import * as React from "react";
import { useState } from "react";
import { Card } from "../UI/card/Card";
import { ExpenseItem } from "./ExpensesItem/ExpenseItem";
import "./Expenses.css";
import { IExpense } from "../Files/type";
import { ExpensesFilter } from "./ExpensesFilter/ExpensesFilter";
import { ExpensesList } from "./ExpensesList/ExpensesList";
interface IExpensesProps {
  items: IExpense[];
}

export const Expenses = (props: IExpensesProps) => {
  const [selectedYear, setSelectedYear] = useState("all");

  const filterChangeHandler = (year: string) => {
    setSelectedYear(year);
  };

  const filteredExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div>
      <ExpensesFilter onSelectedYear={filterChangeHandler} />
      <ExpensesList
        allExpenses={props.items}
        filteredExpense={filteredExpense}
        selectedYear={selectedYear}
      />
    </div>
  );
};
