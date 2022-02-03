import { useState } from "react";
import "./ExpenseForm.css";

interface IExpenseFormProps {
  onSaveExpenseData: (data: any) => void;
}

export const ExpenseForm = (props: IExpenseFormProps) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");

  const titleChangeHandler = (event: any) => {
    setEnteredTitle(event.target.value);
  };
  const dateChangeHandler = (event: any) => {
    setEnteredDate(event.target.value);
  };
  const amountChangeHandler = (event: any) => {
    setEnteredAmount(event.target.value);
  };

  const submitHandler = (event: any) => {
    event.preventDefault();

    const expenseDataObj = {
      title: enteredTitle,
      date: new Date(enteredDate),
      amount: parseInt(enteredAmount),
    };

    props.onSaveExpenseData(expenseDataObj);

    setEnteredTitle("");
    setEnteredDate("");
    setEnteredAmount("");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
          <div className='new-expense__control'>
            <label htmlFor=''>Title</label>
            <input
              type='text'
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className='new-expense__control'>
            <label htmlFor='date'>Date</label>
            <input
              id='date'
              type='date'
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
          <div className='new-expense__control'>
            <label htmlFor=''>Amount</label>
            <input
              type='number'
              min='0.01'
              step='0.01'
              value={enteredAmount}
              onChange={amountChangeHandler}
            />
          </div>
        </div>
        <div className='new-expense__actions '>
          <button type='submit' onClick={submitHandler}>
            Add Expense
          </button>
        </div>
      </form>
    </div>
  );
};

//*********** single useState for all userInputs*****************//

// const [userInput, setUserInput] = useState({
//   enteredTitle: "",
//   enteredDate: "",
//   enteredAmount: "",
// });

// const titleChangeHandler = (event: any) => {
//   setUserInput((previousState) => {
//     return { ...previousState, enteredTitle: event.target.value };
//   });
// };
// const dateChangeHandler = (event: any) => {
//   setUserInput({
//     ...userInput,
//     enteredDate: event.target.value,
//   });
// };
// const amountChangeHandler = (event: any) => {
//   setUserInput({
//     ...userInput,
//     enteredAmount: event.target.value,
//   });
// };
