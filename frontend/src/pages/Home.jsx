import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, Award, Users, BookOpen, TrendingUp, Building, Star, ChevronDown, Zap, Globe, Shield } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import AnimatedCounter from '../components/AnimatedCounter';
import { useInView } from 'react-intersection-observer';

const heroTaglines = [
  'Shaping Engineers of Tomorrow',
  'Excellence in Technology & Innovation',
  'Where Knowledge Meets Opportunity',
];

const departments = [
  { name: 'Computer Science', code: 'CSE', color: 'from-blue-600 to-cyan-500', icon: '💻', students: 960 },
  { name: 'Electronics & Comm.', code: 'ECE', color: 'from-purple-600 to-pink-500', icon: '📡', students: 720 },
  { name: 'Mechanical Engg.', code: 'MECH', color: 'from-orange-500 to-red-500', icon: '⚙️', students: 480 },
  { name: 'Civil Engineering', code: 'CIVIL', color: 'from-green-600 to-teal-500', icon: '🏗️', students: 360 },
  { name: 'Electrical Engg.', code: 'EEE', color: 'from-yellow-500 to-amber-600', icon: '⚡', students: 360 },
  { name: 'Information Science', code: 'ISE', color: 'from-indigo-600 to-violet-500', icon: '🔬', students: 480 },
];

const news = [
  { tag: 'Research', title: 'BMSCE Researchers Develop AI-based Early Disease Detection System', date: 'Mar 2024' },
  { tag: 'Achievement', title: 'College Ranked #42 in NIRF Engineering Rankings 2024', date: 'Feb 2024' },
  { tag: 'Placements', title: '95% Placement Rate Achieved — Highest in College History', date: 'Jan 2024' },
  { tag: 'Events', title: 'TechFest 2024 — Annual Technical Festival Draws 12,000+ Participants', date: 'Dec 2023' },
];

