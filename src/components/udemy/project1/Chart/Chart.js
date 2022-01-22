import React from 'react';
import ChartBar from './ChartBar';
import styles from './Chart.module.scss';

const Chart = ({ dataPoints }) => {
  const dataPointValue = dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximun = Math.max(...dataPointValue);

  const chartbar = dataPoints.map((dataPoint) => (
    <ChartBar
      key={dataPoint.label}
      value={dataPoint.value}
      maxValue={totalMaximun}
      label={dataPoint.label}
    />
  ));

  return <div className={styles.chart}>{chartbar}</div>;
};

export default Chart;
