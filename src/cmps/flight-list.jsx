import React from 'react'

import { FlightPreview } from './flight-preview'

export const FlightList = ({ flights, board }) => {

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
            <tbody>
               {flights && flights.map(flight => <FlightPreview key={flight._id} flight={flight} />)}
            </tbody>
         </table>

      </section>
   )
}



