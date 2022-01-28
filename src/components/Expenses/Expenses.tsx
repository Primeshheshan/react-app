import * as React from "react";
import { IExpense } from "../type";
import { ExpenseItem } from "./ExpensesItem/ExpenseItem";

interface IExpensesProps {
  items: IExpense[];
}

export const Expenses = (props: IExpensesProps) => {
  return (
    <div>
      {props.items.map((expense: any) => (
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
