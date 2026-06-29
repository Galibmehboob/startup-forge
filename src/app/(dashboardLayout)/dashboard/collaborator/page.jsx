"use client";

import React from 'react';
import { Card, Button } from "@heroui/react";
import {
    Sparkles,
    Layers,
    GitBranch,
    Clock,
    Users,
    ArrowUpRight,
    ArrowRight,
    Terminal,
    Bell
} from "lucide-react";

const CollaboratorPage = () => {
    // Current live stats mock dataset
    const metrics = [
        {
            title: "Active Workspaces",
            value: "12",
            change: "+3 this week",
            icon: <Layers size={20} className="text-blue-400" />,
            bgColor: "from-blue-500/10 to-indigo-500/5"
        },
        {
            title: "Merged Commits",
            value: "148",
            change: "Top 5% contributor",
            icon: <GitBranch size={20} className="text-emerald-400" />,
            bgColor: "from-emerald-500/10 to-teal-500/5"
        },
        {
            title: "Production Hours",
            value: "42.5h",
            change: "Avg 6.2h / day",
            icon: <Clock size={20} className="text-amber-400" />,
            bgColor: "from-amber-500/10 to-orange-500/5"
        }
    ];

    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 text-white font-sans selection:bg-blue-500/30">

            {/* Header / Welcome Zone */}
            <div className="mb-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-b border-white/5 pb-8">
                <div className="space-y-2">
                    <div className="flex items-center gap-2 text-blue-400">
                        <Sparkles size={16} className="animate-pulse" />
                        <span className="text-xs font-semibold uppercase tracking-wider font-mono">Collaborator Workspace</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-black tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                        Welcome to StartupForge Hub 🚀
                    </h1>
                    <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
                        Manage your repository streams, evaluate deployment logs, and review cross-functional metrics from one unified matrix ecosystem.
                    </p>
                </div>

                {/* Right Header Controls */}
                <div className="flex items-center gap-3">
                    <button className="p-3 bg-slate-900 border border-white/10 text-slate-400 hover:text-white rounded-xl shadow-inner transition-colors relative">
                        <Bell size={18} />
                        <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-blue-500 rounded-full" />
                    </button>
                    <Button className="h-11 px-5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-sm font-semibold rounded-xl shadow-lg transition-all active:scale-[0.98]">
                        Launch Dev Console
                    </Button>
                </div>
            </div>

            {/* Quick Stats Grid Layer */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-10">
                {metrics.map((stat, idx) => (
                    <Card
                        key={idx}
                        className="bg-slate-900/30 backdrop-blur-xl border border-white/5 rounded-2xl p-6 relative overflow-hidden group hover:border-white/10 transition-all duration-200"
                    >
                        <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgColor} opacity-40 group-hover:opacity-60 transition-opacity`} />

                        <div className="relative flex items-center justify-between">
                            <div className="space-y-2">
                                <p className="text-xs font-medium text-slate-400 uppercase tracking-wider font-mono">{stat.title}</p>
                                <h3 className="text-3xl font-black tracking-tight text-white">{stat.value}</h3>
                                <p className="text-xs text-slate-500 font-medium">{stat.change}</p>
                            </div>
                            <div className="p-3.5 bg-slate-950/80 border border-white/10 rounded-xl shadow-inner text-slate-300">
                                {stat.icon}
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            {/* Two-Column Section: Activity & Project Directives */}
            <div className="grid gap-6 lg:grid-cols-3">

                {/* Column 1 & 2: Recent Projects List (Full-Width Linear Row Look) */}
                <div className="lg:col-span-2 space-y-4">
                    <div className="flex items-center justify-between px-1">
                        <div className="flex items-center gap-2 text-slate-300 font-bold text-lg">
                            <Terminal size={18} className="text-blue-500" />
                            <h2>Recent Repositories</h2>
                        </div>
                        <button className="text-xs text-slate-400 hover:text-blue-400 flex items-center gap-1 font-medium transition-colors">
                            <span>View All</span>
                            <ArrowRight size={14} />
                        </button>
                    </div>

                    <div className="space-y-3">
                        {[
                            { name: "startupforge-core-v3", tech: "Next.js 16 • Turbopack", status: "Active" },
                            { name: "bi-analytics-pipeline", tech: "Python • Fast API", status: "Review" }
                        ].map((repo, idx) => (
                            <Card
                                key={idx}
                                className="w-full bg-slate-900/20 backdrop-blur-md border border-white/5 hover:border-white/10 rounded-2xl p-4 flex items-center justify-between gap-4 group transition-all"
                            >
                                <div className="flex items-center gap-3.5 min-w-0">
                                    <div className="w-2.5 h-2.5 bg-blue-500 rounded-full group-hover:scale-110 transition-transform" />
                                    <div className="min-w-0">
                                        <h4 className="text-sm font-bold text-slate-200 group-hover:text-blue-400 transition-colors truncate">
                                            {repo.name}
                                        </h4>
                                        <p className="text-xs text-slate-500 font-mono mt-0.5">{repo.tech}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 shrink-0">
                                    <span className="text-xs font-mono bg-white/5 px-2.5 py-1 rounded-md border border-white/5 text-slate-400">
                                        {repo.status}
                                    </span>
                                    <ArrowUpRight size={15} className="text-slate-600 group-hover:text-slate-300 transition-colors" />
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Column 3: Active Team / Collaborators Section */}
                <div className="space-y-4">
                    <div className="px-1">
                        <div className="flex items-center gap-2 text-slate-300 font-bold text-lg">
                            <Users size={18} className="text-indigo-400" />
                            <h2>Team Sync</h2>
                        </div>
                    </div>

                    <Card className="bg-slate-900/20 backdrop-blur-md border border-white/5 rounded-2xl p-5 space-y-4 shadow-xl">
                        <p className="text-xs text-slate-400 leading-relaxed">
                            You are operating inside the <span className="text-slate-200 font-semibold">Forge Lab Alpha</span> crew context.
                        </p>

                        {/* Member Row Blocks */}
                        <div className="space-y-3">
                            {[
                                { name: "Alex Mercer", role: "Lead Architect", active: true },
                                { name: "Sarah Connor", role: "DevOps Engineer", active: false }
                            ].map((user, idx) => (
                                <div key={idx} className="flex items-center justify-between gap-3 border-b border-white/5 pb-2.5 last:border-0 last:pb-0">
                                    <div>
                                        <h5 className="text-xs font-bold text-slate-300">{user.name}</h5>
                                        <p className="text-[11px] text-slate-500 mt-0.5">{user.role}</p>
                                    </div>
                                    <span className={`w-2 h-2 rounded-full ${user.active ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" : "bg-slate-600"}`} />
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>

            </div>

        </div>
    );
};

export default CollaboratorPage;