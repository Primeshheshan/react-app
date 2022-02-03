import * as React from "react";
import "./Chart.css";
import { ChartBar } from "./ChartBar/ChartBar";

interface IChartProps {
  dataPoints: {
    label: string;
    value: number;
  }[];
}

export const Chart = (props: IChartProps) => {
  const monthsValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const maxAmount = Math.max(...monthsValues);
  return (
    <div className='chart'>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          label={dataPoint.label}
          maxAmount={maxAmount}
        />
      ))}
    </div>
  );
};
