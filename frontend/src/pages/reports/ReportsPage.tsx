
import React from 'react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { DownloadIcon, FilterIcon } from '../../components/icons/IconPack';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { salesDataForChart, stockByCategoryData } from '../../data/mockData';

const ReportsPage = () => {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold">Reports</h1>
                <div className="flex space-x-2">
                    <Button variant="secondary" leftIcon={<FilterIcon className="h-5 w-5"/>}>Filter</Button>
                    <Button variant="primary" leftIcon={<DownloadIcon className="h-5 w-5"/>}>Export PDF</Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                 <Card title="Sales Performance">
                    <div className="h-80">
                         <ResponsiveContainer width="100%" height="100%">
                             <BarChart data={salesDataForChart}>
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
                                 <Bar dataKey="sales" fill="#3b82f6" />
                             </BarChart>
                         </ResponsiveContainer>
                    </div>
                </Card>

                 <Card title="Inventory Summary">
                    <div className="h-80">
                         <ResponsiveContainer width="100%" height="100%">
                             <BarChart data={stockByCategoryData} layout="vertical">
                                 <CartesianGrid strokeDasharray="3 3" stroke="rgba(128, 128, 128, 0.3)" />
                                 <XAxis type="number" stroke="rgb(100 116 139)" />
                                 <YAxis type="category" dataKey="name" stroke="rgb(100 116 139)" />
                                 <Tooltip
                                     contentStyle={{
                                        backgroundColor: 'rgb(30 41 59)',
                                        border: '1px solid rgb(51 65 85)',
                                        color: 'rgb(226 232 240)'
                                    }}/>
                                 <Legend />
                                 <Bar dataKey="value" fill="#8b5cf6" />
                             </BarChart>
                         </ResponsiveContainer>
                    </div>
                </Card>
            </div>

            <Card title="Top Selling Products">
                 <p className="text-slate-500 dark:text-slate-400">Top selling products report will be displayed here.</p>
            </Card>
        </div>
    );
};

export default ReportsPage;
