"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {

    // Animation variants
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
                delayChildren: 0.3,
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
        <section className="relative overflow-hidden bg-gradient-to-br from-[#00314A] via-[#0A3635] to-[#00314A] text-white">

            {/* Background Glow */}
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

            {/* MAIN CONTENT */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-15 lg:py-20 w-full">

                <div className="grid lg:grid-cols-12 gap-14 items-center">

                    {/* LEFT CONTENT */}
                    <motion.div
                        className="lg:col-span-7"
                        variants={fadeLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="inline-flex items-center gap-2 rounded-full border border-[#EAF9FA]/20 bg-[#EAF9FA]/10 px-4 py-2 text-sm font-medium text-[#7ACED4] backdrop-blur-md"
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
                            Bharat Special Opportunity Fund
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
                            className="mt-8 text-3xl sm:text-3xl lg:text-5xl font-bold leading-[1.02] tracking-tight"
                        >
                            Unlocking Value
                            Through India's
                            Special Situation
                            Opportunities
                        </motion.h1>

                        {/* Paragraph */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ delay: 0.5, duration: 0.7 }}
                            className="mt-8 max-w-3xl text-base sm:text-lg lg:text-xl leading-8 text-slate-300"
                        >
                            BSOF Trust focuses on distressed credit,
                            restructuring situations, strategic turnarounds,
                            and asset-backed opportunities requiring
                            institutional expertise and long-term execution.
                        </motion.p>

                        {/* Buttons */}
                        <motion.div
                            className="mt-10 flex flex-col sm:flex-row gap-4"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            <motion.div variants={buttonVariants}>
                                <Link
                                    href="/investment/strategy-opportunities"
                                    className="py-4 px-4 rounded-2xl bg-gradient-to-r from-[#009A9E] to-[#00314A] hover:from-[#009A9E] hover:to-[#00314A] text-white font-semibold transition-all duration-300 shadow-lg shadow-[#EAF9FA]/20 hover:scale-[1.02] text-center inline-block w-full"
                                >
                                    Explore Opportunities
                                </Link>
                            </motion.div>

                            <motion.div variants={buttonVariants}>
                                <Link
                                    href="#"
                                    className="px-4 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 text-white font-semibold transition-all duration-300 text-center inline-block w-full"
                                >
                                    Download Presentation
                                </Link>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* RIGHT CONTENT */}
                    <motion.div
                        className="lg:col-span-5"
                        variants={fadeRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        <div className="relative">
                            {/* Main Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                whileHover={{
                                    y: -8,
                                    transition: { duration: 0.3 },
                                }}
                                className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl p-6 sm:p-8 shadow-2xl"
                            >
                                {/* Glow */}
                                <motion.div
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [0.2, 0.4, 0.2],
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                    className="absolute top-0 right-0 w-40 h-40 bg-[#EAF9FA]/20 blur-3xl rounded-full"
                                />

                                <div className="relative z-10">
                                    {/* Label */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: false, amount: 0.3 }}
                                        transition={{ delay: 0.3, duration: 0.5 }}
                                        className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-3 py-1.5 text-xs font-medium text-[#7ACED4]"
                                    >
                                        Institutional Strategy
                                    </motion.div>

                                    {/* Stats */}
                                    <motion.div
                                        className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5"
                                        variants={staggerContainer}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: false, amount: 0.3 }}
                                    >
                                        <motion.div
                                            variants={statVariants}
                                            whileHover={{
                                                scale: 1.05,
                                                borderColor: "rgba(234,249,250,0.3)",
                                                transition: { duration: 0.3 },
                                            }}
                                            className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-[#EAF9FA]/30 transition-all duration-300"
                                        >
                                            <motion.h3
                                                initial={{ scale: 0.5, opacity: 0 }}
                                                whileInView={{ scale: 1, opacity: 1 }}
                                                viewport={{ once: false, amount: 0.3 }}
                                                transition={{ delay: 0.4, duration: 0.5, type: "spring" }}
                                                className="text-3xl sm:text-4xl font-bold"
                                            >
                                                ₹1000Cr
                                            </motion.h3>
                                            <p className="mt-2 text-sm text-slate-300">
                                                Target Corpus
                                            </p>
                                        </motion.div>

                                        <motion.div
                                            variants={statVariants}
                                            whileHover={{
                                                scale: 1.05,
                                                borderColor: "rgba(234,249,250,0.3)",
                                                transition: { duration: 0.3 },
                                            }}
                                            className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-[#EAF9FA]/30 transition-all duration-300"
                                        >
                                            <motion.h3
                                                initial={{ scale: 0.5, opacity: 0 }}
                                                whileInView={{ scale: 1, opacity: 1 }}
                                                viewport={{ once: false, amount: 0.3 }}
                                                transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
                                                className="text-3xl sm:text-4xl font-bold"
                                            >
                                                5+Y
                                            </motion.h3>
                                            <p className="mt-2 text-sm text-slate-300">
                                                Investment Horizon
                                            </p>
                                        </motion.div>
                                    </motion.div>

                                    {/* Focus Box */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: false, amount: 0.3 }}
                                        transition={{ delay: 0.6, duration: 0.7 }}
                                        whileHover={{
                                            scale: 1.02,
                                            transition: { duration: 0.3 },
                                        }}
                                        className="mt-8 rounded-2xl border border-[#EAF9FA]/20 bg-gradient-to-r from-[#EAF9FA]/10 to-emerald-500/10 p-5"
                                    >
                                        <p className="text-sm text-[#7ACED4] font-medium">
                                            Focus Areas
                                        </p>
                                        <h3 className="mt-3 text-xl sm:text-2xl font-bold leading-snug">
                                            Distressed Credit,
                                            Strategic Turnarounds &
                                            Asset-Backed Investments
                                        </h3>
                                    </motion.div>

                                    {/* Bottom Stats */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: false, amount: 0.3 }}
                                        transition={{ delay: 0.7, duration: 0.6 }}
                                        className="mt-6 flex items-center justify-between border-t border-white/10 pt-5"
                                    >
                                        <div>
                                            <p className="text-xs uppercase tracking-wider text-slate-400 mt-3">
                                                Structure
                                            </p>
                                            <h4 className="mt-2 text-lg font-semibold">
                                                AIF Category II
                                            </h4>
                                        </div>

                                        <div className="w-px h-12 bg-white/10"></div>

                                        <div>
                                            <p className="text-xs uppercase tracking-wider text-slate-400 mt-3">
                                                Geography
                                            </p>
                                            <h4 className="mt-2 text-lg font-semibold">
                                                India Focused
                                            </h4>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}