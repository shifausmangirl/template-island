"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Cake, Heart, Sparkles, Mail, Info, X } from 'lucide-react';

export default function Sidebar({ isOpen, toggleSidebar }) {
  const pathname = usePathname();

  const links = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Birthday Cards', href: '/birthday', icon: Cake },
    { name: 'Wedding Invitations', href: '/wedding', icon: Heart },
    { name: 'Greeting Cards', href: '/greeting', icon: Sparkles },
    { name: 'About Us', href: '/about', icon: Info },
    { name: 'Contact', href: '/contact', icon: Mail },
  ];

  return (
    <>
      {/* Mobile Sidebar Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      <aside className={`fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 z-40 
        backdrop-blur-lg bg-white/80 dark:bg-slate-900/80 border-r border-white/20 dark:border-slate-800/50
        transform transition-transform duration-300 ease-in-out lg:translate-x-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        
        <div className="p-4 flex flex-col gap-2 h-full justify-between">
          <div className="space-y-1">
            <p className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Categories</p>
            {links.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={toggleSidebar}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group font-medium
                    ${isActive 
                      ? 'bg-gradient-to-r from-pink-500/10 to-purple-500/10 text-pink-600 dark:text-pink-400 border-l-4 border-pink-500' 
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100/50 dark:hover:bg-slate-800/50 hover:text-gray-900 dark:hover:text-white'
                    }`}
                >
                  <Icon size={20} className={isActive ? 'text-pink-500' : 'text-gray-400 group-hover:text-pink-500 transition-colors'} />
                  {link.name}
                </Link>
              );
            })}
          </div>
          <div className="p-3 bg-white/40 dark:bg-slate-800/40 border border-white/20 dark:border-slate-700/50 rounded-2xl text-center text-xs text-gray-400">
            © 2026 IslandPrints Corp.
          </div>
        </div>
      </aside>
    </>
  );
}