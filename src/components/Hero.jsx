import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiChevronDown } from 'react-icons/hi';
import { Link } from 'react-scroll';
import { portfolioData } from '../data/portfolioData';

const Hero = () => {
  const { personal, socials } = portfolioData;

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden grid-bg">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Avatar */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-xl opacity-50 animate-pulse" />
              <img
                src={personal.avatar}
                alt={personal.name}
                className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-blue-500/50 object-cover"
              />
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            <span className="text-gradient">{personal.name}</span>
          </motion.h1>

          {/* Title */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-2xl md:text-3xl text-slate-300 mb-4"
          >
            {personal.title}
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mb-8"
          >
            {personal.tagline}
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex gap-6 mb-12"
          >
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-slate-400 hover:text-blue-400 transition-all duration-300 hover:scale-110"
            >
              <FaGithub />
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-slate-400 hover:text-blue-400 transition-all duration-300 hover:scale-110"
            >
              <FaLinkedin />
            </a>
            <a
              href={socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-slate-400 hover:text-blue-400 transition-all duration-300 hover:scale-110"
            >
              <FaTwitter />
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-4xl text-blue-400"
              >
                <HiChevronDown />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
