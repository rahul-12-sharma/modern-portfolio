import { Typewriter } from 'react-simple-typewriter';

export default function TypingEffect() {
  return (
    <h2 className="text-xl md:text-2xl text-teal-400 font-space font-semibold">
      I'm a{' '}
      <span className="text-white">
        <Typewriter
          words={['AI Enthusiast', 'Frontend Developer', 'React Specialist']}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </span>
    </h2>
  );
}
