import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

export default function DarkModeToggle({ darkMode, setDarkMode }) {
  return (
    <motion.button
      className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-white shadow-sm border-blue-50  
                 flex items-center justify-center shadow-2xl border border-[#1e3a8a]/30 
                 hover:scale-110 transition-transform duration-200"
      onClick={() => setDarkMode(!darkMode)}
      whileTap={{ scale: 0.9 }}
      title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      <AnimatedIcon darkMode={darkMode} />
    </motion.button>
  );
}

function AnimatedIcon({ darkMode }) {
  return (
    <motion.div
      key={darkMode ? 'moon' : 'sun'}
      initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
      animate={{ rotate: 0, opacity: 1, scale: 1 }}
      exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.3 }}
    >
      {darkMode
        ? <Sun size={20} className="text-white" />
        : <Moon size={20} className="text-slate-900" />
      }
    </motion.div>
  );
}
