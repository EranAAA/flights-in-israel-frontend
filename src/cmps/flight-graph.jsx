import React from 'react'

import { GraphLine } from './chart/graph-line';
import { GraphBar } from './chart/graph-bar';


export const FlightGraph = ({ flightsGroup }) => {

   if (!Object.keys(flightsGroup).length) return

   const board = 'D'
   const dateFormat = { month: 'numeric', day: 'numeric' };

   const flightsGroupByDate = flightsGroup.flightsGroupByDate.sort((a, b) => new Date(a._id._id) - new Date(b._id._id)).filter(flight => flight._id.CHAORD === board)
   const flightsGroupByHour = flightsGroup.flightsGroupByHour.sort((a, b) => a._id._id - b._id._id).filter(flight => flight._id.CHAORD === board)

   ///////////////////////////////LINE-DATE-DELAY////////////////////////////////// 
   const labelDelayDate = flightsGroupByDate.map(date => new Date(date._id._id).toLocaleDateString('en-GB', dateFormat))
   const datalDelayDate = flightsGroupByDate.map(date => Math.floor(date.totalDifference / date.countFlights))

   ///////////////////////////////LINE-HOUR-DELAY////////////////////////////////// 
   const labelDealyHour = flightsGroupByHour.map(date => date._id._id)
   const dataDelayHour = flightsGroupByHour.map(date => Math.floor(date.totalDifference / date.countFlights))

   ///////////////////////////////BAR-DEPARTURES-DAY////////////////////////////////// 
   const labelFlightDate = flightsGroupByDate.map(date => new Date(date._id._id).toLocaleDateString('en-GB', dateFormat))
   const datalFlightDate = flightsGroupByDate.map(date => Math.floor(date.countFlights))

   ///////////////////////////////BAR-DEPARTURES-HOUR////////////////////////////////// 
   const labelFlightHour = flightsGroupByHour.map(date => date._id._id)
   const dataFlightHour = flightsGroupByHour.map(date => Math.floor(date.countFlights))

   ///////////////////////////////BAR-CANCELED-DATE////////////////////////////////// 
   const flightsGroupByCanceldDate = flightsGroup.flightsGroupByFlightCanceld.sort((a, b) => new Date(a._id._id) - new Date(b._id._id)).filter(flight => flight._id.CHAORD === board)
   const labelCancelDate = flightsGroupByCanceldDate.map(date => new Date(date._id._id).toLocaleDateString('en-GB', dateFormat))
   const datalCancelDate = flightsGroupByCanceldDate.map(date => Math.floor(date.countFlights))

   return (
      <section className="graph">
         <h3>Trending indicators</h3>
         <div className="graph-container">
            <GraphLine dataX={datalDelayDate} labelY={labelDelayDate} title={'Avg. delay per day'} color={'#121212'} />
            <GraphLine dataX={dataDelayHour} labelY={labelDealyHour} title={'Avg. delay per hour'} color={'#121212'} />

            <h3>Trending indicators</h3>
            <div className="departures">
               <GraphBar dataX={datalFlightDate} labelY={labelFlightDate} title={`${board === 'D' ? 'Departures' : 'Arrivals'} per hour`} color={'#B2A4FF'} />
               <GraphBar dataX={dataFlightHour} labelY={labelFlightHour} title={`${board === 'D' ? 'Departures' : 'Arrivals'} per day`} color={'#554894'} fontColor={'#FFF'} />
            </div>

            <h3>Trending indicators</h3>
            <GraphBar dataX={datalCancelDate} labelY={labelCancelDate} title={'Canceld per day'} color={'#721212'} fontColor={'#FFF'} />
            
         </div>
      </section>
   )
}




