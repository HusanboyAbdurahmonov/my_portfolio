import { motion } from 'framer-motion';
import { Code2, Layout, ShieldAlert, Cpu } from 'lucide-react';

const About = () => {
  const cards = [
    {
      icon: <Code2 className="text-accent-purple" />,
      title: "Frontend Engineering",
      desc: "Toza, o'qilishi oson va samarali kod yozishga e'tibor qarataman."
    },
    {
      icon: <Layout className="text-accent-cyan" />,
      title: "Zamonaviy UI/UX",
      desc: "Foydalanuvchi tajribasini birinchi o'ringa qo'yadigan interfeyslar."
    },
    {
      icon: <ShieldAlert className="text-accent-green" />,
      title: "Kiberxavfsizlik",
      desc: "Tizimlarni himoya qilish va zaifliklarni topishni o'rganmoqdaman."
    },
    {
      icon: <Cpu className="text-accent-purple" />,
      title: "Doimiy O'sish",
      desc: "Har kuni yangi texnologiyalar va algoritmlarni o'zlashtiraman."
    }
  ];

  return (
    <section id="about" className="bg-secondaryBg/30">
      <div className="section-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Men Haqimda</h2>
            <div className="h-1 w-20 bg-accent-purple mb-8" />
            
            <p className="text-lg text-muted mb-6 leading-relaxed">
              Men Husanboy, raqamli dunyoga ishtiyoqi baland bo'lgan dasturchiman. Mening yo'lim veb-saytlar yaratishdan boshlangan bo'lsa-da, hozirda men o'z mahoratimni kiberxavfsizlik bilimlari bilan birlashtirmoqdaman.
            </p>
            <p className="text-lg text-muted leading-relaxed">
              Dasturlash men uchun shunchaki kod emas, balki muammolarga yechim topish san'atidir. Men har bir loyihada intizom, aniqlik va xavfsizlikka alohida e'tibor qarataman.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 hover:translate-y-[-5px] transition-all duration-300 border-white/5"
              >
                <div className="mb-4 p-3 bg-white/5 w-fit rounded-xl">
                  {card.icon}
                </div>
                <h3 className="font-bold mb-2 text-white">{card.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;