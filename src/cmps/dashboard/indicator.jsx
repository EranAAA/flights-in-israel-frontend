import React from 'react'
import { GiAirplaneDeparture, GiAirplaneArrival } from 'react-icons/gi'

export const Indicator = ({ title, board, data, interval }) => {

   const style = () => {
      if (board === 'D') return { background: 'linear-gradient(0deg, rgba(255,255,255,1) 20%, rgba(164,215,240,1) 70%)' }
      else if (board === 'A') return { background: 'linear-gradient(0deg, rgba(255,255,255,1) 20%, rgba(118,186,153,1) 70%)' }
   }

   return (

      <div className="box-1" style={style()}>
         <h3>{title}</h3>
         <div className="box-1-data">
            {data.average}
            <span>{interval}</span>
         </div>
         <div className="box-1-sub-data">{data.count} {board === 'D' ? <GiAirplaneDeparture /> : <GiAirplaneArrival />}</div>
      </div>

   )
}




