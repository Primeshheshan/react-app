import React, { useState } from "react";
import { Expenses } from "./components/Expenses/Expenses";
import { NewExpenses } from "./components/Expenses/NewExpenses/NewExpenses";
import { IExpense } from "./components/Files/type";
import "./App.css";
import { DUMMYEXPENSES } from "./components/Files/DummyExpenses";

export const App = () => {
  const [expenses, setExpenses] = useState(DUMMYEXPENSES);

  const addExpenseHandler = (expense: IExpense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpenses addExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};
