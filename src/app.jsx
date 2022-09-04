import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import './style/main.scss'

import { AppHeader } from './page/app-header'
import { AppHome } from './page/app-home'
import { AppFlight } from './page/app-flight'
import { AppFlightOnline } from './page/app-flight-online'
import { Dashboard } from './page/app-dashboard'

import { loadFlightsList } from './store/flight/flight.action'

export function App() {

   const dispatch = useDispatch()

   useEffect(() => {
      getFlightList()
   }, [])

   const getFlightList = async (filter = {}) => {
      await dispatch(loadFlightsList(filter))
   }

   return (
      <div className='app'>
         <AppHeader />
         <Routes>
            <Route path="/" element={<AppHome />} />
            <Route path="/departure" element={<AppFlight board={'D'} />} />
            <Route path="/arrival" element={<AppFlight board={'A'} />} />
            <Route path="/online" element={<AppFlightOnline board={'D'} />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<AppHome />} />
         </Routes>
      </div>
   )
}
