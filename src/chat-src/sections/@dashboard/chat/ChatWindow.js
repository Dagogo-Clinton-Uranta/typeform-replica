import { useEffect } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { Box, Divider, Grid, Stack } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fCurrency } from 'src/utils/formatNumber';


export default function ChatWindow() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { inboxDetails } = useSelector((state) => state.inbox);

  return (
    <Stack sx={{ flexGrow: 1, minWidth: '1px' }}>
      <Divider />

      <Box sx={{ flexGrow: 1, display: 'flex', overflow: 'hidden' }}>
        <Stack sx={{ flexGrow: 1 }}>
          {/* <ChatMessageList conversation={conversation} /> */}
          <center><h4>You have joined {inboxDetails?.coolerName}</h4></center>
          <Divider />
          <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          sx={{pl: 4, pt: 5}}
        >
          <p style={{fontSize: '20px', margin: '10px 0'}}>Cooler Name: {inboxDetails?.coolerName}</p>
          <p style={{fontSize: '20px', margin: '10px 0'}}>Cooler Fee: {fCurrency(inboxDetails?.amount)}</p>
          
        </Grid>
          
        </Stack>

       {/* <h4>Chat Room</h4> */}
      </Box>
    </Stack>
  );
}
