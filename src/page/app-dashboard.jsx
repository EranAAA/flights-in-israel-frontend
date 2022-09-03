import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { loadDashboard, loadDashboardByCategory } from '../store/flight/flight.action'
import { DashboardAirport } from '../cmps/dashboard-airport'
import { DashboardAirline } from '../cmps/dashboard-airline'

export const Dashboard = () => {

   const dispatch = useDispatch()
   const { dashboard, dashboardAirline, minDate, maxDate, flightList } = useSelector(({ flightModule }) => flightModule)
   const [flightAirline, setFlightAirline] = useState('EL AL ISRAEL AIRLINES')

   useEffect(() => {
      if (Object.keys(dashboard).length) return
      load()
   }, [])

   useEffect(() => {
      loadByCategory(flightAirline)
   }, [flightAirline])

   const load = async () => {
      await dispatch(loadDashboard())
   }

   const loadByCategory = async (flightAirline) => {
      await dispatch(loadDashboardByCategory(flightAirline))
   }

   if (!Object.keys(dashboard).length) return (<div className="loader"></div>)

   const setDashboardAirline = () => {
      const airline = dashboardAirline
         .map((airline) => (
            {
               ...airline._id,
               countFlights: airline.countFlights,
               totalDifference: airline.totalDifference,
               countEarly: airline.countEarly,
               countDelay: airline.countDelay,
               countOnTime: airline.countOnTime,
            }))
         .sort((a, b) => a.CHFLTN - b.CHFLTN)
      return airline
   }

   return (
      <section className="app-dashboard" >

         <div className="dashboard-title">
            <h1>Dashboard</h1>
            <h3>{minDate && `Date: ${new Date(maxDate[0].CHSTOL).toLocaleDateString('en-GB')} To ${new Date(minDate[0].CHSTOL).toLocaleDateString('en-GB')}`}</h3><hr />
         </div>

         <Tabs>
            <TabList>
               <Tab>Airport</Tab>
               <Tab>Airline</Tab>
               <Tab>Destintaion</Tab>
               <Tab>Flight Number</Tab>
            </TabList>

            <TabPanel>
               <DashboardAirport airport={dashboard} />
            </TabPanel>

            <TabPanel>
               <DashboardAirline airline={setDashboardAirline()} flightList={flightList} flightAirline={flightAirline} setFlightAirline={setFlightAirline}/>
            </TabPanel>

            <TabPanel>
               {/* <h2>Destintaion</h2> */}
               <h3>להוסיף את חברת התעופה או מספר הקו הכי טוב מבחינת איחורים ולעשות השוואות לפי יעד של עיר או מדינה</h3>
               <h3>סטטיסטיקה קבועה</h3>

            </TabPanel>

            <TabPanel>
               {/* <h2>Flight Number</h2> */}
               <h3>להראות התפתחות ברמה של מספר קו ברמה של אמצע או סוף שבוע</h3>
               <h3>סטטיסטיקה קבועה</h3>
            </TabPanel>

         </Tabs>

      </section>
   )
}

