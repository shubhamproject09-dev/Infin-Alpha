"use client";

import {
    ShieldCheck,
    Scale,
    FileText,
    AlertTriangle,
    Lock,
    Building2,
} from "lucide-react";

export default function LegalSection() {

    return (
        <section className="relative overflow-hidden bg-white">

            {/* HERO SECTION */}
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

                {/* CONTENT */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="flex items-center justify-center text-center">

                        <div className="max-w-5xl mx-auto">

                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 rounded-full border border-[#EAF9FA]0/20 bg-[#EAF9FA]0/10 px-4 py-2 text-sm font-medium text-[#7ACED4] backdrop-blur-md">

                                <ShieldCheck size={16} />

                                Legal & Compliance

                            </div>

                            {/* Heading */}
                            <h1 className="mt-8 text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.05] tracking-tight text-white">

                                Legal
                                <span className="block mt-2 text-[#7ACED4]">
                                    Information
                                </span>

                            </h1>

                            {/* Paragraph */}
                            <p className="mt-8 max-w-4xl mx-auto text-base sm:text-lg lg:text-xl leading-9 text-slate-300">

                                Important disclosures, regulatory information,
                                investor communication guidelines,
                                and legal notices regarding INFIN ALPHA LLP
                                and associated investment activities.

                            </p>

                        </div>

                    </div>

                </div>

            </div>

            {/* MAIN SECTION */}
            <div className="relative z-10 pb-20 sm:pb-24 pt-[40px] sm:pt-[70px] lg:pt-[100px]" style={{ marginTop: "80px" }}>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">

                        {/* LEFT SIDE */}
                        <div className="lg:col-span-8">

                            <div className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] border border-slate-200 bg-white p-5 sm:p-8 lg:p-10 shadow-sm hover:shadow-2xl transition-all duration-500">

                                {/* Glow */}
                                <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-[#EAF9FA]0/10 blur-3xl rounded-full"></div>

                                <div className="relative z-10">

                                    {/* Badge */}
                                    <div className="inline-flex items-center gap-2 rounded-full border border-[#D5F3F5] bg-[#EAF9FA] px-4 py-2 text-xs sm:text-sm font-semibold text-[#00314A]">

                                        <Scale size={16} />

                                        Regulatory Disclosure

                                    </div>

                                    {/* Heading */}
                                    <h2 className="mt-5 sm:mt-6 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-[-0.03em] text-[#009A9E]">

                                        Important Legal
                                        Information

                                    </h2>

                                    {/* Description */}
                                    <p className="mt-6 text-base sm:text-lg leading-8 text-slate-700">

                                        The information provided on this website
                                        is intended solely for informational purposes
                                        and does not constitute an offer to sell,
                                        solicitation, recommendation,
                                        or invitation to invest in any securities,
                                        investment products, or financial instruments.

                                    </p>

                                    {/* CONTENT BLOCKS */}
                                    <div className="mt-10 space-y-6">

                                        {/* BLOCK */}
                                        <div className="rounded-3xl border border-slate-200 p-5 sm:p-6 bg-slate-50">

                                            <div className="flex items-start gap-4">

                                                <div className="w-12 h-12 rounded-2xl border-2 border-[#EAF9FA]0 text-[#009A9E] flex items-center justify-center shrink-0">

                                                    <FileText size={22} />

                                                </div>

                                                <div>

                                                    <h3 className="text-xl font-bold text-[#009A9E]">

                                                        Investment Risk Disclosure

                                                    </h3>

                                                    <p className="mt-3 leading-8 text-slate-700 text-sm sm:text-base">

                                                        Investments in distressed assets,
                                                        special situations,
                                                        and alternative investment structures
                                                        involve varying degrees of risk,
                                                        including potential loss of capital.
                                                        Past performance is not indicative
                                                        of future results.

                                                    </p>

                                                </div>

                                            </div>

                                        </div>

                                        {/* BLOCK */}
                                        <div className="rounded-3xl border border-slate-200 p-5 sm:p-6 bg-slate-50">

                                            <div className="flex items-start gap-4">

                                                <div className="w-12 h-12 rounded-2xl border-2 border-[#EAF9FA]0 text-[#009A9E] flex items-center justify-center shrink-0">

                                                    <AlertTriangle size={22} />

                                                </div>

                                                <div>

                                                    <h3 className="text-xl font-bold text-[#009A9E]">

                                                        Forward Looking Statements

                                                    </h3>

                                                    <p className="mt-3 leading-8 text-slate-700 text-sm sm:text-base">

                                                        Certain statements may contain
                                                        forward-looking assumptions,
                                                        projections, or market expectations.
                                                        Actual outcomes may differ materially
                                                        due to market volatility,
                                                        regulatory changes,
                                                        economic conditions,
                                                        and investment-specific factors.

                                                    </p>

                                                </div>

                                            </div>

                                        </div>

                                        {/* BLOCK */}
                                        <div className="rounded-3xl border border-slate-200 p-5 sm:p-6 bg-slate-50">

                                            <div className="flex items-start gap-4">

                                                <div className="w-12 h-12 rounded-2xl border-2 border-[#EAF9FA]0 text-[#009A9E] flex items-center justify-center shrink-0">

                                                    <Lock size={22} />

                                                </div>

                                                <div>

                                                    <h3 className="text-xl font-bold text-[#009A9E]">

                                                        Confidentiality & Privacy

                                                    </h3>

                                                    <p className="mt-3 leading-8 text-slate-700 text-sm sm:text-base">

                                                        Any information shared through
                                                        investor communication channels
                                                        is subject to applicable confidentiality,
                                                        compliance,
                                                        and data privacy regulations.
                                                        Unauthorized distribution
                                                        or reproduction is prohibited.

                                                    </p>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                        {/* RIGHT SIDE */}
                        <div className="lg:col-span-4">

                            <div className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] p-5 sm:p-8 lg:p-10 shadow-2xl text-slate-300">

                                {/* Glow */}
                                <div className="absolute top-0 right-0 w-72 h-72 bg-[#EAF9FA]0/20 blur-3xl rounded-full"></div>

                                {/* Pattern */}
                                <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(white_1px,transparent_1px)] bg-[size:22px_22px]"></div>

                                <div className="relative z-10">

                                    {/* Badge */}
                                    <div className="inline-flex items-center gap-2 rounded-full border border-[#D5F3F5] bg-[#EAF9FA] px-4 py-2 text-xs sm:text-sm font-semibold text-[#00314A]">

                                        Compliance Framework

                                    </div>

                                    {/* Heading */}
                                    <h3 className="mt-6 text-3xl sm:text-4xl font-bold leading-tight tracking-[-0.03em] text-[#00314A]">

                                        Investor
                                        Protection &
                                        Transparency

                                    </h3>

                                    {/* Description */}
                                    <p className="mt-6 text-sm sm:text-base leading-8 text-slate-700">

                                        INFIN ALPHA LLP maintains
                                        a governance-focused approach
                                        emphasizing compliance,
                                        investor transparency,
                                        ethical investment conduct,
                                        and institutional discipline.

                                    </p>

                                    {/* STATS */}
                                    <div className="mt-10 grid gap-3">

                                        <div className="rounded-2xl border border-white/10 bg-white/5 p-3">

                                            <p className="text-sm text-slate-700">

                                                Regulatory Focus

                                            </p>

                                            <h4 className="mt-2 text-xl font-bold text-[#009A9E]">

                                                Institutional Compliance

                                            </h4>

                                        </div>

                                        <div className="rounded-2xl border border-white/10 bg-white/5 p-3">

                                            <p className="text-sm text-slate-700">

                                                Communication

                                            </p>

                                            <h4 className="mt-2 text-xl font-bold text-[#009A9E]">

                                                Investor Transparency

                                            </h4>

                                        </div>

                                        <div className="rounded-2xl border border-white/10 bg-white/5 p-3">

                                            <p className="text-sm text-slate-700">

                                                Governance

                                            </p>

                                            <h4 className="mt-2 text-xl font-bold text-[#009A9E]">

                                                Ethical Investment Practices

                                            </h4>

                                        </div>

                                    </div>

                                    {/* Bottom */}
                                    <div className="mt-10 rounded-2xl border border-[#EAF9FA]0/20 bg-[#EAF9FA]0/10 p-5">

                                        <div className="flex items-start gap-3">

                                            <Building2 className="text-[#7ACED4] mt-1" size={20} />

                                            <p className="text-sm leading-7 text-slate-700">

                                                Please consult your legal,
                                                financial,
                                                and tax advisors before making
                                                any investment decisions.

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