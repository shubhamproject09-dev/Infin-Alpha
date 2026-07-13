"use client";

import {
    ShieldCheck,
    Network,
    TrendingUp,
    BriefcaseBusiness,
    ChartNoAxesCombined,
} from "lucide-react";
import { motion } from "framer-motion";

export default function WhyTrustUsSection() {

    const trustPoints = [
        {
            icon: <BriefcaseBusiness size={24} />,
            title: "Industry Knowledge",
            description:
                "Deep expertise across stressed assets, restructuring, private credit, and special situations investing.",
        },
        {
            icon: <Network size={24} />,
            title: "Institutional Network",
            description:
                "Strong relationships with banks, ARCs, legal advisors, and institutional participants.",
        },
        {
            icon: <TrendingUp size={24} />,
            title: "Micro-Trend Intelligence",
            description:
                "Identifying turnaround-ready opportunities before broader market participation.",
        },
        {
            icon: <ChartNoAxesCombined size={24} />,
            title: "Experienced Leadership",
            description:
                "Decades of experience across distressed investing and strategic resolutions.",
        },
        {
            icon: <ShieldCheck size={24} />,
            title: "Disciplined Risk Management",
            description:
                "Structured investment processes focused on downside protection and recovery execution.",
        },
    ];

    // Animation variants
    const fadeUp = {
        hidden: {
            opacity: 0,
            y: 60,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 50,
            scale: 0.9,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    return (
        <section className="relative overflow-hidden py-20 sm:py-24 lg:py-32">

            {/* BACKGROUND IMAGE */}
            <motion.div
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2070&auto=format&fit=crop')",
                }}
            ></motion.div>

            {/* DARK OVERLAY */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 bg-[#00314A]/95"
            ></motion.div>

            {/* GREEN GLOW */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#009A9E]/10 blur-3xl rounded-full"
            />

            <div className="relative z-10">
                <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* TOP CONTENT */}
                    <motion.div
                        className="max-w-5xl mx-auto text-left lg:text-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        {/* Badge */}
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.3 }}
                            className="inline-flex items-center gap-2 rounded-full border border-[#009A9E]/20 bg-[#009A9E]/10 px-4 py-2 text-sm font-medium text-[#7ACED4] backdrop-blur-md"
                        >
                            <motion.div
                                animate={{
                                    scale: [1, 1.5, 1],
                                    opacity: [1, 0.5, 1],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                }}
                                className="w-2 h-2 rounded-full bg-[#7ACED4]"
                            ></motion.div>
                            Why Investors Trust INFIN Alpha
                        </motion.div>

                        {/* Heading */}
                        <motion.h2
                            initial={{
                                opacity: 0,
                                y: 40,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{
                                delay: 0.3,
                                duration: 0.8,
                            }}
                            className="mt-8 text-3xl sm:text-3xl lg:text-4xl font-bold text-white leading-[1.5] tracking-tight"
                        >
                            Experience, Insight &
                            Strategic Relationships
                            That Drive Better Outcomes
                        </motion.h2>

                        {/* Paragraph */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ delay: 0.5, duration: 0.7 }}
                            className="mt-8 max-w-3xl lg:mx-auto text-base sm:text-lg leading-8 text-slate-300"
                        >
                            INFIN Alpha combines institutional expertise,
                            restructuring intelligence, and strong market
                            relationships to identify and execute high-conviction
                            special situation opportunities across India's evolving
                            credit landscape.
                        </motion.p>
                    </motion.div>

                    {/* SLIDER STYLE CARDS */}
                    <motion.div
                        className="mt-16 lg:mt-20 overflow-hidden"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.1 }}
                    >
                        <div
                            className="flex gap-6 w-max animate-scroll"
                            suppressHydrationWarning
                        >
                            {[...trustPoints, ...trustPoints, ...trustPoints].map((item, index) => {
                                const originalIndex = index % trustPoints.length;
                                return (
                                    <motion.div
                                        key={index}
                                        variants={cardVariants}
                                        whileHover={{
                                            y: -12,
                                            scale: 1.03,
                                            borderColor: "rgba(0,154,158,0.3)",
                                            transition: { duration: 0.3 },
                                        }}
                                        className="group relative w-[280px] sm:w-[300px] lg:w-[320px] min-h-[320px] rounded-[32px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-8 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:border-[#009A9E]/30 flex-shrink-0"
                                    >
                                        {/* Glow */}
                                        <motion.div
                                            animate={{
                                                scale: [1, 1.2, 1],
                                                opacity: [0, 0.3, 0],
                                            }}
                                            transition={{
                                                duration: 3,
                                                repeat: Infinity,
                                                delay: index * 0.1,
                                            }}
                                            className="absolute top-0 right-0 w-40 h-40 bg-[#009A9E]/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition duration-500"
                                        />

                                        {/* Number */}
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.5 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: false, amount: 0.3 }}
                                            transition={{ delay: 0.2 + originalIndex * 0.1, duration: 0.5 }}
                                            className="absolute top-6 right-6 text-6xl font-bold text-white/5"
                                        >
                                            0{originalIndex + 1}
                                        </motion.div>

                                        <div className="relative z-10">
                                            {/* Icon */}
                                            <motion.div
                                                whileHover={{
                                                    rotate: [0, -10, 10, -5, 5, 0],
                                                    scale: 1.1,
                                                    transition: { duration: 0.5 },
                                                }}
                                                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#009A9E] to-[#00314A] text-white flex items-center justify-center shadow-xl shadow-[#009A9E]/20"
                                            >
                                                {item.icon}
                                            </motion.div>

                                            {/* Title */}
                                            <motion.h3
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: false, amount: 0.3 }}
                                                transition={{ delay: 0.3 + originalIndex * 0.1, duration: 0.6 }}
                                                className="mt-10 text-2xl font-bold text-white leading-snug"
                                            >
                                                {item.title}
                                            </motion.h3>

                                            {/* Description */}
                                            <motion.p
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: false, amount: 0.3 }}
                                                transition={{ delay: 0.4 + originalIndex * 0.1, duration: 0.6 }}
                                                className="mt-6 text-slate-300 leading-8 text-sm sm:text-base"
                                            >
                                                {item.description}
                                            </motion.p>
                                        </div>

                                        {/* Bottom Line */}
                                        <motion.div
                                            initial={{ scaleX: 0, opacity: 0 }}
                                            whileInView={{ scaleX: 1, opacity: 1 }}
                                            viewport={{ once: false, amount: 0.3 }}
                                            transition={{ delay: 0.5 + originalIndex * 0.1, duration: 0.8 }}
                                            className="relative z-10 mt-10 w-full h-px bg-gradient-to-r from-[#009A9E]/40 to-transparent origin-left"
                                        />
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* Add CSS for animation if not already present */}
            <style jsx>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-33.33%);
                    }
                }
                .animate-scroll {
                    animation: scroll 30s linear infinite;
                }
                .animate-scroll:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
}