import { motion } from 'framer-motion';
import { ArrowRight, Github, Shield, Terminal } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent-purple/20 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent-cyan/10 rounded-full blur-[120px] animate-pulse-slow" />

      <div className="section-padding grid lg:grid-cols-2 gap-12 items-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-accent-cyan uppercase tracking-widest mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-cyan"></span>
            </span>
            Ishga tayyor & O'rganishda
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Assalomu alaykum! men <br />
            <span className="text-gradient">Husanboy</span>
          </h1>
          
          <p className="text-lg text-muted mb-10 max-w-xl leading-relaxed">
            Frontend dasturchi va kelajakdagi etik xaker. Men foydalanuvchilar uchun intuitiv interfeyslar yarataman va kiberxavfsizlik orqali raqamli olamni xavfsizroq qilishga intilaman.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.a 
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-accent-purple text-white rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-accent-purple/20"
            >
              Loyihalarni ko'rish <ArrowRight size={20} />
            </motion.a>
            <motion.a 
              href="https://github.com"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass-card font-bold flex items-center gap-2 hover:bg-white/10 transition-colors"
            >
              <Github size={20} /> GitHub
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative glass-card p-6 md:p-10 border-white/20 shadow-2xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <div className="ml-auto flex items-center gap-2 text-xs font-mono text-muted">
                <Terminal size={14} /> terminal.exe
              </div>
            </div>
            
            <div className="font-mono space-y-4">
              <p className="text-accent-purple flex gap-2">
                <span className="text-accent-green">➜</span> 
                <span>whoami</span>
              </p>
              <p className="text-white pl-6">Husanboy, Solution ENGINEER</p>
              <p className="text-accent-purple flex gap-2">
                <span className="text-accent-green">➜</span> 
                <span>skills</span>
              </p>
              <p className="text-accent-cyan pl-6">["React", "Tailwind", "JS", "Linux", "Python"]</p>
              <p className="text-accent-purple flex gap-2">
                <span className="text-accent-green">➜</span> 
                <span>status</span>
              </p>
              <p className="text-white pl-6 animate-pulse">Kiberxavfsizlik o'rganilmoqda...</p>
            </div>
          </div>
          
          {/* Floating Element */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
            className="absolute -bottom-10 -left-10 glass-card p-6 border-accent-cyan/30 flex items-center gap-4"
          >
            <div className="p-3 bg-accent-cyan/20 rounded-lg text-accent-cyan">
              <Shield size={32} />
            </div>
            <div>
              <p className="text-xs font-bold text-accent-cyan uppercase tracking-tighter">Security Level</p>
              <p className="text-lg font-bold">Encrypted</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;