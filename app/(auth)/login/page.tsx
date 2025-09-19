'use client'

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import axios from 'axios';

interface LoginFormData {
    username: string;
    password: string;
}

interface LoginErrors {
    username?: string;
    password?: string;
    server?: string;
}

interface LoginResponse {
    access: string;
    refresh: string;
}

function Login() {
    const router = useRouter();
    const [formData, setFormData] = useState<LoginFormData>({
        username: '',
        password: ''
    });
    const [errors, setErrors] = useState<LoginErrors>({});
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        
        if (errors[name as keyof LoginErrors]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[name as keyof LoginErrors];
                return newErrors;
            });
        }
    };

    const validateForm = (): LoginErrors => {
        const newErrors: LoginErrors = {};

        if (!formData.username.trim()) {
            newErrors.username = 'Username is required';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
        }

        return newErrors;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrors({});

        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        setIsLoading(true);

        try {
            const response = await axios.post<LoginResponse>('http://127.0.0.1:8000/api/v1/auth/token/', {
                username: formData.username,
                password: formData.password
            });

            console.log('Login successful:', response.data);
            

            if (typeof window !== 'undefined') {
                localStorage.setItem('accessToken', response.data.access);
                localStorage.setItem('refreshToken', response.data.refresh);
            }
            
            router.push('/');
            router.refresh();
            
        } catch (error: any) {
            console.error('Login error:', error);
            
            if (error.response?.status === 401) {
                setErrors({
                    server: 'Invalid username or password'
                });
            } else if (error.response?.data?.detail) {
                setErrors({
                    server: error.response.data.detail
                });
            } else if (error.response?.data) {
                const errorData = error.response.data;
                if (typeof errorData === 'object') {
                    const firstError = Object.values(errorData)[0];
                    setErrors({
                        server: Array.isArray(firstError) ? firstError[0] : String(firstError)
                    });
                } else {
                    setErrors({
                        server: String(errorData)
                    });
                }
            } else {
                setErrors({
                    server: 'Network error. Please try again.'
                });
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-1 min-h-screen flex-col justify-center px-6 py-12 lg:px-8 dark:bg-[#101828]">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img 
                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" 
                    alt="Your Company" 
                    className="mx-auto h-10 w-auto" 
                />
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900 dark:text-white">
                    Sign in to your account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleSubmit} className="space-y-6">

                    <div>
                        <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900 dark:text-white">
                            Username
                        </label>
                        <div className="mt-2">
                            <input 
                                id="username" 
                                type="text" 
                                name="username" 
                                value={formData.username}
                                onChange={handleChange}
                                required 
                                placeholder="Enter your username" 
                                className="block w-full rounded-md bg-white dark:bg-[#1C2433] px-3 py-1.5 text-base text-gray-900 dark:text-white outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" 
                            />
                            {errors.username && <p className="mt-1 text-sm text-red-600">{errors.username}</p>}
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900 dark:text-white">
                                Password
                            </label>
                            <div className="text-sm">
                                <Link href="/forgot-password" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                    Forgot password?
                                </Link>
                            </div>
                        </div>
                        <div className="mt-2">
                            <input 
                                id="password" 
                                type="password" 
                                name="password" 
                                value={formData.password}
                                onChange={handleChange}
                                required 
                                placeholder="Enter your password" 
                                className="block w-full rounded-md bg-white dark:bg-[#1C2433] px-3 py-1.5 text-base text-gray-900 dark:text-white outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" 
                            />
                            {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
                        </div>
                    </div>

                    {errors.server && (
                        <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded-md">
                            {errors.server}
                        </div>
                    )}

                    <div>
                        <button 
                            type="submit" 
                            disabled={isLoading}
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? 'Signing in...' : 'Sign in'}
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm/6 text-gray-500 dark:text-gray-400">
                    Not a member?{' '}
                    <Link href="/register" className="font-semibold text-indigo-600 hover:text-indigo-500">
                        Register now
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Login;