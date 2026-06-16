"use client";
import React, { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Download, Share2 } from 'lucide-react';

export default function CustomizePage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [templateData, setTemplateData] = useState({
    title: searchParams.get('title') || 'Template',
    category: searchParams.get('category') || 'General',
    image: searchParams.get('image') || '',
    customText: '',
    textColor: '#ffffff',
    fontSize: 24,
    fontFamily: 'Arial',
  });

  const handleDownload = () => {
    alert('Download functionality coming soon! Your customized template would be generated as a high-quality image.');
  };

  const handleShare = () => {
    const shareUrl = `${window.location.origin}/customize?title=${encodeURIComponent(templateData.title)}&category=${encodeURIComponent(templateData.category)}&image=${encodeURIComponent(templateData.image)}`;
    navigator.clipboard.writeText(shareUrl);
    alert('Share link copied to clipboard!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/" className="flex items-center gap-2 text-white hover:text-pink-400 transition">
            <ArrowLeft size={20} />
            Back to Templates
          </Link>
          <h1 className="text-3xl font-bold text-white">Customize Your Template</h1>
          <div className="w-20"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Preview Section */}
          <div className="lg:col-span-2">
            <div className="bg-white/10 dark:bg-slate-800/40 backdrop-blur-md border border-white/20 dark:border-slate-700/30 rounded-3xl p-8 shadow-2xl">
              <div className="aspect-[3/4] bg-slate-100 dark:bg-slate-900 rounded-2xl overflow-hidden relative">
                <img 
                  src={templateData.image} 
                  alt={templateData.title}
                  className="w-full h-full object-cover"
                />
                {templateData.customText && (
                  <div 
                    className="absolute inset-0 flex items-center justify-center bg-black/40"
                    style={{
                      fontFamily: templateData.fontFamily,
                      fontSize: `${templateData.fontSize}px`,
                      color: templateData.textColor,
                      textAlign: 'center',
                      padding: '20px',
                    }}
                  >
                    <p className="font-bold drop-shadow-lg">{templateData.customText}</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Customization Panel */}
          <div className="space-y-6">
            {/* Template Info */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              <h2 className="text-xl font-bold text-white mb-4">{templateData.title}</h2>
              <p className="text-pink-400 text-sm uppercase font-semibold tracking-wider">{templateData.category}</p>
            </div>

            {/* Customization Controls */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-200 mb-2">Custom Text</label>
                <textarea
                  value={templateData.customText}
                  onChange={(e) => setTemplateData({...templateData, customText: e.target.value})}
                  placeholder="Add your custom text here..."
                  className="w-full bg-slate-900/50 border border-slate-600 text-white rounded-lg p-3 text-sm resize-none focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500"
                  rows="3"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-200 mb-2">Text Color</label>
                <div className="flex gap-2">
                  <input
                    type="color"
                    value={templateData.textColor}
                    onChange={(e) => setTemplateData({...templateData, textColor: e.target.value})}
                    className="w-14 h-10 rounded-lg cursor-pointer border border-slate-600"
                  />
                  <input
                    type="text"
                    value={templateData.textColor}
                    onChange={(e) => setTemplateData({...templateData, textColor: e.target.value})}
                    className="flex-1 bg-slate-900/50 border border-slate-600 text-white rounded-lg p-2 text-sm focus:outline-none focus:border-pink-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-200 mb-2">Font Size: {templateData.fontSize}px</label>
                <input
                  type="range"
                  min="12"
                  max="72"
                  value={templateData.fontSize}
                  onChange={(e) => setTemplateData({...templateData, fontSize: parseInt(e.target.value)})}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-pink-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-200 mb-2">Font Family</label>
                <select
                  value={templateData.fontFamily}
                  onChange={(e) => setTemplateData({...templateData, fontFamily: e.target.value})}
                  className="w-full bg-slate-900/50 border border-slate-600 text-white rounded-lg p-2 text-sm focus:outline-none focus:border-pink-500"
                >
                  <option>Arial</option>
                  <option>Georgia</option>
                  <option>Times New Roman</option>
                  <option>Courier New</option>
                  <option>Verdana</option>
                  <option>Comic Sans MS</option>
                </select>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={handleDownload}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold py-3 rounded-xl transition-all transform active:scale-95 shadow-lg"
              >
                <Download size={18} />
                Download Template
              </button>
              <button
                onClick={handleShare}
                className="w-full flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white font-bold py-3 rounded-xl transition-all border border-white/20 active:scale-95"
              >
                <Share2 size={18} />
                Share Design
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
