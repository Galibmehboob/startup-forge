"use client";

import {
    Users,
    BriefcaseBusiness,
    Rocket,
    Target,
    Handshake,
    ArrowRight,
} from "lucide-react";

const features = [
    {
        icon: Rocket,
        title: "Launch Faster",
        description:
            "Find talented collaborators and build your startup team without spending months searching.",
    },
    {
        icon: Users,
        title: "Verified Collaborators",
        description:
            "Connect with developers, designers, marketers, sales experts, and business strategists.",
    },
    {
        icon: BriefcaseBusiness,
        title: "Startup Focused",
        description:
            "Built specifically for founders looking for co-founders, early employees, and contributors.",
    },
    {
        icon: Handshake,
        title: "Meaningful Partnerships",
        description:
            "Create long-term professional relationships that grow alongside your startup.",
    },
    {
        icon: Target,
        title: "Find The Right Match",
        description:
            "Match people based on startup category, skills, interests, and project goals.",
    },
];

export default function WhyChoose() {
    return (
        <section className="bg-black py-24">
            <div className="mx-auto max-w-7xl px-6">
                <div className="text-center">
                    <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
                        Why Choose StartupForge
                    </span>

                    <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
                        Everything Founders Need
                        <br />
                        To Build Great Teams
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-gray-400">
                        StartupForge helps founders discover talented
                        collaborators, grow their startups, and build
                        strong teams across multiple industries.
                    </p>
                </div>

                <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;

                        return (
                            <div
                                key={index}
                                className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/30 hover:bg-white/10"
                            >
                                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1f325b] text-white">
                                    <Icon size={26} />
                                </div>

                                <h3 className="mb-3 text-xl font-semibold text-white">
                                    {feature.title}
                                </h3>

                                <p className="leading-7 text-gray-400">
                                    {feature.description}
                                </p>

                                <div className="mt-6 flex items-center gap-2 text-blue-400 opacity-0 transition-all duration-300 group-hover:opacity-100">
                                    Learn More
                                    <ArrowRight size={16} />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}