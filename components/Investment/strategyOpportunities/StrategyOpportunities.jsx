// components/Investment/strategyOpportunities/StrategyOpportunities.tsx

"use client";

import {
    ShieldCheck,
    TrendingUp,
    Landmark,
    Building2,
    ArrowUpRight,
    CheckCircle2,
    Briefcase,
    Scale,
    Wallet,
    Target,
    BarChart3,
    Sparkles,
    Layers3,
    Activity,
} from "lucide-react";
import { motion } from "framer-motion";

const opportunities = [
    {
        title: "Distressed Credit",
        desc: "Corporate debt, NPAs and stressed lending opportunities across sectors.",
        icon: Landmark,
    },
    {
        title: "Special Situations",
        desc: "Complex investment opportunities requiring strategic restructuring expertise.",
        icon: Briefcase,
    },
    {
        title: "Litigation Locked Assets",
        desc: "Undervalued assets requiring legal-commercial resolution strategies.",
        icon: Scale,
    },
    {
        title: "Turnaround Opportunities",
        desc: "Operationally viable businesses requiring fresh capital and restructuring.",
        icon: TrendingUp,
    },
];

const strategyFlow = [
    {
        title: "Identify Dislocation",
        desc: "Discover stressed and undervalued opportunities across sectors.",
    },
    {
        title: "Acquire Strategically",
        desc: "Acquire opportunities at deep discounts with downside protection.",
    },
    {
        title: "Inject Capital",
        desc: "Provide fresh strategic capital and restructuring expertise.",
    },
    {
        title: "Unlock Enterprise Value",
        desc: "Generate strategic exits and long-term value realization.",
    },
];

