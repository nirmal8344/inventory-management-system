
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Card from '../ui/Card';

interface SalesLineChartProps {
    data: { name: string; sales: number }[];
}

const SalesLineChart: React.FC<SalesLineChartProps> = ({ data }) => {
    return (
        <Card title="Sales Overview">
            <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(128, 128, 128, 0.3)" />
                        <XAxis dataKey="name" stroke="rgb(100 116 139)" />
                        <YAxis stroke="rgb(100 116 139)" />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: 'rgb(30 41 59)',
                                border: '1px solid rgb(51 65 85)',
                                color: 'rgb(226 232 240)'
                            }}
                        />
                        <Legend />
                        <Line type="monotone" dataKey="sales" stroke="#3b82f6" strokeWidth={2} activeDot={{ r: 8 }} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </Card>
    );
};

export default SalesLineChart;
