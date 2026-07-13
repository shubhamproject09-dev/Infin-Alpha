"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function AdvisoryBoard() {

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

    const floatingCardVariants = {
        hidden: {
            opacity: 0,
            y: 50,
            scale: 0.8,
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
            scale: 0.5,
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

            {/* Background Glow */}
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
                className="absolute top-0 left-0 w-96 h-96 bg-[#009A9E]/10 blur-[120px]"
            />
            <motion.div
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute bottom-0 right-0 w-96 h-96 bg-[#00314A]/10 blur-[120px]"
            />

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-15 lg:py-20">

                <motion.div
                    className="grid lg:grid-cols-2 gap-16 items-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                >
                    {/* LEFT CONTENT */}
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
                            className="inline-flex items-center rounded-full bg-[#EAF9FA] text-[#009A9E] px-5 py-2 text-sm font-semibold"
                        >
                            Advisory Board
                        </motion.span>

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
                            className="mt-8 text-5xl lg:text-7xl font-black leading-tight text-[#00314A]"
                        >
                            Guiding
                            <br />
                            <span className="text-[#009A9E]">
                                Strategic Growth
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ delay: 0.5, duration: 0.7 }}
                            className="mt-8 text-lg leading-9 text-gray-600 max-w-xl"
                        >
                            Our Advisory Board brings together accomplished
                            leaders, industry experts, and visionary thinkers
                            committed to guiding INFIN ALPHA with strategic
                            insights, governance excellence, and long-term
                            value creation.
                        </motion.p>

                        <motion.div
                            className="flex gap-5 mt-10"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            <motion.button
                                variants={buttonVariants}
                                whileHover="hover"
                                whileTap="tap"
                                className="px-7 py-4 rounded-xl bg-[#009A9E] hover:bg-[#00314A] duration-300 text-white font-semibold flex items-center gap-2 shadow-xl"
                            >
                                Meet Our Advisors
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
                                    <ArrowRight size={18} />
                                </motion.span>
                            </motion.button>

                            <motion.button
                                variants={buttonVariants}
                                whileHover="hover"
                                whileTap="tap"
                                className="px-7 py-4 rounded-xl border border-[#009A9E] text-[#009A9E] hover:bg-[#009A9E] hover:text-white duration-300 font-semibold"
                            >
                                Learn More
                            </motion.button>
                        </motion.div>
                    </motion.div>

                    {/* RIGHT IMAGE */}
                    <motion.div
                        className="relative"
                        variants={fadeRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        {/* Main Card */}
                        <motion.div
                            whileHover={{
                                scale: 1.02,
                                transition: { duration: 0.3 },
                            }}
                            className="rounded-[35px] overflow-hidden shadow-2xl"
                        >
                            <motion.img
                                initial={{ scale: 1.1, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 1.2, ease: "easeOut" }}
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
                                alt="Advisory Board"
                                className="w-full h-[650px] object-cover"
                            />
                        </motion.div>

                        {/* Floating Card 1 */}
                        <motion.div
                            variants={floatingCardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.3 }}
                            whileHover={{
                                y: -10,
                                scale: 1.05,
                                transition: { duration: 0.3 },
                            }}
                            className="absolute -bottom-8 -left-8 bg-white rounded-3xl shadow-2xl p-6 border border-[#EAF9FA]"
                        >
                            <motion.h3
                                initial={{ scale: 0.5, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
                                className="text-4xl font-black text-[#009A9E]"
                            >
                                30+
                            </motion.h3>
                            <p className="text-gray-600 mt-1">
                                Industry Leaders
                            </p>
                        </motion.div>

                        {/* Floating Card 2 */}
                        <motion.div
                            variants={floatingCardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.3 }}
                            whileHover={{
                                y: -10,
                                scale: 1.05,
                                transition: { duration: 0.3 },
                            }}
                            className="absolute top-10 -right-8 bg-[#00314A] text-white rounded-3xl shadow-2xl p-6"
                        >
                            <motion.h3
                                initial={{ scale: 0.5, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ delay: 0.4, duration: 0.5, type: "spring" }}
                                className="text-4xl font-black"
                            >
                                100+
                            </motion.h3>
                            <p className="mt-1 text-gray-300">
                                Years Combined Experience
                            </p>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>

            {/* ================= ABOUT ADVISORY BOARD ================= */}
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.8 }}
                className="py-24 bg-[#F8FCFC]"
            >
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div
                        className="grid lg:grid-cols-2 gap-20 items-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        {/* LEFT */}
                        <motion.div
                            variants={fadeLeft}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            <motion.div
                                whileHover={{
                                    scale: 1.02,
                                    transition: { duration: 0.3 },
                                }}
                                className="rounded-[35px] shadow-2xl overflow-hidden"
                            >
                                <motion.img
                                    initial={{ scale: 1.1, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={{ duration: 1.2, ease: "easeOut" }}
                                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900"
                                    alt="Advisory Board Meeting"
                                    className="w-full h-[650px] object-cover"
                                />
                            </motion.div>
                        </motion.div>

                        {/* RIGHT */}
                        <motion.div
                            variants={fadeRight}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            <motion.span
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="bg-[#EAF9FA] text-[#009A9E] px-5 py-2 rounded-full font-semibold inline-block"
                            >
                                About Board
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
                                className="text-5xl font-black text-[#00314A] mt-8"
                            >
                                Experience that Drives
                                <br />
                                <span className="text-[#009A9E]">
                                    Smarter Decisions
                                </span>
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ delay: 0.5, duration: 0.7 }}
                                className="mt-8 text-lg text-gray-600 leading-9"
                            >
                                Our Advisory Board consists of accomplished leaders,
                                financial experts, entrepreneurs and industry veterans
                                committed to delivering long-term value creation and
                                strategic excellence.
                            </motion.p>

                            <motion.div
                                className="grid grid-cols-2 gap-6 mt-10"
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.3 }}
                            >
                                {[
                                    { value: "25+", label: "Global Advisors" },
                                    { value: "40+", label: "Years Experience" },
                                    { value: "12+", label: "Countries" },
                                    { value: "100%", label: "Transparency" },
                                ].map((stat, index) => (
                                    <motion.div
                                        key={index}
                                        variants={cardVariants}
                                        whileHover={{
                                            y: -8,
                                            scale: 1.05,
                                            boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                                            transition: { duration: 0.3 },
                                        }}
                                        className="bg-white rounded-3xl p-6 shadow-lg"
                                    >
                                        <motion.h3
                                            variants={statVariants}
                                            className="text-3xl font-black text-[#009A9E]"
                                        >
                                            {stat.value}
                                        </motion.h3>
                                        <p className="mt-2 text-gray-600">
                                            {stat.label}
                                        </p>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.section>
        </section>
    );
}