import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Heart, BookOpen, Award, ArrowRight, Phone, HelpCircle, Smile } from 'lucide-react';
import PageHero from '../components/PageHero';
import AnimatedSection from '../components/AnimatedSection';

const services = [
  { icon: BookOpen, title: 'Academic Support', items: ['Mentorship Program', 'Remedial Classes', 'Online Learning Portal', 'Study Groups', 'Exam Preparation Workshops'] },
  { icon: Heart, title: 'Counselling & Wellness', items: ['Personal Counselling', 'Career Guidance', 'Mental Health Support', 'Stress Management', 'Peer Support Groups'] },
  { icon: Shield, title: 'Student Governance', items: ['Student Council', 'Class Representatives', 'Grievance Committee', 'Anti-Ragging Cell', 'Discipline Committee'] },
  { icon: Award, title: 'Scholarships', items: ['Merit Scholarships', 'Need-based Aid', 'Sports Scholarships', 'Cultural Scholarships', 'Government Schemes'] },
];

const resources = [
  { title: 'Academic Regulations', desc: 'Rules, attendance requirements, grading, and examination policies', icon: '📋' },
  { title: 'Student Portal', desc: 'Marks, attendance, timetable, fee payments — all in one place', icon: '🖥️' },
  { title: 'Library Access', desc: 'Physical and digital library resources, e-journals, NPTEL access', icon: '📚' },
  { title: 'Placement Portal', desc: 'Job listings, resume builder, mock interview scheduling', icon: '💼' },
  { title: 'Sports Registration', desc: 'Inter-college sports registrations, equipment booking', icon: '🏆' },
  { title: 'Event Registration', desc: 'Register for workshops, fests, seminars, and competitions', icon: '🎫' },
];

const antiRagging = [
  'BMSCE has a zero-tolerance policy for ragging in any form.',
  '24×7 helpline: 1800-180-5522 (UGC Anti-Ragging Helpline)',
  'Internal Anti-Ragging Committee meets monthly.',
  'Students can report anonymously via the online portal.',
  'Strict disciplinary action including expulsion for violations.',
];

const achievements = [
  { name: 'Rahul K.', event: 'Smart India Hackathon', award: '1st Place', year: '2024' },
  { name: 'Divya M.', event: 'ACM ICPC Regionals', award: 'Top 10', year: '2024' },
  { name: 'BMSCE Team', event: 'BAJA SAE India', award: '3rd Overall', year: '2024' },
  { name: 'Arjun P.', event: 'IIT Bombay Techfest', award: 'Best Robotics', year: '2023' },
  { name: 'Shreya N.', event: 'E-Cell IIM Summit', award: 'Best Startup', year: '2023' },
  { name: 'BMSCE Quizzers', event: 'National Quiz Championship', award: 'Runners-Up', year: '2023' },
];

