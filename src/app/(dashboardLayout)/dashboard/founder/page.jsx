"use client";

import { useSession } from "@/lib/auth-client";
import { Hand } from "@gravity-ui/icons";
import {
    BriefcaseBusiness,
    FileText,
    Users,
    CheckCircle,
    Waves,
} from "lucide-react";

const FounderPage = () => {
    const { data: session, isPending } = useSession();

    if (isPending) {
        return (
            <div className="flex items-center justify-center min-h-[60vh] text-white">
                Loading...
            </div>
        );
    }

    const user = session?.user;
    const isPremium = user?.isPremium || false;

    const stats = [
        {
            title: "Total Opportunities",
            value: 12,
            icon: <BriefcaseBusiness size={26} />,
        },
        {
            title: "Total Applications",
            value: 47,
            icon: <FileText size={26} />,
        },
        {
            title: "Accepted Members",
            value: 8,
            icon: <Users size={26} />,
        },
        {
            title: "Active Roles",
            value: 5,
            icon: <CheckCircle size={26} />,
        },
    ];

    return (
        <div className="space-y-8 space-x-2 w-11/12 mx-auto text-white">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold mt-4">
                    Welcome Back, {user?.name || user?.email || "Founder"} <Hand size={24} className="inline" />
                </h1>

                <p className="text-zinc-400 mt-2">
                    Here,s a quick overview of your startup activities.
                </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                {stats.map((item, index) => (
                    <div
                        key={index}
                        className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-indigo-500 transition-all duration-300"
                    >
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-zinc-400 text-sm">
                                    {item.title}
                                </p>

                                <h2 className="text-4xl font-bold mt-3">
                                    {item.value}
                                </h2>
                            </div>

                            <div className="bg-indigo-500/10 text-indigo-400 p-4 rounded-xl">
                                {item.icon}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {!isPremium && (
                <div className="relative overflow-hidden rounded-3xl border border-yellow-500/20 bg-gradient-to-br from-zinc-900 via-zinc-950 to-yellow-950 p-8">
                    <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-yellow-500/20 blur-3xl"></div>

                    <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
                        <div>
                            <span className="inline-flex items-center rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-sm text-yellow-400">
                                Upgrade to Premium
                            </span>

                            <h2 className="mt-5 text-3xl font-bold">
                                Unlock Premium Features 🚀
                            </h2>

                            <p className="mt-3 max-w-2xl text-zinc-400">
                                Get featured opportunities, priority applications,
                                advanced analytics, and more powerful tools to grow
                                your startup faster.
                            </p>

                            <button className="mt-6 rounded-2xl bg-yellow-500 px-6 py-3 font-semibold text-black transition hover:scale-105">
                                Upgrade Now
                            </button>
                        </div>

                        <div className="rounded-3xl border border-yellow-500/20 bg-zinc-900/80 px-8 py-10 text-center">
                            <h3 className="text-xl font-bold text-yellow-400">
                                Premium Plan
                            </h3>

                            <p className="mt-3 text-zinc-400">
                                Starting from
                            </p>

                            <h1 className="mt-4 text-5xl font-bold">
                                $9
                                <span className="text-lg text-zinc-400">/month</span>
                            </h1>
                        </div>
                    </div>
                </div>
            )}

            {/* Recent Applications */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                <h2 className="text-xl font-semibold mb-6">
                    Recent Applications
                </h2>

                <div className="overflow-x-auto">
                    <table className="table text-white">
                        <thead>
                            <tr className="text-zinc-400">
                                <th>Applicant</th>
                                <th>Role</th>
                                <th>Status</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Galib Mehboob</td>
                                <td>Frontend Developer</td>
                                <td>
                                    <span className="badge badge-warning">
                                        Accepted
                                    </span>
                                </td>
                            </tr>

                            <tr>
                                <td>Fahim Ahmed</td>
                                <td>UI Designer</td>
                                <td>
                                    <span className="badge badge-success">
                                        Rejected
                                    </span>
                                </td>
                            </tr>

                            <tr>
                                <td>Nayeem Hasan</td>
                                <td>Backend Developer</td>
                                <td>
                                    <span className="badge badge-error">
                                        Rejected
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Accepted Collaborators */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                <h2 className="text-xl font-semibold mb-6">
                    Accepted Collaborators
                </h2>

                <div className="overflow-x-auto">
                    <table className="table text-white">
                        <thead>
                            <tr className="text-zinc-400">
                                <th>Name</th>
                                <th>Role</th>
                                <th>Email</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Galib Mehboob</td>
                                <td>Frontend Developer</td>
                                <td>galib@gmail.com</td>
                            </tr>

                            <tr>
                                <td>Fahim Ahmed</td>
                                <td>UI Designer</td>
                                <td>fahim@gmail.com</td>
                            </tr>

                            <tr>
                                <td>Nayeem Hasan</td>
                                <td>Backend Developer</td>
                                <td>nayeem@gmail.com</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default FounderPage;