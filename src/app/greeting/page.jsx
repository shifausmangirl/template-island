"use client";
import React, { useState, useEffect } from 'react';
import TemplateCard from '@/components/TemplateCard';

// Sample dataset configured for specific page renders 
const templateCollection = [
  { id: 1, title: "Modern Abstract Premium", category: "Exclusive Collection", image: "https://images.unsplash.com/photo-1513311160371-60f78c9ce9cb?w=400&h=600&fit=crop" },
  { id: 2, title: "Botanical Wildflower Frame", category: "Classic Collection", image: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=400&h=600&fit=crop" },
  { id: 3, title: "Neon Splash Geometric", category: "Modern Retro", image: "https://images.unsplash.com/photo-1507927591228-a9a0caa9d167?w=400&h=600&fit=crop" },
  { id: 4, title: "Minimal Pastel Canvas", category: "Minimalist", image: "https://images.unsplash.com/photo-1471879832106-c7ab9019e8de?w=400&h=600&fit=crop" },
];

export default function TemplateCatalogPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-black text-gray-900 dark:text-white">Design Layout Explorer</h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Select an architectural mockup to begin live configuration customization edits.</p>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((n) => (
            <div key={n} className="animate-pulse flex flex-col space-y-4">
              <div className="rounded-2xl bg-gray-300 dark:bg-slate-800 aspect-[3/4] w-full"></div>
              <div className="h-4 bg-gray-300 dark:bg-slate-800 rounded w-2/3"></div>
              <div className="h-4 bg-gray-300 dark:bg-slate-800 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {templateCollection.map((template) => (
            <TemplateCard key={template.id} id={template.id} image={template.image} title={template.title} category={template.category} />
          ))}
        </div>
      )}
    </div>
  );
}