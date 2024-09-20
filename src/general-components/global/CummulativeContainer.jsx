import React from 'react';
import { Grid, Typography } from '@mui/material';

const CummulativeContainer = ({result}) => {
  return (
    <Grid container style={{ backgroundColor: '#F9F9F9', padding: '20px', borderRadius: '14px' }}>
      <Grid item xs={6}>
        <Typography variant="body1" align="left" style={{color: '#000000', fontSize: '20px'}}>
        <b>Cummulative: &nbsp; &nbsp; &nbsp;{result?.totalCumulative}</b>
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="body1" align="right" style={{color: '#2AD776', fontSize: '20px'}}  >
          <b>Passed</b>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default CummulativeContainer;
