import { Line } from 'react-chartjs-2';

import { Card } from './styles';

const MyChart = () => {
  const data = {
    labels: ['DOM', 'SEG', 'TERÇ', 'QUA', 'QUI', 'SEX', 'SÁB'],
    datasets: [
      {
        label: 'This week',
        data: [24, 18, 16, 18, 24, 36, 28],
        // backgroundColor: gradientThisWeek,
        borderColor: 'transparent',
        pointBackgroundColor: '#FFFFFF',
        pointBorderColor: '#FFFFFF',
        lineTension: 0.4,
      },
    ],
  };
  const options = {
    elements: {
      point: {
        radius: 0,
        hitRadius: 5,
        hoverRadius: 5,
      },
    },
    legend: {
      display: false,
    },
    scales: {
      xAxes: [
        {
          display: false,
        },
      ],
      yAxes: [
        {
          display: false,
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <Card>
      <Line data={data} options={options} />
      <div className="axis">
        <div className="tick">
          <span className="value value--this">$ 24 B</span>
          MON
        </div>
        <div className="tick">
          <span className="value value--this">$ 18 B</span>
          TUE
        </div>
        <div className="tick">
          <span className="value value--this">$ 16 B</span>
          WED
        </div>
        <div className="tick">
          <span className="value value--this">$ 18 B</span>
          THU
        </div>
        <div className="tick">
          <span className="value value--this">$ 24 B</span>
          FRI
        </div>
        <div className="tick">
          <span className="value value--this">$ 36 B</span>
          SAT
        </div>
        <div className="tick">
          <span className="value value--this">$ 28 B</span>
          SUN
        </div>
      </div>
    </Card>
  );
};

export default MyChart;
