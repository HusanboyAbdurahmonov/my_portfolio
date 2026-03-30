import { motion } from 'framer-motion';
import { Monitor, Smartphone, Zap, Search } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Monitor className="text-accent-purple" size={32} />,
      title: "Web Development",
      desc: "React va zamonaviy texnologiyalar yordamida tezkor veb-saytlar qurish."
    },
    {
      icon: <Smartphone className="text-accent-cyan" size={32} />,
      title: "Responsive Design",
      desc: "Saytingiz barcha qurilmalarda — telefondan tortib monitorgacha mukammal ko'rinishi."
    },
    {
      icon: <Zap className="text-accent-green" size={32} />,
      title: "UI Recreation",
      desc: "Figma yoki boshqa dizaynlarni piksellarigacha aniqlikda kodga o'tkazish."
    },
    {
      icon: <Search className="text-accent-purple" size={32} />,
      title: "Basic Security Audit",
      desc: "Veb-saytlardagi asosiy xavfsizlik kamchiliklarini tekshirish va tavsiyalar berish."
    }
  ];

  return (
    <section id="services" className="bg-secondaryBg/30">
      <div className="section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Xizmatlar</h2>
          <p className="text-muted">Sizga qanday yordam bera olaman?</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-8 text-center hover:bg-white/10 transition-colors border-white/5"
            >
              <div className="flex justify-center mb-6">{service.icon}</div>
              <h3 className="text-lg font-bold mb-4">{service.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;