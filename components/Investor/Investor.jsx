// components/Investment/investor/Investor.tsx

"use client";

import {
    ShieldCheck,
    Lock,
    TrendingUp,
    Landmark,
    Building2,
    CheckCircle2,
    ArrowUpRight,
    Wallet,
    Briefcase,
    FileCheck2,
    Users,
    PhoneCall,
} from "lucide-react";
import Link from "next/link";

const investorCards = [
    {
        title: "Secure Investor Verification",
        desc: "Appropriate investor verification mechanisms with institutional onboarding standards.",
        icon: ShieldCheck,
    },
    {
        title: "Secure Handling of Information",
        desc: "Confidential investor information handling through structured compliance workflows.",
        icon: Lock,
    },
    {
        title: "Qualified Investor Access",
        desc: "Dedicated communication pathways for institutional and qualified investors.",
        icon: Users,
    },
];

const processFlow = [
    {
        title: "Investor Interaction",
        desc: "Qualified investors connect with authorized INFIN Alpha representatives.",
        icon: PhoneCall,
    },
    {
        title: "Verification Process",
        desc: "KYC, compliance and investor onboarding verification mechanisms.",
        icon: FileCheck2,
    },
    {
        title: "CAMS Coordination",
        desc: "CAMS handles fund administration and investor servicing processes.",
        icon: Building2,
    },
    {
        title: "Investment Participation",
        desc: "Participation across stressed credit and special situation opportunities.",
        icon: TrendingUp,
    },
];

