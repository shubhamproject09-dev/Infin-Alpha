"use client";

import {
    ArrowUpRight,
    TrendingUp,
    Landmark,
    Scale,
    Briefcase,
    ShieldCheck,
    CheckCircle2,
    Building2,
    BarChart3,
} from "lucide-react";
import Link from "next/link";

const caseStudies = [
    {
        title: "Stressed Corporate Debt Resolution",
        value: "₹250 Cr",
        irr: "22% IRR",
        desc: "Strategic acquisition of distressed debt assets with resolution-led turnaround approach.",
        icon: Landmark,
    },
    {
        title: "Litigation Locked Real Estate",
        value: "₹180 Cr",
        irr: "19% IRR",
        desc: "Unlocking trapped value through legal restructuring and phased capital infusion.",
        icon: Scale,
    },
    {
        title: "Mid-Market Restructuring",
        value: "₹95 Cr",
        irr: "24% IRR",
        desc: "Operational revival and refinancing support for overleveraged enterprises.",
        icon: Briefcase,
    },
];

export default function CaseStudy() {
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

                            Investment Opportunities

                        </div>

                        <h1 className="mt-8 text-3xl sm:text-3xl lg:text-5xl font-bold leading-[1.05] tracking-tight text-white">

                            Case Studies &
                            <span className="block mt-2 text-[#7ACED4]">
                                Special Situation Investments
                            </span>

                        </h1>

                        <p className="mt-8 max-w-4xl mx-auto text-base sm:text-lg lg:text-xl leading-9 text-slate-300">

                            Institutional-grade turnaround investments
                            focused on distressed credit,
                            restructuring opportunities,
                            litigation-locked assets,
                            and strategic value unlocking.

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

                                    <BarChart3 size={16} />

                                    Portfolio Opportunities

                                </div>

                                <h2 className="mt-8 text-2xl sm:text-3xl lg:text-5xl font-bold leading-[1.05] tracking-[-0.04em] text-white">

                                    Institutional-grade
                                    <span className="block mt-2 text-[#7ACED4]">
                                        Turnaround Investments
                                    </span>

                                </h2>

                                <p className="mt-8 max-w-4xl text-base sm:text-lg lg:text-xl leading-9 text-slate-300">

                                    INFIN ALPHA LLP focuses on identifying
                                    high-potential distressed opportunities
                                    where strategic capital infusion,
                                    restructuring expertise,
                                    and operational turnaround can unlock
                                    substantial long-term value.

                                </p>

                            </div>

                        </div>

                        {/* CASE STUDIES */}
                        <div className="relative z-10 p-5 sm:p-8 lg:p-8">

                            <div className="grid lg:grid-cols-3 gap-6">

                                {caseStudies.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="group relative overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-xl hover:shadow-2xl hover:border-[#7ACED4] transition-all duration-500"
                                    >

                                        <div className="p-8">

                                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#009A9E] to-[#00314A] flex items-center justify-center text-white shadow-lg shadow-[#EAF9FA]0/20">

                                                <item.icon size={28} />

                                            </div>

                                            <h3 className="mt-8 text-3xl font-bold text-[#009A9E] leading-tight">

                                                {item.title}

                                            </h3>

                                            <p
                                                className="mt-6 text-sm sm:text-base leading-8"
                                                style={{ color: "#000000" }}
                                            >

                                                {item.desc}

                                            </p>

                                            <div className="mt-8 grid grid-cols-2 gap-4">

                                                <div className="rounded-2xl border border-[#D5F3F5] bg-[#EAF9FA] p-5">

                                                    <p className="text-sm text-[#00314A] font-medium">
                                                        Investment Size
                                                    </p>

                                                    <h4 className="mt-2 text-2xl font-bold text-[#009A9E]">
                                                        {item.value}
                                                    </h4>

                                                </div>

                                                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">

                                                    <p className="text-sm text-slate-600 font-medium">
                                                        Potential Return
                                                    </p>

                                                    <h4 className="mt-2 text-2xl font-bold text-slate-900">
                                                        {item.irr}
                                                    </h4>

                                                </div>

                                            </div>

                                            <div className="mt-8 space-y-4">

                                                {[
                                                    "Strategic restructuring",
                                                    "Institutional execution",
                                                    "Resolution-led value creation",
                                                ].map((feature, i) => (
                                                    <div
                                                        key={i}
                                                        className="flex items-center gap-3"
                                                    >

                                                        <CheckCircle2
                                                            size={18}
                                                            className="text-[#EAF9FA]0 shrink-0"
                                                        />

                                                        <p
                                                            className="text-sm"
                                                            style={{ color: "#000000" }}
                                                        >

                                                            {feature}

                                                        </p>

                                                    </div>
                                                ))}

                                            </div>

                                            <Link
                                                href={
                                                    idx === 0
                                                        ? "/investment/caseStudy/stressed-corporate-debt"
                                                        : idx === 1
                                                            ? "/investment/caseStudy/litigation-real-estate"
                                                            : "/investment/caseStudy/mid-market-restructuring"
                                                }
                                                className="mt-10 inline-flex items-center gap-2 rounded-2xl bg-[#009A9E] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#00314A]"
                                            >

                                                View Case Study

                                                <ArrowUpRight size={18} />

                                            </Link>

                                        </div>

                                    </div>
                                ))}

                            </div>

                            {/* STRATEGY SECTION */}
                            <div className="mt-12">

                                <div className="relative overflow-hidden rounded-[36px] p-6 sm:p-8 lg:p-10 text-white shadow-2xl">

                                    <div className="absolute top-0 right-0 w-72 h-72 bg-[#EAF9FA]0/20 blur-3xl rounded-full"></div>

                                    <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(white_1px,transparent_1px)] bg-[size:22px_22px]"></div>

                                    <div className="relative z-10 grid lg:grid-cols-12 gap-10 items-center">

                                        <div className="lg:col-span-5">

                                            <div className="inline-flex items-center gap-2 rounded-full border border-[#EAF9FA]0/20 bg-[#EAF9FA]0/10 px-4 py-2 text-sm font-semibold text-[#00314A]">

                                                Investment Strategy

                                            </div>

                                            <h3 className="mt-6 text-4xl sm:text-5xl font-bold leading-tight text-[#7ACED4]">

                                                Deep-value
                                                Acquisition Model

                                            </h3>

                                        </div>

                                        <div className="lg:col-span-7">

                                            <p
                                                className="text-base sm:text-lg leading-9"
                                                style={{ color: "#000000" }}
                                            >

                                                INFIN ALPHA LLP follows
                                                a disciplined investment strategy
                                                focused on distressed opportunities,
                                                strategic restructuring,
                                                operational turnaround,
                                                and profitable exits through
                                                institutional execution capabilities.

                                            </p>

                                            <div className="mt-8 grid sm:grid-cols-2 gap-4">

                                                {[
                                                    "Acquire at deep discounts",
                                                    "Strategic capital infusion",
                                                    "Operational turnaround",
                                                    "Structured exits",
                                                ].map((item, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
                                                    >

                                                        <TrendingUp
                                                            className="text-[#7ACED4] shrink-0"
                                                            size={18}
                                                        />

                                                        <p className="text-sm sm:text-base text-black/90">

                                                            {item}

                                                        </p>

                                                    </div>
                                                ))}

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                            {/* MARKET OPPORTUNITY */}
                            <div className="mt-16">

                                <div className="text-center">

                                    <div className="inline-flex items-center gap-2 rounded-full border border-[#D5F3F5] bg-[#EAF9FA] px-4 py-2 text-sm font-semibold text-[#00314A]">

                                        <Building2 size={16} />

                                        Market Opportunity

                                    </div>

                                    <h3 className="mt-6 text-3xl sm:text-5xl font-bold leading-tight">

                                        <span style={{ color: "#000000" }}>
                                            India’s Distressed Asset
                                        </span>

                                        <span className="block mt-2 text-[#009A9E]">
                                            Opportunity Landscape
                                        </span>

                                    </h3>

                                </div>

                                <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

                                    {[
                                        {
                                            title: "₹12L Cr",
                                            subtitle: "Estimated stressed asset opportunity",
                                        },
                                        {
                                            title: "20%+",
                                            subtitle: "Target IRR potential",
                                        },
                                        {
                                            title: "₹50–75 Cr",
                                            subtitle: "Average investment size",
                                        },
                                        {
                                            title: "5 Years",
                                            subtitle: "Investment horizon",
                                        },
                                    ].map((item, idx) => (
                                        <div
                                            key={idx}
                                            className="group rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl hover:border-[#7ACED4] transition-all duration-500"
                                        >

                                            <h4 className="text-4xl font-bold text-[#009A9E] leading-tight">

                                                {item.title}

                                            </h4>

                                            <p
                                                className="mt-4 text-sm leading-7"
                                                style={{ color: "#000000" }}
                                            >

                                                {item.subtitle}

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