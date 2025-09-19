'use client'

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface FormData {
    name: string;
    email: string;
    password: string;
    password2: string;
}

interface Errors {
    name?: string;
    email?: string;
    password?: string;
    password2?: string;
    server?: string;
}

function Register() {
    const router = useRouter();
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        password: '',
        password2: ''
    });
    const [errors, setErrors] = useState<Errors>({});
    const [isLoading, setIsLoading] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        

        if (errors[name as keyof Errors]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[name as keyof Errors];
                return newErrors;
            });
        }
    };

    const validateForm = (): Errors => {
        const newErrors: Errors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Full name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        if (formData.password !== formData.password2) {
            newErrors.password2 = 'Passwords do not match';
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
            const response = await axios.post('http://127.0.0.1:8000/api/v1/auth/register/', {
                username: formData.name,
                email: formData.email,
                password: formData.password
            });

            console.log('Registration successful:', response.data);
            
            router.push('/login');
            
        } catch (error: any) {
            console.error('Registration error:', error);
            
            if (error.response?.data) {
                setErrors({
                    server: error.response.data.message || 'Registration failed'
                });
            } else {
                setErrors({
                    server: 'Network error. Please try again.'
                });
            }
        } finally {
            setIsLoading(false);
        }
    };


    if (!isMounted) {
        return (
            <div className="flex flex-1 min-h-full flex-col justify-center px-6 py-12 lg:px-8 dark:bg-[#101828] ">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <div className="mx-auto h-10 w-10 bg-gray-300 rounded animate-pulse"></div>
                    <div className="mt-10 h-8 bg-gray-300 rounded animate-pulse"></div>
                </div>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm space-y-6">
                    {[1, 2, 3, 4].map(i => (
                        <div key={i}>
                            <div className="h-4 bg-gray-300 rounded animate-pulse mb-2"></div>
                            <div className="h-10 bg-gray-300 rounded animate-pulse"></div>
                        </div>
                    ))}
                    <div className="h-10 bg-gray-300 rounded animate-pulse"></div>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-8 dark:bg-[#101828] min-h-screen">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img 
                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" 
                    alt="Your Company" 
                    className="mx-auto h-10 w-auto" 
                />
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900 dark:text-white">
                    Create your account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleSubmit} className="space-y-6">

                    <div>
                        <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900 dark:text-white">
                            Full name
                        </label>
                        <div className="mt-2">
                            <input 
                                id="name" 
                                type="text" 
                                name="name" 
                                value={formData.name}
                                onChange={handleChange}
                                required 
                                placeholder="John Doe" 
                                className="block w-full rounded-md bg-white dark:bg-[#1C2433] px-3 py-1.5 text-base text-gray-900 dark:text-white outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" 
                            />
                            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                        </div>
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900 dark:text-white">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input 
                                id="email" 
                                type="email" 
                                name="email" 
                                value={formData.email}
                                onChange={handleChange}
                                required 
                                placeholder="email@example.com" 
                                className="block w-full rounded-md bg-white dark:bg-[#1C2433] px-3 py-1.5 text-base text-gray-900 dark:text-white outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" 
                            />
                            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900 dark:text-white">
                            Password
                        </label>
                        <div className="mt-2">
                            <input 
                                id="password" 
                                type="password" 
                                name="password" 
                                value={formData.password}
                                onChange={handleChange}
                                required 
                                placeholder="••••••••" 
                                className="block w-full rounded-md bg-white dark:bg-[#1C2433] px-3 py-1.5 text-base text-gray-900 dark:text-white outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" 
                            />
                            {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password2" className="block text-sm/6 font-medium text-gray-900 dark:text-white">
                            Confirm Password
                        </label>
                        <div className="mt-2">
                            <input 
                                id="password2" 
                                type="password" 
                                name="password2" 
                                value={formData.password2}
                                onChange={handleChange}
                                required 
                                placeholder="••••••••" 
                                className="block w-full rounded-md bg-white dark:bg-[#1C2433] px-3 py-1.5 text-base text-gray-900 dark:text-white outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" 
                            />
                            {errors.password2 && <p className="mt-1 text-sm text-red-600">{errors.password2}</p>}
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
                            {isLoading ? 'Creating account...' : 'Register'}
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm/6 text-gray-500 dark:text-gray-400">
                    Already have an account?{' '}
                    <Link href="/login" className="font-semibold text-indigo-600 hover:text-indigo-500">
                        Sign in now
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Register;