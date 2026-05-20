// components/Investment/philosophy/Philosophy.tsx

"use client";

import {
    ShieldCheck,
    TrendingUp,
    Landmark,
    Building2,
    ArrowUpRight,
    CheckCircle2,
    Briefcase,
    Scale,
    Wallet,
    Target,
    BarChart3,
    Sparkles,
} from "lucide-react";
import Link from "next/link";

const philosophyCards = [
    {
        title: "Deep Discount Acquisitions",
        desc: "Acquire stressed and special situation opportunities at attractive entry valuations.",
        icon: TrendingUp,
    },
    {
        title: "Strategic Capital Infusion",
        desc: "Inject fresh capital into turnaround-ready businesses and distressed opportunities.",
        icon: Wallet,
    },
    {
        title: "Resolution-led Value Creation",
        desc: "Unlock value through restructuring, resolution plans and operational turnaround.",
        icon: Scale,
    },
];

const focusAreas = [
    {
        title: "Stressed Credit",
        desc: "Corporate debt, NPAs and distressed lending opportunities.",
        icon: Landmark,
    },
    {
        title: "Special Situations",
        desc: "Complex transactions requiring strategic restructuring expertise.",
        icon: Briefcase,
    },
    {
        title: "Litigation Locked Assets",
        desc: "Assets with hidden value requiring legal-commercial resolution.",
        icon: Building2,
    },
    {
        title: "Complex Restructuring",
        desc: "Operational and financial restructuring opportunities across sectors.",
        icon: BarChart3,
    },
];