export default function Students() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <PageHero
        title="Student Hub"
        subtitle="Everything you need for a successful, fulfilling experience at BMSCE."
        breadcrumb="Students"
        accent="For Students"
      />

      {/* Quick Links */}
      <section className="py-16 bg-white shadow-sm border-blue-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Student Portal', emoji: '🖥️', href: '#' },
              { label: 'Library', emoji: '📚', href: '#' },
              { label: 'Placement Portal', emoji: '💼', href: '#' },
              { label: 'Grievance Cell', emoji: '🛡️', href: '#' },
            ].map((item, i) => (
              <AnimatedSection key={item.label} delay={i * 0.1}>
                <motion.a
                  href={item.href}
                  className="flex items-center gap-3 bg-white shadow-sm border-blue-50 border border-blue-100 rounded-xl px-5 py-4
                             hover:border-[#1e3a8a]/30 transition-all duration-300 group"
                  whileHover={{ scale: 1.03 }}
                >
                  <span className="text-2xl">{item.emoji}</span>
                  <span className="text-slate-900 font-medium text-sm group-hover:text-blue-800 transition-colors">{item.label}</span>
                  <ArrowRight size={14} className="ml-auto text-gray-600 group-hover:text-blue-800 transition-colors" />
                </motion.a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-white shadow-sm border-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="text-blue-800 font-mono text-sm tracking-widest uppercase block mb-4">Support</span>
            <h2 className="font-serif text-5xl font-light text-slate-900">Student Services</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc, i) => (
              <AnimatedSection key={svc.title} delay={i * 0.1}>
                <motion.div
                  className="bg-white shadow-sm border-blue-50 border border-blue-100 rounded-2xl p-6 h-full group hover:border-[#1e3a8a]/30 transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="w-10 h-10 rounded-xl bg-[#1e3a8a]/10 flex items-center justify-center mb-4 group-hover:bg-[#1e3a8a]/20 transition-colors">
                    <svc.icon size={18} className="text-blue-800" />
                  </div>
                  <h3 className="text-slate-900 font-semibold mb-4 group-hover:text-blue-800 transition-colors">{svc.title}</h3>
                  <ul className="space-y-2">
                    {svc.items.map(item => (
                      <li key={item} className="flex items-center gap-2 text-slate-500 text-sm">
                        <span className="w-1 h-1 rounded-full bg-[#1e3a8a] shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-24 bg-white shadow-sm border-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="text-blue-800 font-mono text-sm tracking-widest uppercase block mb-4">Resources</span>
            <h2 className="font-serif text-5xl font-light text-slate-900">Student Resources</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {resources.map((r, i) => (
              <AnimatedSection key={r.title} delay={i * 0.08}>
                <motion.div
                  className="bg-white shadow-sm border-blue-50 border border-blue-100 rounded-2xl p-6 flex items-start gap-4 group hover:border-[#1e3a8a]/30 transition-all duration-300 cursor-pointer"
                  whileHover={{ x: 5 }}
                >
                  <span className="text-3xl shrink-0">{r.icon}</span>
                  <div>
                    <h3 className="text-slate-900 font-semibold mb-1 group-hover:text-blue-800 transition-colors">{r.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{r.desc}</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Student Achievements */}
      <section className="py-24 bg-white shadow-sm border-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="text-blue-800 font-mono text-sm tracking-widest uppercase block mb-4">Pride</span>
            <h2 className="font-serif text-5xl font-light text-slate-900">Student Achievements</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {achievements.map((a, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <motion.div className="bg-white shadow-sm border-blue-50 border border-blue-100 rounded-2xl p-6 hover:border-[#1e3a8a]/20 transition-all duration-300" whileHover={{ y: -4 }}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-2xl">🏆</div>
                    <span className="text-blue-800 text-sm font-mono">{a.year}</span>
                  </div>
                  <h3 className="text-slate-900 font-semibold mb-1">{a.name}</h3>
                  <div className="text-slate-600 text-sm">{a.event}</div>
                  <div className="mt-3 inline-flex items-center gap-2 bg-[#1e3a8a]/10 text-blue-800 text-xs px-3 py-1 rounded-full border border-[#1e3a8a]/20">
                    <Award size={11} /> {a.award}
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Anti-Ragging */}
      <section className="py-24 bg-white shadow-sm border-blue-50">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <div className="bg-white shadow-sm border-blue-50 border border-red-500/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Shield size={22} className="text-red-400" />
                <h2 className="font-serif text-3xl text-slate-900 font-light">Anti-Ragging Policy</h2>
              </div>
              <ul className="space-y-3">
                {antiRagging.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700 text-sm">
                    <span className="text-red-400 mt-0.5 shrink-0">→</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex gap-4">
                <a href="tel:18001805522" className="flex items-center gap-2 bg-red-500/10 text-red-400 border border-red-500/30 px-5 py-2.5 rounded-full text-sm hover:bg-red-500/20 transition-colors">
                  <Phone size={14} /> Report Now
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </motion.div>
  );
}
