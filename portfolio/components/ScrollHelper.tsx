"use client";
import { useEffect, useState } from "react";

const sections = [
    { id: "profile", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
];

export default function ScrollHelper() {
    const [active, setActive] = useState<string>(sections[0].id);

    useEffect(() => {
        const observers: IntersectionObserver[] = [];

        sections.forEach((s) => {
            const el = document.getElementById(s.id);
            if (!el) return;
            const obs = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) setActive(s.id);
                    });
                },
                { root: null, rootMargin: "0px", threshold: 0.5 }
            );
            obs.observe(el);
            observers.push(obs);
        });

        return () => observers.forEach((o) => o.disconnect());
    }, []);

    return (
        <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50">
            <ul className="flex flex-col items-center gap-6">
                {sections.map((s) => (
                    <li key={s.id} className="flex flex-col items-center">
                        <span className="text-sm text-stone-200 mb-2">{s.label}</span>
                        <a
                            href={`#${s.id}`}
                            className={`block w-3 h-3 rounded-full transition-all duration-300 ${active === s.id ? "bg-teal-300 scale-125" : "bg-stone-400/60"
                                }`}
                            aria-label={s.label}
                        />
                    </li>
                ))}
            </ul>
        </nav>
    );
}
