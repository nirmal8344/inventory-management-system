
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Card from '../ui/Card';

interface StockPieChartProps {
    data: { name: string; value: number }[];
}

const COLORS = ['#3b82f6', '#8b5cf6', '#ec4899', '#f59e0b'];

const StockPieChart: React.FC<StockPieChartProps> = ({ data }) => {
    return (
        <Card title="Stock by Category">
            <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                            nameKey="name"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip
                             contentStyle={{
                                backgroundColor: 'rgb(30 41 59)',
                                border: '1px solid rgb(51 65 85)',
                                color: 'rgb(226 232 240)'
                            }}
                        />
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </Card>
    );
};

export default StockPieChart;
