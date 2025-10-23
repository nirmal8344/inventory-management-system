
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { DashboardIcon, ProductsIcon, SuppliersIcon, CustomersIcon, SalesIcon, ReportsIcon, SettingsIcon, LogoutIcon, ChevronLeftIcon, ChevronRightIcon, LogoIcon } from '../icons/IconPack';

const navItems = [
  { to: '/dashboard', icon: DashboardIcon, label: 'Dashboard' },
  { to: '/products', icon: ProductsIcon, label: 'Products' },
  { to: '/suppliers', icon: SuppliersIcon, label: 'Suppliers' },
  { to: '/customers', icon: CustomersIcon, label: 'Customers' },
  { to: '/sales', icon: SalesIcon, label: 'Sales' },
  { to: '/reports', icon: ReportsIcon, label: 'Reports' },
];

const Sidebar = ({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (isOpen: boolean) => void }) => {
  const { logout } = useAuth();

  return (
    <>
      <div className={`bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 flex flex-col transition-all duration-300 ease-in-out ${isOpen ? 'w-64' : 'w-20'}`}>
        <div className={`flex items-center ${isOpen ? 'justify-between' : 'justify-center'} p-4 border-b border-slate-200 dark:border-slate-700 h-16`}>
          {isOpen && <div className="flex items-center gap-2">
            <LogoIcon className="h-8 w-8 text-primary-500"/>
            <span className="text-xl font-bold">InvSys</span>
          </div>}
          <button onClick={() => setIsOpen(!isOpen)} className="p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700">
            {isOpen ? <ChevronLeftIcon className="h-6 w-6"/> : <ChevronRightIcon className="h-6 w-6"/>}
          </button>
        </div>
        <nav className="flex-1 px-4 py-4 space-y-2">
          {navItems.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center p-2 rounded-lg transition-colors duration-200 ${isOpen ? 'justify-start' : 'justify-center'} ${
                  isActive
                    ? 'bg-primary-500 text-white'
                    : 'hover:bg-slate-100 dark:hover:bg-slate-700'
                }`
              }
              title={item.label}
            >
              <item.icon className="h-6 w-6" />
              {isOpen && <span className="ml-4 font-medium">{item.label}</span>}
            </NavLink>
          ))}
        </nav>
        <div className="px-4 py-4 border-t border-slate-200 dark:border-slate-700">
          <NavLink to="/settings" className={({ isActive }) =>
            `flex items-center p-2 rounded-lg transition-colors duration-200 ${isOpen ? 'justify-start' : 'justify-center'} ${
              isActive
                ? 'bg-primary-500 text-white'
                : 'hover:bg-slate-100 dark:hover:bg-slate-700'
            }`
          }>
            <SettingsIcon className="h-6 w-6" />
            {isOpen && <span className="ml-4 font-medium">Settings</span>}
          </NavLink>
          <button
            onClick={logout}
            className={`flex items-center w-full p-2 mt-2 rounded-lg text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors duration-200 ${isOpen ? 'justify-start' : 'justify-center'}`}
          >
            <LogoutIcon className="h-6 w-6" />
            {isOpen && <span className="ml-4 font-medium">Logout</span>}
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
