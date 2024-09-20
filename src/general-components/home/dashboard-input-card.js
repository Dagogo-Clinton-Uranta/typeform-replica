import * as React from 'react';
import Typography from '@mui/material/Typography';
// import Title from './title';
import { Box, Button, Divider, Grid, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { fCurrency } from 'src/utils/formatNumber';


function preventDefault(event) {
  event.preventDefault();
}

export default function DashboardInputCard({header, value, img, type}) {
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
      <Grid item xs={12} style={{display:"flex",flexDirection:"column", gap:"2rem"}}>
      <TextField
        inputProps={{
          style: { height:"2.5rem" },
        }}
     
      />
      
      <Grid item xs={12} sx={{ display: 'flex',gap:"1rem", alignItems: 'center'}}>
           
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
              <Button variant="contained" style={{ minHeight: '50px', minWidth: '40%',color:'#000000',border:"1px solid black",backgroundColor: '#FFFFFF' }}>
                Upload
              </Button>
              &nbsp; &nbsp;
              <Button variant="contained" style={{ minHeight: '50px', minWidth: '40%',color:'#FFFFFF', backgroundColor: '#000000' }}>
                Train
              </Button>
            </Box>
          </Grid>

      </Grid>
      <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center', border: '0px solid red' }}>
        {/*<img src={img} alt="Your Image" style={{ maxWidth: '100%', height: 'auto', border: '0px solid green' }} />*/}
        </Grid>

    </Grid>
      <br />
    </>
  );
}
