import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, 
  Mail, 
  Award, 
  Briefcase, 
  GraduationCap, 
  Code, 
  Server, 
  Sparkles, 
  Cloud, 
  Database, 
  Cpu, 
  Menu, 
  X, 
  ArrowUpRight, 
  FileText, 
  Phone,
  CheckCircle,
  Copy,
  ChevronRight
} from 'lucide-react';

const Github = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);


// Custom typewriter hook
const useTypewriter = (words, typingSpeed = 80, deletingSpeed = 40, delayBetween = 1800) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const activeWord = words[currentWordIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(activeWord.substring(0, currentText.length - 1));
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setCurrentText(activeWord.substring(0, currentText.length + 1));
      }, typingSpeed);
    }

    if (!isDeleting && currentText === activeWord) {
      timer = setTimeout(() => setIsDeleting(true), delayBetween);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, delayBetween]);

  return currentText;
};

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedText, setCopiedText] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const typewriterWords = [
    "Software Apprentice at Google",
    "Backend Developer",
    "Cloud-Native Engineer",
    "Competitive Programmer"
  ];
  
  const currentRole = useTypewriter(typewriterWords);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedText(type);
    setTimeout(() => setCopiedText(''), 2000);
  };

  // Smooth scroll
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] text-gray-100 selection:bg-blue-500/30 selection:text-blue-200">
      {/* Background Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/10 blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-500/10 blur-[120px] animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Navigation Header */}
      <header className="sticky top-0 z-50 glass-panel border-b border-white/5 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <motion.a 
            href="#home" 
            onClick={(e) => handleScroll(e, 'home')}
            className="text-xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:opacity-85 transition-opacity"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Om Trivedi
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-400">
            {['home', 'experience', 'skills', 'projects', 'achievements', 'education', 'contact'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item}`}
                onClick={(e) => handleScroll(e, item)}
                className="hover:text-blue-400 capitalize transition-colors duration-200"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                {item}
              </motion.a>
            ))}
          </nav>

          {/* Social Links & CTA - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="/OM_TRIVEDI_RESUME.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 h-10 rounded-lg text-xs font-semibold bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all text-gray-200"
            >
              <FileText className="w-3.5 h-3.5" />
              Resume
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleScroll(e, 'contact')}
              className="flex items-center gap-1.5 px-4 h-10 rounded-lg text-xs font-semibold bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all shadow-md shadow-blue-500/20 text-white"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 top-20 z-40 bg-[#030712]/95 backdrop-blur-lg md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="flex flex-col p-6 space-y-6 text-lg font-medium text-gray-300">
              {['home', 'experience', 'skills', 'projects', 'achievements', 'education', 'contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={(e) => handleScroll(e, item)}
                  className="hover:text-blue-400 capitalize transition-colors py-2 border-b border-white/5"
                >
                  {item}
                </a>
              ))}
              <div className="flex gap-4 pt-4">
                <a 
                  href="/OM_TRIVEDI_RESUME.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-lg text-sm font-semibold bg-white/5 border border-white/10 text-gray-200"
                >
                  <FileText className="w-4 h-4" />
                  Resume
                </a>
                <a 
                  href="#contact" 
                  onClick={(e) => handleScroll(e, 'contact')}
                  className="flex-1 flex items-center justify-center gap-1.5 py-3.5 rounded-lg text-sm font-semibold bg-blue-500 text-white font-medium"
                >
                  Hire Me
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HERO SECTION */}
        <section id="home" className="min-h-[calc(100vh-80px)] flex flex-col md:flex-row items-center justify-center gap-12 py-16 md:py-24">
          <div className="flex-1 space-y-6 text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border-blue-500/20 text-xs font-semibold text-blue-400 shadow-sm shadow-blue-500/5 glow-blue"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>Google Apprentice</span>
            </motion.div>

            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Hi, I'm <span className="gradient-text">Om Trivedi</span>
            </motion.h1>

            <motion.div 
              className="h-10 text-xl sm:text-2xl font-semibold text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              I am a <span className="text-blue-400 border-r-2 border-blue-400/80 pr-1 animate-pulse">{currentRole}</span>
            </motion.div>

            <motion.p 
              className="text-gray-400 max-w-xl text-base sm:text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Software Application Development Apprentice at Google. Passionate about building robust, cloud-native services, GenAI agent workflows, and resolving complex scale challenges. Specialist competitive programmer.
            </motion.p>

            {/* Social Icons & CTAs */}
            <motion.div 
              className="flex flex-wrap gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a 
                href="#contact"
                onClick={(e) => handleScroll(e, 'contact')}
                className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg shadow-blue-500/20 hover:scale-[1.02] transition-all"
              >
                Let's Connect
              </a>
              <a 
                href="/OM_TRIVEDI_RESUME.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all text-gray-200"
              >
                <FileText className="w-4 h-4 text-blue-400" />
                Download CV
              </a>
            </motion.div>

            <motion.div 
              className="flex items-center gap-5 pt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {[
                { icon: <Linkedin className="w-5 h-5" />, url: "https://linkedin.com/in/om-trivedi-8a1411224", name: "LinkedIn" },
                { icon: <Github className="w-5 h-5" />, url: "https://github.com/omtrivedioo3", name: "GitHub" },
                { icon: <Code className="w-5 h-5" />, url: "https://leetcode.com/omtrivedioo3", name: "LeetCode" },
                { icon: <Server className="w-5 h-5" />, url: "https://codeforces.com/profile/omtrivedioo3", name: "Codeforces" }
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-white/5 border border-white/5 text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 hover:border-blue-500/20 transition-all duration-300"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Photo Column */}
          <div className="flex-1 flex justify-center items-center">
            <motion.div 
              className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[360px] md:h-[360px]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
            >
              {/* Spinning gradient border backdrop */}
              <div className="absolute inset-[-4px] rounded-3xl bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 opacity-75 blur-md animate-pulse"></div>
              
              <div className="absolute inset-0 rounded-3xl overflow-hidden glass-panel border border-white/10 glow-purple flex justify-center items-center animate-float">
                <img 
                  src="/images/om_photo1.jpg" 
                  alt="Om Trivedi photo"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-[1.02] hover:scale-[1.05]"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1000"; // Fallback URL
                  }}
                />

                {/* Floating Micro-Badge */}
                <div className="absolute bottom-4 left-4 right-4 glass-panel border border-white/10 rounded-xl p-3 flex items-center justify-between shadow-xl">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-2.5 w-2.5 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                    </span>
                    <div className="text-left">
                      <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Currently at</div>
                      <div className="text-xs font-semibold text-white">Google India</div>
                    </div>
                  </div>
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" 
                    alt="Google Logo" 
                    className="h-3.5 opacity-90"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SPOTLIGHT / GOOGLE BULLETPOINTS */}
        <section id="spotlight" className="py-8">
          <motion.div 
            className="glass-panel border-blue-500/20 rounded-2xl p-6 sm:p-8 relative overflow-hidden glow-google"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Spotlight background shapes */}
            <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-blue-500/5 blur-3xl pointer-events-none"></div>
            
            <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
              <div className="text-left space-y-3 lg:max-w-md">
                <div className="inline-flex items-center gap-1 text-xs font-bold text-blue-400 uppercase tracking-widest">
                  <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '4s' }} />
                  Spotlight
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Apprentice Journey @ <span className="text-[#4285F4]">G</span><span className="text-[#EA4335]">o</span><span className="text-[#FBBC05]">o</span><span className="text-[#4285F4]">g</span><span className="text-[#34A853]">l</span><span className="text-[#EA4335]">e</span>
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Working alongside Google engineers in Gurgaon, building cloud-native infrastructure, diving deep into Retrieval-Augmented Generation, Agentic workflows, and Google Cloud Platform.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full lg:flex-1">
                {[
                  { title: "GenAI & Agents", desc: "Exploring LLMs, Agentic AI, RAG architecture, and Vector Databases." },
                  { title: "GCP Services", desc: "Developing cloud-native systems with advanced GCP serverless & compute services." },
                  { title: "Production Workflows", desc: "Adhering to strict system design fundamentals, code reviews, and enterprise quality." }
                ].map((spot, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-left space-y-1">
                    <div className="text-xs font-bold text-gray-300 flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-400"></span>
                      {spot.title}
                    </div>
                    <p className="text-[11px] text-gray-400 leading-normal">{spot.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* WORK EXPERIENCE */}
        <section id="experience" className="py-20 text-left relative">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-2">Career History</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Work Experience</h2>
            </div>
            <p className="text-gray-400 text-sm max-w-xs mt-2 md:mt-0">
              Building robust systems and deploying high-performance services in enterprises and cloud-native setups.
            </p>
          </div>

          <div className="relative border-l border-white/10 pl-6 sm:pl-8 space-y-12 ml-4">
            
            {/* Timeline Item 1: Google */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* Pin */}
              <div className="absolute -left-[37px] sm:-left-[45px] top-1.5 flex items-center justify-center w-8 h-8 rounded-full bg-blue-500/10 border-2 border-blue-500 text-blue-400 font-bold text-sm shadow-md glow-blue">
                G
              </div>
              
              <div className="glass-panel border-blue-500/20 rounded-2xl p-6 sm:p-8 hover:border-blue-500/40 hover:bg-white/[0.04] transition-all shadow-lg glow-google">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">Software Application Development Apprentice</h3>
                    <div className="text-sm text-blue-400 font-medium">Google</div>
                  </div>
                  <div className="text-xs font-bold bg-blue-500/15 border border-blue-500/25 text-blue-300 px-3 py-1 rounded-full w-fit">
                    Mar 2026 – Present | Gurgaon
                  </div>
                </div>

                <ul className="space-y-2.5 text-gray-400 text-sm">
                  <li className="flex gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>Learning and working with Google Cloud Platform (GCP) services, gaining hands-on experience in cloud-native application development and deployment.</span>
                  </li>
                  <li className="flex gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>Exploring LLMs, Retrieval-Augmented Generation (RAG), vector databases, and agent-based workflows through internal projects and technical learning initiatives.</span>
                  </li>
                  <li className="flex gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>Collaborating with engineers and mentors to understand software development best practices, system design fundamentals, code reviews, and production-scale engineering workflows.</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Timeline Item 2: Synoptek ASE */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {/* Pin */}
              <div className="absolute -left-[37px] sm:-left-[45px] top-1.5 flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/10 border-2 border-purple-500 text-purple-400 font-bold text-xs shadow-md glow-purple">
                S
              </div>

              <div className="glass-panel border-white/5 rounded-2xl p-6 sm:p-8 hover:border-purple-500/20 hover:bg-white/[0.04] transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">Associate Software Engineer</h3>
                    <div className="text-sm text-purple-400 font-medium">Synoptek</div>
                  </div>
                  <div className="text-xs font-bold bg-purple-500/15 border border-purple-500/25 text-purple-300 px-3 py-1 rounded-full w-fit">
                    Oct 2025 – Mar 2026 | Ahmedabad
                  </div>
                </div>

                <ul className="space-y-2.5 text-gray-400 text-sm">
                  <li className="flex gap-2">
                    <ChevronRight className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span>Designed and developed 20+ REST APIs in .NET Core following Clean Architecture principles, reducing average API response time by 20% and improving overall system scalability.</span>
                  </li>
                  <li className="flex gap-2">
                    <ChevronRight className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span>Built efficient Node.js data services over SQL Server and Google BigQuery, processing and managing 100k+ records with optimized query performance.</span>
                  </li>
                  <li className="flex gap-2">
                    <ChevronRight className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span>Deployed and operated cloud services on AWS and GCP; set up CI/CD pipelines using Docker and GitHub Actions, reducing deployment time and improving release reliability.</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Timeline Item 3: Synoptek Intern */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* Pin */}
              <div className="absolute -left-[37px] sm:-left-[45px] top-1.5 flex items-center justify-center w-8 h-8 rounded-full bg-gray-500/15 border-2 border-gray-600 text-gray-400 font-bold text-xs shadow-md">
                S
              </div>

              <div className="glass-panel border-white/5 rounded-2xl p-6 sm:p-8 hover:border-gray-500/25 hover:bg-white/[0.04] transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">Software Developer Intern</h3>
                    <div className="text-sm text-gray-400 font-medium">Synoptek</div>
                  </div>
                  <div className="text-xs font-bold bg-gray-800 border border-gray-700 text-gray-300 px-3 py-1 rounded-full w-fit">
                    Jan 2025 – Sept 2025 | Ahmedabad
                  </div>
                </div>

                <ul className="space-y-2.5 text-gray-400 text-sm">
                  <li className="flex gap-2">
                    <ChevronRight className="w-4 h-4 text-gray-500 shrink-0 mt-0.5" />
                    <span>Built and optimized REST APIs using Node.js/Express and .NET, applying Clean Architecture and modular design patterns to improve response time by 15–20%.</span>
                  </li>
                  <li className="flex gap-2">
                    <ChevronRight className="w-4 h-4 text-gray-500 shrink-0 mt-0.5" />
                    <span>Deployed serverless and containerized services on AWS (Lambda, API Gateway, S3, RDS) using Docker, contributing to production-grade scalable infrastructure.</span>
                  </li>
                  <li className="flex gap-2">
                    <ChevronRight className="w-4 h-4 text-gray-500 shrink-0 mt-0.5" />
                    <span>Contributed to full-stack development using React (MERN stack), delivering responsive front-end features integrated with backend APIs.</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* TECHNICAL SKILLS */}
        <section id="skills" className="py-20 text-left">
          <div className="mb-12">
            <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-2">My Toolbox</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Technical Skills</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                category: "AI & Generative AI",
                icon: <Sparkles className="w-5 h-5 text-purple-400" />,
                color: "border-purple-500/20 shadow-purple-500/5 glow-purple",
                skills: ["LLMs", "Retrieval-Augmented Generation (RAG)", "Agentic AI Workflows", "Vector Databases", "Embeddings", "AI Automation"]
              },
              {
                category: "Backend Development",
                icon: <Server className="w-5 h-5 text-blue-400" />,
                color: "border-blue-500/20 shadow-blue-500/5 glow-blue",
                skills: [".NET Core", "Node.js", "Express.js", "REST APIs", "Microservices", "Clean Architecture", "Distributed Systems"]
              },
              {
                category: "Cloud & DevOps",
                icon: <Cloud className="w-5 h-5 text-sky-400" />,
                color: "border-sky-500/20",
                skills: ["Google Cloud Platform (GCP)", "AWS (Lambda, S3, RDS, API Gateway)", "Docker", "CI/CD Pipelines", "GitHub Actions", "Git"]
              },
              {
                category: "Programming Languages",
                icon: <Code className="w-5 h-5 text-amber-400" />,
                color: "border-amber-500/20",
                skills: ["C++", "C#", "Python", "JavaScript", "Java", "SQL"]
              },
              {
                category: "Databases & Warehousing",
                icon: <Database className="w-5 h-5 text-emerald-400" />,
                color: "border-emerald-500/20",
                skills: ["MongoDB", "Google BigQuery", "SQL Server", "MySQL"]
              },
              {
                category: "Frontend Development",
                icon: <Cpu className="w-5 h-5 text-rose-400" />,
                color: "border-rose-500/20",
                skills: ["React.js", "Angular", "HTML5", "CSS3 / Tailwind CSS", "JavaScript (ES6+)"]
              }
            ].map((cat, index) => (
              <motion.div
                key={cat.category}
                className={`glass-panel rounded-2xl p-6 flex flex-col justify-between border ${cat.color} glass-panel-hover`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                      {cat.icon}
                    </div>
                    <h3 className="font-bold text-white text-base">{cat.category}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span 
                        key={skill}
                        className="text-xs font-semibold px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-blue-500/10 hover:text-blue-300 border border-white/5 hover:border-blue-500/20 transition-all cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-20 text-left">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-2">Recent Creations</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Featured Projects</h2>
            </div>
            
            {/* Filter Tabs */}
            <div className="flex gap-2 mt-4 md:mt-0 overflow-x-auto pb-1 max-w-full">
              {['all', 'web', 'machine learning'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all duration-200 border ${
                    activeTab === tab
                      ? 'bg-blue-500/15 border-blue-500/30 text-blue-400'
                      : 'bg-white/5 border-white/5 text-gray-400 hover:text-gray-200 hover:bg-white/10'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                id: "bitezy",
                category: "web",
                title: "Bitezy",
                tagline: "Full-Stack Food Delivery Platform",
                desc: "Engineered a production-deployed, multi-service food delivery system featuring customer, restaurant, and delivery agent portals, menu management, real-time order tracking, and analytics dashboards.",
                stack: ["React.js", "Node.js", "Express.js", "MongoDB", "AWS", "WebSockets", "Google Maps"],
                live: "https://www.bitezy.in",
                github: "https://github.com/omtrivedioo3",
                stars: "Production",
                image: "/images/fili_intro.jpg" // We can use the image fili_intro.jpg which is already in the project images!
              },
              {
                id: "chatapp",
                category: "web",
                title: "Real-Time Chat Application",
                tagline: "Socket.io Chat Suite",
                desc: "A rich chat platform supporting secure private and group conversations. Integrated WebSockets for instant, low-latency messaging, active status tracking, and modern notification indicators.",
                stack: ["React.js", "Node.js", "MongoDB", "Socket.io", "JWT Auth", "CSS3"],
                live: "https://chat-app-qs6f.onrender.com",
                github: "https://github.com/omtrivedioo3",
                stars: "Active"
              },
              {
                id: "netsec",
                category: "machine learning",
                title: "Network Security ML",
                tagline: "Intrusion Detection Model",
                desc: "Developed a robust machine learning classification model to detect malicious network traffic. Preprocessed network packet datasets and achieved high precision metrics on security classifications.",
                stack: ["Python", "Scikit-learn", "Pandas", "NumPy", "ML Classification"],
                github: "https://github.com/omtrivedioo3/NetworkSecurityML",
                stars: "ML/Security"
              },
              {
                id: "eduscore",
                category: "machine learning",
                title: "EduScore ML",
                tagline: "Academic Predictor",
                desc: "Designed and trained supervised regression models to predict student academic performance. Analyzed socioeconomic and study patterns to deliver predictive score insights.",
                stack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Regression Models"],
                github: "https://github.com/omtrivedioo3/EduScoreML",
                stars: "ML/Analytics"
              }
            ]
            .filter(project => activeTab === 'all' || project.category === activeTab)
            .map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="glass-panel rounded-2xl overflow-hidden flex flex-col border border-white/5 hover:border-blue-500/20 group hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
              >
                {/* Visual Header/Banner for the card */}
                <div className="h-44 bg-gradient-to-br from-blue-950/40 via-[#0a0f1d] to-[#030712] relative flex items-center justify-center p-6 border-b border-white/5 overflow-hidden">
                  <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                  
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-35 group-hover:opacity-50 transition-opacity duration-300"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                  )}

                  <div className="relative text-center z-10">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-full border border-blue-500/20">
                      {project.stars}
                    </span>
                    <h4 className="text-2xl font-bold mt-2.5 text-white group-hover:scale-105 transition-transform duration-300">{project.title}</h4>
                    <p className="text-xs text-gray-400 font-medium mt-1">{project.tagline}</p>
                  </div>
                </div>

                {/* Card Info */}
                <div className="p-6 flex-1 flex flex-col justify-between text-left space-y-4">
                  <p className="text-gray-400 text-sm leading-relaxed flex-1">
                    {project.desc}
                  </p>

                  <div className="space-y-4">
                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.map(tech => (
                        <span key={tech} className="text-[10px] font-semibold px-2 py-0.5 rounded bg-white/5 text-gray-300">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex gap-4 pt-2 border-t border-white/5 text-xs font-bold uppercase tracking-wider">
                      {project.live && (
                        <a 
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          Live Site
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors"
                      >
                        GitHub Link
                        <Github className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CP STATS & ACHIEVEMENTS */}
        <section id="achievements" className="py-20 text-left">
          <div className="mb-12">
            <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-2">Showcase</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Competitive Programming & Achievements</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Stat 1: LeetCode Knight */}
            <motion.div 
              className="glass-panel border-amber-500/20 rounded-2xl p-6 hover:border-amber-500/40 hover:scale-[1.02] transition-all relative overflow-hidden group shadow-lg shadow-amber-500/5 glow-purple"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-amber-500/5 blur-xl group-hover:bg-amber-500/10 transition-colors"></div>
              
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20">
                  <Award className="w-6 h-6 text-amber-400" />
                </div>
                <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-amber-500/15 border border-amber-500/25 text-amber-300">
                  1800+ rating
                </span>
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">LeetCode Knight</h3>
              <p className="text-xs text-gray-400 leading-relaxed mt-2">
                Top competitive programming tier. Consistently solved 1800+ rated challenges.
              </p>
              <a 
                href="https://leetcode.com/omtrivedioo3" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-amber-300 hover:text-amber-200"
              >
                View Profile <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </motion.div>

            {/* Stat 2: Codeforces Specialist */}
            <motion.div 
              className="glass-panel border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-500/40 hover:scale-[1.02] transition-all relative overflow-hidden group shadow-lg shadow-cyan-500/5 glow-blue"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 }}
            >
              <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-cyan-500/5 blur-xl group-hover:bg-cyan-500/10 transition-colors"></div>

              <div className="flex justify-between items-start mb-6">
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
                  <Code className="w-6 h-6 text-cyan-400" />
                </div>
                <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/25 text-cyan-300">
                  Specialist
                </span>
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">Codeforces Specialist</h3>
              <p className="text-xs text-gray-400 leading-relaxed mt-2">
                Solved 2000+ complex logic problems. Ranked globally in active algorithmic contests.
              </p>
              <a 
                href="https://codeforces.com/profile/omtrivedioo3" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-cyan-300 hover:text-cyan-200"
              >
                View Profile <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </motion.div>

            {/* Stat 3: CodeVita Rank */}
            <motion.div 
              className="glass-panel border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/40 hover:scale-[1.02] transition-all relative overflow-hidden group shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-purple-500/5 blur-xl group-hover:bg-purple-500/10 transition-colors"></div>

              <div className="flex justify-between items-start mb-6">
                <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20">
                  <Award className="w-6 h-6 text-purple-400" />
                </div>
                <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-purple-500/15 border border-purple-500/25 text-purple-300">
                  Rank 894
                </span>
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">TCS CodeVita</h3>
              <p className="text-xs text-gray-400 leading-relaxed mt-2">
                Achieved a global rank of 894 out of 100k+ global participants in CodeVita Season 11.
              </p>
              <div className="mt-5 text-[10px] font-extrabold text-purple-300 uppercase tracking-widest">
                Global Code Contest
              </div>
            </motion.div>

            {/* Stat 4: Hackathon Runner up */}
            <motion.div 
              className="glass-panel border-rose-500/20 rounded-2xl p-6 hover:border-rose-500/40 hover:scale-[1.02] transition-all relative overflow-hidden group shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
            >
              <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-rose-500/5 blur-xl group-hover:bg-rose-500/10 transition-colors"></div>

              <div className="flex justify-between items-start mb-6">
                <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20">
                  <Cpu className="w-6 h-6 text-rose-400" />
                </div>
                <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-rose-500/15 border border-rose-500/25 text-rose-300">
                  Runners-up
                </span>
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-rose-400 transition-colors">SSIP Hackathon</h3>
              <p className="text-xs text-gray-400 leading-relaxed mt-2">
                Runners-up among 100+ competing product teams building innovative solutions.
              </p>
              <div className="mt-5 text-[10px] font-extrabold text-rose-300 uppercase tracking-widest">
                State Hackathon
              </div>
            </motion.div>
            
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="py-20 text-left">
          <div className="mb-12">
            <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-2">Qualifications</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Education Background</h2>
          </div>

          <motion.div 
            className="glass-panel border-white/5 rounded-2xl p-6 sm:p-8 hover:border-blue-500/25 transition-all max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                <GraduationCap className="w-8 h-8" />
              </div>

              <div className="space-y-3 flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                  <h3 className="text-xl font-bold text-white">Bachelor of Engineering in Computer Engineering</h3>
                  <span className="text-xs font-bold bg-white/5 border border-white/10 text-gray-300 px-3 py-1 rounded-full w-fit">
                    Aug 2021 – Apr 2025
                  </span>
                </div>
                <div className="text-sm text-blue-400 font-medium">LDRP Institute of Technology and Research</div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Gandhinagar, Gujarat, India
                </p>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-green-400 bg-green-500/10 border border-green-500/20 px-3 py-1.5 rounded-lg">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>CGPA: 8.11 / 10.0</span>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* CONTACT ME */}
        <section id="contact" className="py-20 text-left">
          <div className="mb-12">
            <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-2">Get In Touch</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Contact Me</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact cards info */}
            <div className="lg:col-span-5 space-y-6">
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                Have a challenging role, project idea, or simply want to speak competitive programming or cloud architectures? Shoot me an email!
              </p>

              <div className="space-y-4">
                
                {/* Email Info */}
                <div className="glass-panel border-white/5 p-5 rounded-2xl flex items-center justify-between group hover:border-blue-500/20 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Email Address</div>
                      <div className="text-sm font-semibold text-white">omtrivedioo3@gmail.com</div>
                    </div>
                  </div>
                  <button 
                    onClick={() => copyToClipboard('omtrivedioo3@gmail.com', 'email')}
                    className="p-2.5 rounded-lg bg-white/5 border border-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                    title="Copy Email"
                  >
                    {copiedText === 'email' ? <CheckCircle className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Info */}
                <div className="glass-panel border-white/5 p-5 rounded-2xl flex items-center justify-between group hover:border-blue-500/20 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Contact Number</div>
                      <div className="text-sm font-semibold text-white">+91 9724983981</div>
                    </div>
                  </div>
                  <button 
                    onClick={() => copyToClipboard('+919724983981', 'phone')}
                    className="p-2.5 rounded-lg bg-white/5 border border-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                    title="Copy Phone"
                  >
                    {copiedText === 'phone' ? <CheckCircle className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Form Callout */}
                <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-950/20 via-purple-950/20 to-pink-950/20 border border-white/5 text-xs text-gray-400 leading-relaxed">
                  👋 Connecting via LinkedIn is also highly encouraged. Let's grow our network professionally!
                </div>

              </div>
            </div>

            {/* Email form panel */}
            <div className="lg:col-span-7">
              <motion.div 
                className="glass-panel border-white/5 rounded-3xl p-6 sm:p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {formSubmitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="mx-auto w-12 h-12 rounded-full bg-green-500/15 border border-green-500/35 flex items-center justify-center text-green-400">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Message Ready!</h3>
                    <p className="text-sm text-gray-400 max-w-sm mx-auto">
                      Click the button below to send your pre-filled message through your default email client.
                    </p>
                    <a
                      href={`mailto:omtrivedioo3@gmail.com?subject=Portfolio Message&body=Hi Om,%0D%0D`}
                      className="inline-flex items-center gap-1.5 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-green-600 hover:bg-green-700 text-white transition-all shadow-lg"
                      onClick={() => setFormSubmitted(false)}
                    >
                      Open Email App <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                ) : (
                  <form 
                    onSubmit={(e) => {
                      e.preventDefault();
                      const formData = new FormData(e.target);
                      const name = formData.get('name');
                      const email = formData.get('email');
                      const message = formData.get('message');
                      const mailtoUrl = `mailto:omtrivedioo3@gmail.com?subject=Contact from ${encodeURIComponent(name)}&body=Sender Email: ${encodeURIComponent(email)}%0D%0DMessage:%0D${encodeURIComponent(message)}`;
                      window.location.href = mailtoUrl;
                      setFormSubmitted(true);
                    }}
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider" htmlFor="form-name">Name</label>
                        <input 
                          type="text" 
                          id="form-name"
                          name="name" 
                          required 
                          placeholder="Your Name"
                          className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 focus:border-blue-500/50 focus:bg-[#070b19] outline-none text-sm text-white transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider" htmlFor="form-email">Email</label>
                        <input 
                          type="email" 
                          id="form-email"
                          name="email" 
                          required 
                          placeholder="your.email@example.com"
                          className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 focus:border-blue-500/50 focus:bg-[#070b19] outline-none text-sm text-white transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-wider" htmlFor="form-msg">Message</label>
                      <textarea 
                        id="form-msg"
                        name="message" 
                        required 
                        rows="4" 
                        placeholder="Hello Om, I would like to connect with you regarding..."
                        className="w-full p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 focus:border-blue-500/50 focus:bg-[#070b19] outline-none text-sm text-white transition-all resize-none"
                      ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      className="w-full h-12 rounded-xl text-xs font-bold uppercase tracking-widest bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg transition-all"
                    >
                      Send Message via Email
                    </button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/5 bg-[#010409] py-12 relative z-10 text-center text-xs text-gray-500">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Om Trivedi. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="https://linkedin.com/in/om-trivedi-8a1411224" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">LinkedIn</a>
            <a href="https://github.com/omtrivedioo3" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">GitHub</a>
            <a href="https://leetcode.com/omtrivedioo3" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">LeetCode</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
