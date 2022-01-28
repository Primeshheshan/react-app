import * as React from "react";
import { IExpense } from "../../type";
import { ExpenseForm } from "./ExpenseFrom/ExpenseForm";
import "./NewExpenses.css";

interface INewExpensesProps {
  addExpense: (expense: IExpense) => void;
}

export const NewExpenses = (props: INewExpensesProps) => {
  const saveExpenseDataHandler = (data: IExpense) => {
    const expenseData = {
      ...data,
      key: Math.random().toString(),
    };
    props.addExpense(expenseData); // from using props we can call addExpense and pass the expenseData
  };

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};
