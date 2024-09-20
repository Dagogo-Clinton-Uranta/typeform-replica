import React, { useState } from 'react';
import { Button, Menu, MenuItem, Grid, Box, Typography } from '@mui/material';
import { PiCaretDown } from 'react-icons/pi';
import { Link } from 'react-router-dom';

const SolutionsPopupMenu = () => {
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
        Solutions <PiCaretDown />
      </Button>

      <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleClose}
      PaperProps={{
        style: {
          width: '900px', // 3 columns of 30% width plus 2 gaps of 5% width each
          padding: '16px',
          backgroundColor:"#FFFFFF"
        },
      }}
    >

       <Typography
            variant="h6"
            sx={{ color: '#A9A9A9',fontSize:"1.2rem" ,fontWeight: 800, mb: 3 }}
          >
            TAILORCRAFT SOLUTIONS
          </Typography>


      <Box display="flex" justifyContent="space-between">
        {/* First Column */}
        <Box width="30%">
        <Link style={{textDecoration:"none" }} to={'/multi-tenant-solutions'}>
          <Typography
            variant="h6"
            sx={{ color: '#000000', fontWeight: 600, mb: 4 }}
          >
            Multi Tenant IP PBX Solution
          </Typography>
          </Link>
          <Typography
            variant="h6"
            sx={{ color: '#000000', fontWeight: 600, mb: 4 }}
          >
            Call Center Solution
          </Typography>
          
          <Link style={{textDecoration:"none" }} to={'/voice-broadcasting-solutions'}>
            <Typography
              variant="h6"
              sx={{ color: '#000000',fontWeight: 600, mb: 4 }}
            >
             Voice Broadcasting Solution
            </Typography>
          </Link>


          <Link style={{textDecoration:"none" }} to={'/conferencing-solutions'}>
            <Typography
              variant="h6"
              sx={{ color: '#000000',fontWeight: 600, mb: 4 }}
            >
             Audio & Video Conferencing Solution
            </Typography>
          </Link>

          <Link style={{textDecoration:"none" }} to={'/communications-solutions'}>
            <Typography
              variant="h6"
              sx={{ color: '#000000',fontWeight: 600, mb: 4 }}
            >
             Unified Communications Solution
            </Typography>
          </Link>
        </Box>

        {/* Second Column */}
        <Box width="30%">

        <Link style={{textDecoration:"none" }} to={'/class-five-softswitch-solutions'}>
          <Typography
            variant="h6"
            sx={{ color: '#000000', fontWeight: 600, mb: 4 }}
          >
            Class 5 Softswitch Solution
          </Typography>
          </Link>
         


        <Link style={{textDecoration:"none" }} to={'/class-four-softswitch-solutions'}>
          <Typography
            variant="h6"
            sx={{ color: '#000000', fontWeight: 600, mb: 4 }}
          >
            Class 4 Softswitch Solution
          </Typography>
          </Link>

         
         
         
          <Link style={{textDecoration:"none" }} to={'/voip-billing-solutions'}>
            <Typography
              variant="h6"
              sx={{ color: '#000000',fontWeight: 600, mb: 4 }}
            >
              VoIP Billing Solution
            </Typography>
          </Link>


          <Link style={{textDecoration:"none" }} to={'/call-center-solutions'}>
          <Typography
            variant="h6"
            sx={{ color: '#000000', fontWeight: 600, mb: 4 }}
          >
            Call Center Solution
          </Typography>
          </Link>


          <Link style={{textDecoration:"none" }} to={'/enterprise-voip-solutions'}>
          <Typography
            variant="h6"
            sx={{ color: '#000000', fontWeight: 600, mb: 4 }}
          >
            Enterprise VoIP Solution
          </Typography>
          </Link>
        </Box>

        {/* Third Column */}
        <Box width="30%">
            
        <Link style={{textDecoration:"none" }} to={'/faxing-solutions'}>
            <Typography
              variant="h6"
              sx={{ color: '#000000',fontWeight: 600, mb: 4 }}
            >
            Faxing Solution 
            </Typography>
          </Link>

          <Link style={{textDecoration:"none" }} to={'/live-call-monitoring-solutions'}>
            <Typography
              variant="h6"
              sx={{ color: '#000000',fontWeight: 600, mb: 4 }}
            >
          Live Call Monitoring Solution
            </Typography>
          </Link>


          <Link style={{textDecoration:"none" }} to={'/pc-dialer-solutions'}>
            <Typography
              variant="h6"
              sx={{ color: '#000000',fontWeight: 600, mb: 4 }}
            >
          PC Dialer
            </Typography>
           </Link>
           <Link style={{textDecoration:"none" }} to={'/mobile-sip-solutions'}>
            <Typography
              variant="h6"
              sx={{ color: '#000000',fontWeight: 600, mb: 4 }}
            >
            Mobile Dialer
            </Typography>
          </Link>
        </Box>
      </Box>
    </Menu>


    </div>
  );
};

export default SolutionsPopupMenu;
