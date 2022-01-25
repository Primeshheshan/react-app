import * as React from "react";

export interface IAppProps {
  date: Date;
}

export default function ExpensesDate(props: any) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();
  const date = props.date.toLocaleString("en-US", { day: "2-digit" });
  return (
    <div>
      <div>{year}</div>
      <div>{month}</div>
      <div>{date}</div>
    </div>
  );
}
