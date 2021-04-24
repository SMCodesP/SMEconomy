import { Line } from 'react-chartjs-2';

import { Card } from './styles';

const MyChart = () => {
  const days = {
    DOM: 28.0,
    SEG: 18.5,
    TERÇ: 29.0,
    QUA: 30.8,
    QUI: 16.4,
    SEX: 35.3,
    SÁB: 37.4,
  };

  const data = {
    labels: Object.keys(days),
    datasets: [
      {
        label: 'This week',
        data: Object.values(days),
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
        {Object.keys(days).map((day) => (
          <div className="tick">
            <span className="value value--this">$ {days[day]} B</span>
            {day}
          </div>
        ))}
      </div>
    </Card>
  );
};

export default MyChart;
