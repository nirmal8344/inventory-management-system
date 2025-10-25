import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useToast } from '../../hooks/useToast';
import AuthLayout from '../../components/auth/AuthLayout';
import TextField from '../../components/auth/TextField';
import PasswordField from '../../components/auth/PasswordField';
import Button from '../../components/ui/Button';
import apiClient from '../../api/axios'; // <-- PUDHUSA INDHA LINE AH ADD PANNIRUKEN

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { addToast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // ==========================================================
      // INGA DHAAN MUKKIYAMANA MAATHAM
      // Pazhaya "fetch" code ku badila, indha "apiClient" code ah use panrom
      // ==========================================================
      const response = await apiClient.post('/api/auth/login', {
        email,
        password,
      });
      
      // Axios la, response.ok ku badila, response.status വെച്ച് check pannanum
      if (response.status === 200) {
        login();
        addToast('Login successful!', 'success');
        navigate('/dashboard');
      } else {
        // Axios amaidhiyave error ah throw pannidum, adhanala idhu thevai illa
        // Aana oru safety ku irukatum
        addToast('Login failed. Please check your credentials.', 'error');
      }
    } catch (error) {
      addToast('An error occurred. Please try again.', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout title="Welcome Back">
      <form onSubmit={handleSubmit} className="space-y-6">
        <TextField 
          id="email" 
          label="Email Address" 
          type="email" 
          required 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <PasswordField 
          id="password" 
          label="Password" 
          required 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="flex items-center justify-between">
            <div className="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-slate-300 rounded" />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-900 dark:text-slate-300">Remember me</label>
            </div>
            <div className="text-sm">
                <Link to="/forgot-password" className="font-medium text-primary-600 hover:text-primary-500">
                    Forgot your password?
                </Link>
            </div>
        </div>
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? 'Signing in...' : 'Sign In'}
        </Button>
        <div className="text-center text-sm">
            <span className="text-slate-600 dark:text-slate-400">Don't have an account? </span>
            <Link to="/signup" className="font-medium text-primary-600 hover:text-primary-500">
                Sign up
            </Link>
        </div>
      </form>
    </AuthLayout>
  );
};

export default LoginPage;