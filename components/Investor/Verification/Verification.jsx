"use client";

import {
    ShieldCheck,
    FileCheck2,
    CheckCircle2,
    Lock,
    Landmark,
} from "lucide-react";

export default function InvestorVerificationPage() {
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

                {/* Glow */}
                <div className="absolute top-0 left-0 w-72 h-72 bg-[#EAF9FA]0/20 blur-3xl rounded-full"></div>

                <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#7ACED4]/10 blur-3xl rounded-full"></div>

                {/* Pattern */}
                <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(white_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="max-w-5xl mx-auto text-center">

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 rounded-full border border-[#EAF9FA]0/20 bg-[#EAF9FA]0/10 px-4 py-2 text-sm font-medium text-[#7ACED4] backdrop-blur-md">

                            <ShieldCheck size={16} />

                            Investor Protection Framework

                        </div>

                        {/* Heading */}
                        <h1 className="mt-8 text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.05] tracking-tight text-white">

                            Secure Investor
                            <span className="block mt-2 text-[#7ACED4]">
                                Verification
                            </span>

                        </h1>

                        {/* Paragraph */}
                        <p className="mt-8 max-w-4xl mx-auto text-base sm:text-lg lg:text-xl leading-9 text-slate-300">

                            INFIN Alpha LLP follows a structured investor
                            onboarding and verification framework aligned
                            with institutional standards, compliance protocols,
                            and regulatory requirements for qualified investors.

                        </p>

                    </div>

                </div>

            </div>

            {/* CONTENT */}
            <div className="py-24">

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="grid lg:grid-cols-2 gap-10">

                        {/* CARD */}
                        <div className="rounded-[32px] border border-slate-200 p-8 shadow-sm">

                            <div className="w-16 h-16 rounded-2xl bg-[#D5F3F5] text-[#00314A] flex items-center justify-center">

                                <FileCheck2 size={30} />

                            </div>

                            <h2 className="mt-8 text-3xl font-bold text-black">

                                Institutional Onboarding Standards

                            </h2>

                            <p className="mt-6 text-lg leading-8 text-slate-700">

                                Structured KYC verification,
                                investor suitability assessment,
                                documentation review,
                                and compliance workflows
                                designed for institutional and qualified investors.

                            </p>

                        </div>

                        {/* CARD */}
                        <div className="rounded-[32px] border border-slate-200 p-8 shadow-sm">

                            <div className="w-16 h-16 rounded-2xl bg-[#D5F3F5] text-[#00314A] flex items-center justify-center">

                                <Lock size={30} />

                            </div>

                            <h2 className="mt-8 text-3xl font-bold text-black">

                                Confidential Information Handling

                            </h2>

                            <p className="mt-6 text-lg leading-8 text-slate-700">

                                Investor information is managed through
                                structured internal processes with emphasis
                                on confidentiality, operational discipline,
                                and secure communication practices.

                            </p>

                        </div>

                    </div>

                    {/* PROCESS */}
                    <div className="mt-20 rounded-[36px] p-10 text-white">

                        <div className="inline-flex items-center gap-2 rounded-full border border-[#EAF9FA]0/20 bg-[#EAF9FA]0/10 px-4 py-2 text-sm text-[#00314A]">

                            <Landmark size={16} />

                            Verification Workflow

                        </div>

                        <h2 className="mt-6 text-4xl font-bold text-[#7ACED4]">

                            Investor Verification Process

                        </h2>

                        <div className="mt-12 grid md:grid-cols-3 gap-6">

                            {[
                                "Initial Investor Interaction",
                                "KYC & Compliance Review",
                                "Secure Onboarding Confirmation",
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    className="rounded-3xl border border-white/10 bg-white/5 p-6"
                                >

                                    <CheckCircle2
                                        className="text-[#009A9E]"
                                        size={28}
                                    />

                                    <h3 className="mt-5 text-2xl font-bold text-black">

                                        {item}

                                    </h3>

                                </div>
                            ))}

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}