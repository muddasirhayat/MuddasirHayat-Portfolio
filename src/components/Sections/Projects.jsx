import { motion } from 'framer-motion';
import { userData } from '../../data/userData';
import { FaGithub, FaLink } from 'react-icons/fa';

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            id="project"
            className={`glass-card p-6 rounded-2xl flex flex-col h-full bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-[var(--accent-color)] transition-all duration-500 overflow-hidden relative group ${project.highlight ? 'ring-2 ring-[var(--accent-color)] shadow-[0_0_20px_rgba(59,130,246,0.2)]' : ''}`}
        >
            {project.screenshot && (
                <div
                    className="absolute inset-0 z-0 opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700 bg-cover bg-center"
                    style={{ backgroundImage: `url(${project.screenshot})` }}
                />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-color)] via-[var(--bg-color)]/80 to-transparent z-0" />

            <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        {project.highlight && (
                            <span className="text-xs font-bold px-2 py-1 rounded bg-[var(--accent-color)] text-[var(--bg-color)] mb-2 inline-block">
                                FEATURED
                            </span>
                        )}
                        <h3 className="text-xl md:text-2xl font-bold text-[var(--text-primary)]">{project.title}</h3>
                    </div>
                    <div className="flex gap-3">
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                            title="View Code"
                        >
                            <FaGithub size={20} />
                        </a>
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                            title="Live Demo"
                        >
                            <FaLink size={18} />
                        </a>
                    </div>
                </div>

                <p className="text-[var(--text-secondary)] text-sm mb-6 flex-grow leading-relaxed">
                    {project.desc}
                </p>

                <div>
                    <div className="w-full h-[1px] bg-[var(--card-border)] mb-4" />
                    <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                            <span
                                key={i}
                                className="text-xs font-mono font-medium px-2 py-1 rounded bg-[var(--text-primary)]/5 text-[var(--text-primary)] border border-[var(--text-primary)]/10"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    if (!userData || !userData.projects) {
        return null;
    }

    return (
        <section id="projects" className="py-32 px-4 relative">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mb-16 text-center md:text-left"
                >
                    <h2 className="text-4xl md:text-7xl font-bold mb-6 text-[var(--text-primary)]">
                        selected.<span className="text-[var(--text-secondary)]">works</span>
                    </h2>
                    <p className="max-w-xl text-lg text-[var(--text-secondary)]">
                        A collection of projects exploring web development, algorithms, and modern UI design.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {userData.projects.map((project, idx) => (
                        <ProjectCard key={idx} project={project} index={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
