import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Chart } from "react-google-charts";

export const data = [
  ["Food type", "Sales Units (in thousands)"],
  ["Pastries", 11],
  ["Chicken & Meat", 24],
  ["Meals", 26],
  ["Others", 39],
];

export const options = {
  pieSliceText: "label",
  title: "",
  pieHole: 0.53,
  pieStartAngle: 100,
  colors: ["#484D52", "#D3D3D3","#0F63B2","#6989FD"
], 
  chartArea: { left: "10%", top: "10%", width: "80%", height: "80%" }, // Adjust the chart area to increase the size of the pie chart
  backgroundColor: { fill: "transparent" }, // Set the background color to transparent
};

export default function PieChartSummary({ headerOne, headerTwo, value }) {
  const { user } = useSelector((state) => state.auth);
  return (
    <div style={{ background: "transparent", width: "100%", height: "300px" }}>
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
