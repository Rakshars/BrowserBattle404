import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, Linkedin, Globe, Users, Award, MapPin, Briefcase, Handshake, ExternalLink, GraduationCap, Building2 } from 'lucide-react';
import PageHero from '../components/PageHero';
import AnimatedSection from '../components/AnimatedSection';
import AnimatedCounter from '../components/AnimatedCounter';
import { api } from '../api';

const institutes = [
  { name: 'BMS College of Engineering', year: 1946 },
  { name: 'BMS College of Architecture', year: 1980 },
  { name: 'BMS College of Commerce and Management', year: '' },
  { name: 'BMS Institute of Technology and Management', year: 2002 },
  { name: 'BMS College of Law', year: 1963 },
  { name: 'BMS College for Women', year: 1964 }
];

const features = [
  { icon: Globe, title: 'Members in your city', desc: 'Find Alumni living in your city & connect with them globally.' },
  { icon: Briefcase, title: 'Career Opportunities', desc: 'Find and share career opportunities within the community.' },
  { icon: Handshake, title: 'Find a Mentor', desc: 'Explore Complete Alumni Directory & connect with alumni matching your interests.' },
  { icon: Users, title: 'Your Profile', desc: 'Create & complete your alumni profile and remain connected with all opportunities.' }
];

const galleryPhotos = [
  "https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/gallary_photos/t1731393670_jQ6aLX2XjA.jpg",
  "https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/gallary_photos/t1731393614_bizGcM4MN4.jpg",
  "https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/gallary_photos/t1726370996_k7qhIlHLZ9.jpg",
  "https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/gallary_photos/t1712554331_aufSA7vue0.jpg",
  "https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/gallary_photos/t1712554281_TcIXVu0RRC.jpg",
  "https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/gallary_photos/t1694321454_8VJY8kvsPg.jpg",
  "https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/gallary_photos/t1694321469_yPrBdaUsrQ.jpg",
  "https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/gallary_photos/t1694321438_jQyqjqWpjR.jpg"
];

const notableAlumni = [
  { name: 'Dr. Sarah Chen', batch: '1998', role: 'VP of Engineering', achievement: 'Led the development of scalable cloud architectures at a top Fortune 500 company.', location: 'San Francisco, CA', img: '👩‍💻' },
  { name: 'Rahul Sharma', batch: '2005', role: 'Founder & CEO', achievement: 'Built a unicorn startup revolutionizing logistics across South East Asia.', location: 'Singapore', img: '👨‍💼' }
];

const testimonials = [
  { name: 'Priya Desai', batch: '2015', company: 'Tech Innovators', role: 'Product Manager', quote: 'The foundation I received at BMSCE was crucial in shaping my product sense and leadership skills.' },
  { name: 'Arjun Reddy', batch: '2019', company: 'Global Systems', role: 'Software Engineer', quote: 'The alumni network directly helped me secure my first role. The mentorship programs are unparalleled.' }
];

