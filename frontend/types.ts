
export interface Product {
  id: string;
  name: string;
  sku: string;
  category: string;
  supplier: string;
  costPrice: number;
  salePrice: number;
  quantity: number;
  status: 'In Stock' | 'Low Stock' | 'Out of Stock';
  lastUpdated: string;
}

export interface Supplier {
  id: string;
  name: string;
  contactPerson: string;
  email: string;
  phone: string;
  address: string;
  productsSupplied: number;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  totalOrders: number;
  totalSpent: number;
  loyaltyStatus: 'Bronze' | 'Silver' | 'Gold';
  lastOrderDate: string;
}

export interface Sale {
  id: string;
  customerName: string;
  products: { name: string; quantity: number }[];
  totalAmount: number;
  paymentStatus: 'Paid' | 'Pending' | 'Overdue';
  date: string;
}

export interface RecentSale {
    id: string;
    customerName: string;
    amount: number;
    status: 'Paid' | 'Pending' | 'Failed';
}

export interface StatsCardData {
    title: string;
    value: string;
    change: string;
    changeType: 'increase' | 'decrease';
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}
