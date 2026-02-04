import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { portfolioData } from '../data/portfolioData';

const EducationCard = ({ edu, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`relative flex ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 mb-12`}
    >
      {/* Timeline dot */}
      <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full z-10 ring-4 ring-slate-900" />

      {/* Content */}
      <div className={`md:w-1/2 ${isEven ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
        <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
          <div className="text-4xl mb-3">{edu.icon}</div>
          <h3 className="text-2xl font-bold mb-2 text-slate-100">{edu.degree}</h3>
          <div className="text-blue-400 font-medium mb-2">{edu.institution}</div>
          <div className="text-slate-400 text-sm mb-2">{edu.location}</div>
          <div className="text-slate-500 text-sm mb-3">{edu.period}</div>
          <p className="text-slate-300">{edu.description}</p>
        </div>
      </div>

      {/* Empty space for alternating layout */}
      <div className="hidden md:block md:w-1/2" />
    </motion.div>
  );
};

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            My <span className="text-gradient">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-16" />

          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-600 opacity-20" />

          {/* Education items */}
          <div className="relative">
            {education.map((edu, index) => (
              <EducationCard key={edu.id} edu={edu} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
