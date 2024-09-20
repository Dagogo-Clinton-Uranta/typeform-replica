import React from 'react'
import { PieChart } from 'react-minimal-pie-chart';

const PieChartCard = () => {
  return (
    <PieChart
      data={[
        { title: 'One', value: 10, color: '#E38627' },
        { title: 'Two', value: 15, color: '#C13C37' },
        { title: 'Three', value: 20, color: '#6A2135' },
      ]}
    />
  )
}

export default PieChartCard