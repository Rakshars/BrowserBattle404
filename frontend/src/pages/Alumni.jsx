import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Linkedin, Globe, Users, Award, MapPin } from 'lucide-react';
import PageHero from '../components/PageHero';
import AnimatedSection from '../components/AnimatedSection';
import AnimatedCounter from '../components/AnimatedCounter';

const notableAlumni = [
  { name: 'Arun Kumar N.', batch: '1988 · Mechanical', role: 'VP Engineering, Google India', location: 'Bengaluru', img: '👨‍💼', achievement: 'Led Google\'s India engineering center to 3,000 engineers' },
  { name: 'Preethi Srinivasan', batch: '1995 · ECE', role: 'CTO, Infosys BPM', location: 'Chennai', img: '👩‍💼', achievement: 'Pioneer in AI-led business transformation at scale' },
  { name: 'Dr. Sudhir Rao', batch: '1979 · Civil', role: 'Chief Engineer, ISRO', location: 'Bengaluru', img: '👨‍🔬', achievement: 'Key contributor to Chandrayaan-3 mission success' },
  { name: 'Kavitha Murthy', batch: '2001 · CSE', role: 'Co-founder & CEO, DataNinja', location: 'San Francisco', img: '👩‍💻', achievement: 'Built a $120M data analytics startup from Bengaluru' },
  { name: 'Vijay Anand', batch: '1993 · EEE', role: 'Global Head, ABB Power', location: 'Zurich', img: '👨‍🏭', achievement: 'Spearheading global electrification initiatives at ABB' },
  { name: 'Dr. Nandini Prasad', batch: '1985 · Chemical', role: 'Professor, MIT', location: 'Boston', img: '👩‍🏫', achievement: 'Pioneering research in sustainable polymer chemistry' },
];

const testimonials = [
  { name: 'Ravi Shankar', batch: '2005 · CSE', company: 'Amazon', role: 'Principal Engineer', quote: 'BMSCE gave me the foundation to think deeply and the confidence to solve complex systems problems at Amazon\'s scale. The faculty pushed us beyond textbooks.' },
  { name: 'Meghna Iyer', batch: '2010 · ECE', company: 'Qualcomm', role: 'Senior VLSI Designer', quote: 'The VLSI lab at BMSCE was where I fell in love with chip design. The equipment and guidance from professors were world-class even a decade ago.' },
  { name: 'Sanjay Kumar', batch: '1999 · MECH', company: 'Tata Motors', role: 'Director – R&D', quote: 'The problem-solving mindset BMSCE instilled in me has been the backbone of my 25-year career. I hire BMSCE graduates because I know they deliver.' },
  { name: 'Deepa Nair', batch: '2015 · ISE', company: 'Flipkart', role: 'Data Science Lead', quote: 'BMSCE\'s culture of innovation through fests and clubs shaped me as much as the academics. I built my first ML model in the campus coding club.' },
];

const chapters = [
  { city: 'Bengaluru', members: 4800, active: true },
  { city: 'Mumbai', members: 1200, active: true },
  { city: 'Delhi NCR', members: 980, active: true },
  { city: 'San Francisco Bay Area', members: 1560, active: true },
  { city: 'Singapore', members: 720, active: true },
  { city: 'Dubai', members: 480, active: true },
  { city: 'London', members: 360, active: false },
  { city: 'Sydney', members: 280, active: false },
];

