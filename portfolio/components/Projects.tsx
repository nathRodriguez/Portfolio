"use client";
import { motion } from 'framer-motion';

const projects = [
    {
        title: 'Project One',
        description: 'A cool project about X. This project demonstrates advanced React patterns, state management, and API integration. It features a beautiful UI, responsive design, and robust error handling for a seamless user experience.',
        link: ''
    },
    {
        title: 'Project Two',
        description: 'An awesome project about Y. This app leverages Next.js server-side rendering, authentication, and dynamic routing. It is optimized for performance and accessibility, and includes comprehensive documentation.',
        link: ''
    },
    {
        title: 'Project Three',
        description: 'A fun project about Z. This project explores animation with Framer Motion, interactive UI components, and real-time data updates. It is designed for scalability and easy maintenance.',
        link: ''
    },
];


export default function Projects() {
    return (
        <motion.section
            id="projects"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -60 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.6, ease: 'easeInOut' }}
            className="w-full max-w-5xl mx-auto my-8 min-h-screen p-10"
        >
            <h3 className="text-3xl font-bold mb-8 text-teal-300 pl-2">Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {projects.map((project, idx) => (
                    <motion.a
                        key={idx}
                        href={project.link}
                        className="bg-teal-800 rounded-xl p-8 shadow-lg hover:scale-105 hover:bg-teal-700/60 transition-transform flex flex-col gap-2 cursor-pointer border-2 border-teal-600"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                    >
                        <h4 className="text-xl font-semibold mb-1 text-teal-200">{project.title}</h4>
                        <p className="text-stone-200">{project.description}</p>
                    </motion.a>
                ))}
            </div>
        </motion.section>
    );
}
