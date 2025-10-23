
import React from 'react';
import StatsCard from '../../components/dashboard/StatsCard';
import SalesLineChart from '../../components/dashboard/SalesLineChart';
import StockPieChart from '../../components/dashboard/StockPieChart';
import RecentSalesTable from '../../components/dashboard/RecentSalesTable';
import LowStockAlertCard from '../../components/dashboard/LowStockAlertCard';
// FIX: Removed non-existent UsersIcon from import.
import { DollarSignIcon, PackageIcon, TrendingUpIcon, TrendingDownIcon, CustomersIcon } from '../../components/icons/IconPack';
import type { StatsCardData } from '../../types';
import { salesDataForChart, stockByCategoryData, mockRecentSales, mockProducts } from '../../data/mockData';

const DashboardPage = () => {

    const stats: StatsCardData[] = [
        { title: 'Total Revenue', value: '$45,231.89', change: '+20.1% from last month', changeType: 'increase', icon: DollarSignIcon },
        { title: 'Total Sales', value: '+1,230', change: '+18.1% from last month', changeType: 'increase', icon: TrendingUpIcon },
        { title: 'Total Products', value: '2,350', change: '-2.1% from last month', changeType: 'decrease', icon: PackageIcon },
        { title: 'Total Customers', value: '1,200', change: '+5.4% from last month', changeType: 'increase', icon: CustomersIcon },
    ];

    const lowStockProducts = mockProducts.filter(p => p.status === 'Low Stock');

    return (
        <div className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {stats.map(stat => <StatsCard key={stat.title} {...stat} />)}
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
                <div className="lg:col-span-2">
                    <SalesLineChart data={salesDataForChart} />
                </div>
                <StockPieChart data={stockByCategoryData} />
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
                <div className="lg:col-span-2">
                    <RecentSalesTable sales={mockRecentSales} />
                </div>
                <LowStockAlertCard products={lowStockProducts} />
            </div>
        </div>
    );
};

export default DashboardPage;
