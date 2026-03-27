import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle, Clock, FileText, HelpCircle, Phone, Mail } from 'lucide-react';
import PageHero from '../components/PageHero';
import AnimatedSection from '../components/AnimatedSection';

const steps = [
  { num: '01', title: 'Check Eligibility', desc: 'Confirm you meet the academic requirements: 10+2 with PCM/PCB and a valid CET/JEE score.' },
  { num: '02', title: 'Register Online', desc: 'Create an account on the BMSCE admissions portal and fill in your personal & academic details.' },
  { num: '03', title: 'Upload Documents', desc: 'Submit scanned copies of mark sheets, ID proof, caste certificate (if applicable), and passport photo.' },
  { num: '04', title: 'Pay Application Fee', desc: 'Pay the non-refundable application fee of ₹1,000 via UPI, net banking, or card.' },
  { num: '05', title: 'Attend Counselling', desc: 'Participate in KCET/COMEDK counselling. BMSCE participates in all state and national counselling processes.' },
  { num: '06', title: 'Confirm Admission', desc: 'Pay the first-semester fee, submit originals, and collect your admission letter. Welcome to BMSCE!' },
];

const requirements = [
  { program: 'B.E. (UG)', criteria: '10+2 PCM with ≥45% (40% for SC/ST) + KCET / JEE Main / COMEDK score' },
  { program: 'M.Tech (PG)', criteria: 'B.E./B.Tech in relevant discipline with ≥50% + PGCET / GATE score' },
  { program: 'Ph.D.', criteria: 'M.E./M.Tech or M.Sc. in relevant field with ≥55% + entrance interview' },
  { program: 'NRI/PIO Seats', criteria: 'Equivalent international qualification + management quota process' },
];

const faqs = [
  { q: 'What is the KCET cutoff for CSE at BMSCE?', a: 'The KCET cutoff for Computer Science typically ranges between rank 2,000–5,000 depending on category. General category cutoff is approximately rank 2,500.' },
  { q: 'Does BMSCE offer merit-based scholarships?', a: 'Yes. Students with >95% in 10+2 are eligible for the BMS Merit Scholarship covering up to 25% of tuition fees. Sports and cultural scholarships are also available.' },
  { q: 'Is there on-campus accommodation?', a: 'Yes, BMSCE has separate hostels for boys and girls with a capacity of 2,000+ students on a first-come, first-served basis.' },
  { q: 'Can NRI students apply?', a: 'Yes. BMSCE has designated NRI/PIO seats in each program. Applications are processed through the management quota with specific eligibility criteria.' },
  { q: 'What is the fee structure?', a: 'Government quota fees are regulated by the Karnataka Examinations Authority. Management quota fees are set by the institution. Contact the admissions office for the latest fee schedule.' },
];

const fees = [
  { category: 'Government Quota (KCET)', ug: '₹82,000/yr', pg: '₹55,000/yr' },
  { category: 'COMEDK Quota', ug: '₹1,60,000/yr', pg: '—' },
  { category: 'Management Quota', ug: '₹2,20,000/yr', pg: '₹1,20,000/yr' },
  { category: 'NRI Quota', ug: 'USD 4,000/yr', pg: 'USD 3,000/yr' },
];

