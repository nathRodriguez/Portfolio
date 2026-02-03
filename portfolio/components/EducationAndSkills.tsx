
"use client";
import { motion } from 'framer-motion';


export default function EducationAndSkills() {
    return (
        <section id="education" className="min-h-screen flex items-center justify-center my-8">
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 1.6, ease: 'easeInOut' }}
                viewport={{ once: false, amount: 0.5 }}
                className="w-full max-w-5xl px-6"
            >
                <h3 className="text-3xl font-bold mb-4 text-teal-300 pl-2">Education & Skills</h3>
                <div className="mb-2 text-stone-200">
                    <span className="font-semibold text-teal-200">Education:</span> Universidad of Costa Rica
                </div>
                <div className="text-stone-200">
                    <span className="font-semibold text-teal-200">Skills:</span> JavaScript, TypeScript, React, Next.js, Node.js, Tailwind CSS, Git, Agile, and more.
                </div>
            </motion.div>
        </section>
    );
}
