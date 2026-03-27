import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Clock, Award, ChevronDown, ArrowRight, Download, Calendar } from 'lucide-react';
import PageHero from '../components/PageHero';
import AnimatedSection from '../components/AnimatedSection';

const programs = [
  {
    level: 'Undergraduate (B.E.)',
    tag: 'UG',
    color: 'from-blue-600 to-cyan-500',
    duration: '4 Years',
    seats: '930 seats',
    desc: 'AICTE-approved 4-year full-time programs affiliated to VTU.',
    courses: [
      'Computer Science & Engineering',
      'Electronics & Communication Engineering',
      'Mechanical Engineering',
      'Civil Engineering',
      'Electrical & Electronics Engineering',
      'Information Science & Engineering',
      'Biotechnology',
      'Chemical Engineering',
      'Industrial Engineering & Management',
      'Aeronautical Engineering',
    ],
  },
  {
    level: 'Postgraduate (M.Tech)',
    tag: 'PG',
    color: 'from-purple-600 to-pink-500',
    duration: '2 Years',
    seats: '180 seats',
    desc: 'Specialised postgraduate programs with research components.',
    courses: [
      'Machine Learning & AI',
      'VLSI Design & Embedded Systems',
      'Structural Engineering',
      'Power Electronics',
      'Software Engineering',
      'CAD/CAM',
      'Environmental Engineering',
      'Biomedical Signal Processing',
    ],
  },
  {
    level: 'Doctoral (Ph.D.)',
    tag: 'PhD',
    color: 'from-amber-500 to-orange-500',
    duration: '3–5 Years',
    seats: 'Rolling Admissions',
    desc: 'Full-time and part-time research programs across all departments.',
    courses: [
      'Engineering & Technology',
      'Applied Sciences',
      'Management Studies',
      'Interdisciplinary Research',
    ],
  },
];

const facilities = [
  { icon: '📚', name: 'Central Library', desc: '1.5 lakh books, 200+ journals, 24×7 e-library access' },
  { icon: '💻', name: 'Computing Centre', desc: '2000+ workstations, high-speed internet, licensed software' },
  { icon: '🔬', name: 'Research Labs', desc: '80+ advanced labs across all departments' },
  { icon: '🏋️', name: 'Sports Complex', desc: 'Indoor & outdoor facilities, swimming pool, gym' },
  { icon: '🏠', name: 'Hostel', desc: 'On-campus accommodation for 2,000+ students' },
  { icon: '🍽️', name: 'Cafeteria', desc: 'Multiple outlets serving diverse cuisines' },
];

const calendar = [
  { event: 'Semester I Begins', date: 'Aug 1, 2024', type: 'academic' },
  { event: 'Internal Assessment I', date: 'Sep 15–20, 2024', type: 'exam' },
  { event: 'Mid-Semester Break', date: 'Oct 5–10, 2024', type: 'break' },
  { event: 'Internal Assessment II', date: 'Nov 1–6, 2024', type: 'exam' },
  { event: 'Semester I End Exams', date: 'Dec 2–20, 2024', type: 'exam' },
  { event: 'Winter Break', date: 'Dec 21 – Jan 5, 2025', type: 'break' },
  { event: 'Semester II Begins', date: 'Jan 6, 2025', type: 'academic' },
  { event: 'Techfest 2025', date: 'Feb 14–16, 2025', type: 'event' },
  { event: 'Internal Assessment III', date: 'Mar 10–15, 2025', type: 'exam' },
  { event: 'Semester II End Exams', date: 'May 5–25, 2025', type: 'exam' },
];

const typeColors = {
  academic: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  exam: 'bg-red-500/20 text-red-400 border-red-500/30',
  break: 'bg-green-500/20 text-green-400 border-green-500/30',
  event: 'bg-[#D32F2F]/20 text-[#D32F2F] border-[#D32F2F]/30',
};

