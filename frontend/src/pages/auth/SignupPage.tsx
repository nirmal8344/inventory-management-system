
import React from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from '../../components/auth/AuthLayout';
import TextField from '../../components/auth/TextField';
import PasswordField from '../../components/auth/PasswordField';
import Button from '../../components/ui/Button';

const SignupPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic
  };

  return (
    <AuthLayout title="Create an Account">
      <form onSubmit={handleSubmit} className="space-y-6">
        <TextField id="fullname" label="Full Name" type="text" required />
        <TextField id="email" label="Email Address" type="email" required />
        <PasswordField id="password" label="Password" required />
        <PasswordField id="confirm-password" label="Confirm Password" required />
        <Button type="submit" className="w-full">
          Create Account
        </Button>
        <div className="text-center text-sm">
          <span className="text-slate-600 dark:text-slate-400">Already have an account? </span>
          <Link to="/login" className="font-medium text-primary-600 hover:text-primary-500">
            Sign in
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
};

export default SignupPage;
