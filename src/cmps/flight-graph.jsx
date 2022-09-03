import React from 'react'

import { GraphLine } from './chart/graph-line';
import { GraphBar } from './chart/graph-bar';


export const FlightGraph = ({ flightsGroup }) => {

   if (!Object.keys(flightsGroup).length) return

   const board = 'D'
   const dateFormat = { month: 'numeric', day: 'numeric' };
   const date = new Date()
   date.setDate(date.getDate() - 30)
   date.toLocaleDateString('en-GB')

   const flightsGroupByDate = flightsGroup.flightsGroupByDate.sort((a, b) => new Date(a._id._id) - new Date(b._id._id)).filter(flight => flight._id.CHAORD === board && new Date(flight._id._id) >= date)
   const flightsGroupByHour = flightsGroup.flightsGroupByHour.sort((a, b) => a._id._id - b._id._id).filter(flight => flight._id.CHAORD === board)
   console.log(flightsGroupByHour);
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
   const flightsGroupByCanceldDate = flightsGroup.flightsGroupByFlightCanceld.sort((a, b) => new Date(a._id._id) - new Date(b._id._id)).filter(flight => flight._id.CHAORD === board && new Date(flight._id._id) >= date)
   const labelCancelDate = flightsGroupByCanceldDate.map(date => new Date(date._id._id).toLocaleDateString('en-GB', dateFormat))
   const datalCancelDate = flightsGroupByCanceldDate.map(date => Math.floor(date.countFlights))

   return (
      <section className="graph">
         <div className="graph-container">

            <h3>DAY <span>(Last 30 days)</span></h3>

            <GraphLine dataX={datalDelayDate} labelY={labelDelayDate} title={'Avg. delay per day'} color={'#121212'} />
            <GraphBar dataX={datalFlightDate} labelY={labelFlightDate} title={`${board === 'D' ? 'Departures' : 'Arrivals'} per day`} color={'#B2A4FF'} />
            <GraphBar dataX={datalCancelDate} labelY={labelCancelDate} title={'Canceld per day'} color={'#721212'} fontColor={'#FFF'} />

            <h3>HOUR</h3>

            <div className="departures">
               <GraphLine dataX={dataDelayHour} labelY={labelDealyHour} title={'Avg. delay per hour'} color={'#121212'} />
               <GraphBar dataX={dataFlightHour} labelY={labelFlightHour} title={`${board === 'D' ? 'Departures' : 'Arrivals'} per hour`} color={'#554894'} fontColor={'#FFF'} />
            </div>


         </div>
      </section>
   )
}




