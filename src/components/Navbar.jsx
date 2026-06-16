"use client";
import React from 'react';
import Link from 'next/link';
import { Sun, Moon, Menu, X, Palette } from 'lucide-react';

export default function Navbar({ darkMode, setDarkMode, toggleSidebar, isSidebarOpen }) {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-slate-900/70 border-b border-white/20 dark:border-slate-800/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Left: Logo & Menu Toggle */}
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleSidebar}
              className="p-2 rounded-lg lg:hidden hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-700 dark:text-gray-300"
            >
              {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <Link href="/" className="flex items-center gap-2 font-bold text-xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              <Palette className="text-pink-500" size={24} />
              IslandPrints
            </Link>
          </div>

          {/* Center: Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 font-medium text-gray-600 dark:text-gray-300">
            <Link href="/" className="hover:text-pink-500 transition-colors">Home</Link>
            <Link href="/birthday" className="hover:text-pink-500 transition-colors">Birthdays</Link>
            <Link href="/wedding" className="hover:text-pink-500 transition-colors">Weddings</Link>
            <Link href="/greeting" className="hover:text-pink-500 transition-colors">Greetings</Link>
            <Link href="/about" className="hover:text-pink-500 transition-colors">About</Link>
            <Link href="/contact" className="hover:text-pink-500 transition-colors">Contact</Link>
          </div>

          {/* Right: Theme Toggle - DISABLED */}
          <button
            type="button"
            disabled
            aria-label="Theme toggle disabled"
            className="p-2 rounded-xl bg-gray-100 text-gray-800 border border-gray-200 transition-all duration-300 shadow-sm cursor-not-allowed opacity-50 hidden"
          >
            <Moon size={20} />
          </button>

        </div>
      </div>
    </nav>
  );
}