import React from 'react';
import { Search } from 'lucide-react';

export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="max-w-md mx-auto w-full px-4 mb-12">
      <div className="relative rounded-2xl shadow-xl bg-pink-100 dark:bg-slate-800/50 backdrop-blur-md border border-white/30 dark:border-slate-700/50 p-1 flex items-center transition-all duration-300 focus-within:ring-2 focus-within:ring-pink-500/50">
        <Search className="text-black dark:text-white ml-3" size={20} />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search birthday, wedding, holiday templates..."
          className="w-full bg-transparent pl-3 pr-4 py-2.5 text-black dark:text-white placeholder:text-white-600 outline-none text-sm"
        />
      </div>
    </div>
  );
}