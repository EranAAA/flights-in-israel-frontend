import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
   formControl: {
      margin: theme.spacing(1),
      minWidth: 120
   },
   selectEmpty: {
      marginTop: theme.spacing(2)
   },
   menuPaper: {
      maxHeight: 100
   }
}));

export const SelectSmall = ({ data, title, setFilter, value, marginTop = 5  }) => {
   const classes = useStyles();
   const [change, setChange] = useState('');

// console.log('date', data[0]);
// console.log('title', title);
// console.log('value', value);

   useEffect(() => {
      setChange(value)
   }, [value])

   const handleChange = ({ target }) => {
      setChange(target.value)
      setFilter(target.value)
   }
   
   return (
      <Box sx={{ minWidth: 120 }}>
         <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel sx={{ fontFamily: 'Livvic-Regular' }}>{title}</InputLabel>
            <Select
               value={change}
               label={`${title}++`}
               onChange={handleChange}
               name={title} 
               style={{ height: 40, width: 155, fontSize: 13, lineHeight: 2, marginTop: marginTop, fontFamily: 'Livvic-Regular' }}
               MenuProps={{ PaperProps: { sx: { maxHeight: 400, width: 200 } } }}
            >
               <MenuItem sx={{ fontSize: 13, fontFamily: 'Livvic-Regular' }} value=""> <em>None</em> </MenuItem>
               {data && data.map((item, idx) => <MenuItem sx={{ fontSize: 12, fontFamily: 'Livvic-Regular' }} key={idx} value={item.value}>{item.value}</MenuItem>)}
            </Select>
         </FormControl>
      </Box>

   );
}