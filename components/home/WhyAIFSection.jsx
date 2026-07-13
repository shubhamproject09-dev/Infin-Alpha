"use client";

import {
    ShieldCheck,
    Landmark,
    TrendingUp,
    BriefcaseBusiness,
} from "lucide-react";
import { motion } from "framer-motion";

export default function WhyAIFSection() {

    const points = [
        {
            icon: <ShieldCheck size={22} />,
            title: "Technical vs Real NPAs",
            text: "Lower GNPA ratios often reflect settlements and write-offs, while the underlying stressed assets continue to remain unresolved across the ecosystem.",
        },
        {
            icon: <Landmark size={22} />,
            title: "Hidden Asset Pool",
            text: "Over ₹15–16 lakh crore of written-off loans continue to create a scalable secondary market opportunity for specialized investors.",
        },
        {
            icon: <BriefcaseBusiness size={22} />,
            title: "Beyond Traditional Banks",
            text: "NBFCs and financial institutions continue to hold distressed assets awaiting recapitalization and strategic restructuring.",
        },
        {
            icon: <TrendingUp size={22} />,
            title: "Role of Specialized AIFs",
            text: "Alternative Investment Funds bring patient capital, flexible structures, and faster execution to complex turnaround opportunities.",
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
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    const pointVariants = {
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
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    const statCardVariants = {
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
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    return (
        <section className="relative overflow-hidden py-24 lg:py-32 bg-[#00314A]">

            {/* BACKGROUND EFFECTS */}
            <div className="absolute inset-0">
                {/* Green Glow */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.3, 0.2],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#009A9E]/20 blur-3xl rounded-full"
                />

                {/* Right Glow */}
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#7ACED4]/10 blur-3xl rounded-full"
                />

                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage:
                            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                        backgroundSize: "80px 80px",
                    }}
                ></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* TOP CONTENT */}
                <motion.div
                    className="grid lg:grid-cols-12 gap-16 items-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                >
                    {/* LEFT */}
                    <motion.div
                        variants={fadeLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        className="lg:col-span-5"
                    >
                        <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="inline-flex items-center px-4 py-2 rounded-full bg-[#009A9E]/10 border border-[#009A9E]/20 text-[#7ACED4] text-sm font-medium backdrop-blur-md"
                        >
                            India’s Evolving Credit Landscape
                        </motion.span>

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
                            className="mt-8 text-4xl lg:text-5xl font-bold text-white leading-tight"
                        >
                            Why Specialized
                            Alternative Funds
                            Are Positioned to Lead
                        </motion.h2>
                    </motion.div>

                    {/* RIGHT */}
                    <motion.div
                        variants={fadeRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        className="lg:col-span-7"
                    >
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ delay: 0.4, duration: 0.7 }}
                            className="text-lg leading-9 text-slate-300 max-w-4xl"
                        >
                            Beneath improving banking numbers lies a large ecosystem
                            of unresolved stressed assets, written-off exposures,
                            and complex restructuring opportunities requiring
                            specialized capital, operational expertise, and
                            long-term strategic execution.
                        </motion.p>
                    </motion.div>
                </motion.div>

                {/* MAIN LAYOUT */}
                <motion.div
                    className="mt-24 relative"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.1 }}
                >
                    {/* Vertical Gradient Line */}
                    <motion.div
                        initial={{ scaleY: 0, opacity: 0 }}
                        whileInView={{ scaleY: 1, opacity: 1 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 1.2, delay: 0.5 }}
                        className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-[#009A9E] via-[#7ACED4]/50 to-transparent origin-top"
                    />

                    <div className="space-y-20">
                        {points.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={pointVariants}
                                className="grid lg:grid-cols-12 gap-10 items-start group"
                            >
                                {/* ICON SIDE */}
                                <div className="lg:col-span-2 relative">
                                    <motion.div
                                        whileHover={{
                                            scale: 1.2,
                                            rotate: [0, -10, 10, -5, 5, 0],
                                            transition: { duration: 0.5 },
                                        }}
                                        className="relative z-10 w-11 h-11 rounded-full bg-gradient-to-br from-[#009A9E] to-[#00314A] text-white flex items-center justify-center shadow-[0_0_25px_rgba(0,154,158,0.35)] group-hover:scale-110 transition duration-300"
                                    >
                                        {item.icon}
                                    </motion.div>
                                </div>

                                {/* CONTENT SIDE */}
                                <div className="lg:col-span-10">
                                    <motion.div
                                        whileHover={{
                                            scale: 1.02,
                                            transition: { duration: 0.3 },
                                        }}
                                        className="relative overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-xl rounded-[32px] p-8 lg:p-10 hover:border-[#009A9E]/30 transition-all duration-500"
                                    >
                                        {/* Hover Glow */}
                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-[#009A9E]/5 via-transparent to-[#7ACED4]/5"></div>

                                        <div className="relative z-10 grid lg:grid-cols-12 gap-8">
                                            {/* TITLE */}
                                            <div className="lg:col-span-4">
                                                <motion.span
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: false, amount: 0.3 }}
                                                    transition={{ delay: 0.2 + index * 0.1 }}
                                                    className="text-[#7ACED4] text-sm font-semibold tracking-widest uppercase"
                                                >
                                                    0{index + 1}
                                                </motion.span>

                                                <motion.h3
                                                    initial={{ opacity: 0, y: 20 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: false, amount: 0.3 }}
                                                    transition={{ delay: 0.3 + index * 0.1 }}
                                                    className="mt-4 text-2xl lg:text-3xl font-bold text-white leading-snug"
                                                >
                                                    {item.title}
                                                </motion.h3>
                                            </div>

                                            {/* TEXT */}
                                            <div className="lg:col-span-8">
                                                <motion.p
                                                    initial={{ opacity: 0, y: 20 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: false, amount: 0.3 }}
                                                    transition={{ delay: 0.4 + index * 0.1 }}
                                                    className="text-base leading-8 text-slate-300"
                                                >
                                                    {item.text}
                                                </motion.p>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* BOTTOM STATS */}
                <motion.div
                    className="mt-28"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* CARD 1 */}
                        <motion.div
                            variants={statCardVariants}
                            whileHover={{
                                scale: 1.05,
                                y: -10,
                                transition: { duration: 0.3 },
                            }}
                            className="relative overflow-hidden rounded-[32px] border border-[#009A9E]/20 bg-gradient-to-br from-[#009A9E]/10 to-emerald-500/5 p-10 backdrop-blur-xl"
                        >
                            <motion.div
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.1, 0.2, 0.1],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="absolute top-0 right-0 w-40 h-40 bg-[#009A9E]/10 blur-3xl rounded-full"
                            />

                            <div className="relative z-10">
                                <motion.h3
                                    initial={{ scale: 0.5, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: false, amount: 0.2 }}
                                    transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
                                    className="text-3xl lg:text-3xl font-bold text-[#7ACED4]"
                                >
                                    ₹15L+
                                </motion.h3>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false, amount: 0.2 }}
                                    transition={{ delay: 0.5, duration: 0.6 }}
                                    className="mt-5 text-slate-300 leading-8"
                                >
                                    Written-off loans continue to drive large-scale
                                    secondary market opportunities.
                                </motion.p>
                            </div>
                        </motion.div>

                        {/* CARD 2 */}
                        <motion.div
                            variants={statCardVariants}
                            whileHover={{
                                scale: 1.05,
                                y: -10,
                                transition: { duration: 0.3 },
                            }}
                            className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl"
                        >
                            <motion.h3
                                initial={{ scale: 0.5, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ delay: 0.4, duration: 0.5, type: "spring" }}
                                className="text-3xl font-bold text-[#7ACED4]"
                            >
                                Patient Capital
                            </motion.h3>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ delay: 0.6, duration: 0.6 }}
                                className="mt-5 text-slate-300 leading-8"
                            >
                                Flexible AIF structures designed for long-term
                                value creation beyond traditional lending cycles.
                            </motion.p>
                        </motion.div>

                        {/* CARD 3 - Added extra card for balance */}
                        <motion.div
                            variants={statCardVariants}
                            whileHover={{
                                scale: 1.05,
                                y: -10,
                                transition: { duration: 0.3 },
                            }}
                            className="relative overflow-hidden rounded-[32px] border border-[#009A9E]/20 bg-gradient-to-br from-[#009A9E]/10 to-emerald-500/5 p-10 backdrop-blur-xl"
                        >
                            <motion.div
                                animate={{
                                    scale: [1, 1.3, 1],
                                    opacity: [0.1, 0.3, 0.1],
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 1,
                                }}
                                className="absolute bottom-0 left-0 w-40 h-40 bg-[#7ACED4]/10 blur-3xl rounded-full"
                            />

                            <div className="relative z-10">
                                <motion.h3
                                    initial={{ scale: 0.5, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: false, amount: 0.2 }}
                                    transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
                                    className="text-3xl lg:text-3xl font-bold text-[#7ACED4]"
                                >
                                    ₹16L Cr
                                </motion.h3>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false, amount: 0.2 }}
                                    transition={{ delay: 0.7, duration: 0.6 }}
                                    className="mt-5 text-slate-300 leading-8"
                                >
                                    Total stressed assets waiting for
                                    specialized resolution frameworks.
                                </motion.p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}