import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const data = {
  labels: ['Present', 'Abs'],
  datasets: [
    {
      data: [80, 20],
      backgroundColor: ['green', 'white'],
      hoverBackgroundColor: ['green', 'white']
    }
  ]
};

const options = {
  plugins: {
    legend: {
      display: true
    },
    tooltip: {
      enabled: false
    }
  },
  cutout: '80%',
  maintainAspectRatio: false,
  aspectRatio: 1, // Adjust the aspect ratio as needed
};

export default function Sdr() {
  return (
    <div className="flex justify-center">
      <div className="Chart w-[200px] h-[200px] relative">
        <Doughnut data={data} options={options} />
        <div className="absolute top-[58%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <span className="text-4xl">{data.datasets[0].data[0]}%</span>
        </div>
      </div>
    </div>
  );
}
