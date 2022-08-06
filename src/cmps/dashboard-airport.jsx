import React from 'react'

import { FlightTable } from './flight-table'
import { FlightCard } from './flight-card'
import { FlightGraph } from './flight-graph'

export const DashboardAirport = ({ airport }) => {

   return (
      <section className="dashboard-airport" >
         <div className="flight-card">
            <FlightCard flightsGroup={airport} />
         </div>

         <div className="flight-group">
            <FlightTable flightsGroup={airport} />
         </div>
         <hr />

         <div className="flight-graph">
            <FlightGraph flightsGroup={airport} />
         </div>

      </section>
   )
}

