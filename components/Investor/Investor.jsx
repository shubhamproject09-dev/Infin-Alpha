// components/Investment/investor/Investor.tsx

"use client";

import {
    ShieldCheck,
    Lock,
    TrendingUp,
    Landmark,
    Building2,
    CheckCircle2,
    ArrowUpRight,
    Wallet,
    Briefcase,
    FileCheck2,
    Users,
    PhoneCall,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const investorCards = [
    {
        title: "Secure Investor Verification",
        desc: "Appropriate investor verification mechanisms with institutional onboarding standards.",
        icon: ShieldCheck,
    },
    {
        title: "Secure Handling of Information",
        desc: "Confidential investor information handling through structured compliance workflows.",
        icon: Lock,
    },
    {
        title: "Qualified Investor Access",
        desc: "Dedicated communication pathways for institutional and qualified investors.",
        icon: Users,
    },
];

const processFlow = [
    {
        title: "Investor Interaction",
        desc: "Qualified investors connect with authorized INFIN Alpha representatives.",
        icon: PhoneCall,
    },
    {
        title: "Verification Process",
        desc: "KYC, compliance and investor onboarding verification mechanisms.",
        icon: FileCheck2,
    },
    {
        title: "CAMS Coordination",
        desc: "CAMS handles fund administration and investor servicing processes.",
        icon: Building2,
    },
    {
        title: "Investment Participation",
        desc: "Participation across stressed credit and special situation opportunities.",
        icon: TrendingUp,
    },
];

export default function Investor() {

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

    const processVariants = {
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

    const trustVariants = {
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
                            Secure Investor Access
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
                            Investor
                            <span className="block mt-2 text-[#7ACED4]">
                                Access & Engagement
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ delay: 0.5, duration: 0.7 }}
                            className="mt-8 max-w-4xl mx-auto text-base sm:text-lg lg:text-xl leading-9 text-slate-300"
                        >
                            Structured investor onboarding,
                            secure communication pathways,
                            institutional servicing standards,
                            and regulated investor engagement
                            framework for qualified investors.
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
                                    <Wallet size={16} />
                                    Investor Infrastructure
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
                                    Institutional-grade
                                    <span className="block mt-2 text-[#7ACED4]">
                                        Investor Servicing
                                    </span>
                                </motion.h2>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={{ delay: 0.5, duration: 0.7 }}
                                    className="mt-8 max-w-4xl text-base sm:text-lg lg:text-xl leading-9 text-slate-300"
                                >
                                    INFIN Alpha LLP follows
                                    structured investor engagement processes,
                                    secure handling of investor information,
                                    and robust verification standards
                                    aligned with institutional investment practices.
                                </motion.p>
                            </div>
                        </motion.div>

                        {/* INVESTOR CARDS */}
                        <div className="relative z-10 p-5 sm:p-8 lg:p-12">
                            <motion.div
                                className="gap-6"
                                style={{
                                    display: "grid",
                                    gridTemplateColumns:
                                        "repeat(auto-fit, minmax(320px, 1fr))",
                                }}
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.1 }}
                            >
                                {investorCards.map((item, idx) => (
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
                                                        ? "/investor/verification"
                                                        : idx === 1
                                                            ? "/investor/information-security"
                                                            : "/investor/qualified-access"
                                                }
                                                className="mt-10 inline-flex items-center gap-2 rounded-2xl bg-[#009A9E] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#00314A]"
                                            >
                                                Explore More
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

                            {/* PROCESS FLOW */}
                            <motion.div
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="mt-12"
                            >
                                <div className="relative overflow-hidden rounded-[36px] bg-[#00314A] p-6 sm:p-8 lg:p-10 text-white shadow-2xl">
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

                                    <div className="relative z-10">
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
                                                className="inline-flex items-center gap-2 rounded-full border border-[#EAF9FA]/20 bg-[#EAF9FA]/10 px-4 py-2 text-sm font-semibold text-[#7ACED4]"
                                            >
                                                Investor Process
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
                                                Investor Engagement
                                                Workflow
                                            </motion.h3>
                                        </motion.div>

                                        <motion.div
                                            className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                                            variants={staggerContainer}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: false, amount: 0.1 }}
                                        >
                                            {processFlow.map((item, idx) => (
                                                <motion.div
                                                    key={idx}
                                                    variants={processVariants}
                                                    whileHover={{
                                                        y: -8,
                                                        scale: 1.05,
                                                        borderColor: "#7ACED4",
                                                        transition: { duration: 0.3 },
                                                    }}
                                                    className="rounded-[28px] border border-white/10 bg-white/5 p-6"
                                                >
                                                    <motion.div
                                                        whileHover={{
                                                            rotate: [0, -10, 10, -5, 5, 0],
                                                            scale: 1.1,
                                                            transition: { duration: 0.5 },
                                                        }}
                                                        className="w-14 h-14 rounded-2xl bg-[#EAF9FA]/20 flex items-center justify-center text-[#7ACED4]"
                                                    >
                                                        <item.icon size={24} />
                                                    </motion.div>

                                                    <motion.h4
                                                        initial={{ opacity: 0, y: 20 }}
                                                        whileInView={{ opacity: 1, y: 0 }}
                                                        viewport={{ once: false, amount: 0.3 }}
                                                        transition={{ delay: 0.2 + idx * 0.1, duration: 0.6 }}
                                                        className="mt-6 text-2xl font-bold text-[#7ACED4] leading-tight"
                                                    >
                                                        {item.title}
                                                    </motion.h4>

                                                    <motion.p
                                                        initial={{ opacity: 0, y: 20 }}
                                                        whileInView={{ opacity: 1, y: 0 }}
                                                        viewport={{ once: false, amount: 0.3 }}
                                                        transition={{ delay: 0.3 + idx * 0.1, duration: 0.6 }}
                                                        className="mt-4 text-sm leading-7 text-white/80"
                                                    >
                                                        {item.desc}
                                                    </motion.p>
                                                </motion.div>
                                            ))}
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* WHY INVESTORS TRUST */}
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
                                        <Landmark size={16} />
                                        Why Investors Trust Us
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
                                            Trusted Institutional
                                        </span>
                                        <span className="block mt-2 text-[#009A9E]">
                                            Investment Framework
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
                                        "Secure investor verification mechanisms",
                                        "Institutional-grade digital  onboarding standards",
                                        "Experienced special situations team",
                                        "Structured investor communication process",
                                        "Transparent engagement framework",
                                        "Strong compliance & governance standards",
                                    ].map((item, idx) => (
                                        <motion.div
                                            key={idx}
                                            variants={trustVariants}
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
                                                <CheckCircle2 size={24} />
                                            </motion.div>

                                            <motion.h4
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: false, amount: 0.3 }}
                                                transition={{ delay: 0.2 + idx * 0.05, duration: 0.6 }}
                                                className="mt-6 text-2xl font-bold text-[#009A9E] leading-tight"
                                            >
                                                {item}
                                            </motion.h4>

                                            <motion.p
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: false, amount: 0.3 }}
                                                transition={{ delay: 0.3 + idx * 0.05, duration: 0.6 }}
                                                className="mt-4 text-sm leading-7"
                                            >
                                                Structured operational and
                                                institutional investment framework
                                                designed for qualified investors.
                                            </motion.p>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </motion.div>

                            {/* DISCLAIMER */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 0.7, delay: 0.4 }}
                                className="mt-16"
                            >
                                <motion.div
                                    whileHover={{
                                        scale: 1.02,
                                        boxShadow: "0 20px 40px rgba(0,0,0,0.05)",
                                        transition: { duration: 0.3 },
                                    }}
                                    className="rounded-[36px] border border-[#D5F3F5] bg-[#EAF9FA] p-8 sm:p-10"
                                >
                                    <div className="flex items-start gap-4">
                                        <motion.div
                                            animate={{
                                                scale: [1, 1.2, 1],
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                            }}
                                        >
                                            <Briefcase
                                                className="text-[#009A9E] shrink-0 mt-1"
                                                size={28}
                                            />
                                        </motion.div>

                                        <div>
                                            <motion.h3
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: false, amount: 0.3 }}
                                                transition={{ delay: 0.3, duration: 0.6 }}
                                                className="text-3xl font-bold text-[#00314A]"
                                            >
                                                Investor Notice
                                            </motion.h3>

                                            <motion.p
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: false, amount: 0.3 }}
                                                transition={{ delay: 0.4, duration: 0.6 }}
                                                className="mt-6 text-sm sm:text-base leading-8"
                                            >
                                                Clear disclaimers and disclosures
                                                related to investment participation,
                                                fund structures,
                                                investor onboarding,
                                                and regulatory compliance
                                                shall be incorporated in accordance
                                                with applicable legal and regulatory standards.
                                            </motion.p>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}