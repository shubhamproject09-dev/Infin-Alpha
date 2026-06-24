"use client";

import {
    ShieldCheck,
    Building2,
    Briefcase,
    TrendingUp,
    Landmark,
    ArrowRight,
    Sparkles,
    CheckCircle2,
} from "lucide-react";
import Link from "next/link";

export default function InfinAlphaSection() {

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

                {/* Glow */}
                <div className="absolute top-0 left-0 w-72 h-72 bg-[#EAF9FA]0/20 blur-3xl rounded-full"></div>

                <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#7ACED4]/10 blur-3xl rounded-full"></div>

                {/* Pattern */}
                <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(white_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                {/* CONTENT */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="flex items-center justify-center text-center">

                        <div className="max-w-5xl mx-auto">

                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 rounded-full border border-[#EAF9FA]0/20 bg-[#EAF9FA]0/10 px-4 py-2 text-sm font-medium text-[#7ACED4] backdrop-blur-md">

                                <ShieldCheck size={16} />

                                Alternative Investment Platform

                            </div>

                            {/* Heading */}
                            <h1 className="mt-8 text-3xl sm:text-3xl lg:text-5xl font-bold leading-[1.05] tracking-tight text-white">

                                INFIN ALPHA
                                <span className="block mt-2 text-[#7ACED4]">
                                    LLP
                                </span>

                            </h1>

                            {/* Paragraph */}
                            <p className="mt-8 max-w-4xl mx-auto text-base sm:text-lg lg:text-xl leading-9 text-slate-300">

                                Specialized investment management platform
                                focused on distressed credit,
                                special situations,
                                restructuring-led investments,
                                and high-yield private credit opportunities
                                across India’s evolving alternative investment ecosystem.

                            </p>

                        </div>

                    </div>

                </div>

            </div>

            {/* MAIN SECTION */}
            <div className="relative z-10 pb-20 sm:pb-24 pt-[40px] sm:pt-[70px] lg:pt-[100px]">

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">

                        {/* LEFT SIDE */}
                        <div className="lg:col-span-8 flex">

                            <div className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] border border-slate-200 bg-white p-5 sm:p-8 lg:p-10 shadow-sm hover:shadow-2xl transition-all duration-500 h-full w-full">

                                {/* Glow */}
                                <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-[#EAF9FA]0/10 blur-3xl rounded-full"></div>

                                <div className="relative z-10">

                                    {/* Badge */}
                                    <div className="inline-flex items-center gap-2 rounded-full border border-[#D5F3F5] bg-[#EAF9FA] px-4 py-2 text-xs sm:text-sm font-semibold text-[#00314A]">

                                        <Building2 size={16} />

                                        Fund Management Entity

                                    </div>

                                    {/* Heading */}
                                    <h2 className="mt-5 sm:mt-6 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-[-0.03em] text-[#009A9E]">

                                        Specialized High Yield
                                        Investment Platform

                                    </h2>

                                    {/* Description */}
                                    <p className="mt-6 text-base sm:text-lg leading-8 text-black" style={{ color: '#000000' }}>

                                        Infin Alpha LLP is conceptualized as
                                        a specialized alternative investment
                                        management platform focusing on
                                        distressed credit,
                                        restructuring opportunities,
                                        special situations,
                                        and non-traditional private credit strategies.

                                    </p>

                                    {/* GRID */}
                                    <div className="mt-10 grid md:grid-cols-2 gap-5">

                                        {/* CARD */}
                                        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 sm:p-6">

                                            <div className="w-12 h-12 rounded-2xl border-2 border-[#EAF9FA]0 text-[#009A9E] flex items-center justify-center">

                                                <Briefcase size={22} />

                                            </div>

                                            <h3 className="mt-5 text-xl font-bold text-[#009A9E]">

                                                Investment Philosophy

                                            </h3>

                                            <p className="mt-3 text-sm sm:text-base leading-8 text-black" style={{ color: '#000000' }}>

                                                Invest at deep discounts,
                                                infuse strategic capital,
                                                unlock value through restructuring,
                                                and generate superior risk-adjusted returns.

                                            </p>

                                        </div>

                                        {/* CARD */}
                                        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 sm:p-6">

                                            <div className="w-12 h-12 rounded-2xl border-2 border-[#EAF9FA]0 text-[#009A9E] flex items-center justify-center">

                                                <TrendingUp size={22} />

                                            </div>

                                            <h3 className="mt-5 text-xl font-bold text-[#009A9E]">

                                                Market Opportunity

                                            </h3>

                                            <p className="mt-3 text-sm sm:text-base leading-8 text-black" style={{ color: '#000000' }}>

                                                India’s stressed asset market
                                                represents a multi-trillion rupee
                                                opportunity requiring specialized
                                                legal-commercial expertise.

                                            </p>

                                        </div>

                                    </div>

                                    {/* FULL WIDTH SECTION */}
                                    <div className="mt-8 rounded-[28px] border border-[#D5F3F5] bg-[#EAF9FA] p-6 sm:p-8">

                                        <div className="flex items-start gap-4">

                                            <div className="w-14 h-14 rounded-2xl border-2 border-[#EAF9FA]0 text-[#009A9E] flex items-center justify-center shrink-0">

                                                <Landmark size={24} />

                                            </div>

                                            <div>

                                                <h3 className="text-2xl font-bold text-[#009A9E]">

                                                    BSOF Category II AIF

                                                </h3>

                                                <p className="mt-4 text-sm sm:text-base leading-8 text-black" style={{ color: '#000000' }}>

                                                    Bharat Special Opportunity Fund (BSOF)
                                                    is the flagship strategy under
                                                    INFIN ALPHA LLP,
                                                    focused on special situations,
                                                    distressed credit,
                                                    litigation-backed assets,
                                                    and complex restructuring opportunities
                                                    across India’s mid-market ecosystem.

                                                </p>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                        {/* RIGHT SIDE */}
                        <div className="lg:col-span-4 flex">

                            <div className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] p-5 sm:p-8 lg:p-10 shadow-2xl h-full w-full">

                                {/* Glow */}
                                <div className="absolute top-0 right-0 w-72 h-72 bg-[#EAF9FA]0/20 blur-3xl rounded-full"></div>

                                {/* Pattern */}
                                <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(white_1px,transparent_1px)] bg-[size:22px_22px]"></div>

                                <div className="relative z-10">

                                    {/* Badge */}
                                    <div className="inline-flex items-center gap-2 rounded-full border border-[#D5F3F5] bg-[#EAF9FA] px-4 py-2 text-xs sm:text-sm font-semibold text-[#00314A]">

                                        Strategic Advantages

                                    </div>

                                    {/* Heading */}
                                    <h3 className="mt-6 text-3xl sm:text-4xl font-bold leading-tight tracking-[-0.03em] text-[#7ACED4]">

                                        Why
                                        INFIN ALPHA?

                                    </h3>

                                    {/* List */}
                                    <div className="mt-8 space-y-5">

                                        <div className="flex items-start gap-3">

                                            <CheckCircle2 className="text-[#7ACED4] mt-1" size={20} />

                                            <p className="text-sm sm:text-base leading-7 text-white/90" style={{ color: "#000000" }}>

                                                Deep expertise in distressed assets,
                                                restructuring,
                                                and special situations investing.

                                            </p>

                                        </div>

                                        <div className="flex items-start gap-3">

                                            <CheckCircle2 className="text-[#7ACED4] mt-1" size={20} />

                                            <p className="text-sm sm:text-base leading-7 text-white/90" style={{ color: "#000000" }}>

                                                Strong institutional relationships
                                                across banks,
                                                ARCs,
                                                and legal ecosystem participants.

                                            </p>

                                        </div>

                                        <div className="flex items-start gap-3">

                                            <CheckCircle2 className="text-[#7ACED4] mt-1" size={20} />

                                            <p className="text-sm sm:text-base leading-7 text-white/90" style={{ color: "#000000" }}>

                                                Experienced leadership team with
                                                decades of investment and restructuring expertise.

                                            </p>

                                        </div>

                                        <div className="flex items-start gap-3">

                                            <CheckCircle2 className="text-[#7ACED4] mt-1" size={20} />

                                            <p className="text-sm sm:text-base leading-7 text-white/90" style={{ color: "#000000" }}>

                                                Structured risk management
                                                and recovery-focused investment approach.

                                            </p>

                                        </div>

                                    </div>

                                    {/* Bottom CTA */}
                                    <Link
                                        href="/investment/strategy-opportunities"
                                        className="mt-10 w-full py-4 rounded-2xl bg-gradient-to-r from-[#00314A] to-[#009A9E] hover:from-[#009A9E] hover:to-[#00314A] text-white font-semibold transition-all duration-300 shadow-lg shadow-[#EAF9FA]0/20 flex items-center justify-center gap-2"
                                    >

                                        Explore Investment Strategy

                                        <ArrowRight size={18} />

                                    </Link>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}