import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { portfolioData } from '../data/portfolioData';

const TrainingCard = ({ training, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
  ref={ref}
  initial={{ opacity: 0, scale: 0.8 }}
  animate={isInView ? { opacity: 1, scale: 1 } : {}}
  transition={{ duration: 0.5, delay: index * 0.1 }}
  whileHover={{ 
    y: -8,
    scale: 1.05,
    boxShadow: "0 20px 50px rgba(59, 130, 246, 0.4)",
    borderColor: "#3b82f6"
  }}
  className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 transition-all duration-300 cursor-pointer"
>
      <div className="text-4xl mb-4">{training.icon}</div>
      <h3 className="text-xl font-bold mb-2 text-slate-100">{training.title}</h3>
      <div className="text-blue-400 font-medium mb-2">{training.issuer}</div>
      <div className="flex items-center justify-between text-sm text-slate-400">
        <span>{training.date}</span>
        <a
          href={training.credential}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-1 bg-blue-600 text-white rounded-full text-xs font-semibold hover:bg-blue-500 transition"
        >
          🔗 View Credential
        </a>
      </div>
    </motion.div>
  );
};

const Training = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { training } = portfolioData;

  return (
    <section id="training" className="py-20 md:py-32 relative bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Training & <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-16" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {training.map((item, index) => (
              <TrainingCard key={item.id} training={item} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Training;
