"use client";

import {
    ArrowRight,
    CircleDollarSign,
    BriefcaseBusiness,
    Scale,
    TrendingUp,
} from "lucide-react";

export default function InvestmentStrategySection() {

    const strategySteps = [
        {
            icon: <CircleDollarSign size={24} />,
            title: "Acquire at Deep Discount",
            description:
                "Targeting distressed and special situation assets with significant embedded recovery and turnaround potential.",
        },

        {
            icon: <BriefcaseBusiness size={24} />,
            title: "Capital Infusion & Structuring",
            description:
                "Providing strategic capital, restructuring frameworks, and operational stabilization support.",
        },

        {
            icon: <Scale size={24} />,
            title: "Resolution & Value Unlocking",
            description:
                "Driving legal, operational, and financial resolution strategies to maximize enterprise value.",
        },

        {
            icon: <TrendingUp size={24} />,
            title: "Strategic Exit Execution",
            description:
                "Creating profitable exits through refinancing, strategic sales, or capital market opportunities.",
        },
    ];

    return (
        <section className="relative overflow-hidden py-24 lg:py-32 bg-white">

            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-100/40 blur-3xl rounded-full"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* TOP AREA */}
                <div className="relative overflow-hidden rounded-[40px] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-green-50/40 p-8 sm:p-10 lg:p-16 text-left lg:text-center">

                    {/* Background Glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-green-200/30 blur-3xl rounded-full"></div>

                    <div className="relative z-10 max-w-5xl lg:mx-auto">

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 rounded-full bg-green-100 text-green-700 px-4 py-2 text-sm font-semibold">

                            <div className="w-2 h-2 rounded-full bg-green-600"></div>

                            Investment Strategy

                        </div>

                        {/* Heading */}
                        <h2 className="mt-8 text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-[1.5] tracking-tight">

                            Transforming Complex Credit
                            Situations into Structured
                            Investment Opportunities

                        </h2>

                        {/* Paragraph */}
                        <p className="mt-8 text-base sm:text-lg leading-8 text-slate-600 max-w-3xl mx-auto">

                            INFIN Alpha follows a sector-agnostic strategy focused on distressed
                            credit, litigation-backed assets, restructuring opportunities,
                            and businesses requiring strategic capital and operational revival.

                        </p>

                        {/* Mini Stats */}
                        <div className="mt-12 flex flex-col sm:flex-row items-start lg:items-center justify-start lg:justify-center gap-8 sm:gap-12">

                            <div>

                                <h3 className="text-3xl sm:text-4xl font-bold text-slate-900">
                                    18–20%
                                </h3>

                                <p className="text-sm text-slate-500 mt-2">
                                    Target IRR Potential
                                </p>

                            </div>

                            <div className="hidden sm:block w-px h-14 bg-slate-300"></div>

                            <div>

                                <h3 className="text-3xl sm:text-3xl font-bold text-slate-900">
                                    Sector Agnostic
                                </h3>

                                <p className="text-sm text-slate-500 mt-2">
                                    Flexible Investment Mandate
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

                {/* PROCESS FLOW */}
                <div className="mt-16 lg:mt-24">

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative">

                        {/* Desktop Line */}
                        <div className="hidden lg:block absolute top-14 left-0 right-0 h-px bg-gradient-to-r from-green-200 via-green-400 to-green-200"></div>

                        {strategySteps.map((item, index) => (

                            <div
                                key={index}
                                className="relative group"
                            >

                                {/* STEP NUMBER */}
                                <div className="absolute -top-4 right-0 text-7xl font-bold text-slate-100 group-hover:text-green-50 transition duration-500">

                                    0{index + 1}

                                </div>

                                {/* ICON */}
                                <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 text-white flex items-center justify-center shadow-xl shadow-green-100">

                                    {item.icon}

                                </div>

                                {/* CONTENT */}
                                <div className="mt-10">

                                    <h3 className="text-lg sm:text-xl sm:text-2xl font-bold text-slate-900 leading-snug">

                                        {item.title}

                                    </h3>

                                    <p className="mt-5 text-sm sm:text-base text-slate-600 leading-7">

                                        {item.description}

                                    </p>

                                </div>

                                {/* Arrow */}
                                {index !== strategySteps.length - 1 && (

                                    <div className="hidden lg:flex absolute top-7 -right-4 z-20 w-8 h-8 rounded-full bg-white border border-slate-200 items-center justify-center shadow-sm">

                                        <ArrowRight size={16} className="text-green-600" />

                                    </div>

                                )}

                            </div>

                        ))}

                    </div>

                </div>

                {/* BOTTOM HIGHLIGHT */}
                <div className="mt-25 overflow-hidden rounded-[40px] bg-gradient-to-r from-slate-950 via-slate-900 to-green-950 p-6 lg:p-14 relative">

                    {/* Glow */}
                    <div className="absolute top-0 right-0 w-72 h-72 bg-green-500/20 blur-3xl rounded-full"></div>

                    <div className="relative z-10 grid lg:grid-cols-12 gap-12 items-center">

                        {/* LEFT */}
                        <div className="lg:col-span-5">

                            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-green-300">
                                Strategic Focus
                            </span>

                            <h3 className="mt-6 text-3xl sm:text-4xl font-bold text-white leading-tight">

                                Focused on High-Conviction,
                                High-Yield Opportunities

                            </h3>

                        </div>

                        {/* RIGHT */}
                        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">

                            <div className="border border-white/10 bg-white/5 backdrop-blur-xl rounded-3xl p-5 sm:p-6">

                                <h4 className="text-white font-bold text-lg sm:text-xl">
                                    Distressed Credit
                                </h4>

                                <p className="mt-3 text-slate-300 leading-7">
                                    NPAs, restructuring opportunities, and secondary market acquisitions.
                                </p>

                            </div>

                            <div className="border border-white/10 bg-white/5 backdrop-blur-xl rounded-3xl p-5 sm:p-6">

                                <h4 className="text-white font-bold text-lg sm:text-xl">
                                    Litigation Assets
                                </h4>

                                <p className="mt-3 text-slate-300 leading-7">
                                    Legal and resolution-backed opportunities with strong value potential.
                                </p>

                            </div>

                            <div className="border border-white/10 bg-white/5 backdrop-blur-xl rounded-3xl p-5 sm:p-6">

                                <h4 className="text-white font-bold text-lg sm:text-xl">
                                    Turnaround Businesses
                                </h4>

                                <p className="mt-3 text-slate-300 leading-7">
                                    Operationally viable enterprises requiring strategic recapitalization.
                                </p>

                            </div>

                            <div className="border border-white/10 bg-white/5 backdrop-blur-xl rounded-3xl p-5 sm:p-6">

                                <h4 className="text-white font-bold text-xl">
                                    Special Situations
                                </h4>

                                <p className="mt-3 text-slate-300 leading-7">
                                    Complex opportunities across sectors with asymmetric return potential.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}