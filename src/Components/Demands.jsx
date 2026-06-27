"use client";

import {
    UtensilsCrossed,
    Code2,
    HeartPulse,
    GraduationCap,
    ShoppingBag,
} from "lucide-react";

const categories = [
    {
        icon: Code2,
        title: "Software & SaaS",
        collaborators: [
            "Frontend Developer",
            "Backend Developer",
            "UI/UX Designer",
            "DevOps Engineer",
        ],
    },
    {
        icon: UtensilsCrossed,
        title: "Food & Restaurant",
        collaborators: [
            "Digital Marketer",
            "Brand Manager",
            "Content Creator",
            "Sales Executive",
        ],
    },
    {
        icon: ShoppingBag,
        title: "E-Commerce",
        collaborators: [
            "Marketing Specialist",
            "Product Manager",
            "Designer",
            "Growth Hacker",
        ],
    },
    {
        icon: HeartPulse,
        title: "Health & Wellness",
        collaborators: [
            "Healthcare Consultant",
            "Marketing Expert",
            "Operations Manager",
            "Community Manager",
        ],
    },
    {
        icon: GraduationCap,
        title: "EdTech",
        collaborators: [
            "Course Creator",
            "Frontend Developer",
            "Content Strategist",
            "Product Designer",
        ],
    },
];

export default function StartupCategories() {
    return (
        <section className="bg-black py-24">
            <div className="mx-auto max-w-7xl px-6">
                <div className="text-center">
                    <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
                        Popular Startup Categories
                    </span>

                    <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
                        Find Opportunities
                        <br />
                        Across Industries
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-gray-400">
                        Founders can create startup profiles and recruit
                        collaborators based on the skills they need to
                        grow their business.
                    </p>
                </div>

                <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {categories.map((category, index) => {
                        const Icon = category.icon;

                        return (
                            <div
                                key={index}
                                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-blue-500/30 hover:bg-white/10"
                            >
                                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1f325b] text-white">
                                    <Icon size={26} />
                                </div>

                                <h3 className="mb-6 text-2xl font-bold text-white">
                                    {category.title}
                                </h3>

                                <div className="space-y-3">
                                    {category.collaborators.map(
                                        (item, idx) => (
                                            <div
                                                key={idx}
                                                className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-gray-300"
                                            >
                                                {item}
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}