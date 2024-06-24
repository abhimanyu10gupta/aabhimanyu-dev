import Footer from '@/components/Footer';
import HomePage from '@/components/HomePage';
import Navlinks from '@/components/Navlinks';
import React from 'react'

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <main className="flex h-full bg-zinc-50 dark:bg-black">
            <main className="flex w-full">
                <div className="fixed inset-0 flex justify-center sm:px-8">
                    <div className="flex w-full max-w-7xl lg:px-8">
                    <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20">
                        
                    </div>
                    </div>

                </div>
                <div className="relative flex w-full flex-col">
                    <Navlinks />
                    <div className="flex-none">
                    </div>
                    
                    {children}

                    <Footer />
                </div>

            </main>              
        </main>
    );
  }

