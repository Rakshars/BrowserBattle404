import React from 'react';
import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white shadow-sm border-blue-50"
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      {/* Animated rings */}
      <div className="relative mb-12">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-[#1e3a8a]/30"
            style={{
              width: `${80 + i * 40}px`,
              height: `${80 + i * 40}px`,
              top: `${-(i * 20)}px`,
              left: `${-(i * 20)}px`,
            }}
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
          />
        ))}
        <motion.div
          className="w-20 h-20 rounded-full bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        >
          <span className="text-white font-serif font-bold text-2xl">B</span>
        </motion.div>
      </div>

      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h1 className="font-serif text-3xl text-blue-800 tracking-[0.3em] mb-2">BMSCE</h1>
        <p className="text-slate-600 text-sm tracking-widest uppercase font-mono">
          BMS College of Engineering
        </p>
      </motion.div>

      <motion.div
        className="mt-12 w-48 h-0.5 bg-white/10 rounded overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6]"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        />
      </motion.div>

      <motion.p
        className="mt-4 text-slate-500 text-xs tracking-widest"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        LOADING
      </motion.p>
    </motion.div>
  );
}