export default function Alumni() {
  const [activeTab, setActiveTab] = useState('notable');

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <PageHero
        title="Alumni Network"
        subtitle="15,000+ changemakers across 50 countries — connected by the BMSCE spirit."
        breadcrumb="Alumni"
        accent="Our Legacy"
      />

      {/* Stats */}
      <section className="py-20 bg-[#0a1628] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { end: 15000, suffix: '+', label: 'Alumni Worldwide' },
              { end: 50, suffix: '+', label: 'Countries' },
              { end: 8, label: 'Global Chapters' },
              { end: 78, label: 'Years of Graduates' },
            ].map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <AnimatedCounter {...s} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-24 bg-[#040c18]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="flex gap-4 mb-12 flex-wrap">
            {[
              { id: 'notable', label: 'Notable Alumni' },
              { id: 'testimonials', label: 'Testimonials' },
              { id: 'chapters', label: 'Global Chapters' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-[#C9A84C] text-[#0a1628]'
                    : 'border border-white/10 text-gray-400 hover:border-[#C9A84C]/40 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </AnimatedSection>

          {/* Notable Alumni */}
          {activeTab === 'notable' && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {notableAlumni.map((a, i) => (
                <AnimatedSection key={a.name} delay={i * 0.08}>
                  <motion.div
                    className="bg-[#0a1628] border border-white/5 rounded-2xl p-6 group hover:border-[#C9A84C]/30 transition-all duration-300"
                    whileHover={{ y: -6 }}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-14 h-14 rounded-full bg-[#C9A84C]/10 flex items-center justify-center text-3xl shrink-0">
                        {a.img}
                      </div>
                      <div>
                        <h3 className="text-white font-semibold group-hover:text-[#C9A84C] transition-colors">{a.name}</h3>
                        <div className="text-[#C9A84C] text-xs font-mono mt-0.5">{a.batch}</div>
                        <div className="text-gray-400 text-sm mt-1">{a.role}</div>
                      </div>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed mb-3">{a.achievement}</p>
                    <div className="flex items-center gap-1 text-gray-600 text-xs">
                      <MapPin size={11} /> {a.location}
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </motion.div>
          )}

          {/* Testimonials */}
          {activeTab === 'testimonials' && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid md:grid-cols-2 gap-6">
              {testimonials.map((t, i) => (
                <AnimatedSection key={t.name} delay={i * 0.1}>
                  <motion.div
                    className="bg-[#0a1628] border border-white/5 rounded-2xl p-7 hover:border-[#C9A84C]/20 transition-all duration-300"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex gap-1 mb-4">
                      {Array(5).fill(0).map((_, i) => (
                        <Star key={i} size={14} className="text-[#C9A84C] fill-[#C9A84C]" />
                      ))}
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed italic mb-6">"{t.quote}"</p>
                    <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                      <div className="w-10 h-10 rounded-full bg-[#C9A84C]/15 flex items-center justify-center text-[#C9A84C] font-bold text-lg">
                        {t.name[0]}
                      </div>
                      <div>
                        <div className="text-white font-semibold text-sm">{t.name}</div>
                        <div className="text-gray-500 text-xs">{t.batch} · {t.company}</div>
                      </div>
                      <div className="ml-auto text-gray-500 text-xs">{t.role}</div>
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </motion.div>
          )}

          {/* Chapters */}
          {activeTab === 'chapters' && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {chapters.map((ch, i) => (
                <AnimatedSection key={ch.city} delay={i * 0.07}>
                  <motion.div
                    className={`bg-[#0a1628] border rounded-2xl p-6 text-center group hover:border-[#C9A84C]/40 transition-all duration-300 ${
                      ch.active ? 'border-[#C9A84C]/20' : 'border-white/5'
                    }`}
                    whileHover={{ y: -5 }}
                  >
                    <Globe size={24} className={`mx-auto mb-3 ${ch.active ? 'text-[#C9A84C]' : 'text-gray-600'}`} />
                    <h3 className="text-white font-semibold mb-1">{ch.city}</h3>
                    <div className="text-gray-400 text-sm mb-2">{ch.members.toLocaleString()} members</div>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-mono border ${
                      ch.active ? 'bg-green-500/10 text-green-400 border-green-500/30' : 'bg-white/5 text-gray-600 border-white/10'
                    }`}>
                      {ch.active ? 'Active' : 'Forming'}
                    </span>
                  </motion.div>
                </AnimatedSection>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Alumni Association CTA */}
      <section className="py-24 bg-[#020810]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="font-serif text-5xl font-light text-white mb-6">Join the <span className="gradient-text italic">BMSCE Alumni</span> Association</h2>
            <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
              Stay connected with your alma mater. Network, mentor students, and give back to the community that shaped you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">Register Now <ArrowRight size={16} /></button>
              <button className="btn-outline border-[#C9A84C]/30 text-[#C9A84C]">
                <Linkedin size={16} /> Join LinkedIn Group
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </motion.div>
  );
}
