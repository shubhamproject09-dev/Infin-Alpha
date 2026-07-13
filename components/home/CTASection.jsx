"use client";

import Link from "next/link";
import {
    ArrowUpRight,
    ShieldCheck,
    TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";

export default function CTASection() {

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
        <section className="relative overflow-hidden pb-20 bg-white">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* MAIN BOX */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-[#00314A] via-[#0A3635] to-[#00314A] p-8 sm:p-10 lg:p-16"
                >
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
                        className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#009A9E]/20 blur-3xl rounded-full"
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
                        className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#7ACED4]/10 blur-3xl rounded-full"
                    />

                    <div className="relative z-10 grid lg:grid-cols-12 gap-12 items-center">

                        {/* LEFT SIDE */}
                        <motion.div
                            className="lg:col-span-6"
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
                                className="inline-flex items-center gap-2 rounded-full border border-[#009A9E]/20 bg-[#009A9E]/10 px-4 py-2 text-sm font-medium text-[#7ACED4] backdrop-blur-md"
                            >
                                Strategic Investment Opportunities
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
                                className="mt-8 text-3xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight"
                            >
                                Partner with INFIN Alpha
                                to Access India's Next
                                Generation of Special
                                Situation Investments
                            </motion.h2>

                            {/* Paragraph */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ delay: 0.5, duration: 0.7 }}
                                className="mt-8 text-base sm:text-lg leading-8 text-slate-300 max-w-3xl"
                            >
                                We focus on differentiated opportunities across
                                distressed credit, restructuring, and strategic
                                turnaround situations with institutional discipline,
                                downside protection, and long-term value creation.
                            </motion.p>

                            {/* CTA BUTTONS */}
                            <motion.div
                                className="mt-10 flex flex-col sm:flex-row gap-4"
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.3 }}
                            >
                                {/* Investment Philosophy */}
                                <motion.div variants={buttonVariants}>
                                    <Link
                                        href="/investment/philosophy"
                                        className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#009A9E] px-6 py-4 text-white font-semibold hover:bg-[#00314A] transition-all duration-300"
                                    >
                                        Investment Philosophy
                                        <ArrowUpRight size={18} />
                                    </Link>
                                </motion.div>

                                {/* Case Studies */}
                                <motion.div variants={buttonVariants}>
                                    <Link
                                        href="/investment/caseStudy"
                                        className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-white font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-xl"
                                    >
                                        Case Studies
                                    </Link>
                                </motion.div>
                            </motion.div>
                        </motion.div>

                        {/* RIGHT SIDE */}
                        <motion.div
                            className="lg:col-span-6"
                            variants={fadeRight}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            <motion.div
                                className="grid grid-cols-1 sm:grid-cols-2 gap-5"
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.2 }}
                            >
                                {/* CARD 2 */}
                                <motion.div
                                    variants={cardVariants}
                                    whileHover={{
                                        y: -8,
                                        scale: 1.03,
                                        transition: { duration: 0.3 },
                                    }}
                                    className="rounded-[28px] border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6"
                                >
                                    <motion.div
                                        whileHover={{
                                            rotate: [0, -10, 10, -5, 5, 0],
                                            scale: 1.1,
                                            transition: { duration: 0.5 },
                                        }}
                                        className="w-12 h-12 rounded-2xl bg-[#009A9E]/10 border border-[#009A9E]/20 text-[#7ACED4] flex items-center justify-center"
                                    >
                                        <ShieldCheck size={22} />
                                    </motion.div>

                                    <motion.h3
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: false, amount: 0.3 }}
                                        transition={{ delay: 0.3, duration: 0.6 }}
                                        className="mt-6 text-2xl font-bold text-white"
                                    >
                                        Risk Managed
                                    </motion.h3>

                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: false, amount: 0.3 }}
                                        transition={{ delay: 0.4, duration: 0.6 }}
                                        className="mt-3 text-sm leading-7 text-slate-300"
                                    >
                                        Institutional discipline with downside protection focus.
                                    </motion.p>
                                </motion.div>

                                {/* LARGE CARD */}
                                <motion.div
                                    variants={cardVariants}
                                    whileHover={{
                                        y: -8,
                                        scale: 1.02,
                                        transition: { duration: 0.3 },
                                    }}
                                    className="sm:col-span-2 rounded-[32px] border border-[#009A9E]/20 bg-gradient-to-r from-[#009A9E]/10 to-[#7ACED4]/10 p-7"
                                >
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                                        <div>
                                            <motion.p
                                                initial={{ opacity: 0, y: 10 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: false, amount: 0.3 }}
                                                transition={{ delay: 0.5, duration: 0.5 }}
                                                className="text-sm font-medium text-[#7ACED4]"
                                            >
                                                Bharat Special Opportunity Fund
                                            </motion.p>

                                            <motion.h3
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: false, amount: 0.3 }}
                                                transition={{ delay: 0.6, duration: 0.6 }}
                                                className="mt-3 text-2xl sm:text-3xl font-bold text-white leading-snug"
                                            >
                                                Focused on High-Conviction
                                                Distressed & Special Situation Investments
                                            </motion.h3>
                                        </div>

                                        <motion.div
                                            whileHover={{
                                                scale: 1.1,
                                                rotate: 45,
                                                transition: { duration: 0.3 },
                                            }}
                                            whileTap={{
                                                scale: 0.9,
                                            }}
                                            className="w-16 h-16 rounded-full bg-[#009A9E] text-white flex items-center justify-center flex-shrink-0 cursor-pointer"
                                        >
                                            <ArrowUpRight size={28} />
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}