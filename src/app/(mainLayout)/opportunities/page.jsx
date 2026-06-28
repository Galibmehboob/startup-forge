import FilterPanel from "@/Components/FilterPanel";
import OpportunityCard from "@/Components/OpportunityCard";
import { baseUrl } from "@/lib/api/basrUrl";



const fetchOpportunities = async () => {
    const res = await fetch(`${baseUrl}/api/opportunities`, {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch opportunities");
    }

    return res.json();
};

const OpportunitiesPage = async () => {
    const opportunities = await fetchOpportunities();

    console.log("Opportunities:", opportunities);
    console.log("First Opportunity:", opportunities[0]);
    console.log("Role Title:", opportunities[0]?.role_title);
    console.log("ID:", opportunities[0]?._id);


    return (
        <section className="container mx-auto px-4 py-8">

            {/* Filter Panel */}
            <FilterPanel />

            {/* Opportunity Cards */}
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                {opportunities?.length > 0 ? (
                    opportunities.map((opportunity) => (
                        <OpportunityCard
                            key={opportunity._id}
                            opportunity={opportunity}
                        />
                    ))
                ) : (
                    <div className="col-span-full rounded-2xl border border-dashed border-slate-700 py-20 text-center">
                        <h3 className="text-xl font-semibold text-white">
                            No Opportunities Found
                        </h3>

                        <p className="mt-2 text-slate-400">
                            There are currently no startup opportunities available.
                        </p>
                    </div>
                )}
            </div>

        </section>
    );
};

export default OpportunitiesPage;