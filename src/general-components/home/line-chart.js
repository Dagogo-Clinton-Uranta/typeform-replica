import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Students", "Admin"],
  ["JAN", 1000, 400],
  ["FEB", 1970, 460],
  ["FEB", 1870, 460],
  ["MAR", 1370, 460],
  ["APR", 220, 760],
  ["MAY", 1170, 260],
  ["JUN", 1370, 660],
  ["JUL", 1170, 460],
  ["AUG", 660, 1120],
  ["SEP", 1030, 540],
  ["OCT", 1030, 540],
  ["NOV", 1090, 540],
  ["DEC", 1690, 540],
];

export const options = {
  title: "",
  curveType: "function",
  legend: { position: "bottom" },
  chartArea: { left: "10%", top: "10%", width: "80%", height: "80%" }, 
  backgroundColor: { fill: "transparent" },
};

const LineChart = () => {
  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}

export default LineChart;