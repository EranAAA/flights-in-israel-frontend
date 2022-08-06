import React from 'react'

import { TopNList } from './dashboard/top-n-list'

export const FlightTable = ({ flightsGroup }) => {

   if (!Object.keys(flightsGroup).length) return
   
   const topNData = (flightData, n, board) => {
      const table = flightData
         .filter(flight => board === flight._id.CHAORD)
         .map(flight => ({ row: flight._id._id, count: flight.countFlights, sum: flight.totalDifference }))
         .map(flight => ({ ...flight, average: flight.sum / flight.count }))
         .slice(0, n)
         .sort((a, b) => b.average - a.average)
      return table
   }

   return (
      <section className="flight-top-table">
         <h3>Top 15 Avg delay</h3>
         <div className="table-container">
            <TopNList
               title='Airline'
               columnTitle={['Total Delay (min)', 'Total Flights', 'Avg.']} // Number of columns in the table without the title
               topNData={topNData(flightsGroup.flightsGroupByAirline, 15, 'D')} // Columns in the table including the title
            />

            <TopNList
               title='Countries'
               columnTitle={['Total Delay (min)', 'Total Flights', 'Avg.']}
               topNData={topNData(flightsGroup.flightsGroupByCountries, 15, 'D')}
            />
         </div>
      </section>
   )
}




