"use client";
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';
import './globals.css';

export default function RootLayout({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Force light mode only
    setDarkMode(false);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    try {
      localStorage.setItem('darkMode', JSON.stringify(false));
    } catch (error) {
      console.warn('Unable to save theme preference', error);
    }

    // Always remove dark class to ensure light mode
    document.documentElement.classList.remove('dark');
  }, [mounted]);

  return (
    <html lang="en">
      <body className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 antialiased transition-colors duration-300 min-h-screen flex flex-col">
        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
          isSidebarOpen={isSidebarOpen}
        />

        <div className="flex flex-1 pt-16">
          <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(false)} />

          <main className="flex-1 min-h-[calc(100vh-8rem)] lg:pl-64 p-4 sm:p-6 lg:p-8 transition-all duration-300">
            <div className="max-w-7xl mx-auto w-full">{children}</div>
          </main>
        </div>

        <div className="lg:pl-64 transition-all duration-300">
          <Footer />
        </div>
      </body>
    </html>
  );
}
