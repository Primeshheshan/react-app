import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Expenses } from "./components/Expenses/Expenses";
import { NewExpenses } from "./components/Expenses/NewExpenses/NewExpenses";

function App() {
  return (
    <div>
      <h1>Home</h1>
      <NewExpenses />
      <Expenses />
    </div>
  );
}

export default App;
