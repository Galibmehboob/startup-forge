"use client";

import { useEffect, useRef, useState } from "react";
import DashboardTitle from "@/Components/DashboardTitle";
import { Button, Form, Label } from "@heroui/react";
import toast from "react-hot-toast";
import { useSession } from "@/lib/auth-client";
import { myStartup } from "@/lib/api/startups/data";
import Image from "next/image";
import { FaImage } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { handleImageUpload } from "@/utils/uploadeImg";
import { updateStartups } from "@/lib/api/startups/action";


const FUNDING_STAGES = [
    {
        value: "pre-seed",
        label: "Pre-Seed",
    },
    {
        value: "seed",
        label: "Seed",
    },
    {
        value: "series-a",
        label: "Series A",
    },
    {
        value: "series-b",
        label: "Series B",
    },
    {
        value: "series-c",
        label: "Series C+",
    },
    {
        value: "bootstrapped",
        label: "Bootstrapped",
    },
];

const INDUSTRIES = [
    "SaaS",
    "FinTech",
    "EdTech",
    "HealthTech",
    "AI",
    "E-Commerce",
    "Cyber Security",
    "Blockchain",
    "Marketplace",
    "Logistics",
];

export default function AddStartupForm() {
    const [loading, setLoading] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [preview, setPreview] = useState("");

    const fileInputRef = useRef(null);

    const { data: session } = useSession();
    const [myStart, setStart] = useState(null);

    const {
        register,
        handleSubmit,
        setValue,
        reset,
        formState: { errors },
    } = useForm();




    useEffect(() => {
        if (!session?.user?.email) return;

        const setStartData = async () => {
            const start = await myStartup(session.user.email);
            setStart(start);
        };

        setStartData();

    }, [session]);

    console.log(myStart);


    const onSubmit = async (data) => {
        try {
            setLoading(true);

            const startupData = {
                startup_name: data.startup_name,
                logo: data.image,
                industry: data.industry,
                description: data.description,
                funding_stage: data.funding_stage,
                founder_email: session.user.email,
                createdAt: new Date(),
            };

            if (!myStart) {
                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/startups`,
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(startupData),
                    }
                );

                const result = await res.json();

                if (result.insertedId) {
                    toast.success("Startup submitted successfully!");
                    reset();
                    setPreview("");
                    setStart({
                        ...startupData,
                        _id: result.insertedId,
                    });
                } else {
                    toast.error("Failed to submit startup");
                }

            } else {

                const updatedRes = await updateStartups(
                    startupData,
                    myStart._id
                );

                if (updatedRes.modifiedCount > 0) {
                    toast.success("Startup updated successfully!");
                    setStart({
                        ...myStart,
                        ...startupData,
                    });
                } else {
                    toast.error("Already Updated");
                }
            }

        } catch (error) {
            console.log(error);
            toast.error("Something went wrong!");
        } finally {
            setLoading(false);
        }
    };
    return (
        <section className="max-w-5xl mx-auto px-4 py-6">
            <DashboardTitle
                title="My Startups"
                description="Launch and manage your startup profile"
            />

            <div className="relative mt-8 overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl shadow-[0_0_60px_rgba(255,255,255,0.05)]">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10 pointer-events-none" />

                <div className="absolute -top-32 -right-32 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

                <div className="absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

                <div className="relative p-8 md:p-10">

                    <div className="mb-8">
                        <h2 className="text-3xl font-bold">
                            Submit Your Startup
                        </h2>

                        <p className="mt-2 text-default-500">
                            Showcase your startup to investors, founders and
                            future team members.
                        </p>
                    </div>

                    <Form
                        onSubmit={handleSubmit(onSubmit)}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    >
                        <input
                            defaultValue={myStart?.startup_name}
                            type="text"
                            placeholder="Enter your startup name"
                            {...register("startup_name", {
                                required: "Startup name is required",
                            })}
                            className="w-full h-14 rounded-xl border border-white/10 bg-white/5 px-4 text-white outline-none focus:border-blue-500 md:col-span-1"
                        />

                        {errors.startup_name && (
                            <p className="mt-1 text-sm text-red-500">
                                {errors.startup_name.message}
                            </p>
                        )}

                        <input
                            type="email"
                            value={session?.user?.email || ""}
                            readOnly
                            {...register("founder_email", {

                            })}
                            className="w-full h-14 rounded-xl border border-white/10 bg-white/5 px-4 text-white outline-none cursor-not-allowed md:col-span-1"
                        />

                        {errors.founder_email && (
                            <p className="mt-1 text-sm text-red-500">
                                {errors.founder_email.message}
                            </p>
                        )}

                        {/* Industry */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-default-600">
                                Industry
                            </label>

                            <select
                                defaultValue={myStart?.industry}
                                {...register("industry", {
                                    required: "Industry is required",
                                })}
                                className="w-full h-14 rounded-xl border border-white/10 bg-black text-white px-4 outline-none"
                            >
                                <option value="" className="bg-black text-white">
                                    Select Industry
                                </option>

                                {INDUSTRIES.map((industry) => (
                                    <option
                                        key={industry}
                                        value={industry}
                                        className="bg-black text-white"
                                    >
                                        {industry}
                                    </option>
                                ))}
                            </select>

                            {errors.industry && (
                                <p className="mt-1 text-sm text-red-500">
                                    {errors.industry.message}
                                </p>
                            )}
                        </div>

                        {/* Funding Stage */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-default-600">
                                Funding Stage
                            </label>

                            <select
                                defaultValue={myStart?.funding_stage}
                                {...register("funding_stage", {
                                    required: "Funding stage is required",
                                })}
                                className="w-full h-14 rounded-xl border border-white/10 bg-black text-white px-4 outline-none"
                            >
                                <option value="" className="bg-black text-white">
                                    Select Funding Stage
                                </option>

                                {FUNDING_STAGES.map((stage) => (
                                    <option
                                        key={stage.value}
                                        value={stage.label}
                                        className="bg-black text-white"
                                    >
                                        {stage.label}
                                    </option>
                                ))}
                            </select>

                            {errors.funding_stage && (
                                <p className="mt-1 text-sm text-red-500">
                                    {errors.funding_stage.message}
                                </p>
                            )}
                        </div>

                        {/* Startup Logo */}
                        <div className="w-full md:col-span-2">
                            <Label>Startup Logo</Label>

                            <input
                                ref={fileInputRef}
                                type="file"
                                accept="image/*"
                                hidden
                                onChange={(e) =>
                                    handleImageUpload(
                                        e,
                                        setUploading,
                                        setPreview,
                                        setValue
                                    )
                                }
                            />

                            <input
                                type="hidden"
                                {...register("image", {
                                    required: "Startup logo is required",
                                })}
                            />

                            <div className="mt-4 flex items-center gap-4">
                                {preview ? (
                                    <Image
                                        src={preview}
                                        alt="Logo Preview"
                                        width={70}
                                        height={70}
                                        className="h-[70px] w-[70px] rounded-xl border object-cover"
                                    />
                                ) : (
                                    <div className="flex h-[70px] w-[70px] items-center justify-center rounded-xl border border-dashed border-slate-500">
                                        <FaImage className="text-2xl text-slate-500" />
                                    </div>
                                )}

                                <Button
                                    type="button"
                                    onPress={() => fileInputRef.current?.click()}
                                    isLoading={uploading}
                                    variant="bordered"
                                >
                                    {uploading ? "Uploading..." : "Upload Logo"}
                                </Button>
                            </div>

                            {errors.image && (
                                <p className="mt-2 text-sm text-red-500">
                                    {errors.image.message}
                                </p>
                            )}
                        </div>

                        {/* Description */}
                        <div className="md:col-span-2 space-y-2">
                            <label className="text-sm font-medium text-default-600">
                                Description
                            </label>

                            <textarea
                                defaultValue={myStart?.description}
                                {...register("description", {
                                    required: "Description is required",
                                })}
                                rows={6}
                                placeholder="Describe your startup, mission, vision, market opportunity and what problem you're solving..."
                                className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-white outline-none resize-none"
                            />

                            {errors.description && (
                                <p className="mt-1 text-sm text-red-500">
                                    {errors.description.message}
                                </p>
                            )}
                        </div>

                        {/* Submit */}
                        <div className="md:col-span-2 pt-2">
                            <Button
                                type="submit"
                                color="primary"
                                size="lg"
                                isLoading={loading}
                                className="w-full h-14 font-semibold text-base"
                            >
                                {loading ? "Submitting..." : "Submit Startup"}
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </section>
    );
}