"use client";

import {
    Mail,
    Phone,
    MapPin,
    ArrowRight,
    ShieldCheck,
    Send,
    Building2,
} from "lucide-react";

export default function ContactSection() {

    return (
        <section className="relative overflow-hidden bg-white">

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            {/* TOP HERO SECTION */}
            <div
                className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-green-950"
                style={{
                    paddingTop: "140px",
                    paddingBottom: "140px",
                }}
            >

                {/* Background Glow */}
                <div className="absolute top-0 left-0 w-72 h-72 bg-green-500/20 blur-3xl rounded-full"></div>

                <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-400/10 blur-3xl rounded-full"></div>

                {/* Pattern */}
                <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(white_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                {/* MAIN CONTENT */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

                    <div className="flex items-center justify-center text-center">

                        {/* CONTENT */}
                        <div className="max-w-5xl mx-auto">

                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm font-medium text-green-300 backdrop-blur-md">

                                <ShieldCheck size={16} />

                                Secure Investor Communication

                            </div>

                            {/* Heading */}
                            <h1 className="mt-8 text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.05] tracking-tight text-white">

                                Connect With

                                <span className="block mt-2 text-green-400">
                                    INFIN ALPHA LLP
                                </span>

                            </h1>

                            {/* Paragraph */}
                            <p className="mt-8 max-w-4xl mx-auto text-base sm:text-lg lg:text-xl leading-7 text-slate-300">

                                We engage with qualified investors,
                                institutions, strategic partners,
                                and stakeholders seeking exposure
                                to India’s evolving stressed asset
                                and special situations investment landscape.

                            </p>

                        </div>

                    </div>

                </div>

            </div>

            {/* MAIN SECTION */}

            <div
                className="relative z-10 pb-20 sm:pb-24"
                style={{
                    paddingTop: "100px",
                }}
            >

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">

                        {/* LEFT SIDE */}
                        <div className="lg:col-span-7">

                            <div className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] border border-slate-200 bg-white p-5 sm:p-8 lg:p-10 shadow-sm hover:shadow-2xl transition-all duration-500 h-full">

                                {/* Glow */}
                                <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-green-500/10 blur-3xl rounded-full"></div>

                                <div className="relative z-10">

                                    {/* Badge */}
                                    <div className="inline-flex items-center gap-2 rounded-full border border-green-100 bg-green-50 px-4 py-2 text-xs sm:text-sm font-semibold text-green-700">

                                        <Building2 size={16} />

                                        Contact Information

                                    </div>

                                    {/* Heading */}
                                    <h2
                                        className="mt-5 sm:mt-6 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-[-0.03em]"
                                        style={{ color: "#16a34a" }}
                                    >

                                        Let’s Discuss Strategic
                                        Investment Opportunities

                                    </h2>

                                    {/* Paragraph */}
                                    <p
                                        className="mt-5 sm:mt-6 leading-7 sm:leading-8 text-base sm:text-lg"

                                    >

                                        For investor communication,
                                        partnership discussions,
                                        fund-related information,
                                        or strategic engagement opportunities,
                                        please reach out to our team.

                                    </p>

                                </div>

                                {/* CONTACT INFO */}
                                <div className="relative z-10 mt-8 sm:mt-12 grid gap-5 sm:gap-6">

                                    {/* ADDRESS */}
                                    <div className="group rounded-[24px] sm:rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 hover:border-green-300 hover:shadow-lg transition-all duration-300">

                                        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5">

                                            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl border-2 border-green-500 text-green-600 flex items-center justify-center shrink-0">

                                                <MapPin size={22} />

                                            </div>

                                            <div>

                                                <h3 className="text-xl sm:text-2xl font-bold text-green-600">

                                                    Office Address

                                                </h3>

                                                <p
                                                    className="mt-3 sm:mt-4 leading-7 sm:leading-8 text-sm sm:text-base"

                                                >

                                                    A-3, 1st Floor South Tower,
                                                    Girdhar Apartments,
                                                    28 Firozeshah Road,
                                                    New Delhi – 110001,
                                                    India

                                                </p>

                                            </div>

                                        </div>

                                    </div>

                                    {/* PHONE */}
                                    <div className="group rounded-[24px] sm:rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 hover:border-green-300 hover:shadow-lg transition-all duration-300">

                                        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5">

                                            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl border-2 border-green-500 text-green-600 flex items-center justify-center shrink-0">

                                                <Phone size={22} />

                                            </div>

                                            <div>

                                                <h3 className="text-xl sm:text-2xl font-bold text-green-600">

                                                    Phone Number

                                                </h3>

                                                <p
                                                    className="mt-3 sm:mt-4 text-base sm:text-lg"

                                                >

                                                    +91 0000000000

                                                </p>

                                            </div>

                                        </div>

                                    </div>

                                    {/* EMAIL */}
                                    <div className="group rounded-[24px] sm:rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 hover:border-green-300 hover:shadow-lg transition-all duration-300">

                                        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5">

                                            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl border-2 border-green-500 text-green-600 flex items-center justify-center shrink-0">

                                                <Mail size={22} />

                                            </div>

                                            <div>

                                                <h3 className="text-xl sm:text-2xl font-bold text-green-600">

                                                    Email Address

                                                </h3>

                                                <p
                                                    className="mt-3 sm:mt-4 text-base sm:text-lg break-all"

                                                >

                                                    contact@infinalpha.com

                                                </p>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                        {/* RIGHT SIDE - CONTACT FORM */}
                        <div className="lg:col-span-5">

                            <div className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] p-5 sm:p-8 lg:p-10 text-white h-full shadow-2xl">

                                {/* Glow */}
                                <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-green-500/20 blur-3xl rounded-full"></div>

                                {/* Pattern */}
                                <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(white_1px,transparent_1px)] bg-[size:22px_22px]"></div>

                                <div className="relative z-10">

                                    {/* Badge */}
                                    <div className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-xs sm:text-sm font-semibold text-green-700">

                                        Investor Enquiry Form

                                    </div>

                                    {/* Heading */}
                                    <h3
                                        className="mt-5 sm:mt-6 text-3xl sm:text-4xl font-bold leading-tight tracking-[-0.03em]"
                                        style={{ color: "#16a34a" }}
                                    >

                                        Start A
                                        Conversation

                                    </h3>

                                    {/* Description */}
                                    <p
                                        className="mt-5 sm:mt-6 leading-7 sm:leading-8 text-sm sm:text-base"
                                        style={{ color: "#000000" }}
                                    >

                                        Share your details and our team
                                        will connect with you regarding
                                        investment opportunities and
                                        strategic discussions.

                                    </p>

                                    {/* FORM */}
                                    <form className="mt-8 sm:mt-10 space-y-4 sm:space-y-5">

                                        {/* Name */}
                                        <div>

                                            <label
                                                className="text-sm font-bold mb-2 block"
                                                style={{ color: "#000000" }}
                                            >

                                                Full Name:

                                            </label>

                                            <input
                                                type="text"
                                                placeholder="Enter your name"
                                                className="w-full rounded-2xl px-4 sm:px-5 py-3.5 sm:py-4 outline-none transition-all duration-300 placeholder-black text-sm sm:text-base"
                                                style={{
                                                    border: "1.5px solid #000",
                                                    color: "#000",
                                                    backgroundColor: "#fff",
                                                }}
                                            />

                                        </div>

                                        {/* Email */}
                                        <div>

                                            <label
                                                className="text-sm font-bold mb-2 block"
                                                style={{ color: "#000000" }}
                                            >

                                                Email Address:

                                            </label>

                                            <input
                                                type="email"
                                                placeholder="Enter your email"
                                                className="w-full rounded-2xl px-4 sm:px-5 py-3.5 sm:py-4 outline-none transition-all duration-300 placeholder-black text-sm sm:text-base"
                                                style={{
                                                    border: "1.5px solid #000",
                                                    color: "#000",
                                                    backgroundColor: "#fff",
                                                }}
                                            />

                                        </div>

                                        {/* Phone */}
                                        <div>

                                            <label
                                                className="text-sm font-bold mb-2 block"
                                                style={{ color: "#000000" }}
                                            >

                                                Phone Number:

                                            </label>

                                            <input
                                                type="number"
                                                placeholder="Enter your Number"
                                                className="w-full rounded-2xl px-4 sm:px-5 py-3.5 sm:py-4 outline-none transition-all duration-300 placeholder-black text-sm sm:text-base"
                                                style={{
                                                    border: "1.5px solid #000",
                                                    color: "#000",
                                                    backgroundColor: "#fff",
                                                }}
                                            />

                                        </div>

                                        {/* Message */}
                                        <div>

                                            <label
                                                className="text-sm font-bold mb-2 block"
                                                style={{ color: "#000000" }}
                                            >

                                                Message:

                                            </label>

                                            <textarea
                                                rows={5}
                                                placeholder="Write your message..."
                                                className="w-full rounded-2xl px-4 sm:px-5 py-3.5 sm:py-4 outline-none transition-all duration-300 resize-none placeholder-black text-sm sm:text-base"
                                                style={{
                                                    border: "1.5px solid #000",
                                                    color: "#000",
                                                    backgroundColor: "#fff",
                                                }}
                                            ></textarea>

                                        </div>

                                        {/* Button */}
                                        <button
                                            type="submit"
                                            className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-green-500 hover:bg-green-600 px-6 py-3.5 sm:py-4 text-sm font-semibold text-white transition-all duration-300 shadow-lg shadow-green-500/20"
                                        >

                                            Send Message

                                            <Send size={18} />

                                        </button>

                                    </form>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}