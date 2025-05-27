import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import { Suspense, useRef } from 'react';

// React icons
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact,
  FaBootstrap, FaPython, FaWordpress
} from 'react-icons/fa';
import { SiTailwindcss, SiRedux, SiDjango } from 'react-icons/si';

// Skill data with icons
const skills = [
  { name: 'HTML', icon: <FaHtml5 color="#e34c26" size={48} /> },
  { name: 'CSS', icon: <FaCss3Alt color="#1572B6" size={48} /> },
  { name: 'JavaScript', icon: <FaJsSquare color="#f7df1e" size={48} /> },
  { name: 'React', icon: <FaReact color="#61dafb" size={48} /> },
  { name: 'Tailwind', icon: <SiTailwindcss color="#38bdf8" size={48} /> },
  { name: 'Bootstrap', icon: <FaBootstrap color="#7952b3" size={48} /> },
  { name: 'Redux', icon: <SiRedux color="#764abc" size={48} /> },
  { name: 'Python', icon: <FaPython color="#306998" size={48} /> },
  { name: 'Django', icon: <SiDjango color="#092e20" size={48} /> },
  { name: 'WordPress', icon: <FaWordpress color="#21759b" size={48} /> },
];

function RotatingRing() {
  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003;
    }
  });

  const radius = 6;
  return (
    <group ref={groupRef}>
      {skills.map((skill, i) => {
        const angle = (i / skills.length) * Math.PI * 2;
        const x = radius * Math.cos(angle);
        const z = radius * Math.sin(angle);
        return (
          <Html
            key={skill.name}
            position={[x, 0, z]}
            transform
            distanceFactor={8}
            center
            className="flex flex-col items-center"
          >
            <div className="p-2 rounded-full bg-black/70 shadow-md hover:scale-110 transition-transform">
              {skill.icon}
            </div>
            <span className="text-xs text-white mt-1">{skill.name}</span>
          </Html>
        );
      })}
    </group>
  );
}

export default function Skills3D() {
  return (
    <section id="skills" className="py-20 bg-black text-center text-white">
      <h2 className="text-4xl font-bold mb-12">🛠️ Skills</h2>
      <div className="h-[400px] md:h-[500px] max-w-6xl mx-auto">
        <Canvas camera={{ position: [0, 5, 12], fov: 50 }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[0, 5, 5]} />
          <Suspense fallback={null}>
            <RotatingRing />
          </Suspense>
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
    </section>
  );
}
