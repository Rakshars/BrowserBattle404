import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, Award, Users, BookOpen, TrendingUp, ChevronDown, Zap, Globe, Shield, X, Calendar, Tag } from 'lucide-react';
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
  {
    day: '09', month: 'MAR', year: '2025',
    tag: 'Faculty Development',
    title: 'DST-FIST Sponsored One Week Faculty Development Program on "Micro and Nano Characterization for Advanced Materials Research"',
    description: `The Department of Physics at BMS College of Engineering, Bengaluru is organising a One Week Faculty Development Program (FDP) sponsored by the Department of Science & Technology under the FIST scheme.\n\nThe program is focused on "Micro and Nano Characterization for Advanced Materials Research" and is scheduled from 09th to 15th March 2025. It covers cutting-edge instrumentation techniques such as SEM, TEM, XRD, AFM, and Raman Spectroscopy, along with hands-on laboratory sessions.\n\nThe FDP is open to faculty members from engineering colleges, research scholars, and scientists working in the fields of materials science, nanoscience, and allied disciplines. Participants will receive a certificate of participation issued by BMSCE.\n\nFor registrations and further details, contact the Department of Physics, BMSCE.`,
    isNew: true,
  },
  {
    day: '16', month: 'FEB', year: '2025',
    tag: 'Workshop',
    title: 'Illuminating the Future: A Comprehensive Workshop on Indian Standards, Codes and Regulations in Lighting',
    description: `The Department of Electrical & Electronics Engineering, BMS College of Engineering, in association with the Bureau of Indian Standards (BIS), is conducting a one-day comprehensive workshop titled "Illuminating the Future".\n\nThe workshop will cover Indian standards, codes and regulations in the Lighting industry, focusing on energy efficiency, LED technologies, photometric testing, and compliance requirements under the IS/IEC framework.\n\nIndustry experts, BIS officials, and leading researchers will deliver sessions on topics including:\n• IS 16102: LED lamps and systems\n• Energy Performance Standards for lighting equipment\n• Quality Control Orders (QCOs) in the Lighting Sector\n• Practical demonstrations and case studies\n\nThe event is open to students, faculty, and industry professionals. Registration is free of charge.`,
    isNew: true,
  },
  {
    day: '05', month: 'FEB', year: '2025',
    tag: 'Scholarship',
    title: 'Sri S Nijalingappa Scholarship 2025-26',
    description: `BMS College of Engineering is pleased to announce the Sri S Nijalingappa Scholarship for the academic year 2025-26, established in memory of the former Chief Minister of Karnataka and founder patron of the BMS Group of Institutions.\n\nEligibility Criteria:\n• Students currently enrolled in BE/B.Tech programs at BMSCE\n• Minimum 75% aggregate marks in the previous academic year\n• Annual family income not exceeding ₹5,00,000\n• Demonstrated record of good conduct and discipline\n\nThe scholarship covers full tuition fee waiver for the academic year. Interested students must submit the application form along with income certificate, marks cards, and bonafide certificate to the Scholarship Cell, Administrative Building, BMSCE.\n\nLast date to apply: 28th February 2025.`,
    isNew: true,
  },
  {
    day: '14', month: 'NOV', year: '2024',
    tag: 'National Conference',
    title: 'NETWORKING EMBEDDED AND WIRELESS SYSTEMS (NEWS) 2025 NATIONAL CONFERENCE organised by the Department of Electronics and Communication Engineering, B.M.S. College of Engineering, Bengaluru on 14th and 15th November 2025',
    description: `The Department of Electronics and Communication Engineering (ECE), BMS College of Engineering, Bengaluru is organising the National Conference on Networking, Embedded and Wireless Systems — NEWS 2025 — on 14th and 15th November 2025.\n\nThe conference aims to bring together researchers, academicians, and industry professionals to share recent advances in:\n• Wireless Communication & 5G/6G Networks\n• Embedded Systems & IoT\n• VLSI Design & Signal Processing\n• Antenna Design & RF Engineering\n• AI/ML applications in Communication Systems\n\nOriginal research papers are invited from faculty, research scholars, and engineers. Accepted papers will be published in reputed Scopus-indexed conference proceedings.\n\nKey Dates:\n• Paper Submission Deadline: 30th September 2025\n• Notification of Acceptance: 20th October 2025\n• Camera-Ready Submission: 5th November 2025\n• Conference Dates: 14–15 November 2025`,
    isNew: true,
  },
  {
    day: '19', month: 'SEP', year: '2025',
    tag: 'Technical Symposium',
    title: 'Phase Shift 2025 MERIDIAN on 19th and 20th September 2025',
    description: `Phase Shift 2025 — MERIDIAN is the annual inter-collegiate technical and cultural symposium of BMS College of Engineering, scheduled for 19th and 20th September 2025 on the BMSCE campus, Basavanagudi, Bengaluru.\n\nMERIDIAN promises two days of high-octane competitions, workshops, and fun events including:\n• Hackathons and Coding Challenges\n• Robotics and Automation Events\n• Paper Presentation & Project Expo\n• Gaming Championships\n• Cultural Performances and DJ Night\n\nPrize pool worth over ₹5,00,000 across all events. Participation is open to students from all engineering colleges. On-spot registrations will be available.\n\nFor event-wise registration and schedule, visit the official Phase Shift portal or contact the Phase Shift Committee, BMSCE Student Council.`,
    isNew: true,
  },
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
  const [selectedNews, setSelectedNews] = useState(null);

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
            NAAC A++ GRADE · NIRF RANKED · NBA ACCREDITED
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



      {/* ─── NEWS & EVENTS ─── */}
      <section className="py-28 bg-white shadow-sm border-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="flex items-end justify-between mb-12">
            <div>
              <motion.div
                className="inline-flex items-center gap-2 bg-blue-50 text-blue-800 font-mono text-xs tracking-widest uppercase px-3 py-1.5 rounded-full mb-4 border border-blue-100 shadow-sm"
                animate={{ boxShadow: ['0px 0px 0px rgba(59,130,246,0)', '0px 0px 15px rgba(59,130,246,0.3)', '0px 0px 0px rgba(59,130,246,0)'] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </div>
                Live Updates
              </motion.div>
              <h2 className="font-serif text-5xl font-light text-slate-900">
                News <span className="gradient-text italic">&</span> Events
              </h2>
            </div>
            <a
              href="https://bmsce.ac.in/home"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-800 flex items-center gap-2 hover:gap-3 transition-all text-sm"
            >
              View All <ArrowRight size={16} />
            </a>
          </AnimatedSection>

          <div className="flex flex-col divide-y divide-blue-100 border border-blue-100 rounded-2xl overflow-hidden shadow-sm">
            {news.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <motion.button
                  onClick={() => setSelectedNews(item)}
                  className="w-full flex items-start gap-6 p-6 bg-white hover:bg-blue-50/60 transition-colors duration-300 group text-left cursor-pointer"
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                >
                  {/* Date Block */}
                  <div className="flex-shrink-0 flex flex-col items-center w-16">
                    <span className="text-3xl font-bold text-slate-800 leading-none">{item.day}</span>
                    <span className="mt-1 text-xs font-semibold text-white bg-[#1e3a8a] px-3 py-0.5 rounded tracking-widest uppercase">
                      {item.month}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-start gap-2 mb-2">
                      <span className="text-slate-800 font-medium text-base leading-snug group-hover:text-blue-800 transition-colors">
                        {item.title}
                      </span>
                      {item.isNew && (
                        <motion.span
                          className="flex-shrink-0 inline-flex items-center bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shadow"
                          animate={{ scale: [1, 1.12, 1] }}
                          transition={{ duration: 1.4, repeat: Infinity }}
                        >
                          New
                        </motion.span>
                      )}
                    </div>
                    <span className="inline-flex items-center gap-1 text-[#1e3a8a] text-sm font-medium group-hover:gap-2 transition-all">
                      read more <ArrowRight size={13} />
                    </span>
                  </div>
                </motion.button>
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
      {/* ─── NEWS MODAL ─── */}
      <AnimatePresence>
        {selectedNews && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
              onClick={() => setSelectedNews(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Modal Card */}
            <motion.div
              className="relative z-10 bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[85vh] flex flex-col overflow-hidden"
              initial={{ opacity: 0, scale: 0.92, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 40 }}
              transition={{ type: 'spring', stiffness: 280, damping: 28 }}
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4 p-7 pb-4 border-b border-blue-100">
                <div className="flex items-center gap-5">
                  {/* Date Block */}
                  <div className="flex-shrink-0 flex flex-col items-center bg-blue-50 border border-blue-200 rounded-xl px-3 py-2 min-w-[56px]">
                    <span className="text-2xl font-bold text-[#1e3a8a] leading-none">{selectedNews.day}</span>
                    <span className="mt-0.5 text-[10px] font-bold text-white bg-[#1e3a8a] px-2 py-0.5 rounded tracking-widest uppercase">
                      {selectedNews.month}
                    </span>
                    <span className="mt-0.5 text-[10px] text-slate-500 font-medium">{selectedNews.year}</span>
                  </div>
                  <div>
                    {selectedNews.tag && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold text-blue-700 bg-blue-100 px-2.5 py-1 rounded-full uppercase tracking-widest mb-2">
                        <Tag size={9} /> {selectedNews.tag}
                      </span>
                    )}
                    <h3 className="font-serif text-lg font-semibold text-slate-900 leading-snug">
                      {selectedNews.title}
                    </h3>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedNews(null)}
                  className="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-full hover:bg-slate-100 transition-colors text-slate-500 hover:text-slate-800"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Body — scrollable */}
              <div className="overflow-y-auto p-7 pt-5 flex-1">
                {selectedNews.description.split('\n').map((para, idx) =>
                  para.trim() === '' ? (
                    <div key={idx} className="h-3" />
                  ) : (
                    <p key={idx} className="text-slate-600 text-sm leading-relaxed">
                      {para}
                    </p>
                  )
                )}
              </div>

              {/* Footer */}
              <div className="px-7 py-4 border-t border-blue-100 bg-blue-50/40 flex items-center justify-between">
                <span className="text-xs text-slate-400 flex items-center gap-1.5">
                  <Calendar size={12} /> {selectedNews.day} {selectedNews.month} {selectedNews.year} · BMSCE
                </span>
                <button
                  onClick={() => setSelectedNews(null)}
                  className="text-xs text-[#1e3a8a] font-semibold hover:underline"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
