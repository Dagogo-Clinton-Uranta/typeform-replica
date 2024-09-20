import * as React from 'react';
import Typography from '@mui/material/Typography';
// import Title from './title';
import { Box, Button, Divider, Grid, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { fCurrency } from 'src/utils/formatNumber';
import PieChartSummary from './pie-chart-summary';


function preventDefault(event) {
  event.preventDefault();
}

export default function DashboardPieChartCard({header, value, img, type}) {
  const { user } = useSelector((state) => state.auth);
  return (
    <>
     <Grid container alignItems="center">
      <Grid item xs={6}>
      <Typography color="textPrimary" variant="h6" component="p" style={{color: '#000000', fontSize: '17px'}}>
        <b>{header}</b>
      </Typography>
      </Grid>
      
    </Grid>

      <br/>
      <Grid container alignItems="center">
      <Grid item xs={12} style={{display:"flex",flexDirection:"column", gap:"2rem"}}>
      
      <PieChartSummary/>

      </Grid>
    

    </Grid>
      <br />
    </>
  );
}
