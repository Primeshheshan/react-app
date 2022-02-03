import { Chart } from "../Chart/Chart";
import { IExpense } from "../Files/type";

interface IExpensesChartProps {
  expensesList: IExpense[];
}

export const ExpensesChart = (props: IExpensesChartProps) => {
  const chartDataPoints = [
    { label: "jan", value: 0 },
    { label: "feb", value: 0 },
    { label: "mar", value: 0 },
    { label: "apr", value: 0 },
    { label: "may", value: 0 },
    { label: "jun", value: 0 },
    { label: "jul", value: 0 },
    { label: "aug", value: 0 },
    { label: "sep", value: 0 },
    { label: "oct", value: 0 },
    { label: "nov", value: 0 },
    { label: "dec", value: 0 },
  ]; // array of bunch of objects

  for (const expense of props.expensesList) {
    const expenseMonth = expense.date.getMonth(); //starting at 0 , January =>0 return 0
    chartDataPoints[expenseMonth].value += expense.amount; // sumup expenses amount to appropiate month
  }

  return <Chart dataPoints={chartDataPoints} />;
};
