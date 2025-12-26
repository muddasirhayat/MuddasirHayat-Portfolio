import { motion } from 'framer-motion';
import { userData } from '../../data/userData';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaHandshake } from 'react-icons/fa';
import { SiFiverr, SiUpwork, SiFreelancer } from 'react-icons/si';

const Contact = () => {
    return (
        <section id="contact" className="py-32 px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-8xl font-bold mb-10 text-[var(--text-primary)] tracking-tighter"
                >
                    Let's <span className="text-gradient">Create</span>
                </motion.h2>

                <motion.p
                    className="text-xl text-[var(--text-secondary)] mb-16 max-w-xl mx-auto"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                >
                    Interested in discussing a project or just want to say hi?
                    My inbox is open for all.
                </motion.p>

                <div className="flex justify-center gap-10 mb-20 flex-wrap">
                    {[
                        { icon: FaEnvelope, href: `mailto:${userData.contact.email}`, label: "Email", color: "#EA4335" },
                        { icon: FaLinkedin, href: userData.contact.linkedin, label: "LinkedIn", color: "#0077B5" },
                        { icon: FaGithub, href: userData.contact.github, label: "GitHub", color: "#333333" },
                        { icon: FaInstagram, href: userData.contact.instagram, label: "Instagram", color: "#E4405F" },
                        { icon: SiUpwork, href: "https://www.upwork.com/freelancers/~0126e78a49638a6daa?viewMode=1", label: "Upwork", color: "#1a1a1a" },
                        { icon: SiFiverr, href: "https://www.fiverr.com/s/YRqay7d", label: "Fiverr", color: "#1DBF73" },
                        { icon: SiFreelancer, href: "https://www.freelancer.com/u/MuddasirHayat", label: "Freelancer", color: "#29B2FE" },
                        { icon: FaHandshake, href: "https://www.freelancer.com/u/MuddasirHayat", label: "Guru", color: "#54C5D0" }
                    ].map((mobile, i) => (
                        <motion.a
                            key={i}
                            href={mobile.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col items-center gap-4"
                            whileHover={{ y: -5 }}
                            style={{ "--hover-color": mobile.color }}
                        >
                            <div className="w-16 h-16 rounded-2xl bg-[var(--text-primary)]/5 border border-[var(--text-primary)]/10 flex items-center justify-center text-[var(--text-primary)] text-2xl group-hover:bg-[var(--hover-color)] group-hover:border-[var(--hover-color)] group-hover:text-white transition-all duration-300">
                                <mobile.icon />
                            </div>
                            <span className="text-sm font-medium tracking-widest uppercase text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">{mobile.label}</span>
                        </motion.a>
                    ))}
                </div>

                <div className="pb-20" />
            </div>
        </section>
    );
};

export default Contact;
