
import type { Product, Supplier, Customer, Sale, RecentSale } from '../../types';

export const mockProducts: Product[] = [
  { id: 'PROD001', name: 'Wireless Mouse', sku: 'WM-101', category: 'Electronics', supplier: 'TechGear Inc.', costPrice: 15.50, salePrice: 29.99, quantity: 120, status: 'In Stock', lastUpdated: '2023-10-26' },
  { id: 'PROD002', name: 'Mechanical Keyboard', sku: 'MK-202', category: 'Electronics', supplier: 'GamerZone', costPrice: 75.00, salePrice: 119.99, quantity: 8, status: 'Low Stock', lastUpdated: '2023-10-25' },
  { id: 'PROD003', name: 'Ergonomic Office Chair', sku: 'EOC-301', category: 'Furniture', supplier: 'Comfort Seating', costPrice: 150.00, salePrice: 249.99, quantity: 30, status: 'In Stock', lastUpdated: '2023-10-26' },
  { id: 'PROD004', name: '4K Monitor', sku: '4KM-404', category: 'Electronics', supplier: 'Vision Displays', costPrice: 250.00, salePrice: 399.99, quantity: 0, status: 'Out of Stock', lastUpdated: '2023-10-22' },
  { id: 'PROD005', name: 'Leather Notebook', sku: 'LN-505', category: 'Stationery', supplier: 'PaperLuxe', costPrice: 8.00, salePrice: 19.99, quantity: 250, status: 'In Stock', lastUpdated: '2023-10-27' },
];

export const mockSuppliers: Supplier[] = [
  { id: 'SUP001', name: 'TechGear Inc.', contactPerson: 'John Doe', email: 'john@techgear.com', phone: '123-456-7890', address: '123 Tech Park, Silicon Valley', productsSupplied: 5 },
  { id: 'SUP002', name: 'GamerZone', contactPerson: 'Jane Smith', email: 'jane@gamerzone.com', phone: '987-654-3210', address: '456 Gaming Ave, LA', productsSupplied: 12 },
  { id: 'SUP003', name: 'Comfort Seating', contactPerson: 'Peter Jones', email: 'peter@comfortseating.com', phone: '555-123-4567', address: '789 Comfort Lane, NC', productsSupplied: 3 },
];

export const mockCustomers: Customer[] = [
  { id: 'CUST001', name: 'Alice Johnson', email: 'alice@example.com', phone: '111-222-3333', totalOrders: 5, totalSpent: 1250.75, loyaltyStatus: 'Gold', lastOrderDate: '2023-10-15' },
  { id: 'CUST002', name: 'Bob Williams', email: 'bob@example.com', phone: '444-555-6666', totalOrders: 2, totalSpent: 350.00, loyaltyStatus: 'Silver', lastOrderDate: '2023-09-20' },
  { id: 'CUST003', name: 'Charlie Brown', email: 'charlie@example.com', phone: '777-888-9999', totalOrders: 1, totalSpent: 29.99, loyaltyStatus: 'Bronze', lastOrderDate: '2023-10-25' },
];

export const mockSales: Sale[] = [
  { id: 'SALE001', customerName: 'Alice Johnson', products: [{ name: '4K Monitor', quantity: 2 }, { name: 'Wireless Mouse', quantity: 1 }], totalAmount: 829.97, paymentStatus: 'Paid', date: '2023-10-15' },
  { id: 'SALE002', customerName: 'Bob Williams', products: [{ name: 'Ergonomic Office Chair', quantity: 1 }], totalAmount: 249.99, paymentStatus: 'Paid', date: '2023-09-20' },
  { id: 'SALE003', customerName: 'New Client', products: [{ name: 'Mechanical Keyboard', quantity: 1 }], totalAmount: 119.99, paymentStatus: 'Pending', date: '2023-10-26' },
  { id: 'SALE004', customerName: 'Charlie Brown', products: [{ name: 'Wireless Mouse', quantity: 1 }], totalAmount: 29.99, paymentStatus: 'Overdue', date: '2023-10-01' },
];

export const salesDataForChart = [
    { name: 'Jan', sales: 4000 }, { name: 'Feb', sales: 3000 },
    { name: 'Mar', sales: 5000 }, { name: 'Apr', sales: 4500 },
    { name: 'May', sales: 6000 }, { name: 'Jun', sales: 5500 },
    { name: 'Jul', sales: 7000 },
];

export const stockByCategoryData = [
    { name: 'Electronics', value: 400 },
    { name: 'Furniture', value: 300 },
    { name: 'Stationery', value: 300 },
    { name: 'Apparel', value: 200 },
];

export const mockRecentSales: RecentSale[] = [
    { id: 'SALE001', customerName: 'John Doe', amount: 150.00, status: 'Paid' },
    { id: 'SALE002', customerName: 'Jane Smith', amount: 75.50, status: 'Pending' },
    { id: 'SALE003', customerName: 'Sam Wilson', amount: 320.00, status: 'Paid' },
    { id: 'SALE004', customerName: 'Chris Evans', amount: 45.00, status: 'Failed' },
    { id: 'SALE005', customerName: 'Natasha Romanoff', amount: 210.25, status: 'Paid' },
];
