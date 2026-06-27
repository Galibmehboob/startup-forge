"use client";

import { useSession } from "@/lib/auth-client";
import { Controller, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { myStartup } from "@/lib/api/startups/data";
import toast from "react-hot-toast";
import { addOpportunities } from "@/lib/api/opportunities/actions";
import { useRouter } from "next/navigation";

// Fully updated HeroUI v3 Imports including DatePicker/Calendar composition pieces
import {
    Button,
    Card,
    CardHeader,
    Form,
    Select,
    Label,
    ListBox,
    DatePicker,
    DateField,
    Calendar,
} from "@heroui/react";

const AddOpportunityForm = () => {
    const { data: session } = useSession();
    const [startup, setStartup] = useState(null);
    const router = useRouter();

    const {
        control,
        handleSubmit,
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
            deadline: null,
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

        const formattedDeadline = data.deadline ? data.deadline.toString() : "";

        const opportunityData = {
            startup_id: startup._id,
            founder_email: session.user.email,
            role_title: data.role_title,
            required_skills: data.required_skills,
            work_type: data.work_type,
            commitment_level: data.commitment_level,
            deadline: formattedDeadline,
        };

        const result = await addOpportunities(opportunityData);

        if (result.insertedId) {
            toast.success("Opportunity Published");
            reset();
            router.push("/opportunities");
        } else {
            toast.error("Something went wrong");
        }
    };

    const selectedSkills = watch("required_skills");

    const ROLES = [
        "Frontend Developer", "Backend Developer", "Full Stack Developer",
        "Mobile App Developer", "UI/UX Designer", "Graphic Designer",
        "Product Designer", "Product Manager", "Project Manager",
        "Marketing Specialist", "Digital Marketer", "Growth Hacker",
        "Sales Executive", "Business Development", "Content Writer",
        "Copywriter", "SEO Specialist", "Data Analyst", "Data Scientist",
        "AI/ML Engineer", "DevOps Engineer", "Cloud Engineer",
        "Cyber Security Specialist", "QA Engineer", "Video Editor",
        "Motion Designer", "Community Manager", "Customer Support",
        "HR / Recruiter", "Finance & Accounts", "Legal Advisor", "Other",
    ];

    const WORK_TYPES = ["Remote", "Hybrid", "On-site"];

    const COMMITMENT_LEVELS = [
        "Full Time", "Part Time", "Internship", "Contract",
        "Freelance", "Volunteer", "Equity Only"
    ];

    const SKILLS = [
        "React", "Next.js", "Node.js", "Express.js", "MongoDB",
        "PostgreSQL", "Firebase", "Tailwind CSS", "TypeScript",
        "JavaScript", "Python", "Java", "C++", "Flutter",
        "React Native", "Figma", "Adobe XD", "Photoshop",
        "Illustrator", "UI Design", "UX Research", "SEO",
        "Digital Marketing", "Content Writing", "Sales",
        "Business Development", "Project Management", "Product Management",
        "Data Analysis", "Machine Learning", "Cloud Computing", "AWS",
        "Docker", "Kubernetes", "Git", "Communication", "Leadership"
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
                        {/* ================= Role Title ================= */}
                        <div className="space-y-2">
                            <Controller
                                name="role_title"
                                control={control}
                                rules={{ required: "Role title is required" }}
                                render={({ field }) => (
                                    <Select
                                        className="w-full text-white"
                                        placeholder="Select Role"
                                        value={field.value || null}
                                        onChange={field.onChange}
                                    >
                                        <Label className="text-slate-300 text-sm font-medium">Role Title</Label>
                                        <Select.Trigger className="w-full flex items-center justify-between rounded-xl border border-white/10 bg-slate-800/40 p-3 text-left">
                                            <Select.Value />
                                            <Select.Indicator />
                                        </Select.Trigger>
                                        <Select.Popover className="border border-white/10 bg-slate-900 rounded-xl shadow-xl">
                                            <ListBox className="p-2 text-white">
                                                {ROLES.map((role) => (
                                                    <ListBox.Item id={role} key={role} textValue={role} className="rounded-lg px-3 py-2 hover:bg-white/10 cursor-pointer">
                                                        {role}
                                                    </ListBox.Item>
                                                ))}
                                            </ListBox>
                                        </Select.Popover>
                                    </Select>
                                )}
                            />
                            {errors.role_title && (
                                <p className="text-sm text-red-500">{errors.role_title.message}</p>
                            )}
                        </div>

                        {/* ================= Work Type ================= */}
                        <div className="space-y-2">
                            <Controller
                                name="work_type"
                                control={control}
                                rules={{ required: "Work type is required" }}
                                render={({ field }) => (
                                    <Select
                                        className="w-full text-white"
                                        placeholder="Select Work Type"
                                        value={field.value || null}
                                        onChange={field.onChange}
                                    >
                                        <Label className="text-slate-300 text-sm font-medium">Work Type</Label>
                                        <Select.Trigger className="w-full flex items-center justify-between rounded-xl border border-white/10 bg-slate-800/40 p-3 text-left">
                                            <Select.Value />
                                            <Select.Indicator />
                                        </Select.Trigger>
                                        <Select.Popover className="border border-white/10 bg-slate-900 rounded-xl shadow-xl">
                                            <ListBox className="p-2 text-white">
                                                {WORK_TYPES.map((type) => (
                                                    <ListBox.Item id={type} key={type} textValue={type} className="rounded-lg px-3 py-2 hover:bg-white/10 cursor-pointer">
                                                        {type}
                                                    </ListBox.Item>
                                                ))}
                                            </ListBox>
                                        </Select.Popover>
                                    </Select>
                                )}
                            />
                            {errors.work_type && (
                                <p className="text-sm text-red-500">{errors.work_type.message}</p>
                            )}
                        </div>

                        {/* ================= Commitment Level ================= */}
                        <div className="space-y-2">
                            <Controller
                                name="commitment_level"
                                control={control}
                                rules={{ required: "Commitment level is required" }}
                                render={({ field }) => (
                                    <Select
                                        className="w-full text-white"
                                        placeholder="Select Commitment Level"
                                        value={field.value || null}
                                        onChange={field.onChange}
                                    >
                                        <Label className="text-slate-300 text-sm font-medium">Commitment Level</Label>
                                        <Select.Trigger className="w-full flex items-center justify-between rounded-xl border border-white/10 bg-slate-800/40 p-3 text-left">
                                            <Select.Value />
                                            <Select.Indicator />
                                        </Select.Trigger>
                                        <Select.Popover className="border border-white/10 bg-slate-900 rounded-xl shadow-xl">
                                            <ListBox className="p-2 text-white">
                                                {COMMITMENT_LEVELS.map((item) => (
                                                    <ListBox.Item id={item} key={item} textValue={item} className="rounded-lg px-3 py-2 hover:bg-white/10 cursor-pointer">
                                                        {item}
                                                    </ListBox.Item>
                                                ))}
                                            </ListBox>
                                        </Select.Popover>
                                    </Select>
                                )}
                            />
                            {errors.commitment_level && (
                                <p className="text-sm text-red-500">{errors.commitment_level.message}</p>
                            )}
                        </div>

                        {/* ================= Deadline (Corrected HeroUI v3 Structure) ================= */}
                        <div className="space-y-2">
                            <Controller
                                name="deadline"
                                control={control}
                                rules={{ required: "Deadline is required" }}
                                render={({ field }) => (
                                    <DatePicker
                                        className="w-full text-white"
                                        value={field.value}
                                        onChange={field.onChange}
                                    >
                                        <Label className="text-slate-300 text-sm font-medium">Application Deadline</Label>
                                        <DateField.Group className="w-full flex items-center justify-between rounded-xl border border-white/10 bg-slate-800/40 p-3 text-left">
                                            <DateField.Input>
                                                {(segment) => <DateField.Segment segment={segment} className="text-white focus:bg-blue-600 rounded" />}
                                            </DateField.Input>
                                            <DateField.Suffix>
                                                <DatePicker.Trigger className="p-1 hover:bg-white/10 rounded-lg transition-colors">
                                                    <DatePicker.TriggerIndicator className="text-slate-400" />
                                                </DatePicker.Trigger>
                                            </DateField.Suffix>
                                        </DateField.Group>
                                        <DatePicker.Popover className="border border-white/10 bg-slate-900 rounded-xl shadow-xl p-3">
                                            <Calendar aria-label="Deadline Calendar" className="text-white">
                                                <Calendar.Header>
                                                    <Calendar.Heading />
                                                    <Calendar.NavButton slot="previous" />
                                                    <Calendar.NavButton slot="next" />
                                                </Calendar.Header>
                                                <Calendar.Grid>
                                                    <Calendar.GridHeader>
                                                        {(day) => <Calendar.HeaderCell className="text-slate-400 font-medium">{day}</Calendar.HeaderCell>}
                                                    </Calendar.GridHeader>
                                                    <Calendar.GridBody>
                                                        {(date) => <Calendar.Cell date={date} className="p-1 text-center hover:bg-white/10 rounded-lg cursor-pointer" />}
                                                    </Calendar.GridBody>
                                                </Calendar.Grid>
                                            </Calendar>
                                        </DatePicker.Popover>
                                    </DatePicker>
                                )}
                            />
                            {errors.deadline && (
                                <p className="text-sm text-red-500">{errors.deadline.message}</p>
                            )}
                        </div>

                        {/* ================= Required Skills (Multiple) ================= */}
                        <div className="md:col-span-2 space-y-2">
                            <Controller
                                name="required_skills"
                                control={control}
                                rules={{ required: "Please select at least one skill" }}
                                render={({ field }) => (
                                    <Select
                                        className="w-full text-white"
                                        placeholder="Select Required Skills"
                                        selectionMode="multiple"
                                        value={field.value || []}
                                        onChange={field.onChange}
                                    >
                                        <Label className="text-slate-300 text-sm font-medium">Required Skills</Label>
                                        <Select.Trigger className="w-full flex items-center justify-between rounded-xl border border-white/10 bg-slate-800/40 p-3 text-left">
                                            <Select.Value />
                                            <Select.Indicator />
                                        </Select.Trigger>
                                        <Select.Popover className="border border-white/10 bg-slate-900 rounded-xl shadow-xl">
                                            <ListBox className="p-2 text-white max-h-60 overflow-y-auto">
                                                {SKILLS.map((skill) => (
                                                    <ListBox.Item id={skill} key={skill} textValue={skill} className="rounded-lg px-3 py-2 hover:bg-white/10 cursor-pointer">
                                                        {skill}
                                                    </ListBox.Item>
                                                ))}
                                            </ListBox>
                                        </Select.Popover>
                                    </Select>
                                )}
                            />
                            <p className="text-xs text-slate-500">
                                You can select multiple skills.
                            </p>

                            {selectedSkills?.length > 0 && (
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {selectedSkills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="rounded-full border border-blue-700 bg-blue-900/50 px-3 py-1 text-xs text-blue-200"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            )}

                            {errors.required_skills && (
                                <p className="text-sm text-red-500">{errors.required_skills.message}</p>
                            )}
                        </div>

                        {/* ================= Submit Button ================= */}
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
