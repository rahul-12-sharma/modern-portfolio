import {HiMail, HiPhone } from 'react-icons/hi';

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-black text-white text-center px-4"
      style={{ minHeight: '400px' }}
    >
      <h2 className="text-4xl font-extrabold mb-6 tracking-wide text-primary-indigo drop-shadow-lg">
        📬 Get In Touch
      </h2>

      <div className="max-w-md mx-auto bg-card-bg bg-indigo-100 text-black rounded-xl p-8 shadow-lg backdrop-blur-md space-y-8">
        <div className="flex items-center space-x-4 justify-center">
          <HiPhone className="text-3xl text-secondary-purple" />
          <a
            href="tel:+918745030616"
            className="text-lg font-medium hover:underline text-text-light"
          >
            +91 87450 30616
          </a>
        </div>

        <div className="flex items-center space-x-4 justify-center">
          <HiMail className="text-3xl text-secondary-purple" />
          <a
            href="mailto:sandilyrahul@gmail.com"
            className="text-lg font-medium hover:underline text-text-light"
          >
            sandilyrahul@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
