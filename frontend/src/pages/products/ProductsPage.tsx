import React, { useState, useEffect, useMemo } from 'react';
import ProductsTable from '../../components/products/ProductsTable';
import Button from '../../components/ui/Button';
import ProductFormModal from '../../components/products/ProductFormModal';
import { PlusIcon, UploadIcon, DownloadIcon, FilterIcon, SearchIcon } from '../../components/icons/IconPack';
import type { Product } from '../../../types';
import { useToast } from '../../hooks/useToast';

const ProductsPage = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const { addToast } = useToast();

    // Fetch all products from backend
    const fetchProducts = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/products');
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            addToast('Failed to fetch products.', 'error');
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    // Memoized filtering for the search bar
    const filteredProducts = useMemo(() => {
        if (!searchTerm) return products;
        return products.filter(p =>
            p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            p.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
            p.category.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [products, searchTerm]);

    const handleAddProduct = () => {
        setSelectedProduct(null);
        setIsModalOpen(true);
    };

    const handleEditProduct = (product: Product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const handleDeleteProduct = async (productId: string) => {
        if (!window.confirm("Are you sure you want to delete this product?")) return;
        try {
            await fetch(`http://localhost:8080/api/products/${productId}`, { method: 'DELETE' });
            addToast('Product deleted successfully!', 'success');
            fetchProducts(); // Refresh list
        } catch (error) {
            addToast('Failed to delete product.', 'error');
        }
    };

    const handleSaveProduct = async (product: Omit<Product, 'id'>) => {
        const isEditing = !!selectedProduct;
        const url = isEditing
            ? `http://localhost:8080/api/products/${selectedProduct.id}`
            : 'http://localhost:8080/api/products';
        const method = isEditing ? 'PUT' : 'POST';

        try {
            await fetch(url, {
                method: method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(product),
            });
            addToast(`Product ${isEditing ? 'updated' : 'added'} successfully!`, 'success');
            fetchProducts(); // Refresh list
        } catch (error) {
            addToast('Failed to save product.', 'error');
        } finally {
            setIsModalOpen(false);
        }
    };
    
    const handleExport = async () => {
        try {
            addToast('Generating your download...', 'info');
            const response = await fetch('http://localhost:8080/api/products/export');
            if (!response.ok) throw new Error("Export failed");
            
            const csvData = await response.text();
            const blob = new Blob([csvData], { type: 'text/csv' });
            const url = window.URL.createObjectURL(blob);
            
            const a = document.createElement('a');
            a.href = url;
            a.download = 'products.csv';
            document.body.appendChild(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);
        } catch (error) {
            addToast('Could not export data.', 'error');
        }
    };
    
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold">Products</h1>
                <div className="flex space-x-2">
                    <Button onClick={handleExport} variant="secondary" leftIcon={<DownloadIcon className="h-5 w-5"/>}>Export</Button>
                    <Button onClick={() => addToast('Import coming soon!', 'info')} variant="secondary" leftIcon={<UploadIcon className="h-5 w-5"/>}>Import</Button>
                    <Button onClick={handleAddProduct} leftIcon={<PlusIcon className="h-5 w-5"/>}>Add Product</Button>
                </div>
            </div>
            
            <div className="flex justify-between items-center">
                <div className="relative w-full max-w-xs">
                    <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400"/>
                    <input 
                        type="text" 
                        placeholder="Search products..." 
                        className="w-full pl-10 pr-4 py-2 bg-white dark:bg-slate-800 rounded-lg border border-slate-300 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-primary-500"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <Button onClick={() => addToast('Filters are coming soon!', 'info')} variant="secondary" leftIcon={<FilterIcon className="h-5 w-5"/>}>Filters</Button>
            </div>

            <ProductsTable 
                products={filteredProducts}
                onEdit={handleEditProduct} 
                onDelete={handleDeleteProduct} 
            />

            <ProductFormModal 
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSave={handleSaveProduct}
                product={selectedProduct}
            />
        </div>
    );
};

export default ProductsPage;