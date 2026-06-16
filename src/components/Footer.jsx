"use client";
import React from 'react';
import Link from 'next/link';
import { 
  Mail, 
  Globe,
  Video,
  X,
  Phone,
  MessageCircle
} from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { name: 'Instagram', href: 'https://instagram.com', icon: Globe, color: 'hover:text-pink-500' },
    { name: 'Facebook', href: 'https://facebook.com', icon: Globe, color: 'hover:text-blue-600' },
    { name: 'YouTube', href: 'https://youtube.com', icon: Video, color: 'hover:text-red-600' },
    { name: 'TikTok', href: 'https://tiktok.com', icon: MessageCircle, color: 'hover:text-cyan-400' },
    { name: 'X', href: 'https://x.com', icon: X, color: 'hover:text-black dark:hover:text-white' }
  ];

  return (
    <footer className="backdrop-blur-md bg-white/60 dark:bg-slate-900/60 border-t border-white/20 dark:border-slate-800/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        
        {/* Core Quick Links Grid Area */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left border-b border-gray-200/50 dark:border-slate-800/50 pb-8 mb-8">
          
          {/* Section 1: Customer Inquiries Contact Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400">Direct Support</h4>
            <div className="flex flex-col items-center md:items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
              <a href="mailto:support@islandprints.com" className="flex items-center gap-2 hover:text-pink-500 transition-colors group">
                <Mail size={16} className="text-gray-400 group-hover:text-pink-500 transition-colors" />
                <span>support@islandprints.com</span>
              </a>
              <a href="tel:+18005550199" className="flex items-center gap-2 hover:text-pink-500 transition-colors group">
                <Phone size={16} className="text-gray-400 group-hover:text-pink-500 transition-colors" />
                <span>+1 (800) 555-0199</span>
              </a>
            </div>
          </div>

          {/* Section 2: Social Media Platform Badges Grid */}
          <div className="flex flex-col items-center space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400">Follow Our Creations</h4>
            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gray-100/50 dark:bg-slate-800/50 border border-gray-200/30 dark:border-slate-700/30 text-xs font-medium text-gray-600 dark:text-gray-400 transition-all transform hover:-translate-y-0.5 shadow-xs ${social.color}`}
                  >
                    <IconComponent className="w-3.5 h-3.5" />
                    <span>{social.name}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Section 3: Document Policy Mapping */}
          <div className="flex flex-col items-center md:items-end space-y-2 text-sm text-gray-500 dark:text-gray-400">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Company Documents</h4>
            <Link href="/about" className="hover:text-pink-500 transition-colors">About Corporate Hub</Link>
            <Link href="/contact" className="hover:text-pink-500 transition-colors">Privacy Protections</Link>
          </div>

        </div>

        {/* Global Copyright Layer */}
        <div className="text-center text-xs text-gray-400 dark:text-gray-500">
          &copy; 2026 <span className="font-semibold text-gray-700 dark:text-gray-300">IslandPrints</span> Inc. All rights reserved. Architectural layouts inspired by Greetings Island layout systems.
        </div>

      </div>
    </footer>
  );
}