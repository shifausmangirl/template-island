"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="relative overflow-hidden py-16 sm:py-24 text-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto px-4"
      >
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-sky-500 dark:text-sky-300 mb-6">
          Free Printable Templates &{" "}
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            Digital Cards
          </span>
        </h1>
        <p className="text-lg text-pink-800 dark:text-pink-400 max-w-xl mx-auto mb-8">
          Create custom greeting cards and invitations in minutes. Choose from thousands of elegant, professional designs.
        </p>
      </motion.div>
    </div>
  );
}