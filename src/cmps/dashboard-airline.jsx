import React, { useState, useEffect } from 'react'

import { CardDetails } from './dashboard/card'
import { SelectSmall } from './mui/select'

import { FlightTable } from './flight-table'
import { FlightCard } from './flight-card'
import { FlightGraph } from './flight-graph'

import { utilService } from '../services/util.service'

export const DashboardAirline = ({ airline, setFlightAirline, flightAirline, flightList }) => {

   const [departure, setDeparture] = useState('')

   useEffect(() => {
      setDeparture(utilService.getFlightStatisticByAirline(airline, 'D'))
   }, [airline])

   // console.table(airline.slice(0, 50));
   // console.table(groups);

   if (!departure) return
   if (!flightList) return

   return (
      <section className="dashboard-airline" >

         <SelectSmall data={utilService.getFlightList('CHOPERD', flightList, '', '', 'D')} title="Airline" value={flightAirline || ``} setFilter={setFlightAirline} marginTop={1} />

         <div className="logo">
            <img src={utilService.getAirLineLogo(airline[0].CHOPER)} alt="" />
         </div>

         <div className="description">
            <div className="title">{`${airline[0].CHOPERD}`}</div>
            <div >{`Departure ${departure.countFlight} flights to ${departure.countDistinctCites.size} cities from ${departure.countDistinctCountries.size} countries around the world`}</div>
         </div>

         <div className="airline-card">
            <CardDetails
               header={'Flights'}
               title={departure.countFlight}
               color={'Light'}
            />
            <CardDetails
               header={'On Time'}
               title={departure.countOnTimeFlight}
               subTitle={`(${utilService.formatAsPercent(departure.countOnTimeFlight / departure.countFlight)})`}
               color={'Light'}
            />
            <CardDetails
               header={'Delays'}
               title={departure.countDelayFlight}
               subTitle={`(${utilService.formatAsPercent(departure.countDelayFlight / departure.countFlight)})`}
               color={'Light'}
            />
            <CardDetails
               header={'Canceled'}
               title={departure.countCanceledFlight}
               subTitle={`(${utilService.formatAsPercent(departure.countCanceledFlight / departure.countFlight)})`}
               color={'Light'}
            />
         </div>

         <div className="flight-group">
            {/* <FlightTable flightsGroup={departure} /> */}
         </div>
         <hr />

         <div className="flight-graph">
            {/* <FlightGraph flightsGroup={airline} /> */}
         </div>

      </section>
   )
}

