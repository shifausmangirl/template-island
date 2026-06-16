"use client";
import React, { useState } from 'react';
import Hero from '@/components/Hero';
import SearchBar from '@/components/SearchBar';
import CategoryCard from '@/components/CategoryCard';
import TemplateCard from '@/components/TemplateCard';
import { Cake, Heart, Sparkles } from 'lucide-react';

const mockCategories = [
  { title: "Birthday Cards", count: 120, href: "/birthday", icon: Cake, gradient: "from-pink-500 to-rose-500" },
  { title: "Wedding Invitations", count: 85, href: "/wedding", icon: Heart, gradient: "from-purple-500 to-indigo-500" },
  { title: "Greeting Cards", count: 142, href: "/greeting", icon: Sparkles, gradient: "from-amber-500 to-orange-500" }
];

const mockFeatured = [
  { id: 1, title: "Watercolor Birthday Present", category: "Birthday", image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=500&q=80" },
  { id: 2, title: "Elegant Floral Wedding Invitation", category: "Wedding", image: "https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?w=500&q=80" },
  { id: 3, title: "Modern Golden Party Celebration", category: "Birthday", image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=500&q=80" },
  { id: 4, title: "Minimalist Pastel Thank You Card", category: "Greeting", image: "https://images.unsplash.com/photo-1549417229-aa67d3263c09?w=500&q=80" }
];

export default function HomePage() {
  const [search, setSearch] = useState("");

  const filteredTemplates = mockFeatured.filter(item => 
    item.title.toLowerCase().includes(search.toLowerCase()) || 
    item.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="home-page">
      {/* Hero Section with Card Templates Background Grid Overlay */}
      <div className="relative rounded-3xl overflow-hidden mb-12 bg-cover bg-center min-h-[28rem] py-20 px-4 text-center border border-white/20 shadow-2xl" 
        style={{ backgroundImage: `linear-gradient(to bottom, transparent, transparent), url('https://images.unsplash.com/photo-1686177991278-b7a3c37739d4?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}>
        
        {/* Dark mode adjustment script layer fallback styling */}
        <div className="absolute inset-0 bg-slate-950/10 dark:bg-slate-950/80 -z-10 transition-colors" />
        
        <Hero />
        <SearchBar searchTerm={search} setSearchTerm={setSearch} />
      </div>

      {/* Categories Grid */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Browse Collections</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockCategories.map((cat, idx) => (
            <CategoryCard key={idx} {...cat} />
          ))}
        </div>
      </section>

      {/* Featured Templates Grid */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
          {search ? "Search Results" : "Featured Dynamic Templates"}
        </h2>
        {filteredTemplates.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredTemplates.map((template) => (
              <TemplateCard key={template.id} {...template} />
            ))}
          </div>
        ) : (
          <div className="text-center p-12 bg-white/20 dark:bg-slate-800/20 backdrop-blur-md rounded-2xl border border-dashed border-gray-300 dark:border-slate-700">
            <p className="text-gray-500 dark:text-gray-400">No layout variations found matching your criteria.</p>
          </div>
        )}
      </section>
    </div>
  );
}