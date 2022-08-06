import { flightService } from '../../services/flight.service.js'
import { utilService } from '../../services/util.service'

export function setFlight(flight) {
   return (dispatch) => {
      dispatch({ type: 'SET_FLIGHT', flight })
   }
}

export function loadDashboard() {
   try {
      return async (dispatch) => {
         const board = 'D' // Not in use
         const groupByAirline = flightService.queryGroup({ field: 'CHOPERD', board })
         const groupByDeparture = flightService.queryGroup({ field: 'CHAORD', board })
         const groupByTerminal = flightService.queryGroup({ field: 'CHTERM', board })
         const groupByDate = flightService.queryGroup({ field: 'DATE', board })
         const groupByHour = flightService.queryGroup({ field: 'HOUR', board })
         const groupByCountries = flightService.queryGroup({ field: 'CHLOCCT', board })
         const groupByFlightCanceld = flightService.queryGroup({ field: 'CHRMINE', board })
         const flightsGroups = await Promise.all([groupByAirline, groupByDeparture, groupByTerminal, groupByDate, groupByHour, groupByCountries, groupByFlightCanceld])
         const dashboard = {
            flightsGroupByAirline: flightsGroups[0],
            flightsGroupByDeparture: flightsGroups[1],
            flightsGroupByTerminal: flightsGroups[2],
            flightsGroupByDate: flightsGroups[3],
            flightsGroupByHour: flightsGroups[4],
            flightsGroupByCountries: flightsGroups[5],
            flightsGroupByFlightCanceld: flightsGroups[6]
         }
         console.log('Got Dashboard')
         dispatch({ type: 'SET_DASHBOARD', dashboard })
         return dashboard
      }
   } catch (err) {
      console.log('cannot load dashboard', err)
   }
}

export function loadDashboardByCategory(category) {
   try {
      return async (dispatch) => {
         const groupByCategory = await flightService.queryGroupByCategory(category)

         console.log('Got Dashboard by category')
         dispatch({ type: 'SET_DASHBOARD_CATEGORY', groupByCategory })
         return groupByCategory
      }
   } catch (err) {
      console.log('cannot load dashboard By Category', err)
   }
}

export function loadFlights(filter) {
   try {
      return async (dispatch) => {
         const flights = await flightService.query(filter)
         console.log('Got Flights')
         dispatch({ type: 'SET_FLIGHTS', flights })
      }
   } catch (err) {
      console.log('cannot load flights', err)
   }
}

export function loadDemo(demo) {
   try {
      return async (dispatch) => {
         console.log('Got Demo')
         const flights = { flights: demo.flights, lastRefresh: demo.lastRefresh, minDate: demo.minDate, maxDate: demo.maxDate }
         const flightList = demo.flightList
         dispatch({ type: 'SET_FLIGHTS', flights })
         dispatch({ type: 'SET_FLIGHTS_LIST', flightList })
      }
   } catch (err) {
      console.log('cannot load Demo', err)
   }
}

export function loadFlightsList(filter) {
   try {
      return async (dispatch) => {
         const flightList = await flightService.queryGroupList(filter)
         console.log('Got Flights list')
         dispatch({ type: 'SET_FLIGHTS_LIST', flightList })
      }
   } catch (err) {
      console.log('cannot load flights', err)
   }
}

export function setFilter(filter) {
   try {
      return async (dispatch) => {
         dispatch({ type: 'SET_FILTER', filter })
      }
   } catch (err) {
      console.log('cannot set filter', err)
   }
}

export function addFlight(flight) {
   try {
      return async (dispatch) => {
         const savedFlight = await flightService.save(flight)
         console.log('Added Flight')
         dispatch({ type: 'ADD_FLIGHT', flight: savedFlight })
         return savedFlight
      }
   } catch (err) {
      console.log('cannot add flight', err)
   }
}

export function updateFlight(flightToSave) {
   try {
      return async (dispatch) => {
         const savedFlight = await flightService.save(flightToSave)
         dispatch({ type: 'UPDATE_FLIGHT', flight: savedFlight })
         return savedFlight
      }
   } catch (err) {
      console.log('cannot edit flight', err)
   }
}

export function filtering(filterBy) {
   return async (dispatch) => {
      try {
         const flights = await flightService.query(filterBy)
         dispatch({ type: 'SET_FLIGHTS', flights })
         dispatch({ type: 'FILTER_FLIGHT', filterBy })
      } catch (err) {
         console.log('cannot filter flights', err)
      }
   }
}

export function removeFlight(flightId) {
   return async (dispatch) => {
      try {
         await flightService.remove(flightId)
         dispatch({ type: 'REMOVE_FLIGHT', flightId })
         console.log('Deleted Succesfully!')
      } catch (err) {
         console.error('Error:', err)
      }
   }
}

export function setFilterBy(filterBy) {
   return (dispatch) => {
      dispatch({ type: 'SET_FILTER_BY', filterBy })
   }
}

export function setTemplate() {
   return async (dispatch) => {
      try {
         const template = await utilService.getTemplate()
         dispatch({ type: 'SET_TEMPLATE', template })
         console.log('Set Grids Succesfully!')
      } catch (err) {
         console.error('Error:', err)
      }
   }
}