"use client";

import {
    BookOpen,
    Landmark,
    TrendingUp,
    ShieldCheck,
    CheckCircle2,
} from "lucide-react";

export default function AlternativeInvestmentPage() {
    return (
        <section className="bg-white">

            {/* HERO */}
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

                        <div className="inline-flex items-center gap-2 rounded-full border border-[#EAF9FA]0/20 bg-[#EAF9FA]0/10 px-4 py-2 text-sm font-medium text-[#7ACED4]">

                            <BookOpen size={16} />

                            Investment Strategy Report

                        </div>

                        <h1 className="mt-8 text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.05] tracking-tight text-white">

                            Alternative
                            <span className="block mt-2 text-[#7ACED4]">
                                Investment Strategies
                            </span>

                        </h1>

                        <p className="mt-8 max-w-4xl mx-auto text-base sm:text-lg lg:text-xl leading-9 text-slate-300">

                            Understanding how private credit,
                            distressed opportunities,
                            hybrid capital structures,
                            and special situations investing
                            are reshaping India’s alternative investment ecosystem.

                        </p>

                    </div>

                </div>

            </div>

            {/* CONTENT */}
            <div className="py-24">

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* STRATEGY CARDS */}
                    <div className="grid lg:grid-cols-3 gap-6">

                        {[
                            {
                                title: "Private Credit",
                                desc: "Flexible capital deployment across structured credit and opportunistic lending strategies.",
                                icon: TrendingUp,
                            },
                            {
                                title: "Special Situations",
                                desc: "Investment opportunities emerging from restructuring, stress, and market dislocations.",
                                icon: Landmark,
                            },
                            {
                                title: "Hybrid Structures",
                                desc: "Customized debt-equity solutions designed for risk-adjusted returns.",
                                icon: ShieldCheck,
                            },
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="rounded-[32px] border border-slate-200 p-8 shadow-sm hover:shadow-xl transition-all duration-500"
                            >

                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#009A9E] to-[#00314A] text-white flex items-center justify-center">

                                    <item.icon size={28} />

                                </div>

                                <h3 className="mt-8 text-3xl font-bold text-[#00314A]">

                                    {item.title}

                                </h3>

                                <p className="mt-6 text-base leading-9 text-slate-700">

                                    {item.desc}

                                </p>

                            </div>
                        ))}

                    </div>

                    {/* PROCESS SECTION */}
                    <div className="mt-20 rounded-[36px] px-5 py-8 sm:p-8 lg:p-10 text-black">

                        <div className="inline-flex items-center gap-2 rounded-full border border-[#EAF9FA]0/20 bg-[#EAF9FA]0/10 px-4 py-2 text-sm text-[#00314A]">

                            Strategic Investment Themes

                        </div>

                        <h2 className="mt-6 text-4xl font-bold text-[#7ACED4]">

                            Core Investment Framework

                        </h2>

                        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

                            {[
                                {
                                    step: "01",
                                    title: "Deep Discount Entry",
                                },
                                {
                                    step: "02",
                                    title: "Capital Infusion",
                                },
                                {
                                    step: "03",
                                    title: "Operational Resolution",
                                },
                                {
                                    step: "04",
                                    title: "Strategic Exit",
                                },
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    className="group relative overflow-hidden rounded-[30px] border-2 border-[#EAF9FA]0/30 bg-gradient-to-br from-white/[0.08] to-white/[0.03] backdrop-blur-xl p-7"
                                >

                                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#7ACED4] via-emerald-500 to-transparent"></div>

                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#009A9E] to-[#00314A] text-white flex items-center justify-center font-bold text-lg">

                                        {item.step}

                                    </div>

                                    <h3 className="mt-8 text-2xl font-bold text-black leading-tight">

                                        {item.title}

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