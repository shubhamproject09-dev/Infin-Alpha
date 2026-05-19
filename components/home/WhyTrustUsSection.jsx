"use client";

import {
    ShieldCheck,
    Network,
    TrendingUp,
    BriefcaseBusiness,
    ChartNoAxesCombined,
} from "lucide-react";

export default function WhyTrustUsSection() {

    const trustPoints = [
        {
            icon: <BriefcaseBusiness size={24} />,
            title: "Industry Knowledge",
            description:
                "Deep expertise across stressed assets, restructuring, private credit, and special situations investing.",
        },

        {
            icon: <Network size={24} />,
            title: "Institutional Network",
            description:
                "Strong relationships with banks, ARCs, legal advisors, and institutional participants.",
        },

        {
            icon: <TrendingUp size={24} />,
            title: "Micro-Trend Intelligence",
            description:
                "Identifying turnaround-ready opportunities before broader market participation.",
        },

        {
            icon: <ChartNoAxesCombined size={24} />,
            title: "Experienced Leadership",
            description:
                "Decades of experience across distressed investing and strategic resolutions.",
        },

        {
            icon: <ShieldCheck size={24} />,
            title: "Disciplined Risk Management",
            description:
                "Structured investment processes focused on downside protection and recovery execution.",
        },
    ];

    return (
        <section className="relative overflow-hidden py-20 sm:py-24 lg:py-32">

            {/* BACKGROUND IMAGE */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2070&auto=format&fit=crop')",
                }}
            ></div>

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-[#020617]/90"></div>

            {/* GREEN GLOW */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-green-500/10 blur-3xl rounded-full"></div>

            <div className="relative z-10">

                <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* TOP CONTENT */}
                    <div className="max-w-5xl mx-auto text-left lg:text-center">

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm font-medium text-green-300 backdrop-blur-md">

                            <div className="w-2 h-2 rounded-full bg-green-400"></div>

                            Why Investors Trust INFIN Alpha

                        </div>

                        {/* Heading */}
                        <h2 className="mt-8 text-3xl sm:text-3xl lg:text-4xl font-bold text-white leading-[1.5] tracking-tight">

                            Experience, Insight &
                            Strategic Relationships
                            That Drive Better Outcomes

                        </h2>

                        {/* Paragraph */}
                        <p className="mt-8 max-w-3xl lg:mx-auto text-base sm:text-lg leading-8 text-slate-300">

                            INFIN Alpha combines institutional expertise,
                            restructuring intelligence, and strong market
                            relationships to identify and execute high-conviction
                            special situation opportunities across India’s evolving
                            credit landscape.

                        </p>

                    </div>

                    {/* SLIDER STYLE CARDS */}
                    <div className="mt-16 lg:mt-20 overflow-hidden">

                        <div
                            className="flex gap-6 w-max animate-scroll"
                            suppressHydrationWarning
                        >

                            {[...trustPoints, ...trustPoints, ...trustPoints].map((item, index) => (

                                <div
                                    key={index}
                                    className="group relative w-[280px] sm:w-[300px] lg:w-[320px] min-h-[320px] rounded-[32px] border border-white/10 bg-white/[0.06] backdrop-blur-2xl p-8 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:border-green-500/30 flex-shrink-0"
                                >

                                    {/* Glow */}
                                    <div className="absolute top-0 right-0 w-40 h-40 bg-green-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition duration-500"></div>

                                    {/* Number */}
                                    <div className="absolute top-6 right-6 text-6xl font-bold text-white/5">

                                        0{(index % trustPoints.length) + 1}

                                    </div>

                                    <div className="relative z-10">

                                        {/* Icon */}
                                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 text-white flex items-center justify-center shadow-xl shadow-green-500/20">

                                            {item.icon}

                                        </div>

                                        {/* Title */}
                                        <h3 className="mt-10 text-2xl font-bold text-white leading-snug">

                                            {item.title}

                                        </h3>

                                        {/* Description */}
                                        <p className="mt-6 text-slate-300 leading-8 text-sm sm:text-base">

                                            {item.description}

                                        </p>

                                    </div>

                                    {/* Bottom Line */}
                                    <div className="relative z-10 mt-10 w-full h-px bg-gradient-to-r from-green-500/40 to-transparent"></div>

                                </div>

                            ))}

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}