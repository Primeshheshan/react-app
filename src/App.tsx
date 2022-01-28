import React, { useState } from "react";
import { Expenses } from "./components/Expenses/Expenses";
import { NewExpenses } from "./components/Expenses/NewExpenses/NewExpenses";
import { IExpense } from "./components/type";
import "./App.css";

const DUMMYEXPENSES = [
  {
    key: "1",
    title: "car insurance",
    amount: 100,
    date: new Date(2020, 1, 5),
  },
  {
    key: "2",
    title: "education",
    amount: 200,
    date: new Date(2044, 3, 5),
  },
  { key: "e3232321", title: "health", amount: 300, date: new Date(2022, 4, 5) },
]; //multiple expenses item

export const App = () => {
  const [expenses, setExpenses] = useState(DUMMYEXPENSES);

  const addExpenseHandler = (expense: IExpense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <h1>Home</h1>
      <NewExpenses addExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};
