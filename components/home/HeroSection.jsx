"use client";

import Link from "next/link";
import { ArrowRight, TrendingUp, ShieldCheck, Landmark } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
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
                duration: 0.8,
                ease: "easeOut",
            },
        },
    };
    return (
        <section className="relative overflow-hidden bg-white text-black">

            {/* Background Glow Effects */}
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                }}
                className="absolute top-0 left-0 w-72 h-72 bg-[#009A9E]/10 blur-3xl rounded-full"
            />
            <motion.div
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.15, 0.4, 0.15],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                }}
                className="absolute bottom-0 right-0 w-96 h-96 bg-[#009A9E]/5 blur-3xl rounded-full"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-15 lg:py-20 relative z-10">

                <motion.div
                    className="grid lg:grid-cols-2 gap-14 items-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }} // Changed: once: false
                >

                    {/* LEFT CONTENT */}
                    <motion.div
                        variants={fadeLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.25 }} // Changed: once: false
                    >

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-[#009A9E]/10 border border-[#009A9E]/20 text-[#009A9E] px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-md">
                            <TrendingUp size={16} />
                            India’s Special Situations Opportunity
                        </div>

                        {/* Heading */}
                        <motion.h1
                            initial={{
                                opacity: 0,
                                y: 40,
                            }}
                            whileInView={{ // Changed: whileInView instead of animate
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{ once: false, amount: 0.3 }} // Added viewport
                            transition={{
                                delay: 0.3,
                                duration: 0.8,
                            }}
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
                        >
                            <span className="block mt-2">
                                Unlocking Value in
                            </span>

                            <span className="block text-[#009A9E]">
                                India’s Stressed
                                Asset Ecosystem
                            </span>
                        </motion.h1>

                        {/* Paragraph */}
                        <p className="mt-7 text-black-700 text-lg leading-8 max-w-2xl">
                            INFIN Alpha LLP is a specialized alternative investment
                            manager focused on distressed credit, special situations,
                            restructuring opportunities, and high-yield private credit
                            investments through Bharat Special Opportunity Fund (BSOF).
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">
                            <div className="bg-white border border-gray-200 shadow-lg rounded-2xl p-5 backdrop-blur-sm col-span-2 sm:col-span-1">
                                <h3 className="text-2xl font-bold text-[#009A9E]">
                                    ₹8–12L Cr
                                </h3>
                                <p className="text-sm text-gray-600 mt-2">
                                    Estimated Trapped Value Market
                                </p>
                            </div>

                            <div className="bg-white border border-gray-200 shadow-lg rounded-2xl p-5 backdrop-blur-sm col-span-2 sm:col-span-1">
                                <h3 className="text-2xl font-bold text-[#009A9E]">
                                    Category II
                                </h3>
                                <p className="text-sm text-gray-600 mt-2">
                                    SEBI Registered AIF Structure
                                </p>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">
                            {/* Strategy Opportunities Button */}
                            <motion.div
                                whileHover={{
                                    scale: 1.05,
                                }}
                                whileTap={{
                                    scale: 0.95,
                                }}
                            >
                                <Link
                                    href="/investment/strategy-opportunities"
                                    className="inline-flex items-center gap-2 bg-[#009A9E] hover:bg-[#ffffff] text-black px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-[#009A9E]/25"
                                >
                                    Explore Opportunities
                                    <ArrowRight size={18} />
                                </Link>
                            </motion.div>

                            {/* Performance Button */}
                            <motion.div
                                whileHover={{
                                    scale: 1.05,
                                }}
                                whileTap={{
                                    scale: 0.95,
                                }}
                            >
                                <Link
                                    href="/investment/performance"
                                    className="inline-flex items-center gap-2 border border-[#009A9E] text-[#009A9E] hover:bg-[#009A9E] hover:text-black px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                                >
                                    View Performance
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* RIGHT CONTENT */}
                    <motion.div
                        className="relative"
                        variants={fadeRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.25 }} // Changed: once: false
                    >
                        {/* Main Card */}
                        <motion.div
                            animate={{
                                y: [0, -10, 0],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="relative bg-white border border-gray-200 rounded-3xl p-8 backdrop-blur-xl shadow-2xl"
                        >
                            {/* Top Label */}
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <p className="text-sm text-gray-600">
                                        Bharat Special Opportunity Fund
                                    </p>
                                    <h3 className="text-2xl font-bold mt-2">
                                        Special Situation Private Credit Fund
                                    </h3>
                                </div>

                                <motion.div
                                    animate={{
                                        scale: [1, 1.1, 1],
                                        rotate: [0, 5, 0],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                    }}
                                    className="bg-[#009A9E]/10 border border-[#009A9E]/20 p-4 rounded-2xl"
                                >
                                    <Landmark className="text-[#7ACED4]" size={28} />
                                </motion.div>
                            </div>

                            {/* Opportunity Cards */}
                            <div className="space-y-5">
                                <motion.div
                                    whileHover={{
                                        y: -8,
                                        scale: 1.02,
                                    }}
                                    transition={{
                                        duration: 0.3,
                                    }}
                                    className="flex items-start gap-4 bg-white border border-gray-200 shadow-lg rounded-2xl p-5"
                                >
                                    <div className="bg-[#009A9E]/10 p-3 rounded-xl">
                                        <ShieldCheck className="text-[#7ACED4]" size={22} />
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-lg">
                                            Stressed Credit Opportunities
                                        </h4>

                                        <p className="text-gray-600 text-sm mt-2 leading-6">
                                            Investing across distressed corporate debt,
                                            restructuring situations, and litigation-backed assets.
                                        </p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    whileHover={{
                                        y: -8,
                                        scale: 1.02,
                                    }}
                                    transition={{
                                        duration: 0.3,
                                    }}
                                    className="flex items-start gap-4 bg-white border border-gray-200 shadow-lg rounded-2xl p-5"
                                >
                                    <div className="bg-[#009A9E]/10 p-3 rounded-xl">
                                        <TrendingUp className="text-[#7ACED4]" size={22} />
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-lg">
                                            High Yield Investment Strategy
                                        </h4>

                                        <p className="text-gray-600 text-sm mt-2 leading-6">
                                            Deep discount acquisitions combined with
                                            turnaround-focused value creation strategies.
                                        </p>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Bottom Stats */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                                <motion.div
                                    whileHover={{
                                        scale: 1.05,
                                        y: -5,
                                    }}
                                    transition={{
                                        duration: 0.3,
                                    }}
                                    className="bg-[#EAF9FA] border border-[#009A9E]/20 rounded-2xl p-5"
                                >
                                    <p className="text-sm text-gray-600">
                                        Target Corpus
                                    </p>

                                    <h3 className="text-3xl font-bold mt-2">
                                        ₹1000 Cr
                                    </h3>
                                </motion.div>

                                <motion.div
                                    whileHover={{
                                        scale: 1.05,
                                        y: -5,
                                    }}
                                    transition={{
                                        duration: 0.3,
                                    }}
                                    className="bg-[#EAF9FA] border border-[#009A9E]/20 rounded-2xl p-5"
                                >
                                    <p className="text-sm text-gray-600">
                                        Investment Horizon
                                    </p>

                                    <h3 className="text-3xl font-bold mt-2">
                                        5+ Years
                                    </h3>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section >
    );
}