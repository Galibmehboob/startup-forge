"use client";

import { HandPointLeft, Magnifier } from "@gravity-ui/icons";
import { Button, Label, ListBox, SearchField, Select } from "@heroui/react";
import { RotateCcw, Search, SlidersHorizontal } from "lucide-react";
import { useRouter } from "next/navigation";

import { useState } from "react";

const WORK_TYPES = ["Remote", "Hybrid", "On-site"];

const LEVELS = [
    "Full Time", "Part Time", "Internship", "Contract",
    "Freelance", "Volunteer", "Equity Only"
];

export default function FilterPanel() {

    const [role, setRole] = useState("");
    const [skill, setSkill] = useState("");
    const [work, setWork] = useState("");
    const [level, setLevel] = useState("")
    const router = useRouter()

    // console.log(role, skill, work, industry);

    const handleApplyFilters = () => {
        const params = new URLSearchParams();
        // params.set("page", "1");
        if (role) {
            params.set("role", role);
        }
        if (skill) {
            params.set("skill", skill);
        }
        if (work) {
            params.set("work", work);
        }
        if (level) {
            params.set("level", level);
        }
        router.push(`/opportunities?${params.toString()}`);
    };



    const handleReset = () => {
        setRole("");
        setSkill("");
        setWork("");
        setLevel("");
        router.push("/opportunities")
    };

    return (
        <div className="rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-xl p-5 md:p-6 shadow-[0_8px_32px_rgba(0,0,0,0.3)] text-white">

            {/* Header Title for Filter Action */}
            <div className="flex items-center gap-2 mb-5 text-slate-300 text-xs md:text-sm font-semibold uppercase tracking-wider">
                <SlidersHorizontal size={14} className="text-blue-400" />
                <span>Filter Opportunities</span>
            </div>

            <div className="grid grid-cols-1  gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 items-end">

                {/* Role Search */}
                <SearchField name="role" className="flex flex-col gap-1.5 w-full">
                    <Label className="text-xs md:text-sm font-medium text-slate-300">Role Title</Label>
                    <SearchField.Group className="relative flex items-center bg-slate-950/50 border border-white/10 rounded-xl h-12 px-3 focus-within:border-blue-500/50 transition-all duration-200">
                        <SearchField.SearchIcon className="text-slate-500 mr-2 shrink-0" size={16} />
                        <SearchField.Input
                            value={role}
                            onChange={e => setRole(e.target.value)}
                            placeholder="Search role..."
                            className="w-full bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none"
                        />
                        <SearchField.ClearButton onClick={() => setRole("")} className="text-slate-500 hover:text-white transition-colors" />
                    </SearchField.Group>
                </SearchField>

                {/* Skill Search */}
                <SearchField name="skill" className="flex flex-col gap-1.5 w-full">
                    <Label className="text-xs md:text-sm font-medium text-slate-300">Required Skill</Label>
                    <SearchField.Group className="relative flex items-center bg-slate-950/50 border border-white/10 rounded-xl h-12 px-3 focus-within:border-blue-500/50 transition-all duration-200">
                        <SearchField.SearchIcon className="text-slate-500 mr-2 shrink-0" size={16} />
                        <SearchField.Input
                            value={skill}
                            onChange={e => setSkill(e.target.value)}
                            placeholder="Search skill..."
                            className="w-full bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none"
                        />
                        <SearchField.ClearButton onClick={() => setSkill("")} className="text-slate-500 hover:text-white transition-colors" />
                    </SearchField.Group>
                </SearchField>

                {/* Work Type */}
                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">
                        Work Type
                    </label>

                    <select
                        value={work}
                        onChange={(e) => setWork(e.target.value)}
                        className="w-full h-12 rounded-xl border border-slate-700 bg-slate-900 px-4 text-white outline-none transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    >
                        <option value="">All Work Types</option>

                        {WORK_TYPES.map((item) => (
                            <option
                                key={item}
                                value={item}
                                className="bg-slate-900 text-white"
                            >
                                {item}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Industry */}
                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">
                        Levels
                    </label>

                    <select
                        value={level}
                        onChange={(e) => setLevel(e.target.value)}
                        className="w-full h-12 rounded-xl border border-slate-700 bg-slate-900 px-4 text-white outline-none transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    >
                        <option value="">All Levels</option>

                        {LEVELS.map((item) => (
                            <option
                                key={item}
                                value={item}
                                className="bg-slate-900 text-white"
                            >
                                {item}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Search Button */}
                <div className="w-full">
                    <Button
                        onClick={handleApplyFilters}
                        color="primary"
                        className="h-12 w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold rounded-xl shadow-md transition-all duration-200 text-sm active:scale-[0.98]"
                    >
                        Search
                    </Button>
                </div>

                <div className="flex">
                    {/* Reset Button */}
                    <div className="w-full">
                        <Button
                            variant="bordered"
                            className="h-12  border-white/10 bg-slate-800/40 text-slate-300 hover:bg-slate-800 font-medium rounded-xl transition-all duration-200 text-sm active:scale-[0.98] gap-2"
                            onPress={handleReset}
                        >
                            <RotateCcw size={20} className="text-slate-400" />

                        </Button>
                    </div>
                    <div className="flex items-center justify-center h-12">
                        <span className="wave-hand text-4xl cursor-default">
                            <HandPointLeft className="w-14 h-14" />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}