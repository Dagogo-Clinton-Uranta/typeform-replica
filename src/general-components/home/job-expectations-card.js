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
import MAINCOMPANY from 'src/assets/images/maincompany.png'



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
  

function JobExpectationsCard({title,image,info,changeToTools,changeToRoles,changeToExpectationsList, changeToMain,infosObj,expectations}) {






  return (
    <Container  style={{padding:"0px",flexDirection:"column",display: 'flex', justifyContent: 'flex-start',alignItems:"flex-start",flex:6, border: '1px solid #0000001A',  marginTop: '2%', marginBottom: '2%', borderRadius: '15px', backgroundColor:"#FFFFFF", }}>
   

    <RespHeading >
        <h3>Job Expectations</h3> 
      </RespHeading> 
         
      <div style={{margin:"0 auto",marginBottom:"1rem",display:"flex",justifyContent:"space-between",alignItems:"center",width:"19rem",gap:"1.5rem"}}>
       <span  onClick={()=>{

        console.log("details obj-->",infosObj)
        infosObj.expectationsList?
        changeToTools():
        infosObj.info1?
        changeToExpectationsList():
        infosObj.info2?
        changeToMain():
        infosObj.info3 &&
        changeToRoles()


       }} style={{width:"1.5rem",height:"1.5rem",borderRadius:"50%",color:"white",backgroundColor:/*'#2E2779'*/ '#000000',display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer"}}> <PiCaretLeftBold  /> </span>
        <span>{title}</span>
       <span onClick={()=>{
      
      console.log("infos obj--->",infosObj)
      infosObj.expectationsList?
       changeToMain():
        infosObj.info1 ?
        changeToRoles():
        infosObj.info2  ?
        changeToTools():
        infosObj.info3 && 
        
        changeToExpectationsList()
       }} style={{width:"1.5rem",height:"1.5rem",borderRadius:"50%",color:"white",backgroundColor:/*'#2E2779'*/ '#000000',display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer"}}>  <PiCaretRightBold /></span>
      </div>
    
             <RespGrid>
             <div onClick={()=>{}}
         style={{ backgroundPosition: 'center', 
         backgroundColor:"#FFFDFD",
         borderTop:"1px solid lightgrey",
         height:"360px",
         borderBottom:"1px solid lightgrey",
            backgroundSize: 'cover', width:"100%",display:"flex",flexDirection:"column",justifyContent:"flex-start",paddingLeft:"6%",paddingBottom:"0.5rem",paddingTop:"0%",alignItems:"flex-start",color:"black",
            backgroundRepeat: 'no-repeat' }}>

   
    <>
             {!info.subTitle &&  <h3 style={{ marginLeft:"5%"}}>{info.title}</h3>}
              
    
    {info.subTitle && 
    <>
    <div style={{marginTop:"1rem",display:"flex", alignItems:"flex-start",justifyContent:"flex-start",gap:"0.5rem"}}>
         
    <div   >
     <img  height={"100px"} src={image !== "n/a"?image:MAINCOMPANY} alt="company logo"/>
    </div>

    <div style={{display:"flex",flexDirection:"column", alignItems:"flex-start",justifyContent:"flex-start",gap:"0px"}}>
    <h3>{info.title==="About Company"?"Main Digital":info.title}</h3>
    <p style={{marginTop:"-1rem"}}>{info.subTitle}</p>
    </div>

    </div>

    <p style={{width:"70%", marginLeft:"5%"}} >{info.summary}</p>
    </>

    
    }
    
    
    
    {!info.subTitle &&     
               <ul style={{ marginLeft:"5%"}}>
    
    {info.map((figure)=>(   
                <li>{figure}</li>
             
            )) }  
             
               </ul>
             }   
             </>
        
            
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

export default JobExpectationsCard