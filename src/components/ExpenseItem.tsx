import "./ExpenseItem.css";
import ExpensesDate from "./ExpensesDate";

export interface IExpenseItemProps {
  title: string;
  amount: number;
  date: Date;
}

function ExpenseItem(props: IExpenseItemProps) {
  return (
    <div className='expense-item'>
      <div className='expense-item__date'>
        <ExpensesDate date={props.date}></ExpensesDate>
      </div>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
