// components/Investment/strategyOpportunities/StrategyOpportunities.tsx

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
    Layers3,
    Activity,
} from "lucide-react";

const opportunities = [
    {
        title: "Distressed Credit",
        desc: "Corporate debt, NPAs and stressed lending opportunities across sectors.",
        icon: Landmark,
    },
    {
        title: "Special Situations",
        desc: "Complex investment opportunities requiring strategic restructuring expertise.",
        icon: Briefcase,
    },
    {
        title: "Litigation Locked Assets",
        desc: "Undervalued assets requiring legal-commercial resolution strategies.",
        icon: Scale,
    },
    {
        title: "Turnaround Opportunities",
        desc: "Operationally viable businesses requiring fresh capital and restructuring.",
        icon: TrendingUp,
    },
];

const strategyFlow = [
    {
        title: "Identify Dislocation",
        desc: "Discover stressed and undervalued opportunities across sectors.",
    },
    {
        title: "Acquire Strategically",
        desc: "Acquire opportunities at deep discounts with downside protection.",
    },
    {
        title: "Inject Capital",
        desc: "Provide fresh strategic capital and restructuring expertise.",
    },
    {
        title: "Unlock Enterprise Value",
        desc: "Generate strategic exits and long-term value realization.",
    },
];

export default function StrategyOpportunities() {
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

                <div className="absolute top-0 left-0 w-80 h-80 bg-green-500/20 blur-3xl rounded-full"></div>

                <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-400/10 blur-3xl rounded-full"></div>

                <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(white_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="max-w-5xl mx-auto text-center">

                        <div className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm font-medium text-green-300 backdrop-blur-md">

                            <ShieldCheck size={16} />

                            Strategy & Opportunities

                        </div>

                        <h1 className="mt-8 text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-white">

                            Strategic Investment
                            <span className="block mt-2 text-green-400">
                                Opportunities
                            </span>

                        </h1>

                        <p className="mt-8 max-w-4xl mx-auto text-base sm:text-lg lg:text-xl leading-9 text-slate-300">

                            Sector agnostic investment opportunities
                            focused on distressed credit,
                            special situations,
                            litigation-locked assets,
                            and restructuring-led value creation strategies
                            across India’s evolving private credit ecosystem.

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

                                    Opportunity Landscape

                                </div>

                                <h2 className="mt-8 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-[-0.04em] text-white">

                                    Alternative Investments
                                    <span className="block mt-2 text-green-400">
                                        Built for Value Creation
                                    </span>

                                </h2>

                                <p className="mt-8 max-w-4xl text-base sm:text-lg lg:text-xl leading-9 text-slate-300">

                                    INFIN Alpha LLP seeks opportunities
                                    where systemic dislocations,
                                    distressed balance sheets,
                                    and restructuring requirements
                                    create asymmetric investment upside
                                    with disciplined downside protection.

                                </p>

                            </div>

                        </div>

                        {/* OPPORTUNITY GRID */}
                        <div className="relative z-10 p-5 sm:p-8 lg:p-12">

                            <div
                                className="gap-6"
                                style={{
                                    display: "grid",
                                    gridTemplateColumns:
                                        "repeat(auto-fit, minmax(280px, 1fr))",
                                }}
                            >

                                {opportunities.map((item, idx) => (
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

                                            <button className="mt-10 inline-flex items-center gap-2 rounded-2xl bg-green-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-green-700 hover:gap-4">

                                                Explore Opportunity

                                                <ArrowUpRight size={18} />

                                            </button>

                                        </div>

                                    </div>
                                ))}

                            </div>

                            {/* STRATEGY FLOW */}
                            <div className="mt-14">

                                <div className="relative overflow-hidden rounded-[40px] bg-[#07111f] p-6 sm:p-8 lg:p-12 shadow-2xl">

                                    <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/20 blur-3xl rounded-full"></div>

                                    <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(white_1px,transparent_1px)] bg-[size:22px_22px]"></div>

                                    <div className="relative z-10">

                                        <div className="text-center">

                                            <div className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm font-semibold text-green-300">

                                                <Activity size={16} />

                                                Execution Framework

                                            </div>

                                            <h3 className="mt-6 text-4xl sm:text-5xl font-bold leading-tight text-green-400">

                                                Strategic Investment Lifecycle

                                            </h3>

                                        </div>

                                        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">

                                            {strategyFlow.map((item, idx) => (
                                                <div
                                                    key={idx}
                                                    className="relative rounded-[30px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
                                                >

                                                    <div className="w-14 h-14 rounded-2xl bg-green-500/20 flex items-center justify-center text-green-400 text-xl font-bold">

                                                        0{idx + 1}

                                                    </div>

                                                    <h4 className="mt-6 text-2xl font-bold text-white leading-tight" style={{ color: "#000000" }}>

                                                        {item.title}

                                                    </h4>

                                                    <p className="mt-4 text-sm leading-7 text-white/80" style={{ color: "#000000" }}>

                                                        {item.desc}

                                                    </p>

                                                </div>
                                            ))}

                                        </div>

                                    </div>

                                </div>

                            </div>

                            {/* AREA OF FOCUS */}
                            <div className="mt-16">

                                <div className="text-center">

                                    <div className="inline-flex items-center gap-2 rounded-full border border-green-100 bg-green-50 px-4 py-2 text-sm font-semibold text-green-700">

                                        <Target size={16} />

                                        Initial Fund Focus

                                    </div>

                                    <h3 className="mt-6 text-4xl sm:text-5xl font-bold leading-tight">

                                        <span style={{ color: "#000000" }}>
                                            High Potential
                                        </span>

                                        <span className="block mt-2 text-green-600">
                                            Investment Segments
                                        </span>

                                    </h3>

                                </div>

                                <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

                                    {[
                                        "Distressed assets with operational viability",
                                        "Companies impacted by temporary dislocations",
                                        "Litigation and restructuring-led opportunities",
                                        "High-yield private credit structures",
                                        "Strategic turnaround situations",
                                        "Deep value acquisitions across sectors",
                                    ].map((item, idx) => (
                                        <div
                                            key={idx}
                                            className="group rounded-[30px] border border-slate-200 bg-white p-6 shadow-md hover:shadow-2xl hover:border-green-300 transition-all duration-500"
                                        >

                                            <div className="w-14 h-14 rounded-2xl border-2 border-green-500 text-green-600 flex items-center justify-center bg-green-50">

                                                <Layers3 size={24} />

                                            </div>

                                            <h4 className="mt-6 text-2xl font-bold text-green-700 leading-tight">

                                                Opportunity {idx + 1}

                                            </h4>

                                            <p
                                                className="mt-4 text-sm leading-7"
                                                style={{ color: "#000000" }}
                                            >

                                                {item}

                                            </p>

                                        </div>
                                    ))}

                                </div>

                            </div>

                            {/* WHY OPPORTUNITY EXISTS */}
                            <div className="mt-16">

                                <div className="rounded-[40px] border border-green-100 bg-gradient-to-br from-green-50 to-white p-8 sm:p-10 lg:p-14">

                                    <div className="max-w-4xl">

                                        <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-4 py-2 text-sm font-semibold text-green-700 shadow-sm">

                                            Market Opportunity

                                        </div>

                                        <h3 className="mt-6 text-4xl sm:text-5xl font-bold leading-tight text-green-700">

                                            Why These Opportunities
                                            Exist in India

                                        </h3>

                                    </div>

                                    <div className="mt-12 grid md:grid-cols-2 gap-6">

                                        {[
                                            "Growing stressed asset ecosystem across sectors.",
                                            "Large supply of distressed and special situation opportunities.",
                                            "Systemic dislocations creating valuation inefficiencies.",
                                            "Need for patient institutional turnaround capital.",
                                            "Increasing restructuring and insolvency activity.",
                                            "Underpenetrated private credit and recovery ecosystem.",
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