
import React, { ReactNode } from 'react';

interface CardProps {
    children: ReactNode;
    className?: string;
    title?: string;
    action?: ReactNode;
}

const Card: React.FC<CardProps> = ({ children, className = '', title, action }) => {
    return (
        <div className={`bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 ${className}`}>
            {(title || action) && (
                <div className="flex justify-between items-center mb-4">
                    {title && <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200">{title}</h3>}
                    {action}
                </div>
            )}
            {children}
        </div>
    );
};

export default Card;
