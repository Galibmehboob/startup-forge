"use client";

import { useEffect, useState } from "react";
import { useSession } from "@/lib/auth-client";
import { Card } from "@heroui/react";
import { getMyApplications } from "@/lib/api/applications/action";
import {
    Briefcase,
    Building2,
    CalendarDays,
    CircleDot,
    Sparkles,
    ChevronRight
} from "lucide-react";

export default function MyApplications() {
    const { data: session } = useSession();
    const [applications, setApplications] = useState([]);

    useEffect(() => {
        if (session?.user?.email) {
            getMyApplications(session.user.email)
                .then(data => setApplications(data || []))
                .catch(err => console.error("Error loading apps:", err));
        }
    }, [session]);

    const getStatusStyles = (status) => {
        switch (status?.toLowerCase()) {
            case "accepted":
                return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
            case "rejected":
                return "bg-red-500/10 text-red-400 border-red-500/20";
            default:
                return "bg-amber-500/10 text-amber-400 border-amber-500/20";
        }
    };

    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 text-white font-sans selection:bg-blue-500/30">

            {/* Premium Header Section */}
            <div className="mb-8 space-y-2 border-b border-white/5 pb-6">
                <div className="flex items-center gap-2 text-blue-400">
                    <Sparkles size={16} className="animate-pulse" />
                    <span className="text-xs font-semibold uppercase tracking-wider font-mono">Applicant Portal</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                            My Submitted Applications
                        </h1>
                        <p className="text-sm text-slate-400 mt-1">
                            Track the real-time status and timeline of your submitted job applications.
                        </p>
                    </div>
                    <div className="flex items-center gap-2 self-start sm:self-auto bg-slate-900 border border-white/10 px-4 py-1.5 rounded-xl shadow-inner">
                        <span className="text-xs text-slate-400 font-medium">Total Applications:</span>
                        <span className="text-sm font-bold font-mono text-blue-400">{applications.length}</span>
                    </div>
                </div>
            </div>

            {/* Application List Zone */}
            {applications.length === 0 ? (
                <div className="border border-dashed border-white/10 rounded-2xl p-12 text-center text-slate-500 text-sm bg-slate-900/10 backdrop-blur-sm">
                    No applications submitted yet. Browse opportunities to get started.
                </div>
            ) : (
                /* Horizontal stack flow instead of tight grids */
                <div className="space-y-3.5">
                    {applications.map((item) => (
                        /* Premium Full-Width Long Row Card */
                        <Card
                            key={item._id}
                            className="w-full bg-slate-900/30 backdrop-blur-xl border border-white/5 rounded-2xl relative group overflow-hidden transition-all duration-200 hover:border-white/10 hover:bg-slate-900/50 shadow-md p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6"
                        >
                            {/* Hover Left Indicator Strip */}
                            <div className="absolute top-0 bottom-0 left-0 w-[3px] bg-blue-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-200" />

                            {/* Left Side: Role Title & Company Mapping */}
                            <div className="flex items-center gap-4 min-w-0 flex-1">
                                <div className="p-3 bg-slate-950/60 border border-white/5 rounded-xl text-blue-400 shrink-0 shadow-inner group-hover:border-blue-500/20 transition-colors">
                                    <Briefcase size={20} />
                                </div>
                                <div className="min-w-0 space-y-1">
                                    <h2 className="text-base sm:text-lg font-bold text-slate-100 tracking-tight leading-none truncate group-hover:text-blue-400 transition-colors duration-150">
                                        {item.opportunity_name}
                                    </h2>
                                    <div className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-400">
                                        <Building2 size={14} className="text-slate-500 shrink-0" />
                                        <span className="truncate">{item.startup_name}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side: Meta Date Records, Status, and Call-to-action (All in 1 single line alignment) */}
                            <div className="flex flex-wrap sm:flex-nowrap items-center justify-between sm:justify-end gap-4 sm:gap-8 shrink-0 border-t sm:border-t-0 pt-3 sm:pt-0 border-white/5">

                                {/* Timeline section */}
                                <div className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-500 font-medium">
                                    <CalendarDays size={14} className="shrink-0 text-slate-600" />
                                    <span>Applied on:</span>
                                    <span className="text-slate-400 font-mono">
                                        {item.applied_at ? new Date(item.applied_at).toLocaleDateString(undefined, {
                                            year: 'numeric',
                                            month: 'short',
                                            day: 'numeric'
                                        }) : "Recent"}
                                    </span>
                                </div>

                                {/* Dynamic Pure Badge wrapper avoiding HeroUI dynamic forward properties errors */}
                                <div className={`flex items-center gap-1.5 px-3 py-1 border text-[11px] font-mono font-extrabold uppercase tracking-wider rounded-lg shadow-sm ${getStatusStyles(item.status)}`}>
                                    <CircleDot size={8} className="animate-pulse shrink-0" />
                                    <span>{item.status || "pending"}</span>
                                </div>

                                {/* Minimalist Navigation Arrow Pointer */}
                                <div className="hidden md:block p-1 bg-white/0 group-hover:bg-white/5 rounded-lg text-slate-600 group-hover:text-slate-300 transition-all duration-200 translate-x-0 group-hover:translate-x-0.5">
                                    <ChevronRight size={16} />
                                </div>
                            </div>

                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
}