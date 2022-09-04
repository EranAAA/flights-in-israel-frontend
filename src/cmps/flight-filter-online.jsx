import React, { useState, useEffect } from 'react'

import { Search } from './mui/search'

export const FlightFilterOnline = ({ setFilter, lastFetch, isLoading }) => {

   const [flightNo, setFlightNo] = useState()

   useEffect(() => {
      setFilter(flightNo)
   }, [flightNo])

   return (
      <section className="flight-filter-online">

         <div className="search-container">
            <Search title="Flight No" value={flightNo || ``} setFilter={setFlightNo} />
         </div>

         {isLoading &&
            <div className="loader-line">
               <div className="loader__element"></div>
            </div>
         }

         <div className='refresh-date'>
            {
               `Last updated: 
               ${new Date(lastFetch).toLocaleDateString('en-GB', { month: 'numeric', day: 'numeric' })} 
               ${new Date(lastFetch).toLocaleTimeString('en-GB')}
               `
            }
         </div>
      </section >
   )
}

