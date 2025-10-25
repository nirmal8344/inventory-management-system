import React, { useState, useEffect } from 'react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { PlusIcon, EditIcon, TrashIcon } from '../../components/icons/IconPack';
import type { Supplier } from '../../../types';
import { useToast } from '../../hooks/useToast';
import SupplierFormModal from '../../components/suppliers/SupplierFormModal';

const SuppliersPage = () => {
    const [suppliers, setSuppliers] = useState<Supplier[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedSupplier, setSelectedSupplier] = useState<Supplier | null>(null);
    const { addToast } = useToast();

    const fetchSuppliers = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/suppliers');
            setSuppliers(await response.json());
        } catch (error) { addToast('Failed to fetch suppliers.', 'error'); }
    };

    useEffect(() => { fetchSuppliers(); }, []);

    const handleAdd = () => {
        setSelectedSupplier(null);
        setIsModalOpen(true);
    };

    const handleEdit = (supplier: Supplier) => {
        setSelectedSupplier(supplier);
        setIsModalOpen(true);
    };

    const handleDelete = async (supplierId: string) => {
        if (window.confirm('Are you sure you want to delete this supplier?')) {
            try {
                await fetch(`http://localhost:8080/api/suppliers/${supplierId}`, { method: 'DELETE' });
                addToast('Supplier deleted successfully!', 'success');
                fetchSuppliers(); // Re-fetch data
            } catch (error) { addToast('Failed to delete supplier.', 'error'); }
        }
    };

    const handleSave = async (supplierData: Omit<Supplier, 'id'>) => {
        const isEditing = !!selectedSupplier;
        const url = isEditing ? `http://localhost:8080/api/suppliers/${selectedSupplier.id}` : 'http://localhost:8080/api/suppliers';
        const method = isEditing ? 'PUT' : 'POST';

        try {
            await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(supplierData),
            });
            addToast(`Supplier ${isEditing ? 'updated' : 'added'} successfully!`, 'success');
            fetchSuppliers(); // Re-fetch data
        } catch (error) { addToast('Failed to save supplier.', 'error'); }
        finally { setIsModalOpen(false); }
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold">Suppliers</h1>
                <Button onClick={handleAdd} leftIcon={<PlusIcon className="h-5 w-5"/>}>Add Supplier</Button>
            </div>
            <Card>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-slate-700 uppercase bg-slate-50 dark:bg-slate-700 dark:text-slate-400">
                            <tr>
                                <th className="px-6 py-3">Name</th>
                                <th className="px-6 py-3">Contact Person</th>
                                <th className="px-6 py-3">Email</th>
                                <th className="px-6 py-3">Phone</th>
                                <th className="px-6 py-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {suppliers.map(supplier => (
                                <tr key={supplier.id} className="bg-white border-b dark:bg-slate-800 dark:border-slate-700 hover:bg-slate-50">
                                    <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">{supplier.name}</td>
                                    <td className="px-6 py-4">{supplier.contactPerson}</td>
                                    <td className="px-6 py-4">{supplier.email}</td>
                                    <td className="px-6 py-4">{supplier.phone}</td>
                                    <td className="px-6 py-4 flex space-x-2">
                                        <button onClick={() => handleEdit(supplier)} className="p-1 text-blue-500 hover:text-blue-700"><EditIcon className="h-5 w-5"/></button>
                                        <button onClick={() => handleDelete(supplier.id)} className="p-1 text-red-500 hover:text-red-700"><TrashIcon className="h-5 w-5"/></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>
            <SupplierFormModal 
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSave={handleSave}
                supplier={selectedSupplier}
            />
        </div>
    );
};

export default SuppliersPage;