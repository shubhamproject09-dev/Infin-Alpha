"use client";

import { useRef } from "react";
import {
    ArrowLeft,
    ArrowRight,
    Building2,
    Landmark,
    Factory,
    BriefcaseBusiness,
} from "lucide-react";
import { motion } from "framer-motion";

export default function FocusAreasSection() {

    const sliderRef = useRef(null);

    const scroll = (direction) => {

        if (sliderRef.current) {

            const amount = 340;

            sliderRef.current.scrollBy({
                left: direction === "left" ? -amount : amount,
                behavior: "smooth",
            });

        }

    };

    const focusAreas = [
        {
            icon: <Landmark size={24} />,
            title: "Stressed Corporate Debt",
            description:
                "Distressed credit and restructuring opportunities across sectors.",
            image:
                "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop",
        },
        {
            icon: <Building2 size={24} />,
            title: "Overleveraged Businesses",
            description:
                "Strategic recapitalization and turnaround-focused investments.",
            image:
                "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
        },
        {
            icon: <Factory size={24} />,
            title: "Stalled Projects",
            description:
                "Infrastructure and real estate projects with revival potential.",
            image:
                "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",
        },
        {
            icon: <BriefcaseBusiness size={24} />,
            title: "Promoter Financing",
            description:
                "Flexible capital solutions for strategic business growth.",
            image:
                "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
        },
    ];

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
            y: 50,
            scale: 0.9,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    const buttonVariants = {
        hidden: {
            opacity: 0,
            y: 30,
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

    return (
        <section className="relative overflow-hidden py-20 sm:py-24 lg:py-32 bg-white">

            {/* Background Glow */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D5F3F5]/30 blur-3xl rounded-full"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">

                    {/* LEFT CONTENT */}
                    <motion.div
                        className="lg:col-span-4"
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
                            className="inline-flex items-center px-4 py-2 rounded-full bg-[#EAF9FA] text-[#00314A] text-sm font-semibold border border-[#D5F3F5]"
                        >
                            Focus Areas
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
                            className="mt-5 text-3xl sm:text-4xl lg:text-4xl font-bold text-[#000] leading-tight"
                        >
                            Investing Across
                            India's Emerging
                            Opportunity Landscape
                        </motion.h2>

                        {/* Paragraph */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ delay: 0.5, duration: 0.7 }}
                            className="mt-5 text-base sm:text-lg leading-7 text-slate-600"
                        >
                            INFIN Alpha focuses on differentiated special situation
                            opportunities spanning distressed credit, restructuring,
                            strategic recapitalization, and operational turnarounds.
                        </motion.p>
                    </motion.div>

                    {/* RIGHT SLIDER */}
                    <motion.div
                        className="lg:col-span-8 overflow-hidden"
                        variants={fadeRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        <motion.div
                            ref={sliderRef}
                            className="flex gap-6 overflow-x-auto overflow-y-hidden scrollbar-hide scroll-smooth pb-2"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.1 }}
                        >
                            {focusAreas.map((item, index) => (
                                <motion.div
                                    key={index}
                                    variants={cardVariants}
                                    whileHover={{
                                        y: -8,
                                        scale: 1.02,
                                        transition: { duration: 0.3 },
                                    }}
                                    className="group relative min-w-[220px] sm:min-w-[240px] lg:min-w-[250px] h-[380px] lg:h-[400px] rounded-[36px] overflow-hidden flex-shrink-0"
                                >
                                    {/* Background Image */}
                                    <motion.div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                        style={{
                                            backgroundImage: `url(${item.image})`,
                                        }}
                                        whileHover={{
                                            scale: 1.1,
                                            transition: { duration: 0.7 },
                                        }}
                                    ></motion.div>

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#00314A] via-[#00314A]/70 to-transparent"></div>

                                    {/* Glow */}
                                    <motion.div
                                        animate={{
                                            scale: [1, 1.2, 1],
                                            opacity: [0, 0.2, 0],
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            delay: index * 0.2,
                                        }}
                                        className="absolute top-0 right-0 w-40 h-40 bg-[#EAF9FA]/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition duration-500"
                                    />

                                    {/* Content */}
                                    <div className="relative z-10 h-full flex flex-col justify-end p-6 sm:p-8">
                                        {/* Icon */}
                                        <motion.div
                                            whileHover={{
                                                rotate: [0, -10, 10, -5, 5, 0],
                                                scale: 1.1,
                                                transition: { duration: 0.5 },
                                            }}
                                            className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-md text-[#7ACED4] flex items-center justify-center"
                                        >
                                            {item.icon}
                                        </motion.div>

                                        {/* Title */}
                                        <motion.h3
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: false, amount: 0.3 }}
                                            transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                                            className="mt-8 text-xl sm:text-2xl font-bold text-white group-hover:text-[#7ACED4] transition-all duration-300 leading-snug"
                                        >
                                            {item.title}
                                        </motion.h3>

                                        {/* Description */}
                                        <motion.p
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: false, amount: 0.3 }}
                                            transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                                            className="mt-5 text-slate-300 leading-7 text-sm sm:text-base"
                                        >
                                            {item.description}
                                        </motion.p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Buttons */}
                        <motion.div
                            className="mt-2 flex justify-end items-center gap-4"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.2 }}
                        >
                            <motion.button
                                variants={buttonVariants}
                                whileHover={{
                                    scale: 1.1,
                                    backgroundColor: "#7ACED4",
                                    color: "#FFFFFF",
                                    transition: { duration: 0.3 },
                                }}
                                whileTap={{
                                    scale: 0.9,
                                }}
                                onClick={() => scroll("left")}
                                className="w-12 h-12 rounded-full border border-slate-200 bg-white text-[#00314A] flex items-center justify-center hover:bg-[#7ACED4] hover:text-white transition-all duration-300 shadow-sm"
                            >
                                <ArrowLeft size={20} />
                            </motion.button>

                            <motion.button
                                variants={buttonVariants}
                                whileHover={{
                                    scale: 1.1,
                                    backgroundColor: "#7ACED4",
                                    color: "#FFFFFF",
                                    transition: { duration: 0.3 },
                                }}
                                whileTap={{
                                    scale: 0.9,
                                }}
                                onClick={() => scroll("right")}
                                className="w-12 h-12 rounded-full border border-slate-200 bg-white text-[#00314A] flex items-center justify-center hover:bg-[#7ACED4] hover:text-white transition-all duration-300 shadow-sm"
                            >
                                <ArrowRight size={20} />
                            </motion.button>
                        </motion.div>
                    </motion.div>

                </div>

            </div>

        </section>
    );
}