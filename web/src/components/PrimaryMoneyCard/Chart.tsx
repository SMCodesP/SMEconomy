import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { LineChart, XAxis, Tooltip, CartesianGrid, Line, ResponsiveContainer, AreaChart, YAxis, Area } from 'recharts';

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
  days: any[];
  color?: string;
  id: string;
}> = ({ days, color, id }) => {
  return (
    <Card>
      <ResponsiveContainer width='100%' height="100%" aspect={4}>
        <AreaChart
          data={days}
        >
          <defs>
            <linearGradient id={`svg-${id}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="10%" stopColor={color} stopOpacity={0.75}/>
              <stop offset="90%" stopColor={color} stopOpacity={0}/>
            </linearGradient>
          </defs>
          <Area type="monotone" dataKey="uv" stroke={color} fillOpacity={1} fill={`url(#svg-${id})`} />
        </AreaChart>
      </ResponsiveContainer>
      <div className="axis">
        {days.map((day, index) => (
          <div className="tick" key={`tick-${index}`}>
            <span className="value value--this">$ {day.uv} B</span>
            {day.name}
          </div>
        ))}
      </div>
    </Card>
  );
};

export default MyChart;
