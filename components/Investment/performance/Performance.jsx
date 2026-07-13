"use client";

import {
    ShieldCheck,
    TrendingUp,
    BarChart3,
    Building2,
    Landmark,
    CheckCircle2,
    ArrowUpRight,
    Target,
    Briefcase,
    Wallet,
} from "lucide-react";
import { motion } from "framer-motion";

const stats = [
    {
        title: "₹500 Cr",
        subtitle: "First Close Target",
    },
    {
        title: "₹1000 Cr",
        subtitle: "Total Fund Corpus",
    },
    {
        title: "12%",
        subtitle: "Hurdle Rate",
    },
];

const assetClasses = [
    {
        title: "Stressed Corporate Debt",
        desc: "NPAs, IBC cases, bank and ARC sales.",
        icon: Landmark,
    },
    {
        title: "Overleveraged Companies",
        desc: "Strong business fundamentals with heavy debt structures.",
        icon: Building2,
    },
    {
        title: "Stalled Projects",
        desc: "Infrastructure, manufacturing and real estate revival opportunities.",
        icon: Briefcase,
    },
    {
        title: "Asset-backed Distress",
        desc: "Plants, operating infrastructure and strategic land assets.",
        icon: Wallet,
    },
];

export default function Performance() {

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

    const statVariants = {
        hidden: {
            opacity: 0,
            scale: 0.8,
            y: 30,
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.6,
                type: "spring",
                stiffness: 200,
                damping: 15,
            },
        },
    };

    const detailVariants = {
        hidden: {
            opacity: 0,
            x: -30,
            scale: 0.95,
        },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    const assetVariants = {
        hidden: {
            opacity: 0,
            y: 40,
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
        <section className="relative overflow-hidden bg-white">

            {/* HERO SECTION */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative overflow-hidden bg-gradient-to-br from-[#00314A] via-[#0A3635] to-[#00314A]"
                style={{
                    paddingTop: "140px",
                    paddingBottom: "140px",
                }}
            >
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-0 left-0 w-72 h-72 bg-[#EAF9FA]/20 blur-3xl rounded-full"
                />

                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.1, 0.3, 0.1],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute bottom-0 right-0 w-96 h-96 bg-[#7ACED4]/10 blur-3xl rounded-full"
                />

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.04 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] bg-[size:24px_24px]"
                />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="max-w-5xl mx-auto text-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.3 }}
                            className="inline-flex items-center gap-2 rounded-full border border-[#EAF9FA]/20 bg-[#EAF9FA]/10 px-4 py-2 text-sm font-medium text-[#7ACED4] backdrop-blur-md"
                        >
                            <motion.div
                                animate={{
                                    rotate: [0, 360],
                                }}
                                transition={{
                                    duration: 10,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                            >
                                <ShieldCheck size={16} />
                            </motion.div>
                            Fund Performance & Investment Metrics
                        </motion.div>

                        <motion.h1
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
                            className="mt-8 text-3xl sm:text-3xl lg:text-5xl font-bold leading-[1.05] tracking-tight text-white"
                        >
                            Performance
                            <span className="block mt-2 text-[#7ACED4]">
                                Investment Outlook
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ delay: 0.5, duration: 0.7 }}
                            className="mt-8 max-w-4xl mx-auto text-base sm:text-lg lg:text-xl leading-9 text-slate-300"
                        >
                            Institutional-grade alternative investment strategy
                            focused on distressed credit,
                            special situations,
                            turnaround opportunities,
                            and high-yield private credit investments.
                        </motion.p>
                    </motion.div>
                </div>
            </motion.div>

            {/* MAIN SECTION */}
            <div
                className="relative z-10 pb-20 sm:pb-24"
                style={{ marginTop: "80px" }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative overflow-hidden rounded-[36px] sm:rounded-[42px] border border-slate-200 bg-white shadow-2xl"
                    >
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
                            className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#EAF9FA]/10 blur-3xl rounded-full"
                        />

                        {/* TOP SECTION */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.8 }}
                            className="relative overflow-hidden bg-gradient-to-br from-[#00314A] via-[#0A3635] to-[#00314A] px-6 sm:px-10 lg:px-14"
                            style={{
                                paddingTop: "80px",
                                paddingBottom: "80px",
                            }}
                        >
                            <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(white_1px,transparent_1px)] bg-[size:24px_24px]" />

                            <div className="relative z-10 max-w-5xl">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="inline-flex items-center gap-2 rounded-full border border-[#EAF9FA]/20 bg-[#EAF9FA]/10 px-4 py-2 text-sm font-medium text-[#7ACED4] backdrop-blur-md"
                                >
                                    <TrendingUp size={16} />
                                    Fund Metrics
                                </motion.div>

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
                                    className="mt-8 text-3xl sm:text-5xl lg:text-5xl font-bold leading-[1.05] tracking-[-0.04em] text-white"
                                >
                                    Institutional-grade
                                    <span className="block mt-2 text-[#7ACED4]">
                                        Alternative Investment Fund
                                    </span>
                                </motion.h2>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={{ delay: 0.5, duration: 0.7 }}
                                    className="mt-8 max-w-4xl text-base sm:text-lg lg:text-xl leading-9 text-slate-300"
                                >
                                    BSOF aims to create strategic value
                                    through stressed credit opportunities,
                                    restructuring-led investments,
                                    and disciplined execution capabilities
                                    across India's evolving private credit ecosystem.
                                </motion.p>
                            </div>
                        </motion.div>

                        {/* STATS GRID */}
                        <div className="relative z-10 p-5 sm:p-8 lg:p-12">
                            <motion.div
                                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.1 }}
                            >
                                {stats.map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        variants={cardVariants}
                                        whileHover={{
                                            y: -10,
                                            scale: 1.05,
                                            borderColor: "#7ACED4",
                                            boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                                            transition: { duration: 0.3 },
                                        }}
                                        className="group rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl hover:border-[#7ACED4] transition-all duration-500"
                                    >
                                        <motion.div
                                            whileHover={{
                                                rotate: [0, -10, 10, -5, 5, 0],
                                                scale: 1.1,
                                                transition: { duration: 0.5 },
                                            }}
                                            className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#009A9E] to-[#00314A] flex items-center justify-center text-white"
                                        >
                                            <BarChart3 size={24} />
                                        </motion.div>

                                        <motion.h3
                                            variants={statVariants}
                                            className="mt-6 text-4xl font-bold text-[#009A9E]"
                                        >
                                            {item.title}
                                        </motion.h3>

                                        <motion.p
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: false, amount: 0.3 }}
                                            transition={{ delay: 0.2 + idx * 0.1, duration: 0.6 }}
                                            className="mt-4 text-sm leading-7"
                                            style={{ color: "#000000" }}
                                        >
                                            {item.subtitle}
                                        </motion.p>
                                    </motion.div>
                                ))}
                            </motion.div>

                            {/* FUND DETAILS */}
                            <motion.div
                                className="mt-12 grid lg:grid-cols-2 gap-8"
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.1 }}
                            >
                                {/* LEFT CARD */}
                                <motion.div
                                    variants={cardVariants}
                                    whileHover={{
                                        y: -10,
                                        scale: 1.02,
                                        boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
                                        transition: { duration: 0.3 },
                                    }}
                                    className="rounded-[36px] border border-slate-200 bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-500"
                                >
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: false, amount: 0.3 }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                        className="inline-flex items-center gap-2 rounded-full border border-[#D5F3F5] bg-[#EAF9FA] px-4 py-2 text-sm font-semibold text-[#00314A]"
                                    >
                                        <Target size={16} />
                                        Fund Details
                                    </motion.div>

                                    <motion.h3
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: false, amount: 0.3 }}
                                        transition={{ delay: 0.3, duration: 0.7 }}
                                        className="mt-6 text-4xl font-bold text-[#009A9E]"
                                    >
                                        Investment Parameters
                                    </motion.h3>

                                    <motion.div
                                        className="mt-8 space-y-5"
                                        variants={staggerContainer}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: false, amount: 0.3 }}
                                    >
                                        {[
                                            "Fund term of 5 years with extension option up to 2 years.",
                                            "Minimum investor commitment of INR 1 Crore.",
                                            "Investment ticket size between INR 50–75 Crores.",
                                            "Focused on stressed credit and restructuring opportunities.",
                                        ].map((item, idx) => (
                                            <motion.div
                                                key={idx}
                                                variants={detailVariants}
                                                whileHover={{
                                                    x: 5,
                                                    transition: { duration: 0.3 },
                                                }}
                                                className="flex items-start gap-4"
                                            >
                                                <motion.div
                                                    animate={{
                                                        scale: [1, 1.2, 1],
                                                    }}
                                                    transition={{
                                                        duration: 2,
                                                        repeat: Infinity,
                                                        delay: idx * 0.2,
                                                        ease: "easeInOut",
                                                    }}
                                                >
                                                    <CheckCircle2
                                                        size={20}
                                                        className="text-[#009A9E] mt-1 shrink-0"
                                                    />
                                                </motion.div>
                                                <p
                                                    className="text-sm sm:text-base leading-8"
                                                    style={{ color: "#000000" }}
                                                >
                                                    {item}
                                                </p>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                </motion.div>

                                {/* RIGHT CARD */}
                                <motion.div
                                    variants={cardVariants}
                                    whileHover={{
                                        y: -10,
                                        scale: 1.02,
                                        boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
                                        transition: { duration: 0.3 },
                                    }}
                                    className="relative overflow-hidden rounded-[36px] bg-[#00314A] p-8 shadow-2xl"
                                >
                                    <motion.div
                                        animate={{
                                            scale: [1, 1.2, 1],
                                            opacity: [0.2, 0.4, 0.2],
                                        }}
                                        transition={{
                                            duration: 6,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                        className="absolute top-0 right-0 w-72 h-72 bg-[#EAF9FA]/20 blur-3xl rounded-full"
                                    />

                                    <div className="relative z-10">
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: false, amount: 0.3 }}
                                            transition={{ duration: 0.5, delay: 0.2 }}
                                            className="inline-flex items-center gap-2 rounded-full border border-[#EAF9FA]/20 bg-[#EAF9FA]/10 px-4 py-2 text-sm font-semibold text-[#7ACED4]"
                                        >
                                            Strategic Edge
                                        </motion.div>

                                        <motion.h3
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: false, amount: 0.3 }}
                                            transition={{ delay: 0.3, duration: 0.7 }}
                                            className="mt-6 text-4xl font-bold leading-tight text-[#7ACED4]"
                                        >
                                            Why Invest in BSOF AIF
                                        </motion.h3>

                                        <motion.div
                                            className="mt-8 space-y-5"
                                            style={{ color: "#000000" }}
                                            variants={staggerContainer}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: false, amount: 0.3 }}
                                        >
                                            {[
                                                "Flexible capital structures and tailored investment solutions.",
                                                "Resolution-focused execution with turnaround expertise.",
                                                "Patient institutional capital with long-term outlook.",
                                                "Strong opportunity pipeline across stressed assets.",
                                            ].map((item, idx) => (
                                                <motion.div
                                                    key={idx}
                                                    variants={detailVariants}
                                                    whileHover={{
                                                        scale: 1.02,
                                                        backgroundColor: "rgba(0,154,158,0.1)",
                                                        transition: { duration: 0.3 },
                                                    }}
                                                    className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"
                                                >
                                                    <motion.div
                                                        animate={{
                                                            x: [0, 5, 0],
                                                        }}
                                                        transition={{
                                                            duration: 2,
                                                            repeat: Infinity,
                                                            delay: idx * 0.2,
                                                            ease: "easeInOut",
                                                        }}
                                                    >
                                                        <ArrowUpRight
                                                            size={18}
                                                            className="text-[#7ACED4] mt-1 shrink-0"
                                                        />
                                                    </motion.div>
                                                    <p className="text-sm sm:text-base leading-8 text-white/90">
                                                        {item}
                                                    </p>
                                                </motion.div>
                                            ))}
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </motion.div>

                            {/* ASSET CLASSES */}
                            <motion.div
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.1 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="mt-16"
                            >
                                <motion.div
                                    className="text-center"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: false, amount: 0.2 }}
                                >
                                    <motion.div
                                        variants={fadeUp}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: false, amount: 0.3 }}
                                        className="inline-flex items-center gap-2 rounded-full border border-[#D5F3F5] bg-[#EAF9FA] px-4 py-2 text-sm font-semibold text-[#00314A]"
                                    >
                                        <Building2 size={16} />
                                        Target Asset Classes
                                    </motion.div>

                                    <motion.h3
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
                                        className="mt-6 text-4xl sm:text-5xl font-bold leading-tight"
                                    >
                                        <span style={{ color: "#000000" }}>
                                            Strategic Investment
                                        </span>
                                        <span className="block mt-2 text-[#009A9E]">
                                            Opportunity Segments
                                        </span>
                                    </motion.h3>
                                </motion.div>

                                <motion.div
                                    className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
                                    variants={staggerContainer}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: false, amount: 0.1 }}
                                >
                                    {assetClasses.map((item, idx) => (
                                        <motion.div
                                            key={idx}
                                            variants={assetVariants}
                                            whileHover={{
                                                y: -10,
                                                scale: 1.05,
                                                borderColor: "#7ACED4",
                                                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                                                transition: { duration: 0.3 },
                                            }}
                                            className="group rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl hover:border-[#7ACED4] transition-all duration-500"
                                        >
                                            <motion.div
                                                whileHover={{
                                                    rotate: [0, -10, 10, -5, 5, 0],
                                                    scale: 1.1,
                                                    transition: { duration: 0.5 },
                                                }}
                                                className="w-14 h-14 rounded-2xl border-2 border-[#EAF9FA] text-[#009A9E] flex items-center justify-center bg-[#EAF9FA]"
                                            >
                                                <item.icon size={24} />
                                            </motion.div>

                                            <motion.h4
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: false, amount: 0.3 }}
                                                transition={{ delay: 0.2 + idx * 0.1, duration: 0.6 }}
                                                className="mt-6 text-2xl font-bold text-[#009A9E] leading-tight"
                                            >
                                                {item.title}
                                            </motion.h4>

                                            <motion.p
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: false, amount: 0.3 }}
                                                transition={{ delay: 0.3 + idx * 0.1, duration: 0.6 }}
                                                className="mt-4 text-sm leading-7"
                                                style={{ color: "#000000" }}
                                            >
                                                {item.desc}
                                            </motion.p>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}