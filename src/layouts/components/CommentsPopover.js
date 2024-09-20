import { useState } from 'react';
// @mui
import { alpha } from '@mui/material/styles';
import { Box, Divider, Typography, Stack, MenuItem, Avatar, IconButton, Popover, Grid, Container, Button } from '@mui/material';
// mocks_

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'src/redux/actions/auth.action';
import { useNavigate } from 'react-router-dom';
import { MdComment } from "react-icons/md";
import { FaThumbsUp } from "react-icons/fa6";
import { FaThumbsDown } from "react-icons/fa6";


// ----------------------------------------------------------------------

const MENU_OPTIONS = [
  
];

// ----------------------------------------------------------------------

export default function CommentsPopover() {
  const [open, setOpen] = useState(null);
  const [loading, setLoading] = useState(false);

  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          p: 0,
          width: '3rem',
          height: '3rem',
          borderRadius: '50%',
          color:"white",
          backgroundColor:/*'#2E2779'*/ '#000000',
          ...(open && {
            '&:before': {
              zIndex: 1,
              content: "''",
              width: '3rem',
              height: '3rem',
              borderRadius: '50%',
              position: 'absolute',
              color:"white",
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8),
              //backgroundColor:/*'#2E2779'*/ '#000000',
            },
          }),
        }}
      >
       <MdComment />
      </IconButton>
      {/*<ArrowDropDownIcon sx={{color: 'black'}} onClick={handleOpen}/>*/}
      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 0,
            mt: 1.5,
            ml: 0.75,
            // width: 180,
            width: 300,
            borderRadius: '15px',
            '& .MuiMenuItem-root': {
              typography: 'body2',
              borderRadius: 0.75,
              borderRadius: '15px'
            },
          },
        }}
      >
           <Container   style={{display: 'flex',flexDirection:"column", justifyContent: 'space-between',flex:2, border: '1px solid #0000001A',   marginTop: '2%', marginBottom: '2%', borderRadius: '15px',backgroundColor:"#FAFAFA" }}>    
     
      
       <div style={{display: 'flex',flexDirection:"row", justifyContent: 'center'}}> <h4>COMMENTS </h4> </div>
     
     

        <textarea rows="8"  style={{marginBottom:"1rem",borderRadius:"0.5rem",backgroundColor:"#FFFDFD", borderColor:"lightgrey"}} >
        
        </textarea>

          <div style={{display:"flex",alignItems:"center", justifyContent: 'center'}}>
            <Button onClick={()=>{}}  style={{backgroundColor: /*'#2E2779'*/ '#000000',height:"3rem",width:"6rem" ,color:'white',marginBottom:"3.5rem" }}>
            { loading?"Loading":"Save"}
            </Button>
          </div>

    <div style={{display: 'flex',flexDirection:"row", justifyContent: 'space-evenly',alignItems:"center"}}>
     
     <div style={{display: 'flex',alignItems:"center", justifyContent: 'center',color:"white",backgroundColor:"green",height:"2.5rem",width:"2.5rem",borderRadius:"50%"}}><FaThumbsUp /></div>
     <p>Was This Helpful?</p>
     <div style={{display: 'flex',alignItems:"center", justifyContent: 'center',color:"white",backgroundColor:"red",borderRadius:"50%",height:"2.5rem",width:"2.5rem",borderRadius:"50%"}}><FaThumbsDown /></div>

    </div>


     </Container>
  
      </Popover>
    </>
  );
}
