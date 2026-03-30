import { motion } from 'framer-motion';

const Skills = () => {
  const categories = [
    {
      title: "Frontend",
      skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Vite", "Responsive Design"]
    },
    {
      title: "Styling & UI",
      skills: ["Tailwind CSS", "Bootstrap", "Framer Motion", "CSS Grid/Flexbox", "UI Principles"]
    },
    {
      title: "Tools & OS",
      skills: ["Git", "GitHub", "VS Code", "Figma", "Linux (Ubuntu/Kali)", "NPM/Bun"]
    },
    {
      title: "O'rganilayotgan",
      skills: ["Advanced JS", "Networking", "Web Security", "Penetration Testing", "Python"]
    }
  ];

  return (
    <section id="skills" className="bg-background">
      <div className="section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Texnik Arsenal</h2>
          <p className="text-muted max-w-2xl mx-auto">Loyihalarda foydalanadigan va chuqur o'rganayotgan texnologiyalarim.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-accent-purple/5 blur-xl group-hover:bg-accent-purple/10 transition-colors" />
              <div className="relative glass-card p-8 h-full border-white/5 overflow-hidden">
                <h3 className="text-xl font-bold mb-6 text-white border-b border-white/10 pb-4">
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx}
                      className="px-3 py-1 bg-white/5 text-xs font-medium rounded-full text-muted border border-white/5 hover:border-accent-cyan transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;