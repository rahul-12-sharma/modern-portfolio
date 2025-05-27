import { motion } from 'framer-motion';

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-black text-center text-white px-6"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-extrabold mb-4 relative inline-block"
      >
        About Me
        <span className="block w-20 h-1 bg-cyan-400 rounded-full mt-2 mx-auto" />
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light text-gray-300"
      >
       I'm a passionate frontend developer with experience in React, Tailwind, and animations.
      </motion.p>
    </section>
  );
}
