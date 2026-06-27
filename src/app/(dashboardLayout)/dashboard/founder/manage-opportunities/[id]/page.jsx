"use client";

import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import DashboardTitle from "@/Components/DashboardTitle";

import {
    Button,
    Card,
    CardHeader,
    Form,
} from "@heroui/react";

import {
    getOpportunity,
} from "@/lib/api/opportunities/data";

import {
    updateOpportunities,
} from "@/lib/api/opportunities/actions";

const UpdateOpportunity = () => {

    const params = useParams();
    const router = useRouter();

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            role_title: "",
            required_skills: [],
            work_type: "",
            commitment_level: "",
            deadline: "",
        },
    });

    useEffect(() => {

        const loadOpportunity = async () => {

            const result = await getOpportunity(params.id);

            console.log(result);

            reset({
                role_title: result?.role_title || "",
                required_skills: result?.required_skills || [],
                work_type: result?.work_type || "",
                commitment_level: result?.commitment_level || "",
                deadline: result?.deadline || "",
            });

        };

        if (params.id) {
            loadOpportunity();
        }

    }, [params.id, reset]);

    const onSubmit = async (data) => {

        const updateData = {
            role_title: data.role_title,
            required_skills: data.required_skills,
            work_type: data.work_type,
            commitment_level: data.commitment_level,
            deadline: data.deadline,
        };

        const result = await updateOpportunities(updateData, params.id);

        if (result.modifiedCount) {

            toast.success("Opportunity Updated Successfully");

            router.push("/dashboard/founder/manage-opportunities");

        } else {

            toast.error("Update Failed");

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
                className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,.45)]"
            >

                <CardHeader className="flex flex-col items-start gap-2 border-b border-white/10 bg-gradient-to-r from-[#081C3A] via-[#0B2447] to-[#123C69] p-8">

                    <DashboardTitle
                        title="Update Opportunity"
                        description="Edit your opportunity information"
                    />

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
                                className="h-14 w-full rounded-xl border border-slate-700 bg-[#0b1220] px-4 text-white outline-none focus:border-[#1E3A8A]"
                            >
                                <option value="">Select Role</option>

                                {ROLES.map((role) => (
                                    <option
                                        key={role}
                                        value={role}
                                    >
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
                                className="h-14 w-full rounded-xl border border-slate-700 bg-[#0b1220] px-4 text-white outline-none focus:border-[#1E3A8A]"
                            >
                                <option value="">Select Work Type</option>

                                {WORK_TYPES.map((type) => (
                                    <option
                                        key={type}
                                        value={type}
                                    >
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
                                className="h-14 w-full rounded-xl border border-slate-700 bg-[#0b1220] px-4 text-white outline-none focus:border-[#1E3A8A]"
                            >
                                <option value="">Select Commitment</option>

                                {COMMITMENT_LEVELS.map((item) => (
                                    <option
                                        key={item}
                                        value={item}
                                    >
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
                                className="h-14 w-full rounded-xl border border-slate-700 bg-[#0b1220] px-4 text-white outline-none focus:border-[#1E3A8A]"
                            />

                            {errors.deadline && (
                                <p className="text-sm text-red-500">
                                    {errors.deadline.message}
                                </p>
                            )}
                        </div>

                        {/* Skills */}
                        <div className="space-y-2 md:col-span-2">
                            <label className="text-sm font-medium text-slate-300">
                                Required Skills
                            </label>

                            <select
                                multiple
                                {...register("required_skills", {
                                    required: "Please select at least one skill",
                                })}
                                className="h-52 w-full rounded-xl border border-slate-700 bg-[#0b1220] p-4 text-white outline-none focus:border-[#1E3A8A]"
                            >
                                {SKILLS.map((skill) => (
                                    <option
                                        key={skill}
                                        value={skill}
                                    >
                                        {skill}
                                    </option>
                                ))}
                            </select>

                            <p className="text-xs text-slate-500">
                                Hold Ctrl (Windows) or Cmd (Mac) to select multiple skills.
                            </p>

                            {selectedSkills?.length > 0 && (
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {selectedSkills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="rounded-full border border-blue-700 bg-blue-900/40 px-3 py-1 text-xs text-blue-200"
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

                        <div className="md:col-span-2">
                            <Button
                                type="submit"
                                radius="lg"
                                className="h-14 w-full bg-gradient-to-r from-[#081C3A] via-[#0B2447] to-[#123C69] text-base font-semibold text-white"
                            >
                                Update Opportunity
                            </Button>
                        </div>

                    </Form>

                </div>

            </Card>

        </div>
    );
};

export default UpdateOpportunity;