"use client";
import React, { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [statusMsg, setStatusMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMsg('Sending data to backend server...');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        setStatusMsg(result.message);
        setFormData({ name: '', email: '', message: '' }); // clear layout form inputs
      } else {
        setStatusMsg(`Backend Rejected: ${result.message}`);
      }
    } catch (err) {
      setStatusMsg("Failed to connect to backend architecture infrastructure.");
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center py-12 px-4"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1596524430615-b46475ddff6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29udGFjdCUyMHVzfGVufDB8fDB8fHww')",
      }}
    >
      <div className="max-w-xl mx-auto py-12">
        <div className="bg-white/40 dark:bg-slate-800/40 backdrop-blur-md border border-white/20 dark:border-slate-700/30 p-8 rounded-3xl shadow-xl">
          <h1 className="text-3xl font-extrabold text-gray-800 dark:text-white mb-2">Get in Touch</h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">Your inputs pass straight to our Next.js API processing router stack layer.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-gray-600 dark:text-gray-400">Full Name</label>
              <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700 p-3 rounded-xl text-sm outline-none text-gray-800 dark:text-white" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-gray-600 dark:text-gray-400">Email Address</label>
              <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700 p-3 rounded-xl text-sm outline-none text-gray-800 dark:text-white" placeholder="jane@example.com" />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-gray-600 dark:text-white-400">Message</label>
              <textarea required rows={4} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="w-full bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700 p-3 rounded-xl text-sm outline-none text-gray-800 dark:text-white resize-none" placeholder="Write your comments here..."></textarea>
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold py-3 rounded-xl shadow-lg transition-all transform active:scale-95">
              Submit Message
            </button>
          </form>
          {statusMsg && <p className="mt-4 text-xs font-semibold text-center text-pink-500 bg-pink-500/10 p-2 rounded-xl border border-pink-500/20">{statusMsg}</p>}
        </div>
      </div>
    </div>
  );
}