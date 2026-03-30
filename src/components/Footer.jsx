import { Github, Twitter, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-[#080B12] py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <h2 className="text-2xl font-bold tracking-tighter mb-2">HUSANBOY<span className="text-accent-purple">.</span></h2>
          <p className="text-muted text-sm">© {new Date().getFullYear()} Barcha huquqlar himoyalangan.</p>
        </div>

        <div className="flex gap-6">
          <a href="#" className="text-muted hover:text-white transition-colors"><Github size={20} /></a>
          <a href="#" className="text-muted hover:text-white transition-colors"><Linkedin size={20} /></a>
          <a href="#" className="text-muted hover:text-white transition-colors"><Twitter size={20} /></a>
        </div>

        <button 
          onClick={scrollToTop}
          className="p-3 glass-card hover:bg-white/10 transition-colors"
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;