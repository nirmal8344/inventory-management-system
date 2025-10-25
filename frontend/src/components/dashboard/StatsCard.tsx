
import React from 'react';
import Card from '../ui/Card';
import { TrendingUpIcon, TrendingDownIcon } from '../icons/IconPack';
import type { StatsCardData } from '../../../types';


const StatsCard: React.FC<StatsCardData> = ({ title, value, change, changeType, icon: Icon }) => {
    const isIncrease = changeType === 'increase';
    return (
        <Card>
            <div className="flex justify-between items-start">
                <div>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{title}</p>
                    <p className="text-2xl font-bold text-slate-800 dark:text-slate-100 mt-1">{value}</p>
                </div>
                <div className="bg-primary-100 dark:bg-primary-500/20 p-2 rounded-lg">
                    <Icon className="h-6 w-6 text-primary-500 dark:text-primary-400" />
                </div>
            </div>
            <div className={`flex items-center text-sm mt-4 ${isIncrease ? 'text-green-500' : 'text-red-500'}`}>
                {isIncrease ? <TrendingUpIcon className="h-4 w-4 mr-1" /> : <TrendingDownIcon className="h-4 w-4 mr-1" />}
                <span>{change}</span>
            </div>
        </Card>
    );
};

export default StatsCard;
