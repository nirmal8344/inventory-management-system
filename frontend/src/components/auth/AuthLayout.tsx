
import React, { ReactNode } from 'react';
import { LogoIcon } from '../icons/IconPack';

interface AuthLayoutProps {
  title: string;
  children: ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ title, children }) => {
  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900 flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-6">
          <LogoIcon className="h-12 w-12 text-primary-600" />
        </div>
        <div className="bg-white dark:bg-slate-800 shadow-2xl rounded-xl p-8">
          <h2 className="text-2xl font-bold text-center text-slate-800 dark:text-slate-200 mb-6">{title}</h2>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
