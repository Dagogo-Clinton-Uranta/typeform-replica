import React, { useState } from 'react';
import { Button, Menu, MenuItem, Grid, Box, Typography } from '@mui/material';
import { PiCaretDown } from 'react-icons/pi';
import { Link } from 'react-router-dom';

const OfferingsPopupMenu = () => {
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
        Offerings <PiCaretDown />
      </Button>

      <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleClose}
      PaperProps={{
        style: {
          width: '80%', // 80% width for the column
          maxWidth: '600px', // optional: maximum width for large screens
          padding: '48px',
          paddingLeft: '24px',
          
          backgroundColor:"#FFFFFF"
        },
      }}
    >
      <Box width="100%">
        {/* First Heading and Content */}
        <Link style={{textDecoration:"none"}} to={'/voip-dev-offerings'}>
        <Typography
          variant="h6"
          sx={{ color: '#000000', fontWeight: 600, mb: 0, textAlign: 'left' }}
        >
          VoIP Development
        </Typography>
        </Link>
        <Typography
          variant="body2"
          sx={{ color: 'gray', mb: 2, textAlign: 'left' }}
        >
          Quality communication propels ambitions and growth in organizations.
        </Typography>

        {/* Second Heading and Content */}
        <Link style={{textDecoration:"none"}} to={'/mobile-dev-offerings'}>
           <Typography
             variant="h6"
             sx={{ color: '#000000', fontWeight: 600, mb: 0, textAlign: 'left',textDecoration:"none" }}
           >
             Mobile App Development
           </Typography>
        </Link>

        <Typography
          variant="body2"
          sx={{ color: 'gray', mb: 2, textAlign: 'left' }}
        >
          Extend your reach and clientele with highly engaging mobile applications.
        </Typography>

        {/* Third Heading and Content */}
        <Link style={{textDecoration:"none"}} to={'/web-development-services'}> 
           <Typography
             variant="h6"
             sx={{ color: '#000000', fontWeight: 600, mb: 0, textAlign: 'left' }}
           >
             Web Development
           </Typography>
        </Link>


        <Typography
          variant="body2"
          sx={{ color: 'gray', mb: 2, textAlign: 'left' }}
        >
          Reduce bounce rates, increase navigation, and improve returning visitors.
        </Typography>

        {/* Fourth Heading and Content */}

        <Link style={{textDecoration:"none"}} to={'/devops-services'}> 
           <Typography
             variant="h6"
             sx={{ color: '#000000', fontWeight: 600, mb: 0, textAlign: 'left' }}
           >
             DevOps Services
           </Typography>
        </Link>


        <Typography
          variant="body2"
          sx={{ color: 'gray', textAlign: 'left' }}
        >
          Propel your business scale by harmonizing development and operational jobs.
        </Typography>
      </Box>
    </Menu>


    </div>
  );
};

export default OfferingsPopupMenu;
