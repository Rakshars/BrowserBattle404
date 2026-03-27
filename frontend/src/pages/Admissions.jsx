import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle, FileText, HelpCircle, Phone, Mail,
  BookOpen, AlertTriangle, MapPin, Clock, ChevronDown, Users
} from 'lucide-react';
import PageHero from '../components/PageHero';
import AnimatedSection from '../components/AnimatedSection';

/* ─── DATA ─────────────────────────────────────────────────── */

const ugPrograms = [
  { name: 'Civil Engineering', code: 'CIVIL' },
  { name: 'Mechanical Engineering', code: 'MECH' },
  { name: 'Electrical & Electronics Engineering', code: 'EEE' },
  { name: 'Electronics & Communication Engineering', code: 'ECE' },
  { name: 'Industrial Engineering & Management', code: 'IEM' },
  { name: 'Computer Science & Engineering', code: 'CSE' },
  { name: 'Bio Technology', code: 'BT' },
  { name: 'Chemical Engineering', code: 'CHE' },
  { name: 'Artificial Intelligence & Machine Learning', code: 'AIML' },
  { name: 'Computer Science & Engineering (Data Science)', code: 'CSD' },
  { name: 'CSE (IoT & Cyber Security incl. Blockchain)', code: 'CSI' },
  { name: 'Artificial Intelligence & Data Science', code: 'AIDS' },
  { name: 'Computer Science & Business Systems', code: 'CSBS' },
];

