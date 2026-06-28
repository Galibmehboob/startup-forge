"use client";

import DashboardTitle from "@/Components/DashboardTitle";
import { useCallback, useEffect, useState } from "react";
import { useSession } from "@/lib/auth-client";
import { myStartup } from "@/lib/api/startups/data";
import { getMyOpportunities } from "@/lib/api/opportunities/data";
import { deleteOpportunity } from "@/lib/api/opportunities/actions";
import toast from "react-hot-toast";
import Link from "next/link";
import { motion } from "framer-motion";

import {
    Briefcase,
    CalendarDays,
    Clock3,
    Pencil,
    Trash2,
    BadgeCheck,
    Layers3,
    TriangleAlert
} from "lucide-react";

import {
    Button,
    Card,
    Modal,

} from "@heroui/react";



const MngOpportunity = () => {
    const { data: session, isPending } = useSession();

    const [startup, setStartup] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedId, setSelectedId] = useState(null);
    const [deleting, setDeleting] = useState(false);
    const [opportunities, setOpportunities] = useState([]);

    const loadData = useCallback(async () => {
        if (!session?.user?.email) return;

        try {
            setLoading(true);

            const startupData = await myStartup(session.user.email);

            setStartup(startupData);

            if (startupData?._id) {
                const result = await getMyOpportunities(startupData._id);
                setOpportunities(result || []);
            } else {
                setOpportunities([]);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }, [session]);

    useEffect(() => {

        const fetchData = async () => {
            if (!session?.user?.email) {
                setLoading(false); return;
            }
            try {
                setLoading(true);
                const startupData = await myStartup(session.user.email);
                setStartup(startupData);
                if (startupData?._id) {
                    const result = await getMyOpportunities(startupData._id);
                    setOpportunities(result || []);
                }
            } catch (err) {
                console.error(err);

            } finally { setLoading(false); }
        }; fetchData();
    }, [session?.user?.email]);

    const handleDelete = async () => {
        if (!selectedId) return;

        try {
            setDeleting(true);

            const result = await deleteOpportunity(selectedId);

            if (result?.deletedCount) {
                toast.success("Opportunity Deleted");
                await loadData();
            } else {
                toast.error("Delete Failed");
            }
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong");
        } finally {
            setDeleting(false);
        }
    };
    console.log({
        loading,
        session,
        opportunities,
    });

    if (isPending || loading) {
        return (
            <div className="w-11/12 mx-auto">
                <DashboardTitle
                    title="Manage Opportunities"
                    description="Update or remove your startup opportunities."
                />

                <div className="mt-8 grid gap-6">
                    {[1, 2, 3].map((i) => (
                        <Card
                            key={i}
                            className="h-52 animate-pulse rounded-3xl bg-slate-800/60"
                        />
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="w-11/12 mx-auto">
            <DashboardTitle
                title="Manage Opportunities"
                description="Update or remove your startup opportunities."
            />

            {opportunities.length === 0 ? (
                <Card className="mt-8 rounded-3xl border border-white/10 bg-slate-900/60 p-16 text-center backdrop-blur-xl">
                    <Briefcase
                        className="mx-auto mb-5 text-slate-500"
                        size={60}
                    />

                    <h2 className="text-2xl font-bold text-white">
                        No Opportunities Found
                    </h2>

                    <p className="mt-3 text-slate-400">
                        Create your first opportunity to recruit talented
                        collaborators.
                    </p>
                </Card>
            ) : (
                <div className="mt-8 grid gap-6">
                    {opportunities.map((item, index) => (
                        <motion.div
                            key={item._id}
                            initial={{
                                opacity: 0,
                                y: 30,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.4,
                                delay: index * 0.08,
                            }}
                        >
                            <Card className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#081C3A] via-[#0B2447] to-[#123C69] p-6 shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-900/30">

                                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

                                    <div className="space-y-4">

                                        <div className="flex items-center gap-3">

                                            <div className="rounded-2xl bg-blue-500/20 p-3">

                                                <Briefcase
                                                    className="text-blue-300"
                                                    size={22}
                                                />

                                            </div>

                                            <div>

                                                <h2 className="text-2xl font-bold text-white">
                                                    {item.role_title}
                                                </h2>

                                                <p className="text-sm text-slate-300">
                                                    Hiring Opportunity
                                                </p>

                                            </div>

                                        </div>

                                        <div className="grid gap-3 md:grid-cols-3">

                                            <div className="flex items-center gap-2 text-slate-200">

                                                <Layers3
                                                    size={18}
                                                    className="text-cyan-300"
                                                />

                                                <span>
                                                    {item.work_type}
                                                </span>

                                            </div>

                                            <div className="flex items-center gap-2 text-slate-200">

                                                <Clock3
                                                    size={18}
                                                    className="text-yellow-300"
                                                />

                                                <span>
                                                    {item.commitment_level}
                                                </span>

                                            </div>

                                            <div className="flex items-center gap-2 text-slate-200">

                                                <CalendarDays
                                                    size={18}
                                                    className="text-green-300"
                                                />

                                                <span>
                                                    {item.deadline}
                                                </span>

                                            </div>

                                        </div>

                                        <div>

                                            <div className="mb-2 flex items-center gap-2">

                                                <BadgeCheck
                                                    size={18}
                                                    className="text-blue-300"
                                                />

                                                <span className="font-semibold text-white">
                                                    Required Skills
                                                </span>

                                            </div>

                                            <div className="flex flex-wrap gap-2">

                                                {item.required_skills?.map(
                                                    (skill) => (
                                                        <span
                                                            key={skill}
                                                            className="rounded-full border border-blue-400/20 bg-white/10 px-3 py-1 text-xs text-blue-100"
                                                        >
                                                            {skill}
                                                        </span>
                                                    )
                                                )}

                                            </div>

                                        </div>

                                    </div>

                                    <div className="flex gap-3">

                                        <Link
                                            href={`/dashboard/founder/manage-opportunities/${item._id}`}
                                        >
                                            <Button
                                                color="primary"
                                                startContent={<Pencil size={18} />}
                                            >
                                                Update
                                            </Button>
                                        </Link>

                                        <Modal>
                                            <Button
                                                variant="danger"
                                                startContent={<Trash2 size={18} />}
                                                onPress={() => setSelectedId(item._id)}
                                            >
                                                Delete
                                            </Button>

                                            <Modal.Backdrop>
                                                <Modal.Container>
                                                    <Modal.Dialog className="sm:max-w-[420px] rounded-3xl">

                                                        <Modal.CloseTrigger />

                                                        <Modal.Header>
                                                            <Modal.Icon className="bg-red-500/20 text-red-500">
                                                                <TriangleAlert size={22} />
                                                            </Modal.Icon>

                                                            <Modal.Heading>
                                                                Delete Opportunity
                                                            </Modal.Heading>
                                                        </Modal.Header>

                                                        <Modal.Body>
                                                            <p>
                                                                Are you sure you want to delete this opportunity?
                                                            </p>

                                                            <p className="text-red-500 text-sm mt-2">
                                                                This action cannot be undone.
                                                            </p>
                                                        </Modal.Body>

                                                        <Modal.Footer>

                                                            <Button
                                                                variant="secondary"
                                                                slot="close"
                                                            >
                                                                Cancel
                                                            </Button>

                                                            <Button
                                                                variant="danger"
                                                                loading={deleting}
                                                                onPress={handleDelete}
                                                            >
                                                                Delete
                                                            </Button>

                                                        </Modal.Footer>

                                                    </Modal.Dialog>
                                                </Modal.Container>
                                            </Modal.Backdrop>
                                        </Modal>

                                    </div>

                                </div>

                            </Card>
                        </motion.div>
                    ))}
                </div>
            )}


        </div>
    );
};

export default MngOpportunity;