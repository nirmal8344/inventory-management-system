
import React from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from '../../components/auth/AuthLayout';
import TextField from '../../components/auth/TextField';
import Button from '../../components/ui/Button';

const ForgotPasswordPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle forgot password logic
  };

  return (
    <AuthLayout title="Reset Password">
      <p className="text-center text-sm text-slate-600 dark:text-slate-400 mb-6">
        Enter your email and we'll send you a link to reset your password.
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <TextField id="email" label="Email Address" type="email" required />
        <Button type="submit" className="w-full">
          Send Reset Link
        </Button>
        <div className="text-center text-sm">
            <Link to="/login" className="font-medium text-primary-600 hover:text-primary-500">
                Back to Sign in
            </Link>
        </div>
      </form>
    </AuthLayout>
  );
};

export default ForgotPasswordPage;
