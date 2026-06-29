"use client";

import { useEffect, useState } from "react";
import { useSession } from "@/lib/auth-client";
import { Card, Button, Modal } from "@heroui/react";
import { getFounderApplications, updateApplicationStatus } from "@/lib/api/applications/action";
import {
    Mail,
    Briefcase,
    Activity,
    ExternalLink,
    UserCheck,
    FileText,
    Check,
    X,
    Sparkles
} from "lucide-react";

export default function FounderApplications() {
    const { data: session } = useSession();
    const [applications, setApplications] = useState([]);
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        if (session?.user?.email) {
            getFounderApplications(session.user.email)
                .then(data => setApplications(data || []))
                .catch(err => console.error("Error fetching apps:", err));
        }
    }, [session]);

    const changeStatus = async (status) => {
        if (!selected) return;
        try {
            await updateApplicationStatus(selected._id, status);
            setApplications(prev =>
                prev.map(item =>
                    item._id === selected._id ? { ...item, status } : item
                )
            );
            setSelected(null);
        } catch (err) {
            console.error("Failed to update status:", err);
        }
    };

    const getStatusStyles = (status) => {
        switch (status?.toLowerCase()) {
            case "accepted":
                return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
            case "rejected":
                return "bg-red-500/10 text-red-400 border-red-500/20";
            default:
                return "bg-amber-500/10 text-amber-400 border-amber-500/20";
        }
    };

    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 text-white font-sans selection:bg-blue-500/30 space-y-6">

            {/* Heading section */}
            <div className="border-b border-white/5 pb-5">
                <div className="flex items-center gap-2 text-blue-400 mb-1">
                    <Sparkles size={16} className="animate-pulse" />
                    <span className="text-xs font-semibold uppercase tracking-wider font-mono">Founder Panel</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                    Incoming Applications
                </h1>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    Review candidate submissions, portfolios, and manage talent pipeline status.
                </p>
            </div>

            {/* Applications Grid */}
            {applications.length === 0 ? (
                <div className="border border-dashed border-white/10 rounded-2xl p-12 text-center text-slate-500 text-sm bg-slate-900/10">
                    No applications received for your opportunities yet.
                </div>
            ) : (
                <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {applications.map(app => (
                        <Card
                            key={app._id}
                            className="bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-2xl p-5 relative overflow-hidden group hover:border-white/10 transition-all duration-200"
                        >
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-xs text-slate-400 font-mono bg-slate-950/40 px-2.5 py-1.5 rounded-xl border border-white/5 w-fit max-w-full">
                                        <Mail size={13} className="text-slate-500 shrink-0" />
                                        <span className="truncate">{app.applicant_email}</span>
                                    </div>
                                    <h2 className="text-lg font-bold text-slate-100 tracking-tight flex items-center gap-2 pt-1">
                                        <Briefcase size={16} className="text-blue-400 shrink-0" />
                                        <span className="truncate">{app.role_title}</span>
                                    </h2>
                                </div>

                                <div className="flex items-center justify-between border-t border-white/5 pt-4 mt-2">
                                    <div className={`flex items-center gap-1.5 px-2.5 py-0.5 border text-[10px] font-mono font-bold uppercase tracking-wider rounded-md ${getStatusStyles(app.status)}`}>
                                        <Activity size={10} />
                                        <span>{app.status || "pending"}</span>
                                    </div>

                                    <Button
                                        size="sm"
                                        radius="lg"
                                        onPress={() => setSelected(app)}
                                        className="bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 text-xs font-semibold"
                                    >
                                        View Details
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            )}

            {/* Application Detail Modal - Standardizing dynamic dot notation architecture */}
            {selected && (
                <Modal
                    isOpen={!!selected}
                    onOpenChange={() => setSelected(null)}
                >
                    <Modal.Backdrop
                        className="bg-gradient-to-t from-black/80 via-black/40 to-transparent dark:from-zinc-950/80 dark:via-zinc-900/40 backdrop-blur-sm z-[9999]"
                        variant="blur"
                    >
                        <Modal.Container>
                            <Modal.Dialog className="bg-slate-900 border border-white/10 rounded-3xl text-white max-w-xl w-full mx-auto shadow-2xl overflow-hidden">

                                <Modal.Header className="border-b border-white/5 px-6 py-4 flex items-center gap-2 text-slate-100 font-bold text-lg">
                                    <UserCheck size={18} className="text-blue-400" />
                                    Candidate Evaluation
                                </Modal.Header>

                                <Modal.Body className="p-6 space-y-5">
                                    <div className="space-y-1">
                                        <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-bold block">Applicant Identity</span>
                                        <p className="text-sm text-slate-200 font-medium bg-slate-950/40 px-3 py-2 rounded-xl border border-white/5 truncate flex items-center gap-2">
                                            <Mail size={14} className="text-slate-400" /> {selected.applicant_email}
                                        </p>
                                    </div>

                                    <div className="space-y-1">
                                        <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-bold block">Target Role</span>
                                        <p className="text-sm text-slate-200 font-medium bg-slate-950/40 px-3 py-2 rounded-xl border border-white/5 flex items-center gap-2">
                                            <Briefcase size={14} className="text-slate-400" /> {selected.role_title}
                                        </p>
                                    </div>

                                    <div className="space-y-1">
                                        <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-bold block">Portfolio Resource</span>
                                        {selected.portfolio_link ? (
                                            <a
                                                href={selected.portfolio_link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-sm text-blue-400 hover:text-blue-300 transition-colors bg-blue-500/5 px-3 py-2 rounded-xl border border-blue-500/10 flex items-center justify-between group font-medium"
                                            >
                                                <span className="truncate">{selected.portfolio_link}</span>
                                                <ExternalLink size={14} className="shrink-0 ml-1 opacity-60 group-hover:opacity-100 transition-opacity" />
                                            </a>
                                        ) : (
                                            <p className="text-sm text-slate-500 italic bg-slate-950/20 px-3 py-2 rounded-xl border border-white/5">Not Provided</p>
                                        )}
                                    </div>

                                    <div className="space-y-1">
                                        <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-bold block">Cover Motivation / Pitch</span>
                                        <div className="text-sm text-slate-300 bg-slate-950/40 p-4 rounded-xl border border-white/5 leading-relaxed font-normal flex gap-2 max-h-[160px] overflow-y-auto">
                                            <FileText size={16} className="text-slate-500 shrink-0 mt-0.5" />
                                            <p className="whitespace-pre-wrap">{selected.motivation || "No statement attachment recorded."}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 pt-2">
                                        <span className="text-xs text-slate-400 font-medium">Current Matrix Status:</span>
                                        <span className={`px-2 py-0.5 border text-[10px] font-mono font-extrabold uppercase rounded ${getStatusStyles(selected.status)}`}>
                                            {selected.status || "pending"}
                                        </span>
                                    </div>
                                </Modal.Body>

                                <Modal.Footer className="border-t border-white/5 px-6 py-4 gap-3 flex">
                                    <Button
                                        onPress={() => changeStatus("rejected")}
                                        className="bg-red-500/10 hover:bg-red-500/20 text-red-400 font-bold rounded-xl flex-1 border border-red-500/10"
                                        startContent={<X size={15} />}
                                    >
                                        Reject
                                    </Button>

                                    <Button
                                        onPress={() => changeStatus("accepted")}
                                        className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl flex-1 shadow-lg shadow-emerald-600/10"
                                        startContent={<Check size={15} />}
                                    >
                                        Accept
                                    </Button>
                                </Modal.Footer>

                            </Modal.Dialog>
                        </Modal.Container>
                    </Modal.Backdrop>
                </Modal>
            )}
        </div>
    );
}