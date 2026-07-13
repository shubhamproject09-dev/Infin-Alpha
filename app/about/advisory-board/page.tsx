"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function AdvisoryBoard() {
    return (
        <section className="relative overflow-hidden bg-white">

            {/* Background Glow */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#009A9E]/10 blur-[120px]" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00314A]/10 blur-[120px]" />

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT CONTENT */}

                    <div>

                        <span className="inline-flex items-center rounded-full bg-[#EAF9FA] text-[#009A9E] px-5 py-2 text-sm font-semibold">
                            Advisory Board
                        </span>

                        <h1 className="mt-8 text-5xl lg:text-7xl font-black leading-tight text-[#00314A]">
                            Guiding
                            <br />

                            <span className="text-[#009A9E]">
                                Strategic Growth
                            </span>

                        </h1>

                        <p className="mt-8 text-lg leading-9 text-gray-600 max-w-xl">

                            Our Advisory Board brings together accomplished
                            leaders, industry experts, and visionary thinkers
                            committed to guiding INFIN ALPHA with strategic
                            insights, governance excellence, and long-term
                            value creation.

                        </p>

                        <div className="flex gap-5 mt-10">

                            <button className="px-7 py-4 rounded-xl bg-[#009A9E] hover:bg-[#00314A] duration-300 text-white font-semibold flex items-center gap-2 shadow-xl">

                                Meet Our Advisors

                                <ArrowRight size={18} />

                            </button>

                            <button className="px-7 py-4 rounded-xl border border-[#009A9E] text-[#009A9E] hover:bg-[#009A9E] hover:text-white duration-300 font-semibold">

                                Learn More

                            </button>

                        </div>

                    </div>

                    {/* RIGHT IMAGE */}

                    <div className="relative">

                        {/* Main Card */}

                        <div className="rounded-[35px] overflow-hidden shadow-2xl">

                            <img
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
                                alt="Advisory Board"
                                className="w-full h-[650px] object-cover"
                            />

                        </div>

                        {/* Floating Card */}

                        <div className="absolute -bottom-8 -left-8 bg-white rounded-3xl shadow-2xl p-6 border border-[#EAF9FA]">

                            <h3 className="text-4xl font-black text-[#009A9E]">
                                30+
                            </h3>

                            <p className="text-gray-600 mt-1">
                                Industry Leaders
                            </p>

                        </div>

                        {/* Floating Card */}

                        <div className="absolute top-10 -right-8 bg-[#00314A] text-white rounded-3xl shadow-2xl p-6">

                            <h3 className="text-4xl font-black">
                                100+
                            </h3>

                            <p className="mt-1 text-gray-300">
                                Years Combined Experience
                            </p>

                        </div>

                    </div>

                </div>

            </div>

            {/* ================= ABOUT ADVISORY BOARD ================= */}

            <section className="py-24 bg-[#F8FCFC]">

                <div className="max-w-7xl mx-auto px-6 lg:px-8">

                    <div className="grid lg:grid-cols-2 gap-20 items-center">

                        {/* LEFT */}

                        <div>

                            <img
                                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900"
                                alt=""
                                className="rounded-[35px] shadow-2xl w-full h-[650px] object-cover"
                            />

                        </div>

                        {/* RIGHT */}

                        <div>

                            <span className="bg-[#EAF9FA] text-[#009A9E] px-5 py-2 rounded-full font-semibold">

                                About Board

                            </span>

                            <h2 className="text-5xl font-black text-[#00314A] mt-8">

                                Experience that Drives
                                <br />

                                <span className="text-[#009A9E]">
                                    Smarter Decisions
                                </span>

                            </h2>

                            <p className="mt-8 text-lg text-gray-600 leading-9">

                                Our Advisory Board consists of accomplished leaders,
                                financial experts, entrepreneurs and industry veterans
                                committed to delivering long-term value creation and
                                strategic excellence.

                            </p>

                            <div className="grid grid-cols-2 gap-6 mt-10">

                                <div className="bg-white rounded-3xl p-6 shadow-lg">

                                    <h3 className="text-3xl font-black text-[#009A9E]">

                                        25+

                                    </h3>

                                    <p className="mt-2 text-gray-600">

                                        Global Advisors

                                    </p>

                                </div>

                                <div className="bg-white rounded-3xl p-6 shadow-lg">

                                    <h3 className="text-3xl font-black text-[#009A9E]">

                                        40+

                                    </h3>

                                    <p className="mt-2 text-gray-600">

                                        Years Experience

                                    </p>

                                </div>

                                <div className="bg-white rounded-3xl p-6 shadow-lg">

                                    <h3 className="text-3xl font-black text-[#009A9E]">

                                        12+

                                    </h3>

                                    <p className="mt-2 text-gray-600">

                                        Countries

                                    </p>

                                </div>

                                <div className="bg-white rounded-3xl p-6 shadow-lg">

                                    <h3 className="text-3xl font-black text-[#009A9E]">

                                        100%

                                    </h3>

                                    <p className="mt-2 text-gray-600">

                                        Transparency

                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </section>
    );
}