import UpgradePremiumBtn from "@/Components/UpgradePremiumBtn";
import { getUser } from "@/lib/api/session";
import { Hand } from "@gravity-ui/icons";
import { Card } from "@heroui/react";
import {
    BriefcaseBusiness,
    FileText,
    Users,
    CheckCircle,
    Mail,
    UserCheck,
    Sparkles
} from "lucide-react";

const FounderPage = async () => {
    const user = await getUser();
    const isPremium = user?.isPremium || false;

    const stats = [
        {
            title: "Total Opportunities",
            value: 12,
            icon: <BriefcaseBusiness size={24} />,
            gradient: "from-blue-500/10 to-indigo-500/5",
            textColor: "text-blue-400"
        },
        {
            title: "Total Applications",
            value: 47,
            icon: <FileText size={24} />,
            gradient: "from-purple-500/10 to-pink-500/5",
            textColor: "text-purple-400"
        },
        {
            title: "Accepted Members",
            value: 8,
            icon: <Users size={24} />,
            gradient: "from-emerald-500/10 to-teal-500/5",
            textColor: "text-emerald-400"
        },
        {
            title: "Active Roles",
            value: 5,
            icon: <CheckCircle size={24} />,
            gradient: "from-amber-500/10 to-orange-500/5",
            textColor: "text-amber-400"
        },
    ];

    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 text-white font-sans selection:bg-blue-500/30 space-y-10">

            {/* Header */}
            <div className="border-b border-white/5 pb-6">
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent flex items-center gap-3">
                    Welcome Back, {user?.name || user?.email || "Founder"}{" "}
                    <Hand size={28} className="inline-block text-amber-400 animate-bounce" />
                </h1>
                <p className="text-sm text-slate-400 mt-2">
                    Here,s a quick overview of your startup metrics and ecosystem activities.
                </p>
            </div>

            {/* Stats Card Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((item, index) => (
                    <Card
                        key={index}
                        className="bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-2xl p-6 relative overflow-hidden group hover:border-white/10 transition-all duration-200"
                    >
                        <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-40 group-hover:opacity-60 transition-opacity`} />
                        <div className="relative flex justify-between items-center">
                            <div className="space-y-1">
                                <p className="text-slate-400 text-xs font-mono uppercase tracking-wider font-medium">
                                    {item.title}
                                </p>
                                <h2 className="text-3xl font-black tracking-tight mt-2 text-white">
                                    {item.value}
                                </h2>
                            </div>
                            <div className={`p-3.5 bg-slate-950/80 border border-white/10 rounded-xl shadow-inner ${item.textColor}`}>
                                {item.icon}
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            {/* Membership Banners */}
            {!isPremium ? (
                // Free User State Block
                <div className="relative overflow-hidden rounded-3xl border border-yellow-500/20 bg-gradient-to-br from-slate-950 via-slate-900 to-yellow-950/30 p-6 sm:p-8">
                    <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-yellow-500/10 blur-3xl" />
                    <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                        <div className="space-y-4">
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-3.5 py-1 text-xs font-mono font-bold tracking-wider text-yellow-400 uppercase">
                                <Sparkles size={12} /> Upgrade to Premium
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                                Unlock Premium Features 🚀
                            </h2>
                            <p className="max-w-2xl text-slate-400 text-sm leading-relaxed">
                                Get featured opportunities, priority applications, advanced real-time analytics, and more powerful management systems to grow your startup faster.
                            </p>
                            <div className="pt-2">
                                <UpgradePremiumBtn />
                            </div>
                        </div>

                        <Card className="rounded-2xl border border-yellow-500/20 bg-slate-950/60 px-8 py-8 text-center shrink-0 w-full lg:w-auto min-w-[240px]">
                            <h3 className="text-xs font-bold font-mono tracking-widest text-yellow-400 uppercase">
                                Premium Plan
                            </h3>
                            <p className="mt-2 text-xs text-slate-500">Starting from</p>
                            <h1 className="mt-3 text-5xl font-black tracking-tight text-white">
                                $9<span className="text-sm font-normal text-slate-500 font-sans">/month</span>
                            </h1>
                        </Card>
                    </div>
                </div>
            ) : (
                // Premium Active User State Block
                <div className="relative overflow-hidden rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950/30 p-6 sm:p-8">
                    <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl" />
                    <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                        <div className="space-y-4">
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-mono font-bold tracking-wider text-emerald-400 uppercase">
                                Premium Active
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                                Your Premium Membership is Active 🎉
                            </h2>
                            <p className="max-w-2xl text-slate-400 text-sm leading-relaxed">
                                You now have access to featured opportunities, unlimited applications, advanced metrics analytics layer, and priority operational support. Thank you for supporting StartupForge.
                            </p>
                            <button
                                disabled
                                className="mt-2 rounded-xl bg-emerald-500 border border-emerald-400/20 px-5 py-2.5 font-bold text-xs uppercase tracking-wider text-slate-950 cursor-default select-none shadow-lg shadow-emerald-500/10"
                            >
                                Premium Activated
                            </button>
                        </div>

                        <Card className="rounded-2xl border border-emerald-500/20 bg-slate-950/60 px-8 py-8 text-center shrink-0 w-full lg:w-auto min-w-[240px]">
                            <h3 className="text-xs font-bold font-mono tracking-widest text-emerald-400 uppercase">
                                Membership
                            </h3>
                            <p className="mt-2 text-xs text-slate-500">Current Status</p>
                            <h1 className="mt-3 text-3xl font-black tracking-wider text-emerald-400 font-mono">
                                ACTIVE
                            </h1>
                        </Card>
                    </div>
                </div>
            )}

            {/* Tables Area Layout */}
            <div className="grid gap-6 lg:grid-cols-2">

                {/* Section 1: Recent Applications */}
                <Card className="bg-slate-900/20 backdrop-blur-md border border-white/5 rounded-2xl p-5 sm:p-6 overflow-hidden">
                    <h2 className="text-lg font-bold text-slate-200 mb-4 flex items-center gap-2">
                        <FileText size={18} className="text-blue-400" />
                        Recent Applications
                    </h2>
                    <div className="w-full overflow-x-auto rounded-xl border border-white/5 bg-slate-950/30">
                        <table className="w-full text-left text-sm border-collapse">
                            <thead>
                                <tr className="border-b border-white/5 bg-white/5 text-slate-400 font-mono text-xs uppercase tracking-wider">
                                    <th className="p-3.5 font-semibold">Applicant</th>
                                    <th className="p-3.5 font-semibold">Role</th>
                                    <th className="p-3.5 font-semibold text-right">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5 text-slate-300">
                                <tr className="hover:bg-white/5 transition-colors">
                                    <td className="p-3.5 font-medium text-white">Galib Mehboob</td>
                                    <td className="p-3.5 text-slate-400">Frontend Developer</td>
                                    <td className="p-3.5 text-right">
                                        <span className="inline-block px-2.5 py-0.5 border text-[10px] font-mono font-bold uppercase rounded bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
                                            Accepted
                                        </span>
                                    </td>
                                </tr>
                                <tr className="hover:bg-white/5 transition-colors">
                                    <td className="p-3.5 font-medium text-white">Fahim Ahmed</td>
                                    <td className="p-3.5 text-slate-400">UI Designer</td>
                                    <td className="p-3.5 text-right">
                                        <span className="inline-block px-2.5 py-0.5 border text-[10px] font-mono font-bold uppercase rounded bg-red-500/10 text-red-400 border-red-500/20">
                                            Rejected
                                        </span>
                                    </td>
                                </tr>
                                <tr className="hover:bg-white/5 transition-colors">
                                    <td className="p-3.5 font-medium text-white">Nayeem Hasan</td>
                                    <td className="p-3.5 text-slate-400">Backend Developer</td>
                                    <td className="p-3.5 text-right">
                                        <span className="inline-block px-2.5 py-0.5 border text-[10px] font-mono font-bold uppercase rounded bg-red-500/10 text-red-400 border-red-500/20">
                                            Rejected
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Card>

                {/* Section 2: Accepted Collaborators */}
                <Card className="bg-slate-900/20 backdrop-blur-md border border-white/5 rounded-2xl p-5 sm:p-6 overflow-hidden">
                    <h2 className="text-lg font-bold text-slate-200 mb-4 flex items-center gap-2">
                        <UserCheck size={18} className="text-emerald-400" />
                        Accepted Collaborators
                    </h2>
                    <div className="w-full overflow-x-auto rounded-xl border border-white/5 bg-slate-950/30">
                        <table className="w-full text-left text-sm border-collapse">
                            <thead>
                                <tr className="border-b border-white/5 bg-white/5 text-slate-400 font-mono text-xs uppercase tracking-wider">
                                    <th className="p-3.5 font-semibold">Name</th>
                                    <th className="p-3.5 font-semibold">Role</th>
                                    <th className="p-3.5 font-semibold flex items-center gap-1"><Mail size={12} /> Email</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5 text-slate-300">
                                <tr className="hover:bg-white/5 transition-colors">
                                    <td className="p-3.5 font-medium text-white">Galib Mehboob</td>
                                    <td className="p-3.5 text-slate-400">Frontend Developer</td>
                                    <td className="p-3.5 font-mono text-xs text-slate-500">galib@gmail.com</td>
                                </tr>
                                <tr className="hover:bg-white/5 transition-colors">
                                    <td className="p-3.5 font-medium text-white">Fahim Ahmed</td>
                                    <td className="p-3.5 text-slate-400">UI Designer</td>
                                    <td className="p-3.5 font-mono text-xs text-slate-500">fahim@gmail.com</td>
                                </tr>
                                <tr className="hover:bg-white/5 transition-colors">
                                    <td className="p-3.5 font-medium text-white">Nayeem Hasan</td>
                                    <td className="p-3.5 text-slate-400">Backend Developer</td>
                                    <td className="p-3.5 font-mono text-xs text-slate-500">nayeem@gmail.com</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Card>

            </div>
        </div>
    );
};

export default FounderPage;