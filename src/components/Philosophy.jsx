import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Philosophy = () => {
  const principles = [
    { text: "Murakkab narsani sodda qilish — haqiqiy mahoratdir." },
    { text: "Xavfsizlik bu xususiyat emas, u poydevordir." },
    { text: "Toza kod xuddi yaxshi kitob kabi o'qilishi kerak." },
    { text: "O'rganishdan to'xtagan kuning, o'sishdan to'xtaysan." }
  ];

  return (
    <section className="bg-background overflow-hidden relative">
      <div className="absolute top-0 right-0 p-24 opacity-5">
        <Quote size={300} />
      </div>
      
      <div className="section-padding">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-12">Ishga bo'lgan yondashuvim</h2>
            <div className="grid sm:grid-cols-2 gap-8">
              {principles.map((p, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="h-6 w-1 bg-accent-purple shrink-0" />
                  <p className="text-xl font-medium text-muted">{p.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;