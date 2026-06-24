"use client";

import {
    ShieldCheck,
    Landmark,
    TrendingUp,
    BriefcaseBusiness,
} from "lucide-react";

export default function WhyAIFSection() {

    const points = [
        {
            icon: <ShieldCheck size={22} />,
            title: "Technical vs Real NPAs",
            text: "Lower GNPA ratios often reflect settlements and write-offs, while the underlying stressed assets continue to remain unresolved across the ecosystem.",
        },

        {
            icon: <Landmark size={22} />,
            title: "Hidden Asset Pool",
            text: "Over ₹15–16 lakh crore of written-off loans continue to create a scalable secondary market opportunity for specialized investors.",
        },

        {
            icon: <BriefcaseBusiness size={22} />,
            title: "Beyond Traditional Banks",
            text: "NBFCs and financial institutions continue to hold distressed assets awaiting recapitalization and strategic restructuring.",
        },

        {
            icon: <TrendingUp size={22} />,
            title: "Role of Specialized AIFs",
            text: "Alternative Investment Funds bring patient capital, flexible structures, and faster execution to complex turnaround opportunities.",
        },
    ];

    return (
        <section className="relative overflow-hidden py-24 lg:py-32 bg-[#00314A]">

            {/* BACKGROUND EFFECTS */}
            <div className="absolute inset-0">

                {/* Green Glow */}
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#009A9E]/20 blur-3xl rounded-full"></div>

                {/* Right Glow */}
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#7ACED4]/10 blur-3xl rounded-full"></div>

                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage:
                            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                        backgroundSize: "80px 80px",
                    }}
                ></div>

            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* TOP CONTENT */}
                <div className="grid lg:grid-cols-12 gap-16 items-center">

                    {/* LEFT */}
                    <div className="lg:col-span-5" >

                        <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#009A9E]/10 border border-[#009A9E]/20 text-[#7ACED4] text-sm font-medium backdrop-blur-md">
                            India’s Evolving Credit Landscape
                        </span>

                        <h2 className="mt-8 text-4xl lg:text-5xl font-bold text-white leading-tight">

                            Why Specialized
                            Alternative Funds
                            Are Positioned to Lead

                        </h2>

                    </div>

                    {/* RIGHT */}
                    <div className="lg:col-span-7">

                        <p className="text-lg leading-9 text-slate-300 max-w-4xl">

                            Beneath improving banking numbers lies a large ecosystem
                            of unresolved stressed assets, written-off exposures,
                            and complex restructuring opportunities requiring
                            specialized capital, operational expertise, and
                            long-term strategic execution.

                        </p>

                    </div>

                </div>

                {/* MAIN LAYOUT */}
                <div className="mt-24 relative">

                    {/* Vertical Gradient Line */}
                    <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-[#009A9E] via- [#7ACED4]/50 to-transparent"></div>

                    <div className="space-y-20">

                        {points.map((item, index) => (

                            <div
                                key={index}
                                className="grid lg:grid-cols-12 gap-10 items-start group"
                            >

                                {/* ICON SIDE */}
                                <div className="lg:col-span-2 relative">

                                    <div className="relative z-10 w-11 h-11 rounded-full bg-gradient-to-br from-[#009A9E] to-[#00314A] text-white flex items-center justify-center shadow-[0_0_25px_rgba(0,154,158,0.35)] group-hover:scale-110 transition duration-300">

                                        {item.icon}

                                    </div>

                                </div>

                                {/* CONTENT SIDE */}
                                <div className="lg:col-span-10">

                                    <div className="relative overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-xl rounded-[32px] p-8 lg:p-10 hover:border-[#009A9E]/30 transition-all duration-500">

                                        {/* Hover Glow */}
                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-[#009A9E]/5 via-transparent to-[#7ACED4]/5"></div>

                                        <div className="relative z-10 grid lg:grid-cols-12 gap-8">

                                            {/* TITLE */}
                                            <div className="lg:col-span-4">

                                                <span className="text-[#7ACED4] text-sm font-semibold tracking-widest uppercase">
                                                    0{index + 1}
                                                </span>

                                                <h3 className="mt-4 text-2xl lg:text-3xl font-bold text-white leading-snug">

                                                    {item.title}

                                                </h3>

                                            </div>

                                            {/* TEXT */}
                                            <div className="lg:col-span-8">

                                                <p className="text-base leading-8 text-slate-300">

                                                    {item.text}

                                                </p>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

                {/* BOTTOM STATS */}
                <div className="mt-28">

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        {/* CARD 1 */}
                        <div className="relative overflow-hidden rounded-[32px] border border-[#009A9E]/20 bg-gradient-to-br from-[#009A9E]/10 to-emerald-500/5 p-10 backdrop-blur-xl">

                            <div className="absolute top-0 right-0 w-40 h-40 bg-[#009A9E]/10 blur-3xl rounded-full"></div>

                            <div className="relative z-10">

                                <h3 className="text-3xl lg:text-3xl font-bold text-[#7ACED4]">
                                    ₹15L+
                                </h3>

                                <p className="mt-5 text-slate-300 leading-8">
                                    Written-off loans continue to drive large-scale
                                    secondary market opportunities.
                                </p>

                            </div>

                        </div>

                        {/* CARD 2 */}
                        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl">

                            <h3 className="text-3xl font-bold text-[#7ACED4]">
                                18–20%
                            </h3>

                            <p className="mt-5 text-slate-300 leading-8">
                                Target IRR opportunities through strategic distressed
                                asset acquisition and turnaround execution.
                            </p>

                        </div>

                        {/* CARD 3 */}
                        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl">

                            <h3 className="text-3xl font-bold text-[#7ACED4]">
                                Patient Capital
                            </h3>

                            <p className="mt-5 text-slate-300 leading-8">
                                Flexible AIF structures designed for long-term
                                value creation beyond traditional lending cycles.
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}