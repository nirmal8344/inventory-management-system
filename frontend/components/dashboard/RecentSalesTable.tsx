
import React from 'react';
import Card from '../ui/Card';
import type { RecentSale } from '../../types';
import Button from '../ui/Button';

interface RecentSalesTableProps {
    sales: RecentSale[];
}

const statusColorMap = {
    Paid: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
    Pending: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
    Failed: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
};

const RecentSalesTable: React.FC<RecentSalesTableProps> = ({ sales }) => {
    return (
        <Card title="Recent Sales" action={<Button variant="ghost" size="sm">View All</Button>}>
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-slate-500 dark:text-slate-400">
                    <thead className="text-xs text-slate-700 uppercase bg-slate-50 dark:bg-slate-700 dark:text-slate-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">Customer</th>
                            <th scope="col" className="px-6 py-3">Amount</th>
                            <th scope="col" className="px-6 py-3">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sales.map(sale => (
                            <tr key={sale.id} className="bg-white border-b dark:bg-slate-800 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-600">
                                <td className="px-6 py-4 font-medium text-slate-900 whitespace-nowrap dark:text-white">
                                    {sale.customerName}
                                </td>
                                <td className="px-6 py-4">${sale.amount.toFixed(2)}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusColorMap[sale.status]}`}>
                                        {sale.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Card>
    );
};

export default RecentSalesTable;
