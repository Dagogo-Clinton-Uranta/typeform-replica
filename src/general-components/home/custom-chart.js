import * as React from 'react';
import Typography from '@mui/material/Typography';
// import Title from './title';
import { Button, Divider, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fCurrency } from 'src/utils/formatNumber';
import PieChartOne from './pie-chart-one';
import PieChartTwo from './pie-chart-two';
import purpleIcon from '../../assets/images/dashboard/purple.png';
import pinkIcon from '../../assets/images/dashboard/pink.png';
import greenIcon from '../../assets/images/dashboard/green.png';
import LineChart from './line-chart';

function preventDefault(event) {
  event.preventDefault();
}

export default function CustomChart({ headerOne, headerTwo, value, type }) {
  const { user } = useSelector((state) => state.auth);
  return (
    <>
      <Grid container alignItems="center"  style={{ padding: '10px' }}>
        <Grid item xs={3}>
          <Typography color="textPrimary" variant="h6" component="p" style={{ color: '#9291A5', fontSize: '16.23px' }}>
            {headerOne}
          </Typography>
          <Typography color="textPrimary" variant="h6" component="p" style={{ color: '#000000', fontSize: '20.33px' }}>
            <b>{headerTwo}</b>
          </Typography>
        </Grid>
        <Grid
          item
          xs={9}
          sx={{
            display: 'flex',
            border: '0px solid red',
            minHeight: '25px',
            minWidth: '100px',
          }}
        >
<Grid item xs={2}>
  <Typography
    color="textPrimary"
    variant="h6"
    component="div" 
    style={{
      display: 'flex', 
      alignItems: 'center',
      color: '#9291A5',
      fontSize: '16.23px',
      border: '2px solid #c6c0c0', 
      borderRadius: '9px',
      padding: '5px',
      textAlign: 'center',
    }}
  >
    <img src={purpleIcon} alt="Total Expense" style={{ marginRight: '5px' }} />Total Expense
  </Typography>
</Grid>
&nbsp; &nbsp;
<Grid item xs={2}>
  <Typography
    color="textPrimary"
    variant="h6"
    component="div" 
    style={{
      display: 'flex', 
      alignItems: 'center',
      color: '#9291A5',
      fontSize: '16.23px',
      border: '2px solid #c6c0c0', 
      borderRadius: '9px',
      padding: '5px',
      textAlign: 'center',
    }}
  >
    <img src={pinkIcon} alt="Cash Inflow" style={{ marginRight: '5px' }} />Cash Inflow
  </Typography>
</Grid>
&nbsp; &nbsp;
<Grid item xs={2}>
  <Typography
    color="textPrimary"
    variant="h6"
    component="div" 
    style={{
      display: 'flex', 
      alignItems: 'center',
      color: '#9291A5',
      fontSize: '16.23px',
      border: '2px solid #c6c0c0', 
      borderRadius: '9px',
      padding: '5px',
      textAlign: 'center',
    }}
  >
    <img src={greenIcon} alt="Cash Outflow" style={{ marginRight: '5px' }} />Cash Outflow
  </Typography>
</Grid>
    &nbsp; &nbsp;&nbsp; &nbsp;
    {/* <Grid container alignItems="center"> */}
  <Grid item xs={1.5} style={{ textAlign: 'center', marginTop: '5px' }}>
    <Typography color="textPrimary" variant="h6" component="p" style={{ color: '#9291A5', fontSize: '16.23px' }}>
      7 days
    </Typography>
  </Grid>
  <Grid item xs={1.5} style={{ textAlign: 'center', marginTop: '5px' }}>
    <Typography color="textPrimary" variant="h6" component="p" style={{ color: '#9291A5', fontSize: '16.23px' }}>
      30 days
    </Typography>
  </Grid>
  <Grid item xs={1.5} style={{ textAlign: 'center' }}>
    <Typography
      color="textPrimary"
      variant="h6"
      component="p"
      style={{ color: 'white', fontSize: '16.23px', borderRadius: '9px', background: '#1E1B39', padding: '7px' }}
    >
      12 months
    </Typography>
  </Grid>




        </Grid>
      </Grid>
      <Divider />
      <br />
      <Grid container alignItems="center">
        <Grid item xs={12} style={{ textAlign: 'center' }}>
         <LineChart />
        </Grid>
      </Grid>
      <br />
    </>
  );
}
