import PropTypes from 'prop-types';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Stack, AppBar, Toolbar, IconButton, Typography, Grid, Button } from '@mui/material';
// utils
import { bgBlur } from '../../../utils/cssStyles';
// components
import Iconify from '../../../general-components/iconify';
//
import Searchbar from './Searchbar2';
import AccountPopover from './AccountPopover';
import NotificationsPopover from './NotificationsPopover';
import Searchbar2 from './Searchbar2';
import { useSelector } from 'react-redux';
import CustomSearchBar from 'src/general-components/global/CustomSearchBar';

// ----------------------------------------------------------------------

const NAV_WIDTH = 280;

const HEADER_MOBILE = 64;

const HEADER_DESKTOP = 92;

const StyledRoot = styled(AppBar)(({ theme }) => ({
  ...bgBlur({ color: theme.palette.background.default }),
  backgroundColor: '#FFFBEE',
  boxShadow: 'none',
  [theme.breakpoints.up('lg')]: {
    width: `calc(100% - ${NAV_WIDTH + 1}px)`,
  },
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: HEADER_MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: HEADER_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

// ----------------------------------------------------------------------

Header.propTypes = {
  onOpenNav: PropTypes.func,
};

export default function Header({ onOpenNav }) {
  const { user } = useSelector((state) => state.auth);
  return (
    <StyledRoot>
      <StyledToolbar>
        <IconButton
          onClick={onOpenNav}
          sx={{
            mr: 1,
            color: 'text.primary',
            display: { lg: 'none' },
          }}
        >
          <Iconify icon="eva:menu-2-fill" />
        </IconButton>
        <Typography variant="h4" sx={{color: '#000000', fontSize: '36px' }}>
       <b> Dashboard</b>
         {/* Welcome {user?.firstName + " " + user?.lastName}🖐🏽 */}
        </Typography>

        <Box sx={{ flexGrow: 1 }} />
        <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%' }}>
        <CustomSearchBar title="Search anything..."/>
      </Box>
      &nbsp; &nbsp;
      <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          variant="contained"
          style={{ minHeight: '50px', minWidth: '145px', backgroundColor: /*'#2E2779'*/ '#000000' }}
        >
          SEARCH
        </Button>
      </Box>
    </Grid>
        {/* <Searchbar /> */}
        {/* <Searchbar2 /> */}
        <Box sx={{ flexGrow: 1 }} />
       
      
        <Stack
        
          direction="row"
          alignItems="center"
          spacing={{
            xs: 0.5,
            sm: 1,
          }}
        >
          {/* <NotificationsPopover /> */}
          <AccountPopover />
        </Stack> 

        <Stack
        style={{marginLeft:"0.8rem"}}
          direction="column"
          alignItems="flex-start"
          spacing={{
            xs: 0.1,
            sm: 0.1,
          }}
        >
        <Typography variant="p" sx={{color: '#000000' }}>
        Profile &nbsp;
        </Typography>
        <Typography variant="h5" sx={{color: '#000000' }}>
      {user && user.firstName && user.lastName? user.firstName + " " +  user.lastName:" John Smith" }&nbsp;
        </Typography>
       
        </Stack> 
       
      </StyledToolbar>
    </StyledRoot>
  );
}
