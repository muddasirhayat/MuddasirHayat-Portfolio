import { motion, useScroll, useTransform } from 'framer-motion';
import FluidBackground from '../Canvas/FluidBackground';
import { userData } from '../../data/userData';
import { FaArrowRight } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';

const Hero = () => {
    const { theme } = useTheme();
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section id="hero" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden py-20">
            <FluidBackground />

            <motion.div
                style={{ y: y1, opacity }}
                className="relative z-20 text-center px-6 max-w-5xl mx-auto flex flex-col items-center"
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-block px-4 py-1.5 mb-8 rounded-full border border-[var(--glass-border)] bg-[rgba(255,255,255,0.05)] backdrop-blur-md"
                >
                    <span className="text-xs md:text-sm font-medium tracking-wider text-[var(--text-secondary)] uppercase">
                        Innovate • Create • Deliver
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl xs:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-8 md:mb-12 text-[var(--text-primary)] relative"
                >
                    <span className="block mb-2 leading-none">{userData.name.split(" ")[0]}</span>
                    <span className="text-gradient block md:inline md:ml-6 leading-none">{userData.name.split(" ")[1]}</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-base md:text-2xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-12 md:mb-16 font-light leading-relaxed px-4 md:px-0"
                >
                    Building <span className="text-[var(--text-primary)] font-normal">modern web & mobile apps</span> using HTML5, CSS3, JavaScript (ES6), React, and React Native.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 md:gap-8 justify-center items-center w-full sm:w-auto"
                >
                    <a
                        href="#project"
                        className="group relative w-full sm:w-auto px-8 py-4 bg-[var(--text-primary)] text-[var(--bg-color)] font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 text-center flex items-center justify-center gap-2"
                    >
                        View My Work <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                        <div className="absolute inset-0 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out -z-0 opacity-20" />
                    </a>

                    <a
                        href="#contact"
                        className="w-full sm:w-auto px-8 py-4 rounded-full border transition-all text-[var(--text-primary)] font-medium backdrop-blur-sm text-center"
                        style={{ borderColor: theme === 'light' ? 'rgba(17, 24, 39, 0.2)' : 'rgba(255, 255, 255, 0.2)' }}
                    >
                        Contact Me
                    </a>
                </motion.div>
            </motion.div>

            <motion.div
                className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 select-none pointer-events-none"
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2.5 }}
            >
                <div className="w-[1px] h-12 md:h-16 bg-gradient-to-b from-transparent via-[var(--text-primary)] to-transparent" />
                <span className="text-[10px] uppercase tracking-widest font-bold">Scroll</span>
            </motion.div>
        </section>
    );
};

export default Hero;
