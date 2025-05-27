import { motion } from 'framer-motion';
import TypingEffect from './TypingEffect';
import ResumeDownload from './ResumeDownload';

export default function Hero() {
  return (

    <section className="relative h-screen w-full flex items-center justify-center bg-black px-6 sm:px-12 md:px-20 overflow-hidden">
      {/* Background Glow Circles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute top-[20%] left-[15%] w-80 h-80 bg-cyan-400 opacity-10 blur-3xl rounded-full"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 14, repeat: Infinity, delay: 2 }}
          className="absolute bottom-[15%] right-[10%] w-96 h-96 bg-teal-500 opacity-10 blur-3xl rounded-full"
        />
      </div>

      {/* Glassmorphic Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 bg-white/5 backdrop-blur-lg border border-white/10 p-10 sm:p-14 rounded-3xl shadow-2xl max-w-3xl w-full"
      >
        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-teal-300 drop-shadow-[0_0_15px_rgba(34,211,238,0.4)] mb-4"
        >
          Hi, I'm Rahul
        </motion.h1>

        {/* Typing Role */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-xl sm:text-2xl text-teal-300 font-medium mb-6"
        >
          <TypingEffect />
        </motion.div>

        {/* Summary */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-cyan-100 text-base md:text-lg leading-relaxed font-light mb-8"
        >
          I'm a <span className="text-teal-500 font-medium">highly motivated frontend developer</span>
          focused on delivering exceptional user experiences. I specialize in
          <span className="text-teal-500 font-medium"> React</span>,
          <span className="text-teal-500 font-medium"> Tailwind CSS</span>, and building
          elegant, high-performance UIs. Let’s turn your vision into reality.
        </motion.p>

        {/* Resume Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.4 }}
        >
          <ResumeDownload className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-8 py-3 rounded-full shadow-md transition-all duration-300" />
        </motion.div>
      </motion.div>
    </section>
  );
}
