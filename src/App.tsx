import React from "react";
import "./App.css";
import { Expenses } from "./components/Expenses/Expenses";

export const App = () => {
  return (
    <div>
      <h1>Home</h1>
      <Expenses></Expenses>
    </div>
  );
};
