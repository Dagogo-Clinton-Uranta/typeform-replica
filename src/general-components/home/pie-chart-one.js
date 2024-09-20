import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Chart } from "react-google-charts";

export const data = [
  ["Language", "Speakers (in millions)"],
  ["Boys", 650.55],
  ["Girls", 550.66],
];

export const options = {
  legend: "none",
  pieSliceText: "label",
  title: "",
  pieStartAngle: 100,
  colors: ["#000000", "#D3D3D3"], 
  chartArea: { left: "10%", top: "10%", width: "80%", height: "80%" }, // Adjust the chart area to increase the size of the pie chart
  backgroundColor: { fill: "transparent" }, // Set the background color to transparent
};

export default function PieChartOne({ headerOne, headerTwo, value }) {
  const { user } = useSelector((state) => state.auth);
  return (
    <div style={{ background: "transparent", width: "100%", height: "400px" }}>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"100%"}
      />
    </div>
  );
}
