import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function PageHero({ title, subtitle, breadcrumb, accent }) {
  return (
    <section className="relative min-h-[52vh] flex items-end pb-16 pt-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#001122] via-[#003366] to-[#004080]" />

      {/* Decorative grid */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(201,168,76,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,168,76,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                      w-[600px] h-[400px] bg-[#1e3a8a]/10 rounded-full blur-3xl" />

      {/* Accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1e3a8a]/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        {/* Breadcrumb */}
        {breadcrumb && (
          <motion.div
            className="flex items-center gap-2 text-sm text-slate-600 mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link to="/" className="hover:text-blue-800 transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-blue-800">{breadcrumb}</span>
          </motion.div>
        )}

        {accent && (
          <motion.span
            className="inline-block text-blue-800 font-mono text-sm tracking-widest uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {accent}
          </motion.span>
        )}

        <motion.h1
          className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-slate-900 leading-tight mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            className="text-lg text-slate-600 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
