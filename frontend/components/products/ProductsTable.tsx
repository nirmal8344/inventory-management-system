
import React, { useState } from 'react';
import type { Product } from '../../types';
import { EditIcon, TrashIcon, MoreVerticalIcon } from '../icons/IconPack';
import ConfirmDeleteDialog from '../ui/ConfirmDeleteDialog';

interface ProductsTableProps {
  products: Product[];
  onEdit: (product: Product) => void;
  onDelete: (productId: string) => void;
}

const StockBadge: React.FC<{ status: Product['status'] }> = ({ status }) => {
  const baseClasses = "px-2 py-1 text-xs font-medium rounded-full inline-block";
  const statusClasses = {
    'In Stock': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
    'Low Stock': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
    'Out of Stock': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
  };
  return <span className={`${baseClasses} ${statusClasses[status]}`}>{status}</span>;
};

const ProductsTable: React.FC<ProductsTableProps> = ({ products, onEdit, onDelete }) => {
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState<string | null>(null);

  const handleDeleteClick = (productId: string) => {
    setProductToDelete(productId);
    setIsConfirmOpen(true);
  };

  const confirmDelete = () => {
    if (productToDelete) {
      onDelete(productToDelete);
    }
    setIsConfirmOpen(false);
    setProductToDelete(null);
  };

  return (
    <>
      <div className="bg-white dark:bg-slate-800 shadow-md rounded-lg overflow-x-auto">
        <table className="w-full text-sm text-left text-slate-500 dark:text-slate-400">
          <thead className="text-xs text-slate-700 uppercase bg-slate-50 dark:bg-slate-700 dark:text-slate-400">
            <tr>
              <th scope="col" className="p-4"><input type="checkbox" className="rounded text-primary-600"/></th>
              <th scope="col" className="px-6 py-3">Product Name</th>
              <th scope="col" className="px-6 py-3">SKU</th>
              <th scope="col" className="px-6 py-3">Category</th>
              <th scope="col" className="px-6 py-3">Quantity</th>
              <th scope="col" className="px-6 py-3">Price</th>
              <th scope="col" className="px-6 py-3">Status</th>
              <th scope="col" className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="bg-white border-b dark:bg-slate-800 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-600">
                <td className="w-4 p-4"><input type="checkbox" className="rounded text-primary-600"/></td>
                <th scope="row" className="px-6 py-4 font-medium text-slate-900 whitespace-nowrap dark:text-white">{product.name}</th>
                <td className="px-6 py-4">{product.sku}</td>
                <td className="px-6 py-4">{product.category}</td>
                <td className="px-6 py-4">{product.quantity}</td>
                <td className="px-6 py-4">${product.salePrice.toFixed(2)}</td>
                <td className="px-6 py-4"><StockBadge status={product.status} /></td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-2">
                    <button onClick={() => onEdit(product)} className="p-1 text-blue-500 hover:text-blue-700"><EditIcon className="h-5 w-5"/></button>
                    <button onClick={() => handleDeleteClick(product.id)} className="p-1 text-red-500 hover:text-red-700"><TrashIcon className="h-5 w-5"/></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ConfirmDeleteDialog
        isOpen={isConfirmOpen}
        onClose={() => setIsConfirmOpen(false)}
        onConfirm={confirmDelete}
        title="Delete Product"
        message="Are you sure you want to delete this product? This action cannot be undone."
      />
    </>
  );
};

export default ProductsTable;
