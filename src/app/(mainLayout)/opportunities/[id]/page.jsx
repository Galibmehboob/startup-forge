import { baseUrl } from "@/lib/api/basrUrl";
import {
    Button,
    Card,
    Chip,
} from "@heroui/react";

import {
    Briefcase,
    CalendarDays,
    Clock3,
    Laptop,
    ArrowLeft,
    Sparkles,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const fetchOpportunity = async (_id) => {
    const res = await fetch(`${baseUrl}/api/opportunities/${_id}`, {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch opportunity");
    }

    const data = await res.json();
    return data;
};

const CardDetailsPage = async ({ params }) => {
    const { id } = await params;
    const opportunity = await fetchOpportunity(id);

    return (
        <section className="min-h-screen bg-slate-950 bg-gradient-to-b from-slate-955 via-slate-900 to-[#0c1938] text-white overflow-x-hidden selection:bg-blue-500/30 py-16 relative">

            {/* Ambient Background Glow Effect */}
            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-4xl mx-auto px-4 relative z-10">
                <Card
                    radius="2xl"
                    className="border border-white/10 bg-slate-900/40 backdrop-blur-xl p-6 sm:p-10 shadow-[0_24px_60px_rgba(0,0,0,0.4)] text-white"
                >
                    {/* Header Zone: Chips and Title Blocks */}
                    <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between border-b border-white/5 pb-8">

                        {/* Left Info Column */}
                        <div className="flex-1 space-y-3 text-left">
                            <Chip
                                variant="flat"
                                className="bg-blue-500/10 text-blue-400 border border-blue-500/20 font-medium text-xs rounded-lg"
                            >
                                <span className="flex items-center gap-1">
                                    <Sparkles size={12} /> Opportunity Specification
                                </span>
                            </Chip>

                            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent leading-tight">
                                {opportunity?.role_title}
                            </h1>
                        </div>

                        {/* Right Brand Logo Column */}
                        <div className="flex items-center gap-4 bg-slate-950/40 border border-white/5 rounded-2xl p-4 shrink-0 backdrop-blur-md">
                            {opportunity?.logo && (
                                <Image
                                    src={opportunity.logo}
                                    alt={opportunity.startup_name || "Startup"}
                                    width={56}
                                    height={56}
                                    className="h-14 w-14 rounded-xl border border-white/10 bg-slate-950 object-cover shrink-0"
                                />
                            )}

                            <div>
                                <Chip
                                    variant="flat"
                                    size="sm"
                                    className="mb-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 font-medium text-[10px]"
                                >
                                    {opportunity?.industry}
                                </Chip>
                                <h2 className="text-lg font-bold text-slate-200">
                                    {opportunity?.startup_name}
                                </h2>
                            </div>
                        </div>

                    </div>

                    {/* Operational Core Parameters Info Grid */}
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-8">

                        <div className="flex items-center gap-4 rounded-xl border border-white/5 bg-slate-950/30 p-4 transition-all duration-200 hover:border-white/10">
                            <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 shrink-0">
                                <Laptop size={18} />
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">Work Type</p>
                                <h3 className="font-semibold text-slate-200 mt-0.5 text-sm sm:text-base">
                                    {opportunity?.work_type}
                                </h3>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 rounded-xl border border-white/5 bg-slate-950/30 p-4 transition-all duration-200 hover:border-white/10">
                            <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                                <Clock3 size={18} />
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">Commitment</p>
                                <h3 className="font-semibold text-slate-200 mt-0.5 text-sm sm:text-base">
                                    {opportunity?.commitment_level}
                                </h3>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 rounded-xl border border-white/5 bg-slate-950/30 p-4 sm:col-span-2 lg:col-span-1 transition-all duration-200 hover:border-white/10">
                            <div className="p-2.5 rounded-lg bg-orange-500/10 text-orange-400 border border-orange-500/20 shrink-0">
                                <CalendarDays size={18} />
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">Application Deadline</p>
                                <h3 className="font-semibold text-slate-200 mt-0.5 text-sm sm:text-base">
                                    {opportunity?.deadline}
                                </h3>
                            </div>
                        </div>

                    </div>

                    {/* Skill Tags Boundary Matrix */}
                    <div className="mt-8 border-t border-white/5 pt-8">
                        <div className="mb-4 flex items-center gap-2">
                            <Briefcase size={16} className="text-blue-400" />
                            <h2 className="text-base font-bold uppercase tracking-wider text-slate-300">
                                Required Skill Set
                            </h2>
                        </div>

                        <div className="flex flex-wrap gap-2.5">
                            {opportunity?.required_skills?.map((skill) => (
                                <Chip
                                    key={skill}
                                    variant="flat"
                                    className="bg-slate-800/60 text-slate-300 border border-white/5 rounded-lg font-medium text-xs px-3 py-1"
                                >
                                    {skill}
                                </Chip>
                            ))}
                        </div>
                    </div>

                    {/* Form Controls / Redirections Block */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-10 pt-6 border-t border-white/5">
                        <Link href={`/opportunities`} className="w-full sm:w-1/3">
                            <Button
                                variant="bordered"
                                radius="xl"
                                className="h-12 w-full text-slate-300 border-white/10 bg-slate-800/20 hover:bg-slate-800 font-semibold text-sm transition-all duration-200 gap-2"
                            >
                                <ArrowLeft size={16} /> Back
                            </Button>
                        </Link>

                        <Button
                            radius="xl"
                            className="group flex-1 h-12 w-full bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white font-bold text-sm shadow-xl hover:opacity-95 transition-all duration-200 active:scale-[0.99]"
                        >
                            Apply Now
                        </Button>
                    </div>

                </Card>
            </div>
        </section>
    );
};

export default CardDetailsPage;