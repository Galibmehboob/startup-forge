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
import { CircleCheck } from "@gravity-ui/icons";

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
            radius="2xl"
            className="group border border-white/10 bg-slate-900/40 backdrop-blur-xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-500/30 hover:shadow-[0_20px_40px_rgba(37,99,235,0.15)] text-white"
        >
            <div className="space-y-6">

                {/* Badge + Role */}
                <div>
                    <Chip
                        variant="flat"
                        className="mb-4 bg-blue-500/10 text-blue-400 border border-blue-500/20 font-medium text-xs rounded-lg"
                    >
                        {commitment_level}
                    </Chip>

                    <h2 className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-200 leading-tight">
                        {role_title}
                    </h2>
                </div>

                {/* Information Segment */}
                <div className="space-y-3.5 border-t border-b border-white/5 py-4">

                    <div className="flex items-center gap-3 text-slate-300 text-sm">
                        <Building2
                            size={16}
                            className="text-blue-400 shrink-0"
                        />
                        <span className="text-emerald-400 flex items-center gap-1.5 font-medium bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-md text-xs">
                            Verified <CircleCheck size={14} />
                        </span>
                    </div>

                    <div className="flex items-center gap-3 text-slate-300 text-sm">
                        <Laptop
                            size={16}
                            className="text-cyan-400 shrink-0"
                        />
                        <span className="text-slate-300">{work_type}</span>
                    </div>

                    <div className="flex items-center gap-3 text-slate-300 text-sm">
                        <CalendarDays
                            size={16}
                            className="text-orange-400 shrink-0"
                        />
                        <span className="text-slate-400 font-medium">Deadline: <span className="text-slate-300">{deadline}</span></span>
                    </div>

                </div>
            </div>

            {/* CTA Interaction Button */}
            <div className="mt-6">
                <Link href={`/opportunities/${_id}`} className="block w-full">
                    <Button
                        radius="xl"
                        endContent={<ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />}
                        className="w-full h-11 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white font-semibold text-sm shadow-md hover:opacity-95 transition-all duration-200 active:scale-[0.98]"
                    >
                        View Details
                    </Button>
                </Link>
            </div>

        </Card>
    );
};

export default OpportunityCard;