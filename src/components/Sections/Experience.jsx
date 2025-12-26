import { motion, useScroll, useTransform } from 'framer-motion';
import { userData } from '../../data/userData';

const ExperienceCard = ({ item, index }) => (
    <motion.div
        className="glass-card p-6 md:p-8 rounded-2xl relative mb-8 ml-2 md:ml-0 group"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
    >
        <div className="absolute top-8 -left-[41px] md:-left-[53px] w-5 h-5 rounded-full bg-blue-500 border-4 border-[var(--bg-color)] z-10 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.8)] transition-shadow duration-300" />

        <h3 className="text-xl md:text-2xl font-bold mb-1 text-[var(--text-primary)]">{item.role}</h3>
        <p className="text-blue-400 font-medium mb-4">{item.company}</p>
        <p className="text-[var(--text-secondary)] text-sm mb-6 font-mono border-l-2 border-[var(--card-border)] pl-3">{item.duration}</p>
        <p className="text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
    </motion.div>
);

const Experience = () => {
    const { scrollYProgress } = useScroll();
    const scaleY = useTransform(scrollYProgress, [0.3, 0.7], [0, 1]);

    return (
        <section id="experience" className="py-32 px-4 relative overflow-hidden">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-5xl md:text-7xl font-bold mb-20 text-right"
                >
                    experience._
                </motion.h2>

                <div className="relative ml-8 md:ml-10 space-y-12">
                    {/* Background Trace Line */}
                    <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[var(--card-border)]" />

                    {/* Active Progress Line */}
                    <motion.div
                        className="absolute left-0 top-0 w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-transparent origin-top shadow-[0_0_15px_rgba(59,130,246,0.5)] z-0"
                        style={{ height: 'calc(100% + 40px)', scaleY }}
                    />

                    <div className="pl-6 md:pl-12 mb-8">
                        <h3 className="text-xl md:text-2xl font-bold text-[var(--text-secondary)] uppercase tracking-widest leading-none">Career History</h3>
                    </div>

                    {userData.experience.map((item, idx) => (
                        <ExperienceCard key={idx} item={item} index={idx} />
                    ))}

                    <div className="pl-6 md:pl-12 pt-12 mb-8">
                        <h3 className="text-xl md:text-2xl font-bold text-[var(--text-secondary)] uppercase tracking-widest leading-none">Education</h3>
                    </div>

                    {userData.education.map((item, idx) => (
                        <motion.div
                            key={`edu-${idx}`}
                            className="glass-card p-6 rounded-2xl ml-2 md:ml-0 relative group"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="absolute top-8 -left-[41px] md:-left-[53px] w-5 h-5 rounded-full bg-purple-500 border-4 border-[var(--bg-color)] z-10 group-hover:shadow-[0_0_15px_rgba(139,92,246,0.8)] transition-shadow duration-300" />
                            <h3 className="text-xl font-bold text-[var(--text-primary)]">{item.degree}</h3>
                            <p className="text-[var(--accent-purple)]">{item.institution}</p>
                            <p className="text-[var(--text-secondary)] text-sm mt-2">{item.year}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