const quotaTabs = [
  {
    id: 'kcet',
    label: 'KEA / KCET',
    color: 'text-blue-800',
    activeBg: 'bg-[#1e3a8a]',
    icon: '🎓',
    badge: 'Government Quota',
    badgeColor: 'bg-green-100 text-green-800',
    eligibility: [
      'Passed 2nd PUC / 12th Std with English as one of the languages',
      'Minimum 45% aggregate in Physics & Mathematics as compulsory subjects',
      'Optional subject: Chemistry / Biotechnology / Biology / Computer Science / Electronics',
      'SC/ST & OBC (Cat-I, 2A, 2B, 3A, 3B): Minimum 40% aggregate',
    ],
    entrance: 'Karnataka Examinations Authority (KEA) — KCET',
    process: [
      'Appear for KCET conducted by Karnataka Examinations Authority (KEA)',
      'Apply through KEA Online Registration for KCET counselling',
      'Participate in seat allotment rounds (typically 3 rounds)',
      'Report to BMSCE with original documents after allotment',
      'Pay regulated government quota fee and confirm admission',
    ],
    fees: '₹82,500 / year (approx.) — Regulated by KEA / Govt. of Karnataka',
    note: 'Fee is regulated by the Karnataka Government. Actual fees as per KEA circular.',
    contact: 'KEA Helpline: 080-23460460 | www.kea.kar.nic.in',
  },
  {
    id: 'comedk',
    label: 'COMEDK UGET',
    color: 'text-purple-800',
    activeBg: 'bg-purple-700',
    icon: '🏛️',
    badge: 'COMEDK Quota',
    badgeColor: 'bg-purple-100 text-purple-800',
    eligibility: [
      'Passed 10+2 / 2nd PUC with Physics & Mathematics (compulsory)',
      'Chemistry / Biotechnology / Biology / Computer Science / Electronics as optional',
      'Minimum 45% marks in PCM aggregate (40% for SC/ST of Karnataka)',
      'Must have appeared in COMEDK UGET',
    ],
    entrance: 'COMEDK Under Graduate Entrance Test (UGET)',
    process: [
      'Register and appear for COMEDK UGET (usually held in May)',
      'Obtain COMEDK rank and register for COMEDK counselling',
      'Choose BMSCE in your preferred options during seat allotment',
      'Report to BMSCE with original documents after seat confirmation',
      'Pay COMEDK quota fee and complete admission formalities',
    ],
    fees: '₹1,60,000 / year (approx.) — Set by institution under COMEDK norms',
    note: 'Fees set by the institution and approved by COMEDK / VTU.',
    contact: 'COMEDK: 080-46671060 | www.comedk.org',
  },
  {
    id: 'jee',
    label: 'JEE Main',
    color: 'text-orange-700',
    activeBg: 'bg-orange-600',
    icon: '📐',
    badge: 'JEE / NRI Quota',
    badgeColor: 'bg-orange-100 text-orange-800',
    eligibility: [
      'Passed 10+2 / 2nd PUC with Physics & Mathematics (compulsory)',
      'Optional: Chemistry / Biotechnology / Biology / Computer Science / Electronics',
      'Minimum 45% in PCM aggregate (40% for SC/ST)',
      'Valid JEE Main (Paper I) score is mandatory',
    ],
    entrance: 'JEE Main (Paper-I) — National Testing Agency (NTA)',
    process: [
      'Appear for JEE Main conducted by NTA (held in January & April)',
      'Valid JEE score is accepted for management seat admissions at BMSCE',
      'Apply directly to BMSCE Admissions Office with JEE scorecard',
      'Attend document verification and counselling at BMSCE campus',
      'Pay fee and complete admission formalities',
    ],
    fees: '₹1,60,000 – ₹2,20,000 / year depending on seat category',
    note: 'JEE Main score is also accepted under Management Quota. Contact admissions office for specifics.',
    contact: 'NTA JEE: 011-40759000 | jeemain.nta.nic.in',
  },
  {
    id: 'management',
    label: 'Management Quota',
    color: 'text-red-700',
    activeBg: 'bg-[#1e3a8a]',
    icon: '🏢',
    badge: 'Management Quota',
    badgeColor: 'bg-red-100 text-red-800',
    eligibility: [
      'Physics & Mathematics (compulsory)',
      'Optional: Chemistry / Biology / Bio-Tech / Computer Science / Electronics',
      'Must qualify in any one of: KCET / COMEDK UGET / JEE Main (Paper I)',
      'Entrance exam qualification is mandatory even for Management Quota seats',
    ],
    entrance: 'KEA / COMEDK UGET / JEE Main — any one qualifying exam',
    process: [
      'Obtain a valid score in KEA / COMEDK UGET / JEE Main',
      'Contact the Director (Admissions), BMSCE for availability of seats',
      'Visit in person: Ground Floor, Platinum Jubilee Block, Bull Temple Road, Basavanagudi',
      'Counselling: Monday to Friday, 10:00 AM – 4:00 PM',
      'Payment via Demand Draft favouring "BMS Educational Trust" payable at Bengaluru — must be from Parent\'s account only',
    ],
    fees: '₹2,20,000 / year (approx.) — Set by BMS Educational Trust',
    note: '⚠ BMS Educational Trust does NOT encourage admissions through agents or support agents. Beware of touts.',
    isWarning: true,
    contactEmail: 'contact@bmsetadmission.org',
    contactPhone: '080-26611636',
    officeHours: 'Monday – Friday, 10:00 AM – 4:00 PM (Closed on Sundays, 2nd & 4th Saturdays, and Government Holidays)',
    address: 'Director (Admissions), International Division, Ground Floor, Platinum Jubilee Block, BMSCE Campus, Bull Temple Road, Basavanagudi, Bengaluru – 560 019',
  },
];

const faqs = [
  {
    q: 'What is the KCET cutoff for CSE at BMSCE?',
    a: 'The general merit cutoff for Computer Science & Engineering typically falls around rank 2,000–5,000 depending on the year and category. SC/ST categories have separate cutoffs.',
  },
  {
    q: 'Can I take admission through JEE Main under Management Quota?',
    a: 'Yes. BMSCE accepts valid JEE Main (Paper-I) scores for Management Quota admissions. Students must have qualified in JEE Main and meet the academic eligibility (45% PCM at 10+2 level).',
  },
  {
    q: 'Is Lateral Entry (3-Year B.E.) available at BMSCE?',
    a: 'Yes. Candidates who have passed a diploma examination with minimum 45% (40% for SC/ST) in the final year are eligible for B.E. Lateral Entry admissions through KEA.',
  },
  {
    q: 'What documents are required for admission?',
    a: '10th & 12th mark sheets, qualifying entrance exam scorecard (KCET/COMEDK/JEE), transfer certificate, conduct certificate, caste certificate (if applicable), passport-size photos, and Aadhaar card.',
  },
  {
    q: 'Does BMSCE have hostel facilities?',
    a: 'Yes, BMSCE has separate hostels for boys and girls. Hostel fees are extra and not included in the tuition fee structure. Contact the college for current hostel fee details.',
  },
  {
    q: 'Are there scholarships available?',
    a: 'Yes. BMSCE offers the Sri S Nijalingappa Scholarship and other merit-based scholarships. Government scholarships (post-matric, minority etc.) are also facilitated through the Scholarship Cell.',
  },
];

