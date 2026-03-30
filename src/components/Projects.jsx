import { motion } from 'framer-motion';
import { Github, ExternalLink, Folder } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Flora Shop",
      desc: "Premium darajadagi gullar do'koni. To'liq responsive va zamonaviy animatsiyalar bilan.",
      tags: ["React", "Tailwind", "Framer Motion"],
      github: "#",
      demo: "#"
    },
    {
      title: "Electronics Store",
      desc: "Maishiy texnika va gadjetlar uchun mo'ljallangan keng ko'lamli internet do'koni.",
      tags: ["JavaScript", "CSS3", "HTML5"],
      github: "#",
      demo: "#"
    },
    {
      title: "Business Landing",
      desc: "Zamonaviy biznes uchun professional va tezkor bitta sahifali veb-sayt.",
      tags: ["React", "Tailwind", "Vite"],
      github: "#",
      demo: "#"
    },
    {
      title: "Cyber Security Blog",
      desc: "Kiberxavfsizlik haqidagi ma'lumotlarni ulashuvchi platforma prototipi.",
      tags: ["Next.js", "Markdown", "Tailwind"],
      github: "#",
      demo: "#"
    },
    {
      title: "Task Management App",
      desc: "Ishlarni tartibga solish va samaradorlikni oshirish uchun interaktiv dastur.",
      tags: ["React", "LocalStorage", "Drag & Drop"],
      github: "#",
      demo: "#"
    },
    {
      title: "Weather Dashboard",
      desc: "Real-vaqtda ob-havo ma'lumotlarini taqdim etuvchi vizual interfeys.",
      tags: ["API Integration", "JS", "Charts"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="bg-secondaryBg/30">
      <div className="section-padding">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-bold mb-4">Tanlangan Loyihalar</h2>
            <div className="h-1 w-20 bg-accent-cyan" />
          </div>
          <p className="text-muted max-w-md">Har bir loyiha toza kod va foydalanuvchi interfeysiga bo'lgan e'tiborim natijasidir.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card overflow-hidden border-white/5 group"
            >
              <div className="h-48 bg-gradient-to-br from-accent-purple/20 to-accent-cyan/20 flex items-center justify-center relative overflow-hidden">
                <Folder size={64} className="text-white/20 group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-accent-purple/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a href={proj.github} className="p-3 bg-white rounded-full text-background hover:bg-accent-cyan transition-colors"><Github size={20} /></a>
                  <a href={proj.demo} className="p-3 bg-white rounded-full text-background hover:bg-accent-cyan transition-colors"><ExternalLink size={20} /></a>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex gap-2 mb-4">
                  {proj.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase font-bold text-accent-cyan">{tag}</span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-3">{proj.title}</h3>
                <p className="text-sm text-muted leading-relaxed mb-6">{proj.desc}</p>
                <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                  <a href={proj.demo} className="text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:text-accent-cyan transition-colors">
                    Demo <ExternalLink size={14} />
                  </a>
                  <a href={proj.github} className="text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:text-accent-cyan transition-colors">
                    Kodi <Github size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;