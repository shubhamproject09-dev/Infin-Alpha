"use client";

import {
    ShieldCheck,
    Building2,
    Briefcase,
    TrendingUp,
    Landmark,
    ArrowRight,
    Sparkles,
    CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function InfinAlphaSection() {

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

    const listVariants = {
        hidden: {
            opacity: 0,
            x: -20,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
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
                {/* Glow */}
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
                ></motion.div>

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
                ></motion.div>

                {/* Pattern */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.04 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] bg-[size:24px_24px]"
                ></motion.div>

                {/* CONTENT */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="flex items-center justify-center text-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <div className="max-w-5xl mx-auto">
                            {/* Badge */}
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
                                Alternative Investment Platform
                            </motion.div>

                            {/* Heading */}
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
                                INFIN ALPHA
                                <span className="block mt-2 text-[#7ACED4]">
                                    LLP
                                </span>
                            </motion.h1>

                            {/* Paragraph */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ delay: 0.5, duration: 0.7 }}
                                className="mt-8 max-w-4xl mx-auto text-base sm:text-lg lg:text-xl leading-9 text-slate-300"
                            >
                                Specialized investment management platform
                                focused on distressed credit,
                                special situations,
                                restructuring-led investments,
                                and high-yield private credit opportunities
                                across India's evolving alternative investment ecosystem.
                            </motion.p>
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            {/* MAIN SECTION */}
            <div className="relative z-10 pb-20 sm:pb-24 pt-[40px] sm:pt-[70px] lg:pt-[100px]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-stretch"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.1 }}
                    >
                        {/* LEFT SIDE */}
                        <motion.div
                            className="lg:col-span-8 flex"
                            variants={fadeLeft}
                        >
                            <motion.div
                                whileHover={{
                                    boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
                                    transition: { duration: 0.3 },
                                }}
                                className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] border border-slate-200 bg-white p-5 sm:p-8 lg:p-10 shadow-sm hover:shadow-2xl transition-all duration-500 h-full w-full"
                            >
                                {/* Glow */}
                                <motion.div
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [0.1, 0.2, 0.1],
                                    }}
                                    transition={{
                                        duration: 5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                    className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-[#EAF9FA]/10 blur-3xl rounded-full"
                                ></motion.div>

                                <div className="relative z-10">
                                    {/* Badge */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: false, amount: 0.3 }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                        className="inline-flex items-center gap-2 rounded-full border border-[#D5F3F5] bg-[#EAF9FA] px-4 py-2 text-xs sm:text-sm font-semibold text-[#00314A]"
                                    >
                                        <motion.div
                                            animate={{
                                                scale: [1, 1.2, 1],
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                            }}
                                        >
                                            <Building2 size={16} />
                                        </motion.div>
                                        Fund Management Entity
                                    </motion.div>

                                    {/* Heading */}
                                    <motion.h2
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: false, amount: 0.3 }}
                                        transition={{ delay: 0.3, duration: 0.7 }}
                                        className="mt-5 sm:mt-6 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-[-0.03em] text-[#009A9E]"
                                    >
                                        Specialized High Yield
                                        Investment Platform
                                    </motion.h2>

                                    {/* Description */}
                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: false, amount: 0.3 }}
                                        transition={{ delay: 0.4, duration: 0.6 }}
                                        className="mt-6 text-base sm:text-lg leading-8 text-black"
                                        style={{ color: '#000000' }}
                                    >
                                        Infin Alpha LLP is conceptualized as
                                        a specialized alternative investment
                                        management platform focusing on
                                        distressed credit,
                                        restructuring opportunities,
                                        special situations,
                                        and non-traditional private credit strategies.
                                    </motion.p>

                                    {/* GRID */}
                                    <motion.div
                                        className="mt-10 grid md:grid-cols-2 gap-5"
                                        variants={staggerContainer}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: false, amount: 0.2 }}
                                    >
                                        {/* CARD */}
                                        <motion.div
                                            variants={cardVariants}
                                            whileHover={{
                                                y: -8,
                                                scale: 1.03,
                                                boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
                                                transition: { duration: 0.3 },
                                            }}
                                            className="rounded-3xl border border-slate-200 bg-slate-50 p-5 sm:p-6"
                                        >
                                            <motion.div
                                                whileHover={{
                                                    rotate: [0, -10, 10, -5, 5, 0],
                                                    scale: 1.1,
                                                    transition: { duration: 0.5 },
                                                }}
                                                className="w-12 h-12 rounded-2xl border-2 border-[#EAF9FA] text-[#009A9E] flex items-center justify-center"
                                            >
                                                <Briefcase size={22} />
                                            </motion.div>

                                            <motion.h3
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: false, amount: 0.3 }}
                                                transition={{ delay: 0.3, duration: 0.6 }}
                                                className="mt-5 text-xl font-bold text-[#009A9E]"
                                            >
                                                Investment Philosophy
                                            </motion.h3>

                                            <motion.p
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: false, amount: 0.3 }}
                                                transition={{ delay: 0.4, duration: 0.6 }}
                                                className="mt-3 text-sm sm:text-base leading-8 text-black"
                                                style={{ color: '#000000' }}
                                            >
                                                Invest at deep discounts,
                                                infuse strategic capital,
                                                unlock value through restructuring,
                                                and generate superior risk-adjusted returns.
                                            </motion.p>
                                        </motion.div>

                                        {/* CARD */}
                                        <motion.div
                                            variants={cardVariants}
                                            whileHover={{
                                                y: -8,
                                                scale: 1.03,
                                                boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
                                                transition: { duration: 0.3 },
                                            }}
                                            className="rounded-3xl border border-slate-200 bg-slate-50 p-5 sm:p-6"
                                        >
                                            <motion.div
                                                whileHover={{
                                                    rotate: [0, -10, 10, -5, 5, 0],
                                                    scale: 1.1,
                                                    transition: { duration: 0.5 },
                                                }}
                                                className="w-12 h-12 rounded-2xl border-2 border-[#EAF9FA] text-[#009A9E] flex items-center justify-center"
                                            >
                                                <TrendingUp size={22} />
                                            </motion.div>

                                            <motion.h3
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: false, amount: 0.3 }}
                                                transition={{ delay: 0.5, duration: 0.6 }}
                                                className="mt-5 text-xl font-bold text-[#009A9E]"
                                            >
                                                Market Opportunity
                                            </motion.h3>

                                            <motion.p
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: false, amount: 0.3 }}
                                                transition={{ delay: 0.6, duration: 0.6 }}
                                                className="mt-3 text-sm sm:text-base leading-8 text-black"
                                                style={{ color: '#000000' }}
                                            >
                                                India's stressed asset market
                                                represents a multi-trillion rupee
                                                opportunity requiring specialized
                                                legal-commercial expertise.
                                            </motion.p>
                                        </motion.div>
                                    </motion.div>

                                    {/* FULL WIDTH SECTION */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: false, amount: 0.3 }}
                                        transition={{ delay: 0.5, duration: 0.7 }}
                                        whileHover={{
                                            scale: 1.02,
                                            transition: { duration: 0.3 },
                                        }}
                                        className="mt-8 rounded-[28px] border border-[#D5F3F5] bg-[#EAF9FA] p-6 sm:p-8"
                                    >
                                        <div className="flex items-start gap-4">
                                            <motion.div
                                                whileHover={{
                                                    rotate: [0, -10, 10, -5, 5, 0],
                                                    scale: 1.1,
                                                    transition: { duration: 0.5 },
                                                }}
                                                className="w-14 h-14 rounded-2xl border-2 border-[#EAF9FA] text-[#009A9E] flex items-center justify-center shrink-0"
                                            >
                                                <Landmark size={24} />
                                            </motion.div>

                                            <div>
                                                <motion.h3
                                                    initial={{ opacity: 0, y: 20 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: false, amount: 0.3 }}
                                                    transition={{ delay: 0.6, duration: 0.6 }}
                                                    className="text-2xl font-bold text-[#009A9E]"
                                                >
                                                    BSOF Category II AIF
                                                </motion.h3>

                                                <motion.p
                                                    initial={{ opacity: 0, y: 20 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: false, amount: 0.3 }}
                                                    transition={{ delay: 0.7, duration: 0.6 }}
                                                    className="mt-4 text-sm sm:text-base leading-8 text-black"
                                                    style={{ color: '#000000' }}
                                                >
                                                    Bharat Special Opportunity Fund (BSOF)
                                                    is the flagship strategy under
                                                    INFIN ALPHA LLP,
                                                    focused on special situations,
                                                    distressed credit,
                                                    litigation-backed assets,
                                                    and complex restructuring opportunities
                                                    across India's mid-market ecosystem.
                                                </motion.p>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* RIGHT SIDE */}
                        <motion.div
                            className="lg:col-span-4 flex"
                            variants={fadeRight}
                        >
                            <motion.div
                                whileHover={{
                                    boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
                                    transition: { duration: 0.3 },
                                }}
                                className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] p-5 sm:p-8 lg:p-10 shadow-2xl h-full w-full"
                                style={{
                                    background: "linear-gradient(135deg, #00314A 0%, #0A3635 100%)",
                                }}
                            >
                                {/* Glow */}
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
                                ></motion.div>

                                {/* Pattern */}
                                <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(white_1px,transparent_1px)] bg-[size:22px_22px]"></div>

                                <div className="relative z-10">
                                    {/* Badge */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: false, amount: 0.3 }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                        className="inline-flex items-center gap-2 rounded-full border border-[#D5F3F5] bg-[#EAF9FA] px-4 py-2 text-xs sm:text-sm font-semibold text-[#00314A]"
                                    >
                                        Strategic Advantages
                                    </motion.div>

                                    {/* Heading */}
                                    <motion.h3
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: false, amount: 0.3 }}
                                        transition={{ delay: 0.3, duration: 0.7 }}
                                        className="mt-6 text-3xl sm:text-4xl font-bold leading-tight tracking-[-0.03em] text-[#7ACED4]"
                                    >
                                        Why
                                        INFIN ALPHA?
                                    </motion.h3>

                                    {/* List */}
                                    <motion.div
                                        className="mt-8 space-y-5"
                                        variants={staggerContainer}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: false, amount: 0.2 }}
                                    >
                                        {[
                                            "Deep expertise in distressed assets, restructuring, and special situations investing.",
                                            "Strong institutional relationships across banks, ARCs, and legal ecosystem participants.",
                                            "Experienced leadership team with decades of investment and restructuring expertise.",
                                            "Structured risk management and recovery-focused investment approach."
                                        ].map((text, index) => (
                                            <motion.div
                                                key={index}
                                                variants={listVariants}
                                                whileHover={{
                                                    x: 8,
                                                    transition: { duration: 0.3 },
                                                }}
                                                className="flex items-start gap-3"
                                            >
                                                <motion.div
                                                    animate={{
                                                        scale: [1, 1.2, 1],
                                                    }}
                                                    transition={{
                                                        duration: 2,
                                                        repeat: Infinity,
                                                        delay: index * 0.3,
                                                    }}
                                                >
                                                    <CheckCircle2 className="text-[#7ACED4] mt-1" size={20} />
                                                </motion.div>
                                                <p className="text-sm sm:text-base leading-7 text-white/90">
                                                    {text}
                                                </p>
                                            </motion.div>
                                        ))}
                                    </motion.div>

                                    {/* Bottom CTA */}
                                    <motion.div
                                        variants={buttonVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: false, amount: 0.3 }}
                                    >
                                        <Link
                                            href="/investment/strategy-opportunities"
                                            className="mt-10 w-full py-4 rounded-2xl bg-gradient-to-r from-[#00314A] to-[#009A9E] hover:from-[#009A9E] hover:to-[#00314A] text-white font-semibold transition-all duration-300 shadow-lg shadow-[#EAF9FA]/20 flex items-center justify-center gap-2"
                                        >
                                            Explore Investment Strategy
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
                                                <ArrowRight size={18} />
                                            </motion.span>
                                        </Link>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}