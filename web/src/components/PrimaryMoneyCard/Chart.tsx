import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Line } from 'react-chartjs-2';

import { Card } from './styles';

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

const MyChart: React.FC<{
  days: {
    [key: string]: any;
  };
}> = ({ days }) => {
  const theme = useContext(ThemeContext);

  const data = {
    labels: Object.keys(days),
    datasets: [
      {
        label: 'This week',
        data: Object.values(days),
        borderColor: 'transparent',
        pointBackgroundColor: theme.foreground,
        pointBorderColor: theme.foreground,
        lineTension: 0.4,
      },
    ],
  };

  return (
    <Card>
      <Line data={data} options={options} />
      <div className="axis">
        {Object.keys(days).map((day, index) => (
          <div className="tick" key={`tick-${index}`}>
            <span className="value value--this">$ {days[day]} B</span>
            {day}
          </div>
        ))}
      </div>
    </Card>
  );
};

export default MyChart;
