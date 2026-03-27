import React from 'react';
import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white shadow-sm border-blue-50"
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      {/* Logo container */}
      <div className="relative mb-10 w-40 h-40 flex items-center justify-center">
        {/* Animated outer rings */}
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-blue-200"
            style={{
              width: `${120 + i * 40}px`,
              height: `${120 + i * 40}px`,
            }}
            animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
          />
        ))}

        {/* Logo Image */}
        <motion.div
          className="relative z-10 w-full h-full rounded-full bg-white flex items-center justify-center p-2 shadow-[0_0_40px_rgba(30,58,138,0.1)]"
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <img src="/bms-logo.png" alt="BMSCE Logo" className="w-[85%] h-[85%] object-contain" />
        </motion.div>
      </div>

      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h1 className="font-serif text-3xl md:text-4xl text-[#003366] mb-3 font-semibold tracking-wide">
          Welcome to BMSCE
        </h1>
        <p className="text-slate-500 text-sm tracking-widest uppercase font-mono">
          BMS College of Engineering
        </p>
      </motion.div>

      <motion.div
        className="mt-12 w-48 h-1 bg-blue-50 rounded-full overflow-hidden"
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
        className="mt-4 text-slate-400 text-xs tracking-widest uppercase font-medium"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        LOADING
      </motion.p>
    </motion.div>
  );
}
