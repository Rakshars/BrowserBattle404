import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, Linkedin, Globe, Users, Award, MapPin } from 'lucide-react';
import PageHero from '../components/PageHero';
import AnimatedSection from '../components/AnimatedSection';
import AnimatedCounter from '../components/AnimatedCounter';
import { api } from '../api';

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
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [registeredAlumni, setRegisteredAlumni] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    studyStartYear: '',
    studyEndYear: '',
    graduationYear: '',
    course: '',
    currentStatus: '',
  });

  useEffect(() => {
    let isMounted = true;

    const loadAlumni = async () => {
      try {
        const res = await api.get('/alumni');
        if (isMounted && Array.isArray(res?.data)) {
          setRegisteredAlumni(res.data);
        }
      } catch (error) {
        // Keep page functional even if API fails.
      }
    };

    loadAlumni();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setSubmitMessage('');
    setIsSubmitting(true);

    try {
      const payload = {
        ...formData,
        graduationYear: Number(formData.graduationYear),
        studyStartYear: formData.studyStartYear ? Number(formData.studyStartYear) : undefined,
        studyEndYear: formData.studyEndYear ? Number(formData.studyEndYear) : undefined,
      };

      const res = await api.post('/alumni/register', payload);
      if (res?.data) {
        setRegisteredAlumni((prev) => [res.data, ...prev]);
      }

      setSubmitMessage('Registration submitted successfully. Welcome to BMSCE Alumni Network!');
      setFormData({
        name: '',
        email: '',
        studyStartYear: '',
        studyEndYear: '',
        graduationYear: '',
        course: '',
        currentStatus: '',
      });
      setActiveTab('registered');
    } catch (error) {
      setSubmitMessage(error.message || 'Failed to submit registration. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <PageHero
        title="Alumni Network"
        subtitle="15,000+ changemakers across 50 countries — connected by the BMSCE spirit."
        breadcrumb="Alumni"
        accent="Our Legacy"
      />

      {/* Stats */}
      <section className="py-20 bg-white shadow-sm border-b border-blue-100">
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
      <section className="py-24 bg-white shadow-sm border-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="flex gap-4 mb-12 flex-wrap">
            {[
              { id: 'notable', label: 'Notable Alumni' },
              { id: 'testimonials', label: 'Testimonials' },
              { id: 'chapters', label: 'Global Chapters' },
              { id: 'registered', label: 'Registered Alumni' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-[#1e3a8a] text-white'
                    : 'border border-blue-100 text-slate-600 hover:border-[#1e3a8a]/40 hover:text-slate-900'
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
                    className="bg-white shadow-sm border border-blue-100 rounded-2xl p-6 group hover:border-[#1e3a8a]/30 transition-all duration-300"
                    whileHover={{ y: -6 }}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-14 h-14 rounded-full bg-[#1e3a8a]/10 flex items-center justify-center text-3xl shrink-0">
                        {a.img}
                      </div>
                      <div>
                        <h3 className="text-slate-900 font-semibold group-hover:text-blue-800 transition-colors">{a.name}</h3>
                        <div className="text-blue-800 text-xs font-mono mt-0.5">{a.batch}</div>
                        <div className="text-slate-600 text-sm mt-1">{a.role}</div>
                      </div>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed mb-3">{a.achievement}</p>
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
                    className="bg-white shadow-sm border border-blue-100 rounded-2xl p-7 hover:border-[#1e3a8a]/20 transition-all duration-300"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex gap-1 mb-4">
                      {Array(5).fill(0).map((_, i) => (
                        <Star key={i} size={14} className="text-blue-800 fill-[#1e3a8a]" />
                      ))}
                    </div>
                    <p className="text-slate-700 text-sm leading-relaxed italic mb-6">"{t.quote}"</p>
                    <div className="flex items-center gap-3 pt-4 border-t border-blue-100">
                      <div className="w-10 h-10 rounded-full bg-[#1e3a8a]/15 flex items-center justify-center text-blue-800 font-bold text-lg">
                        {t.name[0]}
                      </div>
                      <div>
                        <div className="text-slate-900 font-semibold text-sm">{t.name}</div>
                        <div className="text-slate-500 text-xs">{t.batch} · {t.company}</div>
                      </div>
                      <div className="ml-auto text-slate-500 text-xs">{t.role}</div>
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
                    className={`bg-white shadow-sm border-blue-50 border rounded-2xl p-6 text-center group hover:border-[#1e3a8a]/40 transition-all duration-300 ${
                      ch.active ? 'border-[#1e3a8a]/20' : 'border-blue-100'
                    }`}
                    whileHover={{ y: -5 }}
                  >
                    <Globe size={24} className={`mx-auto mb-3 ${ch.active ? 'text-blue-800' : 'text-gray-600'}`} />
                    <h3 className="text-slate-900 font-semibold mb-1">{ch.city}</h3>
                    <div className="text-slate-600 text-sm mb-2">{ch.members.toLocaleString()} members</div>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-mono border ${
                      ch.active ? 'bg-green-500/10 text-green-400 border-green-500/30' : 'bg-white/5 text-gray-600 border-blue-100'
                    }`}>
                      {ch.active ? 'Active' : 'Forming'}
                    </span>
                  </motion.div>
                </AnimatedSection>
              ))}
            </motion.div>
          )}

          {/* Registered Alumni */}
          {activeTab === 'registered' && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {registeredAlumni.length === 0 && (
                <div className="md:col-span-2 lg:col-span-3 text-center text-slate-500 border border-blue-100 rounded-2xl py-12">
                  No registrations yet. Be the first to register.
                </div>
              )}
              {registeredAlumni.map((a, i) => (
                <AnimatedSection key={a._id || `${a.email}-${i}`} delay={i * 0.05}>
                  <motion.div
                    className="bg-white shadow-sm border border-blue-100 rounded-2xl p-6 hover:border-[#1e3a8a]/30 transition-all duration-300"
                    whileHover={{ y: -5 }}
                  >
                    <h3 className="text-slate-900 font-semibold">{a.name}</h3>
                    <p className="text-slate-500 text-sm mt-1">{a.email}</p>
                    <div className="text-blue-800 text-xs font-mono mt-3">{a.course}</div>
                    <div className="text-slate-600 text-sm mt-2">
                      Studied: {a.studyStartYear || 'N/A'} - {a.studyEndYear || a.graduationYear}
                    </div>
                    <div className="text-slate-600 text-sm">Graduated: {a.graduationYear}</div>
                    <p className="text-slate-700 text-sm mt-3 leading-relaxed">Now: {a.currentStatus}</p>
                  </motion.div>
                </AnimatedSection>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Alumni Association CTA */}
      <section className="py-24 bg-white shadow-sm border-blue-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="font-serif text-5xl font-light text-slate-900 mb-6">Join the <span className="gradient-text italic">BMSCE Alumni</span> Association</h2>
            <p className="text-slate-600 text-lg mb-10 max-w-xl mx-auto">
              Stay connected with your alma mater. Network, mentor students, and give back to the community that shaped you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary" onClick={() => { setSubmitMessage(''); setIsRegisterOpen(true); }}>
                Register Now <ArrowRight size={16} />
              </button>
              <button className="btn-outline border-[#1e3a8a]/30 text-blue-800">
                <Linkedin size={16} /> Join LinkedIn Group
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <AnimatePresence>
        {isRegisterOpen && (
          <motion.div
            className="fixed inset-0 z-[220] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsRegisterOpen(false)}
          >
            <motion.div
              className="w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 border border-blue-100 shadow-xl"
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 24, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="font-serif text-3xl text-slate-900 font-light">Alumni Registration</h3>
              <p className="text-slate-600 mt-2 mb-6">Share your journey and stay connected with BMSCE.</p>

              <form onSubmit={handleRegister} className="grid sm:grid-cols-2 gap-4">
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Full Name"
                  required
                  className="sm:col-span-2 border border-blue-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]/20"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address"
                  required
                  className="sm:col-span-2 border border-blue-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]/20"
                />
                <input
                  type="number"
                  name="studyStartYear"
                  value={formData.studyStartYear}
                  onChange={handleInputChange}
                  placeholder="Study Start Year (e.g. 2016)"
                  min="1900"
                  max="2100"
                  className="border border-blue-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]/20"
                />
                <input
                  type="number"
                  name="studyEndYear"
                  value={formData.studyEndYear}
                  onChange={handleInputChange}
                  placeholder="Study End Year (e.g. 2020)"
                  min="1900"
                  max="2100"
                  className="border border-blue-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]/20"
                />
                <input
                  type="number"
                  name="graduationYear"
                  value={formData.graduationYear}
                  onChange={handleInputChange}
                  placeholder="Graduation Year"
                  min="1900"
                  max="2100"
                  required
                  className="border border-blue-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]/20"
                />
                <input
                  name="course"
                  value={formData.course}
                  onChange={handleInputChange}
                  placeholder="What did you study?"
                  required
                  className="border border-blue-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]/20"
                />
                <textarea
                  name="currentStatus"
                  value={formData.currentStatus}
                  onChange={handleInputChange}
                  placeholder="What are you doing now?"
                  required
                  rows={4}
                  className="sm:col-span-2 border border-blue-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]/20 resize-none"
                />

                {submitMessage && (
                  <div className="sm:col-span-2 text-sm text-slate-700 bg-blue-50 border border-blue-100 rounded-xl px-4 py-3">
                    {submitMessage}
                  </div>
                )}

                <div className="sm:col-span-2 flex flex-col sm:flex-row gap-3 justify-end mt-2">
                  <button
                    type="button"
                    className="px-5 py-2.5 rounded-full border border-blue-100 text-slate-600"
                    onClick={() => setIsRegisterOpen(false)}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn-primary" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Submit Registration'} <ArrowRight size={16} />
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
