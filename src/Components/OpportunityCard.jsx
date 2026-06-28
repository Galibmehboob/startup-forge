import Link from "next/link";

import {
    Button,
    Card,
    Chip,
} from "@heroui/react";

import {
    Building2,
    CalendarDays,
    ArrowRight,
    Laptop,
} from "lucide-react";

const OpportunityCard = ({ opportunity }) => {
    const {
        _id,
        role_title,
        commitment_level,
        work_type,
        deadline,
    } = opportunity;

    return (
        <Card
            radius="lg"
            className="group border border-white/10 bg-slate-900/60 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-[0_20px_50px_rgba(37,99,235,.25)]"
        >
            <Card className="space-y-6 p-6">

                {/* Badge + Role */}
                <div>
                    <Chip
                        color="primary"
                        variant="flat"
                        className="mb-4"
                    >
                        Opportunity
                    </Chip>

                    <h2 className="text-2xl font-bold text-white">
                        {role_title}
                    </h2>
                </div>

                {/* Information */}
                <div className="space-y-4">

                    <div className="flex items-center gap-3 text-slate-300">
                        <Building2
                            size={18}
                            className="text-blue-400"
                        />

                        <span>{commitment_level}</span>
                    </div>

                    <div className="flex items-center gap-3 text-slate-300">
                        <Laptop
                            size={18}
                            className="text-emerald-400"
                        />

                        <span>{work_type}</span>
                    </div>

                    <div className="flex items-center gap-3 text-slate-300">
                        <CalendarDays
                            size={18}
                            className="text-orange-400"
                        />

                        <span>{deadline}</span>
                    </div>

                </div>

                {/* Button */}
                <Link href={`/opportunities/${_id}`}>
                    <Button
                        color="primary"
                        radius="lg"
                        endContent={<ArrowRight size={18} />}
                        className="w-full bg-gradient-to-r from-[#081C3A] via-[#0B2447] to-[#123C69] font-semibold"
                    >
                        View Details
                    </Button>
                </Link>

            </Card>
        </Card>
    );
};

export default OpportunityCard;