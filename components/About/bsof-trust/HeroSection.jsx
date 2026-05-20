"use client";
import Link from "next/link";
export default function HeroSection() {

    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-green-950 text-white">

            {/* Background Glow */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-green-500/20 blur-3xl rounded-full"></div>

            <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-400/10 blur-3xl rounded-full"></div>

            {/* MAIN CONTENT */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">

                <div className="grid lg:grid-cols-12 gap-14 items-center">

                    {/* LEFT CONTENT */}
                    <div className="lg:col-span-7">

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm font-medium text-green-300 backdrop-blur-md">

                            <div className="w-2 h-2 rounded-full bg-green-400"></div>

                            Bharat Special Opportunity Fund

                        </div>

                        {/* Heading */}
                        <h1 className="mt-8 text-3xl sm:text-3xl lg:text-5xl font-bold leading-[1.02] tracking-tight">

                            Unlocking Value
                            Through India’s
                            Special Situation
                            Opportunities

                        </h1>

                        {/* Paragraph */}
                        <p className="mt-8 max-w-3xl text-base sm:text-lg lg:text-xl leading-8 text-slate-300">

                            BSOF Trust focuses on distressed credit,
                            restructuring situations, strategic turnarounds,
                            and asset-backed opportunities requiring
                            institutional expertise and long-term execution.

                        </p>

                        {/* Buttons */}
                        <div className="mt-10 flex flex-col sm:flex-row gap-4">

                            <Link
                                href="/investment/strategy-opportunities"
                                className="py-4 px-4 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold transition-all duration-300 shadow-lg shadow-green-500/20 hover:scale-[1.02] text-center"
                            >

                                Explore Opportunities

                            </Link>

                            <Link
                                href="#"
                                className="px-4 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 text-white font-semibold transition-all duration-300 text-center"
                            >

                                Download Presentation

                            </Link>

                        </div>

                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="lg:col-span-5">

                        <div className="relative">

                            {/* Main Card */}
                            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl p-6 sm:p-8 shadow-2xl">

                                {/* Glow */}
                                <div className="absolute top-0 right-0 w-40 h-40 bg-green-500/20 blur-3xl rounded-full"></div>

                                <div className="relative z-10">

                                    {/* Label */}
                                    <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-3 py-1.5 text-xs font-medium text-green-300">

                                        Institutional Strategy

                                    </div>

                                    {/* Stats */}
                                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">

                                        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-green-500/30 transition-all duration-300">

                                            <h3 className="text-3xl sm:text-4xl font-bold">

                                                ₹1000Cr

                                            </h3>

                                            <p className="mt-2 text-sm text-slate-300">

                                                Target Corpus

                                            </p>

                                        </div>

                                        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-green-500/30 transition-all duration-300">

                                            <h3 className="text-3xl sm:text-4xl font-bold">

                                                5+Y

                                            </h3>

                                            <p className="mt-2 text-sm text-slate-300">

                                                Investment Horizon

                                            </p>

                                        </div>

                                    </div>

                                    {/* Focus Box */}
                                    <div className="mt-8 rounded-2xl border border-green-500/20 bg-gradient-to-r from-green-500/10 to-emerald-500/10 p-5">

                                        <p className="text-sm text-green-300 font-medium">

                                            Focus Areas

                                        </p>

                                        <h3 className="mt-3 text-xl sm:text-2xl font-bold leading-snug">

                                            Distressed Credit,
                                            Strategic Turnarounds &
                                            Asset-Backed Investments

                                        </h3>

                                    </div>

                                    {/* Bottom Stats */}
                                    <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">

                                        <div>

                                            <p className="text-xs uppercase tracking-wider text-slate-400 mt-3">

                                                Structure

                                            </p>

                                            <h4 className="mt-2 text-lg font-semibold">

                                                AIF Category II

                                            </h4>

                                        </div>

                                        <div className="w-px h-12 bg-white/10"></div>

                                        <div>

                                            <p className="text-xs uppercase tracking-wider text-slate-400 mt-3">

                                                Geography

                                            </p>

                                            <h4 className="mt-2 text-lg font-semibold">

                                                India Focused

                                            </h4>

                                        </div>

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