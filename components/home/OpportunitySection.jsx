"use client";

import {
    Landmark,
    Building2,
    Scale,
    BriefcaseBusiness,
} from "lucide-react";

export default function OpportunitySection() {

    const opportunities = [
        {
            icon: <Landmark size={28} />,
            title: "Distressed Corporate Loans",
            description:
                "Large pools of stressed and written-off corporate debt creating deep discount acquisition opportunities.",
        },

        {
            icon: <Building2 size={28} />,
            title: "Stalled Projects",
            description:
                "Infrastructure, manufacturing, and real estate projects awaiting capital infusion and operational revival.",
        },

        {
            icon: <Scale size={28} />,
            title: "Litigation-Locked Assets",
            description:
                "High-value assets trapped in legal or restructuring processes with significant turnaround potential.",
        },

        {
            icon: <BriefcaseBusiness size={28} />,
            title: "Special Situation Opportunities",
            description:
                "Complex restructuring, promoter financing, and strategic dislocation opportunities across sectors.",
        },
    ];

    return (
        <section className="relative bg-white py-20 lg:py-28 overflow-hidden">

            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-green-100 blur-3xl rounded-full opacity-40"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Section Header */}
                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* LEFT SIDE */}
                    <div>

                        <span className="inline-flex items-center px-4 py-2 rounded-full bg-green-50 text-green-700 text-sm font-semibold border border-green-100">
                            India’s Emerging Opportunity
                        </span>

                        <h2 className="mt-6 text-3xl lg:text-5xl font-bold text-slate-900 leading-tight">

                            Reimagining Potential Across
                            <span className="block text-green-600 mt-2">
                                India’s ₹8–12 Lakh Crore
                            </span>

                            Special Situations Market

                        </h2>

                    </div>

                    {/* RIGHT SIDE */}
                    <div className="lg:pt-16">

                        <p className="text-lg leading-9 text-slate-600">

                            India’s stressed and special situations ecosystem represents
                            one of the largest untapped investment landscapes, spanning
                            distressed corporate loans, stalled infrastructure projects,
                            litigation-backed real estate, and complex restructuring opportunities.

                        </p>

                        <div className="mt-8 flex flex-wrap gap-6">

                            <div>
                                <h3 className="text-3xl font-bold text-slate-900">
                                    ₹15L+
                                </h3>

                                <p className="text-sm text-slate-500 mt-2">
                                    Written-off loans in the past decade
                                </p>
                            </div>

                            <div className="w-px bg-slate-200 hidden sm:block"></div>

                            <div>
                                <h3 className="text-3xl font-bold text-slate-900">
                                    90%
                                </h3>

                                <p className="text-sm text-slate-500 mt-2">
                                    Market remains fragmented
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

                {/* Opportunity Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-16">

                    {opportunities.map((item, index) => (

                        <div
                            key={index}
                            className="group relative bg-white border border-slate-200 rounded-3xl p-7 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                        >

                            {/* Gradient Glow */}
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-green-500/0 to-green-500/0 group-hover:from-green-500/5 group-hover:to-emerald-500/10 transition-all duration-500"></div>

                            {/* Icon */}
                            <div className="relative w-14 h-14 rounded-2xl bg-green-50 border border-green-100 flex items-center justify-center text-green-600 group-hover:scale-110 transition duration-300">

                                {item.icon}

                            </div>

                            {/* Title */}
                            <h3 className="relative mt-6 text-xl font-bold text-slate-900 leading-snug">

                                {item.title}

                            </h3>

                            {/* Description */}
                            <p className="relative mt-4 text-slate-600 leading-7 text-sm">

                                {item.description}

                            </p>

                        </div>

                    ))}

                </div>

                {/* Bottom Highlight Section */}
                <div className="mt-20 rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900 to-green-950 p-8 lg:p-12 overflow-hidden relative">

                    {/* Glow */}
                    <div className="absolute top-0 right-0 w-72 h-72 bg-green-500/20 blur-3xl rounded-full"></div>

                    <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">

                        {/* Left */}
                        <div>

                            <span className="inline-block px-4 py-2 rounded-full bg-green-500/10 text-green-300 border border-green-500/20 text-sm font-medium">
                                Why This Matters
                            </span>

                            <h3 className="mt-6 text-3xl lg:text-4  xl font-bold text-white leading-tight">

                                Traditional Institutions
                                Cannot Fully Address
                                This Market Opportunity

                            </h3>

                        </div>

                        {/* Right */}
                        <div className="space-y-5">

                            <div className="flex gap-4">

                                <div className="w-3 h-3 rounded-full bg-green-400 mt-2"></div>

                                <p className="text-slate-300 leading-7">
                                    Most stressed assets require deep legal,
                                    financial, and operational expertise that
                                    traditional lenders cannot scale efficiently.
                                </p>

                            </div>

                            <div className="flex gap-4">

                                <div className="w-3 h-3 rounded-full bg-green-400 mt-2"></div>

                                <p className="text-slate-300 leading-7">
                                    Specialized AIF structures provide patient
                                    capital and flexible resolution frameworks
                                    for complex opportunities.
                                </p>

                            </div>

                            <div className="flex gap-4">

                                <div className="w-3 h-3 rounded-full bg-green-400 mt-2"></div>

                                <p className="text-slate-300 leading-7">
                                    INFIN Alpha focuses on identifying scalable
                                    turnaround opportunities with strong
                                    downside protection and high-yield potential.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}