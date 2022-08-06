import React from 'react'
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ChartDataLabels);

export const GraphLine = ({ dataX, labelY, title, color }) => {

   const options = {
      responsive: true,
      plugins: {
         legend: {
            position: 'top',
         },
         title: {
            display: false,
            text: 'Chart.js Line Chart',
         },
         datalabels: {
            color: '#121212',
            align: 'top',
            font: {
               size: 13,
               family: 'Livvic-Regular'
            }
         }
      },
   };

   const labels = labelY

   const data = {
      labels,
      datasets: [
         {
            label: title,
            data: dataX,
            borderColor: color,
            backgroundColor: color,
            tension: 0.4
         }
      ],
   };

   return (
      <Line options={options} data={data} />
   )
}




