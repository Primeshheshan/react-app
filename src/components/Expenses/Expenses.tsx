import * as React from "react";
import { useState } from "react";
import { IExpense } from "../type";
import { ExpenseItem } from "./ExpensesItem/ExpenseItem";
import { ExpensesFilter } from "./NewExpenses/ExpensesFilter/ExpensesFilter";

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

      {selectedYear === "all"
        ? props.items.map((expense: any) => (
            <ExpenseItem
              key={expense.key}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        : filteredExpense.map((expense: any) => (
            <ExpenseItem
              key={expense.key}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))}
    </div>
  );
};
