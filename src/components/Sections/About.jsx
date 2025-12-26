import { motion } from 'framer-motion';
import { userData } from '../../data/userData';
import { FaReact, FaMobileAlt, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaPython, FaDatabase, FaMagic, FaWordpress } from 'react-icons/fa';
import { SiMongodb, SiThreedotjs, SiTailwindcss } from 'react-icons/si';

const BentoCard = ({ children, className, delay = 0 }) => (
    <motion.div
        className={`glass-card rounded-3xl p-8 relative overflow-hidden ${className}`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, delay }}
    >
        {children}
    </motion.div>
);

const About = () => {
    return (
        <section id="about" className="py-32 px-4 relative overflow-hidden">
            <div className="animated-bg" />

            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mb-16"
                >
                    <h2 className="text-5xl md:text-7xl font-bold mb-6">about._<span className="text-[var(--text-secondary)]">me</span></h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
                    <BentoCard className="md:col-span-2 md:row-span-1 flex flex-col justify-center">
                        <h3 className="text-2xl font-bold mb-4 text-[var(--text-primary)]">Tech & Problem Solving</h3>
                        <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
                            I am a <span className="text-[var(--text-primary)] font-medium">{userData.roles[0]}</span> and <span className="text-[var(--text-primary)] font-medium">Frontend Developer</span>.
                            I combine strong technical troubleshooting expertise with creative development skills to build efficient, user-centric web and mobile applications.
                        </p>
                    </BentoCard>

                    <BentoCard className="md:col-span-1 md:row-span-2">
                        <h3 className="text-xl font-bold mb-6">Tech Stack</h3>
                        <div className="flex flex-col gap-3 overflow-y-auto max-h-[400px] pr-2 custom-scrollbar">
                            {[
                                { icon: FaHtml5, label: "HTML5 & CSS3", color: "#E34F26" },
                                { icon: FaJs, label: "JavaScript (ES6+)", color: "#F7DF1E" },
                                { icon: FaReact, label: "React & Vite", color: "#61DAFB" },
                                { icon: SiTailwindcss, label: "Tailwind CSS", color: "#38B2AC" },
                                { icon: FaMobileAlt, label: "React Native", color: "#4CAF50" },
                                { icon: FaWordpress, label: "WordPress", color: "#21759B" },
                                { icon: FaNodeJs, label: "Node.js", color: "#68A063", status: "Learning" },
                                { icon: FaPython, label: "Python", color: "#3776AB", status: "Learning" },
                                { icon: SiMongodb, label: "MongoDB", color: "#47A248", status: "Learning" },
                                { icon: FaDatabase, label: "MySQL / SQL", color: "#00758F", status: "Learning" },
                                { icon: SiThreedotjs, label: "Three.js", color: "var(--text-primary)", status: "Understanding" },
                                { icon: FaMagic, label: "Anime.js", color: "#FF4B4B", status: "Understanding" }
                            ].map((tech, i) => (
                                <div key={i} className="flex items-center gap-4 p-3 rounded-xl bg-[var(--text-primary)]/5 hover:bg-[var(--text-primary)]/10 transition-colors group">
                                    <tech.icon size={24} color={tech.color} />
                                    <div className="flex-1 flex justify-between items-center">
                                        <span className="font-medium">{tech.label}</span>
                                        {tech.status && (
                                            <span className="text-[10px] font-bold uppercase tracking-wider bg-[var(--bg-color)] px-2 py-1 rounded text-[var(--accent-color)] border border-[var(--card-border)] opacity-70 group-hover:opacity-100 transition-opacity">
                                                {tech.status}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </BentoCard>

                    <BentoCard className="flex flex-col justify-between" delay={0.2}>
                        <div>
                            <div className="text-4xl font-bold text-gradient mb-2">1.5</div>
                            <div className="text-sm text-[var(--text-secondary)] uppercase tracking-wider">Years Experience</div>
                        </div>
                        <div className="w-full h-2 bg-[var(--card-border)] rounded-full mt-4 overflow-hidden">
                            <div className="h-full bg-blue-500 w-[75%]" />
                        </div>
                    </BentoCard>

                    <BentoCard className="flex flex-col justify-between" delay={0.3}>
                        <div>
                            <div className="text-4xl font-bold text-gradient mb-2">
                                {userData.projects?.length || 0}+
                            </div>
                            <div className="text-sm text-[var(--text-secondary)] uppercase tracking-wider">Projects Delivered</div>
                        </div>
                        <div className="flex -space-x-3 mt-4 overflow-hidden">
                            {userData.projects.slice(0, 5).map((project, i) => (
                                <motion.div
                                    key={i}
                                    className="w-12 h-12 rounded-full border-2 border-[var(--bg-color)] bg-[var(--card-bg)] overflow-hidden relative group cursor-pointer"
                                    whileHover={{ y: -5, zIndex: 10, scale: 1.1 }}
                                >
                                    {project.screenshot ? (
                                        <img
                                            src={project.screenshot}
                                            alt={`${project.title} Preview`}
                                            loading="lazy"
                                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-gray-600 text-[10px] text-white">
                                            PN
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </BentoCard>
                </div>
            </div>
        </section>
    );
};

export default About;
