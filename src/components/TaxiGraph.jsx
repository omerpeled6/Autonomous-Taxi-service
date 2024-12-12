/* eslint-disable react/prop-types */
import { Scatter } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LinearScale,
  PointElement,
  LineElement,
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, LinearScale, PointElement, LineElement)

export default function TaxiGraph({ taxis, orders }) {
  const data = {
    datasets: [
      {
        label: 'Taxis',
        data: taxis.map((taxi) => ({ x: taxi.x, y: taxi.y })),
        pointBackgroundColor: taxis.map((taxi) => taxi.color),
        pointStyle: 'rectRot',
        pointRadius: 8,
        showLine: false,
      },
      {
        label: 'Order Start',
        data: orders.map((order) => ({ x: order.startX, y: order.startY })),
        pointBackgroundColor: 'green',
        pointRadius: 6,
        showLine: false,
      },
      {
        label: 'Order End',
        data: orders.map((order) => ({ x: order.endX, y: order.endY })),
        pointBackgroundColor: 'red',
        pointRadius: 6,
        showLine: false,
      },
      {
        label: 'Order Connections',
        data: orders.flatMap((order) => [
          { x: order.startX, y: order.startY },
          { x: order.endX, y: order.endY },
          { x: NaN, y: NaN },
        ]),
        borderColor: 'blue',
        borderWidth: 1.5,
        showLine: true,
        pointRadius: 0,
        fill: false,
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: 'linear',
        min: 0,
        max: 20,
        ticks: {
          stepSize: 1,
        },
        grid: {
          color: 'rgba(200, 200, 200, 0.5)',
        },
        title: {
          display: true,
          text: 'X (km)',
        },
      },
      y: {
        type: 'linear',
        min: 0,
        max: 20,
        ticks: {
          stepSize: 1,
        },
        grid: {
          color: 'rgba(200, 200, 200, 0.5)',
        },
        title: {
          display: true,
          text: 'Y (km)',
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
  }

  return (
    <div className="w-full" style={{ height: '350px', width: '350px' }}>
      <Scatter data={data} options={options} />
    </div>
  )
}
