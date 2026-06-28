import { baseUrl } from "@/lib/api/basrUrl";
import {
    Button,
    Card,

    Chip,
} from "@heroui/react";

import {
    Briefcase,
    CalendarDays,
    Clock3,
    Laptop,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const fetchOpportunity = async (_id) => {
    const res = await fetch(`${baseUrl}/api/opportunities/${_id}`, {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch opportunity");
    }



    const data = await res.json();


    console.log(Array.isArray(data));
    console.log(data);

    return data;


};

const CardDetailsPage = async ({ params }) => {
    const { id } = await params;

    const opportunity = await fetchOpportunity(id);

    console.log("params id:", id);
    console.log("API Response:", opportunity);
    console.log("role:", opportunity?.role_title);

    return (
        <section className="max-w-5xl mx-auto px-4 py-10">
            <Card
                radius="lg"
                className="border border-white/10 bg-slate-900/60 backdrop-blur-xl"
            >
                <Card className="space-y-8 p-8">

                    <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

                        {/* Left */}
                        <div className="text-center lg:text-left">

                            <Chip
                                color="primary"
                                variant="flat"
                                className="mb-4"
                            >
                                Opportunity Details
                            </Chip>

                            <h1 className="text-3xl font-bold text-white sm:text-4xl">
                                {opportunity.role_title}
                            </h1>

                        </div>

                        {/* Right */}
                        <div className="flex items-center gap-4">

                            <Image
                                src={opportunity.logo}
                                alt={opportunity.startup_name}
                                width={60}
                                height={60}
                                className="h-14 w-14 rounded-full border-2 border-white bg-white object-cover"
                            />

                            <div>

                                <Chip
                                    color="primary"
                                    variant="flat"
                                    size="sm"
                                    className="mb-2"
                                >
                                    {opportunity.industry}
                                </Chip>

                                <h2 className="text-xl font-bold text-white">
                                    {opportunity.startup_name}
                                </h2>

                            </div>

                        </div>

                    </div>

                    <div className="grid gap-5 md:grid-cols-2">

                        <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-slate-800/40 p-4">
                            <Laptop className="text-blue-400" />

                            <div>
                                <p className="text-sm text-slate-400">
                                    Work Type
                                </p>

                                <h3 className="font-semibold text-white">
                                    {opportunity.work_type}
                                </h3>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-slate-800/40 p-4">
                            <Clock3 className="text-emerald-400" />

                            <div>
                                <p className="text-sm text-slate-400">
                                    Commitment Level
                                </p>

                                <h3 className="font-semibold text-white">
                                    {opportunity.commitment_level}
                                </h3>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-slate-800/40 p-4 md:col-span-2">
                            <CalendarDays className="text-orange-400" />

                            <div>
                                <p className="text-sm text-slate-400">
                                    Deadline
                                </p>

                                <h3 className="font-semibold text-white">
                                    {opportunity.deadline}
                                </h3>
                            </div>
                        </div>

                    </div>

                    <div>
                        <div className="mb-4 flex items-center gap-2">
                            <Briefcase className="text-blue-400" />

                            <h2 className="text-xl font-semibold text-white">
                                Required Skills
                            </h2>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            {opportunity.required_skills?.map((skill) => (
                                <Chip
                                    key={skill}
                                    color="primary"
                                    variant="flat"
                                >
                                    {skill}
                                </Chip>
                            ))}
                        </div>
                    </div>

                    <div className="flex gap-3">

                        <Link href={`/opportunities`}>
                            <Button
                                variant="outline"
                                radius="lg" className="h-14 w-full text-base font-semibold"

                            >
                                Back
                            </Button>
                        </Link>
                        <Button
                            radius="lg"
                            className="group relative h-14 w-full overflow-hidden p-0"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-[#081C3A] via-[#0B2447] to-[#123C69] transition-opacity duration-500 ease-in-out group-hover:opacity-0" />
                            <div className="absolute inset-0 bg-gradient-to-r from-[#123C69] via-[#0B2447] to-[#081C3A] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100" />
                            <span className="relative z-10 flex h-full w-full items-center justify-center text-base font-semibold text-white">
                                Apply Now
                            </span>
                        </Button>
                    </div>

                </Card>
            </Card>
        </section>
    );
};

export default CardDetailsPage;