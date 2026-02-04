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
      className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:scale-105"
    >
      <div className="text-4xl mb-4">{training.icon}</div>
      <h3 className="text-xl font-bold mb-2 text-slate-100">{training.title}</h3>
      <div className="text-blue-400 font-medium mb-2">{training.issuer}</div>
      <div className="flex items-center justify-between text-sm text-slate-400">
        <span>{training.date}</span>
        <span className="px-3 py-1 bg-slate-700/50 rounded-full text-xs">
          {training.credential}
        </span>
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
