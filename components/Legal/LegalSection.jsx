"use client";

import {
    ShieldCheck,
    Scale,
    FileText,
    AlertTriangle,
    Lock,
    Building2,
} from "lucide-react";
import { motion } from "framer-motion";

export default function LegalSection() {

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

    const legalBlockVariants = {
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

    const complianceCardVariants = {
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

                {/* Pattern */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.04 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] bg-[size:24px_24px]"
                />

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
                                Legal & Compliance
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
                                className="mt-8 text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.05] tracking-tight text-white"
                            >
                                Legal
                                <span className="block mt-2 text-[#7ACED4]">
                                    Information
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
                                Important disclosures, regulatory information,
                                investor communication guidelines,
                                and legal notices regarding INFIN ALPHA LLP
                                and associated investment activities.
                            </motion.p>
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            {/* MAIN SECTION */}
            <div className="relative z-10 pb-20 sm:pb-24 pt-[40px] sm:pt-[70px] lg:pt-[100px]" style={{ marginTop: "80px" }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.1 }}
                    >
                        {/* LEFT SIDE */}
                        <motion.div
                            className="lg:col-span-8"
                            variants={fadeLeft}
                        >
                            <motion.div
                                whileHover={{
                                    boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
                                    transition: { duration: 0.3 },
                                }}
                                className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] border border-slate-200 bg-white p-5 sm:p-8 lg:p-10 shadow-sm hover:shadow-2xl transition-all duration-500"
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
                                />

                                <div className="relative z-10">
                                    {/* Badge */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: false, amount: 0.3 }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                        className="inline-flex items-center gap-2 rounded-full border border-[#D5F3F5] bg-[#EAF9FA] px-4 py-2 text-xs sm:text-sm font-semibold text-[#00314A]"
                                    >
                                        <Scale size={16} />
                                        Regulatory Disclosure
                                    </motion.div>

                                    {/* Heading */}
                                    <motion.h2
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: false, amount: 0.3 }}
                                        transition={{ delay: 0.3, duration: 0.7 }}
                                        className="mt-5 sm:mt-6 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-[-0.03em] text-[#009A9E]"
                                    >
                                        Important Legal
                                        Information
                                    </motion.h2>

                                    {/* Description */}
                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: false, amount: 0.3 }}
                                        transition={{ delay: 0.4, duration: 0.6 }}
                                        className="mt-6 text-base sm:text-lg leading-8 text-slate-700"
                                    >
                                        The information provided on this website
                                        is intended solely for informational purposes
                                        and does not constitute an offer to sell,
                                        solicitation, recommendation,
                                        or invitation to invest in any securities,
                                        investment products, or financial instruments.
                                    </motion.p>

                                    {/* CONTENT BLOCKS */}
                                    <motion.div
                                        className="mt-10 space-y-6"
                                        variants={staggerContainer}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: false, amount: 0.2 }}
                                    >
                                        {/* BLOCK 1 */}
                                        <motion.div
                                            variants={legalBlockVariants}
                                            whileHover={{
                                                y: -5,
                                                borderColor: "#7ACED4",
                                                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                                                transition: { duration: 0.3 },
                                            }}
                                            className="rounded-3xl border border-slate-200 p-5 sm:p-6 bg-slate-50"
                                        >
                                            <div className="flex items-start gap-4">
                                                <motion.div
                                                    whileHover={{
                                                        rotate: [0, -10, 10, -5, 5, 0],
                                                        scale: 1.1,
                                                        transition: { duration: 0.5 },
                                                    }}
                                                    className="w-12 h-12 rounded-2xl border-2 border-[#EAF9FA] text-[#009A9E] flex items-center justify-center shrink-0"
                                                >
                                                    <FileText size={22} />
                                                </motion.div>

                                                <div>
                                                    <motion.h3
                                                        initial={{ opacity: 0, y: 10 }}
                                                        whileInView={{ opacity: 1, y: 0 }}
                                                        viewport={{ once: false, amount: 0.3 }}
                                                        transition={{ delay: 0.2, duration: 0.5 }}
                                                        className="text-xl font-bold text-[#009A9E]"
                                                    >
                                                        Investment Risk Disclosure
                                                    </motion.h3>
                                                    <motion.p
                                                        initial={{ opacity: 0, y: 10 }}
                                                        whileInView={{ opacity: 1, y: 0 }}
                                                        viewport={{ once: false, amount: 0.3 }}
                                                        transition={{ delay: 0.3, duration: 0.5 }}
                                                        className="mt-3 leading-8 text-slate-700 text-sm sm:text-base"
                                                    >
                                                        Investments in distressed assets,
                                                        special situations,
                                                        and alternative investment structures
                                                        involve varying degrees of risk,
                                                        including potential loss of capital.
                                                        Past performance is not indicative
                                                        of future results.
                                                    </motion.p>
                                                </div>
                                            </div>
                                        </motion.div>

                                        {/* BLOCK 2 */}
                                        <motion.div
                                            variants={legalBlockVariants}
                                            whileHover={{
                                                y: -5,
                                                borderColor: "#7ACED4",
                                                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                                                transition: { duration: 0.3 },
                                            }}
                                            className="rounded-3xl border border-slate-200 p-5 sm:p-6 bg-slate-50"
                                        >
                                            <div className="flex items-start gap-4">
                                                <motion.div
                                                    whileHover={{
                                                        rotate: [0, -10, 10, -5, 5, 0],
                                                        scale: 1.1,
                                                        transition: { duration: 0.5 },
                                                    }}
                                                    className="w-12 h-12 rounded-2xl border-2 border-[#EAF9FA] text-[#009A9E] flex items-center justify-center shrink-0"
                                                >
                                                    <AlertTriangle size={22} />
                                                </motion.div>

                                                <div>
                                                    <motion.h3
                                                        initial={{ opacity: 0, y: 10 }}
                                                        whileInView={{ opacity: 1, y: 0 }}
                                                        viewport={{ once: false, amount: 0.3 }}
                                                        transition={{ delay: 0.4, duration: 0.5 }}
                                                        className="text-xl font-bold text-[#009A9E]"
                                                    >
                                                        Forward Looking Statements
                                                    </motion.h3>
                                                    <motion.p
                                                        initial={{ opacity: 0, y: 10 }}
                                                        whileInView={{ opacity: 1, y: 0 }}
                                                        viewport={{ once: false, amount: 0.3 }}
                                                        transition={{ delay: 0.5, duration: 0.5 }}
                                                        className="mt-3 leading-8 text-slate-700 text-sm sm:text-base"
                                                    >
                                                        Certain statements may contain
                                                        forward-looking assumptions,
                                                        projections, or market expectations.
                                                        Actual outcomes may differ materially
                                                        due to market volatility,
                                                        regulatory changes,
                                                        economic conditions,
                                                        and investment-specific factors.
                                                    </motion.p>
                                                </div>
                                            </div>
                                        </motion.div>

                                        {/* BLOCK 3 */}
                                        <motion.div
                                            variants={legalBlockVariants}
                                            whileHover={{
                                                y: -5,
                                                borderColor: "#7ACED4",
                                                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                                                transition: { duration: 0.3 },
                                            }}
                                            className="rounded-3xl border border-slate-200 p-5 sm:p-6 bg-slate-50"
                                        >
                                            <div className="flex items-start gap-4">
                                                <motion.div
                                                    whileHover={{
                                                        rotate: [0, -10, 10, -5, 5, 0],
                                                        scale: 1.1,
                                                        transition: { duration: 0.5 },
                                                    }}
                                                    className="w-12 h-12 rounded-2xl border-2 border-[#EAF9FA] text-[#009A9E] flex items-center justify-center shrink-0"
                                                >
                                                    <Lock size={22} />
                                                </motion.div>

                                                <div>
                                                    <motion.h3
                                                        initial={{ opacity: 0, y: 10 }}
                                                        whileInView={{ opacity: 1, y: 0 }}
                                                        viewport={{ once: false, amount: 0.3 }}
                                                        transition={{ delay: 0.6, duration: 0.5 }}
                                                        className="text-xl font-bold text-[#009A9E]"
                                                    >
                                                        Confidentiality & Privacy
                                                    </motion.h3>
                                                    <motion.p
                                                        initial={{ opacity: 0, y: 10 }}
                                                        whileInView={{ opacity: 1, y: 0 }}
                                                        viewport={{ once: false, amount: 0.3 }}
                                                        transition={{ delay: 0.7, duration: 0.5 }}
                                                        className="mt-3 leading-8 text-slate-700 text-sm sm:text-base"
                                                    >
                                                        Any information shared through
                                                        investor communication channels
                                                        is subject to applicable confidentiality,
                                                        compliance,
                                                        and data privacy regulations.
                                                        Unauthorized distribution
                                                        or reproduction is prohibited.
                                                    </motion.p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* RIGHT SIDE */}
                        <motion.div
                            className="lg:col-span-4"
                            variants={fadeRight}
                        >
                            <motion.div
                                whileHover={{
                                    boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
                                    transition: { duration: 0.3 },
                                }}
                                className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] p-5 sm:p-8 lg:p-10 shadow-2xl text-slate-300"
                                style={{
                                    background: "linear-gradient(135deg, #F8FCFC 0%, #FFFFFF 100%)",
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
                                />

                                {/* Pattern */}
                                <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(white_1px,transparent_1px)] bg-[size:22px_22px]" />

                                <div className="relative z-10">
                                    {/* Badge */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: false, amount: 0.3 }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                        className="inline-flex items-center gap-2 rounded-full border border-[#D5F3F5] bg-[#EAF9FA] px-4 py-2 text-xs sm:text-sm font-semibold text-[#00314A]"
                                    >
                                        Compliance Framework
                                    </motion.div>

                                    {/* Heading */}
                                    <motion.h3
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: false, amount: 0.3 }}
                                        transition={{ delay: 0.3, duration: 0.7 }}
                                        className="mt-6 text-3xl sm:text-4xl font-bold leading-tight tracking-[-0.03em] text-[#00314A]"
                                    >
                                        Investor
                                        Protection &
                                        Transparency
                                    </motion.h3>

                                    {/* Description */}
                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: false, amount: 0.3 }}
                                        transition={{ delay: 0.4, duration: 0.6 }}
                                        className="mt-6 text-sm sm:text-base leading-8 text-slate-700"
                                    >
                                        INFIN ALPHA LLP maintains
                                        a governance-focused approach
                                        emphasizing compliance,
                                        investor transparency,
                                        ethical investment conduct,
                                        and institutional discipline.
                                    </motion.p>

                                    {/* STATS */}
                                    <motion.div
                                        className="mt-10 grid gap-3"
                                        variants={staggerContainer}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: false, amount: 0.2 }}
                                    >
                                        <motion.div
                                            variants={complianceCardVariants}
                                            whileHover={{
                                                scale: 1.05,
                                                borderColor: "#009A9E",
                                                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                                                transition: { duration: 0.3 },
                                            }}
                                            className="rounded-2xl border border-white/10 bg-white/5 p-4"
                                        >
                                            <p className="text-sm text-slate-700">
                                                Regulatory Focus
                                            </p>
                                            <motion.h4
                                                initial={{ opacity: 0, y: 10 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: false, amount: 0.3 }}
                                                transition={{ delay: 0.3, duration: 0.5 }}
                                                className="mt-2 text-xl font-bold text-[#009A9E]"
                                            >
                                                Institutional Compliance
                                            </motion.h4>
                                        </motion.div>

                                        <motion.div
                                            variants={complianceCardVariants}
                                            whileHover={{
                                                scale: 1.05,
                                                borderColor: "#009A9E",
                                                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                                                transition: { duration: 0.3 },
                                            }}
                                            className="rounded-2xl border border-white/10 bg-white/5 p-4"
                                        >
                                            <p className="text-sm text-slate-700">
                                                Communication
                                            </p>
                                            <motion.h4
                                                initial={{ opacity: 0, y: 10 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: false, amount: 0.3 }}
                                                transition={{ delay: 0.4, duration: 0.5 }}
                                                className="mt-2 text-xl font-bold text-[#009A9E]"
                                            >
                                                Investor Transparency
                                            </motion.h4>
                                        </motion.div>

                                        <motion.div
                                            variants={complianceCardVariants}
                                            whileHover={{
                                                scale: 1.05,
                                                borderColor: "#009A9E",
                                                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                                                transition: { duration: 0.3 },
                                            }}
                                            className="rounded-2xl border border-white/10 bg-white/5 p-4"
                                        >
                                            <p className="text-sm text-slate-700">
                                                Governance
                                            </p>
                                            <motion.h4
                                                initial={{ opacity: 0, y: 10 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: false, amount: 0.3 }}
                                                transition={{ delay: 0.5, duration: 0.5 }}
                                                className="mt-2 text-xl font-bold text-[#009A9E]"
                                            >
                                                Ethical Investment Practices
                                            </motion.h4>
                                        </motion.div>
                                    </motion.div>

                                    {/* Bottom */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: false, amount: 0.3 }}
                                        transition={{ delay: 0.6, duration: 0.7 }}
                                        whileHover={{
                                            scale: 1.02,
                                            transition: { duration: 0.3 },
                                        }}
                                        className="mt-10 rounded-2xl border border-[#EAF9FA]/20 bg-[#EAF9FA]/10 p-5"
                                    >
                                        <div className="flex items-start gap-3">
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
                                                <Building2 className="text-[#7ACED4] mt-1" size={20} />
                                            </motion.div>
                                            <p className="text-sm leading-7 text-slate-700">
                                                Please consult your legal,
                                                financial,
                                                and tax advisors before making
                                                any investment decisions.
                                            </p>
                                        </div>
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