"use client";

import {
    ShieldCheck,
    TrendingUp,
    BarChart3,
    Building2,
    Landmark,
    CheckCircle2,
    ArrowUpRight,
    Target,
    Briefcase,
    Wallet,
} from "lucide-react";

const stats = [
    {
        title: "₹500 Cr",
        subtitle: "First Close Target",
    },
    {
        title: "₹1000 Cr",
        subtitle: "Total Fund Corpus",
    },
    {
        title: "18–20%",
        subtitle: "Target IRR",
    },
    {
        title: "12%",
        subtitle: "Hurdle Rate",
    },
];

const assetClasses = [
    {
        title: "Stressed Corporate Debt",
        desc: "NPAs, IBC cases, bank and ARC sales.",
        icon: Landmark,
    },
    {
        title: "Overleveraged Companies",
        desc: "Strong business fundamentals with heavy debt structures.",
        icon: Building2,
    },
    {
        title: "Stalled Projects",
        desc: "Infrastructure, manufacturing and real estate revival opportunities.",
        icon: Briefcase,
    },
    {
        title: "Asset-backed Distress",
        desc: "Plants, operating infrastructure and strategic land assets.",
        icon: Wallet,
    },
];

export default function Performance() {
    return (
        <section className="relative overflow-hidden bg-white">

            {/* HERO SECTION */}
            <div
                className="relative overflow-hidden bg-gradient-to-br from-[#00314A] via-[#0A3635] to-[#00314A]"
                style={{
                    paddingTop: "140px",
                    paddingBottom: "140px",
                }}
            >

                <div className="absolute top-0 left-0 w-72 h-72 bg-[#EAF9FA]0/20 blur-3xl rounded-full"></div>

                <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#7ACED4]/10 blur-3xl rounded-full"></div>

                <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(white_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="max-w-5xl mx-auto text-center">

                        <div className="inline-flex items-center gap-2 rounded-full border border-[#EAF9FA]0/20 bg-[#EAF9FA]0/10 px-4 py-2 text-sm font-medium text-[#7ACED4] backdrop-blur-md">

                            <ShieldCheck size={16} />

                            Fund Performance & Investment Metrics

                        </div>

                        <h1 className="mt-8 text-3xl sm:text-3xl lg:text-5xl font-bold leading-[1.05] tracking-tight text-white">

                            Performance
                            <span className="block mt-2 text-[#7ACED4]">
                                Investment Outlook
                            </span>

                        </h1>

                        <p className="mt-8 max-w-4xl mx-auto text-base sm:text-lg lg:text-xl leading-9 text-slate-300">

                            Institutional-grade alternative investment strategy
                            focused on distressed credit,
                            special situations,
                            turnaround opportunities,
                            and high-yield private credit investments.

                        </p>

                    </div>

                </div>

            </div>

            {/* MAIN SECTION */}
            <div
                className="relative z-10 pb-20 sm:pb-24"
                style={{ marginTop: "80px" }}
            >

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="relative overflow-hidden rounded-[36px] sm:rounded-[42px] border border-slate-200 bg-white shadow-2xl">

                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#EAF9FA]0/10 blur-3xl rounded-full"></div>

                        {/* TOP SECTION */}
                        <div
                            className="relative overflow-hidden bg-gradient-to-br from-[#00314A] via-[#0A3635] to-[#00314A] px-6 sm:px-10 lg:px-14"
                            style={{
                                paddingTop: "80px",
                                paddingBottom: "80px",
                            }}
                        >

                            <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(white_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                            <div className="relative z-10 max-w-5xl">

                                <div className="inline-flex items-center gap-2 rounded-full border border-[#EAF9FA]0/20 bg-[#EAF9FA]0/10 px-4 py-2 text-sm font-medium text-[#7ACED4] backdrop-blur-md">

                                    <TrendingUp size={16} />

                                    Fund Metrics

                                </div>

                                <h2 className="mt-8 text-3xl sm:text-5xl lg:text-5xl font-bold leading-[1.05] tracking-[-0.04em] text-white">

                                    Institutional-grade
                                    <span className="block mt-2 text-[#7ACED4]">
                                        Alternative Investment Fund
                                    </span>

                                </h2>

                                <p className="mt-8 max-w-4xl text-base sm:text-lg lg:text-xl leading-9 text-slate-300">

                                    BSOF aims to create strategic value
                                    through stressed credit opportunities,
                                    restructuring-led investments,
                                    and disciplined execution capabilities
                                    across India’s evolving private credit ecosystem.

                                </p>

                            </div>

                        </div>

                        {/* STATS GRID */}
                        <div className="relative z-10 p-5 sm:p-8 lg:p-12">

                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

                                {stats.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="group rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl hover:border-[#7ACED4] transition-all duration-500"
                                    >

                                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#009A9E] to-[#00314A] flex items-center justify-center text-white">

                                            <BarChart3 size={24} />

                                        </div>

                                        <h3 className="mt-6 text-4xl font-bold text-[#009A9E]">

                                            {item.title}

                                        </h3>

                                        <p
                                            className="mt-4 text-sm leading-7"
                                            style={{ color: "#000000" }}
                                        >

                                            {item.subtitle}

                                        </p>

                                    </div>
                                ))}

                            </div>

                            {/* FUND DETAILS */}
                            <div className="mt-12 grid lg:grid-cols-2 gap-8">

                                {/* LEFT CARD */}
                                <div className="rounded-[36px] border border-slate-200 bg-white p-8 shadow-lg">

                                    <div className="inline-flex items-center gap-2 rounded-full border border-[#D5F3F5] bg-[#EAF9FA] px-4 py-2 text-sm font-semibold text-[#00314A]">

                                        <Target size={16} />

                                        Fund Details

                                    </div>

                                    <h3 className="mt-6 text-4xl font-bold text-[#009A9E]">

                                        Investment Parameters

                                    </h3>

                                    <div className="mt-8 space-y-5">

                                        {[
                                            "Fund term of 5 years with extension option up to 2 years.",
                                            "Minimum investor commitment of INR 1 Crore.",
                                            "Investment ticket size between INR 50–75 Crores.",
                                            "Focused on stressed credit and restructuring opportunities.",
                                        ].map((item, idx) => (
                                            <div
                                                key={idx}
                                                className="flex items-start gap-4"
                                            >

                                                <CheckCircle2
                                                    size={20}
                                                    className="text-[#EAF9FA]0 mt-1 shrink-0"
                                                />

                                                <p
                                                    className="text-sm sm:text-base leading-8"
                                                    style={{ color: "#000000" }}
                                                >

                                                    {item}

                                                </p>

                                            </div>
                                        ))}

                                    </div>

                                </div>

                                {/* RIGHT CARD */}
                                <div className="relative overflow-hidden rounded-[36px] bg-[#00314A] p-8 shadow-2xl">

                                    <div className="absolute top-0 right-0 w-72 h-72 bg-[#EAF9FA]0/20 blur-3xl rounded-full"></div>

                                    <div className="relative z-10">

                                        <div className="inline-flex items-center gap-2 rounded-full border border-[#EAF9FA]0/20 bg-[#EAF9FA]0/10 px-4 py-2 text-sm font-semibold text-[#7ACED4]">

                                            Strategic Edge

                                        </div>

                                        <h3 className="mt-6 text-4xl font-bold leading-tight text-[#7ACED4]">

                                            Why Invest in BSOF AIF

                                        </h3>

                                        <div className="mt-8 space-y-5" style={{ color: "#000000" }}>

                                            {[
                                                "Flexible capital structures and tailored investment solutions.",
                                                "Resolution-focused execution with turnaround expertise.",
                                                "Patient institutional capital with long-term outlook.",
                                                "Strong opportunity pipeline across stressed assets.",
                                            ].map((item, idx) => (
                                                <div
                                                    key={idx}
                                                    className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"
                                                >

                                                    <ArrowUpRight
                                                        size={18}
                                                        className="text-[#7ACED4] mt-1 shrink-0"
                                                    />

                                                    <p className="text-sm sm:text-base leading-8 text-white/90">

                                                        {item}

                                                    </p>

                                                </div>
                                            ))}

                                        </div>

                                    </div>

                                </div>

                            </div>

                            {/* ASSET CLASSES */}
                            <div className="mt-16">

                                <div className="text-center">

                                    <div className="inline-flex items-center gap-2 rounded-full border border-[#D5F3F5] bg-[#EAF9FA] px-4 py-2 text-sm font-semibold text-[#00314A]">

                                        <Building2 size={16} />

                                        Target Asset Classes

                                    </div>

                                    <h3 className="mt-6 text-4xl sm:text-5xl font-bold leading-tight">

                                        <span style={{ color: "#000000" }}>
                                            Strategic Investment
                                        </span>

                                        <span className="block mt-2 text-[#009A9E]">
                                            Opportunity Segments
                                        </span>

                                    </h3>

                                </div>

                                <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

                                    {assetClasses.map((item, idx) => (
                                        <div
                                            key={idx}
                                            className="group rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl hover:border-[#7ACED4] transition-all duration-500"
                                        >

                                            <div className="w-14 h-14 rounded-2xl border-2 border-[#EAF9FA]0 text-[#009A9E] flex items-center justify-center bg-[#EAF9FA]">

                                                <item.icon size={24} />

                                            </div>

                                            <h4 className="mt-6 text-2xl font-bold text-[#009A9E] leading-tight">

                                                {item.title}

                                            </h4>

                                            <p
                                                className="mt-4 text-sm leading-7"
                                                style={{ color: "#000000" }}
                                            >

                                                {item.desc}

                                            </p>

                                        </div>
                                    ))}

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}