export default function Investor() {
    return (
        <section className="relative overflow-hidden bg-white">

            {/* HERO SECTION */}
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

                        <div className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm font-medium text-green-300 backdrop-blur-md">

                            <ShieldCheck size={16} />

                            Secure Investor Access

                        </div>

                        <h1 className="mt-8 text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-white">

                            Investor
                            <span className="block mt-2 text-green-400">
                                Access & Engagement
                            </span>

                        </h1>

                        <p className="mt-8 max-w-4xl mx-auto text-base sm:text-lg lg:text-xl leading-9 text-slate-300">

                            Structured investor onboarding,
                            secure communication pathways,
                            institutional servicing standards,
                            and regulated investor engagement
                            framework for qualified investors.

                        </p>

                    </div>

                </div>

            </div>

            {/* MAIN SECTION */}
            <div
                className="relative z-10 pb-20 sm:pb-24"
                style={{ marginTop: "80px" }}
            >

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="relative overflow-hidden rounded-[36px] sm:rounded-[42px] border border-slate-200 bg-white shadow-2xl">

                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-green-500/10 blur-3xl rounded-full"></div>

                        {/* TOP SECTION */}
                        <div
                            className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-green-950 px-6 sm:px-10 lg:px-14"
                            style={{
                                paddingTop: "80px",
                                paddingBottom: "80px",
                            }}
                        >

                            <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(white_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                            <div className="relative z-10 max-w-5xl">

                                <div className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm font-medium text-green-300 backdrop-blur-md">

                                    <Wallet size={16} />

                                    Investor Infrastructure

                                </div>

                                <h2 className="mt-8 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-[-0.04em] text-white">

                                    Institutional-grade
                                    <span className="block mt-2 text-green-400">
                                        Investor Servicing
                                    </span>

                                </h2>

                                <p className="mt-8 max-w-4xl text-base sm:text-lg lg:text-xl leading-9 text-slate-300">

                                    INFIN Alpha LLP follows
                                    structured investor engagement processes,
                                    secure handling of investor information,
                                    and robust verification standards
                                    aligned with institutional investment practices.

                                </p>

                            </div>

                        </div>

                        {/* INVESTOR CARDS */}
                        <div className="relative z-10 p-5 sm:p-8 lg:p-12">

                            <div
                                className="gap-6"
                                style={{
                                    display: "grid",
                                    gridTemplateColumns:
                                        "repeat(auto-fit, minmax(320px, 1fr))",
                                }}
                            >

                                {investorCards.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="group rounded-[36px] border border-slate-200 bg-white p-8 shadow-xl hover:shadow-2xl hover:border-green-300 transition-all duration-500 h-full"
                                    >

                                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white shadow-lg shadow-green-500/20">

                                            <item.icon size={28} />

                                        </div>

                                        <h3 className="mt-8 text-2xl font-bold text-green-600 leading-tight">

                                            {item.title}

                                        </h3>

                                        <p
                                            className="mt-6 text-sm sm:text-base leading-8"
                                            style={{ color: "#000000" }}
                                        >

                                            {item.desc}

                                        </p>

                                        <Link
                                            href={
                                                idx === 0
                                                    ? "/investor/verification"
                                                    : idx === 1
                                                        ? "/investor/information-security"
                                                        : "/investor/qualified-access"
                                            }
                                            className="mt-10 inline-flex items-center gap-2 rounded-2xl bg-green-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-green-700"
                                        >

                                            Explore More

                                            <ArrowUpRight size={18} />

                                        </Link>

                                    </div>
                                ))}

                            </div>

                            {/* PROCESS FLOW */}
                            <div className="mt-12">

                                <div className="relative overflow-hidden rounded-[36px] bg-[#0b1120] p-6 sm:p-8 lg:p-10 text-white shadow-2xl">

                                    <div className="absolute top-0 right-0 w-72 h-72 bg-green-500/20 blur-3xl rounded-full"></div>

                                    <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(white_1px,transparent_1px)] bg-[size:22px_22px]"></div>

                                    <div className="relative z-10">

                                        <div className="text-center">

                                            <div className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm font-semibold text-green-300">

                                                Investor Process

                                            </div>

                                            <h3 className="mt-6 text-4xl sm:text-5xl font-bold leading-tight text-green-400">

                                                Investor Engagement
                                                Workflow

                                            </h3>

                                        </div>

                                        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                                            {processFlow.map((item, idx) => (
                                                <div
                                                    key={idx}
                                                    className="rounded-[28px] border border-white/10 bg-white/5 p-6"
                                                >

                                                    <div className="w-14 h-14 rounded-2xl bg-green-500/20 flex items-center justify-center text-green-400">

                                                        <item.icon size={24} />

                                                    </div>

                                                    <h4 className="mt-6 text-2xl font-bold text-white leading-tight" style={{ color: "#000000" }}>

                                                        {item.title}

                                                    </h4>

                                                    <p className="mt-4 text-sm leading-7 text-white/80" style={{ color: "#000000" }}>

                                                        {item.desc}

                                                    </p>

                                                </div>
                                            ))}

                                        </div>

                                    </div>

                                </div>

                            </div>

                            {/* WHY INVESTORS TRUST */}
                            <div className="mt-16">

                                <div className="text-center">

                                    <div className="inline-flex items-center gap-2 rounded-full border border-green-100 bg-green-50 px-4 py-2 text-sm font-semibold text-green-700">

                                        <Landmark size={16} />

                                        Why Investors Trust Us

                                    </div>

                                    <h3 className="mt-6 text-4xl sm:text-5xl font-bold leading-tight">

                                        <span style={{ color: "#000000" }}>
                                            Trusted Institutional
                                        </span>

                                        <span className="block mt-2 text-green-600">
                                            Investment Framework
                                        </span>

                                    </h3>

                                </div>

                                <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

                                    {[
                                        "Secure investor verification mechanisms",
                                        "Institutional-grade onboarding standards",
                                        "Experienced special situations team",
                                        "Structured investor communication process",
                                        "Transparent engagement framework",
                                        "Strong compliance & governance standards",
                                    ].map((item, idx) => (
                                        <div
                                            key={idx}
                                            className="group rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl hover:border-green-300 transition-all duration-500"
                                        >

                                            <div className="w-14 h-14 rounded-2xl border-2 border-green-500 text-green-600 flex items-center justify-center bg-green-50">

                                                <CheckCircle2 size={24} />

                                            </div>

                                            <h4 className="mt-6 text-2xl font-bold text-green-600 leading-tight">

                                                {item}

                                            </h4>

                                            <p
                                                className="mt-4 text-sm leading-7"
                                                style={{ color: "#000000" }}
                                            >

                                                Structured operational and
                                                institutional investment framework
                                                designed for qualified investors.

                                            </p>

                                        </div>
                                    ))}

                                </div>

                            </div>

                            {/* DISCLAIMER */}
                            <div className="mt-16">

                                <div className="rounded-[36px] border border-green-100 bg-green-50 p-8 sm:p-10">

                                    <div className="flex items-start gap-4">

                                        <Briefcase
                                            className="text-green-600 shrink-0 mt-1"
                                            size={28}
                                        />

                                        <div>

                                            <h3 className="text-3xl font-bold text-green-700">

                                                Investor Notice

                                            </h3>

                                            <p
                                                className="mt-6 text-sm sm:text-base leading-8"
                                                style={{ color: "#000000" }}
                                            >

                                                Clear disclaimers and disclosures
                                                related to investment participation,
                                                fund structures,
                                                investor onboarding,
                                                and regulatory compliance
                                                shall be incorporated in accordance
                                                with applicable legal and regulatory standards.

                                            </p>

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