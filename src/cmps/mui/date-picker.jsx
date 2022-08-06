import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'

import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { parseISO } from 'date-fns';

export const DatePicker = ({ title, setFilter, scheduleDate }) => {

   const { minDate, maxDate } = useSelector(({ flightModule }) => flightModule)
   const [value, setValue] = useState(scheduleDate || null);

   useEffect(() => {
      setValue(scheduleDate || null)
   }, [scheduleDate])
   
   const handleChange = (newValue) => {
      setValue(newValue);
      setFilter(new Date(newValue).toLocaleDateString('en-GB').replace(/\//g, '-').split('-').reverse().join('-'))
   };

   const onKeyDown = (e) => {
      e.preventDefault();
   };

   if (!minDate) return
   return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>

         <Stack spacing={3}>
            <DesktopDatePicker
               label={title}
               inputFormat="dd/MM/yyyy"
               value={value}
               minDate={parseISO(maxDate[0].CHSTOL)}
               maxDate={parseISO(minDate[0].CHSTOL)}
               onChange={handleChange}
               renderInput={(params) => <TextField
                  style={{ height: 40, width: 155, fontSize: 10, lineHeight: 0, marginTop: 5, fontFamily: 'Livvic-Regular' }}
                  sx={{
                     "& .MuiInputBase-input": { height: "0px", paddingTop: '25px', fontFamily: 'Livvic-Regular' },
                     label: { fontFamily: 'Livvic-Regular', marginTop: '-8px' },
                     input: { fontFamily: 'Livvic-Regular' },
                  }}
                  onKeyDown={onKeyDown}
                  {...params}
               />}
            />
         </Stack>
      </LocalizationProvider>
   );
}
