
"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';

export default function TemplateCard({ id, image, title, category }) {
  const router = useRouter();

  const handleCustomize = () => {
    const params = new URLSearchParams({
      title: title,
      category: category,
      image: image,
    });
    router.push(`/customize?${params.toString()}`);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group flex flex-col justify-between overflow-hidden rounded-2xl bg-white/40 dark:bg-slate-800/40 backdrop-blur-md border border-white/20 dark:border-slate-700/30 shadow-lg"
    >
      {/* Image Container displaying clean layout dimensions */}
      <div className="relative aspect-[3/4] bg-slate-100 dark:bg-slate-900 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        
        {/* Overlay Hover Effect */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
          <button 
            onClick={handleCustomize}
            className="flex items-center gap-2 bg-white text-gray-900 px-4 py-2 rounded-xl font-semibold shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-pink-500 hover:text-white cursor-pointer"
          >
            <Eye size={18} />
            Customize Layout
          </button>
        </div>
      </div>

      {/* Info Card Content Footer */}
      <div className="p-4 bg-white/60 dark:bg-slate-800/60 border-t border-gray-100 dark:border-slate-700/50">
        <span className="text-xs font-semibold uppercase tracking-wider text-pink-500">{category}</span>
        <h4 className="font-bold text-gray-800 dark:text-white mt-1 text-sm truncate">{title}</h4>
      </div>
    </motion.div>
  );
}