export default function StrategyOpportunities() {

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

    const flowVariants = {
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

    const focusVariants = {
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

    const trustVariants = {
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

    return (
        <section className="relative overflow-hidden bg-[#f8fafc]">

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
                    className="absolute top-0 left-0 w-80 h-80 bg-[#EAF9FA]/20 blur-3xl rounded-full"
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
                            Strategy & Opportunities
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
                            Strategic Investment
                            <span className="block mt-2 text-[#7ACED4]">
                                Opportunities
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ delay: 0.5, duration: 0.7 }}
                            className="mt-8 max-w-4xl mx-auto text-base sm:text-lg lg:text-xl leading-9 text-slate-300"
                        >
                            Sector agnostic investment opportunities
                            focused on distressed credit,
                            special situations,
                            litigation-locked assets,
                            and restructuring-led value creation strategies
                            across India's evolving private credit ecosystem.
                        </motion.p>
                    </motion.div>
                </div>
            </motion.div>

            {/* MAIN WRAPPER */}
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
                        className="relative overflow-hidden rounded-[40px] border border-slate-200 bg-white shadow-[0_20px_80px_rgba(15,23,42,0.08)]"
                    >
                        {/* GLOW */}
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
                            className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#EAF9FA]/10 blur-3xl rounded-full"
                        />

                        {/* TOP SECTION */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.8 }}
                            className="relative overflow-hidden bg-gradient-to-r from-slate-950 via-slate-900 to-[#0A3635] px-6 sm:px-10 lg:px-16"
                            style={{
                                paddingTop: "90px",
                                paddingBottom: "90px",
                            }}
                        >
                            <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(white_1px,transparent_1px)] bg-[size:26px_26px]" />

                            <div className="relative z-10 max-w-5xl">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="inline-flex items-center gap-2 rounded-full border border-[#EAF9FA]/20 bg-[#EAF9FA]/10 px-4 py-2 text-sm font-semibold text-[#7ACED4]"
                                >
                                    <Sparkles size={16} />
                                    Opportunity Landscape
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
                                    className="mt-8 text-3xl sm:text-3xl lg:text-5xl font-bold leading-[1.05] tracking-[-0.04em] text-white"
                                >
                                    Alternative Investments
                                    <span className="block mt-2 text-[#7ACED4]">
                                        Built for Value Creation
                                    </span>
                                </motion.h2>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={{ delay: 0.5, duration: 0.7 }}
                                    className="mt-8 max-w-4xl text-base sm:text-lg lg:text-xl leading-9 text-slate-300"
                                >
                                    INFIN Alpha LLP seeks opportunities
                                    where systemic dislocations,
                                    distressed balance sheets,
                                    and restructuring requirements
                                    create asymmetric investment upside
                                    with disciplined downside protection.
                                </motion.p>
                            </div>
                        </motion.div>

                        {/* OPPORTUNITY GRID */}
                        <div className="relative z-10 p-5 sm:p-8 lg:p-12">
                            <motion.div
                                className="gap-6"
                                style={{
                                    display: "grid",
                                    gridTemplateColumns:
                                        "repeat(auto-fit, minmax(280px, 1fr))",
                                }}
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.1 }}
                            >
                                {opportunities.map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        variants={cardVariants}
                                        whileHover={{
                                            y: -10,
                                            scale: 1.02,
                                            borderColor: "#7ACED4",
                                            boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
                                            transition: { duration: 0.3 },
                                        }}
                                        className="group relative overflow-hidden rounded-[36px] border border-slate-200 bg-white p-8 shadow-lg hover:shadow-2xl hover:border-[#7ACED4] transition-all duration-500"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#EAF9FA]/0 to-[#D5F3F5]/0 group-hover:from-[#EAF9FA] group-hover:to-white transition-all duration-500"></div>

                                        <div className="relative z-10">
                                            <motion.div
                                                whileHover={{
                                                    rotate: [0, -10, 10, -5, 5, 0],
                                                    scale: 1.1,
                                                    transition: { duration: 0.5 },
                                                }}
                                                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#009A9E] to-[#00314A] flex items-center justify-center text-white shadow-lg shadow-[#EAF9FA]/20"
                                            >
                                                <item.icon size={28} />
                                            </motion.div>

                                            <motion.h3
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: false, amount: 0.3 }}
                                                transition={{ delay: 0.2 + idx * 0.1, duration: 0.6 }}
                                                className="mt-8 text-3xl font-bold text-[#00314A] leading-tight"
                                            >
                                                {item.title}
                                            </motion.h3>

                                            <motion.p
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: false, amount: 0.3 }}
                                                transition={{ delay: 0.3 + idx * 0.1, duration: 0.6 }}
                                                className="mt-6 text-sm sm:text-base leading-8"
                                                style={{ color: "#000000" }}
                                            >
                                                {item.desc}
                                            </motion.p>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>

                            {/* STRATEGY FLOW */}
                            <motion.div
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="mt-14"
                                style={{ marginTop: "30px" }}
                            >
                                <div className="relative overflow-hidden rounded-[40px] p-6 sm:p-8 lg:p-12 shadow-2xl" style={{ background: "#F8FCFC" }}>
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
                                        className="absolute top-0 right-0 w-96 h-96 bg-[#EAF9FA]/20 blur-3xl rounded-full"
                                    />

                                    <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(white_1px,transparent_1px)] bg-[size:22px_22px]" />

                                    <div className="relative z-10">
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
                                                className="inline-flex items-center gap-2 rounded-full border border-[#EAF9FA]/20 bg-[#EAF9FA]/10 px-4 py-2 text-sm font-semibold text-[#00314A]"
                                            >
                                                <Activity size={16} />
                                                Execution Framework
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
                                                className="mt-6 text-4xl sm:text-5xl font-bold leading-tight text-[#7ACED4]"
                                            >
                                                Strategic Investment Lifecycle
                                            </motion.h3>
                                        </motion.div>

                                        <motion.div
                                            className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3"
                                            variants={staggerContainer}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: false, amount: 0.1 }}
                                        >
                                            {strategyFlow.map((item, idx) => (
                                                <motion.div
                                                    key={idx}
                                                    variants={flowVariants}
                                                    whileHover={{
                                                        y: -10,
                                                        scale: 1.05,
                                                        borderColor: "#7ACED4",
                                                        boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                                                        transition: { duration: 0.3 },
                                                    }}
                                                    className="relative rounded-[30px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                                                >
                                                    <motion.div
                                                        whileHover={{
                                                            scale: 1.1,
                                                            rotate: [0, -10, 10, -5, 5, 0],
                                                            transition: { duration: 0.5 },
                                                        }}
                                                        className="w-14 h-14 rounded-2xl bg-[#EAF9FA]/20 flex items-center justify-center text-[#7ACED4] text-xl font-bold"
                                                    >
                                                        0{idx + 1}
                                                    </motion.div>

                                                    <motion.h4
                                                        initial={{ opacity: 0, y: 20 }}
                                                        whileInView={{ opacity: 1, y: 0 }}
                                                        viewport={{ once: false, amount: 0.3 }}
                                                        transition={{ delay: 0.2 + idx * 0.1, duration: 0.6 }}
                                                        className="mt-6 text-2xl font-bold text-black leading-tight"
                                                    >
                                                        {item.title}
                                                    </motion.h4>

                                                    <motion.p
                                                        initial={{ opacity: 0, y: 20 }}
                                                        whileInView={{ opacity: 1, y: 0 }}
                                                        viewport={{ once: false, amount: 0.3 }}
                                                        transition={{ delay: 0.3 + idx * 0.1, duration: 0.6 }}
                                                        className="mt-4 text-sm leading-7 text-black/80"
                                                    >
                                                        {item.desc}
                                                    </motion.p>
                                                </motion.div>
                                            ))}
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* AREA OF FOCUS */}
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
                                        <Target size={16} />
                                        Initial Fund Focus
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
                                            High Potential
                                        </span>
                                        <span className="block mt-2 text-[#009A9E]">
                                            Investment Segments
                                        </span>
                                    </motion.h3>
                                </motion.div>

                                <motion.div
                                    className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
                                    variants={staggerContainer}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: false, amount: 0.1 }}
                                >
                                    {[
                                        "Distressed assets with operational viability",
                                        "Companies impacted by temporary dislocations",
                                        "Litigation and restructuring-led opportunities",
                                        "High-yield private credit structures",
                                        "Strategic turnaround situations",
                                        "Deep value acquisitions across sectors",
                                    ].map((item, idx) => (
                                        <motion.div
                                            key={idx}
                                            variants={focusVariants}
                                            whileHover={{
                                                y: -10,
                                                scale: 1.05,
                                                borderColor: "#7ACED4",
                                                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                                                transition: { duration: 0.3 },
                                            }}
                                            className="group rounded-[30px] border border-slate-200 bg-white p-6 shadow-md hover:shadow-2xl hover:border-[#7ACED4] transition-all duration-500"
                                        >
                                            <motion.div
                                                whileHover={{
                                                    rotate: [0, -10, 10, -5, 5, 0],
                                                    scale: 1.1,
                                                    transition: { duration: 0.5 },
                                                }}
                                                className="w-14 h-14 rounded-2xl border-2 border-[#EAF9FA] text-[#009A9E] flex items-center justify-center bg-[#EAF9FA]"
                                            >
                                                <Layers3 size={24} />
                                            </motion.div>

                                            <motion.h4
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: false, amount: 0.3 }}
                                                transition={{ delay: 0.2 + idx * 0.1, duration: 0.6 }}
                                                className="mt-6 text-2xl font-bold text-[#00314A] leading-tight"
                                            >
                                                Opportunity {idx + 1}
                                            </motion.h4>

                                            <motion.p
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: false, amount: 0.3 }}
                                                transition={{ delay: 0.3 + idx * 0.1, duration: 0.6 }}
                                                className="mt-4 text-sm leading-7"
                                                style={{ color: "#000000" }}
                                            >
                                                {item}
                                            </motion.p>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </motion.div>

                            {/* WHY OPPORTUNITY EXISTS */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 0.7, delay: 0.4 }}
                                className="mt-16"
                            >
                                <motion.div
                                    whileHover={{
                                        scale: 1.02,
                                        boxShadow: "0 20px 40px rgba(0,0,0,0.05)",
                                        transition: { duration: 0.3 },
                                    }}
                                    className="rounded-[40px] border border-[#D5F3F5] bg-gradient-to-br from-[#EAF9FA] to-white p-8 sm:p-10 lg:p-14"
                                >
                                    <div className="max-w-4xl">
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: false, amount: 0.3 }}
                                            transition={{ duration: 0.5, delay: 0.2 }}
                                            className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-4 py-2 text-sm font-semibold text-[#00314A] shadow-sm"
                                        >
                                            Market Opportunity
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
                                            className="mt-6 text-4xl sm:text-5xl font-bold leading-tight text-[#00314A]"
                                        >
                                            Why These Opportunities
                                            Exist in India
                                        </motion.h3>
                                    </div>

                                    <motion.div
                                        className="mt-12 grid md:grid-cols-2 gap-6"
                                        variants={staggerContainer}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: false, amount: 0.2 }}
                                    >
                                        {[
                                            "Growing stressed asset ecosystem across sectors.",
                                            "Large supply of distressed and special situation opportunities.",
                                            "Systemic dislocations creating valuation inefficiencies.",
                                            "Need for patient institutional turnaround capital.",
                                            "Increasing restructuring and insolvency activity.",
                                            "Underpenetrated private credit and recovery ecosystem.",
                                        ].map((item, idx) => (
                                            <motion.div
                                                key={idx}
                                                variants={trustVariants}
                                                whileHover={{
                                                    scale: 1.02,
                                                    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                                                    transition: { duration: 0.3 },
                                                }}
                                                className="flex items-start gap-4 rounded-2xl border border-[#D5F3F5] bg-white p-5 shadow-sm"
                                            >
                                                <motion.div
                                                    animate={{
                                                        scale: [1, 1.2, 1],
                                                    }}
                                                    transition={{
                                                        duration: 2,
                                                        repeat: Infinity,
                                                        delay: idx * 0.15,
                                                        ease: "easeInOut",
                                                    }}
                                                >
                                                    <CheckCircle2
                                                        size={22}
                                                        className="text-[#009A9E] shrink-0 mt-1"
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
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}