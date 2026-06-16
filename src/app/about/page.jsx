import React from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Video Background Section */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-12 bg-slate-900 h-96">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            src="https://cdn.dribbble.com/uploads/48226/original/b8bd4e4273cceae2889d9d259b04f732.mp4?1689028949"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
        </div>

        {/* Content Section */}
        <div className="bg-white/40 dark:bg-slate-800/40 backdrop-blur-md border border-white/20 dark:border-slate-700/30 p-8 rounded-3xl shadow-xl">
          <h1 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent">Our Vision</h1>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 text-lg">
            Inspired by world-class dynamic stationery systems, IslandPrints brings state-of-the-art layout customizers right into the web browser interface layer. We merge bleeding-edge client-side technology stacks seamlessly to deliver beautiful graphics generation performance.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 text-base">
            Users can easily browse, personalize, and download greeting cards, invitations, and digital designs. Our goal is to make creative design accessible to everyone without requiring professional skills. We offer templates for birthdays, weddings, anniversaries, holidays, and special events. The website features a clean and responsive design that works smoothly on mobile, tablet, and desktop devices.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 bg-gradient-to-br from-pink-500/20 to-pink-500/5 dark:from-pink-600/20 dark:to-pink-600/5 rounded-2xl border border-pink-200/50 dark:border-pink-800/50">
              <h3 className="text-2xl font-bold text-pink-600 dark:text-pink-400 mb-2">100%</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Customizable</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-purple-500/20 to-purple-500/5 dark:from-purple-600/20 dark:to-purple-600/5 rounded-2xl border border-purple-200/50 dark:border-purple-800/50">
              <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">HQ</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Print Ready</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-indigo-500/20 to-indigo-500/5 dark:from-indigo-600/20 dark:to-indigo-600/5 rounded-2xl border border-indigo-200/50 dark:border-indigo-800/50">
              <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">Zero</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Fees Required</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}