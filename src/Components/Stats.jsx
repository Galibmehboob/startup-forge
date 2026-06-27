"use client";

import {
    Star,
    CircleCheckFill,
    Person,
    Briefcase,
} from "@gravity-ui/icons";

export default function Stats() {
    const stats = [
        {
            id: 1,
            title: "Community Members",
            value: "15K+",
            description:
                "Thousands of founders and collaborators are building startups together worldwide.",
            icon: <Person width={28} height={28} />,
        },
        {
            id: 2,
            title: "Success Rating",
            value: "4.9/5",
            description:
                "Highly rated by entrepreneurs and professionals for creating meaningful connections.",
            icon: <Star width={28} height={28} />,
        },
        {
            id: 3,
            title: "Open Opportunities",
            value: "1.2K+",
            description:
                "Explore exciting startup roles in development, design, marketing, and more.",
            icon: <Briefcase width={28} height={28} />,
        },
        {
            id: 4,
            title: "Verified Startups",
            value: "98%",
            description: (
                <>
                    Connect with{" "} <span className="font-bold text-green-400">
                        trusted and verified </span>{" "}
                    startup communities.
                </>
            ),
            icon: <CircleCheckFill width={28} height={28} />,
        },
    ];


    return (
        <section className="relative overflow-hidden py-24">
            <div className="relative mx-auto max-w-7xl px-4 md:px-6">

                {/* Heading */}
                <div className="mx-auto mb-16 max-w-3xl text-center">
                    <p className="mb-3 text-sm font-medium uppercase tracking-[4px] text-blue-400">
                        Startup Community
                    </p>

                    <h2 className="text-4xl font-bold text-white md:text-5xl">
                        Empowering Startup Teams Worldwide
                    </h2>

                    <p className="mt-5 text-gray-200">
                        StartupForge connects founders with talented collaborators,
                        helping innovative ideas grow into successful teams and
                        transforming visions into reality.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {stats.map((item) => (
                        <div
                            key={item.id}
                            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl transition duration-500 hover:-translate-y-2 hover:border-blue-400/30"
                        >
                            {/* Water Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/[0.03] to-transparent" />

                            {/* Floating Blur */}
                            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl transition duration-500 group-hover:bg-blue-500/20" />

                            {/* Card Content */}
                            <div className="relative">

                                {/* Icon */}
                                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-blue-400 backdrop-blur-xl">
                                    {item.icon}
                                </div>

                                {/* Number */}
                                <h3 className="text-4xl font-bold text-white">
                                    {item.value}
                                </h3>

                                {/* Title */}
                                <p className="mt-2 text-lg font-semibold text-white">
                                    {item.title}
                                </p>

                                {/* Description */}
                                <p className="mt-3 text-sm leading-6 text-gray-400">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );


}
