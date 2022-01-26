import * as React from "react";
import Button from "../../../UI/Button/Button";
import "./ExpenseForm.css";

interface IExpenseFormProps {}

const ExpenseForm: React.FunctionComponent<IExpenseFormProps> = (props) => {
  return (
    <div>
      <form action=''>
        <div className='new-expense__controls'>
          <div className='new-expense__control'>
            <label htmlFor=''>Title</label>
            <input type='text' />
          </div>
          <div className='new-expense__control'>
            <label htmlFor=''>Date</label>
            <input type='date' />
          </div>
          <div className='new-expense__control'>
            <label htmlFor=''>Amount</label>
            <input type='number' min='0.01' step='0.01' />
          </div>
        </div>
        <div className='new-expense__actions '>
          <Button type='submit'>Add Expense</Button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
