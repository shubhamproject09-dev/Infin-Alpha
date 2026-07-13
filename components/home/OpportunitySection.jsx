"use client";

import {
    Landmark,
    Building2,
    Scale,
    BriefcaseBusiness,
} from "lucide-react";
import { motion } from "framer-motion";

export default function OpportunitySection() {

    const opportunities = [
        {
            icon: <Landmark size={28} />,
            title: "Distressed Corporate Loans",
            description:
                "Large pools of stressed and written-off corporate debt creating deep discount acquisition opportunities.",
        },
        {
            icon: <Building2 size={28} />,
            title: "Stalled Projects",
            description:
                "Infrastructure, manufacturing, and real estate projects awaiting capital infusion and operational revival.",
        },
        {
            icon: <Scale size={28} />,
            title: "Litigation-Locked Assets",
            description:
                "High-value assets trapped in legal or restructuring processes with significant turnaround potential.",
        },
        {
            icon: <BriefcaseBusiness size={28} />,
            title: "Special Situation Opportunities",
            description:
                "Complex restructuring, promoter financing, and strategic dislocation opportunities across sectors.",
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

    return (
        <section className="relative bg-[#F5F7FA] py-15 lg:py-20 overflow-hidden">

            {/* Background Glow */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.4, 0.6, 0.4],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-0 right-0 w-80 h-80 bg-[#D5F3F5] blur-3xl rounded-full opacity-40"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Section Header */}
                <motion.div
                    className="grid lg:grid-cols-2 gap-16 items-start"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                >
                    {/* LEFT SIDE */}
                    <motion.div
                        variants={fadeLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="inline-flex items-center px-4 py-2 rounded-full bg-[#EAF9FA] text-[#00314A] text-sm font-semibold border border-[#D5F3F5]"
                        >
                            India’s Emerging Opportunity
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
                            className="mt-6 text-3xl lg:text-5xl font-bold text-slate-900 leading-tight"
                        >
                            Reimagining Potential Across
                            <span className="block text-[#009A9E] mt-2">
                                India’s ₹8–12 Lakh Crore
                            </span>
                            Special Situations Market
                        </motion.h2>
                    </motion.div>

                    {/* RIGHT SIDE */}
                    <motion.div
                        variants={fadeRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        className="lg:pt-16"
                    >
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ delay: 0.4, duration: 0.7 }}
                            className="text-lg leading-9 text-slate-600"
                        >
                            India’s stressed and special situations ecosystem represents
                            one of the largest untapped investment landscapes, spanning
                            distressed corporate loans, stalled infrastructure projects,
                            litigation-backed real estate, and complex restructuring opportunities.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ delay: 0.6, duration: 0.7 }}
                            className="mt-8 flex flex-wrap gap-6"
                        >
                            <div>
                                <motion.h3
                                    initial={{ scale: 0.5, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={{ delay: 0.7, duration: 0.5, type: "spring" }}
                                    className="text-3xl font-bold text-slate-900"
                                >
                                    ₹15L+
                                </motion.h3>
                                <p className="text-sm text-slate-500 mt-2">
                                    Written-off loans in the past decade
                                </p>
                            </div>

                            <div className="w-px bg-slate-200 hidden sm:block"></div>

                            <div>
                                <motion.h3
                                    initial={{ scale: 0.5, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={{ delay: 0.9, duration: 0.5, type: "spring" }}
                                    className="text-3xl font-bold text-slate-900"
                                >
                                    90%
                                </motion.h3>
                                <p className="text-sm text-slate-500 mt-2">
                                    Market remains fragmented
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Opportunity Cards */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-16"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.1 }}
                >
                    {opportunities.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{
                                y: -8,
                                scale: 1.02,
                                transition: { duration: 0.3 },
                            }}
                            className="group relative bg-white border border-slate-200 rounded-3xl p-7 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                        >
                            {/* Gradient Glow */}
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#EAF9FA]/0 to-[#EAF9FA]/0 group-hover:from-[#EAF9FA]/5 group-hover:to-[#7ACED4]/10 transition-all duration-500"></div>

                            {/* Icon */}
                            <motion.div
                                whileHover={{
                                    rotate: [0, -10, 10, -5, 5, 0],
                                    transition: { duration: 0.5 },
                                }}
                                className="relative w-14 h-14 rounded-2xl bg-[#EAF9FA] border border-[#D5F3F5] flex items-center justify-center text-[#009A9E] group-hover:scale-110 transition duration-300"
                            >
                                {item.icon}
                            </motion.div>

                            {/* Title */}
                            <h3 className="relative mt-6 text-xl font-bold text-slate-900 leading-snug">
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p className="relative mt-4 text-slate-600 leading-7 text-sm">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom Highlight Section */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="mt-20 rounded-3xl bg-gradient-to-r from-[#00314A] via-[#0A3635] to-[#00314A] p-8 lg:p-12 overflow-hidden relative"
                >
                    {/* Glow */}
                    <motion.div
                        animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.2, 0.4, 0.2],
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="absolute top-0 right-0 w-72 h-72 bg-[#EAF9FA]/20 blur-3xl rounded-full"
                    />

                    <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
                        {/* Left */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                        >
                            <motion.span
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="inline-block px-4 py-2 rounded-full bg-[#EAF9FA]/10 text-[#7ACED4] border border-[#EAF9FA]/20 text-sm font-medium"
                            >
                                Why This Matters
                            </motion.span>

                            <motion.h3
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 0.7, delay: 0.6 }}
                                className="mt-6 text-3xl lg:text-4xl font-bold text-white leading-tight"
                            >
                                Traditional Institutions
                                Cannot Fully Address
                                This Market Opportunity
                            </motion.h3>
                        </motion.div>

                        {/* Right */}
                        <motion.div
                            className="space-y-5"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.2 }}
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: 0.2,
                                        delayChildren: 0.5,
                                    },
                                },
                            }}
                        >
                            {[
                                "Most stressed assets require deep legal, financial, and operational expertise that traditional lenders cannot scale efficiently.",
                                "Specialized AIF structures provide patient capital and flexible resolution frameworks for complex opportunities.",
                                "INFIN Alpha focuses on identifying scalable turnaround opportunities with strong downside protection and high-yield potential."
                            ].map((text, index) => (
                                <motion.div
                                    key={index}
                                    variants={{
                                        hidden: { opacity: 0, x: 30 },
                                        visible: {
                                            opacity: 1,
                                            x: 0,
                                            transition: { duration: 0.6 }
                                        },
                                    }}
                                    className="flex gap-4"
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
                                        className="w-3 h-3 rounded-full bg-[#7ACED4] mt-2"
                                    ></motion.div>
                                    <p className="text-slate-300 leading-7">
                                        {text}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}