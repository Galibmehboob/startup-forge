"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    Rocket,
    Layers,
    TrendingUp,
    Globe,
    Plus,
    ArrowUpRight,
    CheckCircle2,
    Search,
    Eye
} from "lucide-react";
import { Card, Button } from "@heroui/react";

const StartupsPage = () => {
    const [searchQuery, setSearchQuery] = useState("");

    // Sample data: Founder er create kora dynamic startups card list
    const myStartups = [
        {
            id: 1,
            name: "TechForge AI",
            tagline: "Autonomous Workflow Orchestration for Enterprises",
            status: "Incubating",
            fundingRaised: "$150K",
            industry: "Artificial Intelligence",
            logoBg: "from-blue-600 to-cyan-500",
            stage: "Seed Cohort",
            metrics: "94% Active Retention"
        },
        {
            id: 2,
            name: "NexusFin Labs",
            tagline: "Decentralized Micro-Lending Hub for South Asia",
            status: "Funded",
            fundingRaised: "$1.2M",
            industry: "FinTech",
            logoBg: "from-purple-600 to-indigo-500",
            stage: "Series A",
            metrics: "$420K ARR"
        },
        {
            id: 3,
            name: "QuantBio Health",
            tagline: "Predictive Genomics Framework via Machine Learning",
            status: "Reviewing",
            fundingRaised: "$0 (Pitching)",
            industry: "HealthTech",
            logoBg: "from-emerald-600 to-teal-500",
            stage: "Pre-Seed",
            metrics: "Clinical Beta Live"
        }
    ];

    // Filter functionality based on user input
    const filteredStartups = myStartups.filter(startup =>
        startup.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        startup.industry.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-slate-950 bg-gradient-to-b from-slate-950 via-slate-900 to-[#0c1938] text-white selection:bg-blue-500/30 overflow-x-hidden">

            {/* Background ambient lighting effects */}
            <div className="absolute top-0 right-1/4 w-80 h-80 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 relative z-10">

                {/* Top Header / Control Actions Area */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12 border-b border-white/5 pb-8">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-2 text-blue-400 text-sm font-medium mb-1.5"
                        >
                            <Layers size={16} />
                            <span>Founder Workspace</span>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent"
                        >
                            My Ventures
                        </motion.h1>
                        <p className="text-slate-400 text-xs md:text-sm mt-1">Manage pipelines, metrics, tracking and scale metrics for your forged concepts.</p>
                    </div>

                    {/* Create Button with Ripple / Glow setup */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="shrink-0"
                    >
                        <Button
                            className="w-full sm:w-auto h-12 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold rounded-xl shadow-[0_4px_20px_rgba(37,99,235,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                            endContent={<Plus size={18} />}
                        >
                            Launch New Startup
                        </Button>
                    </motion.div>
                </div>

                {/* Global Search Interface bar */}
                <div className="mb-10 max-w-md">
                    <div className="relative group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors duration-200" size={18} />
                        <input
                            type="text"
                            placeholder="Filter by name or domain..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-slate-900/50 border border-white/10 p-3 pl-12 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all duration-200 text-sm backdrop-blur-md"
                        />
                    </div>
                </div>

                {/* Startups Cards Main Grid Structure */}
                {filteredStartups.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredStartups.map((startup, index) => (
                            <motion.div
                                key={startup.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                whileHover={{ y: -6 }}
                                className="group"
                            >
                                <Card className="h-full border border-white/10 bg-slate-900/30 backdrop-blur-xl p-6 rounded-2xl flex flex-col justify-between transition-all duration-300 group-hover:border-blue-500/30 shadow-lg text-white">

                                    <div>
                                        {/* Upper row badge status context wrapper */}
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 bg-slate-800/60 border border-white/5 px-2.5 py-1 rounded-md">
                                                {startup.industry}
                                            </span>

                                            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border bg-opacity-10 border-opacity-20
                        ${startup.status === 'Funded' ? 'bg-emerald-500 border-emerald-500 text-emerald-400' : 
                          startup.status === 'Incubating' ? 'bg-blue-500 border-blue-500 text-blue-400' : 
                          'bg-amber-500 border-amber-500 text-amber-300'}"
                                            >
                                                <span className="w-1.5 h-1.5 rounded-full bg-current" />
                                                {startup.status}
                                            </div>
                                        </div>

                                        {/* Logo & Headline block */}
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${startup.logoBg} flex items-center justify-center font-bold text-lg text-white shadow-inner shrink-0`}>
                                                {startup.name.charAt(0)}
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold group-hover:text-blue-400 transition-colors duration-200 flex items-center gap-1.5">
                                                    {startup.name}
                                                </h3>
                                                <p className="text-xs text-slate-500 font-medium">{startup.stage}</p>
                                            </div>
                                        </div>

                                        {/* Description details content text */}
                                        <p className="text-sm text-slate-400 line-clamp-2 mb-6 leading-relaxed">
                                            {startup.tagline}
                                        </p>
                                    </div>

                                    {/* Operational / Financial metrics zone boundary lines */}
                                    <div>
                                        <div className="grid grid-cols-2 gap-3 p-3 bg-slate-950/40 border border-white/5 rounded-xl mb-5 text-center">
                                            <div>
                                                <p className="text-[10px] text-slate-500 uppercase font-medium">Funding Raised</p>
                                                <p className="text-sm font-semibold text-slate-200 mt-0.5 flex items-center justify-center gap-1">
                                                    <TrendingUp size={12} className="text-emerald-400" />
                                                    {startup.fundingRaised}
                                                </p>
                                            </div>
                                            <div className="border-l border-white/5">
                                                <p className="text-[10px] text-slate-500 uppercase font-medium">Core Progress</p>
                                                <p className="text-sm font-semibold text-slate-200 mt-0.5 truncate px-1">
                                                    {startup.metrics}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Dynamic Action Controls for Workspace redirection */}
                                        <div className="flex items-center gap-2">
                                            <Button
                                                variant="bordered"
                                                className="flex-1 h-10 border-white/10 hover:bg-slate-800 text-slate-300 font-medium rounded-lg text-xs"
                                                startContent={<Eye size={14} />}
                                            >
                                                View Deck
                                            </Button>
                                            <Button
                                                className="flex-1 h-10 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-lg text-xs"
                                                endContent={<ArrowUpRight size={14} />}
                                            >
                                                Dashboard
                                            </Button>
                                        </div>
                                    </div>

                                </Card>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    /* Empty Pipeline fallback state UI */
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20 border border-dashed border-white/10 rounded-2xl bg-slate-900/10 backdrop-blur-sm max-w-xl mx-auto px-4"
                    >
                        <div className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mx-auto mb-4">
                            <Rocket size={22} />
                        </div>
                        <h3 className="text-lg font-bold text-slate-200">No matching ventures found</h3>
                        <p className="text-slate-400 text-sm mt-1 max-w-sm mx-auto">
                            You haven,t initialized or filtered matching concepts yet. Ready to turn your tech pipeline live?
                        </p>
                        <Button
                            className="mt-6 h-10 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg text-xs"
                            endContent={<Plus size={14} />}
                        >
                            Register First Idea
                        </Button>
                    </motion.div>
                )}

            </div>
        </div>
    );
};

export default StartupsPage;