const features = [
  { icon: Award, title: 'NAAC A+ Grade', desc: 'Highest accreditation for academic excellence' },
  { icon: Users, title: '15,000+ Alumni', desc: 'A powerful global network across 50+ countries' },
  { icon: BookOpen, title: '14 Departments', desc: 'Comprehensive engineering & technology programs' },
  { icon: TrendingUp, title: '95% Placement', desc: 'Record placements with top global companies' },
  { icon: Globe, title: '30+ MoUs', desc: 'International collaborations with top universities' },
  { icon: Shield, title: 'NBA Accredited', desc: 'Programs meet highest quality standards' },
];

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const videoOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const [taglineIdx, setTaglineIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIdx(i => (i + 1) % heroTaglines.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* ─── HERO ─── */}
      <section ref={heroRef} className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Video / Gradient Background */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{ opacity: videoOpacity, scale: videoScale }}
        >
          {/* Background Video */}
          <video
            src="/college-bg.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Neutral Gradient Overlay for text readability */}
          <div className="absolute inset-0 bg-neutral-900/40" />

          {/* Animated particles */}
          <div className="absolute inset-0">
            {Array.from({ length: 30 }).map((_, i) => (
              <div
                key={i}
                className="particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  width: `${1 + Math.random() * 3}px`,
                  height: `${1 + Math.random() * 3}px`,
                  animationDuration: `${8 + Math.random() * 12}s`,
                  animationDelay: `${Math.random() * 8}s`,
                  opacity: 0.4 + Math.random() * 0.6,
                }}
              />
            ))}
          </div>

          {/* Decorative orbs */}
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#1e3a8a]/8 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/6 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl" />

          {/* Grid overlay */}
          <div className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `
                linear-gradient(rgba(201,168,76,0.5) 1px, transparent 1px),
                linear-gradient(90deg, rgba(201,168,76,0.5) 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px'
            }}
          />

          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-neutral-900/70 to-transparent" />
        </motion.div>

        {/* Hero Content */}
        <motion.div
          className="relative z-10 text-center px-6 max-w-5xl mx-auto"
          style={{ y: textY }}
        >
          {/* Pill badge */}
          <motion.div
            className="inline-flex items-center gap-2 bg-white/10 border border-white/30 backdrop-blur-sm
                       text-white text-xs font-mono tracking-widest px-4 py-2 rounded-full mb-8 shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Zap size={12} />
            NAAC A+ GRADE · NIRF RANKED · NBA ACCREDITED
          </motion.div>

          <motion.h1
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white leading-[1.05] mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9 }}
          >
            BMS College of{' '}
            <span className="text-blue-100 font-semibold italic drop-shadow-lg">Engineering</span>
          </motion.h1>

          {/* Animated tagline */}
          <div className="h-10 mb-10 flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={taglineIdx}
                className="text-xl md:text-2xl text-white/90 drop-shadow-md font-light tracking-wide"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {heroTaglines[taglineIdx]}
              </motion.p>
            </AnimatePresence>
          </div>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Link to="/about" className="btn-primary text-base">
              Explore BMSCE <ArrowRight size={18} />
            </Link>
            <Link to="/admissions" className="btn-outline border-white/40 text-white hover:bg-white/10 text-base">
              Apply Now <ArrowRight size={18} />
            </Link>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-[-120px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown size={20} />
          </motion.div>
        </motion.div>

        {/* Corner accents */}
        <div className="absolute top-8 left-8 w-24 h-24 border-l-2 border-t-2 border-[#1e3a8a]/30 rounded-tl-3xl" />
        <div className="absolute bottom-8 right-8 w-24 h-24 border-r-2 border-b-2 border-[#1e3a8a]/30 rounded-br-3xl" />
      </section>

      {/* ─── STATS STRIP ─── */}
      <section className="bg-white shadow-sm border-blue-50 border-y border-blue-100 py-14">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {[
              { end: 78, suffix: '+', label: 'Years of Excellence', sublabel: 'Est. 1946' },
              { end: 15000, suffix: '+', label: 'Alumni Worldwide', sublabel: '50+ Countries' },
              { end: 95, suffix: '%', label: 'Placement Rate', sublabel: 'Class of 2024' },
              { end: 14, label: 'Departments', sublabel: 'UG · PG · PhD' },
            ].map((stat, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="stat-card border-r border-blue-100 last:border-0">
                  <AnimatedCounter {...stat} />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT TEASER ─── */}
      <section className="py-28 bg-white shadow-sm border-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <AnimatedSection direction="left">
              <span className="text-blue-800 font-mono text-sm tracking-widest uppercase block mb-4">About BMSCE</span>
              <h2 className="font-serif text-5xl md:text-6xl font-light text-slate-900 leading-tight mb-6">
                A Legacy of{' '}
                <span className="gradient-text italic">Excellence</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Founded in 1946 by the visionary Sri B M Sreenivasaiah, BMS College of Engineering stands
                as one of India's premier engineering institutions. We nurture innovators, problem-solvers,
                and leaders who shape the future of technology.
              </p>
              <p className="text-slate-500 leading-relaxed mb-8">
                Accredited with NAAC A+ Grade, our programs combine rigorous academics with hands-on
                research, industry partnerships, and global exposure to prepare graduates for an increasingly
                complex world.
              </p>
              <Link to="/about" className="btn-primary">
                Our Story <ArrowRight size={18} />
              </Link>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="grid grid-cols-2 gap-4">
                {features.map(({ icon: Icon, title, desc }, i) => (
                  <motion.div
                    key={title}
                    className="bg-white shadow-sm border-blue-50 border border-blue-100 rounded-2xl p-5 hover:border-[#1e3a8a]/30 
                               hover:bg-white shadow-sm border-blue-50 transition-all duration-300 group"
                    whileHover={{ scale: 1.02, y: -4 }}
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#1e3a8a]/10 flex items-center justify-center mb-3
                                   group-hover:bg-[#1e3a8a]/20 transition-colors">
                      <Icon size={18} className="text-blue-800" />
                    </div>
                    <div className="text-slate-900 font-semibold text-sm mb-1">{title}</div>
                    <div className="text-slate-500 text-xs leading-relaxed">{desc}</div>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── DEPARTMENTS ─── */}
      <section className="py-28 bg-white shadow-sm border-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="text-blue-800 font-mono text-sm tracking-widest uppercase block mb-4">Programs</span>
            <h2 className="font-serif text-5xl font-light text-slate-900 mb-4">Our Departments</h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              14 cutting-edge departments offering undergraduate, postgraduate, and doctoral programs
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, i) => (
              <AnimatedSection key={dept.code} delay={i * 0.08}>
                <motion.div
                  className="dept-card bg-white shadow-sm border-blue-50 border border-blue-100"
                  whileHover={{ borderColor: 'rgba(201,168,76,0.3)' }}
                >
                  <Link to="/departments">
                    <div className={`h-2 w-full bg-gradient-to-r ${dept.color}`} />
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <span className="text-3xl">{dept.icon}</span>
                        <span className="text-blue-800 font-mono text-xs border border-[#1e3a8a]/30 
                                        px-2 py-1 rounded-full">{dept.code}</span>
                      </div>
                      <h3 className="text-slate-900 font-semibold text-lg mb-2">{dept.name}</h3>
                      <p className="text-slate-500 text-sm mb-4">{dept.students} students enrolled</p>
                      <div className="flex items-center gap-2 text-blue-800 text-sm group-hover:gap-3 transition-all">
                        Explore <ArrowRight size={14} />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <Link to="/departments" className="btn-outline border-[#1e3a8a]/40 text-blue-800">
              View All Departments <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── PLACEMENTS HIGHLIGHT ─── */}
      <section className="py-28 bg-white shadow-sm border-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, #1e3a8a 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <span className="text-blue-800 font-mono text-sm tracking-widest uppercase block mb-4">Placements</span>
              <h2 className="font-serif text-5xl font-light text-slate-900 leading-tight mb-6">
                Where Our <span className="gradient-text italic">Graduates</span> Go
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Our placement cell works tirelessly to connect students with India's and the world's
                top employers. With a 95% placement rate in 2024, we're proud of where our alumni have landed.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { val: '₹45 LPA', label: 'Highest Package' },
                  { val: '₹8.2 LPA', label: 'Average Package' },
                  { val: '300+', label: 'Recruiting Companies' },
                  { val: '95%', label: 'Placed in 2024' },
                ].map(item => (
                  <div key={item.label} className="bg-white shadow-sm border-blue-50 rounded-xl p-4 border border-blue-100">
                    <div className="text-2xl font-serif text-blue-800 font-semibold">{item.val}</div>
                    <div className="text-slate-600 text-sm mt-1">{item.label}</div>
                  </div>
                ))}
              </div>

              <Link to="/placements" className="btn-primary">
                View Placements <ArrowRight size={18} />
              </Link>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="grid grid-cols-3 gap-4">
                {[
                  'Google', 'Microsoft', 'Amazon', 'Meta', 'Apple', 'Netflix',
                  'Infosys', 'TCS', 'Wipro', 'Accenture', 'Deloitte', 'KPMG',
                  'Goldman Sachs', 'JP Morgan', 'Salesforce', 'Adobe', 'Intel', 'Samsung',
                ].map(company => (
                  <motion.div
                    key={company}
                    className="bg-white shadow-sm border-blue-50 border border-blue-100 rounded-xl p-3 text-center
                               hover:border-[#1e3a8a]/30 transition-all duration-300 cursor-default"
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(201,168,76,0.05)' }}
                  >
                    <span className="text-slate-600 text-xs font-medium">{company}</span>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── NEWS & EVENTS ─── */}
      <section className="py-28 bg-white shadow-sm border-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="flex items-end justify-between mb-12">
            <div>
              <span className="text-blue-800 font-mono text-sm tracking-widest uppercase block mb-4">Latest</span>
              <h2 className="font-serif text-5xl font-light text-slate-900">News & Events</h2>
            </div>
            <Link to="/campus-life" className="text-blue-800 flex items-center gap-2 hover:gap-3 transition-all text-sm">
              View All <ArrowRight size={16} />
            </Link>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {news.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <motion.div
                  className="bg-white shadow-sm border-blue-50 border border-blue-100 rounded-2xl p-6 hover:border-[#1e3a8a]/20 
                             transition-all duration-300 cursor-pointer group"
                  whileHover={{ x: 4 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-[#1e3a8a]/10 text-blue-800 text-xs font-mono px-3 py-1 rounded-full border border-[#1e3a8a]/20">
                      {item.tag}
                    </span>
                    <span className="text-gray-600 text-sm">{item.date}</span>
                  </div>
                  <h3 className="text-slate-900 font-medium text-lg leading-snug group-hover:text-blue-800 transition-colors">
                    {item.title}
                  </h3>
                  <div className="mt-4 flex items-center gap-2 text-blue-800 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    Read more <ArrowRight size={14} />
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className="py-24 bg-gradient-to-r from-blue-50 via-white to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#1e3a8a]/5" />
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#1e3a8a]/50 to-transparent" />
        <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#1e3a8a]/50 to-transparent" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <AnimatedSection>
            <h2 className="font-serif text-5xl md:text-6xl font-light text-slate-900 mb-6 leading-tight">
              Begin Your Journey at <span className="gradient-text italic">BMSCE</span>
            </h2>
            <p className="text-slate-600 text-lg mb-10 max-w-2xl mx-auto">
              Applications for 2024-25 academic year are now open. Take the first step toward an extraordinary
              engineering career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/admissions" className="btn-primary text-base px-10">
                Apply Now <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="btn-outline text-base px-10">
                Request Info
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </motion.div>
  );
}
