"use client";

import {
    ArrowUpRight,
    TrendingUp,
    Landmark,
    Scale,
    Briefcase,
    ShieldCheck,
    CheckCircle2,
    Building2,
    BarChart3,
} from "lucide-react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";

const caseStudies = [
    {
        title: "Stressed Corporate Debt Resolution",
        value: "₹250 Cr",
        irr: "22% IRR",
        desc: "Strategic acquisition of distressed debt assets with resolution-led turnaround approach.",
        icon: Landmark,
    },
    {
        title: "Litigation Locked Real Estate",
        value: "₹180 Cr",
        irr: "19% IRR",
        desc: "Unlocking trapped value through legal restructuring and phased capital infusion.",
        icon: Scale,
    },
    {
        title: "Mid-Market Restructuring",
        value: "₹95 Cr",
        irr: "24% IRR",
        desc: "Operational revival and refinancing support for overleveraged enterprises.",
        icon: Briefcase,
    },
];

export default function CaseStudy() {

    // Animation variants
    const fadeUp: Variants = {
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

    const staggerContainer: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    const cardVariants: Variants = {
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

    const statVariants: Variants = {
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

    const featureVariants: Variants = {
        hidden: {
            opacity: 0,
            x: -20,
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

    const strategyVariants: Variants = {
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

    const marketVariants: Variants = {
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

    const buttonVariants: Variants = {
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
                            Investment Opportunities
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
                            Case Studies &
                            <span className="block mt-2 text-[#7ACED4]">
                                Special Situation Investments
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ delay: 0.5, duration: 0.7 }}
                            className="mt-8 max-w-4xl mx-auto text-base sm:text-lg lg:text-xl leading-9 text-slate-300"
                        >
                            Institutional-grade turnaround investments
                            focused on distressed credit,
                            restructuring opportunities,
                            litigation-locked assets,
                            and strategic value unlocking.
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
                                    <BarChart3 size={16} />
                                    Portfolio Opportunities
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
                                    className="mt-8 text-2xl sm:text-3xl lg:text-5xl font-bold leading-[1.05] tracking-[-0.04em] text-white"
                                >
                                    Institutional-grade
                                    <span className="block mt-2 text-[#7ACED4]">
                                        Turnaround Investments
                                    </span>
                                </motion.h2>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={{ delay: 0.5, duration: 0.7 }}
                                    className="mt-8 max-w-4xl text-base sm:text-lg lg:text-xl leading-9 text-slate-300"
                                >
                                    INFIN ALPHA LLP focuses on identifying
                                    high-potential distressed opportunities
                                    where strategic capital infusion,
                                    restructuring expertise,
                                    and operational turnaround can unlock
                                    substantial long-term value.
                                </motion.p>
                            </div>
                        </motion.div>

                        {/* CASE STUDIES */}
                        <div className="relative z-10 p-5 sm:p-8 lg:p-8">
                            <motion.div
                                className="grid lg:grid-cols-3 gap-6"
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.1 }}
                            >
                                {caseStudies.map((item, idx) => (
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
                                        className="group relative overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-xl hover:shadow-2xl hover:border-[#7ACED4] transition-all duration-500"
                                    >
                                        <div className="p-8">
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
                                                className="mt-8 text-3xl font-bold text-[#009A9E] leading-tight"
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

                                            <motion.div
                                                className="mt-8 grid grid-cols-2 gap-4"
                                                variants={staggerContainer}
                                                initial="hidden"
                                                whileInView="visible"
                                                viewport={{ once: false, amount: 0.3 }}
                                            >
                                                <motion.div
                                                    variants={statVariants}
                                                    whileHover={{
                                                        scale: 1.05,
                                                        transition: { duration: 0.3 },
                                                    }}
                                                    className="rounded-2xl border border-[#D5F3F5] bg-[#EAF9FA] p-5"
                                                >
                                                    <p className="text-sm text-[#00314A] font-medium">
                                                        Investment Size
                                                    </p>
                                                    <h4 className="mt-2 text-2xl font-bold text-[#009A9E]">
                                                        {item.value}
                                                    </h4>
                                                </motion.div>

                                                <motion.div
                                                    variants={statVariants}
                                                    whileHover={{
                                                        scale: 1.05,
                                                        transition: { duration: 0.3 },
                                                    }}
                                                    className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                                                >
                                                    <p className="text-sm text-slate-600 font-medium">
                                                        Potential Return
                                                    </p>
                                                    <h4 className="mt-2 text-2xl font-bold text-slate-900">
                                                        {item.irr}
                                                    </h4>
                                                </motion.div>
                                            </motion.div>

                                            <motion.div
                                                className="mt-8 space-y-4"
                                                variants={staggerContainer}
                                                initial="hidden"
                                                whileInView="visible"
                                                viewport={{ once: false, amount: 0.3 }}
                                            >
                                                {[
                                                    "Strategic restructuring",
                                                    "Institutional execution",
                                                    "Resolution-led value creation",
                                                ].map((feature, i) => (
                                                    <motion.div
                                                        key={i}
                                                        variants={featureVariants}
                                                        whileHover={{
                                                            x: 5,
                                                            transition: { duration: 0.3 },
                                                        }}
                                                        className="flex items-center gap-3"
                                                    >
                                                        <motion.div
                                                            animate={{
                                                                scale: [1, 1.2, 1],
                                                            }}
                                                            transition={{
                                                                duration: 2,
                                                                repeat: Infinity,
                                                                delay: i * 0.2,
                                                                ease: "easeInOut",
                                                            }}
                                                        >
                                                            <CheckCircle2
                                                                size={18}
                                                                className="text-[#009A9E] shrink-0"
                                                            />
                                                        </motion.div>
                                                        <p
                                                            className="text-sm"
                                                            style={{ color: "#000000" }}
                                                        >
                                                            {feature}
                                                        </p>
                                                    </motion.div>
                                                ))}
                                            </motion.div>

                                            <motion.div
                                                variants={buttonVariants}
                                                initial="hidden"
                                                whileInView="visible"
                                                viewport={{ once: false, amount: 0.3 }}
                                            >
                                                <Link
                                                    href={
                                                        idx === 0
                                                            ? "/investment/caseStudy/stressed-corporate-debt"
                                                            : idx === 1
                                                                ? "/investment/caseStudy/litigation-real-estate"
                                                                : "/investment/caseStudy/mid-market-restructuring"
                                                    }
                                                    className="mt-10 inline-flex items-center gap-2 rounded-2xl bg-[#009A9E] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#00314A]"
                                                >
                                                    View Case Study
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
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>

                            {/* STRATEGY SECTION */}
                            <motion.div
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="mt-12"
                            >
                                <div className="relative overflow-hidden rounded-[36px] p-6 sm:p-8 lg:p-10 text-white shadow-2xl" style={{ background: "#F8FCFC" }}>
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
                                                Investment Strategy
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
                                                Deep-value
                                                Acquisition Model
                                            </motion.h3>
                                        </motion.div>

                                        <div className="lg:col-span-7">
                                            <motion.p
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: false, amount: 0.3 }}
                                                transition={{ delay: 0.4, duration: 0.6 }}
                                                className="text-base sm:text-lg leading-9"
                                                style={{ color: "#000000" }}
                                            >
                                                INFIN ALPHA LLP follows
                                                a disciplined investment strategy
                                                focused on distressed opportunities,
                                                strategic restructuring,
                                                operational turnaround,
                                                and profitable exits through
                                                institutional execution capabilities.
                                            </motion.p>

                                            <motion.div
                                                className="mt-8 grid sm:grid-cols-2 gap-4"
                                                variants={staggerContainer}
                                                initial="hidden"
                                                whileInView="visible"
                                                viewport={{ once: false, amount: 0.2 }}
                                            >
                                                {[
                                                    "Acquire at deep discounts",
                                                    "Strategic capital infusion",
                                                    "Operational turnaround",
                                                    "Structured exits",
                                                ].map((item, idx) => (
                                                    <motion.div
                                                        key={idx}
                                                        variants={strategyVariants}
                                                        whileHover={{
                                                            scale: 1.05,
                                                            backgroundColor: "rgba(0,154,158,0.05)",
                                                            transition: { duration: 0.3 },
                                                        }}
                                                        className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
                                                    >
                                                        <motion.div
                                                            animate={{
                                                                rotate: [0, 360],
                                                            }}
                                                            transition={{
                                                                duration: 8,
                                                                repeat: Infinity,
                                                                ease: "linear",
                                                            }}
                                                        >
                                                            <TrendingUp
                                                                className="text-[#7ACED4] shrink-0"
                                                                size={18}
                                                            />
                                                        </motion.div>
                                                        <p className="text-sm sm:text-base text-black/90">
                                                            {item}
                                                        </p>
                                                    </motion.div>
                                                ))}
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* MARKET OPPORTUNITY */}
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
                                        <Building2 size={16} />
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
                                        className="mt-6 text-3xl sm:text-5xl font-bold leading-tight"
                                    >
                                        <span style={{ color: "#000000" }}>
                                            India's Distressed Asset
                                        </span>
                                        <span className="block mt-2 text-[#009A9E]">
                                            Opportunity Landscape
                                        </span>
                                    </motion.h3>
                                </motion.div>

                                <motion.div
                                    className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
                                    variants={staggerContainer}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: false, amount: 0.1 }}
                                >
                                    {[
                                        {
                                            title: "₹12L Cr",
                                            subtitle: "Estimated stressed asset opportunity",
                                        },
                                        {
                                            title: "20%+",
                                            subtitle: "Target IRR potential",
                                        },
                                        {
                                            title: "₹50–75 Cr",
                                            subtitle: "Average investment size",
                                        },
                                        {
                                            title: "5 Years",
                                            subtitle: "Investment horizon",
                                        },
                                    ].map((item, idx) => (
                                        <motion.div
                                            key={idx}
                                            variants={marketVariants}
                                            whileHover={{
                                                y: -10,
                                                scale: 1.05,
                                                borderColor: "#7ACED4",
                                                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                                                transition: { duration: 0.3 },
                                            }}
                                            className="group rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl hover:border-[#7ACED4] transition-all duration-500"
                                        >
                                            <motion.h4
                                                variants={statVariants}
                                                className="text-4xl font-bold text-[#009A9E] leading-tight"
                                            >
                                                {item.title}
                                            </motion.h4>

                                            <motion.p
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: false, amount: 0.3 }}
                                                transition={{ delay: 0.2 + idx * 0.1, duration: 0.6 }}
                                                className="mt-4 text-sm leading-7"
                                                style={{ color: "#000000" }}
                                            >
                                                {item.subtitle}
                                            </motion.p>
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