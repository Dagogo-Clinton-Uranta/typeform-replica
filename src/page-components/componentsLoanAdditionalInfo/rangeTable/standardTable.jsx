import React from "react"
import './standardTable.css'


const standardTable = () =>{

    return (
        <>

<table>
<caption>Example of a Personal Loan APR Range</caption>
  <thead>
    <tr>
      <th scope="col">Term</th>
      <th scope="col">Loan Amount</th>
      <th scope="col">Rate(APR)</th>
      <th scope="col">No of Payments</th>
      <th scope="col">Monthly Payment</th>
      <th scope="col">Total Payments</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Term">2 Years</td>
      <td data-label="Loan Amount">$8,500</td>
      <td data-label="Rate(APR)">6.99%</td>
      <td data-label="Payments">45</td>
      <td data-label="Montly Pay">$8,500</td>
      <td data-label="Total Pay">$30,000</td>
    </tr>
    <tr>
      <td scope="row" data-label="Term">3 Years</td>
      <td data-label="Loan Amount">$8,500</td>
      <td data-label="Rate(APR)">6.99%</td>
      <td data-label="Payments">26</td>
      <td data-label="Montly Pay">$8,500</td>
      <td data-label="Total Pay">$30,000</td>
    </tr>
    <tr>
      <td scope="row" data-label="Term">4 Years</td>
      <td data-label="Loan Amount">$8,500</td>
      <td data-label="Rate(APR)">6.99%</td>
      <td data-label="Payments">10</td>
      <td data-label="Montly Pay">$8,500</td>
      <td data-label="Total Pay">$30,000</td>
    </tr>
    <tr>
      <td scope="row" data-label="Term">5 Years</td>
      <td data-label="Loan Amount">$8,500</td>
      <td data-label="Rate(APR)">6.99%</td>
      <td data-label="Payments">5</td>
      <td  data-label="Montly Pay">$8,500</td>
      <td data-label="Total Pay">$30,000</td>
    </tr>

    <tr>
      <td scope="row" data-label="Term">6 Years</td>
      <td data-label="Loan Amount">$8,500</td>
      <td data-label="Rate(APR)">6.99%</td>
      <td data-label="Payments">5</td>
      <td data-label="Montly Pay">$8,500</td>
      <td data-label="Total Pay">$30,000</td>
    </tr>
  </tbody>
</table>

</>
 )
}

export default standardTable