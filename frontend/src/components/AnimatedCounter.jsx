import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

export default function AnimatedCounter({ end, suffix = '', prefix = '', duration = 2.5, label, sublabel }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <div ref={ref} className="text-center">
      <div className="font-serif text-5xl md:text-6xl font-light text-white mb-2">
        <span className="text-[#C9A84C]">{prefix}</span>
        {inView ? (
          <CountUp end={end} duration={duration} separator="," />
        ) : (
          <span>0</span>
        )}
        <span className="text-[#C9A84C]">{suffix}</span>
      </div>
      <div className="text-white font-medium tracking-wide">{label}</div>
      {sublabel && <div className="text-white/50 text-sm mt-1">{sublabel}</div>}
    </div>
  );
}
