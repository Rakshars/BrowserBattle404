import React, { useState } from 'react';
import { api } from '../api';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Facebook, Twitter, Linkedin, Youtube, Instagram } from 'lucide-react';
import PageHero from '../components/PageHero';
import AnimatedSection from '../components/AnimatedSection';

const contacts = [
  { icon: Phone, label: 'Main Office', value: '+91-80-2662 2130 / 2131', sub: 'Mon–Sat, 9 AM – 5 PM' },
  { icon: Mail, label: 'General Enquiries', value: 'principal@bmsce.ac.in', sub: 'Response within 48 hours' },
  { icon: Mail, label: 'Admissions', value: 'admissions@bmsce.ac.in', sub: 'For application queries' },
  { icon: Mail, label: 'Placements', value: 'placements@bmsce.ac.in', sub: 'For recruiting queries' },
];

const departments_contact = [
  { dept: 'Principal\'s Office', phone: '+91-80-2662 2130', email: 'principal@bmsce.ac.in' },
  { dept: 'Admissions Cell', phone: '+91-80-2662 2135', email: 'admissions@bmsce.ac.in' },
  { dept: 'Placement Cell', phone: '+91-80-2662 2140', email: 'placements@bmsce.ac.in' },
  { dept: 'Examination Cell', phone: '+91-80-2662 2145', email: 'exams@bmsce.ac.in' },
  { dept: 'Alumni Relations', phone: '+91-80-2662 2150', email: 'alumni@bmsce.ac.in' },
  { dept: 'Research Cell', phone: '+91-80-2662 2155', email: 'research@bmsce.ac.in' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '', type: 'general' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.post('/contact', { name: form.name, email: form.email, message: form.message });
      setSubmitted(true);
    } catch (err) {
      alert(err.message || 'Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <PageHero
        title="Contact Us"
        subtitle="We're here to help — reach out to us for admissions, placements, research, or any query."
        breadcrumb="Contact"
        accent="Get in Touch"
      />

      {/* Main Contact Section */}
      <section className="py-24 bg-[#040c18]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">

            {/* Left Info */}
            <div className="lg:col-span-2 space-y-8">
              <AnimatedSection direction="left">
                <span className="text-[#C9A84C] font-mono text-sm tracking-widest uppercase block mb-6">Location</span>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#C9A84C]/10 flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-[#C9A84C]" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Campus Address</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      BMS College of Engineering<br />
                      Bull Temple Road, Basavanagudi<br />
                      Bengaluru – 560 019<br />
                      Karnataka, India
                    </p>
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="map-placeholder rounded-2xl h-48 flex items-center justify-center border border-white/10 relative overflow-hidden">
                  <div className="relative z-10 text-center">
                    <MapPin size={32} className="text-[#C9A84C] mx-auto mb-2" />
                    <p className="text-gray-400 text-sm">BMSCE, Basavanagudi</p>
                    <a
                      href="https://maps.google.com/?q=BMS+College+of+Engineering+Bangalore"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#C9A84C] text-xs mt-2 inline-block hover:underline"
                    >
                      Open in Google Maps →
                    </a>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="left" delay={0.2}>
                <div className="space-y-4">
                  {contacts.map(c => (
                    <div key={c.label} className="flex items-start gap-3 bg-[#0a1628] border border-white/5 rounded-xl p-4">
                      <div className="w-8 h-8 rounded-lg bg-[#C9A84C]/10 flex items-center justify-center shrink-0">
                        <c.icon size={14} className="text-[#C9A84C]" />
                      </div>
                      <div>
                        <div className="text-gray-500 text-xs mb-0.5">{c.label}</div>
                        <div className="text-white text-sm font-medium">{c.value}</div>
                        <div className="text-gray-600 text-xs">{c.sub}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection direction="left" delay={0.3}>
                <div className="flex gap-3">
                  {[Facebook, Twitter, Linkedin, Youtube, Instagram].map((Icon, i) => (
                    <a key={i} href="#" className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-gray-500
                                                    hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all duration-300">
                      <Icon size={15} />
                    </a>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <AnimatedSection direction="right">
                {submitted ? (
                  <motion.div
                    className="bg-[#0a1628] border border-green-500/30 rounded-2xl p-12 text-center"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                  >
                    <CheckCircle size={48} className="text-green-400 mx-auto mb-4" />
                    <h3 className="text-white font-serif text-2xl mb-3">Message Sent!</h3>
                    <p className="text-gray-400">Thank you for reaching out. We'll respond within 48 hours.</p>
                    <button
                      className="mt-6 btn-primary"
                      onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', subject: '', message: '', type: 'general' }); }}
                    >
                      Send Another
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="bg-[#0a1628] border border-white/5 rounded-2xl p-8 space-y-5">
                    <h3 className="text-white font-serif text-2xl font-light mb-6">Send a Message</h3>

                    {/* Type selector */}
                    <div>
                      <label className="text-gray-400 text-sm mb-2 block">Query Type</label>
                      <div className="grid grid-cols-3 gap-2">
                        {['general', 'admissions', 'placements'].map(t => (
                          <button
                            key={t}
                            type="button"
                            onClick={() => setForm({ ...form, type: t })}
                            className={`py-2 px-3 rounded-xl text-sm capitalize transition-all duration-200 ${
                              form.type === t
                                ? 'bg-[#C9A84C] text-[#0a1628] font-semibold'
                                : 'border border-white/10 text-gray-400 hover:border-white/30'
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-gray-400 text-sm mb-2 block">Full Name *</label>
                        <input
                          name="name" value={form.name} onChange={handleChange} required
                          className="w-full bg-[#040c18] border border-white/10 rounded-xl px-4 py-3 text-white text-sm 
                                     focus:outline-none focus:border-[#C9A84C]/50 transition-colors placeholder-gray-600"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="text-gray-400 text-sm mb-2 block">Email Address *</label>
                        <input
                          type="email" name="email" value={form.email} onChange={handleChange} required
                          className="w-full bg-[#040c18] border border-white/10 rounded-xl px-4 py-3 text-white text-sm 
                                     focus:outline-none focus:border-[#C9A84C]/50 transition-colors placeholder-gray-600"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-gray-400 text-sm mb-2 block">Phone</label>
                        <input
                          name="phone" value={form.phone} onChange={handleChange}
                          className="w-full bg-[#040c18] border border-white/10 rounded-xl px-4 py-3 text-white text-sm 
                                     focus:outline-none focus:border-[#C9A84C]/50 transition-colors placeholder-gray-600"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                      <div>
                        <label className="text-gray-400 text-sm mb-2 block">Subject *</label>
                        <input
                          name="subject" value={form.subject} onChange={handleChange} required
                          className="w-full bg-[#040c18] border border-white/10 rounded-xl px-4 py-3 text-white text-sm 
                                     focus:outline-none focus:border-[#C9A84C]/50 transition-colors placeholder-gray-600"
                          placeholder="Brief subject"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-gray-400 text-sm mb-2 block">Message *</label>
                      <textarea
                        name="message" value={form.message} onChange={handleChange} required rows={5}
                        className="w-full bg-[#040c18] border border-white/10 rounded-xl px-4 py-3 text-white text-sm 
                                   focus:outline-none focus:border-[#C9A84C]/50 transition-colors placeholder-gray-600 resize-none"
                        placeholder="Describe your query in detail..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-[#C9A84C] text-[#0a1628] font-semibold py-4 rounded-xl hover:bg-[#fcd34d] 
                                 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
                      whileHover={{ scale: loading ? 1 : 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {loading ? (
                        <motion.div className="w-5 h-5 border-2 border-[#0a1628]/30 border-t-[#0a1628] rounded-full" animate={{ rotate: 360 }} transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }} />
                      ) : (
                        <><Send size={18} /> Send Message</>
                      )}
                    </motion.button>
                  </form>
                )}
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-24 bg-[#020810]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <span className="text-[#C9A84C] font-mono text-sm tracking-widest uppercase block mb-4">Directory</span>
            <h2 className="font-serif text-5xl font-light text-white">Department Contacts</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {departments_contact.map((d, i) => (
              <AnimatedSection key={d.dept} delay={i * 0.07}>
                <div className="bg-[#0a1628] border border-white/5 rounded-xl p-5 hover:border-[#C9A84C]/20 transition-all duration-300">
                  <h4 className="text-white font-semibold mb-3">{d.dept}</h4>
                  <div className="space-y-2">
                    <a href={`tel:${d.phone}`} className="flex items-center gap-2 text-gray-400 text-sm hover:text-[#C9A84C] transition-colors">
                      <Phone size={13} className="text-[#C9A84C]" /> {d.phone}
                    </a>
                    <a href={`mailto:${d.email}`} className="flex items-center gap-2 text-gray-400 text-sm hover:text-[#C9A84C] transition-colors">
                      <Mail size={13} className="text-[#C9A84C]" /> {d.email}
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Hours */}
      <section className="py-16 bg-[#040c18] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="flex flex-col md:flex-row items-center justify-between gap-6 bg-[#0a1628] border border-white/5 rounded-2xl px-8 py-6">
            <div className="flex items-center gap-4">
              <Clock size={24} className="text-[#C9A84C]" />
              <div>
                <h4 className="text-white font-semibold">Office Hours</h4>
                <p className="text-gray-400 text-sm">Mon – Sat: 9:00 AM – 5:30 PM · Sun: Closed</p>
              </div>
            </div>
            <div className="text-center">
              <div className="text-[#C9A84C] font-mono text-sm">EMERGENCY CONTACT</div>
              <a href="tel:+918026622130" className="text-white font-semibold text-lg hover:text-[#C9A84C] transition-colors">+91-80-2662 2130</a>
            </div>
            <div className="text-gray-500 text-sm text-center md:text-right">
              <p>Campus is located at</p>
              <p className="text-gray-300">Basavanagudi, Bengaluru – 560 019</p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </motion.div>
  );
}
