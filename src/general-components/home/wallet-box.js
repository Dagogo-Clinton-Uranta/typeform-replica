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

export default function WalletBox({type, BoxIcon}) {
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      <Typography
            color="textPrimary"
            variant="h6"
            component="p"
          >
        <b>Wallet</b>
      </Typography>
      <Divider />
      <br/>
      <center>
        <Typography
            color="textPrimary"
            variant="h3"
            component="p"
          >
       <div style={{padding: '10px', backgroundColor: 'white'}}>
       <b>{user?.walletBalance === 0 ? "$0" : fCurrency(user?.walletBalance)}</b>
       </div>
      </Typography></center>
      <br/>
      {/* <div> */}
        <center>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} justifyContent="center">
    <Grid item xs={4}>
    <Button variant="contained" fullWidth  style={{backgroundColor: "transparent",  border: '1px solid #348AED', color: '#348AED', padding: '15px',}}>
        TRANSFER
    </Button>
    </Grid>
    <Grid item xs={4}>
    <Button variant="contained" fullWidth  style={{backgroundColor: "#348AED", padding: '15px'}}>
        WITHDRAW
    </Button>
    </Grid>
    </Grid>
        </center>
        {/* </div> */}
        </>
    );
    }