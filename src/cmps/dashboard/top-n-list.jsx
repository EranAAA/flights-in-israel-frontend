import React from 'react'

import { TopNPreview } from './top-n-preview'

export const TopNList = ({ title, columnTitle, topNData }) => {

   return (

      <div className="table-1">
         <h3>{title}</h3>
         <table>
            <thead>
               <tr>
                  <th>{title}</th>
                  <th>{columnTitle[0]}</th>
                  <th>{columnTitle[1]}</th>
                  <th>{columnTitle[2]}</th>
               </tr>
            </thead>
            <tbody>
               {topNData && topNData.map((group, idx) => <TopNPreview key={idx} group={group} />)}
            </tbody>
         </table>
      </div>
   )
}




