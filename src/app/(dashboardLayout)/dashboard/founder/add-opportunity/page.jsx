"use client";

import { useSession } from "@/lib/auth-client";
import {
    Button,
    Card,
    CardHeader,
    Form,
} from "@heroui/react";
import { useEffect, useState } from "react";
import { myStartup } from "@/lib/api/startups/data";
import toast from "react-hot-toast";

import { useForm } from "react-hook-form";
import { addOpportunities } from "@/lib/api/opportunities/actions";
import { redirect } from "next/navigation";

const AddOpportunityForm = () => {
    const { data: session } = useSession();
    const [startup, setStartup] = useState(null);
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            startup_id: "",
            role_title: "",
            required_skills: [],
            work_type: "",
            commitment_level: "",
            deadline: "",
        },
    });

    useEffect(() => {
        if (!session?.user?.email) return;

        const loadStartup = async () => {
            const result = await myStartup(session.user.email);
            setStartup(result);
        };

        loadStartup();
    }, [session]);

    const onSubmit = async (data) => {
        if (!startup?._id) {
            toast.error("Startup not found");
            return;
        }

        const opportunityData = {
            startup_id: startup._id,
            founder_email: session.user.email,
            role_title: data.role_title,
            required_skills: data.required_skills,
            work_type: data.work_type,
            commitment_level: data.commitment_level,
            deadline: data.deadline,
        };

        console.log(opportunityData);

        const result = await addOpportunities(opportunityData);

        if (result.insertedId) {
            toast.success("Opportunity Published");
            reset();
            redirect("/opportunities")
        } else {
            toast.error("Something went wrong");
        }
    };

    const selectedSkills = watch("required_skills");

    const ROLES = [
        "Frontend Developer",
        "Backend Developer",
        "Full Stack Developer",
        "Mobile App Developer",
        "UI/UX Designer",
        "Graphic Designer",
        "Product Designer",
        "Product Manager",
        "Project Manager",
        "Marketing Specialist",
        "Digital Marketer",
        "Growth Hacker",
        "Sales Executive",
        "Business Development",
        "Content Writer",
        "Copywriter",
        "SEO Specialist",
        "Data Analyst",
        "Data Scientist",
        "AI/ML Engineer",
        "DevOps Engineer",
        "Cloud Engineer",
        "Cyber Security Specialist",
        "QA Engineer",
        "Video Editor",
        "Motion Designer",
        "Community Manager",
        "Customer Support",
        "HR / Recruiter",
        "Finance & Accounts",
        "Legal Advisor",
        "Other",
    ];

    const WORK_TYPES = [
        "Remote",
        "Hybrid",
        "On-site",
    ];

    const COMMITMENT_LEVELS = [
        "Full Time",
        "Part Time",
        "Internship",
        "Contract",
        "Freelance",
        "Volunteer",
        "Equity Only",
    ];

    const SKILLS = [
        "React",
        "Next.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "PostgreSQL",
        "Firebase",
        "Tailwind CSS",
        "TypeScript",
        "JavaScript",
        "Python",
        "Java",
        "C++",
        "Flutter",
        "React Native",
        "Figma",
        "Adobe XD",
        "Photoshop",
        "Illustrator",
        "UI Design",
        "UX Research",
        "SEO",
        "Digital Marketing",
        "Content Writing",
        "Sales",
        "Business Development",
        "Project Management",
        "Product Management",
        "Data Analysis",
        "Machine Learning",
        "Cloud Computing",
        "AWS",
        "Docker",
        "Kubernetes",
        "Git",
        "Communication",
        "Leadership",
    ];

    return (
        <div className="mt-8 max-w-4xl mx-auto">
            <Card
                radius="lg"
                className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,.45)]"
            >
                <CardHeader className="flex flex-col items-start gap-2 border-b border-white/10 bg-gradient-to-r from-[#081C3A] via-[#0B2447] to-[#123C69] p-8">
                    <h2 className="text-3xl font-bold text-white">
                        Create New Opportunity
                    </h2>

                    <p className="max-w-xl text-sm text-slate-300">
                        Publish an opportunity and connect with developers,
                        designers, marketers, and talented professionals who are
                        excited to build your startup.
                    </p>
                </CardHeader>

                <div className="p-8">
                    <Form
                        onSubmit={handleSubmit(onSubmit)}
                        className="grid grid-cols-1 gap-6 md:grid-cols-2"
                    >
                        {/* Role */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-300">
                                Role Title
                            </label>

                            <select
                                {...register("role_title", {
                                    required: "Role title is required",
                                })}
                                className="h-14 w-full rounded-xl border border-slate-700 bg-[#0b1220] px-4 text-white outline-none transition focus:border-[#1E3A8A]"
                            >
                                <option value="">Select Role</option>

                                {ROLES.map((role) => (
                                    <option key={role} value={role}>
                                        {role}
                                    </option>
                                ))}
                            </select>

                            {errors.role_title && (
                                <p className="text-sm text-red-500">
                                    {errors.role_title.message}
                                </p>
                            )}
                        </div>

                        {/* Work Type */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-300">
                                Work Type
                            </label>

                            <select
                                {...register("work_type", {
                                    required: "Work type is required",
                                })}
                                className="h-14 w-full rounded-xl border border-slate-700 bg-[#0b1220] px-4 text-white outline-none transition focus:border-[#1E3A8A]"
                            >
                                <option value="">Select Work Type</option>

                                {WORK_TYPES.map((type) => (
                                    <option key={type} value={type}>
                                        {type}
                                    </option>
                                ))}
                            </select>

                            {errors.work_type && (
                                <p className="text-sm text-red-500">
                                    {errors.work_type.message}
                                </p>
                            )}
                        </div>

                        {/* Commitment */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-300">
                                Commitment Level
                            </label>

                            <select
                                {...register("commitment_level", {
                                    required: "Commitment level is required",
                                })}
                                className="h-14 w-full rounded-xl border border-slate-700 bg-[#0b1220] px-4 text-white outline-none transition focus:border-[#1E3A8A]"
                            >
                                <option value="">Select Commitment</option>

                                {COMMITMENT_LEVELS.map((item) => (
                                    <option key={item} value={item}>
                                        {item}
                                    </option>
                                ))}
                            </select>

                            {errors.commitment_level && (
                                <p className="text-sm text-red-500">
                                    {errors.commitment_level.message}
                                </p>
                            )}
                        </div>

                        {/* Deadline */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-300">
                                Application Deadline
                            </label>

                            <input
                                type="date"
                                {...register("deadline", {
                                    required: "Deadline is required",
                                })}
                                className="h-14 w-full rounded-xl border border-slate-700 bg-[#0b1220] px-4 text-white outline-none transition focus:border-[#1E3A8A]"
                            />

                            {errors.deadline && (
                                <p className="text-sm text-red-500">
                                    {errors.deadline.message}
                                </p>
                            )}
                        </div>

                        {/* Required Skills */}
                        <div className="md:col-span-2 space-y-2">
                            <label className="text-sm font-medium text-slate-300">
                                Required Skills
                            </label>

                            <select
                                multiple
                                {...register("required_skills", {
                                    required: "Please select at least one skill",
                                })}
                                className="h-48 w-full rounded-xl border border-slate-700 bg-[#0b1220] p-4 text-white outline-none transition focus:border-[#1E3A8A]"
                            >
                                {SKILLS.map((skill) => (
                                    <option key={skill} value={skill}>
                                        {skill}
                                    </option>
                                ))}
                            </select>

                            <p className="text-xs text-slate-500">
                                Hold Ctrl (Windows) or Cmd (Mac) to select multiple
                                skills.
                            </p>

                            {selectedSkills?.length > 0 && (
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {selectedSkills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="rounded-full bg-blue-900/50 border border-blue-700 px-3 py-1 text-xs text-blue-200"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            )}

                            {errors.required_skills && (
                                <p className="text-sm text-red-500">
                                    {errors.required_skills.message}
                                </p>
                            )}
                        </div>

                        {/* Submit */}
                        <div className="pt-2 md:col-span-2">
                            <Button
                                type="submit"
                                radius="lg"
                                className="h-14 w-full bg-gradient-to-r from-[#081C3A] via-[#0B2447] to-[#123C69] text-base font-semibold text-white shadow-xl hover:opacity-90"
                            >
                                Publish Opportunity
                            </Button>
                        </div>
                    </Form>
                </div>
            </Card>
        </div>
    );
};

export default AddOpportunityForm;