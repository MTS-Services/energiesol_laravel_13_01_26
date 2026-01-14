import * as React from 'react';
import AppLogo from '@/components/app-logo';
import { Head, Link } from '@inertiajs/react';

interface AuthLayoutProps {
    children: React.ReactNode;
    title: string;
    description: string;
}

export default function AuthLayout({ children, title, description }: AuthLayoutProps) {
    return (
        <>
            <Head title={title} />
            <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4 dark:bg-gray-900">
                <div className="w-full max-w-md">
                    <div className="mb-8 text-center">
                        <Link href="/">
                            <AppLogo className="mx-auto h-10 w-auto" />
                        </Link>
                        <h2 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                            {title}
                        </h2>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                            {description}
                        </p>
                    </div>
                    <div className="rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800">
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}
