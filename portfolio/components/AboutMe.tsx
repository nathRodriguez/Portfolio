"use client";
import { motion } from 'framer-motion';


export default function AboutMe() {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center my-8">
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 1.6, ease: 'easeInOut' }}
                viewport={{ once: false, amount: 0.5 }}
                className="w-full max-w-5xl px-6"
            >
                <h3 className="text-3xl font-bold mb-4 text-teal-300">About Me</h3>
                <p className="text-stone-200 text-lg leading-relaxed">
                    Hi! I’m Nathalia Rodriguez, a passionate software engineer who loves building beautiful and functional web experiences.<br />
                    I studied at the Universidad of Costa Rica and enjoy learning new technologies and collaborating on creative projects.
                </p>
            </motion.div>
        </section>
    );
}
