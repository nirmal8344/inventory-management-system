import React, { useState, useEffect } from 'react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { PlusIcon, EditIcon, TrashIcon } from '../../components/icons/IconPack';
import type { Sale } from '../../../types';
import { useToast } from '../../hooks/useToast';
// நம்மால் இன்னும் உருவாக்கப்படாததால், இந்த வரியை இப்போதைக்கு கமென்ட் செய்யவும் அல்லது SaleFormModal-ஐ உருவாக்கவும்
// import SaleFormModal from '../../components/sales/SaleFormModal'; 

const PaymentStatusBadge: React.FC<{ status: 'Paid' | 'Pending' | 'Overdue' }> = ({ status }) => {
  const statusClasses = {
    'Paid': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
    'Pending': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
    'Overdue': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
  };
  return <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusClasses[status]}`}>{status}</span>;
};

const SalesPage = () => {
    const [sales, setSales] = useState<Sale[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
    const { addToast } = useToast();

    // Backend-லிருந்து Sales டேட்டாவை வாங்குதல்
    const fetchSales = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/sales');
            const data = await response.json();
            setSales(data);
        } catch (error) {
            addToast('Failed to fetch sales data.', 'error');
        }
    };

    useEffect(() => {
        fetchSales();
    }, []);
    
    // Add Sale பொத்தானுக்கான செயல்பாடு
    const handleAddSale = () => {
        addToast('Add Sale functionality is coming soon!', 'info');
        // setIsModalOpen(true); // உண்மையான பயன்பாட்டில் இதை இயக்கவும்
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold">Sales</h1>
                <Button onClick={handleAddSale} leftIcon={<PlusIcon className="h-5 w-5"/>}>Add Sale</Button>
            </div>
            
            {/* இங்கேதான் முக்கியமான மாற்றம் */}
            <Card>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-slate-500 dark:text-slate-400">
                        <thead className="text-xs text-slate-700 uppercase bg-slate-50 dark:bg-slate-700 dark:text-slate-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">Order ID</th>
                                <th scope="col" className="px-6 py-3">Customer</th>
                                <th scope="col" className="px-6 py-3">Products</th>
                                <th scope="col" className="px-6 py-3">Total Amount</th>
                                <th scope="col" className="px-6 py-3">Date</th>
                                <th scope="col" className="px-6 py-3">Status</th>
                            </tr>
                        </thead>
                        {/* டேட்டாவைக் காட்டும் முக்கியமான பகுதி */}
                        <tbody>
                            {sales.map(sale => (
                                <tr key={sale.id} className="bg-white border-b dark:bg-slate-800 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-600">
                                    <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">{sale.id}</td>
                                    <td className="px-6 py-4">{sale.customerName}</td>
                                    <td className="px-6 py-4">{sale.products}</td>
                                    <td className="px-6 py-4">₹{sale.totalAmount.toFixed(2)}</td>
                                    <td className="px-6 py-4">{sale.date}</td>
                                    <td className="px-6 py-4">
                                        <PaymentStatusBadge status={sale.paymentStatus} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>

            {/* <SaleFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSave={() => {}} /> */}
        </div>
    );
};

export default SalesPage;