import React, { useState, useEffect } from 'react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { PlusIcon } from '../../components/icons/IconPack';
import type { Customer } from '../../../types';
import { useToast } from '../../hooks/useToast';

const LoyaltyBadge: React.FC<{ status: 'Bronze' | 'Silver' | 'Gold' }> = ({ status }) => {
  const statusClasses = {
    'Gold': 'bg-yellow-400 text-yellow-900',
    'Silver': 'bg-slate-300 text-slate-800',
    'Bronze': 'bg-orange-300 text-orange-900',
  };
  return <span className={`px-2 py-1 text-xs font-semibold rounded-full ${statusClasses[status]}`}>{status}</span>;
};

const CustomersPage = () => {
    const [customers, setCustomers] = useState<Customer[]>([]);
    const { addToast } = useToast();

    const fetchCustomers = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/customers');
            setCustomers(await response.json());
        } catch (error) {
            addToast('Failed to fetch customers.', 'error');
        }
    };

    useEffect(() => { fetchCustomers(); }, []);

    const handleAddCustomer = () => {
        addToast('Add Customer form is not implemented yet.', 'info');
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold">Customers</h1>
                <Button onClick={handleAddCustomer} leftIcon={<PlusIcon className="h-5 w-5"/>}>Add Customer</Button>
            </div>
            <Card>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-slate-500 dark:text-slate-400">
                        <thead className="text-xs text-slate-700 uppercase bg-slate-50 dark:bg-slate-700 dark:text-slate-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">Name</th>
                                <th scope="col" className="px-6 py-3">Email</th>
                                <th scope="col" className="px-6 py-3">Total Spent</th>
                                <th scope="col" className="px-6 py-3">Loyalty Status</th>
                                <th scope="col" className="px-6 py-3">Last Order</th>
                            </tr>
                        </thead>
                        <tbody>
                            {customers.map(customer => (
                                <tr key={customer.id} className="bg-white border-b dark:bg-slate-800 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-600">
                                    <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">{customer.name}</td>
                                    <td className="px-6 py-4">{customer.email}</td>
                                    <td className="px-6 py-4">${customer.totalSpent.toFixed(2)}</td>
                                    <td className="px-6 py-4"><LoyaltyBadge status={customer.loyaltyStatus} /></td>
                                    <td className="px-6 py-4">{customer.lastOrderDate}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>
        </div>
    );
};

export default CustomersPage;