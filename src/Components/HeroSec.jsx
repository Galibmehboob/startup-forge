import { Rocket } from "@gravity-ui/icons";

export default function Hero() {
    return (
        <section
            className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: "url('/hero-bg.jpg')",
            }}
        >
            {/* Main Overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Bottom Fade */}
            <div className="absolute bottom-0 left-0 h-96 w-full bg-gradient-to-b from-transparent to-black" />

            {/* Content */}
            <div className="relative z-10 flex min-h-screen items-center justify-center px-6 text-center">
                <div className="w-full max-w-5xl">

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-gray-200 backdrop-blur-lg">
                        <Rocket size={18} />
                        Startup Team Builder Platform
                    </div>

                    {/* Heading */}
                    <h1 className="mt-6 text-5xl font-bold leading-tight text-white md:text-7xl">
                        Build Your Startup With The <br />
                        <span className="text-blue-400">
                            Right Team
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
                        Connect with talented developers, designers,
                        marketers, and innovators. Create your startup,
                        post opportunities, and build your dream team
                        with StartupForge.
                    </p>

                    {/* Buttons */}
                    <div className="mt-10 flex flex-wrap justify-center gap-4">
                        <button className="rounded-full bg-blue-600 px-8 py-3 font-medium text-white transition duration-300 hover:bg-blue-700">
                            Explore Startups
                        </button>

                        <button className="rounded-full border border-white/20 bg-white/10 px-8 py-3 font-medium text-white backdrop-blur-lg transition duration-300 hover:bg-white/20">
                            Browse Opportunities
                        </button>
                    </div>

                    {/* Statistics */}
                    <div className="mt-14 flex flex-wrap justify-center gap-10 md:gap-20">
                        <div>
                            <h2 className="text-3xl font-bold text-white">
                                500+
                            </h2>
                            <p className="mt-2 text-gray-400">
                                Startups
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-white">
                                1.2K+
                            </h2>
                            <p className="mt-2 text-gray-400">
                                Opportunities
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-white">
                                15K+
                            </h2>
                            <p className="mt-2 text-gray-400">
                                Collaborators
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}