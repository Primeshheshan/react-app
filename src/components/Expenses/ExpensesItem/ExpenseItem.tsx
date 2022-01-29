import { IExpense } from "../../Files/type";
import { Card } from "../../UI/card/Card";
import ExpensesDate from "../ExpensesDate/ExpensesDate";
import "./ExpenseItem.css";

export const ExpenseItem = (props: IExpense) => {
  return (
    <Card className='expense-item'>
      <div className='expense-item__date'>
        <ExpensesDate date={props.date}></ExpensesDate>
      </div>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <div className='expenseItem__actions'>
        <button type='submit'>Change Title</button>
      </div>
    </Card>
  );
};
