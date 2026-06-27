"use client";

import { Quote, Star } from "lucide-react";

const testimonials = [
    {
        name: "Sarah Ahmed",
        role: "Frontend Developer",
        company: "FinTech Startup",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80",
        review:
            "StartupForge helped me find an amazing startup team. Within two weeks, I joined a FinTech startup as a frontend developer and have been working with them ever since.",
    },
    {
        name: "Ryan Mitchell",
        role: "Startup Founder",
        company: "EduTech",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80",
        review:
            "Finding talented collaborators was always difficult. Through StartupForge, I recruited a designer, marketer, and backend developer for my startup.",
    },
    {
        name: "Nusrat Jahan",
        role: "Digital Marketer",
        company: "Food Delivery Startup",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80",
        review:
            "I wanted to work with ambitious founders and gain startup experience. StartupForge connected me with a growing food-tech company that matched my skills.",
    },
];

export default function CollaboratorTestimonials() {
    return (
        <section className="bg-black py-24">
            <div className="mx-auto max-w-7xl px-6">
                {/* Header */}
                <div className="text-center">
                    <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
                        Success Stories
                    </span>

                    <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
                        What Founders &
                        <br />
                        Collaborators Say
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-gray-400">
                        Thousands of founders and collaborators are
                        building startups together through StartupForge.
                    </p>
                </div>

                {/* Cards */}
                <div className="mt-16 grid gap-6 lg:grid-cols-3">
                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/30"
                        >
                            {/* Glow */}
                            <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

                            {/* Quote */}
                            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1f325b] text-white">
                                <Quote size={24} />
                            </div>

                            {/* Stars */}
                            <div className="mb-5 flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={16}
                                        fill="currentColor"
                                        className="text-yellow-400"
                                    />
                                ))}
                            </div>

                            {/* Review */}
                            <p className="mb-8 leading-8 text-gray-300">
                                {item.review}
                            </p>

                            {/* User */}
                            <div className="flex items-center gap-4">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="h-14 w-14 rounded-full object-cover"
                                />

                                <div>
                                    <h4 className="font-semibold text-white">
                                        {item.name}
                                    </h4>

                                    <p className="text-sm text-gray-400">
                                        {item.role}
                                    </p>

                                    <p className="text-xs text-blue-400">
                                        {item.company}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Stats */}
                <div className="mt-16 grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl md:grid-cols-4">
                    <div>
                        <h3 className="text-4xl font-bold text-white">
                            15K+
                        </h3>
                        <p className="mt-2 text-gray-400">
                            Collaborators
                        </p>
                    </div>

                    <div>
                        <h3 className="text-4xl font-bold text-white">
                            500+
                        </h3>
                        <p className="mt-2 text-gray-400">
                            Startups
                        </p>
                    </div>

                    <div>
                        <h3 className="text-4xl font-bold text-white">
                            1.2K+
                        </h3>
                        <p className="mt-2 text-gray-400">
                            Opportunities
                        </p>
                    </div>

                    <div>
                        <h3 className="text-4xl font-bold text-white">
                            95%
                        </h3>
                        <p className="mt-2 text-gray-400">
                            Success Rate
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}