import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

export default function Projects() {
  const projects = [
    {
      title: 'AI + Human Service Based Company',
      desc: ' AI-Driven Automation Solutions.',
      tech: ['React', 'AI', 'Tailwind CSS'],
      demo: 'https://services-nine-chi.vercel.app/',
      github: 'https://github.com/rahul-12-sharma/services',
    },
    {
      title: 'Dummy Shop',
      desc: 'Backend Project Design Products with dummy data Basically Short-form E-com.',
      tech: ['Python', 'Tailwind CSS', 'HTML' , 'Django' , 'SQLite'],
      github: 'https://github.com/rahul-12-sharma/django-dummyShop',
    },
    {
      title: 'Weather App',
      desc: 'A sleek weather app using OpenWeather API with dynamic theming.',
      tech: ['JavaScript', 'React', 'API'],
      demo: 'https://weather-1-ten.vercel.app/',
      github: 'https://github.com/rahul-12-sharma/weather-1',
    },
    {
      title: 'Real-Time Crypto Tracker',
      desc: 'A live chart and price updating.',
      tech: ['React', 'Tailwind CSS'],
      demo: 'https://crypto-app-eta-seven.vercel.app/',
      github: 'https://github.com/rahul-12-sharma/crypto-app',
    },
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-[#0e0e10] to-[#111827] text-white text-center px-6">
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-14 bg-gradient-to-r from-cyan-400 to-teal-400 text-transparent bg-clip-text"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        🚀 Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.025 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="group relative p-[2px] rounded-xl bg-gradient-to-tr from-indigo-500/30 to-purple-600/30 shadow-lg"
          >
            <div className="bg-[#141417] backdrop-blur-md rounded-xl p-6 h-full transition-colors duration-300 group-hover:bg-[#1c1c1f]">
              <h3 className="text-2xl font-semibold text-cyan-300 mb-3">{proj.title}</h3>
              <p className="text-gray-300 text-sm mb-5">{proj.desc}</p>

              <ul className="flex flex-wrap justify-center gap-2 mb-6 text-sm text-white/80">
                {proj.tech.map((tech, i) => (
                  <li
                    key={i}
                    className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/10"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="flex gap-4 mt-auto justify-center">
                <a
                  href={proj.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded-lg transition"
                >
                  <FiExternalLink /> Demo
                </a>
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg transition"
                >
                  <FiGithub /> GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
