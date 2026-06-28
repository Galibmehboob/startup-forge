"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import DashboardTitle from '@/Components/DashboardTitle';

// HeroUI v3 layout updates parameters layout core base setup
import {
    Select,
    ListBox
} from '@heroui/react';

// Iconography element bundles
import {
    Search,
    Briefcase,
    CheckCircle2,
    Clock,
    XCircle,
    ArrowUpRight,
    SlidersHorizontal
} from 'lucide-react';

export default function ApplicationPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [statusFilter, setStatusFilter] = useState(new Set(["all"]));

    // Framer motion animation configurations
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.08 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 15 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
    };

    return (
        <div className="space-y-8 p-2 sm:p-4 text-white font-sans selection:bg-blue-500/30">

            {/* Header Dashboard Area */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-white/5 pb-6">
                <DashboardTitle
                    title="Applications"
                    description="Read it loud and make it possible. Manage your ecosystem applications pipeline."
                />
            </div>

            {/* Metrics Analytics Track Cards */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="grid gap-4 grid-cols-2 lg:grid-cols-4"
            >
                {[
                    { label: "Total Applied", value: "12", icon: Briefcase, color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
                    { label: "Pending Review", value: "5", icon: Clock, color: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-500/20" },
                    { label: "Selected Shortlist", value: "3", icon: CheckCircle2, color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
                    { label: "Rejected Pipeline", value: "4", icon: XCircle, color: "text-red-400", bg: "bg-red-500/10", border: "border-red-500/20" }
                ].map((stat, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover={{ y: -4, transition: { duration: 0.2 } }}
                        className="flex items-center gap-4 rounded-2xl border border-white/5 bg-slate-900/40 backdrop-blur-md p-4 shadow-lg shadow-black/20"
                    >
                        <div className={`p-3 rounded-xl ${stat.bg} ${stat.color} border ${stat.border} shrink-0`}>
                            <stat.icon size={20} />
                        </div>
                        <div>
                            <p className="text-[10px] sm:text-xs text-slate-500 font-bold tracking-widest uppercase">{stat.label}</p>
                            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-100 mt-0.5">{stat.value}</h3>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Controls Filter Management Row */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between bg-slate-900/20 border border-white/5 p-4 rounded-2xl backdrop-blur-xl">

                {/* Fixed Search Input Wrapper Block (Aponar console DOM properties error fix wrapper) */}
                <div className="flex-1 max-w-md relative flex items-center">
                    <Search size={16} className="absolute left-3.5 text-slate-500 pointer-events-none z-10" />
                    <input
                        type="text"
                        placeholder="Search by role or team name..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-slate-950/60 border border-white/10 focus:border-blue-500/50 outline-none text-sm text-white placeholder:text-slate-500 h-11 rounded-xl pl-10 pr-4 transition-all duration-200"
                    />
                </div>

                {/* HeroUI Selector Pipeline Layer */}
                <div className="w-full sm:w-60">
                    <Select
                        placeholder="Select Pipeline Status"
                        variant="flat"
                        selectedKeys={statusFilter}
                        onSelectionChange={setStatusFilter}
                        startContent={<SlidersHorizontal size={14} className="text-slate-500 mr-1" />}
                        classNames={{
                            trigger: "bg-slate-950/60 border border-white/10 hover:bg-slate-900 h-11 rounded-xl transition-all duration-200",
                            value: "text-sm text-slate-200 font-medium"
                        }}
                    >
                        <Select.Popover className="bg-slate-900 border border-white/10 text-white rounded-xl shadow-xl">
                            <ListBox className="p-1">
                                <ListBox.Item id="all" textValue="All Status" className="text-sm rounded-lg text-slate-200 hover:bg-slate-800">All Applications</ListBox.Item>
                                <ListBox.Item id="pending" textValue="Pending" className="text-sm rounded-lg text-slate-200 hover:bg-slate-800">Pending</ListBox.Item>
                                <ListBox.Item id="selected" textValue="Selected" className="text-sm rounded-lg text-slate-200 hover:bg-slate-800">Selected</ListBox.Item>
                                <ListBox.Item id="rejected" textValue="Rejected" className="text-sm rounded-lg text-slate-200 hover:bg-slate-800">Rejected</ListBox.Item>
                            </ListBox>
                        </Select.Popover>
                    </Select>
                </div>
            </div>

            {/* Applications List Grid Container Wrapper */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="grid gap-5 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2"
            >
                {/* Simulated Mock Application cards */}
                <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.01, border: "1px solid rgba(255,255,255,0.12)" }}
                    className="border border-white/5 bg-slate-900/30 rounded-2xl p-6 relative group overflow-hidden transition-all duration-200 shadow-lg"
                >
                    <div className="absolute top-0 left-0 w-1 h-full bg-orange-500" />
                    <div className="flex justify-between items-start">
                        <div>
                            <span className="text-[10px] font-mono tracking-wider text-orange-400 bg-orange-500/10 border border-orange-500/20 px-2 py-0.5 rounded-md uppercase font-bold">
                                Pending Review
                            </span>
                            <h3 className="text-lg font-bold text-slate-200 mt-3 group-hover:text-blue-400 transition-colors duration-150">
                                Software Engineer Intern
                            </h3>
                            <p className="text-sm text-slate-400 mt-1">StartupForge Ecosystem Labs &bull; Remote</p>
                        </div>
                        <button className="text-slate-500 hover:text-white p-1.5 bg-white/5 rounded-xl transition-colors">
                            <ArrowUpRight size={16} />
                        </button>
                    </div>
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.01, border: "1px solid rgba(255,255,255,0.12)" }}
                    className="border border-white/5 bg-slate-900/30 rounded-2xl p-6 relative group overflow-hidden transition-all duration-200 shadow-lg"
                >
                    <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500" />
                    <div className="flex justify-between items-start">
                        <div>
                            <span className="text-[10px] font-mono tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-md uppercase font-bold">
                                Selected
                            </span>
                            <h3 className="text-lg font-bold text-slate-200 mt-3 group-hover:text-blue-400 transition-colors duration-150">
                                Senior Frontend Architect
                            </h3>
                            <p className="text-sm text-slate-400 mt-1">MetaCraft Ventures &bull; Hybrid (Dhaka)</p>
                        </div>
                        <button className="text-slate-500 hover:text-white p-1.5 bg-white/5 rounded-xl transition-colors">
                            <ArrowUpRight size={16} />
                        </button>
                    </div>
                </motion.div>

            </motion.div>
        </div>
    );
}