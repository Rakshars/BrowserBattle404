import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Users, Award, Briefcase, Handshake, ExternalLink, GraduationCap, Building2 } from 'lucide-react';
import PageHero from '../components/PageHero';
import AnimatedSection from '../components/AnimatedSection';
import AnimatedCounter from '../components/AnimatedCounter';

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
export default function Alumni() {
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                className="inline-flex items-center justify-center gap-3 bg-white text-slate-900 px-10 py-5 rounded-full font-semibold hover:bg-blue-50 transition-colors shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] text-lg group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Access Official Portal 
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-white group-hover:shadow-[0_2px_10px_rgba(0,0,0,0.1)] transition-all">
                  <ExternalLink size={16} className="text-slate-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </motion.a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </motion.div>
  );
}
