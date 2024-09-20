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

import bot from 'src/assets/images/bot.jpeg'


// ----------------------------------------------------------------------

const MENU_OPTIONS = [
  
];

// ----------------------------------------------------------------------

export default function RecordingPopover() {
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
        onClick={/*handleOpen*/()=>{navigate('/dashboard/quiz')}}
        sx={{
          p: 0,
          width: '100%',
          height: '3rem',
          borderRadius: '2rem',
          fontSize:"1.2rem",
          color:"white",
          backgroundColor:/*'#2E2779'*/ '#000000',
          ...(open && {
            '&:before': {
              zIndex: 1,
              content: "''",
              width: '105%',
              height: '3rem',
              borderRadius: '1rem',
              position: 'absolute',
              color:"white",
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.6),
              //backgroundColor:/*'#2E2779'*/ '#000000',
            },
          }),
        }}
      >
      Start
      </IconButton>
      {/*<ArrowDropDownIcon sx={{color: 'black'}} onClick={handleOpen}/>*/}
      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'center', horizontal: 'left' }}
        transformOrigin={{ vertical: 'center', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 2,
            mt: 1.5,
            ml: 0.75,
            // width: 180,
            width: '40%',
            height:"100%",
            backgroundColor:"#FFFFFF",
            borderRadius: '15px',
            '& .MuiMenuItem-root': {
              typography: 'body2',
              borderRadius: 0.75,
              borderRadius: '15px'
            },
          },
        }}
      >
       <Container style={{display: 'flex',flexDirection:"row",justifyContent:"center",gap:"5%"}}>

        <img src={bot} style={{height:"10rem",marginTop:"2%"}} alt="robot assistant"/>

           <Container   style={{display: 'flex',flexDirection:"column" ,justifyContent: 'space-between',flex:2, border: '1px solid #0000001A',  paddingTop: '5%',  marginTop: '2%', marginBottom: '2%', borderRadius: '15px',backgroundColor:"#FAFAFA" }}>    
     

      
       {/*<div style={{display: 'flex',flexDirection:"row", justifyContent: 'center'}}> <h4>COMMENTS </h4> </div>*/}
     
     

        <textarea rows="30"  style={{marginBottom:"1rem",borderRadius:"0.5rem",backgroundColor:"#FFFDFD", borderColor:"lightgrey"}} >
        
        </textarea>

          <div style={{display:"flex",alignItems:"center", justifyContent: 'center',gap:"1.2rem"}}>
            <Button onClick={()=>{}}  style={{backgroundColor: /*'#2E2779'*/ '#000000',height:"3rem",width:"6rem" ,color:'white',marginBottom:"3.5rem" }}>
            { loading?"Loading":"Start"}
            </Button>

            <Button onClick={()=>{}}  style={{backgroundColor: 'red',height:"3rem",width:"6rem" ,color:'white',marginBottom:"3.5rem" }}>
            { loading?"Loading":"Record"}
            </Button>
          </div>

    {/*<div style={{display: 'flex',flexDirection:"row", justifyContent: 'space-evenly',alignItems:"center"}}>
     
     <div style={{display: 'flex',alignItems:"center", justifyContent: 'center',color:"white",backgroundColor:"green",height:"2.5rem",width:"2.5rem",borderRadius:"50%"}}><FaThumbsUp /></div>
     <p>Was This Helpful?</p>
     <div style={{display: 'flex',alignItems:"center", justifyContent: 'center',color:"white",backgroundColor:"red",borderRadius:"50%",height:"2.5rem",width:"2.5rem",borderRadius:"50%"}}><FaThumbsDown /></div>

      </div>*/}


     </Container>

 </Container>
  
      </Popover>
    </>
  );
}
