"use client";

import {
    Scale,
    TrendingUp,
    CheckCircle2,
    Landmark,
    ShieldCheck,
} from "lucide-react";

export default function ResolutionValuePage() {
    return (
        <section className="bg-white">

            {/* HERO */}
            <div
                className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-green-950"
                style={{
                    paddingTop: "140px",
                    paddingBottom: "140px",
                }}
            >

                <div className="absolute top-0 left-0 w-72 h-72 bg-green-500/20 blur-3xl rounded-full"></div>

                <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-400/10 blur-3xl rounded-full"></div>

                <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(white_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="max-w-5xl mx-auto text-center">

                        <div className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm font-medium text-green-300">

                            <Scale size={16} />

                            Resolution Strategy

                        </div>

                        <h1 className="mt-8 text-3xl sm:text-3xl lg:text-5xl font-bold leading-[1.05] tracking-tight text-white">

                            Resolution-led
                            <span className="block mt-2 text-green-400">
                                Value Creation
                            </span>

                        </h1>

                        <p className="mt-8 max-w-4xl mx-auto text-base sm:text-lg lg:text-xl leading-9 text-slate-300">

                            Unlocking enterprise value through
                            restructuring frameworks,
                            turnaround execution,
                            institutional coordination,
                            and strategic recovery-led investment approaches.

                        </p>

                    </div>

                </div>

            </div>

            {/* CONTENT */}
            <div className="py-24">

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* TOP CARDS */}
                    <div className="grid lg:grid-cols-3 gap-6">

                        {[
                            {
                                title: "Operational Turnaround",
                                desc: "Business stabilization and restructuring support across stressed enterprises.",
                                icon: TrendingUp,
                            },
                            {
                                title: "IBC-led Resolution",
                                desc: "Institutional frameworks supporting structured recovery and value unlocking.",
                                icon: Landmark,
                            },
                            {
                                title: "Strategic Execution",
                                desc: "Disciplined investment execution focused on recovery-oriented outcomes.",
                                icon: ShieldCheck,
                            },
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-500"
                            >

                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 text-white flex items-center justify-center">

                                    <item.icon size={28} />

                                </div>

                                <h3 className="mt-8 text-3xl font-bold text-green-700">

                                    {item.title}

                                </h3>

                                <p className="mt-6 text-base leading-9 text-slate-700" style={{ color: "#000000" }}>

                                    {item.desc}

                                </p>

                            </div>
                        ))}

                    </div>

                    {/* PROCESS */}
                    <div className="mt-20 rounded-[36px] px-5 py-8 sm:p-8 lg:p-10 text-white">

                        <div className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm text-green-700">

                            Resolution Workflow

                        </div>

                        <h2 className="mt-6 text-4xl font-bold text-green-400">

                            Institutional Turnaround Process

                        </h2>

                        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6" style={{ marginTop: "50px" }}>

                            {[
                                "Asset Evaluation",
                                "Resolution Planning",
                                "Operational Execution",
                                "Strategic Recovery",
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    className="group relative overflow-hidden rounded-[30px] border-2 border-green-500/30 bg-gradient-to-br from-white/[0.08] to-white/[0.03] backdrop-blur-xl p-7"
                                >

                                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-green-400 via-emerald-500 to-transparent"></div>

                                    <CheckCircle2
                                        className="text-green-400"
                                        size={28}
                                    />

                                    <h3 className="mt-6 text-2xl font-bold text-white leading-tight" style={{ color: "#000000" }}>

                                        {item}

                                    </h3>

                                </div>
                            ))}

                        </div>

                    </div>

                    {/* BOTTOM */}
                    <div className="mt-20 grid lg:grid-cols-2 gap-8">

                        <div className="rounded-[36px] border border-slate-200 p-8 shadow-sm">

                            <Scale
                                className="text-green-600"
                                size={36}
                            />

                            <h3 className="mt-6 text-3xl font-bold text-green-700">

                                Structured Resolution

                            </h3>

                            <p className="mt-6 text-base leading-9 text-slate-700" style={{ color: "#000000" }}>

                                Coordinated restructuring and turnaround
                                strategies designed for complex
                                stressed and special situation opportunities.

                            </p>

                        </div>

                        <div className="rounded-[36px] border border-slate-200 p-8 shadow-sm">

                            <TrendingUp
                                className="text-green-600"
                                size={36}
                            />

                            <h3 className="mt-6 text-3xl font-bold text-green-700">

                                Recovery-focused Outcomes

                            </h3>

                            <p className="mt-6 text-base leading-9 text-slate-700" style={{ color: "#000000" }}>

                                Institutional execution frameworks focused
                                on value recovery,
                                strategic exits,
                                and long-term enterprise stabilization.

                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}