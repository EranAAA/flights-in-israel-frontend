import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { loadFlights, setFilter/*, loadDemo*/ } from '../store/flight/flight.action'
import { FlightList } from '../cmps/flight-list'
import { FlightFilter } from '../cmps/flight-filter'

export const AppFlight = ({ board }) => {

   const dispatch = useDispatch()
   const { filterDeparture, filterArrival } = useSelector(({ flightModule }) => flightModule)
   const { flights, lastRefresh, flightList } = useSelector(({ flightModule }) => flightModule)

   const [isLoading, setIsLoading] = useState(false)
   const [isFold, setIsFold] = useState(false)

   useEffect(() => {
      getFlights()
   }, [board])

   const getFlights = async (filter = {}) => {
      if (board === 'D') filter = filterDeparture
      else if (board === 'A') filter = filterArrival
      filter.board = board
      await dispatch(loadFlights(filter))
   }


   const filterFlight = async (filter) => {
      setIsLoading(true)
      if (board) filter.board = board
      await dispatch(loadFlights(filter))
      dispatch(setFilter(filter))
      setIsLoading(false)
   }

   if (!flights.length) return (<div className="loader"></div>)

   return (
      <section className="app-flight" >
         <p className='board'> {board === 'D' ? 'Departure' : 'Arrival'} </p>
         <div className="flight-table">
            <FlightFilter filterFlight={filterFlight} setIsFold={setIsFold} flightsGroupList={flightList} board={board} lastRefresh={lastRefresh} isLoading={isLoading} />
            <FlightList flights={flights} board={board} isFold={isFold}/>
         </div>
      </section>
   )
}

