"use client";

import { Button, Label, ListBox, SearchField, Select } from "@heroui/react";
import { RotateCcw, Search, SlidersHorizontal } from "lucide-react";

const WORK_TYPES = ["Remote", "Hybrid", "On-site"];

const INDUSTRIES = [
    "SaaS",
    "EdTech",
    "FinTech",
    "HealthTech",
    "AI",
];

export default function FilterPanel() {
    const handleReset = () => {
        console.log("Reset Filters");
    };

    return (
        <div className="rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-xl p-5 md:p-6 shadow-[0_8px_32px_rgba(0,0,0,0.3)] text-white">

            {/* Header Title for Filter Action */}
            <div className="flex items-center gap-2 mb-5 text-slate-300 text-xs md:text-sm font-semibold uppercase tracking-wider">
                <SlidersHorizontal size={14} className="text-blue-400" />
                <span>Filter Opportunities</span>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 items-end">

                {/* Role Search */}
                <SearchField name="role" className="flex flex-col gap-1.5 w-full">
                    <Label className="text-xs md:text-sm font-medium text-slate-300">Role Title</Label>
                    <SearchField.Group className="relative flex items-center bg-slate-950/50 border border-white/10 rounded-xl h-12 px-3 focus-within:border-blue-500/50 transition-all duration-200">
                        <SearchField.SearchIcon className="text-slate-500 mr-2 shrink-0" size={16} />
                        <SearchField.Input
                            placeholder="Search role..."
                            className="w-full bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none"
                        />
                        <SearchField.ClearButton className="text-slate-500 hover:text-white transition-colors" />
                    </SearchField.Group>
                </SearchField>

                {/* Skill Search */}
                <SearchField name="skill" className="flex flex-col gap-1.5 w-full">
                    <Label className="text-xs md:text-sm font-medium text-slate-300">Required Skill</Label>
                    <SearchField.Group className="relative flex items-center bg-slate-950/50 border border-white/10 rounded-xl h-12 px-3 focus-within:border-blue-500/50 transition-all duration-200">
                        <SearchField.SearchIcon className="text-slate-500 mr-2 shrink-0" size={16} />
                        <SearchField.Input
                            placeholder="Search skill..."
                            className="w-full bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none"
                        />
                        <SearchField.ClearButton className="text-slate-500 hover:text-white transition-colors" />
                    </SearchField.Group>
                </SearchField>

                {/* Work Type */}
                <Select className="w-full flex flex-col gap-1.5 text-white" placeholder="Select work type">
                    <Label className="text-xs md:text-sm font-medium text-slate-300">Work Type</Label>

                    <Select.Trigger className="flex items-center justify-between w-full bg-slate-950/50 border border-white/10 rounded-xl h-12 px-4 text-sm text-slate-300 focus:border-blue-500/50 transition-all duration-200">
                        <Select.Value className="placeholder:text-slate-500" />
                        <Select.Indicator className="text-slate-500" />
                    </Select.Trigger>

                    <Select.Popover className="bg-slate-900 border border-white/10 rounded-xl p-1 shadow-2xl mt-1 text-white">
                        <ListBox className="flex flex-col gap-1">
                            {WORK_TYPES.map((item) => (
                                <ListBox.Item
                                    key={item}
                                    id={item}
                                    textValue={item}
                                    className="px-3 py-2 text-sm text-slate-300 hover:bg-blue-600 hover:text-white rounded-lg cursor-pointer transition-colors duration-150 flex items-center justify-between"
                                >
                                    {item}
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                            ))}
                        </ListBox>
                    </Select.Popover>
                </Select>

                {/* Industry */}
                <Select className="w-full flex flex-col gap-1.5 text-white" placeholder="Select industry">
                    <Label className="text-xs md:text-sm font-medium text-slate-300">Industry</Label>

                    <Select.Trigger className="flex items-center justify-between w-full bg-slate-950/50 border border-white/10 rounded-xl h-12 px-4 text-sm text-slate-300 focus:border-blue-500/50 transition-all duration-200">
                        <Select.Value className="placeholder:text-slate-500" />
                        <Select.Indicator className="text-slate-500" />
                    </Select.Trigger>

                    <Select.Popover className="bg-slate-900 border border-white/10 rounded-xl p-1 shadow-2xl mt-1 text-white">
                        <ListBox className="flex flex-col gap-1">
                            {INDUSTRIES.map((item) => (
                                <ListBox.Item
                                    key={item}
                                    id={item}
                                    textValue={item}
                                    className="px-3 py-2 text-sm text-slate-300 hover:bg-blue-600 hover:text-white rounded-lg cursor-pointer transition-colors duration-150 flex items-center justify-between"
                                >
                                    {item}
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                            ))}
                        </ListBox>
                    </Select.Popover>
                </Select>

                {/* Search Button */}
                <div className="w-full">
                    <Button
                        color="primary"
                        className="h-12 w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold rounded-xl shadow-md transition-all duration-200 text-sm active:scale-[0.98]"
                    >
                        Search
                    </Button>
                </div>

                {/* Reset Button */}
                <div className="w-full">
                    <Button
                        variant="bordered"
                        className="h-12 w-full border-white/10 bg-slate-800/40 text-slate-300 hover:bg-slate-800 font-medium rounded-xl transition-all duration-200 text-sm active:scale-[0.98] gap-2"
                        onPress={handleReset}
                    >
                        <RotateCcw size={14} className="text-slate-400" />
                        Reset
                    </Button>
                </div>

            </div>
        </div>
    );
}