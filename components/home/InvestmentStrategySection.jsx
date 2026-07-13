"use client";

import {
    ArrowRight,
    CircleDollarSign,
    BriefcaseBusiness,
    Scale,
    TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";

export default function InvestmentStrategySection() {

    const strategySteps = [
        {
            icon: <CircleDollarSign size={24} />,
            title: "Acquire at Deep Discount",
            description:
                "Targeting distressed and special situation assets with significant embedded recovery and turnaround potential.",
        },
        {
            icon: <BriefcaseBusiness size={24} />,
            title: "Capital Infusion & Structuring",
            description:
                "Providing strategic capital, restructuring frameworks, and operational stabilization support.",
        },
        {
            icon: <Scale size={24} />,
            title: "Resolution & Value Unlocking",
            description:
                "Driving legal, operational, and financial resolution strategies to maximize enterprise value.",
        },
        {
            icon: <TrendingUp size={24} />,
            title: "Strategic Exit Execution",
            description:
                "Creating profitable exits through refinancing, strategic sales, or capital market opportunities.",
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

    const fadeLeft = {
        hidden: {
            opacity: 0,
            x: -80,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    const fadeRight = {
        hidden: {
            opacity: 0,
            x: 80,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
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

    const stepVariants = {
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

    const highlightCardVariants = {
        hidden: {
            opacity: 0,
            y: 40,
            scale: 0.95,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    return (
        <section className="relative overflow-hidden py-24 lg:py-32 bg-white">

            {/* Background Glow */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.4, 0.6, 0.4],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D5F3F5]/40 blur-3xl rounded-full"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* TOP AREA */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    className="relative overflow-hidden rounded-[40px] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-[#EAF9FA]/40 p-8 sm:p-10 lg:p-16 text-left lg:text-center"
                >
                    {/* Background Glow */}
                    <motion.div
                        animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{
                            duration: 7,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#B8E8EC]/30 blur-3xl rounded-full"
                    />

                    <div className="relative z-10 max-w-5xl lg:mx-auto">
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="inline-flex items-center gap-2 rounded-full bg-[#D5F3F5] text-[#00314A] px-4 py-2 text-sm font-semibold"
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
                                className="w-2 h-2 rounded-full bg-[#009A9E]"
                            ></motion.div>
                            Investment Strategy
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
                            className="mt-8 text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-[1.5] tracking-tight"
                        >
                            Transforming Complex Credit
                            Situations into Structured
                            Investment Opportunities
                        </motion.h2>

                        {/* Paragraph */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ delay: 0.5, duration: 0.7 }}
                            className="mt-8 text-base sm:text-lg leading-8 text-slate-600 max-w-3xl mx-auto"
                        >
                            INFIN Alpha follows a sector-agnostic strategy focused on distressed
                            credit, litigation-backed assets, restructuring opportunities,
                            and businesses requiring strategic capital and operational revival.
                        </motion.p>

                        {/* Mini Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ delay: 0.7, duration: 0.7 }}
                            className="mt-12 flex flex-col sm:flex-row items-start lg:items-center justify-start lg:justify-center gap-8 sm:gap-12"
                        >
                            <div className="hidden sm:block w-px h-14 bg-slate-300"></div>
                            <div>
                                <motion.h3
                                    initial={{ scale: 0.5, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={{ delay: 0.9, duration: 0.5, type: "spring" }}
                                    className="text-3xl sm:text-3xl font-bold text-slate-900"
                                >
                                    Sector Agnostic
                                </motion.h3>
                                <p className="text-sm text-slate-500 mt-2">
                                    Flexible Investment Mandate
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* PROCESS FLOW */}
                <motion.div
                    className="mt-16 lg:mt-24"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.1 }}
                >
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative">
                        {/* Desktop Line */}
                        <motion.div
                            initial={{ scaleX: 0, opacity: 0 }}
                            whileInView={{ scaleX: 1, opacity: 1 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 1.2, delay: 0.5 }}
                            className="hidden lg:block absolute top-14 left-0 right-0 h-px bg-gradient-to-r from-[#B8E8EC] via-[#7ACED4] to-[#B8E8EC] origin-left"
                        />

                        {strategySteps.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={stepVariants}
                                className="relative group"
                            >
                                {/* STEP NUMBER */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                                    className="absolute -top-4 right-0 text-7xl font-bold text-slate-100 group-hover:text-[#EAF9FA] transition duration-500"
                                >
                                    0{index + 1}
                                </motion.div>

                                {/* ICON */}
                                <motion.div
                                    whileHover={{
                                        rotate: [0, -10, 10, -5, 5, 0],
                                        scale: 1.1,
                                        transition: { duration: 0.5 },
                                    }}
                                    className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#009A9E] to-[#00314A] text-white flex items-center justify-center shadow-xl shadow-[#D5F3F5]"
                                >
                                    {item.icon}
                                </motion.div>

                                {/* CONTENT */}
                                <div className="mt-10">
                                    <motion.h3
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: false, amount: 0.3 }}
                                        transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                                        className="text-lg sm:text-xl sm:text-2xl font-bold text-slate-900 leading-snug"
                                    >
                                        {item.title}
                                    </motion.h3>

                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: false, amount: 0.3 }}
                                        transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                                        className="mt-5 text-sm sm:text-base text-slate-600 leading-7"
                                    >
                                        {item.description}
                                    </motion.p>
                                </div>

                                {/* Arrow */}
                                {index !== strategySteps.length - 1 && (
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: false, amount: 0.3 }}
                                        transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                                        className="hidden lg:flex absolute top-7 -right-4 z-20 w-8 h-8 rounded-full bg-white border border-slate-200 items-center justify-center shadow-sm"
                                    >
                                        <ArrowRight size={16} className="text-[#009A9E]" />
                                    </motion.div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* BOTTOM HIGHLIGHT */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="mt-25 overflow-hidden rounded-[40px] bg-gradient-to-r from-[#00314A] via-[#0A3635] to-[#00314A] p-6 lg:p-14 relative"
                >
                    {/* Glow */}
                    <motion.div
                        animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.2, 0.4, 0.2],
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="absolute top-0 right-0 w-72 h-72 bg-[#EAF9FA]/20 blur-3xl rounded-full"
                    />

                    <div className="relative z-10 grid lg:grid-cols-12 gap-12 items-center">
                        {/* LEFT */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                            className="lg:col-span-5"
                        >
                            <motion.span
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="text-sm font-semibold tracking-[0.2em] uppercase text-[#7ACED4]"
                            >
                                Strategic Focus
                            </motion.span>

                            <motion.h3
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 0.7, delay: 0.6 }}
                                className="mt-6 text-3xl sm:text-4xl font-bold text-white leading-tight"
                            >
                                Focused on High-Conviction,
                                High-Yield Opportunities
                            </motion.h3>
                        </motion.div>

                        {/* RIGHT */}
                        <motion.div
                            className="lg:col-span-7 grid sm:grid-cols-2 gap-6"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.2 }}
                        >
                            {[
                                {
                                    title: "Distressed Credit",
                                    text: "NPAs, restructuring opportunities, and secondary market acquisitions."
                                },
                                {
                                    title: "Litigation Assets",
                                    text: "Legal and resolution-backed opportunities with strong value potential."
                                },
                                {
                                    title: "Turnaround Businesses",
                                    text: "Operationally viable enterprises requiring strategic recapitalization."
                                },
                                {
                                    title: "Special Situations",
                                    text: "Complex opportunities across sectors with asymmetric return potential."
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    variants={highlightCardVariants}
                                    whileHover={{
                                        scale: 1.05,
                                        y: -5,
                                        transition: { duration: 0.3 },
                                    }}
                                    className="border border-white/10 bg-white/5 backdrop-blur-xl rounded-3xl p-5 sm:p-6"
                                >
                                    <motion.h4
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: false, amount: 0.2 }}
                                        transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                                        className="text-white font-bold text-lg sm:text-xl"
                                    >
                                        {item.title}
                                    </motion.h4>

                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: false, amount: 0.2 }}
                                        transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                                        className="mt-3 text-slate-300 leading-7"
                                    >
                                        {item.text}
                                    </motion.p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}