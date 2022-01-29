import * as React from "react";
import { useState } from "react";
import { Card } from "../UI/card/Card";
import { ExpenseItem } from "./ExpensesItem/ExpenseItem";
import "./Expenses.css";
import { IExpense } from "../Files/type";
import { ExpensesFilter } from "./ExpensesFilter/ExpensesFilter";
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
  let expensesContent: any = (
    <p style={{ textAlign: "center", fontWeight: "bold", marginTop: "4rem" }}>
      No Expense Found!
    </p>
  );
  if (filteredExpense.length > 0) {
    expensesContent = filteredExpense.map((expense: IExpense) => (
      <ExpenseItem
        key={expense.key}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }
  return (
    <div>
      <ExpensesFilter onSelectedYear={filterChangeHandler} />
      <Card className='expense_card'>
        {selectedYear === "all"
          ? props.items.map((expense: any) => (
              <ExpenseItem
                key={expense.key}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
              />
            ))
          : expensesContent}
      </Card>
    </div>
  );
};
