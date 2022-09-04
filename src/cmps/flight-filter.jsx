import React, { useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'

import Accordion from 'react-bootstrap/Accordion';

import { SelectSmall } from './mui/select'
import { DatePicker } from './mui/date-picker'
import { Search } from './mui/search'

import { utilService } from '../services/util.service'

export const FlightFilter = ({ filterFlight, flightsGroupList, board, lastRefresh, isLoading, setIsFold }) => {

   let countLoads = useRef(false);
   let accordionElm = useRef();

   const { filterDeparture, filterArrival } = useSelector(({ flightModule }) => flightModule)

   const [flightCompany, setFlightCompany] = useState(board === 'D' ? filterDeparture.flightCompany : filterArrival.flightCompany)
   const [destination, setDestination] = useState(board === 'D' ? filterDeparture.destination : filterArrival.destination)
   const [scheduleDate, setScheduleDate] = useState(board === 'D' ? filterDeparture.scheduleDate : (board === 'A' ? filterArrival.scheduleDate : null))
   const [status, setStatus] = useState(board === 'D' ? filterDeparture.status : filterArrival.status)
   const [flightNo, setFlightNo] = useState(board === 'D' ? filterDeparture.flightNo : filterArrival.flightNo)

   useEffect(() => {
      setFlightNo(board === 'D' ? filterDeparture.flightNo : filterArrival.flightNo)
      setStatus(board === 'D' ? filterDeparture.status : filterArrival.status)
      setFlightCompany(board === 'D' ? filterDeparture.flightCompany : filterArrival.flightCompany)
      setDestination(board === 'D' ? filterDeparture.destination : filterArrival.destination)
      setScheduleDate(board === 'D' ? filterDeparture.scheduleDate : filterArrival.scheduleDate)
   }, [board])

   useEffect(() => {
      if (!countLoads.current) {
         countLoads.current = true
         return
      }
      filterFlight({ flightNo, flightCompany, destination, status, scheduleDate })
   }, [destination, flightCompany, status, scheduleDate, flightNo])

   const onFoldAccordion = () => {
      if (accordionElm.current.querySelector('.show')) {
         setIsFold(false)
      } else {
         setIsFold(true)
      }
   }

   return (
      <section className="flight-filter">
         <Accordion defaultActiveKey="1">
            <Accordion.Item ref={accordionElm} eventKey="1">
               <Accordion.Header onClick={onFoldAccordion}>Filter</Accordion.Header>
               <Accordion.Body >
                  <div className="dropdown-container">
                     <SelectSmall data={utilService.getFlightList('CHOPERD', flightsGroupList, flightCompany, destination, board)} title="Airline" value={flightCompany || ``} setFilter={setFlightCompany} />
                     <SelectSmall data={utilService.getFlightList('CHLOCCT', flightsGroupList, flightCompany, destination, board)} title="Destination" value={destination || ``} setFilter={setDestination} />
                     <SelectSmall data={utilService.getFlightList('CHRMINE', flightsGroupList, flightCompany, destination, board)} title="Status" value={status || ``} setFilter={setStatus} />
                     <DatePicker title="Scheduled" scheduleDate={scheduleDate} setFilter={setScheduleDate} />
                  </div>
                  <div className="search-container">
                     <Search title="Flight No" value={flightNo || ``} setFilter={setFlightNo} />
                  </div>
               </Accordion.Body>
            </Accordion.Item>
         </Accordion>

         {isLoading && <div className="loader-line">
            <div className="loader__element"></div>
         </div>}

         <div className='refresh-date'>
            {
               `Last updated: 
               ${new Date(lastRefresh[0].createdAt).toLocaleDateString('en-GB', { month: 'numeric', day: 'numeric' })} 
               ${new Date(lastRefresh[0].createdAt).toLocaleTimeString('en-GB')}`
            }
         </div>
      </section >
   )
}

