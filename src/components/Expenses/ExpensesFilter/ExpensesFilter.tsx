import * as React from "react";
import "./ExpensesFilter.css";

interface IExpensesFilterProps {
  onSelectedYear: (year: string) => void;
}

export const ExpensesFilter = (props: IExpensesFilterProps) => {
  const dropdownChangeHandler = (event: any) => {
    props.onSelectedYear(event.target.value);
  };

  return (
    <div className='expenses-filter'>
      <label>Filter by year</label>
      <select onChange={dropdownChangeHandler} name='yearList' id='yearList'>
        <option value='all'>All</option>
        <option value='2020'>2020</option>
        <option value='2021'>2021</option>
        <option value='2022'>2022</option>
        <option value='2023'>2023</option>
      </select>
    </div>
  );
};
