import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { getAllWeights } from '../api/index';

type Weight = {
  name: string;
  date: string;
  weight: string;
};

function WeightChart(): JSX.Element {
  const [isLoading, setLoading] = useState(true);

  const [weightData, setWeightData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAllWeights();

      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      setWeightData(res.data.data);
      setLoading(false);
    };
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetchData().catch((error) => {
      console.log(error);
    });
  }, [isLoading]);

  if (isLoading) return <p>Loading...</p>;

  const bobbyWeights = weightData.filter(
    (weight: Weight) => weight.name === 'Bobby'
  );
  const erinWeights = weightData.filter(
    (weight: Weight) => weight.name === 'Erin'
  );

  const data = {
    datasets: [
      {
        label: 'Bobby',
        data: bobbyWeights,
        borderColor: 'rgba(42, 25, 42, 1)',
        backgroundColor: 'rgba(84, 49, 84, 0.85)',
        borderWidth: 2,
        fill: true,
        order: 1,
      },
      {
        label: 'Erin',
        data: erinWeights,
        borderColor: 'rgba(35, 35, 50, 1)',
        backgroundColor: 'rgba(70, 70, 100, 0.85)',
        borderWidth: 2,
        fill: true,
      },
    ],
  };
  const options = {
    parsing: {
      xAxisKey: 'date',
      yAxisKey: 'weight',
    },
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Weight Tracker',
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Weight',
        },
        min: 100,
        max: 180,
        ticks: {
          stepSize: 5,
        },
      },
    },
  };

  return <Line data={data} options={options} type="line" />;
}

export default WeightChart;
