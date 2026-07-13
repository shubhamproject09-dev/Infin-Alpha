"use client";

import { motion } from "framer-motion";

export default function OverviewSection() {

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

    return (
        <section className="relative overflow-hidden bg-white py-20 sm:py-23 lg:py-25">

            {/* Background Pattern */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.03 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] bg-[size:24px_24px]"
            ></motion.div>

            {/* Top Glow */}
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
                className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#EAF9FA]/10 blur-3xl rounded-full"
            ></motion.div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* TOP SECTION */}
                <motion.div
                    className="max-w-5xl mx-auto text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                >
                    {/* Badge */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        className="inline-flex items-center gap-2 rounded-full border border-[#D5F3F5] bg-[#EAF9FA] px-5 py-2 text-sm font-semibold text-[#00314A]"
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
                            className="w-2 h-2 rounded-full bg-[#009A9E]"
                        ></motion.div>
                        Trust Overview
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
                        className="mt-8 text-3xl sm:text-3xl lg:text-5xl font-bold leading-[1.1] tracking-[-0.04em]"
                        style={{ color: "#000" }}
                    >
                        Unlocking Institutional
                        <span
                            className="block mt-2"
                            style={{ color: "#16a34a" }}
                        >
                            Value Across India's
                        </span>
                        Emerging Distressed
                        Asset Landscape
                    </motion.h2>

                    {/* Paragraph */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ delay: 0.5, duration: 0.7 }}
                        className="mt-8 text-lg sm:text-xl leading-9 max-w-4xl mx-auto"
                        style={{ color: "#000" }}
                    >
                        Bharat Special Opportunity Fund (BSOF) focuses on
                        differentiated distressed credit, restructuring,
                        and special situation opportunities requiring
                        institutional discipline, strategic intervention,
                        and long-term value creation.
                    </motion.p>
                </motion.div>

                {/* MAIN GRID */}
                <motion.div
                    className="mt-24 grid lg:grid-cols-12 gap-8 items-stretch"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.1 }}
                >
                    {/* LEFT SIDE */}
                    <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
                        {/* CARD 1 */}
                        <motion.div
                            variants={cardVariants}
                            whileHover={{
                                y: -8,
                                scale: 1.02,
                                boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
                                transition: { duration: 0.3 },
                            }}
                            className="group relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                        >
                            {/* Hover Glow */}
                            <div className="absolute inset-0 bg-[#EAF9FA]/0 group-hover:bg-[#EAF9FA]/[0.03] transition-all duration-500"></div>

                            {/* Top Border */}
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: "100%" }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                                className="absolute top-0 left-0 h-1 bg-[#EAF9FA]"
                            ></motion.div>

                            {/* Icon */}
                            <motion.div
                                whileHover={{
                                    rotate: [0, -10, 10, -5, 5, 0],
                                    scale: 1.1,
                                    transition: { duration: 0.5 },
                                }}
                                className="relative w-16 h-16 rounded-2xl bg-white border-2 border-[#EAF9FA] text-[#009A9E] flex items-center justify-center text-2xl group-hover:scale-110 transition duration-300 shadow-sm"
                            >
                                ↗
                            </motion.div>

                            {/* Title */}
                            <motion.h3
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                className="relative mt-8 text-2xl font-bold text-[#009A9E] leading-snug"
                            >
                                Deep Value Investments
                            </motion.h3>

                            {/* Description */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                                className="relative mt-5 leading-8"
                                style={{ color: "#000" }}
                            >
                                Identifying distressed and underpriced
                                opportunities with significant value
                                unlocking potential across India's
                                evolving special situations market.
                            </motion.p>
                        </motion.div>

                        {/* CARD 2 */}
                        <motion.div
                            variants={cardVariants}
                            whileHover={{
                                y: -8,
                                scale: 1.02,
                                boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
                                transition: { duration: 0.3 },
                            }}
                            className="group relative overflow-hidden rounded-[32px] bg-white border border-slate-200 p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                        >
                            {/* Hover Glow */}
                            <div className="absolute inset-0 bg-[#EAF9FA]/0 group-hover:bg-[#EAF9FA]/[0.03] transition-all duration-500"></div>

                            {/* Top Border */}
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: "100%" }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                                className="absolute top-0 left-0 h-1 bg-[#EAF9FA]"
                            ></motion.div>

                            {/* Icon */}
                            <motion.div
                                whileHover={{
                                    rotate: [0, -10, 10, -5, 5, 0],
                                    scale: 1.1,
                                    transition: { duration: 0.5 },
                                }}
                                className="relative w-16 h-16 rounded-2xl bg-white border-2 border-[#EAF9FA] text-[#009A9E] flex items-center justify-center text-2xl group-hover:scale-110 transition duration-300 shadow-sm"
                            >
                                ◎
                            </motion.div>

                            {/* Title */}
                            <motion.h3
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                                className="relative mt-8 text-2xl font-bold text-[#009A9E] leading-snug"
                            >
                                Institutional Governance
                            </motion.h3>

                            {/* Description */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ delay: 0.6, duration: 0.6 }}
                                className="relative mt-5 leading-8"
                                style={{ color: "#000" }}
                            >
                                Structured investment execution with
                                governance-led decision making,
                                downside protection, and disciplined
                                capital deployment frameworks.
                            </motion.p>
                        </motion.div>

                        {/* LARGE CARD */}
                        <motion.div
                            variants={cardVariants}
                            whileHover={{
                                boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
                                transition: { duration: 0.3 },
                            }}
                            className="sm:col-span-2 relative overflow-hidden rounded-[36px] bg-white border border-slate-200 p-8 sm:p-10 shadow-sm hover:shadow-2xl transition-all duration-500"
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
                                className="absolute top-0 right-0 w-96 h-96 bg-[#EAF9FA]/10 blur-3xl rounded-full"
                            ></motion.div>

                            {/* Pattern */}
                            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] bg-[size:22px_22px]"></div>

                            <div className="relative z-10 flex flex-col lg:flex-row lg:justify-between gap-10">
                                {/* LEFT */}
                                <div className="max-w-2xl">
                                    <motion.p
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: false, amount: 0.3 }}
                                        transition={{ delay: 0.3, duration: 0.6 }}
                                        className="text-sm font-semibold uppercase tracking-[0.2em] text-[#009A9E]"
                                    >
                                        India's Opportunity Landscape
                                    </motion.p>

                                    <motion.h3
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: false, amount: 0.3 }}
                                        transition={{ delay: 0.4, duration: 0.7 }}
                                        className="mt-5 text-2xl sm:text-5xl font-bold leading-tight tracking-[-0.03em]"
                                        style={{ color: "#000" }}
                                    >
                                        ₹8–12 Lakh Crore
                                        Stressed Asset
                                        Opportunity Market
                                    </motion.h3>
                                </div>

                                {/* RIGHT */}
                                <motion.div
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={{ delay: 0.5, duration: 0.7 }}
                                    className="flex items-center gap-10"
                                >
                                    <motion.div
                                        whileHover={{
                                            scale: 1.05,
                                            transition: { duration: 0.3 },
                                        }}
                                    >
                                        <motion.h4
                                            initial={{ scale: 0.5, opacity: 0 }}
                                            whileInView={{ scale: 1, opacity: 1 }}
                                            viewport={{ once: false, amount: 0.3 }}
                                            transition={{ delay: 0.6, duration: 0.5, type: "spring" }}
                                            className="text-3xl sm:text-5xl font-bold text-[#009A9E]"
                                        >
                                            500+
                                        </motion.h4>
                                        <p className="mt-2 text-sm" style={{ color: "#000" }}>
                                            Potential Cases
                                        </p>
                                    </motion.div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>

                    {/* RIGHT SIDE */}
                    <motion.div
                        className="lg:col-span-5"
                        variants={fadeRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        <motion.div
                            whileHover={{
                                boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
                                transition: { duration: 0.3 },
                            }}
                            className="group relative h-full overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-sm hover:shadow-2xl transition-all duration-500"
                        >
                            {/* IMAGE */}
                            <motion.div
                                whileHover={{
                                    scale: 1.05,
                                    transition: { duration: 0.7 },
                                }}
                                className="overflow-hidden"
                            >
                                <div
                                    className="h-[260px] sm:h-[320px] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                    style={{
                                        backgroundImage:
                                            "url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop')",
                                    }}
                                ></div>
                            </motion.div>

                            {/* CONTENT */}
                            <div className="p-8 sm:p-10">
                                {/* Badge */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={{ delay: 0.3, duration: 0.5 }}
                                    className="inline-flex items-center gap-2 rounded-full bg-[#EAF9FA] border border-[#D5F3F5] px-4 py-2 text-sm font-semibold text-[#00314A]"
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
                                        className="w-2 h-2 rounded-full bg-[#009A9E]"
                                    ></motion.div>
                                    Strategic Investment Focus
                                </motion.div>

                                {/* Heading */}
                                <motion.h3
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={{ delay: 0.4, duration: 0.7 }}
                                    className="mt-7 text-4xl font-bold leading-tight tracking-[-0.03em] text-[#009A9E]"
                                >
                                    Focused on Complex
                                    <span className="block text-[#009A9E] mt-2">
                                        & High-Conviction
                                    </span>
                                    Opportunities
                                </motion.h3>

                                {/* Description */}
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={{ delay: 0.5, duration: 0.6 }}
                                    className="mt-6 leading-8"
                                    style={{ color: "#000" }}
                                >
                                    Investing across distressed debt,
                                    restructuring-led opportunities,
                                    litigation-backed assets,
                                    and operational turnaround situations.
                                </motion.p>

                                {/* STATS */}
                                <motion.div
                                    className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5"
                                    variants={staggerContainer}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: false, amount: 0.3 }}
                                >
                                    <motion.div
                                        variants={statVariants}
                                        whileHover={{
                                            scale: 1.05,
                                            borderColor: "#7ACED4",
                                            transition: { duration: 0.3 },
                                        }}
                                        className="rounded-3xl border border-slate-200 bg-slate-50 p-6 hover:border-[#7ACED4] transition duration-300"
                                    >
                                        <p className="text-sm" style={{ color: "#000" }}>
                                            Structure
                                        </p>
                                        <motion.h4
                                            initial={{ scale: 0.8, opacity: 0 }}
                                            whileInView={{ scale: 1, opacity: 1 }}
                                            viewport={{ once: false, amount: 0.3 }}
                                            transition={{ delay: 0.4, duration: 0.5, type: "spring" }}
                                            className="mt-3 text-2xl font-bold text-[#009A9E]"
                                        >
                                            Category II AIF
                                        </motion.h4>
                                    </motion.div>

                                    <motion.div
                                        variants={statVariants}
                                        whileHover={{
                                            scale: 1.05,
                                            borderColor: "#7ACED4",
                                            transition: { duration: 0.3 },
                                        }}
                                        className="rounded-3xl border border-slate-200 bg-slate-50 p-6 hover:border-[#7ACED4] transition duration-300"
                                    >
                                        <p className="text-sm" style={{ color: "#000" }}>
                                            Geography
                                        </p>
                                        <motion.h4
                                            initial={{ scale: 0.8, opacity: 0 }}
                                            whileInView={{ scale: 1, opacity: 1 }}
                                            viewport={{ once: false, amount: 0.3 }}
                                            transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
                                            className="mt-3 text-2xl font-bold text-[#009A9E]"
                                        >
                                            India Focused
                                        </motion.h4>
                                    </motion.div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}