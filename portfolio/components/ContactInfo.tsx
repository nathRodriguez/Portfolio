"use client";
import { motion } from 'framer-motion';


export default function ContactInfo() {
    return (
        <section id="contact" className="min-h-screen flex items-center justify-center my-8">
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 1.6, ease: 'easeInOut' }}
                viewport={{ once: false, amount: 0.5 }}
                className="w-full max-w-5xl px-6"
            >
                <h3 className="text-3xl font-bold mb-4 text-teal-300">Contact</h3>
                <div className="text-lg text-stone-200 mb-2">Email: <a href="mailto:your@email.com" className="text-teal-200 underline">your@email.com</a></div>
                <div className="text-lg text-stone-200">LinkedIn: <a href="https://linkedin.com/in/your-linkedin" className="text-teal-200 underline">your-linkedin</a></div>
            </motion.div>
        </section>
    );
}
