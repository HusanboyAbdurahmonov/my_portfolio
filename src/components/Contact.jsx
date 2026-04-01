import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { Send, Mail, MessageCircle } from 'lucide-react';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Yuborilmoqda...');

   emailjs.sendForm(
  'service_4inthoq',      // Service ID
  'template_7cgpuv3',     // Template ID (buni shablonlar bo'limidan ko'rib oling)
   form.current, 
  'V8SlVyP9i7GjXpz-R'     // Public Key

)
      .then(() => {
          // Muvaffaqiyatli yuborilganda
          setStatus('Xabar yuborildi! ✅');
          e.target.reset(); // Formani tozalash

          // 3 soniyadan keyin tugmani eski holiga qaytarish
          setTimeout(() => {
            setStatus('');
          }, 3000);

      }, (error) => {
          // Xatolik bo'lganda
          console.log(error.text);
          setStatus('Xatolik yuz berdi ❌');
          
          setTimeout(() => {
            setStatus('');
          }, 3000);
      });
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-10 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        
        {/* CHAP TOMON: KONTAKTLAR */}
        <div className="space-y-10">
          <div>
            <h2 className="text-5xl font-bold text-white mb-6 leading-tight">
              Loyihani <br /> boshlaymizmi?
            </h2>
            <p className="text-gray-400 text-lg max-w-md leading-relaxed">
              Mening ishim yoqdimi? Hamkorlik, takliflar yoki shunchaki salom berish uchun bog'laning. 
              Men har doim yangi imkoniyatlarga ochiqman.
            </p>
          </div>

          <div className="space-y-4">
            {/* Email */}
            <a 
              href="mailto:abdurahmonovh309@gmail.com" 
              className="flex items-center gap-5 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group w-full"
            >
              <div className="p-4 rounded-xl bg-purple-500/20 text-purple-400 group-hover:scale-110 transition-transform">
                <Mail size={28} />
              </div>
              <div className="overflow-hidden">
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Email</p>
                <p className="text-white font-medium truncate">abdurahmonovh309@gmail.com</p>
              </div>
            </a>

            {/* Telegram */}
            <a 
              href="https://t.me/vxusan" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-5 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group w-full"
            >
              <div className="p-4 rounded-xl bg-cyan-500/20 text-cyan-400 group-hover:scale-110 transition-transform">
                <MessageCircle size={28} />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Telegram</p>
                <p className="text-white font-medium">@vxusan</p>
              </div>
            </a>
          </div>
        </div>

        {/* O'NG TOMON: FORMA */}
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-3xl blur opacity-20"></div>
          <form 
            ref={form} 
            onSubmit={sendEmail} 
            className="relative bg-[#0d1117] p-8 md:p-10 rounded-3xl border border-white/10 space-y-6"
          >
            <div className="space-y-2">
              <label className="text-sm text-gray-400 ml-1">Ismingiz</label>
              <input 
                name="user_name" 
                type="text" 
                required 
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all" 
                placeholder="Ismingizni kiriting" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-400 ml-1">Email manzilingiz</label>
              <input 
                name="user_email" 
                type="email" 
                required 
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all" 
                placeholder="Emailingizni kiriting" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-400 ml-1">Xabar</label>
              <textarea 
                name="message" 
                rows="4" 
                required 
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all resize-none" 
                placeholder="Xabaringizni yozing"
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="w-full py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white rounded-2xl font-bold flex items-center justify-center gap-3 shadow-lg shadow-purple-500/20 transition-all active:scale-[0.98]"
            >
              {status || 'Xabar yuborish'} <Send size={20} />
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;