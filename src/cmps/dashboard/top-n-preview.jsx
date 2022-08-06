import React from 'react'

export const TopNPreview = ({ group }) => {

   const formatNumber = (number) => {
      return Math.floor(number)
   }

   return (
      <tr className='top-n-preview'>
         <td className='column-long'>{group.row}</td>
         <td className='column-short'>{new Intl.NumberFormat().format(group.sum) }</td>
         <td className='column-short'>{new Intl.NumberFormat().format(group.count) }</td>
         <td className='column-short'>{formatNumber(group.average)}</td>
      </tr>
   )
}




