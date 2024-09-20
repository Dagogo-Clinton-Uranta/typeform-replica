import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import InfoIcon from '@mui/icons-material/Info';
import HomeIcon from '@mui/icons-material/Home';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';

export default function HamburgerMenu() {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    
  };

  return (
    <React.Fragment >
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', display:{/*xl:"none", lg:"none",md:"none",*/sm:"inline",xs:"inline"}}}>
      
        <Tooltip title="Menu">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 35, height: 35 ,backgroundColor:"#27374C"}}><MenuIcon/></Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <Link style={{textDecoration:"none"}} to="/call-center-solutions">
        <MenuItem >
        <ListItemIcon>
            <HomeIcon fontSize="small" />
          </ListItemIcon>
           <span >
           Home
           </span>
           
        </MenuItem>
        </Link>

        <Divider />
        <Link style={{textDecoration:"none"}} to="/loan-inquiry">
        <MenuItem >
        <ListItemIcon>
            <InfoIcon fontSize="small" />
          </ListItemIcon>
          <span >
           Loan Inquiry
           </span>
        </MenuItem>
        </Link>



        <Divider />
        <Link style={{textDecoration:"none"}} to="/loan-refund">
        <MenuItem >
        <ListItemIcon>
            <InfoIcon fontSize="small" />
          </ListItemIcon>
          <span >
           Loan Refund
           </span>
        </MenuItem>
        </Link>


        <Divider />
        <Link style={{textDecoration:"none"}} to="/loan-reminder">
        <MenuItem >
        <ListItemIcon>
            <InfoIcon fontSize="small" />
          </ListItemIcon>
          <span >
           Loan Reminder
           </span>
        </MenuItem>
        </Link>


        <Divider />
        <Link style={{textDecoration:"none"}} to="/loan-renewal">
        <MenuItem >
        <ListItemIcon>
            <InfoIcon fontSize="small" />
          </ListItemIcon>
          <span >
           Loan Renewal
           </span>
        </MenuItem>
        </Link>



        <Divider />
        <Link style={{textDecoration:"none"}} to="/year-end-summary">
        <MenuItem >
        <ListItemIcon>
            <InfoIcon fontSize="small" />
          </ListItemIcon>
          <span >
           Year End Summary
           </span>
        </MenuItem>
        </Link>


        <Divider />
        <Link style={{textDecoration:"none"}} to="/loan-paid-off">
        <MenuItem >
        <ListItemIcon>
            <InfoIcon fontSize="small" />
          </ListItemIcon>
          <span >
           Loan Paid Off
           </span>
        </MenuItem>
        </Link>




        <Divider />
        <Link style={{textDecoration:"none"}} to="/loan-approved">
        <MenuItem >
        <ListItemIcon>
            <InfoIcon fontSize="small" />
          </ListItemIcon>
          <span >
           Loan Approved
           </span>
        </MenuItem>
        </Link>



        <Divider />
        <Link style={{textDecoration:"none"}} to="/loan-feedback">
        <MenuItem >
        <ListItemIcon>
            <InfoIcon fontSize="small" />
          </ListItemIcon>
          <span >
           Loan Feedback
           </span>
        </MenuItem>
        </Link>



        <Divider />
        <Link style={{textDecoration:"none"}} to="/loan-update">
        <MenuItem >
        <ListItemIcon>
            <InfoIcon fontSize="small" />
          </ListItemIcon>
          <span >
           Loan Update
           </span>
        </MenuItem>
        </Link>



        <Divider />
        <Link style={{textDecoration:"none"}} to="/loan-refinance">
        <MenuItem >
        <ListItemIcon>
            <InfoIcon fontSize="small" />
          </ListItemIcon>
          <span >
           Loan Refinance
           </span>
        </MenuItem>
        </Link>


        <Divider />
        <Link style={{textDecoration:"none"}} to="/loan-sign">
        <MenuItem >
        <ListItemIcon>
            <InfoIcon fontSize="small" />
          </ListItemIcon>
          <span >
           Sign Loan
           </span>
        </MenuItem>
        </Link>


        <Divider />
        <Link style={{textDecoration:"none"}} to="/loan-account-statement">
        <MenuItem >
        <ListItemIcon>
            <InfoIcon fontSize="small" />
          </ListItemIcon>
          <span >
           Loan Account Statement
           </span>
        </MenuItem>
        </Link>


        <Divider />
        <Link style={{textDecoration:"none"}} to="/holiday-message">
        <MenuItem >
        <ListItemIcon>
            <InfoIcon fontSize="small" />
          </ListItemIcon>
          <span >
           Holiday Message
           </span>
        </MenuItem>
        </Link>


        <Divider />
        <Link style={{textDecoration:"none"}} to="/loan-terms-change">
        <MenuItem >
        <ListItemIcon>
            <InfoIcon fontSize="small" />
          </ListItemIcon>
          <span >
           Loan Terms Change
           </span>
        </MenuItem>
        </Link>


        <Divider />
        <Link style={{textDecoration:"none"}} to="/inconvenience-message">
        <MenuItem >
        <ListItemIcon>
            <InfoIcon fontSize="small" />
          </ListItemIcon>
          <span >
           Inconvenience Message
           </span>
        </MenuItem>
        </Link>
        

        <Divider />
        <Link style={{textDecoration:"none"}} to="/loan-additional-info">
        <MenuItem >
        <ListItemIcon>
            <InfoIcon fontSize="small" />
          </ListItemIcon>
          <span >
           Loan Additional Info
           </span>
        </MenuItem>
        </Link>


        <Divider />
        <Link style={{textDecoration:"none"}} to="/loan-pre-approved">
        <MenuItem >
        <ListItemIcon>
            <InfoIcon fontSize="small" />
          </ListItemIcon>
          <span >
           Loan Pre Approved
           </span>
        </MenuItem>
        </Link>



        <Divider />
        <Link style={{textDecoration:"none"}} to="/loan-special-offer">
        <MenuItem >
        <ListItemIcon>
            <InfoIcon fontSize="small" />
          </ListItemIcon>
          <span >
           Loan Special Offer
           </span>
        </MenuItem>
        </Link>


        <Divider />
        <Link style={{textDecoration:"none"}} to="/loan-past-due">
        <MenuItem >
        <ListItemIcon>
            <InfoIcon fontSize="small" />
          </ListItemIcon>
          <span >
           Loan Past Due
           </span>
        </MenuItem>
        </Link>
        

       
       
        
      </Menu>
    </React.Fragment>
  );
}