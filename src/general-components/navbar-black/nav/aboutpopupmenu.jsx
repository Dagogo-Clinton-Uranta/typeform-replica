import React, { useState } from 'react';
import { Button, Menu, MenuItem, Grid, Box, Typography } from '@mui/material';
import { PiCaretDown } from 'react-icons/pi';
import { Link } from 'react-router-dom';

const AboutPopupMenu = () => {
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
      <Button style={{color:"black",fontSize:"1.2rem",fontWeight:"400"}}
        aria-controls="popup-menu" 
        aria-haspopup="true" 
        onClick={handleClick}
      >
        About <PiCaretDown />
      </Button>

      <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleClose}
      PaperProps={{
        style: {
          width: '75%', // Container element occupies 75% of the available space
          padding: '16px',
          backgroundColor:"#FFFFFF",
          maxWidth:"500px"
        },
      }}
    >
      <Box display="flex" justifyContent="center" width="90%">
        {/* First Column */}
        <Box width="45%">
          <Typography
            variant="h6"
            sx={{ color: '#000000', fontWeight: 600, mb: 2, textAlign: 'left' }}
          >
            Overview
          </Typography>
          <Box>
          <Link style={{textDecoration:"none" }} to={'/about-us'}>
            <MenuItem sx={{ color: 'gray', justifyContent: 'flex-start' }}>
              About Us
            </MenuItem>
            </Link>
            <MenuItem sx={{ color: 'gray', justifyContent: 'flex-start' }}>
              Career
            </MenuItem>

            <Link style={{textDecoration:"none" }} to={'/itpl'}>
            <MenuItem sx={{ color: 'gray', justifyContent: 'flex-start' }}>
              Life at iTPL
            </MenuItem>
            </Link>
            
          </Box>
        </Box>

        {/* Second Column */}
        <Box width="45%">
          <Typography
            variant="h6"
            sx={{ color: '#000000', fontWeight: 600, mb: 2, textAlign: 'left' }}
          >
            Mobile Development
          </Typography>
          <Box>
          <Link style={{textDecoration:"none" }} to={'/blogs'}>
            <MenuItem sx={{ color: 'gray', justifyContent: 'flex-start' }}>
              Blog
            </MenuItem>
            </Link>

            <Link style={{textDecoration:"none" }} to={'/news'}>
            <MenuItem sx={{ color: 'gray', justifyContent: 'flex-start' }}>
              News
            </MenuItem>
            </Link>

            <MenuItem sx={{ color: 'gray', justifyContent: 'flex-start' }}>
              Corporate Events
            </MenuItem>
          </Box>
        </Box>
      </Box>
    </Menu>


    </div>
  );
};

export default AboutPopupMenu;
