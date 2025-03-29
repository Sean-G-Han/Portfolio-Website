import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const colors = '#4a90e2'; // Color for the bars

interface ChartProps {
    data: { label: string; value: number }[];
}

const SoftwareProficiencyChart: React.FC<ChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={data.length * 45}>
      <BarChart data={data} layout="vertical">
        <XAxis type="number" domain={[0, 100]} tick={false}/>
        <YAxis dataKey="label" type="category" width={70} />
        <Tooltip cursor={{ fill: 'rgba(0, 0, 0, 0.1)' }} />
        <Bar dataKey="value" barSize={20} radius={[10, 10, 10, 10]}>
          {data.map((index) => (
            <Cell key={`cell-${index}`} fill={colors} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SoftwareProficiencyChart;