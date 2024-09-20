import * as React from 'react';
import Typography from '@mui/material/Typography';
// import Title from './title';
import { Button, Divider, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fCurrency } from 'src/utils/formatNumber';
import PieChartOne from './pie-chart-one';
import PieChartTwo from './pie-chart-two';

function preventDefault(event) {
  event.preventDefault();
}

export default function PieChartCard({ headerOne, headerTwo, value, type }) {
  const { user } = useSelector((state) => state.auth);
  return (
    <>
      <Grid container alignItems="center" style={{ padding: '10px' }}>
        <Grid item xs={6}>
          <Typography color="textPrimary" variant="h6" component="p" style={{ color: '#9291A5', fontSize: '16.23px' }}>
            {headerOne}
          </Typography>
          <Typography color="textPrimary" variant="h6" component="p" style={{ color: '#000000', fontSize: '20.33px' }}>
            <b>{headerTwo}</b>
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            border: '0px solid red',
            minHeight: '25px',
            minWidth: '100px',
          }}
        >
          <Grid item xs={6} sx={{ textAlign: 'right' }}>
            <Typography
              color="textPrimary"
              variant="h6"
              component="p"
              style={{ color: '#9291A5', fontSize: '16.23px' }}
            >
              This week
            </Typography>
            <Typography
              color="textPrimary"
              variant="h6"
              component="p"
              style={{ color: '#000000', fontSize: '20.33px' }}
            >
              <b>{value}</b>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Divider />
      <br />
      <Grid container alignItems="center">
        <Grid item xs={12} style={{ textAlign: 'center' }}>
          {type === 'one' && (
            <PieChartOne />
          )}
          {type === 'two' && (
            <PieChartTwo />
          )}
        </Grid>
      </Grid>
      <br />
    </>
  );
}
