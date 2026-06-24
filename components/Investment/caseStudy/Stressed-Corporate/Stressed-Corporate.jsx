"use client";

import {
    Landmark,
    TrendingUp,
    CheckCircle2,
    BarChart3,
    ShieldCheck,
} from "lucide-react";

export default function StressedCorporateDebtPage() {
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

                            <Landmark size={16} />

                            Institutional Case Study

                        </div>

                        <h1 className="mt-8 text-3xl sm:text-3xl lg:text-5xl font-bold leading-[1.05] tracking-tight text-white">

                            Stressed Corporate
                            <span className="block mt-2 text-[#7ACED4]">
                                Debt Resolution
                            </span>

                        </h1>

                        <p className="mt-8 max-w-4xl mx-auto text-base sm:text-lg lg:text-xl leading-9 text-slate-300">

                            Strategic acquisition of distressed corporate debt
                            opportunities focused on restructuring,
                            turnaround execution,
                            and long-term institutional value creation.

                        </p>

                    </div>

                </div>

            </div>

            {/* CONTENT */}
            <div className="py-24">

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* STATS */}
                    <div className="grid md:grid-cols-3 gap-6">

                        {[
                            {
                                title: "₹250 Cr",
                                subtitle: "Investment Opportunity",
                            },
                            {
                                title: "22% IRR",
                                subtitle: "Potential Target Return",
                            },
                            {
                                title: "5 Years",
                                subtitle: "Investment Horizon",
                            },
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm"
                            >

                                <h3 className="text-4xl font-bold text-[#009A9E]">

                                    {item.title}

                                </h3>

                                <p className="mt-4 text-base leading-8 text-slate-700">

                                    {item.subtitle}

                                </p>

                            </div>
                        ))}

                    </div>

                    {/* MAIN CONTENT */}
                    <div className="mt-20 grid lg:grid-cols-2 gap-10">

                        <div className="rounded-[36px] border border-slate-200 p-8 shadow-sm">

                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#009A9E] to-[#00314A] text-white flex items-center justify-center">

                                <TrendingUp size={28} />

                            </div>

                            <h2 className="mt-8 text-3xl font-bold text-[#00314A]">

                                Investment Opportunity

                            </h2>

                            <p className="mt-6 text-base leading-9 text-slate-700">

                                The opportunity focused on acquiring stressed
                                corporate debt assets at deep discounts,
                                enabling institutional restructuring and
                                long-term recovery-led value creation.

                            </p>

                        </div>

                        <div className="rounded-[36px] border border-slate-200 p-8 shadow-sm">

                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#009A9E] to-[#00314A] text-white flex items-center justify-center">

                                <ShieldCheck size={28} />

                            </div>

                            <h2 className="mt-8 text-3xl font-bold text-[#00314A]">

                                Resolution Strategy

                            </h2>

                            <p className="mt-6 text-base leading-9 text-slate-700">

                                Structured capital infusion,
                                operational turnaround initiatives,
                                refinancing support,
                                and strategic resolution planning
                                formed the core investment approach.

                            </p>

                        </div>

                    </div>

                    {/* PROCESS */}
                    <div className="mt-20 rounded-[36px] px-5 py-8 sm:p-8 lg:p-10 text-white">

                        <div className="inline-flex items-center gap-2 rounded-full border border-[#EAF9FA]0/20 bg-[#EAF9FA]0/10 px-4 py-2 text-sm text-[#00314A]">

                            Resolution Framework

                        </div>

                        <h2 className="mt-6 text-4xl font-bold text-[#7ACED4]">

                            Institutional Execution Strategy

                        </h2>

                        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

                            {[
                                "Deep Discount Acquisition",
                                "Strategic Capital Infusion",
                                "Operational Restructuring",
                                "Profitable Exit Strategy",
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    className="group relative overflow-hidden rounded-[30px] border-2 border-[#EAF9FA]0/30 bg-gradient-to-br from-white/[0.08] to-white/[0.03] backdrop-blur-xl p-7"
                                >

                                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#7ACED4] via-emerald-500 to-transparent"></div>

                                    <CheckCircle2
                                        className="text-[#7ACED4]"
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