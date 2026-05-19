"use client";

import { useRef } from "react";
import {
    ArrowLeft,
    ArrowRight,
    Building2,
    Landmark,
    Factory,
    BriefcaseBusiness,
} from "lucide-react";

export default function FocusAreasSection() {

    const sliderRef = useRef(null);

    const scroll = (direction) => {

        if (sliderRef.current) {

            const amount = 340;

            sliderRef.current.scrollBy({
                left: direction === "left" ? -amount : amount,
                behavior: "smooth",
            });

        }

    };

    const focusAreas = [
        {
            icon: <Landmark size={24} />,
            title: "Stressed Corporate Debt",
            description:
                "Distressed credit and restructuring opportunities across sectors.",
            image:
                "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop",
        },

        {
            icon: <Building2 size={24} />,
            title: "Overleveraged Businesses",
            description:
                "Strategic recapitalization and turnaround-focused investments.",
            image:
                "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
        },

        {
            icon: <Factory size={24} />,
            title: "Stalled Projects",
            description:
                "Infrastructure and real estate projects with revival potential.",
            image:
                "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",
        },

        {
            icon: <BriefcaseBusiness size={24} />,
            title: "Promoter Financing",
            description:
                "Flexible capital solutions for strategic business growth.",
            image:
                "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
        },
    ];

    return (
        <section className="relative overflow-hidden py-20 sm:py-24 lg:py-32 bg-white">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">

                    {/* LEFT CONTENT */}
                    <div className="lg:col-span-4">

                        {/* Badge */}
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-50 text-green-700 text-sm font-semibold border border-green-100">

                            Focus Areas

                        </div>

                        {/* Heading */}
                        <h2 className="mt-5 text-3xl sm:text-4xl lg:text-4xl font-bold text-slate-900 leading-tight">

                            Investing Across
                            India’s Emerging
                            Opportunity Landscape

                        </h2>

                        {/* Paragraph */}
                        <p className="mt-5 text-base sm:text-lg leading-7 text-slate-600">

                            INFIN Alpha focuses on differentiated special situation
                            opportunities spanning distressed credit, restructuring,
                            strategic recapitalization, and operational turnarounds.

                        </p>

                    </div>

                    {/* RIGHT SLIDER */}
                    <div className="lg:col-span-8 overflow-hidden">

                        <div
                            ref={sliderRef}
                            className="flex gap-6 overflow-x-auto overflow-y-hidden scrollbar-hide scroll-smooth pb-2"
                        >

                            {focusAreas.map((item, index) => (

                                <div
                                    key={index}
                                    className="group relative min-w-[220px] sm:min-w-[240px] lg:min-w-[250px] h-[380px] lg:h-[400px] rounded-[36px] overflow-hidden flex-shrink-0"
                                >

                                    {/* Background Image */}
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                        style={{
                                            backgroundImage: `url(${item.image})`,
                                        }}
                                    ></div>

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10"></div>

                                    {/* Glow */}
                                    <div className="absolute top-0 right-0 w-40 h-40 bg-green-500/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition duration-500"></div>

                                    {/* Content */}
                                    <div className="relative z-10 h-full flex flex-col justify-end p-6 sm:p-8">

                                        {/* Icon */}
                                        <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-md text-slate-900 flex items-center justify-center">

                                            {item.icon}

                                        </div>

                                        {/* Title */}
                                        <h3 className="mt-8 text-xl sm:text-2xl font-bold text-white group-hover:text-green-400 transition-all duration-300 leading-snug">

                                            {item.title}

                                        </h3>

                                        {/* Description */}
                                        <p className="mt-5 text-slate-300 leading-7 text-sm sm:text-base">

                                            {item.description}

                                        </p>

                                    </div>

                                </div>

                            ))}

                        </div>
                        {/* Buttons */}
                        <div className="mt-2 flex justify-end items-center gap-4">

                            <button
                                onClick={() => scroll("left")}
                                className="w-12 h-12 rounded-full border border-slate-200 bg-white text-slate-900 flex items-center justify-center hover:bg-green-500 hover:text-white transition-all duration-300 shadow-sm"
                            >

                                <ArrowLeft size={20} />

                            </button>

                            <button
                                onClick={() => scroll("right")}
                                className="w-12 h-12 rounded-full border border-slate-200 bg-white text-slate-900 flex items-center justify-center hover:bg-green-500 hover:text-white transition-all duration-300 shadow-sm"
                            >

                                <ArrowRight size={20} />

                            </button>

                        </div>
                    </div>

                </div>

            </div>

        </section>
    );
}