
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRightIcon } from '../icons/IconPack';

const Breadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    return (
        <nav className="flex mb-4" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                    <Link to="/" className="inline-flex items-center text-sm font-medium text-slate-700 hover:text-primary-600 dark:text-slate-400 dark:hover:text-white">
                        Home
                    </Link>
                </li>
                {pathnames.map((value, index) => {
                    const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                    const isLast = index === pathnames.length - 1;
                    return (
                        <li key={to}>
                            <div className="flex items-center">
                                <ChevronRightIcon className="w-3 h-3 text-slate-400 mx-1" />
                                <Link
                                    to={to}
                                    className={`ml-1 text-sm font-medium ${isLast ? 'text-slate-500 dark:text-slate-400' : 'text-slate-700 hover:text-primary-600 dark:text-slate-400 dark:hover:text-white'}`}
                                >
                                    {value.charAt(0).toUpperCase() + value.slice(1)}
                                </Link>
                            </div>
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;
