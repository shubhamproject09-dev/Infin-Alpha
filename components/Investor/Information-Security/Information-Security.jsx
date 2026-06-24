"use client";

import {
    Lock,
    ShieldCheck,
    FileCheck2,
    CheckCircle2,
    Landmark,
} from "lucide-react";

export default function InformationSecurityPage() {
    return (
        <section className="bg-white">

            {/* HERO */}
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

                        <div className="inline-flex items-center gap-2 rounded-full border border-[#EAF9FA]0/20 bg-[#EAF9FA]0/10 px-4 py-2 text-sm font-medium text-[#7ACED4]">

                            <Lock size={16} />

                            Institutional Confidentiality Standards

                        </div>

                        <h1 className="mt-8 text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.05] tracking-tight text-white">

                            Secure Handling
                            <span className="block mt-2 text-[#7ACED4]">
                                of Information
                            </span>

                        </h1>

                        <p className="mt-8 max-w-4xl mx-auto text-base sm:text-lg lg:text-xl leading-9 text-slate-300">

                            INFIN Alpha LLP follows structured internal
                            processes for secure handling of investor,
                            operational, and transaction-related information
                            aligned with institutional servicing standards.

                        </p>

                    </div>

                </div>

            </div>

            {/* CONTENT */}
            <div className="py-24">

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="grid lg:grid-cols-3 gap-6">

                        {[
                            {
                                title: "Confidential Investor Records",
                                desc: "Structured workflows for handling investor documentation, onboarding records, and communication processes.",
                                icon: FileCheck2,
                            },
                            {
                                title: "Operational Data Security",
                                desc: "Institutional operational discipline across internal processes and investment-related information handling.",
                                icon: ShieldCheck,
                            },
                            {
                                title: "Compliance-focused Framework",
                                desc: "Internal review standards and compliance-oriented communication mechanisms for investor servicing.",
                                icon: Lock,
                            },
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="rounded-[32px] border border-slate-200 p-8 shadow-sm hover:shadow-xl transition-all duration-500"
                            >

                                <div className="w-16 h-16 rounded-2xl bg-[#D5F3F5] text-[#00314A] flex items-center justify-center">

                                    <item.icon size={28} />

                                </div>

                                <h3 className="mt-8 text-2xl font-bold text-[#00314A]">

                                    {item.title}

                                </h3>

                                <p className="mt-6 text-base leading-8 text-slate-700">

                                    {item.desc}

                                </p>

                            </div>
                        ))}

                    </div>

                    {/* SECURITY PROCESS */}
                    <div className="mt-20 rounded-[36px] px-5 py-8 sm:p-8 lg:p-10 text-white">

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 rounded-full border border-[#EAF9FA]0/20 bg-[#EAF9FA]0/10 px-4 py-2 text-sm font-medium text-[#00314A]">

                            <Landmark size={16} />

                            Information Governance

                        </div>

                        {/* Heading */}
                        <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-[#00314A]">

                            Structured Information Workflow

                        </h2>

                        {/* Cards */}
                        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6" style={{ marginTop: "50px" }}>

                            {[
                                {
                                    step: "01",
                                    title: "Secure Collection",
                                    desc: "Protected collection and handling of investor and operational information.",
                                },
                                {
                                    step: "02",
                                    title: "Internal Verification",
                                    desc: "Structured internal validation and institutional review workflows.",
                                },
                                {
                                    step: "03",
                                    title: "Compliance Review",
                                    desc: "Compliance-focused review processes aligned with governance standards.",
                                },
                                {
                                    step: "04",
                                    title: "Protected Communication",
                                    desc: "Secure communication practices across investor servicing activities.",
                                },
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    className="group relative overflow-hidden rounded-[30px] border-2 border-[#EAF9FA]0/30 bg-gradient-to-br from-white/[0.08] to-white/[0.03] backdrop-blur-xl p-7 transition-all duration-500 rounded-[32px] border border-slate-200"
                                >

                                    {/* Top Gradient Border */}
                                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#7ACED4] via-emerald-500 to-transparent"></div>

                                    {/* Glow */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#EAF9FA]0/10 blur-3xl rounded-full"></div>

                                    {/* Top */}
                                    <div className="relative z-10 flex items-center justify-between">

                                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#009A9E] to-[#00314A] text-white flex items-center justify-center shadow-lg shadow-[#EAF9FA]0/20 font-bold text-lg">

                                            {item.step}

                                        </div>

                                        <CheckCircle2
                                            className="text-[#7ACED4]"
                                            size={24}
                                        />

                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10">

                                        <h3 className="mt-6 text-3xl sm:text-3xl lg:text-3xl font-bold leading-tight text-[#00314A]">

                                            {item.title}

                                        </h3>

                                        <p className="mt-5 text-sm sm:text-base leading-8 text-slate-600">

                                            {item.desc}

                                        </p>

                                    </div>

                                </div>
                            ))}

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}