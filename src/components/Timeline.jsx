import { motion } from 'framer-motion';

const Timeline = () => {
  const events = [
    {
      year: "2023",
      title: "Dasturlash dunyosiga kirish",
      desc: "HTML va CSS orqali ilk veb-sahifalarimni qurishni boshladim."
    },
    {
      year: "2024 (Boshalanishi)",
      title: "JavaScript va Mantiq",
      desc: "Interaktiv elementlar va dinamik loyihalar yaratishni o'rgandim."
    },
    {
      year: "2024 (O'rtasi)",
      title: "React va Framerworklar",
      desc: "Zamonaviy SPA loyihalar va UI kutubxonalar bilan ishlash."
    },
    {
      year: "2025",
      title: "Kiberxavfsizlikka qiziqish",
      desc: "Veb xavfsizligi va Linux operatsion tizimini chuqur o'rganishni boshladim."
    },
    {
      year: "Hozir",
      title: "Full Stack intilishi",
      desc: "Professional loyihalar va xavfsiz tizimlar ustida ishlamoqdaman."
    }
  ];

  return (
    <section id="journey" className="bg-background">
      <div className="section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Mening Yo'nalishim</h2>
          <div className="h-1 w-20 bg-accent-green mx-auto mb-6" />
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />

          <div className="space-y-12">
            {events.map((event, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-accent-purple rounded-full -translate-x-1/2 border-4 border-background z-10" />
                
                <div className="w-full md:w-1/2 pl-8 md:pl-0">
                  <div className={`glass-card p-6 border-white/5 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <span className="text-accent-cyan font-mono text-sm mb-2 block">{event.year}</span>
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    <p className="text-muted text-sm leading-relaxed">{event.desc}</p>
                  </div>
                </div>
                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;