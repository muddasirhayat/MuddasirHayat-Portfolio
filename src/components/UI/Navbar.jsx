import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { FaSun, FaMoon, FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { userData } from '../../data/userData';

const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-[100] backdrop-blur-lg bg-[var(--nav-bg)] border-b border-[var(--glass-border)] transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 md:h-20 flex items-center justify-between relative z-[101]">
                <a href="#" className="group flex items-center gap-2 md:gap-3 shrink-0">
                    <img
                        src={`${import.meta.env.BASE_URL}logo.svg`}
                        alt="MH Logo"
                        className="w-8 h-8 md:w-10 md:h-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
                    />
                    <span className="text-lg md:text-xl font-black tracking-tighter text-[var(--text-primary)] group-hover:text-[var(--accent-color)] transition-colors">
                        MuddasirHayat
                    </span>
                    <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--text-primary)]/5 border border-[var(--text-primary)]/10 ml-2">
                        <div className="relative flex h-2 w-2">
                            <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></div>
                            <div className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></div>
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-tighter text-green-500 whitespace-nowrap">Available</span>
                    </div>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link, i) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-color)] transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--accent-color)] transition-all group-hover:w-full" />
                        </motion.a>
                    ))}

                    <div className="h-4 w-px bg-[var(--card-border)] mx-2" />

                    <div className="flex items-center gap-4">
                        <a href={userData.contact.github} target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--text-color)] transition-colors">
                            <FaGithub size={18} />
                        </a>
                        <a href={userData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--text-color)] transition-colors">
                            <FaLinkedin size={18} />
                        </a>
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-[var(--text-primary)]/5 text-[var(--accent-color)] transition-colors"
                            aria-label="Toggle Theme"
                        >
                            {theme === 'dark' ? <FaSun size={18} /> : <FaMoon size={18} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Toggle Icons */}
                <div className="flex items-center gap-4 md:hidden">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full text-[var(--accent-color)]"
                    >
                        {theme === 'dark' ? <FaSun size={20} /> : <FaMoon size={20} />}
                    </button>
                    <button
                        className="text-[var(--text-primary)] p-2 relative z-[110]"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Menu"
                    >
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="fixed inset-x-0 top-0 pt-16 md:pt-20 bg-[var(--nav-bg)] border-b border-[var(--glass-border)] backdrop-blur-2xl z-[100] md:hidden shadow-2xl"
                    >
                        <div className="px-6 py-10 flex flex-col gap-8">
                            {navLinks.map((link, idx) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                    onClick={() => setIsOpen(false)}
                                    className="text-3xl font-bold text-[var(--text-primary)] hover:text-[var(--accent-color)] transition-colors flex items-center justify-between group"
                                >
                                    {link.name}
                                    <span className="w-2 h-2 rounded-full bg-[var(--accent-color)] opacity-0 group-hover:opacity-100 transition-opacity" />
                                </motion.a>
                            ))}
                            <div className="h-px bg-[var(--glass-border)] w-full opacity-50" />
                            <div className="flex items-center gap-8">
                                <a href={userData.contact.github} target="_blank" rel="noopener noreferrer" className="text-[var(--text-primary)] flex items-center gap-2">
                                    <FaGithub size={28} />
                                    <span className="text-base font-semibold">GitHub</span>
                                </a>
                                <a href={userData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-[var(--text-primary)] flex items-center gap-2">
                                    <FaLinkedin size={28} />
                                    <span className="text-base font-semibold">LinkedIn</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
