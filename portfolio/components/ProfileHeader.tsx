"use client";
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function ProfileHeader() {
    return (
        <section id="profile" className="min-h-screen flex items-center justify-center my-8">
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 1.6, ease: 'easeInOut' }}
                viewport={{ once: false, amount: 0.5 }}
                className="w-full max-w-5xl px-6 py-10 flex flex-col items-center gap-4"
            >
                <h1 className="text-5xl font-extrabold mb-2 text-teal-300 drop-shadow-lg">Nathalia Rodriguez</h1>
                <h2 className="text-2xl font-semibold text-teal-200 mb-1">Software Engineer</h2>
                <p className="text-lg text-stone-200 mb-4">Universidad of Costa Rica</p>
                <div className="flex gap-8 mt-2">
                    <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-blue-200 transition-colors text-3xl">
                        <FaGithub />
                    </a>
                    <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-200 transition-colors text-3xl">
                        <FaLinkedin />
                    </a>
                </div>
            </motion.div>
        </section>
    );
}
