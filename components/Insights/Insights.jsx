"use client";

import {
    ShieldCheck,
    Lightbulb,
    TrendingUp,
    BookOpen,
    ArrowUpRight,
    Building2,
    Newspaper,
    Podcast,
    CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const insights = [
    {
        title: "India's Stressed Asset Opportunity",
        desc: "Deep insights into India's ₹12 lakh crore distressed and special situations market.",
        icon: TrendingUp,
    },
    {
        title: "Alternative Investment Strategies",
        desc: "Understanding private credit, structured investments and special situation opportunities.",
        icon: BookOpen,
    },
    {
        title: "Turnaround & Resolution Trends",
        desc: "Market trends shaping restructuring-led investments and institutional recoveries.",
        icon: Building2,
    },
];

const publications = [
    {
        title: "Private Credit & Special Situations",
        type: "Research Article",
    },
    {
        title: "Institutional Distressed Asset Investing",
        type: "Thought Leadership",
    },
    {
        title: "Alternative Investments Outlook 2025",
        type: "Market Insight",
    },
];

export default function Insights() {

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

    const publicationVariants = {
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

    const mediaVariants = {
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

    const buttonVariants = {
        hidden: {
            opacity: 0,
            y: 30,
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
        hover: {
            scale: 1.05,
            transition: {
                duration: 0.3,
            },
        },
        tap: {
            scale: 0.95,
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
                            Thought Leadership & Insights
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
                            Market Intelligence
                            <span className="block mt-2 text-[#7ACED4]">
                                Investment Insights
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ delay: 0.5, duration: 0.7 }}
                            className="mt-8 max-w-4xl mx-auto text-base sm:text-lg lg:text-xl leading-9 text-slate-300"
                        >
                            Insights, research publications,
                            strategic perspectives,
                            and institutional commentary
                            on India's evolving private credit,
                            distressed assets,
                            and alternative investment ecosystem.
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
                                    <Lightbulb size={16} />
                                    Industry Perspectives
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
                                    Institutional
                                    <span className="block mt-2 text-[#7ACED4]">
                                        Thought Leadership
                                    </span>
                                </motion.h2>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={{ delay: 0.5, duration: 0.7 }}
                                    className="mt-8 max-w-4xl text-base sm:text-lg lg:text-xl leading-9 text-slate-300"
                                >
                                    INFIN ALPHA LLP provides strategic perspectives
                                    on distressed investments,
                                    restructuring opportunities,
                                    private credit markets,
                                    and special situations investing
                                    shaping India's alternative investment landscape.
                                </motion.p>
                            </div>
                        </motion.div>

                        {/* INSIGHTS GRID */}
                        <div className="relative z-10 p-5 sm:p-8 lg:p-12">
                            <motion.div
                                className="gap-6"
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                                }}
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.1 }}
                            >
                                {insights.map((item, idx) => (
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
                                        className="group rounded-[36px] border border-slate-200 bg-white p-8 shadow-xl hover:shadow-2xl hover:border-[#7ACED4] transition-all duration-500 h-full"
                                    >
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
                                            className="mt-8 text-2xl font-bold text-[#009A9E] leading-tight"
                                        >
                                            {item.title}
                                        </motion.h3>

                                        <motion.p
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: false, amount: 0.3 }}
                                            transition={{ delay: 0.3 + idx * 0.1, duration: 0.6 }}
                                            className="mt-6 text-sm sm:text-base leading-8"
                                        >
                                            {item.desc}
                                        </motion.p>

                                        <motion.div
                                            variants={buttonVariants}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: false, amount: 0.3 }}
                                        >
                                            <Link
                                                href={
                                                    idx === 0
                                                        ? "/thought-leadership/stressed-asset-opportunity"
                                                        : idx === 1
                                                            ? "/thought-leadership/alternative-investments"
                                                            : "/thought-leadership/turnaround-resolution-trends"
                                                }
                                                className="mt-10 inline-flex items-center gap-2 rounded-2xl bg-[#009A9E] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#00314A]"
                                            >
                                                Read Insight
                                                <motion.span
                                                    animate={{
                                                        x: [0, 5, 0],
                                                    }}
                                                    transition={{
                                                        duration: 2,
                                                        repeat: Infinity,
                                                        ease: "easeInOut",
                                                    }}
                                                >
                                                    <ArrowUpRight size={18} />
                                                </motion.span>
                                            </Link>
                                        </motion.div>
                                    </motion.div>
                                ))}
                            </motion.div>

                            {/* RESEARCH SECTION */}
                            <motion.div
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="mt-12"
                            >
                                <div className="relative overflow-hidden rounded-[36px] p-6 sm:p-8 lg:p-10 shadow-2xl" style={{ background: "#F8FCFC" }}>
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

                                    <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(white_1px,transparent_1px)] bg-[size:22px_22px]" />

                                    <div className="relative z-10 grid lg:grid-cols-12 gap-10 items-center">
                                        <motion.div
                                            className="lg:col-span-5"
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
                                                Research Publications
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
                                                Strategic Market
                                                Intelligence
                                            </motion.h3>
                                        </motion.div>

                                        <div className="lg:col-span-7">
                                            <motion.p
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: false, amount: 0.3 }}
                                                transition={{ delay: 0.4, duration: 0.6 }}
                                                className="text-base sm:text-lg leading-9 text-black/90"
                                            >
                                                Access institutional-grade perspectives,
                                                strategic commentary,
                                                and market intelligence
                                                covering distressed assets,
                                                special situations,
                                                private credit,
                                                and restructuring-led investment opportunities.
                                            </motion.p>

                                            <motion.div
                                                className="mt-8 space-y-4"
                                                variants={staggerContainer}
                                                initial="hidden"
                                                whileInView="visible"
                                                viewport={{ once: false, amount: 0.2 }}
                                            >
                                                {publications.map((item, idx) => (
                                                    <motion.div
                                                        key={idx}
                                                        variants={publicationVariants}
                                                        whileHover={{
                                                            scale: 1.02,
                                                            boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                                                            transition: { duration: 0.3 },
                                                        }}
                                                        className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/5 p-5"
                                                    >
                                                        <div>
                                                            <motion.h4
                                                                initial={{ opacity: 0, y: 10 }}
                                                                whileInView={{ opacity: 1, y: 0 }}
                                                                viewport={{ once: false, amount: 0.3 }}
                                                                transition={{ delay: 0.2 + idx * 0.1, duration: 0.5 }}
                                                                className="text-lg font-semibold text-black"
                                                            >
                                                                {item.title}
                                                            </motion.h4>
                                                            <motion.p
                                                                initial={{ opacity: 0, y: 10 }}
                                                                whileInView={{ opacity: 1, y: 0 }}
                                                                viewport={{ once: false, amount: 0.3 }}
                                                                transition={{ delay: 0.3 + idx * 0.1, duration: 0.5 }}
                                                                className="mt-2 text-sm text-black/70"
                                                            >
                                                                {item.type}
                                                            </motion.p>
                                                        </div>
                                                    </motion.div>
                                                ))}
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* MEDIA SECTION */}
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
                                        <Podcast size={16} />
                                        Media & Commentary
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
                                        <span>
                                            Institutional Market
                                        </span>
                                        <span className="block mt-2 text-[#009A9E]">
                                            Perspectives & Commentary
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
                                        "Special Situations Investing",
                                        "India Private Credit Outlook",
                                        "Distressed Asset Resolution",
                                    ].map((item, idx) => (
                                        <motion.div
                                            key={idx}
                                            variants={mediaVariants}
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
                                                <Newspaper size={24} />
                                            </motion.div>

                                            <motion.h4
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: false, amount: 0.3 }}
                                                transition={{ delay: 0.2 + idx * 0.1, duration: 0.6 }}
                                                className="mt-6 text-2xl font-bold text-[#009A9E] leading-tight"
                                            >
                                                {item}
                                            </motion.h4>

                                            <div className="mt-6 space-y-3">
                                                {[
                                                    "Institutional research",
                                                    "Strategic investment outlook",
                                                    "Market opportunity analysis",
                                                ].map((point, i) => (
                                                    <div
                                                        key={i}
                                                        className="flex items-center gap-3"
                                                    >
                                                        <motion.div
                                                            animate={{
                                                                scale: [1, 1.2, 1],
                                                            }}
                                                            transition={{
                                                                duration: 2,
                                                                repeat: Infinity,
                                                                delay: i * 0.3 + idx * 0.1,
                                                                ease: "easeInOut",
                                                            }}
                                                        >
                                                            <CheckCircle2
                                                                size={18}
                                                                className="text-[#009A9E] shrink-0"
                                                            />
                                                        </motion.div>
                                                        <motion.p
                                                            initial={{ opacity: 0, x: -10 }}
                                                            whileInView={{ opacity: 1, x: 0 }}
                                                            viewport={{ once: false, amount: 0.3 }}
                                                            transition={{ delay: 0.3 + i * 0.1 + idx * 0.1, duration: 0.5 }}
                                                            className="text-sm"
                                                        >
                                                            {point}
                                                        </motion.p>
                                                    </div>
                                                ))}
                                            </div>
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