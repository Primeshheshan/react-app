import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Expenses } from "./components/Expenses/Expenses";

function App() {
  return (
    <div>
      <h1>Home</h1>
      <Expenses></Expenses>
    </div>
  );
}

export default App;
