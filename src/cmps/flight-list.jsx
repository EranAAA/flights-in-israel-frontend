// import { modalClasses } from '@mui/material'
// import { divide } from 'lodash'
import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { FlightPreview } from './flight-preview'

export const FlightList = ({ flights, board, isFold }) => {

   console.log('FlightList');

   const location = useLocation()
   const [height, setHeight] = useState('')
   const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false)

   useEffect(() => {
      console.log('location', location.pathname);
      if (location.pathname === '/online') setHeight(300)
      if ((location.pathname === '/departure' || location.pathname === '/arrival') && isFold) setHeight(500)
      if ((location.pathname === '/departure' || location.pathname === '/arrival') && !isFold) setHeight(310)
   }, [isFold])

   return (
      <section className="flight-list">
         <table >
            <thead>
               <tr>
                  <th className='column-short'>Status</th>
                  <th className='column-short'>Flight No.</th>
                  <th className='column-short'>Date</th>
                  <th className='column-short shrink'>Sched.</th>
                  <th className='column-short'>Curr.</th>
                  <th className='column-short shrink'>Delay (min)</th>
                  <th className='column-short shrink'>Term.</th>
                  <th className='column-end shrink'>{board === 'D' ? 'Departure to' : 'Arrival from'}</th>
               </tr>
            </thead>
            <tbody style={{ height: `calc(100vh - ${height}px)` }}>
               {flights && flights.map(flight => <FlightPreview key={flight._id} flight={flight} setIsHistoryModalOpen={setIsHistoryModalOpen} />)}
            </tbody>
         </table>

         {
         // ********** USEMEMO **********
         // ********** USEMEMO **********
         // ********** USEMEMO **********
         // ********** USEMEMO **********
         }

         {isHistoryModalOpen &&
            <div className="history-modal">
               <div className="close-modal" onClick={() => setIsHistoryModalOpen(false)}>X</div>
            </div>
         }

      </section>
   )
}
