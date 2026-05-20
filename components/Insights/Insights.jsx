"use client";

import {
    ShieldCheck,
    Lightbulb,
    TrendingUp,
    BookOpen,
    ArrowUpRight,
    Building2,
    Newspaper,
    Podcast,
    CheckCircle2,
} from "lucide-react";
import Link from "next/link";

const insights = [
    {
        title: "India’s Stressed Asset Opportunity",
        desc: "Deep insights into India’s ₹12 lakh crore distressed and special situations market.",
        icon: TrendingUp,
    },
    {
        title: "Alternative Investment Strategies",
        desc: "Understanding private credit, structured investments and special situation opportunities.",
        icon: BookOpen,
    },
    {
        title: "Turnaround & Resolution Trends",
        desc: "Market trends shaping restructuring-led investments and institutional recoveries.",
        icon: Building2,
    },
];

const publications = [
    {
        title: "Private Credit & Special Situations",
        type: "Research Article",
    },
    {
        title: "Institutional Distressed Asset Investing",
        type: "Thought Leadership",
    },
    {
        title: "Alternative Investments Outlook 2025",
        type: "Market Insight",
    },
];

export default function Insights() {
    return (
        <section className="relative overflow-hidden bg-white">

            {/* HERO SECTION */}
            <div
                className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-green-950"
                style={{
                    paddingTop: "140px",
                    paddingBottom: "140px",
                }}
            >

                <div className="absolute top-0 left-0 w-72 h-72 bg-green-500/20 blur-3xl rounded-full"></div>

                <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-400/10 blur-3xl rounded-full"></div>

                <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(white_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="max-w-5xl mx-auto text-center">

                        <div className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm font-medium text-green-300 backdrop-blur-md">

                            <ShieldCheck size={16} />

                            Thought Leadership & Insights

                        </div>

                        <h1 className="mt-8 text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-white">

                            Market Intelligence
                            <span className="block mt-2 text-green-400">
                                Investment Insights
                            </span>

                        </h1>

                        <p className="mt-8 max-w-4xl mx-auto text-base sm:text-lg lg:text-xl leading-9 text-slate-300">

                            Insights, research publications,
                            strategic perspectives,
                            and institutional commentary
                            on India’s evolving private credit,
                            distressed assets,
                            and alternative investment ecosystem.

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

                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-green-500/10 blur-3xl rounded-full"></div>

                        {/* TOP SECTION */}
                        <div
                            className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-green-950 px-6 sm:px-10 lg:px-14"
                            style={{
                                paddingTop: "80px",
                                paddingBottom: "80px",
                            }}
                        >

                            <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(white_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                            <div className="relative z-10 max-w-5xl">

                                <div className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm font-medium text-green-300 backdrop-blur-md">

                                    <Lightbulb size={16} />

                                    Industry Perspectives

                                </div>

                                <h2 className="mt-8 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-[-0.04em] text-white">

                                    Institutional
                                    <span className="block mt-2 text-green-400">
                                        Thought Leadership
                                    </span>

                                </h2>

                                <p className="mt-8 max-w-4xl text-base sm:text-lg lg:text-xl leading-9 text-slate-300">

                                    INFIN ALPHA LLP provides strategic perspectives
                                    on distressed investments,
                                    restructuring opportunities,
                                    private credit markets,
                                    and special situations investing
                                    shaping India’s alternative investment landscape.

                                </p>

                            </div>

                        </div>

                        {/* INSIGHTS GRID */}
                        <div className="relative z-10 p-5 sm:p-8 lg:p-12">

                            <div
                                className="gap-6"
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                                }}
                            >

                                {insights.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="group rounded-[36px] border border-slate-200 bg-white p-8 shadow-xl hover:shadow-2xl hover:border-green-300 transition-all duration-500 h-full"
                                    >

                                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white shadow-lg shadow-green-500/20">

                                            <item.icon size={28} />

                                        </div>

                                        <h3 className="mt-8 text-2xl font-bold text-green-600 leading-tight">

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
                                                    ? "/thought-leadership/stressed-asset-opportunity"
                                                    : idx === 1
                                                        ? "/thought-leadership/alternative-investments"
                                                        : "/thought-leadership/turnaround-resolution-trends"
                                            }
                                            className="mt-10 inline-flex items-center gap-2 rounded-2xl bg-green-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-green-700"
                                        >

                                            Read Insight

                                            <ArrowUpRight size={18} />

                                        </Link>

                                    </div>
                                ))}

                            </div>

                            {/* RESEARCH SECTION */}
                            <div className="mt-12">

                                <div className="relative overflow-hidden rounded-[36px] bg-[#0b1120] p-6 sm:p-8 lg:p-10 text-white shadow-2xl">

                                    <div className="absolute top-0 right-0 w-72 h-72 bg-green-500/20 blur-3xl rounded-full"></div>

                                    <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(white_1px,transparent_1px)] bg-[size:22px_22px]"></div>

                                    <div className="relative z-10 grid lg:grid-cols-12 gap-10 items-center">

                                        <div className="lg:col-span-5">

                                            <div className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm font-semibold text-green-700">

                                                Research Publications

                                            </div>

                                            <h3 className="mt-6 text-4xl sm:text-5xl font-bold leading-tight text-green-400">

                                                Strategic Market
                                                Intelligence

                                            </h3>

                                        </div>

                                        <div className="lg:col-span-7" style={{ color: "#000000" }}>

                                            <p className="text-base sm:text-lg leading-9 text-white/90">

                                                Access institutional-grade perspectives,
                                                strategic commentary,
                                                and market intelligence
                                                covering distressed assets,
                                                special situations,
                                                private credit,
                                                and restructuring-led investment opportunities.

                                            </p>

                                            <div className="mt-8 space-y-4">

                                                {publications.map((item, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-5"
                                                    >

                                                        <div>

                                                            <h4 className="text-lg font-semibold text-white" style={{ color: "#000000" }}>

                                                                {item.title}

                                                            </h4>

                                                            <p className="mt-2 text-sm text-white/70">

                                                                {item.type}

                                                            </p>

                                                        </div>

                                                    </div>
                                                ))}

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                            {/* MEDIA SECTION */}
                            <div className="mt-16">

                                <div className="text-center">

                                    <div className="inline-flex items-center gap-2 rounded-full border border-green-100 bg-green-50 px-4 py-2 text-sm font-semibold text-green-700">

                                        <Podcast size={16} />

                                        Media & Commentary

                                    </div>

                                    <h3 className="mt-6 text-4xl sm:text-5xl font-bold leading-tight">

                                        <span style={{ color: "#000000" }}>
                                            Institutional Market
                                        </span>

                                        <span className="block mt-2 text-green-600">
                                            Perspectives & Commentary
                                        </span>

                                    </h3>

                                </div>

                                <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

                                    {[
                                        "Special Situations Investing",
                                        "India Private Credit Outlook",
                                        "Distressed Asset Resolution",
                                    ].map((item, idx) => (
                                        <div
                                            key={idx}
                                            className="group rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl hover:border-green-300 transition-all duration-500"
                                        >

                                            <div className="w-14 h-14 rounded-2xl border-2 border-green-500 text-green-600 flex items-center justify-center bg-green-50">

                                                <Newspaper size={24} />

                                            </div>

                                            <h4 className="mt-6 text-2xl font-bold text-green-600 leading-tight">

                                                {item}

                                            </h4>

                                            <div className="mt-6 space-y-3">

                                                {[
                                                    "Institutional research",
                                                    "Strategic investment outlook",
                                                    "Market opportunity analysis",
                                                ].map((point, i) => (
                                                    <div
                                                        key={i}
                                                        className="flex items-center gap-3"
                                                    >

                                                        <CheckCircle2
                                                            size={18}
                                                            className="text-green-500 shrink-0"
                                                        />

                                                        <p
                                                            className="text-sm"
                                                            style={{ color: "#000000" }}
                                                        >

                                                            {point}

                                                        </p>

                                                    </div>
                                                ))}

                                            </div>

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