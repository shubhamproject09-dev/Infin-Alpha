"use client";

import {
    Briefcase,
    TrendingUp,
    ShieldCheck,
    CheckCircle2,
    Landmark,
} from "lucide-react";

export default function MidMarketRestructuringPage() {
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

                            <Briefcase size={16} />

                            Mid-market Opportunity

                        </div>

                        <h1 className="mt-8 text-3xl sm:text-3xl lg:text-5xl font-bold leading-[1.05] tracking-tight text-white">

                            Mid-Market
                            <span className="block mt-2 text-green-400">
                                Restructuring
                            </span>

                        </h1>

                        <p className="mt-8 max-w-4xl mx-auto text-base sm:text-lg lg:text-xl leading-9 text-slate-300">

                            Supporting overleveraged but operationally viable
                            enterprises through refinancing,
                            turnaround execution,
                            and strategic restructuring initiatives.

                        </p>

                    </div>

                </div>

            </div>

            {/* CONTENT */}
            <div className="py-24">

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* METRICS */}
                    <div className="grid md:grid-cols-3 gap-6">

                        {[
                            {
                                title: "₹95 Cr",
                                subtitle: "Investment Size",
                            },
                            {
                                title: "24% IRR",
                                subtitle: "Target Return",
                            },
                            {
                                title: "Mid-market",
                                subtitle: "Enterprise Focus",
                            },
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm"
                            >

                                <h3 className="text-4xl font-bold text-green-600">

                                    {item.title}

                                </h3>

                                <p className="mt-4 text-base leading-8 text-slate-700">

                                    {item.subtitle}

                                </p>

                            </div>
                        ))}

                    </div>

                    {/* CONTENT */}
                    <div className="mt-20 grid lg:grid-cols-2 gap-10">

                        <div className="rounded-[36px] border border-slate-200 p-8 shadow-sm">

                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 text-white flex items-center justify-center">

                                <TrendingUp size={28} />

                            </div>

                            <h2 className="mt-8 text-3xl font-bold text-green-700">

                                Growth Potential

                            </h2>

                            <p className="mt-6 text-base leading-9 text-slate-700">

                                Mid-market enterprises with strong operational
                                capabilities often require structured
                                refinancing and strategic turnaround support
                                to unlock long-term growth potential.

                            </p>

                        </div>

                        <div className="rounded-[36px] border border-slate-200 p-8 shadow-sm">

                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 text-white flex items-center justify-center">

                                <ShieldCheck size={28} />

                            </div>

                            <h2 className="mt-8 text-3xl font-bold text-green-700">

                                Turnaround Execution

                            </h2>

                            <p className="mt-6 text-base leading-9 text-slate-700">

                                Institutional capital,
                                operational restructuring,
                                and disciplined execution frameworks
                                support sustainable enterprise recovery.

                            </p>

                        </div>

                    </div>

                    {/* FRAMEWORK */}
                    <div className="mt-20 rounded-[36px] px-5 py-8 sm:p-8 lg:p-10 text-white">

                        <div className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm text-green-700">

                            Investment Framework

                        </div>

                        <h2 className="mt-6 text-4xl font-bold text-green-400">

                            Turnaround Execution Model

                        </h2>

                        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

                            {[
                                "Debt Restructuring",
                                "Operational Revival",
                                "Strategic Refinancing",
                                "Long-term Value Creation",
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

                                    <h3 className="mt-6 text-2xl font-bold text-black leading-tight">

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