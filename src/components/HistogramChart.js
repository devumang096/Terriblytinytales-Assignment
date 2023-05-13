import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const HistogramChart = ({ data }) => (
  <BarChart width={600} height={300} data={data}>
    <XAxis dataKey="word" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="frequency" fill="#8884d8" />
  </BarChart>
);

export default HistogramChart;
