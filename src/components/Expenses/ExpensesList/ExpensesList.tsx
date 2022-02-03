import * as React from "react";
import { IExpense } from "../../Files/type";
import { Card } from "../../UI/card/Card";
import { ExpenseItem } from "../ExpensesItem/ExpenseItem";

interface IExpensesListProps {
  allExpenses: IExpense[];
  filteredExpense: IExpense[];
  selectedYear: string;
}

export const ExpensesList = (props: IExpensesListProps) => {
  let expensesContent: any = (
    <p style={{ textAlign: "center", fontWeight: "bold", marginTop: "2rem" }}>
      No Expense Found!
    </p>
  );
  if (props.filteredExpense.length > 0) {
    expensesContent = props.filteredExpense.map((expense: IExpense) => (
      <ExpenseItem
        key={expense.key}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }
  return (
    <Card className='expense_card'>
      {props.selectedYear === "all"
        ? props.allExpenses.map((expense: IExpense) => (
            <ExpenseItem
              key={expense.key}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        : expensesContent}
    </Card>
  );
};