/* ─── COMPONENT ─────────────────────────────────────────────── */

export default function Admissions() {
  const [activeTab, setActiveTab] = useState('kcet');
  const [openFaq, setOpenFaq] = useState(null);

  const active = quotaTabs.find(t => t.id === activeTab);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <PageHero
        title="Admissions 2026–27"
        subtitle="UG admissions are now open. Management Quota seats available for First Year B.E. Courses."
        breadcrumb="Admissions"
        accent="UG Admissions Open"
      />

      {/* ─── NOTICE BANNER ─── */}
      <section className="bg-amber-50 border-y border-amber-200 py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-3">
          <AlertTriangle size={18} className="text-amber-600 shrink-0" />
          <p className="text-amber-800 text-sm font-medium">
            <strong>Notice:</strong> Admissions for Management Quota seats are open for First Year B.E. Courses for 2026–27 at B.M.S. College of Engineering.
          </p>
        </div>
      </section>

      {/* ─── UG PROGRAMS ─── */}
      <section className="py-20 bg-white border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <span className="text-blue-800 font-mono text-sm tracking-widest uppercase block mb-3">Programs Offered</span>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-slate-900">
              Four-Year B.E. Programs
            </h2>
            <p className="text-slate-500 mt-3 max-w-xl mx-auto text-sm">Affiliated to Visvesvaraya Technological University (VTU), Belagavi</p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {ugPrograms.map((prog, i) => (
              <AnimatedSection key={prog.code} delay={i * 0.04}>
                <motion.div
                  className="flex items-center gap-3 bg-white border border-blue-100 rounded-xl px-4 py-3.5 hover:border-[#1e3a8a]/40 hover:bg-blue-50/50 transition-all duration-200 group"
                  whileHover={{ x: 4 }}
                >
                  <span className="text-[10px] font-bold font-mono text-blue-700 bg-blue-100 px-2 py-1 rounded-lg min-w-[46px] text-center shrink-0">
                    {prog.code}
                  </span>
                  <span className="text-slate-700 text-sm font-medium group-hover:text-blue-800 transition-colors leading-snug">
                    {prog.name}
                  </span>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── QUOTA TABS ─── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <span className="text-blue-800 font-mono text-sm tracking-widest uppercase block mb-3">Admission Routes</span>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-slate-900">
              Choose Your Admission Path
            </h2>
          </AnimatedSection>

          {/* Tab Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {quotaTabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border-2 transition-all duration-250 ${
                  activeTab === tab.id
                    ? `${tab.activeBg} text-white border-transparent shadow-lg`
                    : 'bg-white text-slate-600 border-blue-100 hover:border-[#1e3a8a]/30 hover:text-blue-800'
                }`}
              >
                <span>{tab.icon}</span> {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl border border-blue-100 shadow-sm overflow-hidden"
            >
              {/* Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 px-8 py-6 border-b border-blue-100 bg-blue-50/40">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-2xl">{active.icon}</span>
                    <h3 className="font-serif text-2xl font-semibold text-slate-900">{active.label}</h3>
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${active.badgeColor}`}>
                      {active.badge}
                    </span>
                  </div>
                  <p className="text-slate-500 text-sm ml-9">Entrance Exam: <span className="font-medium text-slate-700">{active.entrance}</span></p>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-blue-100">
                {/* Eligibility */}
                <div className="p-8">
                  <h4 className="text-slate-900 font-semibold mb-4 flex items-center gap-2">
                    <CheckCircle size={16} className="text-green-500" /> Academic Eligibility
                  </h4>
                  <ul className="space-y-3">
                    {active.eligibility.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-slate-600 text-sm leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Process */}
                <div className="p-8">
                  <h4 className="text-slate-900 font-semibold mb-4 flex items-center gap-2">
                    <FileText size={16} className="text-blue-700" /> Admission Process
                  </h4>
                  <ol className="space-y-3">
                    {active.process.map((step, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#1e3a8a]/10 text-blue-800 text-xs font-bold flex items-center justify-center mt-0.5">
                          {i + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              {/* Footer / Note */}
              <div className={`px-8 py-5 border-t border-blue-100 ${active.isWarning ? 'bg-red-50' : 'bg-slate-50'}`}>
                {active.isWarning ? (
                  <div className="space-y-3">
                    <p className="text-red-700 text-sm font-medium flex items-start gap-2">
                      <AlertTriangle size={15} className="mt-0.5 shrink-0" /> {active.note}
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3 text-sm text-slate-600">
                      <div className="flex items-start gap-2">
                        <MapPin size={14} className="text-blue-700 mt-0.5 shrink-0" />
                        <span>{active.address}</span>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <Phone size={13} className="text-blue-700" />
                          <a href={`tel:${active.contactPhone}`} className="hover:text-blue-800">{active.contactPhone}</a>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail size={13} className="text-blue-700" />
                          <a href={`mailto:${active.contactEmail}`} className="hover:text-blue-800">{active.contactEmail}</a>
                        </div>
                        <div className="flex items-start gap-2">
                          <Clock size={13} className="text-blue-700 mt-0.5" />
                          <span className="text-xs text-slate-500">{active.officeHours}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="text-slate-500 text-xs">{active.note}</p>
                    <p className="text-slate-500 text-xs font-medium">{active.contact}</p>
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ─── COURSE-WISE FEE STRUCTURE ─── */}
      <section className="py-20 bg-white border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <span className="text-blue-800 font-mono text-sm tracking-widest uppercase block mb-3">Fee Structure 2026-27</span>
            <h2 className="font-serif text-4xl font-light text-slate-900">Course-wise Approximate Fees</h2>
            <p className="text-slate-500 mt-3 text-sm">Per Year Tuition Fee across different admission quotas (in INR)</p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="overflow-x-auto rounded-2xl border border-blue-100 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#1e3a8a] text-white">
                    <th className="text-left px-6 py-4 font-semibold">B.E. Program</th>
                    <th className="text-right px-6 py-4 font-semibold w-32 border-l border-blue-800">KCET (Govt)</th>
                    <th className="text-right px-6 py-4 font-semibold w-32 border-l border-blue-800">COMEDK</th>
                    <th className="text-right px-6 py-4 font-semibold w-40 border-l border-blue-800">Management</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-blue-50">
                  {[
                    { prog: 'Computer Science & Engineering', kcet: '₹ 1,14,000', comedk: '₹ 2,81,000', mgmt: '₹ 12,00,000*' },
                    { prog: 'Information Science & Engineering', kcet: '₹ 1,14,000', comedk: '₹ 2,81,000', mgmt: '₹ 10,00,000*' },
                    { prog: 'Artificial Intelligence & Machine Learning', kcet: '₹ 1,14,000', comedk: '₹ 2,81,000', mgmt: '₹ 9,00,000*' },
                    { prog: 'Electronics & Communication', kcet: '₹ 1,14,000', comedk: '₹ 2,81,000', mgmt: '₹ 6,00,000*' },
                    { prog: 'Electrical & Electronics', kcet: '₹ 1,14,000', comedk: '₹ 2,81,000', mgmt: '₹ 3,50,000' },
                    { prog: 'Mechanical Engineering', kcet: '₹ 1,14,000', comedk: '₹ 2,81,000', mgmt: '₹ 2,50,000' },
                    { prog: 'Civil Engineering', kcet: '₹ 1,14,000', comedk: '₹ 2,81,000', mgmt: '₹ 2,50,000' },
                    { prog: 'Bio Technology', kcet: '₹ 1,14,000', comedk: '₹ 2,81,000', mgmt: '₹ 3,00,000' },
                    { prog: 'Chemical Engineering', kcet: '₹ 1,14,000', comedk: '₹ 2,81,000', mgmt: '₹ 2,50,000' }
                  ].map((row, i) => (
                    <tr key={i} className={`hover:bg-blue-50/40 transition-colors ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}>
                      <td className="px-6 py-4 font-medium text-slate-800">{row.prog}</td>
                      <td className="px-6 py-4 font-mono text-blue-800 text-right border-l border-blue-50">{row.kcet}</td>
                      <td className="px-6 py-4 font-mono text-blue-800 text-right border-l border-blue-50">{row.comedk}</td>
                      <td className="px-6 py-4 font-mono text-blue-800 text-right border-l border-blue-50 font-semibold">{row.mgmt}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-slate-400 text-xs mt-4 text-center">
              * Note: For premier branches under Management Quota, the fee indicated may represent the total package or a higher baseline. <br className="hidden sm:block"/>
              All fees above are indicative approximations and are subject to change by KEA, COMEDK, or BMS Educational Trust.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── LATERAL ENTRY ─── */}
      <section className="py-16 bg-gradient-to-r from-blue-50 via-white to-blue-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row gap-8 items-start bg-white rounded-2xl border border-blue-100 shadow-sm p-8">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#1e3a8a]/10 flex items-center justify-center">
                <BookOpen size={22} className="text-blue-800" />
              </div>
              <div>
                <span className="text-blue-800 font-mono text-xs tracking-widest uppercase block mb-2">Lateral Entry</span>
                <h3 className="font-serif text-2xl font-semibold text-slate-900 mb-3">3-Year B.E. (Lateral Entry)</h3>
                <p className="text-slate-600 text-sm leading-relaxed max-w-2xl">
                  Candidates who have passed a Diploma examination (or equivalent) are eligible for direct admission to the 2nd year of B.E. through the Lateral Entry Scheme.
                </p>
                <ul className="mt-4 space-y-2">
                  {[
                    'Minimum 45% aggregate in the final year (5th & 6th semesters) of Diploma — General Merit',
                    'Minimum 40% aggregate — SC/ST and Backward Classes of Karnataka',
                    'Admission through KEA Lateral Entry Counselling (DCET)',
                  ].map((pt, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
                      <CheckCircle size={14} className="text-green-500 mt-0.5 shrink-0" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── FAQs ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedSection className="text-center mb-14">
            <span className="text-blue-800 font-mono text-sm tracking-widest uppercase block mb-3">Help</span>
            <h2 className="font-serif text-4xl font-light text-slate-900">Frequently Asked Questions</h2>
          </AnimatedSection>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.06}>
                <div className="bg-white border border-blue-100 rounded-2xl overflow-hidden shadow-sm">
                  <button
                    className="w-full flex items-center gap-4 px-6 py-5 text-left hover:bg-blue-50/40 transition-colors"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <HelpCircle size={17} className="text-blue-700 shrink-0" />
                    <span className="text-slate-900 font-medium flex-1 text-sm">{faq.q}</span>
                    <motion.span animate={{ rotate: openFaq === i ? 45 : 0 }} className="text-slate-400 text-xl shrink-0">+</motion.span>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 pl-14 text-slate-600 text-sm leading-relaxed border-t border-blue-50 pt-4">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Contact */}
          <AnimatedSection className="mt-14 bg-[#1e3a8a] rounded-2xl p-8 text-center">
            <Users size={28} className="text-blue-200 mx-auto mb-3" />
            <h4 className="text-white font-serif text-xl font-semibold mb-2">Admissions Office</h4>
            <p className="text-blue-200 text-sm mb-5">P.O. Box No. 1908, Bull Temple Road, Bengaluru – 560 019</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="tel:08026622130" className="flex items-center justify-center gap-2 bg-white text-[#1e3a8a] font-semibold px-6 py-2.5 rounded-full hover:bg-blue-50 transition-colors text-sm">
                <Phone size={15} /> 080-26622130 / 31 / 32
              </a>
              <a href="mailto:info@bmsce.ac.in" className="flex items-center justify-center gap-2 border-2 border-white/40 text-white font-semibold px-6 py-2.5 rounded-full hover:bg-white/10 transition-colors text-sm">
                <Mail size={15} /> info@bmsce.ac.in
              </a>
            </div>
            <p className="text-blue-300 text-xs mt-4">Fax: +91-80-26614357</p>
          </AnimatedSection>
        </div>
      </section>
    </motion.div>
  );
}
