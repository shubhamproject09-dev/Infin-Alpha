"use client";

import {
    TrendingUp,
    Landmark,
    CheckCircle2,
    ShieldCheck,
    Wallet,
} from "lucide-react";
import { motion } from "framer-motion";

export default function DeepDiscountPage() {

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

    const processVariants = {
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
                            Investment Philosophy
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
                            Deep Discount
                            <span className="block mt-2 text-[#7ACED4]">
                                Acquisition Strategy
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ delay: 0.5, duration: 0.7 }}
                            className="mt-8 max-w-4xl mx-auto text-base sm:text-lg lg:text-xl leading-9 text-slate-300"
                        >
                            INFIN Alpha LLP focuses on identifying
                            stressed and special situation opportunities
                            available at attractive entry valuations
                            where institutional restructuring and
                            resolution expertise can unlock long-term value.
                        </motion.p>
                    </motion.div>
                </div>
            </motion.div>

            {/* CONTENT */}
            <div className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* CARDS */}
                    <motion.div
                        className="grid lg:grid-cols-3 gap-6"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.1 }}
                    >
                        {[
                            {
                                title: "Distressed Credit",
                                desc: "Acquisition opportunities across NPAs, stressed loans and restructuring-led assets.",
                                icon: Landmark,
                            },
                            {
                                title: "Attractive Entry Valuation",
                                desc: "Deep-discount investment structures supporting asymmetric return potential.",
                                icon: Wallet,
                            },
                            {
                                title: "Resolution Expertise",
                                desc: "Institutional turnaround and value-unlocking frameworks across special situations.",
                                icon: ShieldCheck,
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
                                <motion.div
                                    whileHover={{
                                        rotate: [0, -10, 10, -5, 5, 0],
                                        scale: 1.1,
                                        transition: { duration: 0.5 },
                                    }}
                                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#009A9E] to-[#00314A] text-white flex items-center justify-center"
                                >
                                    <item.icon size={28} />
                                </motion.div>

                                <motion.h3
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={{ delay: 0.2 + idx * 0.1, duration: 0.6 }}
                                    className="mt-8 text-3xl font-bold text-[#00314A]"
                                >
                                    {item.title}
                                </motion.h3>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={{ delay: 0.3 + idx * 0.1, duration: 0.6 }}
                                    className="mt-6 text-base leading-9 text-slate-700"
                                >
                                    {item.desc}
                                </motion.p>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* FRAMEWORK */}
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="mt-20 rounded-[36px] px-5 py-8 sm:p-8 lg:p-10 text-white"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="inline-flex items-center gap-2 rounded-full border border-[#EAF9FA]/20 bg-[#EAF9FA]/10 px-4 py-2 text-sm text-[#00314A]"
                        >
                            Strategic Framework
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
                            className="mt-6 text-4xl font-bold text-[#00314A]"
                        >
                            Institutional Acquisition Process
                        </motion.h2>

                        <motion.div
                            className="mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"
                            style={{ marginTop: "50px" }}
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.1 }}
                        >
                            {[
                                "Opportunity Identification",
                                "Risk Assessment",
                                "Deep Discount Entry",
                                "Strategic Resolution",
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={processVariants}
                                    whileHover={{
                                        y: -10,
                                        scale: 1.05,
                                        borderColor: "#7ACED4",
                                        boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                                        transition: { duration: 0.3 },
                                    }}
                                    className="group relative overflow-hidden rounded-[30px] border-2 border-[#7ACED4] bg-gradient-to-br from-white/[0.08] to-white/[0.03] backdrop-blur-xl p-7 hover:bg-white/10 transition-all duration-300"
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