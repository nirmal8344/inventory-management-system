
import React, { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { useAuth } from '../../contexts/AuthContext';
import { SunIcon, MoonIcon, BellIcon, SearchIcon, MenuIcon, ChevronDownIcon } from '../icons/IconPack';

const Navbar = ({ onMenuButtonClick }: { onMenuButtonClick: () => void }) => {
  const { theme, toggleTheme } = useTheme();
  const { logout } = useAuth();
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-slate-800 shadow-sm h-16 flex items-center justify-between px-6 z-10 border-b border-slate-200 dark:border-slate-700">
      <div className="flex items-center">
        <button onClick={onMenuButtonClick} className="text-slate-500 dark:text-slate-400 lg:hidden mr-4">
          <MenuIcon className="h-6 w-6" />
        </button>
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 w-64 bg-slate-100 dark:bg-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700">
          {theme === 'light' ? <MoonIcon className="h-6 w-6 text-slate-600" /> : <SunIcon className="h-6 w-6 text-yellow-400" />}
        </button>
        <button className="relative p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700">
          <BellIcon className="h-6 w-6 text-slate-600 dark:text-slate-300" />
          <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-500"></span>
        </button>
        <div className="relative">
          <button onClick={() => setProfileOpen(!profileOpen)} className="flex items-center space-x-2">
            <img src="https://picsum.photos/40/40" alt="profile" className="h-10 w-10 rounded-full" />
            <div className="hidden md:block text-left">
                <p className="font-semibold text-sm">Admin User</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Admin</p>
            </div>
            <ChevronDownIcon className={`h-5 w-5 text-slate-500 transition-transform ${profileOpen ? 'rotate-180' : ''}`} />
          </button>
          {profileOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-lg shadow-lg py-1 ring-1 ring-black ring-opacity-5">
              <a href="#/settings" className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700">Profile</a>
              <a href="#/settings" className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700">Settings</a>
              <button onClick={logout} className="w-full text-left block px-4 py-2 text-sm text-red-600 hover:bg-slate-100 dark:hover:bg-slate-700">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
