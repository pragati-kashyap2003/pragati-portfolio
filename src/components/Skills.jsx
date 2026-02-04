import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { portfolioData } from '../data/portfolioData';

const SkillBar = ({ skill, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-6"
    >
      <div className="flex justify-between mb-2">
        <span className="text-slate-200 font-medium">{skill.name}</span>
        <span className="text-blue-400">{skill.level}%</span>
      </div>
      <div className="w-full bg-slate-800 rounded-full h-3 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full relative"
        >
          <div className="absolute inset-0 bg-white/20 animate-pulse" />
        </motion.div>
      </div>
    </motion.div>
  );
};

const SkillCategory = ({ title, skills, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="bg-slate-800/30 p-8 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300"
    >
      <h3 className="text-2xl font-bold mb-6 text-gradient">{title}</h3>
      {skills.map((skill, index) => (
        <SkillBar key={skill.name} skill={skill} index={index} />
      ))}
    </motion.div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-20 md:py-32 relative bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-16" />

          <div className="grid md:grid-cols-2 gap-8">
            <SkillCategory title="Frontend Development" skills={skills.frontend} delay={0.2} />
            <SkillCategory title="Backend Development" skills={skills.backend} delay={0.3} />
            <SkillCategory title="Tools & Technologies" skills={skills.tools} delay={0.4} />
            <SkillCategory title="Soft Skills" skills={skills.soft} delay={0.5} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
