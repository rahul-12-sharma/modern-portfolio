import { useState } from 'react';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold text-white">
          Rahul <span className="text-teal-400">Sharma</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-gray-300">
          <li><a href="#about" className="hover:text-indigo-400">About</a></li>
          <li><a href="#projects" className="hover:text-indigo-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-indigo-400">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 px-6 pb-4 text-gray-300 bg-black/80 backdrop-blur-sm">
          <li><a href="#about" className="hover:text-indigo-400" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#projects" className="hover:text-indigo-400" onClick={() => setIsOpen(false)}>Projects</a></li>
          <li><a href="#contact" className="hover:text-indigo-400" onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>
      )}
    </nav>
  );
}
