import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Chart } from "react-google-charts";

export const data = [
  ["Language", "Speakers (in millions)"],
  ["Male", 13],
  ["Female", 7],
];

export const options = {
  legend: "none",
  pieSliceText: "label",
  title: "",
  pieStartAngle: 100,
  colors: ["#D3D3D3", "#D72A34"], 
  chartArea: { left: "10%", top: "10%", width: "80%", height: "80%" }, // Adjust the chart area to increase the size of the pie chart
  backgroundColor: { fill: "transparent" }, // Set the background color to transparent
};

export default function PieChartTwo({ headerOne, headerTwo, value }) {
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
