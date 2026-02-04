import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';
import emailjs from 'emailjs-com';
import { portfolioData } from '../data/portfolioData';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { personal, socials } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState({ type: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: '', message: '' });

    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', message: 'Please fill in all required fields.' });
      setIsLoading(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address.' });
      setIsLoading(false);
      return;
    }

    try {
      // Note: Replace with your EmailJS credentials
      // You need to set up EmailJS account and get these values
      // await emailjs.send(
      //   'YOUR_SERVICE_ID',
      //   'YOUR_TEMPLATE_ID',
      //   formData,
      //   'YOUR_PUBLIC_KEY'
      // );

      // Simulated success for demo
      setTimeout(() => {
        setStatus({ type: 'success', message: 'Message sent successfully! I\'ll get back to you soon.' });
        setFormData({ name: '', email: '', subject: '', message: '' });
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-16" />

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold mb-6">Let's talk about everything!</h3>
                <p className="text-slate-400 mb-8">
                  Feel free to reach out if you want to collaborate on a project, have a question, or just want to connect.
                </p>
              </div>

              {/* Download CV */}
              <a
                href={personal.cvUrl}
                download
                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
              >
                <HiDownload className="text-xl" />
                Download CV
              </a>

              {/* Contact Details */}
              <div className="space-y-4">
                <a
                  href={`mailto:${personal.email}`}
                  className="flex items-center gap-4 text-slate-300 hover:text-blue-400 transition-colors"
                >
                  <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center">
                    <FaEnvelope className="text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">Email</div>
                    <div>{personal.email}</div>
                  </div>
                </a>

                <a
                  href={`tel:${personal.phone}`}
                  className="flex items-center gap-4 text-slate-300 hover:text-blue-400 transition-colors"
                >
                  <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center">
                    <FaPhone className="text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">Phone</div>
                    <div>{personal.phone}</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-slate-300">
                  <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center">
                    <FaMapMarkerAlt className="text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">Location</div>
                    <div>{personal.location}</div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 pt-4">
                <a
                  href={socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:text-blue-400 hover:bg-slate-700 transition-all"
                >
                  <FaGithub className="text-xl" />
                </a>
                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:text-blue-400 hover:bg-slate-700 transition-all"
                >
                  <FaLinkedin className="text-xl" />
                </a>
                <a
                  href={socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:text-blue-400 hover:bg-slate-700 transition-all"
                >
                  <FaTwitter className="text-xl" />
                </a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name *"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 text-slate-100 transition-colors"
                    required
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email *"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 text-slate-100 transition-colors"
                    required
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 text-slate-100 transition-colors"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message *"
                    rows="6"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 text-slate-100 resize-none transition-colors"
                    required
                  />
                </div>

                {status.message && (
                  <div
                    className={`p-4 rounded-lg ${
                      status.type === 'success' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                    }`}
                  >
                    {status.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
