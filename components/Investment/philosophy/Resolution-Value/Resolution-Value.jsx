"use client";

import {
    Scale,
    TrendingUp,
    CheckCircle2,
    Landmark,
    ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";

export default function ResolutionValuePage() {

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

    const bottomVariants = {
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
                                <Scale size={16} />
                            </motion.div>
                            Resolution Strategy
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
                            Resolution-led
                            <span className="block mt-2 text-[#7ACED4]">
                                Value Creation
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ delay: 0.5, duration: 0.7 }}
                            className="mt-8 max-w-4xl mx-auto text-base sm:text-lg lg:text-xl leading-9 text-slate-300"
                        >
                            Unlocking enterprise value through
                            restructuring frameworks,
                            turnaround execution,
                            institutional coordination,
                            and strategic recovery-led investment approaches.
                        </motion.p>
                    </motion.div>
                </div>
            </motion.div>

            {/* CONTENT */}
            <div className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* TOP CARDS */}
                    <motion.div
                        className="grid lg:grid-cols-3 gap-6"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.1 }}
                    >
                        {[
                            {
                                title: "Operational Turnaround",
                                desc: "Business stabilization and restructuring support across stressed enterprises.",
                                icon: TrendingUp,
                            },
                            {
                                title: "IBC-led Resolution",
                                desc: "Institutional frameworks supporting structured recovery and value unlocking.",
                                icon: Landmark,
                            },
                            {
                                title: "Strategic Execution",
                                desc: "Disciplined investment execution focused on recovery-oriented outcomes.",
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
                                    style={{ color: "#000000" }}
                                >
                                    {item.desc}
                                </motion.p>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* PROCESS */}
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
                            Resolution Workflow
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
                            Institutional Turnaround Process
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
                                "Asset Evaluation",
                                "Resolution Planning",
                                "Operational Execution",
                                "Strategic Recovery",
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

                    {/* BOTTOM */}
                    <motion.div
                        className="mt-20 grid lg:grid-cols-2 gap-8"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.1 }}
                    >
                        <motion.div
                            variants={bottomVariants}
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
                            >
                                <Scale
                                    className="text-[#009A9E]"
                                    size={36}
                                />
                            </motion.div>

                            <motion.h3
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                                className="mt-6 text-3xl font-bold text-[#00314A]"
                            >
                                Structured Resolution
                            </motion.h3>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                className="mt-6 text-base leading-9 text-slate-700"
                                style={{ color: "#000000" }}
                            >
                                Coordinated restructuring and turnaround
                                strategies designed for complex
                                stressed and special situation opportunities.
                            </motion.p>
                        </motion.div>

                        <motion.div
                            variants={bottomVariants}
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
                            >
                                <TrendingUp
                                    className="text-[#009A9E]"
                                    size={36}
                                />
                            </motion.div>

                            <motion.h3
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                className="mt-6 text-3xl font-bold text-[#00314A]"
                            >
                                Recovery-focused Outcomes
                            </motion.h3>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                                className="mt-6 text-base leading-9 text-slate-700"
                                style={{ color: "#000000" }}
                            >
                                Institutional execution frameworks focused
                                on value recovery,
                                strategic exits,
                                and long-term enterprise stabilization.
                            </motion.p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}