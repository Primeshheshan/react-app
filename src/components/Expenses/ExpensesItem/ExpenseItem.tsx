import { useState } from "react";
import Button from "../../UI/Button/Button";
import { Card } from "../../UI/card/Card";
import ExpensesDate from "../ExpensesDate/ExpensesDate";
import "./ExpenseItem.css";

export interface IExpenseItemProps {
  title: string;
  amount: number;
  date: Date;
}

export const ExpenseItem = (props: IExpenseItemProps) => {
  const [title, setTitle] = useState(props.title);
  console.log("ExpenseItem component");
  const clickHandler = () => {
    setTitle("Updated");
  };

  return (
    <Card className='expense-item'>
      <div className='expense-item__date'>
        <ExpensesDate date={props.date}></ExpensesDate>
      </div>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <div className='expenseItem__actions'>
        <Button type='submit'>Change Title</Button>
      </div>
    </Card>
  );
};
