import React from 'react'

import { Indicator } from './dashboard/indicator'
import { CardDetails } from './dashboard/card'

export const FlightCard = ({ flightsGroup }) => {

   if (!Object.keys(flightsGroup).length) return

   const countDaysCalculation = () => {
      return flightsGroup.flightsGroupByDate.filter(flight => flight._id.CHAORD === 'D').length
   }

   const averageCalculation = (group, idx = 'ALL', board) => {
      const flightType = group.filter(flight => flight._id.CHAORD === board)
      const days = countDaysCalculation()
      if (idx !== 'ALL') {
         return {
            average: formatNumber(flightType[idx].totalDifference / flightType[idx].countFlights),
            count: formatNumber(flightType[idx].countFlights),
            countPerDay: flightType[idx].countFlights / days
         }
      } else {
         const totalDifference = flightType.reduce((acc, terminal) => acc + terminal.totalDifference, 0)
         const countFlights = flightType.reduce((acc, terminal) => acc + terminal.countFlights, 0)
         return {
            average: formatNumber(totalDifference / countFlights),
            count: formatNumber(countFlights),
            countPerDay: formatNumber(countFlights / days)
         }
      }
   }

   const formatNumber = (number) => {
      return new Intl.NumberFormat().format(Math.floor(number))
   }

   return (
      <section className="flight-card">

         <h3 className="card-title-left">Overview</h3>
         <div className="overview-container">
            <CardDetails
               header={'Departure'}
               title={averageCalculation(flightsGroup.flightsGroupByTerminal, 'ALL', 'D').count}
               // text={'Departure from TLV'}
               text={`${averageCalculation(flightsGroup.flightsGroupByTerminal, 'ALL', 'D').countPerDay} per day`}
               color={'Primary'}
            />
            <CardDetails
               header={'Arrival'}
               title={averageCalculation(flightsGroup.flightsGroupByTerminal, 'ALL', 'A').count}
               // text={'Arrival to TLV'}
               text={`${averageCalculation(flightsGroup.flightsGroupByTerminal, 'ALL', 'A').countPerDay} per day`}
               color={'Warning'}
            />

         </div>

         <h3 className="card-title-center">Avg. Delay (min)</h3>
         <div className="box-container">

            <CardDetails
               header={'Terminal 1+3'}
               title={`${averageCalculation(flightsGroup.flightsGroupByTerminal, 'ALL', 'D').average}`}
               subTitle={'Departure'} 
               title2={`${averageCalculation(flightsGroup.flightsGroupByTerminal, 'ALL', 'A').average}`}
               subTitle2={'Arrival'}
               color={'Light'}
            />
            <CardDetails
               header={'Terminal 3'}
               title={`${averageCalculation(flightsGroup.flightsGroupByTerminal, 0, 'D').average} `}
               subTitle={'Departure'} 
               title2={`${averageCalculation(flightsGroup.flightsGroupByTerminal, 0, 'A').average} `}
               subTitle2={'Arrival'}
               color={'Light'}
            />
            <CardDetails
               header={'Terminal 3'}
               title={`${averageCalculation(flightsGroup.flightsGroupByTerminal, 1, 'D').average} `}
               subTitle={'Departure'} 
               title2={`${averageCalculation(flightsGroup.flightsGroupByTerminal, 1, 'A').average} `}
               subTitle2={'Arrival'}
               color={'Light'}
            />
            {/* <Indicator
               title={`Departure Terminal 1`}
               board={'D'}
               data={averageCalculation(flightsGroup.flightsGroupByTerminal, 1, 'D')}
               interval={'min'}
            /> */}
         </div>

      </section>
   )
}
