"use client";

import {
    TrendingUp,
    Landmark,
    Building2,
    CheckCircle2,
    ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";

export default function StressedAssetOpportunityPage() {

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

    const themeVariants = {
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
        <section className="bg-white">

            {/* HERO */}
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
                            className="inline-flex items-center gap-2 rounded-full border border-[#EAF9FA]/20 bg-[#EAF9FA]/10 px-4 py-2 text-sm font-medium text-[#7ACED4]"
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
                                <TrendingUp size={16} />
                            </motion.div>
                            Market Intelligence Report
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
                            className="mt-8 text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.05] tracking-tight text-white"
                        >
                            India's Stressed
                            <span className="block mt-2 text-[#7ACED4]">
                                Asset Opportunity
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ delay: 0.5, duration: 0.7 }}
                            className="mt-8 max-w-4xl mx-auto text-base sm:text-lg lg:text-xl leading-9 text-slate-300"
                        >
                            India's special situations and distressed asset market
                            is emerging as one of the largest alternative investment
                            opportunities driven by restructuring,
                            stressed credit resolution,
                            and institutional private capital participation.
                        </motion.p>
                    </motion.div>
                </div>
            </motion.div>

            {/* CONTENT */}
            <div className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* STATS */}
                    <motion.div
                        className="grid md:grid-cols-3 gap-6"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.1 }}
                    >
                        {[
                            {
                                value: "₹8–12L Cr",
                                title: "Estimated Trapped Value",
                            },
                            {
                                value: "₹15–16L Cr",
                                title: "Written-off Loan Pool",
                            },
                            {
                                value: "90%",
                                title: "Fragmented Market Opportunity",
                            },
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                variants={cardVariants}
                                whileHover={{
                                    y: -10,
                                    scale: 1.03,
                                    boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
                                    transition: { duration: 0.3 },
                                }}
                                className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-500"
                            >
                                <motion.h3
                                    variants={statVariants}
                                    className="text-4xl font-bold text-[#009A9E]"
                                >
                                    {item.value}
                                </motion.h3>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={{ delay: 0.2 + idx * 0.1, duration: 0.6 }}
                                    className="mt-4 text-base leading-8 text-slate-700"
                                >
                                    {item.title}
                                </motion.p>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* MAIN CONTENT */}
                    <motion.div
                        className="mt-20 grid lg:grid-cols-2 gap-10"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.1 }}
                    >
                        <motion.div
                            variants={cardVariants}
                            whileHover={{
                                y: -10,
                                scale: 1.02,
                                boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
                                transition: { duration: 0.3 },
                            }}
                            className="rounded-[36px] border border-slate-200 p-8 shadow-sm hover:shadow-xl transition-all duration-500"
                        >
                            <motion.div
                                whileHover={{
                                    rotate: [0, -10, 10, -5, 5, 0],
                                    scale: 1.1,
                                    transition: { duration: 0.5 },
                                }}
                                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#009A9E] to-[#00314A] text-white flex items-center justify-center"
                            >
                                <Landmark size={28} />
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                                className="mt-8 text-3xl font-bold text-[#00314A]"
                            >
                                Why the Opportunity Exists
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                className="mt-6 text-base leading-9 text-slate-700"
                            >
                                India's stressed asset market includes
                                distressed corporate loans,
                                stalled infrastructure projects,
                                litigation-locked real estate,
                                and restructuring-led opportunities
                                requiring specialized legal and commercial expertise.
                            </motion.p>
                        </motion.div>

                        <motion.div
                            variants={cardVariants}
                            whileHover={{
                                y: -10,
                                scale: 1.02,
                                boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
                                transition: { duration: 0.3 },
                            }}
                            className="rounded-[36px] border border-slate-200 p-8 shadow-sm hover:shadow-xl transition-all duration-500"
                        >
                            <motion.div
                                whileHover={{
                                    rotate: [0, -10, 10, -5, 5, 0],
                                    scale: 1.1,
                                    transition: { duration: 0.5 },
                                }}
                                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#009A9E] to-[#00314A] text-white flex items-center justify-center"
                            >
                                <Building2 size={28} />
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                className="mt-8 text-3xl font-bold text-[#00314A]"
                            >
                                Role of Alternative Investment Funds
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                                className="mt-6 text-base leading-9 text-slate-700"
                            >
                                Alternative Investment Funds provide patient capital,
                                restructuring expertise,
                                and flexible capital structures
                                helping unlock value across stressed and special situation assets.
                            </motion.p>
                        </motion.div>
                    </motion.div>

                    {/* KEY THEMES */}
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="mt-20 rounded-[36px] px-5 py-8 sm:p-8 lg:p-10 text-black"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="inline-flex items-center gap-2 rounded-full border border-[#EAF9FA]/20 bg-[#EAF9FA]/10 px-4 py-2 text-sm text-[#00314A]"
                        >
                            Strategic Themes
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
                            className="mt-6 text-4xl font-bold text-[#7ACED4]"
                        >
                            Market Drivers
                        </motion.h2>

                        <motion.div
                            className="mt-14 grid md:grid-cols-2 xl:grid-cols-4 gap-6"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.1 }}
                        >
                            {[
                                "Distressed Corporate Debt",
                                "IBC-led Recoveries",
                                "Private Credit Expansion",
                                "Turnaround Investments",
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={themeVariants}
                                    whileHover={{
                                        y: -10,
                                        scale: 1.05,
                                        borderColor: "#7ACED4",
                                        boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                                        transition: { duration: 0.3 },
                                    }}
                                    className="group relative overflow-hidden rounded-[30px] border-2 border-[#EAF9FA]/30 bg-gradient-to-br from-white/[0.08] to-white/[0.03] backdrop-blur-xl p-7 hover:bg-white/10 transition-all duration-300"
                                >
                                    <motion.div
                                        initial={{ scaleX: 0, opacity: 0 }}
                                        whileInView={{ scaleX: 1, opacity: 1 }}
                                        viewport={{ once: false, amount: 0.3 }}
                                        transition={{ delay: 0.2 + idx * 0.1, duration: 0.8 }}
                                        className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#7ACED4] via-emerald-500 to-transparent origin-left"
                                    />

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
                                            className="text-[#7ACED4]"
                                            size={28}
                                        />
                                    </motion.div>

                                    <motion.h3
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: false, amount: 0.3 }}
                                        transition={{ delay: 0.3 + idx * 0.1, duration: 0.6 }}
                                        className="mt-6 text-2xl font-bold text-black leading-tight"
                                    >
                                        {item}
                                    </motion.h3>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}