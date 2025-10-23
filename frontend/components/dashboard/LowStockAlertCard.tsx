
import React from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import type { Product } from '../../types';

interface LowStockAlertCardProps {
    products: Product[];
}

const LowStockAlertCard: React.FC<LowStockAlertCardProps> = ({ products }) => {
    return (
        <Card title="Low Stock Alerts" action={<Button variant="ghost" size="sm">View All</Button>}>
            <div className="space-y-4">
                {products.length > 0 ? products.slice(0, 5).map(product => (
                    <div key={product.id} className="flex justify-between items-center">
                        <div>
                            <p className="font-medium text-slate-800 dark:text-slate-200">{product.name}</p>
                            <p className="text-sm text-slate-500 dark:text-slate-400">SKU: {product.sku}</p>
                        </div>
                        <div className="text-right">
                           <p className="font-semibold text-red-500">{product.quantity} left</p>
                           <p className="text-xs text-slate-500">in stock</p>
                        </div>
                    </div>
                )) : (
                    <p className="text-slate-500 dark:text-slate-400 text-center py-4">No low stock items. Well done!</p>
                )}
            </div>
        </Card>
    );
};

export default LowStockAlertCard;
