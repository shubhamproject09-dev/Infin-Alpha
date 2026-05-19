"use client";

import {
    ShieldCheck,
    Users,
    CheckCircle2,
    Landmark,
    Building2,
} from "lucide-react";

export default function LeadershipSection() {

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

                {/* GLOW */}
                <div className="absolute top-0 left-0 w-72 h-72 bg-green-500/20 blur-3xl rounded-full"></div>

                <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-400/10 blur-3xl rounded-full"></div>

                {/* PATTERN */}
                <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(white_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="max-w-5xl mx-auto text-center">

                        {/* BADGE */}
                        <div className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm font-medium text-green-300 backdrop-blur-md">

                            <ShieldCheck size={16} />

                            Leadership & Governance

                        </div>

                        {/* HEADING */}
                        <h1 className="mt-8 text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-white">

                            Experienced Leadership

                            <span className="block mt-2 text-green-400">

                                Institutional Vision

                            </span>

                        </h1>

                        {/* DESCRIPTION */}
                        <p className="mt-8 max-w-4xl mx-auto text-base sm:text-lg lg:text-xl leading-9 text-slate-300">

                            INFIN ALPHA LLP is led by professionals
                            with deep expertise across investment banking,
                            distressed assets,
                            restructuring,
                            legal-commercial negotiations,
                            and institutional investment management.

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

                    {/* MAIN WRAPPER */}
                    <div className="relative overflow-hidden rounded-[36px] sm:rounded-[42px] border border-slate-200 bg-white shadow-2xl">

                        {/* GLOW */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-green-500/10 blur-3xl rounded-full"></div>

                        {/* TOP SECTION */}
                        <div
                            className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-green-950 px-6 sm:px-10 lg:px-14"
                            style={{
                                paddingTop: "80px",
                                paddingBottom: "80px",
                            }}
                        >

                            {/* PATTERN */}
                            <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(white_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                            <div className="relative z-10 max-w-5xl">

                                {/* BADGE */}
                                <div className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm font-medium text-green-300 backdrop-blur-md">

                                    <Users size={16} />

                                    Executive Leadership

                                </div>

                                {/* HEADING */}
                                <h2 className="mt-8 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-[-0.04em] text-white">

                                    Experienced Leaders

                                    <span className="block mt-2 text-green-400">

                                        Driving Strategic Value

                                    </span>

                                </h2>

                                {/* DESCRIPTION */}
                                <p className="mt-8 max-w-4xl text-base sm:text-lg lg:text-xl leading-9 text-slate-300">

                                    INFIN ALPHA LLP leadership combines
                                    distressed asset expertise,
                                    restructuring-led execution,
                                    institutional relationships,
                                    and governance-focused investment discipline
                                    to unlock strategic opportunities across India’s evolving alternative investment ecosystem.

                                </p>

                            </div>

                        </div>

                        {/* CONTENT */}
                        <div className="relative z-10 p-5 sm:p-8 lg:p-12">

                            {/* LEADERSHIP GRID */}
                            <div className="grid lg:grid-cols-12 gap-6 items-start">

                                {/* LEFT BIG CARD */}
                                <div className="lg:col-span-6">

                                    <div className="group relative overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col">

                                        {/* IMAGE */}
                                        <div className="p-5 sm:p-6">

                                            <div
                                                className="relative overflow-hidden rounded-[36px] w-full"
                                                style={{
                                                    height: "420px",
                                                }}
                                            >

                                                <img
                                                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1600&auto=format&fit=crop"
                                                    alt="Aswini Sahoo"
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                />

                                                {/* OVERLAY */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                                            </div>

                                            {/* BADGE */}
                                            <div className="mt-4 ml-2">

                                                <div className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-50 px-5 py-2 text-sm font-semibold text-green-700">

                                                    Fund Manager - BSOF

                                                </div>

                                            </div>

                                        </div>

                                        {/* CONTENT */}
                                        <div className="px-6 pb-6 sm:px-8 sm:pb-8 flex flex-col flex-1">

                                            <h3 className="text-3xl sm:text-4xl font-bold text-green-600">

                                                Mr. Aswini Sahoo

                                            </h3>

                                            <p
                                                className="mt-6 text-sm sm:text-base leading-8"
                                                style={{ color: "#000000" }}
                                            >

                                                Mr. Aswini Sahoo, Fund Manager of BSOF,
                                                brings over 25 years of experience
                                                in private credit,
                                                special situations,
                                                and stressed asset investing.

                                            </p>

                                            <p
                                                className="mt-6 text-sm sm:text-base leading-8 flex-1"
                                                style={{ color: "#000000" }}
                                            >

                                                An IIM Bangalore alumnus and Gold Medalist
                                                from NIT Rourkela,
                                                he has held senior leadership roles
                                                including Chief Investment Officer at ARCL,
                                                and managed large AUM portfolios at Edelweiss,
                                                Samena Capital,
                                                and Clearwater Capital.

                                            </p>

                                            {/* TAGS */}
                                            <div className="mt-8 flex flex-wrap gap-3">

                                                {[
                                                    "Private Credit",
                                                    "Restructuring",
                                                    "Distressed Assets",
                                                    "Special Situations",
                                                ].map((item, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="rounded-full bg-green-50 border border-green-100 px-4 py-2 text-sm font-medium text-green-700"
                                                    >

                                                        {item}

                                                    </span>
                                                ))}

                                            </div>

                                        </div>

                                    </div>

                                </div>

                                {/* RIGHT SIDE */}
                                <div className="lg:col-span-6 flex flex-col gap-6 h-full">

                                    {/* MANISHA */}
                                    <div className="group relative overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col md:flex-row items-center">

                                        {/* IMAGE */}
                                        <div
                                            className="relative overflow-hidden flex-shrink-0"
                                            style={{
                                                width: "180px",
                                                height: "180px",
                                                minWidth: "180px",
                                                maxWidth: "180px",
                                                minHeight: "180px",
                                                maxHeight: "180px",
                                                borderTopLeftRadius: "36px",
                                                borderBottomLeftRadius: "36px",
                                            }}
                                        >

                                            <img
                                                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop"
                                                alt="Manisha Pathak"
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                                style={{
                                                    width: "180px",
                                                    height: "180px",
                                                    minWidth: "180px",
                                                    maxWidth: "180px",
                                                    minHeight: "180px",
                                                    maxHeight: "180px",
                                                }}
                                            />

                                            {/* OVERLAY */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                                        </div>

                                        {/* CONTENT */}
                                        <div className="flex-1 p-6 sm:p-8">

                                            <div className="inline-flex items-center gap-2 rounded-full border border-green-100 bg-green-50 px-4 py-2 text-xs font-semibold text-green-700">

                                                INFIN ALPHA LLP

                                            </div>

                                            <h3 className="mt-5 text-3xl font-bold text-green-600">

                                                Ms. Manisha Pathak

                                            </h3>

                                            <p
                                                className="mt-5 text-sm sm:text-base leading-8"
                                                style={{ color: "#000000" }}
                                            >

                                                Experienced professional supporting
                                                strategic investment initiatives,
                                                institutional coordination,
                                                governance,
                                                and operational leadership functions
                                                within INFIN ALPHA LLP.

                                            </p>

                                        </div>

                                    </div>

                                    {/* KARUNA */}
                                    <div className="group relative overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col md:flex-row items-center">

                                        {/* IMAGE */}
                                        <div
                                            className="relative overflow-hidden flex-shrink-0"
                                            style={{
                                                width: "180px",
                                                height: "180px",
                                                minWidth: "180px",
                                                maxWidth: "180px",
                                                minHeight: "180px",
                                                maxHeight: "180px",
                                                borderTopLeftRadius: "36px",
                                                borderBottomLeftRadius: "36px",
                                            }}
                                        >

                                            <img
                                                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1200&auto=format&fit=crop"
                                                alt="Karuna Sharma"
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                                style={{
                                                    width: "180px",
                                                    height: "180px",
                                                    minWidth: "180px",
                                                    maxWidth: "180px",
                                                    minHeight: "180px",
                                                    maxHeight: "180px",
                                                }}
                                            />

                                            {/* OVERLAY */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                                        </div>

                                        {/* CONTENT */}
                                        <div className="flex-1 p-6 sm:p-8">

                                            <div className="inline-flex items-center gap-2 rounded-full border border-green-100 bg-green-50 px-4 py-2 text-xs font-semibold text-green-700">

                                                INFIN ALPHA LLP

                                            </div>

                                            <h3 className="mt-5 text-3xl font-bold text-green-600">

                                                Ms. Karuna Sharma

                                            </h3>

                                            <p
                                                className="mt-5 text-sm sm:text-base leading-8"
                                                style={{ color: "#000000" }}
                                            >

                                                Leadership professional contributing
                                                towards investment operations,
                                                strategic coordination,
                                                institutional communication,
                                                and execution support across key initiatives.

                                            </p>

                                        </div>

                                    </div>

                                </div>

                            </div>

                            {/* IC SECTION */}
                            <div className="mt-8">

                                <div className="relative overflow-hidden rounded-[36px] bg-[#0b1120] p-6 sm:p-8 lg:p-10 text-white shadow-2xl">

                                    {/* GLOW */}
                                    <div className="absolute top-0 right-0 w-72 h-72 bg-green-500/20 blur-3xl rounded-full"></div>

                                    {/* PATTERN */}
                                    <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(white_1px,transparent_1px)] bg-[size:22px_22px]"></div>

                                    <div className="relative z-10 grid lg:grid-cols-12 gap-10 items-center">

                                        {/* LEFT */}
                                        <div className="lg:col-span-5">

                                            <div className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm font-semibold text-green-300">

                                                Investment Committee

                                            </div>

                                            <h3 className="mt-6 text-4xl sm:text-5xl font-bold leading-tight text-green-400">

                                                IC Composition
                                                & Governance

                                            </h3>

                                        </div>

                                        {/* RIGHT */}
                                        <div className="lg:col-span-7">

                                            <p className="text-white/80 text-base sm:text-lg leading-9" style={{ color: "#000000" }}>

                                                Investment Committee composition,
                                                institutional governance framework,
                                                strategic oversight,
                                                and committee credentials
                                                are currently under development (TBD & WIP).

                                            </p>

                                            {/* FEATURES */}
                                            <div className="mt-8 grid sm:grid-cols-2 gap-4" style={{ color: "#000000" }}>

                                                {[
                                                    "Institutional Governance",
                                                    "Investment Oversight",
                                                    "Risk Management",
                                                    "Strategic Execution",
                                                ].map((item, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
                                                    >

                                                        <CheckCircle2
                                                            className="text-green-400 shrink-0"
                                                            size={18}
                                                        />

                                                        <p className="text-sm sm:text-base text-white/90">

                                                            {item}

                                                        </p>

                                                    </div>
                                                ))}

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                            {/* STAKEHOLDERS */}
                            <div className="mt-16">

                                {/* HEADING */}
                                <div className="text-center">

                                    <div className="inline-flex items-center gap-2 rounded-full border border-green-100 bg-green-50 px-4 py-2 text-sm font-semibold text-green-700">

                                        <Landmark size={16} />

                                        Key Stakeholders

                                    </div>

                                    <h3 className="mt-6 text-4xl sm:text-5xl font-bold leading-tight">

                                        <span style={{ color: "#000000" }}>

                                            Strategic Ecosystem

                                        </span>

                                        <span className="block mt-2 text-green-600">

                                            Institutional Partners

                                        </span>

                                    </h3>

                                </div>

                                {/* GRID */}
                                <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

                                    {[
                                        {
                                            title: "Axis Bank Ltd.",
                                            subtitle: "Banking Partner",
                                        },
                                        {
                                            title: "EJ Legal",
                                            subtitle: "Legal Advisor",
                                        },
                                        {
                                            title: "Vistra",
                                            subtitle: "Trustee Services",
                                        },
                                        {
                                            title: "Axis Bank",
                                            subtitle: "Custodian",
                                        },
                                        {
                                            title: "CAMS",
                                            subtitle: "R & TA Agent",
                                        },
                                        {
                                            title: "CAMS",
                                            subtitle: "Fund Accounting & Administration",
                                        },
                                        {
                                            title: "MPCS",
                                            subtitle: "Tax & SEBI Advisory",
                                        },
                                        {
                                            title: "Auditor",
                                            subtitle: "TBD",
                                        },
                                    ].map((item, idx) => (
                                        <div
                                            key={idx}
                                            className="group rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl hover:border-green-300 transition-all duration-500"
                                        >

                                            {/* ICON */}
                                            <div className="w-14 h-14 rounded-2xl border-2 border-green-500 text-green-600 flex items-center justify-center bg-green-50">

                                                <Building2 size={24} />

                                            </div>

                                            {/* TITLE */}
                                            <h4 className="mt-6 text-2xl font-bold text-green-600 leading-tight">

                                                {item.title}

                                            </h4>

                                            {/* SUBTITLE */}
                                            <p
                                                className="mt-4 text-sm leading-7"
                                                style={{ color: "#000000" }}
                                            >

                                                {item.subtitle}

                                            </p>

                                        </div>
                                    ))}

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}