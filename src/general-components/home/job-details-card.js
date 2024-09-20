import React from 'react'


import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// @mui
import { useTheme, styled } from '@mui/material/styles';
import { Grid, Container, Typography, Button, Paper, CircularProgress, Divider, Select, MenuItem, makeStyles, TextField, InputAdornment, IconButton, CssBaseline } from '@mui/material';

//react-icons
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi"
import { IoMdAdd } from "react-icons/io";
import CommentsPopover from 'src/layouts/components/CommentsPopover';




const RespGrid = styled('div')(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
      //gridTemplateColumns: "repeat(1, 1fr)",
      display:"flex",
      flexDirection:"column",
      justifyItems:"center",
      alignItems:"center",
      width:"100%",
      padding:"0px"
     
    },
  
    [theme.breakpoints.up('md')]: {
      //gridTemplateColumns: "repeat(1, 1fr)",
      width:"100%",
      padding:"0px",
      display:"flex",
      flexDirection:"column",
      justifyItems:"center",
      alignItems:"center",
  
    },
  }));
  
  
  const RespHeading = styled('div')(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
      
      marginLeft:"3rem"
      
    },
  
  
    [theme.breakpoints.up('md')]: {
      marginLeft:"3.5rem"
    },
  
   
  
  
  }));
  

function JobDetailsCard({title,details,changeToJobList,changeToProjectMgt, changeToInterview,changeToSummary,changeToOverview,detailsObj,expectations}) {






  return (
    <Container  style={{padding:"0px",flexDirection:"column",display: 'flex', justifyContent: 'flex-start',alignItems:"flex-start",flex:6, border: '1px solid #0000001A',  marginTop: '2%', marginBottom: '2%', borderRadius: '15px', backgroundColor:"#FFFFFF", }}>
   

    <RespHeading >
        <h3>You Should Know</h3> 
      </RespHeading> 
         
      <div style={{margin:"0 auto",marginBottom:"1rem",display:"flex",justifyContent:"space-between",alignItems:"center",width:"19rem",gap:"1.5rem"}}>
       <span  onClick={()=>{

        console.log("details obj-->",detailsObj)

        detailsObj.detail1?
        changeToJobList():
        detailsObj.detail2?
        changeToProjectMgt():
        detailsObj.detail3?
        changeToSummary():
        detailsObj.detail4 &&
        changeToOverview()


       }} style={{width:"1.5rem",height:"1.5rem",borderRadius:"50%",color:"white",backgroundColor:/*'#2E2779'*/ '#000000',display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer"}}> <PiCaretLeftBold  /> </span>
        <span>{title}</span>
       <span onClick={()=>{
      
      console.log("details obj--->",detailsObj)

        detailsObj.detail1 || title==="Project Manager Essentials"?
        changeToSummary():
        detailsObj.detail2  || title==="Summary"?
        changeToOverview():
        detailsObj.detail3 || title==="Overview"?
        changeToInterview():
        (detailsObj.detail4  || title==="Interview Questions")&&
         changeToJobList()

       }} style={{width:"1.5rem",height:"1.5rem",borderRadius:"50%",color:"white",backgroundColor:/*'#2E2779'*/ '#000000',display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer"}}>  <PiCaretRightBold /></span>
      </div>
    
             <RespGrid>
             <div onClick={()=>{}}
            style={{ backgroundPosition: 'center', 
            backgroundColor:"#FFFDFD",
            borderTop:"1px solid lightgrey",
            
            borderBottom:"1px solid lightgrey",
            backgroundSize: 'cover', width:"100%",display:"flex",flexDirection:"column",justifyContent:"flex-start",paddingLeft:"10%",paddingBottom:"0.5rem",paddingTop:"0%",alignItems:"flex-start",color:"black",
            backgroundRepeat: 'no-repeat' }}>
              
              <h3>{title}</h3>
               <ul>
                {details.map((item)=>(
                <li>{item}</li>
                ))
              }
               </ul>
            
            </div>
             </RespGrid>
    
    
         {expectations &&
             <div style={{display:"flex",justifyContent:"flex-end",width:"100%",padding:"1rem"}}>
              <CommentsPopover/>
             </div>
         }
    
        
    
        
      </Container>
  )
}

export default JobDetailsCard