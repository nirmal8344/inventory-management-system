
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200">
      <h1 className="text-9xl font-extrabold text-primary-600 tracking-widest">404</h1>
      <div className="bg-slate-800 dark:bg-slate-200 px-2 text-sm rounded rotate-12 absolute text-white dark:text-black">
        Page Not Found
      </div>
      <p className="text-2xl md:text-3xl font-light mt-4 mb-8">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link to="/dashboard">
        <Button>Go Home</Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
