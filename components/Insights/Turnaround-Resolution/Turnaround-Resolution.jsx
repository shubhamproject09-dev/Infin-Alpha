"use client";

import {
    Building2,
    TrendingUp,
    Landmark,
    CheckCircle2,
    ArrowUpRight,
} from "lucide-react";

export default function ResolutionTrendsPage() {
    return (
        <section className="bg-white">

            {/* HERO */}
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

                        <div className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm font-medium text-green-300">

                            <Building2 size={16} />

                            Market Resolution Trends

                        </div>

                        <h1 className="mt-8 text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-white">

                            Turnaround &
                            <span className="block mt-2 text-green-400">
                                Resolution Trends
                            </span>

                        </h1>

                        <p className="mt-8 max-w-4xl mx-auto text-base sm:text-lg lg:text-xl leading-9 text-slate-300">

                            Institutional restructuring trends,
                            IBC-led recoveries,
                            stressed asset resolutions,
                            and strategic turnaround opportunities
                            shaping India’s evolving private credit landscape.

                        </p>

                    </div>

                </div>

            </div>

            {/* CONTENT */}
            <div className="py-24">

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="grid lg:grid-cols-2 gap-8">

                        {[
                            {
                                title: "IBC-led Recoveries",
                                desc: "Resolution frameworks accelerating distressed asset recovery opportunities.",
                            },
                            {
                                title: "Strategic Turnarounds",
                                desc: "Operational restructuring creating long-term enterprise value.",
                            },
                            {
                                title: "Institutional Capital",
                                desc: "Growing participation from private credit and alternative capital providers.",
                            },
                            {
                                title: "Asset Revitalization",
                                desc: "Unlocking value across stressed infrastructure and operating assets.",
                            },
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="rounded-[32px] border border-slate-200 p-8 shadow-sm hover:shadow-xl transition-all duration-500"
                            >

                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 text-white flex items-center justify-center">

                                    <TrendingUp size={24} />

                                </div>

                                <h3 className="mt-8 text-3xl font-bold text-green-700">

                                    {item.title}

                                </h3>

                                <p className="mt-6 text-base leading-9 text-slate-700" style={{ color: "#000000" }}>

                                    {item.desc}

                                </p>

                            </div>
                        ))}

                    </div>

                    {/* TRENDS */}
                    <div className="mt-20 rounded-[36px] bg-[#0b1120] px-5 py-8 sm:p-8 lg:p-10 text-white">

                        <div className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm text-green-700">

                            Resolution Ecosystem

                        </div>

                        <h2 className="mt-6 text-4xl font-bold text-green-400">

                            Emerging Market Trends


                        </h2>

                        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6" style={{ marginTop: "50px" }}>

                            {[
                                "Special Situations Growth",
                                "Private Credit Expansion",
                                "Distressed Asset Consolidation",
                                "Institutional Recovery Platforms",
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    className="group relative overflow-hidden rounded-[30px] border-2 border-green-500/30 bg-gradient-to-br from-white/[0.08] to-white/[0.03] backdrop-blur-xl p-7"
                                >

                                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-green-400 via-emerald-500 to-transparent"></div>

                                    <CheckCircle2
                                        className="text-green-400"
                                        size={28}
                                    />

                                    <h3 className="mt-6 text-2xl font-bold text-white leading-tight" style={{ color: "#000000" }}>

                                        {item}

                                    </h3>

                                </div>
                            ))}

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}