import React from 'react'
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement,BarElement, LineElement, Title, Tooltip, Legend, } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement,BarElement, Title, Tooltip, Legend, ChartDataLabels);

export const GraphBar = ({ dataX, labelY, title, color, fontColor = '#121212', }) => {

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
            color: fontColor,
            anchor: 'center',
            rotation: 90,
            font: {
               size: 12,
               family: 'Livvic-Regular'
            }
         }
      },
      scales: {
         x: {
            display: true,
         },
         y: {
            display: false,
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
      <Bar options={options} data={data} />
   )
}




