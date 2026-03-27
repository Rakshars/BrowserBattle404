import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, BookOpen, Globe, Heart, Users, Zap } from 'lucide-react';
import PageHero from '../components/PageHero';
import AnimatedSection from '../components/AnimatedSection';
import AnimatedCounter from '../components/AnimatedCounter';

const timeline = [
  { year: '1946', title: 'Founded', desc: 'Established by Sri B M Sreenivasaiah with a vision for technical education.' },
  { year: '1963', title: 'Government Affiliation', desc: 'Gained affiliation with Visvesvaraya Technological University.' },
  { year: '1985', title: 'PG Programs', desc: 'Introduced postgraduate engineering programs.' },
  { year: '2001', title: 'Autonomous Status', desc: 'Granted autonomous status by VTU for academic excellence.' },
  { year: '2008', title: 'NBA Accreditation', desc: 'National Board of Accreditation recognizes program quality.' },
  { year: '2016', title: 'NAAC A Grade', desc: 'Accredited with NAAC A grade — top national recognition.' },
  { year: '2022', title: 'NAAC A+ Grade', desc: 'Upgraded to A+ grade, placing among India\'s elite institutions.' },
  { year: '2024', title: 'NIRF Rank #42', desc: 'Ranked among top 50 engineering colleges in India.' },
];

const values = [
  { icon: Award, title: 'Excellence', desc: 'Pursuing the highest standards in education, research, and administration' },
  { icon: Heart, title: 'Integrity', desc: 'Acting with honesty, transparency, and ethical responsibility in all endeavors' },
  { icon: Users, title: 'Inclusivity', desc: 'Fostering a diverse, equitable environment where every voice matters' },
  { icon: Zap, title: 'Innovation', desc: 'Encouraging creative thinking and breakthrough solutions to real-world problems' },
  { icon: Globe, title: 'Global Outlook', desc: 'Preparing students for a connected, multicultural professional world' },
  { icon: BookOpen, title: 'Lifelong Learning', desc: 'Cultivating curiosity and the desire to grow throughout one\'s career' },
];

const leadership = [
  { name: 'Dr. Anil Kumar R', role: 'Principal', dept: 'PhD – IISc Bangalore', img: '👨‍💼' },
  { name: 'Dr. Meera S Patil', role: 'Dean – Academics', dept: 'PhD – IIT Bombay', img: '👩‍💼' },
  { name: 'Prof. Rajan K', role: 'Dean – Research', dept: 'PhD – IISC Bangalore', img: '👨‍🔬' },
  { name: 'Dr. Priya N', role: 'Dean – Students', dept: 'PhD – NIT Surathkal', img: '👩‍🏫' },
];

export default function About() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <PageHero
        title="About BMSCE"
        subtitle="Seven decades of engineering excellence, innovation, and nation-building."
        breadcrumb="About"
        accent="Our Story"
      />

      {/* Vision & Mission */}
      <section className="py-24 bg-white shadow-sm border-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <AnimatedSection direction="left">
              <div className="relative">
                <div className="absolute -left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#1e3a8a] to-transparent" />
                <span className="text-blue-800 font-mono text-xs tracking-widest uppercase block mb-4 pl-6">Vision</span>
                <h2 className="font-serif text-4xl text-slate-900 font-light pl-6 mb-4">
                  To be a globally recognized institution of excellence in engineering education
                </h2>
                <p className="text-slate-600 pl-6 leading-relaxed">
                  We aspire to be among the world's top technical institutions — not merely by rankings, 
                  but by the quality of minds we shape and the problems we help solve.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="relative">
                <div className="absolute -left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#1e3a8a]/60 to-transparent" />
                <span className="text-blue-800 font-mono text-xs tracking-widest uppercase block mb-4 pl-6">Mission</span>
                <h2 className="font-serif text-4xl text-slate-900 font-light pl-6 mb-4">
                  Imparting quality education that transforms students into ethical engineers
                </h2>
                <p className="text-slate-600 pl-6 leading-relaxed">
                  Through innovative curricula, world-class research facilities, and industry collaborations, 
                  we prepare graduates who not only excel technically but lead with empathy and purpose.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-white shadow-sm border-blue-50 border-y border-blue-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { end: 78, suffix: '+', label: 'Years of Excellence' },
              { end: 8500, suffix: '+', label: 'Current Students' },
              { end: 650, suffix: '+', label: 'Faculty Members' },
              { end: 14, label: 'Departments' },
            ].map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <AnimatedCounter {...s} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white shadow-sm border-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="text-blue-800 font-mono text-sm tracking-widest uppercase block mb-4">What We Stand For</span>
            <h2 className="font-serif text-5xl font-light text-slate-900">Our Core Values</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <AnimatedSection key={title} delay={i * 0.1}>
                <motion.div
                  className="bg-white shadow-sm border-blue-50 border border-blue-100 rounded-2xl p-7 group hover:border-[#1e3a8a]/30 transition-all duration-300"
                  whileHover={{ y: -6 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-[#1e3a8a]/10 flex items-center justify-center mb-5 group-hover:bg-[#1e3a8a]/20 transition-colors">
                    <Icon size={22} className="text-blue-800" />
                  </div>
                  <h3 className="text-slate-900 font-semibold text-xl mb-2">{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white shadow-sm border-blue-50">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="text-blue-800 font-mono text-sm tracking-widest uppercase block mb-4">History</span>
            <h2 className="font-serif text-5xl font-light text-slate-900">Our Journey</h2>
          </AnimatedSection>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#1e3a8a]/60 via-[#1e3a8a]/20 to-transparent" />

            {timeline.map((item, i) => (
              <AnimatedSection key={item.year} delay={i * 0.1} direction={i % 2 === 0 ? 'left' : 'right'}>
                <div className={`flex items-center gap-8 mb-12 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="text-blue-800 font-mono text-sm mb-1">{item.year}</div>
                    <h3 className="text-slate-900 font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                  <div className="relative z-10 w-4 h-4 rounded-full bg-[#1e3a8a] border-4 border-[#001A33] shrink-0" />
                  <div className="flex-1" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-white shadow-sm border-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="text-blue-800 font-mono text-sm tracking-widest uppercase block mb-4">Leadership</span>
            <h2 className="font-serif text-5xl font-light text-slate-900">Our Team</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((person, i) => (
              <AnimatedSection key={person.name} delay={i * 0.1}>
                <motion.div
                  className="bg-white shadow-sm border-blue-50 border border-blue-100 rounded-2xl p-6 text-center hover:border-[#1e3a8a]/30 transition-all duration-300 group"
                  whileHover={{ y: -6 }}
                >
                  <div className="w-20 h-20 rounded-full bg-[#1e3a8a]/10 flex items-center justify-center mx-auto mb-4 text-4xl">
                    {person.img}
                  </div>
                  <h3 className="text-slate-900 font-semibold mb-1">{person.name}</h3>
                  <div className="text-blue-800 text-sm font-medium mb-1">{person.role}</div>
                  <div className="text-slate-500 text-xs">{person.dept}</div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
