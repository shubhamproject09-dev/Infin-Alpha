"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {

    const quickLinks = [
        {
            title: "Home",
            href: "/",
        },

        {
            title: "BSOF Trust",
            href: "/about/bsof-trust",
        },

        {
            title: "INFIN Alpha LLP",
            href: "/about/infin-llp",
        },

        {
            title: "Leadership",
            href: "/about/leadership",
        },
    ];


    const otherLinks = [
        {
            title: "Case Studies",
            href: "/investment/caseStudy",
        },

        {
            title: "Performance",
            href: "/investment/performance",
        },

        {
            title: "Insights",
            href: "/thought-leadership",
        },

        {
            title: "Investor",
            href: "/investor",
        },
    ];

    return (
        <footer className="relative overflow-hidden bg-[#00314A] text-white">

            {/* Background Glow */}
            <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#009A9E]/10 blur-3xl rounded-full"></div>

            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#7ACED4]/10 blur-3xl rounded-full"></div>

            {/* Top Border */}
            <div className="h-px bg-gradient-to-r from-transparent via-[#009A9E]/40 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* TOP SECTION */}
                <div className="py-16 sm:py-20 grid lg:grid-cols-12 gap-12">

                    {/* LEFT CONTENT */}
                    <div className="lg:col-span-4">

                        {/* Logo */}
                        <Link href="/" className="group flex items-center gap-3">
                            <Image
                                src="/logo1.png"
                                alt="INFIN ALPHA"
                                width={120}
                                height={60}
                                priority
                                className="h-7 sm:h-9 w-auto object-contain"
                            />
                        </Link>

                        {/* Description */}
                        <p className="mt-8 text-slate-300 leading-8 max-w-xl hover:text-white transition-all duration-300 cursor-pointer">

                            INFIN Alpha is a specialized investment platform
                            focused on distressed credit, restructuring,
                            and special situation opportunities across
                            India’s evolving financial ecosystem.

                        </p>

                        {/* Socials */}
                        <div className="mt-8 flex items-center gap-4">

                            <Link
                                href="#"
                                className="w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-[#009A9E] hover:border-[#009A9E] hover:scale-110 hover:-translate-y-1 transition-all duration-300"
                            >

                                <span className="text-base font-bold tracking-tight">in</span>

                            </Link>

                            <Link
                                href="#"
                                className="w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-[#009A9E] hover:border-[#009A9E] hover:scale-110 hover:-translate-y-1 transition-all duration-300"
                            >

                                <span className="text-lg font-bold">𝕏</span>

                            </Link>

                            <Link
                                href="#"
                                className="w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-gradient-to-br hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 hover:border-transparent hover:scale-110 hover:-translate-y-1 transition-all duration-300"
                            >

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-5 h-5 text-white"
                                >
                                    <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 1.5h8.5A4.25 4.25 0 0 1 20.5 7.75v8.5a4.25 4.25 0 0 1-4.25 4.25h-8.5A4.25 4.25 0 0 1 3.5 16.25v-8.5A4.25 4.25 0 0 1 7.75 3.5zm9.5 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM12 6.5A5.5 5.5 0 1 0 17.5 12 5.506 5.506 0 0 0 12 6.5zm0 1.5A4 4 0 1 1 8 12a4.005 4.005 0 0 1 4-4z" />
                                </svg>

                            </Link>

                            <Link
                                href="#"
                                className="w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-red-500 hover:border-red-500 hover:scale-110 transition-all duration-300"
                            >

                                <span className="text-sm font-bold">▶</span>

                            </Link>

                        </div>

                    </div>

                    {/* LINKS */}
                    <div className="lg:col-span-2">

                        <h3 className="text-lg font-semibold text-[#7ACED4]">
                            Quick Links
                        </h3>

                        <div className="mt-6 space-y-4">

                            {quickLinks.map((item, index) => (

                                <Link
                                    key={index}
                                    href={item.href}
                                    className="group flex items-center gap-2 text-slate-300 hover:text-[#7ACED4] hover:translate-x-2 transition-all duration-300"
                                >

                                    <span>↗</span>

                                    {item.title}

                                </Link>

                            ))}

                        </div>

                    </div>

                    {/* OTHER LINKS */}
                    <div className="lg:col-span-3">

                        <h3 className="text-lg font-semibold text-[#7ACED4]">
                            Explore
                        </h3>

                        <div className="mt-6 space-y-4">

                            {otherLinks.map((item, index) => (

                                <Link
                                    key={index}
                                    href={item.href}
                                    className="group flex items-center gap-2 text-slate-300 hover:text-[#7ACED4] hover:translate-x-2 transition-all duration-300"
                                >

                                    <span>↗</span>

                                    {item.title}

                                </Link>

                            ))}

                        </div>

                    </div>

                    {/* CONTACT */}
                    <div className="lg:col-span-3">

                        <h3 className="text-lg font-semibold text-[#7ACED4]">
                            Contact
                        </h3>

                        <div className="mt-6 space-y-6">

                            <div className="group flex items-start gap-4">

                                <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#7ACED4] flex-shrink-0 group-hover:bg-[#009A9E] group-hover:text-white transition-all duration-300">

                                    <span>📍</span>

                                </div>

                                <div>

                                    <p className="text-slate-400 text-sm">
                                        Office Address
                                    </p>

                                    <p className="mt-2 text-slate-200 leading-6">
                                        A-3, 1st Floor South Tower, Girdhar Apartments, 28 Firozeshah Road, New Delhi – 110001, India
                                    </p>

                                </div>

                            </div>

                            <div className="group flex items-start gap-4">

                                <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#7ACED4] flex-shrink-0 group-hover:bg-[#009A9E] group-hover:text-white transition-all duration-300">

                                    <span>📞</span>

                                </div>

                                <div>

                                    <p className="text-slate-400 text-sm">
                                        Phone Number
                                    </p>

                                    <p className="mt-2 text-slate-200 leading-7">
                                        +91 0000000000
                                    </p>

                                </div>

                            </div>

                            <div className="group flex items-start gap-4">

                                <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#7ACED4] flex-shrink-0 group-hover:bg-[#009A9E] group-hover:text-white transition-all duration-300">

                                    <span>✉️</span>

                                </div>

                                <div>

                                    <p className="text-slate-400 text-sm">
                                        Email Address
                                    </p>

                                    <p className="mt-2 text-slate-200 leading-7 break-all">
                                        contact@infinalpha.com
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                {/* BOTTOM BAR */}
                <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">

                    <p className="text-sm text-slate-400 text-center sm:text-left">

                        © 2025 INFIN ALPHA. All rights reserved.

                    </p>

                    <div className="flex items-center gap-6 text-sm text-slate-400">

                        <Link
                            href="/privacy-policy"
                            className="hover:text-[#7ACED4] transition-all duration-300"
                        >

                            Privacy Policy

                        </Link>

                        <Link
                            href="/terms"
                            className="hover:text-[#7ACED4] transition-all duration-300"
                        >

                            Terms & Conditions

                        </Link>

                    </div>

                </div>

            </div>

        </footer>
    );
}