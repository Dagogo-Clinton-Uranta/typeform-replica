import React, { useState } from 'react';
import { Button, Menu, MenuItem, Grid, Box, Typography } from '@mui/material';
import { PiCaretDown } from 'react-icons/pi';
import { Link } from 'react-router-dom';

const ServicesPopupMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Generate menu items for columns
  const generateMenuItems = (columnIndex) => {
    return Array.from({ length: 5 }, (_, index) => (
      <MenuItem key={`${columnIndex}-${index}`} onClick={handleClose}>
        Item {columnIndex * 5 + index + 1}
      </MenuItem>
    ));
  };

  return (
    <div>
      <Button style={{color:"white",fontSize:"1.2rem",fontWeight:"400"}}
        aria-controls="popup-menu" 
        aria-haspopup="true" 
        onClick={handleClick}
      >
        Services <PiCaretDown />
      </Button>

      <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleClose}
      PaperProps={{
        style: {
          width: '600px', // Adjust width as needed
          padding: '16px',
          backgroundColor:"#FFFFFF"
        },
      }}
    >
      <Box display="flex" justifyContent="space-between">
        {/* First Column */}
        <Box width="45%">
          <Typography variant="h6" sx={{ color: '#000000', mb: 2 }}>
            Platform
          </Typography>
          <Link style={{textDecoration:"none",color: 'gray',}} to={"/signalwire-services"} >
            Signalwire development
            </Link>

          

          <Typography variant="h6" sx={{ color: '#000000', mt: 4, mb: 2 }}>
          <Link style={{textDecoration:"none"}} to={"/web-development-services"} >
           Web Development
            </Link>
          </Typography>
          <Typography variant="body2" sx={{ color: 'gray', mb: 1 }}>
            <Link style={{textDecoration:"none",color: 'gray',}} to={"/home"} >
            Frontend development
            </Link>
          </Typography>
          <Typography variant="body2" sx={{  mb: 2 }}>
          <Link style={{textDecoration:"none",color: 'gray'}} to={"/backend-services"} >
            Backend development
            </Link>
          </Typography>

          <Typography variant="h6" sx={{ color: '#000000', mb: 2 }}>
          <Link style={{textDecoration:"none"}} to={"/devops-services"} >
            DevOps Services
            </Link>
          </Typography>

          <Typography variant="h6" sx={{ color: '#000000', mt: 4, mb: 2 }}>
            VoIP Development
          </Typography>
          <MenuItem sx={{ color: 'gray' }}><Link style={{textDecoration:"none",color: 'gray',}} to={"/freeswitch-services"} >Freeswitch Development</Link></MenuItem>
          <MenuItem sx={{ color: 'gray' }}><Link style={{textDecoration:"none",color: 'gray',}} to={"/webrtc-services"} >Web RTC Development</Link></MenuItem>
          <MenuItem sx={{ color: 'gray' }}><Link style={{textDecoration:"none",color: 'gray',}} to={"/asterisk-services"} >Asterisks Development</Link></MenuItem>
           <MenuItem sx={{ color: 'gray' }}><Link style={{textDecoration:"none",color: 'gray',}} to={"/open-sip-services"} >OpenSIPS Development</Link></MenuItem>
           <MenuItem sx={{ color: 'gray' }}><Link style={{textDecoration:"none",color: 'gray',}} to={"/kamailio-services"} >Kamailio Development</Link></MenuItem>
        </Box>

        {/* Second Column */}
        <Box width="45%">
          <Typography variant="h6" sx={{ color: '#000000', mb: 2 }}>
            Mobile Development
          </Typography>
          <MenuItem sx={{ color: 'gray' }}> <Link style={{textDecoration:"none",color: 'gray',}} to={"/android-services"} >Android Development</Link></MenuItem>
          <MenuItem sx={{ color: 'gray' }}><Link style={{textDecoration:"none",color: 'gray',}} to={"/ios-services"} >iOS Development</Link></MenuItem>
          <MenuItem sx={{ color: 'gray' }}><Link style={{textDecoration:"none",color: 'gray',}} to={"/react-native-services"} >React Native Development</Link></MenuItem>
          <MenuItem sx={{ color: 'gray' }}><Link style={{textDecoration:"none",color: 'gray',}} to={"/flutter-services"} >Flutter Development</Link></MenuItem>

          <Box mt={6}> {/* Adjust margin-top to align with "VoIP Development" */}
            <Typography variant="h6" sx={{ color: '#000000', mb: 2 }}>
              Open Source
            </Typography>
            <MenuItem sx={{ color: 'gray' }}><Link style={{textDecoration:"none",color: 'gray',}} to={"/sip-services"} >SIP.js Development</Link></MenuItem>
            <MenuItem sx={{ color: 'gray' }}><Link style={{textDecoration:"none",color: 'gray',}} to={"/kazoo-services"} >KAZOO Development</Link></MenuItem>
            <MenuItem sx={{ color: 'gray' }}><Link style={{textDecoration:"none",color: 'gray',}} to={"/vicidial-services"} >VICIdial Development</Link></MenuItem>
            <MenuItem sx={{ color: 'gray' }}><Link style={{textDecoration:"none",color: 'gray',}} to={"/fusionpbx-services"} >FusionPBX Development</Link></MenuItem>
            <MenuItem sx={{ color: 'gray' }}><Link style={{textDecoration:"none",color: 'gray',}} to={"/linphone-services"} >Linphone Development</Link></MenuItem>
          </Box>
        </Box>
      </Box>
    </Menu>


    </div>
  );
};

export default ServicesPopupMenu;