const chapters = [
  { city: 'Silicon Valley', members: 1250, active: true },
  { city: 'London', members: 840, active: true },
  { city: 'Singapore', members: 560, active: true },
  { city: 'Dubai', members: 320, active: false }
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
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pb-12 bg-white">
      <PageHero
        title="BMS Alumni Network"
        subtitle="Relive, Reconnect, Reunite. Empowering every student and graduate of BMS Education Trust."
        breadcrumb="Alumni"
        accent="Our Legacy"
      />

      {/* Photo Gallery Marquee */}
      <section className="py-24 bg-white relative overflow-hidden flex flex-col items-center w-full">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <AnimatedSection className="text-center">
            <span className="text-blue-800 font-mono text-sm tracking-widest uppercase block mb-4">Memories & Milestones</span>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-slate-900">Alumni Gallery</h2>
          </AnimatedSection>
        </div>
        
        <div className="relative flex w-full overflow-hidden group">
          <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          
          <motion.div 
            className="flex gap-6 py-4 px-4 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 35, repeat: Infinity }}
          >
            {[...galleryPhotos, ...galleryPhotos].map((photo, i) => (
              <div 
                key={i} 
                className="relative shrink-0 w-[280px] h-[280px] md:w-[320px] md:h-[320px] rounded-full overflow-hidden shadow-lg border-4 border-slate-50 transition-all hover:border-blue-200 cursor-pointer"
              >
                <div className="absolute inset-0 bg-[#1e3a8a]/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img 
                  src={photo} 
                  alt={`Alumni Event ${i + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-32 bg-gradient-to-br from-slate-50 to-blue-50/30 overflow-hidden relative">
        <div className="absolute left-0 bottom-0 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 mix-blend-multiply pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <AnimatedSection direction="left" className="space-y-10">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/50 text-blue-800 text-sm font-mono tracking-widest uppercase mb-6 border border-blue-200/50">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                  Our Identity
                </div>
                <h2 className="font-serif text-4xl md:text-5xl font-light text-slate-900 leading-[1.2]">
                  Empowering the<br />BMSET Community
                </h2>
              </div>
              
              <div className="space-y-8 pl-6 border-l-[3px] border-blue-200 relative">
                <div className="absolute top-0 -left-[2px] w-[3px] h-12 bg-gradient-to-b from-[#1e3a8a] to-blue-400" />
                
                <div>
                  <h4 className="text-xl font-medium text-slate-900 mb-3 flex items-center gap-3">
                    <span className="text-blue-600 font-serif opacity-50 text-2xl">01</span>
                    Vision Statement
                  </h4>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    To create an alumni community that empowers every student and graduate of BMS to unleash their full potential, both personally and professionally, for the betterment of themselves, BMS Education Trust, and the world.
                  </p>
                </div>

                <div className="pt-2">
                  <h4 className="text-xl font-medium text-slate-900 mb-3 flex items-center gap-3">
                    <span className="text-blue-600 font-serif opacity-50 text-2xl">02</span>
                    Mission Statement
                  </h4>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    To actively engage with alumni across the globe to create access to knowledge, talent and opportunities that benefit the BMS Education Trust ecosystem, education and beyond.
                  </p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection direction="right" delay={0.2} className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-[#1e3a8a] translate-x-4 translate-y-4 rounded-[2rem] opacity-20 blur-xl" />
              <div className="bg-[#1e3a8a] p-12 rounded-[2rem] shadow-2xl shadow-blue-900/20 border border-blue-800/50 relative overflow-hidden text-white group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/[0.03] rounded-full blur-[40px] mix-blend-overlay group-hover:bg-white/10 transition-colors duration-1000" />
                <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-blue-500/20 rounded-full blur-[60px]" />
                
                <h3 className="text-3xl font-serif mb-10 text-white relative z-10 flex items-center gap-4">
                  Platform Features
                  <div className="h-px flex-1 bg-gradient-to-r from-blue-400/50 to-transparent" />
                </h3>
                
                <div className="space-y-8 relative z-10">
                  {features.map((feature, i) => (
                    <div key={i} className="flex gap-5 group/item">
                      <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover/item:bg-white/15 group-hover/item:border-white/20 group-hover/item:scale-110 transition-all duration-300 shadow-inner">
                        <feature.icon size={24} className="text-blue-200" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1 group-hover/item:text-blue-200 transition-colors">{feature.title}</h4>
                        <p className="text-blue-100/70 text-sm leading-relaxed">
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white shadow-sm border-b border-blue-100 relative z-20 w-full overflow-hidden -mx-4 sm:mx-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 mix-blend-multiply pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
            {[
              { end: 40000, suffix: '+', label: 'Alumni Worldwide', sublabel: 'Global Network', icon: Users },
              { end: 10000, suffix: '+', label: 'Students', sublabel: 'Current enrollment', icon: GraduationCap },
              { end: 1500, suffix: '+', label: 'Educators', sublabel: 'Faculty Members', icon: Award },
              { end: 7, label: 'Schools', sublabel: 'Under BMSET', icon: Building2 },
            ].map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.1} direction="up">
                <div className="flex flex-col items-center text-center group bg-white border border-blue-50 hover:border-blue-100 hover:shadow-lg hover:shadow-blue-900/5 rounded-3xl p-6 transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100/50 text-[#1e3a8a] flex items-center justify-center mb-6 ring-4 ring-white shadow-sm group-hover:scale-110 group-hover:bg-[#1e3a8a] group-hover:text-white transition-all duration-500">
                    <s.icon size={28} />
                  </div>
                  <AnimatedCounter {...s} />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Institutes/Schools grid */}
      <section className="py-32 bg-white relative z-10 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-20 max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-blue-50 text-blue-800 rounded-2xl flex items-center justify-center mx-auto mb-6 ring-1 ring-blue-100">
              <Building2 size={32} />
            </div>
            <span className="text-blue-800 font-mono text-sm tracking-widest uppercase block mb-4">The Educational Ecosystem</span>
            <h2 className="font-serif text-5xl font-light text-slate-900 mb-6">BMS Education Trust Institutes</h2>
            <p className="text-slate-600 text-lg">
              A legacy of academic excellence across multiple disciplines, shaping the future of education in India.
            </p>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {institutes.map((inst, i) => (
              <AnimatedSection key={i} delay={i * 0.05} direction="up">
                <div className="bg-white border border-slate-200 rounded-2xl p-8 h-full hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1 hover:border-blue-300/50 transition-all duration-300 group flex flex-col justify-between overflow-hidden relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-[#1e3a8a] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div>
                    <h3 className="text-xl font-medium text-slate-900 leading-snug group-hover:text-blue-800 transition-colors">{inst.name}</h3>
                  </div>
                  {inst.year && (
                    <div className="mt-8 flex items-center justify-between">
                      <div className="text-xs font-mono text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full inline-flex items-center gap-2 group-hover:bg-blue-50 group-hover:text-blue-700 transition-colors">
                        <span className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-blue-400 transition-colors" />
                        Est. {inst.year}
                      </div>
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>

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

      {/* Call to Action connecting to portal */}
      <section className="py-32 bg-slate-900 text-white relative overflow-hidden mt-12 mx-6 rounded-[3rem] lg:mx-auto max-w-[96%]">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.4) 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="absolute -top-64 -right-64 w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[100px] mix-blend-screen" />
        <div className="absolute -bottom-64 -left-64 w-[500px] h-[500px] bg-indigo-600/30 rounded-full blur-[100px] mix-blend-screen" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <AnimatedSection direction="up">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl mb-10 overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Globe size={40} className="text-white relative z-10 group-hover:scale-110 transition-transform duration-500" />
            </div>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light mb-8 leading-tight">Join the Global Network</h2>
            <p className="text-slate-300 text-xl md:text-2xl mb-14 max-w-3xl mx-auto leading-relaxed font-light">
              Stay connected with your alma mater. Access exclusive career opportunities, find mentors, and give back to the community that shaped you.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.a 
                href="https://alumni.bmset.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] text-base group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Access Portal 
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-white group-hover:shadow-[0_2px_10px_rgba(0,0,0,0.1)] transition-all">
                  <ExternalLink size={16} className="text-slate-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </motion.a>

              <button className="inline-flex items-center justify-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-500 transition-colors shadow-lg shadow-blue-900/40 text-base group" onClick={() => { setSubmitMessage(''); setIsRegisterOpen(true); }}>
                Register Now <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="inline-flex items-center justify-center gap-3 border border-slate-700 bg-transparent text-white px-8 py-4 rounded-full font-semibold hover:bg-slate-800 hover:border-slate-600 transition-colors text-base group">
                <Linkedin size={20} className="text-blue-400 group-hover:text-white transition-colors" /> LinkedIn Group
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <AnimatePresence>
        {isRegisterOpen && (
          <motion.div
            className="fixed inset-0 z-[220] bg-black/70 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsRegisterOpen(false)}
          >
            <motion.div
              className="w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 border border-blue-100 shadow-2xl relative my-auto"
              initial={{ y: 24, scale: 0.95, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 24, scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="font-serif text-3xl text-slate-900 font-light">Alumni Registration</h3>
              <p className="text-slate-600 mt-2 mb-6">Share your journey and stay connected with the BMSET ecosystem.</p>

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
                  placeholder="What are you doing now (Job/Company)?"
                  required
                  rows={4}
                  className="sm:col-span-2 border border-blue-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]/20 resize-none"
                />

                {submitMessage && (
                  <div className="sm:col-span-2 text-sm text-slate-700 bg-blue-50 border border-blue-100 rounded-xl px-4 py-3 font-medium">
                    {submitMessage}
                  </div>
                )}

                <div className="sm:col-span-2 flex flex-col sm:flex-row gap-3 justify-end mt-4">
                  <button
                    type="button"
                    className="px-6 py-2.5 rounded-full border border-slate-200 hover:bg-slate-50 text-slate-600 transition-colors"
                    onClick={() => setIsRegisterOpen(false)}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="px-6 py-2.5 rounded-full bg-[#1e3a8a] text-white hover:bg-blue-800 transition-colors flex items-center gap-2 font-medium shadow-lg shadow-blue-900/20" disabled={isSubmitting}>
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
