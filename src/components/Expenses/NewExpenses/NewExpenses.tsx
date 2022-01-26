import * as React from "react";
import ExpenseForm from "./ExpenseFrom/ExpenseForm";
import "./NewExpenses.css";

interface INewExpensesProps {}

export const NewExpenses: React.FunctionComponent<INewExpensesProps> = (
  props
) => {
  return (
    <div className='new-expense'>
      <ExpenseForm />
    </div>
  );
};