export default function Admissions() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <PageHero
        title="Admissions"
        subtitle="Your journey to a world-class engineering education starts here."
        breadcrumb="Admissions"
        accent="Apply 2024–25"
      />

      {/* Apply CTA Banner */}
      <section className="py-12 bg-[#1e3a8a]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white font-serif text-2xl font-semibold">Admissions Open: 2024–25</h3>
            <p className="text-white/70 text-sm mt-1">Applications for UG, PG & PhD programs are now being accepted.</p>
          </div>
          <div className="flex gap-3">
            <button className="bg-white shadow-sm border-blue-50 text-slate-900 px-7 py-3 rounded-full font-semibold hover:bg-white shadow-sm border-blue-50 transition-colors">
              Apply Now
            </button>
            <button className="border-2 border-[#003366] text-white px-7 py-3 rounded-full font-semibold hover:bg-white shadow-sm border-blue-50/10 transition-colors">
              Download Prospectus
            </button>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-24 bg-white shadow-sm border-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="text-blue-800 font-mono text-sm tracking-widest uppercase block mb-4">Process</span>
            <h2 className="font-serif text-5xl font-light text-slate-900">How to Apply</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <AnimatedSection key={step.num} delay={i * 0.1}>
                <motion.div
                  className="bg-white shadow-sm border-blue-50 border border-blue-100 rounded-2xl p-6 relative overflow-hidden group hover:border-[#1e3a8a]/30 transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="absolute top-4 right-4 font-mono text-6xl font-bold text-slate-600 select-none group-hover:text-blue-800/5 transition-colors">
                    {step.num}
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#1e3a8a]/10 border border-[#1e3a8a]/30 flex items-center justify-center mb-4">
                    <span className="text-blue-800 font-mono text-sm font-bold">{step.num}</span>
                  </div>
                  <h3 className="text-slate-900 font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-24 bg-white shadow-sm border-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <AnimatedSection direction="left">
              <span className="text-blue-800 font-mono text-sm tracking-widest uppercase block mb-4">Eligibility</span>
              <h2 className="font-serif text-4xl font-light text-slate-900 mb-8">Entry Requirements</h2>
              <div className="space-y-4">
                {requirements.map(r => (
                  <div key={r.program} className="bg-white shadow-sm border-blue-50 border border-blue-100 rounded-xl p-5">
                    <div className="text-blue-800 font-semibold mb-2">{r.program}</div>
                    <div className="text-slate-600 text-sm leading-relaxed flex items-start gap-2">
                      <CheckCircle size={14} className="text-green-400 mt-0.5 shrink-0" />
                      {r.criteria}
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <span className="text-blue-800 font-mono text-sm tracking-widest uppercase block mb-4">Fee Structure</span>
              <h2 className="font-serif text-4xl font-light text-slate-900 mb-8">Tuition Fees 2024–25</h2>
              <div className="bg-white shadow-sm border-blue-50 border border-blue-100 rounded-2xl overflow-hidden">
                <div className="grid grid-cols-3 text-xs font-mono text-slate-500 uppercase tracking-wider px-5 py-3 border-b border-blue-100">
                  <span>Category</span><span className="text-center">UG/Year</span><span className="text-center">PG/Year</span>
                </div>
                {fees.map((f, i) => (
                  <div key={f.category} className={`grid grid-cols-3 px-5 py-4 text-sm items-center ${i < fees.length - 1 ? 'border-b border-blue-100' : ''}`}>
                    <span className="text-slate-700">{f.category}</span>
                    <span className="text-center text-blue-800 font-mono">{f.ug}</span>
                    <span className="text-center text-slate-600 font-mono">{f.pg}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 text-xs mt-4">* Fees subject to revision. Refer to official prospectus for latest structure.</p>

              <div className="mt-8 bg-white shadow-sm border-blue-50 border border-[#1e3a8a]/20 rounded-2xl p-6">
                <h4 className="text-slate-900 font-semibold mb-3 flex items-center gap-2">
                  <FileText size={16} className="text-blue-800" /> Important Dates
                </h4>
                {[
                  ['KCET Registration', 'Jan 15 – Mar 10, 2025'],
                  ['COMEDK UGET', 'May 4, 2025'],
                  ['KCET Results', 'Jun 15, 2025'],
                  ['Counselling Round 1', 'Jul 1–10, 2025'],
                  ['Classes Begin', 'Aug 1, 2025'],
                ].map(([evt, date]) => (
                  <div key={evt} className="flex justify-between items-center py-2 border-b border-blue-100 last:border-0">
                    <span className="text-slate-600 text-sm">{evt}</span>
                    <span className="text-blue-800 text-sm font-mono">{date}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-white shadow-sm border-blue-50">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="text-blue-800 font-mono text-sm tracking-widest uppercase block mb-4">Help</span>
            <h2 className="font-serif text-5xl font-light text-slate-900">Frequently Asked Questions</h2>
          </AnimatedSection>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.07}>
                <div className="bg-white shadow-sm border-blue-50 border border-blue-100 rounded-2xl overflow-hidden">
                  <button
                    className="w-full flex items-center gap-4 px-6 py-5 text-left"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <HelpCircle size={18} className="text-blue-800 shrink-0" />
                    <span className="text-slate-900 font-medium flex-1">{faq.q}</span>
                    <motion.span animate={{ rotate: openFaq === i ? 45 : 0 }} className="text-slate-500 text-xl shrink-0">+</motion.span>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 pl-14 text-slate-600 text-sm leading-relaxed border-t border-blue-100 pt-4">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-12 text-center">
            <p className="text-slate-500 mb-6">Still have questions? Reach out to our admissions team.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+918026622130" className="flex items-center gap-2 btn-primary">
                <Phone size={16} /> Call Admissions
              </a>
              <a href="mailto:admissions@bmsce.ac.in" className="flex items-center gap-2 btn-outline border-[#1e3a8a]/30 text-blue-800">
                <Mail size={16} /> Email Us
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </motion.div>
  );
}
