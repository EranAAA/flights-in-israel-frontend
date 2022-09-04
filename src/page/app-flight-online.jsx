import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { loadFlights, setFilter, getOnlineFlights} from '../store/flight/flight.action'
import { FlightList } from '../cmps/flight-list'
import { FlightFilter } from '../cmps/flight-filter'
import { FlightFilterOnline } from '../cmps/flight-filter-online'

export const AppFlightOnline = ({ board }) => {

   const { onlineFlights, lastFetch } = useSelector(({ flightModule }) => flightModule)

   const [isLoading, setIsLoading] = useState(false)
   const [filter, setFilter] = useState(false)
   const dispatch = useDispatch()

   useEffect(() => {
      getFlights(filter)
   }, [filter])

   const getFlights = async (filter) => {
      if (filter) setIsLoading(true)
      await dispatch(getOnlineFlights(filter))
      if (filter) setIsLoading(false)
   }

   if (!onlineFlights.length) return (<div className="loader"></div>)

   return (
      <section className="app-flight-online" >
         <p className='board'> Online Board </p>
         <div className="flight-table">
            <FlightFilterOnline setFilter={setFilter} lastFetch={lastFetch} isLoading={isLoading} />
            <FlightList flights={onlineFlights} board={board} />
         </div>
      </section>
   )
}

