"use client";

import Link from "next/link";
import {
    ArrowUpRight,
    ShieldCheck,
    TrendingUp,
} from "lucide-react";

export default function CTASection() {

    return (
        <section className="relative overflow-hidden pb-20 bg-white">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* MAIN BOX */}
                <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-[#00314A] via-[#0A3635] to-[#00314A] p-8 sm:p-10 lg:p-16">

                    {/* Background Glow */}
                    <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#009A9E]/20 blur-3xl rounded-full"></div>

                    <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#7ACED4]/10 blur-3xl rounded-full"></div>

                    <div className="relative z-10 grid lg:grid-cols-12 gap-12 items-center">

                        {/* LEFT SIDE */}
                        <div className="lg:col-span-6">

                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 rounded-full border border-[#009A9E]/20 bg-[#009A9E]/10 px-4 py-2 text-sm font-medium text-[#7ACED4] backdrop-blur-md">

                                Strategic Investment Opportunities

                            </div>

                            {/* Heading */}
                            <h2 className="mt-8 text-3xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">

                                Partner with INFIN Alpha
                                to Access India’s Next
                                Generation of Special
                                Situation Investments

                            </h2>

                            {/* Paragraph */}
                            <p className="mt-8 text-base sm:text-lg leading-8 text-slate-300 max-w-3xl">

                                We focus on differentiated opportunities across
                                distressed credit, restructuring, and strategic
                                turnaround situations with institutional discipline,
                                downside protection, and long-term value creation.

                            </p>

                            {/* CTA BUTTONS */}
                            <div className="mt-10 flex flex-col sm:flex-row gap-4">

                                {/* Investment Philosophy */}
                                <Link
                                    href="/investment/philosophy"
                                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#009A9E] px-6 py-4 text-white font-semibold hover:bg-[#00314A] transition-all duration-300"
                                >

                                    Investment Philosophy

                                    <ArrowUpRight size={18} />

                                </Link>

                                {/* Case Studies */}
                                <Link
                                    href="/investment/caseStudy"
                                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-white font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-xl"
                                >

                                    Case Studies

                                </Link>

                            </div>

                        </div>

                        {/* RIGHT SIDE */}
                        <div className="lg:col-span-6">

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                                {/* CARD 1 */}
                                <div className="rounded-[28px] border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6">

                                    <div className="w-12 h-12 rounded-2xl bg-[#009A9E]/10 border border-[#009A9E]/20 text-[#7ACED4] flex items-center justify-center">

                                        <TrendingUp size={22} />

                                    </div>

                                    <h3 className="mt-6 text-2xl font-bold text-white">

                                        18–20%

                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-slate-300">

                                        Target IRR opportunities across special situations.

                                    </p>

                                </div>

                                {/* CARD 2 */}
                                <div className="rounded-[28px] border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6">

                                    <div className="w-12 h-12 rounded-2xl bg-[#009A9E]/10 border border-[#009A9E]/20 text-[#7ACED4] flex items-center justify-center">

                                        <ShieldCheck size={22} />

                                    </div>

                                    <h3 className="mt-6 text-2xl font-bold text-white">

                                        Risk Managed

                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-slate-300">

                                        Institutional discipline with downside protection focus.

                                    </p>

                                </div>

                                {/* LARGE CARD */}
                                <div className="sm:col-span-2 rounded-[32px] border border-[#009A9E]/20 border-[#009A9E]/20
bg-gradient-to-r from-[#009A9E]/10 to-[#7ACED4]/10 p-7">

                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">

                                        <div>

                                            <p className="text-sm font-medium text-[#7ACED4]">

                                                Bharat Special Opportunity Fund

                                            </p>

                                            <h3 className="mt-3 text-2xl sm:text-3xl font-bold text-white leading-snug">

                                                Focused on High-Conviction
                                                Distressed & Special Situation Investments

                                            </h3>

                                        </div>

                                        <div className="w-16 h-16 rounded-full bg-[#009A9E] text-white flex items-center justify-center flex-shrink-0">

                                            <ArrowUpRight size={28} />

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