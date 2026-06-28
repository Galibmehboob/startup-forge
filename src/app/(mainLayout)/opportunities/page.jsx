import FilterPanel from "@/Components/FilterPanel";
import OpportunityCard from "@/Components/OpportunityCard";
import { fetchOpportunities } from "@/lib/api/opportunities/data";
import { Layers, Sparkles } from "lucide-react";

const OpportunitiesPage = async () => {
    const opportunities = await fetchOpportunities();

    return (
        <section className="min-h-screen bg-slate-950 bg-gradient-to-b from-slate-950 via-slate-900 to-[#0c1938] text-white overflow-x-hidden selection:bg-blue-500/30 py-12 relative">

            {/* Background ambient lighting effects to match StartupsPage */}
            <div className="absolute top-0 right-1/4 w-80 h-80 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/3 left-1/4 w-[450px] h-[450px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none" />

            {/* Main Content Layout Wrapper */}
            <div className="w-11/12 mx-auto px-4 relative z-10 animate-fade-in duration-700">

                {/* Header Section with smooth sliding look */}
                <div className="flex flex-col gap-2 mb-10 border-b border-white/5 pb-6 transform transition-all duration-500">
                    <div className="flex items-center gap-2 text-blue-400 text-sm font-medium">
                        <Sparkles size={16} className="animate-pulse" />
                        <span>Ecosystem Hub</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                        Explore Opportunities
                    </h1>
                    <p className="text-slate-400 text-xs md:text-sm">
                        Discover funded projects, incubator programs, and venture capital allocations within Startup Forge.
                    </p>
                </div>

                {/* Filter Panel Card Wrapper */}
                <div className="bg-slate-900/30 backdrop-blur-xl border border-white/5 p-2 rounded-2xl transition-all duration-300 hover:border-white/10">
                    <FilterPanel />
                </div>

                {/* Opportunity Cards Native Grid Layout */}
                <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {opportunities?.length > 0 ? (
                        opportunities.map((opportunity) => (
                            <div
                                key={opportunity._id}
                                className="transform transition-all duration-300 hover:-translate-y-1.5 opacity-95 hover:opacity-100"
                            >
                                <OpportunityCard opportunity={opportunity} />
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full rounded-2xl border border-dashed border-white/10 bg-slate-900/10 backdrop-blur-sm py-20 text-center max-w-xl mx-auto px-6 transform transition-all">
                            <div className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mx-auto mb-4">
                                <Layers size={22} />
                            </div>
                            <h3 className="text-xl font-semibold text-white">
                                No Opportunities Found
                            </h3>
                            <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                                There are currently no startup opportunities available. Please adjust your filters or check back later.
                            </p>
                        </div>
                    )}
                </div>

            </div>
        </section>
    );
};

export default OpportunitiesPage;