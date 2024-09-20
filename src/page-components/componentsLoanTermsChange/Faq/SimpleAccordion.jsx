import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import { BsArrowDownCircle } from 'react-icons/bs';




export default function SimpleAccordion({header,body}) {

    const [on,setOn] = React.useState(false)

    const highlight = {
     backgroundColor:"black",
     width:"1px",
     height:"23px",
     position:"absolute",
     top:"27%",
     left:"0%",
     zIndex:"20",
     display:`${on?"block":"none"}` 
     
    }


  return (
    <div style={{position:"relative", backgroundColor: "#F9F5F2"}}>
        <div className={on && "selected__accent"} ></div>
      <Accordion sx={{marginTop:{xs:"-2.5rem", md:"-1.5rem",lg:"0rem"},padding:"20px",borderRadius:"20px",backgroundColor: "#F9F5F2"}}>
        <AccordionSummary onClick = {()=>{setOn(!on)}}
          expandIcon={<BsArrowDownCircle  style={{fontSize:"2rem",cursor:"pointer"}} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{fontSize:"1.8rem",fontWeight:"800",fontFamily:"Jost",color:"black"}}>{header}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography  sx={{fontFamily:"Jost",fontSize:"1.2rem",maxWidth:"85%"}}>
           {body}
          </Typography>
        </AccordionDetails>
      </Accordion>
     
     
    </div>
  );
}