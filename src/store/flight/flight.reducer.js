const initialState = {
   flights: [],
   onlineFlights: [],
   dashboard: {},
   flightList: [],
   dashboardAirline: [],
   lastRefresh: '',
   lastFetch: '',
   minDate: '',
   maxDate: '',
   filterDeparture: {},
   filterArrival: {},
}

export function flightReducer(state = initialState, action) {
   var newState = state
   // var flights

   switch (action.type) {
      case 'SET_FLIGHTS':
         const { flights, lastRefresh } = action.flights
         newState = { ...state, flights, lastRefresh }
         break

      case 'SET_FLIGHTS_LIST':
         const list = action.flightList.flights.map(flight => ({ CHAORD: flight._id.CHAORD, CHOPERD: flight._id.CHOPERD, CHLOCCT: flight._id.CHLOCCT }))
         const { minDate, maxDate } = action.flightList
         newState = { ...state, flightList: list, minDate, maxDate, lastRefresh: action.flightList.lastRefresh }
         break

      case 'SET_DASHBOARD':
         newState = { ...state, dashboard: action.dashboard }
         break

      case 'SET_DASHBOARD_CATEGORY':
         newState = { ...state, dashboardAirline: action.groupByCategory }
         break

      case 'SET_FILTER':
         if (action.filter.board === 'D') newState = { ...state, filterDeparture: action.filter }
         if (action.filter.board === 'A') newState = { ...state, filterArrival: action.filter }
         break

      case 'SET_ONLINE_FLIGHTS':
         if (action.filter) {
            newState =
            {
               ...state, onlineFlights: action.onlineFlights.data.result.records
                  .filter(flight => flight.CHFLTN === action.filter)
                  .sort((a, b) => new Date(b.CHPTOL) - new Date(a.CHPTOL)),
               lastFetch: Date.now()
            }
         } else {
            newState = {
               ...state, onlineFlights: action.onlineFlights.data.result.records
               // .sort((a, b) => new Date(b.CHPTOL) - new Date(a.CHPTOL))
               , lastFetch: Date.now()
            }
         }
         break
      default:
   }
   // For debug:
   window.flightState = newState
   return newState

}
