import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const marks = [
  {
    value: 0,
    label: '$0',
  },
 /* {
    value: 20,
    label: '$7000',
  },*/
  
  {
    value: 3500,
    label: '$3,500',
  },
];

function valuetext(value) {
  return `$${value}`;
}



export default function DiscreteSliderLabel(input,setInput) {

  const [value, setValue] = React.useState(input);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(setInput)
    /*setInput(newValue);*/
  };


  return (
    <Box sx={{ width: 300,display:"none" }}>
      <Slider
        aria-label="Always visible"
        defaultValue={5000}
        getAriaValueText={valuetext}
        step={5000}
        min={0}
        max={3500}
        marks={marks}
        /*value={value}*/
       onChange={setInput}
        
        valueLabelDisplay="on"
      />
    </Box>
  );
}