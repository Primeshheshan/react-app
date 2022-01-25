import { Card } from "../../UI/card/Card";
import ExpensesDate from "../ExpensesDate/ExpensesDate";
import "./ExpenseItem.css";

export interface IExpenseItemProps {
  title: string;
  amount: number;
  date: Date;
}

export const ExpenseItem = (props: IExpenseItemProps) => {
  return (
    <Card className='expense-item'>
      <div className='expense-item__date'>
        <ExpensesDate date={props.date}></ExpensesDate>
      </div>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </Card>
  );
};
