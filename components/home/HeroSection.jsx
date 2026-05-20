"use client";

import Link from "next/link";
import { ArrowRight, TrendingUp, ShieldCheck, Landmark } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-green-950 text-white">

            {/* Background Glow Effects */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-green-500/20 blur-3xl rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-400/10 blur-3xl rounded-full"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative z-10">

                <div className="grid lg:grid-cols-2 gap-14 items-center">

                    {/* LEFT CONTENT */}
                    <div>

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-md">
                            <TrendingUp size={16} />
                            India’s Special Situations Opportunity
                        </div>

                        {/* Heading */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">

                            Unlocking Value in
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-200 mt-2">
                                India’s Stressed
                                Asset Ecosystem
                            </span>
                        </h1>

                        {/* Paragraph */}
                        <p className="mt-7 text-slate-300 text-lg leading-8 max-w-2xl">

                            INFIN Alpha LLP is a specialized alternative investment
                            manager focused on distressed credit, special situations,
                            restructuring opportunities, and high-yield private credit
                            investments through Bharat Special Opportunity Fund (BSOF).

                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 mt-10">

                            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
                                <h3 className="text-2xl font-bold text-green-400">
                                    ₹8–12L Cr
                                </h3>
                                <p className="text-sm text-slate-300 mt-2">
                                    Estimated Trapped Value Market
                                </p>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
                                <h3 className="text-2xl font-bold text-green-400">
                                    18–20%
                                </h3>
                                <p className="text-sm text-slate-300 mt-2">
                                    Target IRR Opportunity
                                </p>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm col-span-2 sm:col-span-1">
                                <h3 className="text-2xl font-bold text-green-400">
                                    Category II
                                </h3>
                                <p className="text-sm text-slate-300 mt-2">
                                    SEBI Registered AIF Structure
                                </p>
                            </div>

                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4 mt-10">

                            {/* Strategy Opportunities Button */}
                            <Link
                                href="/investment/strategy-opportunities"
                                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-green-500/25"
                            >
                                Explore Opportunities
                                <ArrowRight size={18} />
                            </Link>

                            {/* Performance Button */}
                            <Link
                                href="/investment/performance"
                                className="inline-flex items-center gap-2 border border-white/20 hover:border-green-400 hover:bg-white/5 px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                            >
                                View Performance
                            </Link>

                        </div>

                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="relative">

                        {/* Main Card */}
                        <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-2xl">

                            {/* Top Label */}
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <p className="text-sm text-slate-400">
                                        Bharat Special Opportunity Fund
                                    </p>
                                    <h3 className="text-2xl font-bold mt-2">
                                        Special Situation Private Credit Fund
                                    </h3>
                                </div>

                                <div className="bg-green-500/10 border border-green-500/20 p-4 rounded-2xl">
                                    <Landmark className="text-green-400" size={28} />
                                </div>
                            </div>

                            {/* Opportunity Cards */}
                            <div className="space-y-5">

                                <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-5">
                                    <div className="bg-green-500/10 p-3 rounded-xl">
                                        <ShieldCheck className="text-green-400" size={22} />
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-lg">
                                            Stressed Credit Opportunities
                                        </h4>

                                        <p className="text-slate-400 text-sm mt-2 leading-6">
                                            Investing across distressed corporate debt,
                                            restructuring situations, and litigation-backed assets.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-5">
                                    <div className="bg-green-500/10 p-3 rounded-xl">
                                        <TrendingUp className="text-green-400" size={22} />
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-lg">
                                            High Yield Investment Strategy
                                        </h4>

                                        <p className="text-slate-400 text-sm mt-2 leading-6">
                                            Deep discount acquisitions combined with
                                            turnaround-focused value creation strategies.
                                        </p>
                                    </div>
                                </div>

                            </div>

                            {/* Bottom Stats */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">

                                <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/10 border border-green-500/20 rounded-2xl p-5">
                                    <p className="text-sm text-slate-300">
                                        Target Corpus
                                    </p>

                                    <h3 className="text-3xl font-bold mt-2">
                                        ₹1000 Cr
                                    </h3>
                                </div>

                                <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/10 border border-green-500/20 rounded-2xl p-5">
                                    <p className="text-sm text-slate-300">
                                        Investment Horizon
                                    </p>

                                    <h3 className="text-3xl font-bold mt-2">
                                        5+ Years
                                    </h3>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}