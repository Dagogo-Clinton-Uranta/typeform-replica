import * as React from 'react';
import Typography from '@mui/material/Typography';
// import Title from './title';
import { Button, Divider, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { fCurrency } from 'src/utils/formatNumber';


function preventDefault(event) {
  event.preventDefault();
}

export default function DashboardCard({header, value, img, type}) {
  const { user } = useSelector((state) => state.auth);
  return (
    <>
     <Grid container alignItems="center">
      <Grid item xs={6}>
      <Typography color="textPrimary" variant="h6" component="p" style={{color: '#000000', fontSize: '17px'}}>
        <b>{header}</b>
      </Typography>
      </Grid>
      {type === "last" && (
        <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'flex-end', border: '0px solid red', minHeight: '25px', minWidth: '100px' }}>
        <select>
          <option value="option1">This Week</option>
          <option value="option2">This Month</option>
          <option value="option3">This Year</option>
          </select>
        </Grid>
      )}
    </Grid>

      <br/>
      <Grid container alignItems="center">
      <Grid item xs={6} style={{display:"flex",flexDirection:"column", gap:"3rem"}}>
        <Typography color="textPrimary" variant="h1" component="p" style={{color: '#000000', fontSize: '36px'}}>
          <b>{value}</b>
        </Typography>

        <Typography color="textPrimary" variant="h6" component="p" style={{color: '#000000'}}>
          <b>Surplus: <span style={{color:"green"}}>35</span></b>
        </Typography>
      </Grid>
      <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'flex-end', border: '0px solid red' }}>
        {/*<img src={img} alt="Your Image" style={{ maxWidth: '100%', height: 'auto', border: '0px solid green' }} />*/}
        </Grid>

    </Grid>
      <br />
    </>
  );
}
