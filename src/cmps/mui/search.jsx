import React, { useState, useEffect } from 'react';
import { debounce } from 'lodash'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AirplaneTicket from '@mui/icons-material/AirplaneTicket';

export const Search = ({ setFilter, value, title }) => {

   const [change, setChange] = useState(value);

   useEffect(() => {
      setChange(value)
   }, [value])

   const handleChange = ({ target }) => {
      console.log(target.value);
      setChange(target.value)
      if (target.value.length > 2 && target.value.length < 5) setFilter(target.value)
      if (target.value.length === 0) setFilter(target.value)
   }

   const debouncedOnChange = debounce(handleChange, 400)

   return (
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
         <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <AirplaneTicket sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField
               id="input-with-sx"
               label={title}
               variant="standard"
               onChange={debouncedOnChange}
               sx={{
                  color: 'action.active', width: 120,
                  label: { fontFamily: 'Livvic-Regular' },
                  input: { fontFamily: 'Livvic-Regular' },
               }}
            />
         </Box>
      </Box>
   );
}