export default function Philosophy() {
    return (
        <section className="relative overflow-hidden bg-[#f8fafc]">

            {/* HERO SECTION */}
            <div
                className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-green-950"
                style={{
                    paddingTop: "140px",
                    paddingBottom: "140px",
                }}
            >

                {/* GLOW */}
                <div className="absolute top-0 left-0 w-80 h-80 bg-green-500/20 blur-3xl rounded-full"></div>

                <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-400/10 blur-3xl rounded-full"></div>

                {/* GRID */}
                <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(white_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="max-w-5xl mx-auto text-center">

                        <div className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm font-medium text-green-300 backdrop-blur-md">

                            <ShieldCheck size={16} />

                            Investment Philosophy & Strategy

                        </div>

                        <h1 className="mt-8 text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-white">

                            Investment
                            <span className="block mt-2 text-green-400">
                                Philosophy
                            </span>

                        </h1>

                        <p className="mt-8 max-w-4xl mx-auto text-base sm:text-lg lg:text-xl leading-9 text-slate-300">

                            Sector agnostic investment strategy
                            focused on distressed credit,
                            special situations,
                            litigation-locked assets,
                            and complex restructuring opportunities
                            where timely capital and resolution expertise
                            unlock significant enterprise value.

                        </p>

                    </div>

                </div>

            </div>

            {/* MAIN WRAPPER */}
            <div
                className="relative z-10 pb-20 sm:pb-24"
                style={{ marginTop: "80px" }}
            >

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="relative overflow-hidden rounded-[40px] border border-slate-200 bg-white shadow-[0_20px_80px_rgba(15,23,42,0.08)]">

                        {/* GLOW */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-green-500/10 blur-3xl rounded-full"></div>

                        {/* TOP SECTION */}
                        <div
                            className="relative overflow-hidden bg-gradient-to-r from-slate-950 via-slate-900 to-green-950 px-6 sm:px-10 lg:px-16"
                            style={{
                                paddingTop: "90px",
                                paddingBottom: "90px",
                            }}
                        >

                            <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(white_1px,transparent_1px)] bg-[size:26px_26px]"></div>

                            <div className="relative z-10 max-w-5xl">

                                <div className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm font-semibold text-green-300">

                                    <Sparkles size={16} />

                                    Strategic Approach

                                </div>

                                <h2 className="mt-8 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-[-0.04em] text-white">

                                    Resolution-focused
                                    <span className="block mt-2 text-green-400">
                                        Alternative Investments
                                    </span>

                                </h2>

                                <p className="mt-8 max-w-4xl text-base sm:text-lg lg:text-xl leading-9 text-slate-300">

                                    INFIN Alpha LLP is conceptualized as a fund manager
                                    focused on specialized high-yield credit investment products,
                                    maximizing returns through non-traditional opportunities
                                    across India’s fast-growing private credit ecosystem.

                                </p>

                            </div>

                        </div>

                        {/* PHILOSOPHY CARDS */}
                        <div className="relative z-10 p-5 sm:p-8 lg:p-12">

                            <div
                                className="gap-6"
                                style={{
                                    display: "grid",
                                    gridTemplateColumns:
                                        "repeat(auto-fit, minmax(320px, 1fr))",
                                }}
                            >

                                {philosophyCards.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="group relative overflow-hidden rounded-[36px] border border-slate-200 bg-white p-8 shadow-lg hover:shadow-2xl hover:border-green-300 transition-all duration-500"
                                    >

                                        <div className="absolute inset-0 bg-gradient-to-br from-green-50/0 to-green-100/0 group-hover:from-green-50 group-hover:to-white transition-all duration-500"></div>

                                        <div className="relative z-10">

                                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white shadow-lg shadow-green-500/20">

                                                <item.icon size={28} />

                                            </div>

                                            <h3 className="mt-8 text-3xl font-bold text-green-700 leading-tight">

                                                {item.title}

                                            </h3>

                                            <p
                                                className="mt-6 text-sm sm:text-base leading-8"
                                                style={{ color: "#000000" }}
                                            >

                                                {item.desc}

                                            </p>

                                            <Link
                                                href={
                                                    idx === 0
                                                        ? "/investment/philosophy/deep-discount-acquisition"
                                                        : idx === 1
                                                            ? "/investment/philosophy/strategic-capital"
                                                            : "/investment/philosophy/resolution-value-creation"
                                                }
                                                className="mt-10 inline-flex items-center gap-2 rounded-2xl bg-green-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-green-700 hover:gap-4"
                                            >

                                                Learn More

                                                <ArrowUpRight size={18} />

                                            </Link>

                                        </div>

                                    </div>
                                ))}

                            </div>

                            {/* STRATEGY BLOCK */}
                            <div className="mt-14">

                                <div className="relative overflow-hidden rounded-[40px] bg-[#07111f] p-6 sm:p-8 lg:p-12 shadow-2xl">

                                    <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/20 blur-3xl rounded-full"></div>

                                    <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(white_1px,transparent_1px)] bg-[size:22px_22px]"></div>

                                    <div className="relative z-10 grid lg:grid-cols-12 gap-10 items-center">

                                        <div className="lg:col-span-5">

                                            <div className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm font-semibold text-green-700">

                                                Investment Strategy

                                            </div>

                                            <h3 className="mt-6 text-4xl sm:text-5xl font-bold leading-tight text-green-400">

                                                Invest.
                                                Resolve.
                                                Unlock Value.

                                            </h3>

                                        </div>

                                        <div className="lg:col-span-7">

                                            <p className="text-base sm:text-lg leading-9 text-white/90" style={{ color: "#000000" }}>

                                                As a sector agnostic strategy,
                                                the Fund focuses on acquiring
                                                opportunities at deep discounts,
                                                injecting fresh capital,
                                                unlocking value through resolution plans,
                                                and generating strategic exits
                                                across distressed and special situation investments.

                                            </p>

                                            <div className="mt-8 grid sm:grid-cols-2 gap-4">

                                                {[
                                                    "Acquire at deep discount",
                                                    "Fresh capital infusion",
                                                    "Resolution-led execution",
                                                    "Strategic value exits",
                                                ].map((item, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
                                                    >

                                                        <CheckCircle2
                                                            size={18}
                                                            className="text-green-400 shrink-0"
                                                        />

                                                        <p className="text-sm sm:text-base text-white/90" style={{ color: "#000000" }}>

                                                            {item}

                                                        </p>

                                                    </div>
                                                ))}

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                            {/* FOCUS AREAS */}
                            <div className="mt-16">

                                <div className="text-center">

                                    <div className="inline-flex items-center gap-2 rounded-full border border-green-100 bg-green-50 px-4 py-2 text-sm font-semibold text-green-700">

                                        <Target size={16} />

                                        Area of Focus

                                    </div>

                                    <h3 className="mt-6 text-4xl sm:text-5xl font-bold leading-tight">

                                        <span style={{ color: "#000000" }}>
                                            Core Investment
                                        </span>

                                        <span className="block mt-2 text-green-600">
                                            Opportunity Segments
                                        </span>

                                    </h3>

                                </div>

                                <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

                                    {focusAreas.map((item, idx) => (
                                        <div
                                            key={idx}
                                            className="group rounded-[30px] border border-slate-200 bg-white p-6 shadow-md hover:shadow-2xl hover:border-green-300 transition-all duration-500"
                                        >

                                            <div className="w-14 h-14 rounded-2xl border-2 border-green-500 text-green-600 flex items-center justify-center bg-green-50">

                                                <item.icon size={24} />

                                            </div>

                                            <h4 className="mt-6 text-2xl font-bold text-green-700 leading-tight">

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

                            {/* WHY TRUST US */}
                            <div className="mt-16">

                                <div className="rounded-[40px] border border-green-100 bg-gradient-to-br from-green-50 to-white p-8 sm:p-10 lg:p-14">

                                    <div className="max-w-4xl">

                                        <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-4 py-2 text-sm font-semibold text-green-700 shadow-sm">

                                            Why Trust Us

                                        </div>

                                        <h3 className="mt-6 text-4xl sm:text-5xl font-bold leading-tight text-green-700">

                                            Institutional Expertise.
                                            Strategic Network.
                                            Disciplined Execution.

                                        </h3>

                                    </div>

                                    <div className="mt-12 grid md:grid-cols-2 gap-6">

                                        {[
                                            "Deep expertise in stressed assets and special situation investing.",
                                            "Strong relationships with banks, ARCs and institutional investors.",
                                            "Ability to identify turnaround-ready companies and systemic dislocations.",
                                            "Experienced leadership team with 30+ years of expertise.",
                                            "Structured downside protection and recovery-focused strategy.",
                                            "Sector agnostic investment framework with flexible execution.",
                                        ].map((item, idx) => (
                                            <div
                                                key={idx}
                                                className="flex items-start gap-4 rounded-2xl border border-green-100 bg-white p-5 shadow-sm"
                                            >

                                                <CheckCircle2
                                                    size={22}
                                                    className="text-green-600 shrink-0 mt-1"
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

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}