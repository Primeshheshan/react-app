import "./ChartBar.css";

interface IChartbarProps {
  key: string;
  value: number;
  label: string;
  maxAmount: number;
}

export const ChartBar = (props: IChartbarProps) => {
  let barFillHeight = "0%";

  if (props.maxAmount > 0) {
    barFillHeight = Math.round((props.value / props.maxAmount) * 100) + "%";
  }

  return (
    <div className='chart-bar'>
      <div className='chart-bar__inner'>
        <div
          className='chart-bar__fill'
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className='chart-bar__label'>{props.label}</div>
    </div>
  );
};
