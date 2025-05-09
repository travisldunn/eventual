import React from 'react';
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface BarChartProps {
  data: Array<{ name: string; value: number }>;
  strikePrice: number;
  chartType: 'chart1' | 'chart2';
}

const BarChart: React.FC<BarChartProps> = ({ data, strikePrice, chartType }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <RechartsBarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" tick={{ fill: '#888' }} />
        <YAxis tick={{ fill: '#888' }} />
        <Tooltip />
        {chartType === 'chart1' ? (
          <Bar dataKey="value" fill="red" />
        ) : (
          <Bar dataKey="value" fill="green" />
        )}
      </RechartsBarChart>
    </ResponsiveContainer>
  );
};

export default BarChart; 