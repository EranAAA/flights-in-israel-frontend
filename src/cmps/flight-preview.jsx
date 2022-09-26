import React, { useState } from 'react'

import { utilService } from '../services/util.service';

export const FlightPreview = ({ flight, setIsHistoryModalOpen }) => {

   const [toggleModal, setToggleModal] = useState(false)

   const dateCHSTOL = new Date(flight.CHSTOL);
   const dateCHPTOL = new Date(flight.CHPTOL);
   const optionsDateTime = { month: 'numeric', day: 'numeric' };
   const optionsTime = { hour: 'numeric', minute: 'numeric' };
   const CHSTOLDateFormatted = dateCHSTOL.toLocaleDateString('en-GB', optionsDateTime)
   const CHSTOLFormatted = dateCHSTOL.toLocaleTimeString('en-GB', optionsTime)
   const CHPTOLFormatted = dateCHPTOL.toLocaleTimeString('en-GB', optionsTime)

   const diffDaysInMinutes = new Intl.NumberFormat().format(Math.ceil((new Date(flight.CHPTOL) - new Date(flight.CHSTOL)) / (1000 * 60)));

   const toggle = () => {
      setToggleModal(!toggleModal)
   }

   const style = () => {
      if (flight.CHRMINE === 'DEPARTED') return { backgroundColor: '#00640082' }
      else if (flight.CHRMINE === 'LANDED') return { backgroundColor: '#00640082' }
      else if (flight.CHRMINE === 'LANDING') return { backgroundColor: '#00640082' }
      else if (flight.CHRMINE === 'CANCELED') return { backgroundColor: '#ff00009e' }
      else if (flight.CHRMINE === 'DELAYED') return { backgroundColor: '#ffd70085' }
      else if (flight.CHRMINE === 'EARLY') return { backgroundColor: '#ffb6c1' }
   }

   const styleTimeCurr = () => {
      if (diffDaysInMinutes < 0) return { color: 'green' }
      if (diffDaysInMinutes > 0) return { color: 'red' }
   }

   const styleTimeSched = () => {
      if (diffDaysInMinutes === '0') return { color: 'green' }
   }

   return (
      <>
         {flight._id === 'Default'
            ?
            <tr colSpan='8' className='flight-preview' onClick={toggle}>
               <td className='column-short'>Didn't found any result</td>
            </tr>
            :
            <tr className='flight-preview' onClick={toggle}>
               <td className='column-short' style={style()}>{flight.CHRMINE}</td>
               <td className='column-short'>{`${flight.CHOPER} ${flight.CHFLTN}`}</td>
               <td className='column-short'>{CHSTOLDateFormatted}</td>
               <td className='column-short shrink' style={styleTimeSched()}>{CHSTOLFormatted}</td>
               <td className='column-short' style={styleTimeCurr()}>{CHPTOLFormatted}</td>
               <td className='column-short shrink'>{diffDaysInMinutes}</td>
               <td className='column-short shrink'>{flight.CHTERM}</td>
               <td className='column-end shrink'>{`${flight.CHLOCCT} - ${flight.CHLOC1T}`}</td>
            </tr>
         }
         {toggleModal &&
            <td colSpan={8} className='flight-info-container' >
               <div className='info-title'> <span>Carrier</span>{` -  Flight No. ${flight.CHOPER} ${flight.CHFLTN} with ${flight.CHOPERD}`}</div>
               <div className='info-description'>
                  <span>Destination</span>
                  {`
                  ${flight.CHAORD === 'A' ? ' -  Arrive from' : ' -  Departure to'} 
                  ${flight.CHLOCCT} - ${flight.CHLOC1T} (${flight.CHLOC1}) 
                  ${flight.CHAORD === 'A' ? 'lending in' : 'from'} terminal ${flight.CHTERM}.
               `}
               </div>
               <div className='description'><span>Scheduled Time</span>{`  -  ${CHSTOLFormatted}`}</div>
               <div className='description'><span>Estimated Time</span>{`  -  ${CHPTOLFormatted} (${diffDaysInMinutes}min)`}</div>
               <img src={utilService.getAirLineLogo(flight.CHOPER)} alt="" />
               <div className="show-history" onClick={() => setIsHistoryModalOpen(true)}>show-history</div>
            </td>
         }

      </>

   )
}