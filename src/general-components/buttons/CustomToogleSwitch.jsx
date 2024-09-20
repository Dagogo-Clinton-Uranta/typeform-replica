import React, { useState } from 'react';
import { Button, Box } from '@mui/material';

const CustomToggleSwitch = ({activeButton, setActiveButton, handleViewStudentsClick, handleAddStudentsClick}) => {


  return (
    <Box
      sx={{
        display: 'flex',
        borderRadius: '20px',
        overflow: 'hidden',
        padding: '4px',
        backgroundColor: '#F9F9F9',
      }}
    >
      <Button
        variant={activeButton === 'viewStudents' ? 'contained' : 'outlined'}
        style={{
          minHeight: '50px',
          minWidth: '180px',
          backgroundColor: activeButton === 'viewStudents' ? '#000000' : 'transparent',
          color: activeButton === 'viewStudents' ? '#fff' : '#000000',
          border: 'none',
          borderRadius: '20px',
          marginRight: '4px',
        }}
        onClick={handleViewStudentsClick}
      >
        View Students
      </Button>
      <Button
        variant={activeButton === 'addStudents' ? 'contained' : 'outlined'}
        style={{
          minHeight: '50px',
          minWidth: '180px',
          backgroundColor: activeButton === 'addStudents' ? '#000000' : 'transparent',
          color: activeButton === 'addStudents' ? '#fff' : '#000000',
          border: 'none',
          borderRadius: '20px',
        }}
        onClick={handleAddStudentsClick}
      >
        Add Students
      </Button>
    </Box>
  );
};

export default CustomToggleSwitch;
