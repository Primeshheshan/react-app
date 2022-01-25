import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { title: "car insurance", amount: 100, date: new Date(2020, 1, 5) },
    { title: "education", amount: 200, date: new Date(2044, 3, 5) },
    { title: "health", amount: 300, date: new Date(2022, 4, 5) },
  ]; //multiple expenses item

  return (
    <div>
      <h1>Home</h1>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
