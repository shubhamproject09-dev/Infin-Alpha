"use client";

export default function OverviewSection() {
    return (
        <section className="relative overflow-hidden bg-white py-20 sm:py-23 lg:py-25">

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            {/* Top Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#EAF9FA]0/10 blur-3xl rounded-full"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* TOP SECTION */}
                <div className="max-w-5xl mx-auto text-center">

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 rounded-full border border-[#D5F3F5] bg-[#EAF9FA] px-5 py-2 text-sm font-semibold text-[#00314A]">

                        <div className="w-2 h-2 rounded-full bg-[#009A9E]"></div>

                        Trust Overview

                    </div>

                    {/* Heading */}
                    <h2
                        className="mt-8 text-3xl sm:text-3xl lg:text-5xl font-bold leading-[1.1] tracking-[-0.04em]"
                        style={{ color: "#000" }}
                    >

                        Unlocking Institutional

                        <span
                            className="block mt-2"
                            style={{ color: "#16a34a" }}
                        >
                            Value Across India’s
                        </span>

                        Emerging Distressed
                        Asset Landscape

                    </h2>

                    {/* Paragraph */}
                    <p
                        className="mt-8 text-lg sm:text-xl leading-9 max-w-4xl mx-auto"
                        style={{ color: "#000" }}
                    >

                        Bharat Special Opportunity Fund (BSOF) focuses on
                        differentiated distressed credit, restructuring,
                        and special situation opportunities requiring
                        institutional discipline, strategic intervention,
                        and long-term value creation.

                    </p>

                </div>

                {/* MAIN GRID */}
                <div className="mt-24 grid lg:grid-cols-12 gap-8 items-stretch">

                    {/* LEFT SIDE */}
                    <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">

                        {/* CARD 1 */}
                        <div className="group relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">

                            {/* Hover Glow */}
                            <div className="absolute inset-0 bg-[#EAF9FA]0/0 group-hover:bg-[#EAF9FA]0/[0.03] transition-all duration-500"></div>

                            {/* Top Border */}
                            <div className="absolute top-0 left-0 h-1 w-0 bg-[#EAF9FA]0 group-hover:w-full transition-all duration-500"></div>

                            {/* Icon */}
                            <div className="relative w-16 h-16 rounded-2xl bg-white border-2 border-[#EAF9FA]0 text-[#009A9E] flex items-center justify-center text-2xl group-hover:scale-110 transition duration-300 shadow-sm">

                                ↗

                            </div>

                            {/* Title */}
                            <h3 className="relative mt-8 text-2xl font-bold text-[#009A9E] leading-snug">

                                Deep Value Investments

                            </h3>

                            {/* Description */}
                            <p
                                className="relative mt-5 leading-8"
                                style={{ color: "#000" }}
                            >

                                Identifying distressed and underpriced
                                opportunities with significant value
                                unlocking potential across India’s
                                evolving special situations market.

                            </p>

                        </div>

                        {/* CARD 2 */}
                        <div className="group relative overflow-hidden rounded-[32px] bg-white border border-slate-200 p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">

                            {/* Hover Glow */}
                            <div className="absolute inset-0 bg-[#EAF9FA]0/0 group-hover:bg-[#EAF9FA]0/[0.03] transition-all duration-500"></div>

                            {/* Top Border */}
                            <div className="absolute top-0 left-0 h-1 w-0 bg-[#EAF9FA]0 group-hover:w-full transition-all duration-500"></div>

                            {/* Icon */}
                            <div className="relative w-16 h-16 rounded-2xl bg-white border-2 border-[#EAF9FA]0 text-[#009A9E] flex items-center justify-center text-2xl group-hover:scale-110 transition duration-300 shadow-sm">

                                ◎

                            </div>

                            {/* Title */}
                            <h3 className="relative mt-8 text-2xl font-bold text-[#009A9E] leading-snug">

                                Institutional Governance

                            </h3>

                            {/* Description */}
                            <p
                                className="relative mt-5 leading-8"
                                style={{ color: "#000" }}
                            >

                                Structured investment execution with
                                governance-led decision making,
                                downside protection, and disciplined
                                capital deployment frameworks.

                            </p>

                        </div>

                        {/* LARGE CARD */}
                        <div className="sm:col-span-2 relative overflow-hidden rounded-[36px] bg-white border border-slate-200 p-8 sm:p-10 shadow-sm hover:shadow-2xl transition-all duration-500">

                            {/* Glow */}
                            <div className="absolute top-0 right-0 w-96 h-96 bg-[#EAF9FA]0/10 blur-3xl rounded-full"></div>

                            {/* Pattern */}
                            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] bg-[size:22px_22px]"></div>

                            <div className="relative z-10 flex flex-col lg:flex-row  lg:justify-between gap-10">

                                {/* LEFT */}
                                <div className="max-w-2xl">

                                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#009A9E]">

                                        India’s Opportunity Landscape

                                    </p>

                                    <h3
                                        className="mt-5 text-2xl sm:text-5xl font-bold leading-tight tracking-[-0.03em]"
                                        style={{ color: "#000" }}
                                    >

                                        ₹8–12 Lakh Crore
                                        Stressed Asset
                                        Opportunity Market

                                    </h3>

                                </div>

                                {/* RIGHT */}
                                <div className="flex items-center gap-10">

                                    <div>

                                        <h4 className="text-3xl sm:text-5xl font-bold text-[#009A9E]">
                                            500+
                                        </h4>

                                        <p
                                            className="mt-2 text-sm"
                                            style={{ color: "#000" }}
                                        >
                                            Potential Cases
                                        </p>

                                    </div>

                                    <div className="w-px h-16 bg-slate-200"></div>

                                    <div>

                                        <h4 className="text-3xl sm:text-5xl font-bold text-[#009A9E]">

                                            18–20%

                                        </h4>

                                        <p
                                            className="mt-2 text-sm"
                                            style={{ color: "#000" }}
                                        >

                                            Target IRR

                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* RIGHT SIDE */}
                    <div className="lg:col-span-5">

                        <div className="group relative h-full overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-sm hover:shadow-2xl transition-all duration-500">

                            {/* IMAGE */}
                            <div className="overflow-hidden">

                                <div
                                    className="h-[260px] sm:h-[320px] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                    style={{
                                        backgroundImage:
                                            "url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop')",
                                    }}
                                ></div>

                            </div>

                            {/* CONTENT */}
                            <div className="p-8 sm:p-10">

                                {/* Badge */}
                                <div className="inline-flex items-center gap-2 rounded-full bg-[#EAF9FA] border border-[#D5F3F5] px-4 py-2 text-sm font-semibold text-[#00314A]">

                                    <div className="w-2 h-2 rounded-full bg-[#009A9E]"></div>

                                    Strategic Investment Focus

                                </div>

                                {/* Heading */}
                                <h3 className="mt-7 text-4xl font-bold leading-tight tracking-[-0.03em] text-[#009A9E]">

                                    Focused on Complex
                                    <span className="block text-[#009A9E] mt-2">
                                        & High-Conviction
                                    </span>

                                    Opportunities

                                </h3>

                                {/* Description */}
                                <p
                                    className="mt-6 leading-8"
                                    style={{ color: "#000" }}
                                >

                                    Investing across distressed debt,
                                    restructuring-led opportunities,
                                    litigation-backed assets,
                                    and operational turnaround situations.

                                </p>

                                {/* STATS */}
                                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">

                                    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 hover:border-[#7ACED4] transition duration-300">

                                        <p
                                            className="text-sm"
                                            style={{ color: "#000" }}
                                        >

                                            Structure

                                        </p>

                                        <h4 className="mt-3 text-2xl font-bold text-[#009A9E]">

                                            Category II AIF

                                        </h4>

                                    </div>

                                    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 hover:border-[#7ACED4] transition duration-300">

                                        <p
                                            className="text-sm"
                                            style={{ color: "#000" }}
                                        >

                                            Geography

                                        </p>

                                        <h4 className="mt-3 text-2xl font-bold text-[#009A9E]">

                                            India Focused

                                        </h4>

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