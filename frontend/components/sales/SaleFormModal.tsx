import React, { useState } from 'react';
import Modal from '../ui/Modal';
import Button from '../ui/Button';
import type { Sale } from '../../types';

interface SaleFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (sale: Omit<Sale, 'id' | 'products'>) => void;
}

const SaleFormModal: React.FC<SaleFormModalProps> = ({ isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    customerName: '', totalAmount: 0, paymentStatus: 'Pending', date: new Date().toISOString().split('T')[0],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: name === 'totalAmount' ? parseFloat(value) || 0 : value }));
  };

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); onSave(formData); };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add New Sale" footer={<><Button variant="secondary" onClick={onClose}>Cancel</Button><Button onClick={handleSubmit}>Save Sale</Button></>}>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Customer Name</label>
          <input type="text" name="customerName" value={formData.customerName} onChange={handleChange} className="mt-1 block w-full rounded-md border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 shadow-sm" />
        </div>
        <div>
          <label className="block text-sm font-medium">Total Amount</label>
          <input type="number" name="totalAmount" value={formData.totalAmount} onChange={handleChange} className="mt-1 block w-full rounded-md border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 shadow-sm" />
        </div>
        <div>
          <label className="block text-sm font-medium">Payment Status</label>
          <select name="paymentStatus" value={formData.paymentStatus} onChange={handleChange} className="mt-1 block w-full rounded-md border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 shadow-sm">
            <option>Pending</option>
            <option>Paid</option>
            <option>Overdue</option>
          </select>
        </div>
      </form>
    </Modal>
  );
};

export default SaleFormModal;