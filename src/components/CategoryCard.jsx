"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CategoryCard({ title, count, href, icon: Icon, gradient }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.03, y: -4 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Link href={href} className="block relative overflow-hidden rounded-2xl p-6 bg-white/40 dark:bg-slate-800/40 backdrop-blur-md border border-white/20 dark:border-slate-700/30 shadow-lg group">
        <div className={`absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-10 bg-gradient-to-br ${gradient} group-hover:scale-110 transition-transform duration-300`} />
        <div className={`p-3 rounded-xl bg-gradient-to-br ${gradient} text-white w-fit mb-4 shadow-md`}>
          <Icon size={24} />
        </div>
        <h3 className="font-bold text-lg text-gray-800 dark:text-white mb-1">{title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">{count} Premium Templates</p>
      </Link>
    </motion.div>
  );
}