export default function Academics() {
  const [openProgram, setOpenProgram] = useState(0);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <PageHero
        title="Academics"
        subtitle="Rigorous programs designed to shape engineers who can solve the world's toughest problems."
        breadcrumb="Academics"
        accent="Programs & Curriculum"
      />

      {/* Programs */}
      <section className="py-24 bg-[#001A33]" id="ug">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="text-[#D32F2F] font-mono text-sm tracking-widest uppercase block mb-4">Programs</span>
            <h2 className="font-serif text-5xl font-light text-white">Academic Programs</h2>
          </AnimatedSection>

          <div className="space-y-4">
            {programs.map((prog, i) => (
              <AnimatedSection key={prog.tag} delay={i * 0.1}>
                <div className="bg-[#003366] border border-white/5 rounded-2xl overflow-hidden">
                  <button
                    className="w-full flex items-center justify-between p-6 text-left group"
                    onClick={() => setOpenProgram(openProgram === i ? null : i)}
                  >
                    <div className="flex items-center gap-5">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${prog.color} flex items-center justify-center text-white font-bold font-mono text-sm`}>
                        {prog.tag}
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg">{prog.level}</h3>
                        <div className="flex gap-4 text-sm text-gray-500 mt-1">
                          <span className="flex items-center gap-1"><Clock size={12} /> {prog.duration}</span>
                          <span className="flex items-center gap-1"><Award size={12} /> {prog.seats}</span>
                        </div>
                      </div>
                    </div>
                    <motion.div animate={{ rotate: openProgram === i ? 180 : 0 }} transition={{ duration: 0.3 }}>
                      <ChevronDown size={20} className="text-gray-500" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {openProgram === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 border-t border-white/5">
                          <p className="text-gray-400 mt-4 mb-6">{prog.desc}</p>
                          <div className="grid sm:grid-cols-2 gap-2">
                            {prog.courses.map(c => (
                              <div key={c} className="flex items-center gap-2 text-gray-300 text-sm bg-white/3 rounded-xl px-4 py-2.5 border border-white/5">
                                <BookOpen size={13} className="text-[#D32F2F] shrink-0" />
                                {c}
                              </div>
                            ))}
                          </div>
                          <div className="mt-6 flex gap-3">
                            <button className="btn-primary text-sm px-5 py-2">
                              View Curriculum <ArrowRight size={14} />
                            </button>
                            <button className="flex items-center gap-2 text-gray-400 border border-white/10 px-5 py-2 rounded-full text-sm hover:border-white/30 transition-colors">
                              <Download size={14} /> Download Brochure
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-24 bg-[#001122]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="text-[#D32F2F] font-mono text-sm tracking-widest uppercase block mb-4">Infrastructure</span>
            <h2 className="font-serif text-5xl font-light text-white">World-Class Facilities</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((f, i) => (
              <AnimatedSection key={f.name} delay={i * 0.08}>
                <motion.div
                  className="bg-[#003366] border border-white/5 rounded-2xl p-6 hover:border-[#D32F2F]/20 transition-all duration-300 group"
                  whileHover={{ y: -5 }}
                >
                  <div className="text-4xl mb-4">{f.icon}</div>
                  <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-[#D32F2F] transition-colors">{f.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Calendar */}
      <section className="py-24 bg-[#001A33]" id="calendar">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="text-[#D32F2F] font-mono text-sm tracking-widest uppercase block mb-4">Schedule</span>
            <h2 className="font-serif text-5xl font-light text-white">Academic Calendar 2024–25</h2>
          </AnimatedSection>
          <div className="space-y-3">
            {calendar.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="flex items-center gap-4 bg-[#003366] border border-white/5 rounded-xl px-5 py-4">
                  <Calendar size={16} className="text-[#D32F2F] shrink-0" />
                  <div className="flex-1">
                    <div className="text-white font-medium text-sm">{item.event}</div>
                  </div>
                  <div className="text-gray-400 text-sm font-mono">{item.date}</div>
                  <span className={`text-xs px-3 py-1 rounded-full border ${typeColors[item.type]} font-mono`}>
                    {item.type}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="mt-8 flex justify-center">
            <button className="flex items-center gap-2 btn-primary">
              <Download size={16} /> Download Full Calendar
            </button>
          </AnimatedSection>
        </div>
      </section>
    </motion.div>
  );
}
