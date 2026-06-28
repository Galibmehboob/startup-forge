// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";

// import {
//     LayoutDashboard,
//     Rocket,
//     PlusCircle,
//     Settings,
//     ClipboardList,
//     Users,
//     FolderKanban,
//     CreditCard,
//     FileText,
//     User,
//     X,
//     Menu,
//     LogOut,
// } from "lucide-react";

// import { ChevronLeft, StarFill } from "@gravity-ui/icons";
// import { signOut, useSession } from "@/lib/auth-client";

// export default function DashboardSidebar({ role, isPremium }) {
//     const [open, setOpen] = useState(false);

//     const { data: session } = useSession();

//     const founderLinks = [
//         {
//             name: "Overview",
//             href: "/dashboard/founder",
//             icon: LayoutDashboard,
//         },
//         {
//             name: "My Startup",
//             href: "/dashboard/founder/startup",
//             icon: Rocket,
//         },
//         {
//             name: "Add Opportunity",
//             href: "/dashboard/founder/add-opportunity",
//             icon: PlusCircle,
//         },
//         {
//             name: "Manage Opportunities",
//             href: "/dashboard/founder/manage-opportunities",
//             icon: Settings,
//         },
//         {
//             name: "Applications",
//             href: "/dashboard/founder/applications",
//             icon: ClipboardList,
//         },
//     ];

//     const collaboratorLinks = [
//         {
//             name: "Overview",
//             href: "/dashboard/collaborator",
//             icon: LayoutDashboard,
//         },
//         {
//             name: "My Applications",
//             href: "/dashboard/my-applications",
//             icon: FileText,
//         },
//         {
//             name: "Profile",
//             href: "/dashboard/profile",
//             icon: User,
//         },
//     ];

//     const adminLinks = [
//         {
//             name: "Overview",
//             href: "/dashboard/admin",
//             icon: LayoutDashboard,
//         },
//         {
//             name: "Manage Users",
//             href: "/dashboard/manage-users",
//             icon: Users,
//         },
//         {
//             name: "Manage Startups",
//             href: "/dashboard/manage-startups",
//             icon: FolderKanban,
//         },
//         {
//             name: "Transactions",
//             href: "/dashboard/transactions",
//             icon: CreditCard,
//         },
//     ];

//     const links =
//         role === "admin"
//             ? adminLinks
//             : role === "collaborator"
//                 ? collaboratorLinks
//                 : founderLinks;

//     const roleConfig = {
//         founder: {
//             title: "Founder",
//             color: "bg-blue-500/20 text-blue-400 border-blue-500/30",
//         },
//         collaborator: {
//             title: "Collaborator",
//             color: "bg-green-500/20 text-green-400 border-green-500/30",
//         },
//         admin: {
//             title: "Admin",
//             color: "bg-purple-500/20 text-purple-400 border-purple-500/30",
//         },
//     };

//     const currentRole = roleConfig[role] || roleConfig.founder;

//     const handleLogout = async () => {
//         await signOut();
//         window.location.href = "/";
//     };
//     return (
//         <>
//             {/* Floating Toggle Button (Mobile) */}
//             <button
//                 onClick={() => setOpen(true)}
//                 className="fixed top-20 right-4 z-[60] flex h-12 w-12 items-center justify-center rounded-full bg-[#1f325b] text-white shadow-xl transition hover:scale-105 lg:hidden"
//             >
//                 <ChevronLeft size={22} />
//             </button>

//             {/* Overlay */}
//             {open && (
//                 <div
//                     onClick={() => setOpen(false)}
//                     className="fixed inset-0 z-40 bg-black/60 lg:hidden"
//                 />
//             )}

//             {/* Sidebar */}
//             <aside
//                 className={`
//                 fixed
//                 left-0
//                 top-0
//                 z-50
//                 h-screen
//                 w-72
//                 bg-[#0f172a]
//                 text-white
//                 flex
//                 flex-col
//                 border-r
//                 border-white/10
//                 transition-transform
//                 duration-300
//                 lg:top-16
//                 lg:h-[calc(100vh-64px)]
//                 lg:translate-x-0
//                 ${open ? "translate-x-0" : "-translate-x-full"}
//             `}
//             >
//                 {/* Mobile Close */}
//                 <div className="flex items-center justify-between border-b border-white/10 p-5 lg:hidden">
//                     <h2 className="font-semibold">Menu</h2>

//                     <button
//                         onClick={() => setOpen(false)}
//                         className="rounded-lg bg-white/10 p-2"
//                     >
//                         <X size={18} />
//                     </button>
//                 </div>

//                 {/* User Header */}
//                 <div className="border-b border-white/10 p-5">
//                     <Link
//                         href="/dashboard/profile"
//                         onClick={() => setOpen(false)}
//                         className="flex items-center gap-3 rounded-xl p-2 transition hover:bg-white/10"
//                     >
//                         <Image
//                             src={session?.user?.image || "/default-avatar.png"}
//                             alt={session?.user?.name || "User"}
//                             width={52}
//                             height={52}
//                             className="h-13 w-13 rounded-full border border-white/10 object-cover"
//                         />

//                         <div className="min-w-0 flex-1">
//                             <h3 className="truncate font-semibold">
//                                 {session?.user?.name}
//                             </h3>

//                             <p className="truncate text-xs text-gray-400">
//                                 {session?.user?.email}
//                             </p>

//                             <span
//                                 className={`mt-2 inline-flex items-center gap-1 rounded-full border px-2 py-1 text-xs ${currentRole.color}`}
//                             >
//                                 {currentRole.title}

//                                 {isPremium && (
//                                     <StarFill
//                                         size={12}
//                                         className="text-yellow-500"
//                                     />
//                                 )}
//                             </span>
//                         </div>
//                     </Link>
//                 </div>


//                 {/* Navigation */}
//                 <nav className="flex-1 overflow-y-auto p-4 space-y-2">
//                     {links.map((item) => {
//                         const Icon = item.icon;

//                         return (
//                             <Link
//                                 key={item.name}
//                                 href={item.href}
//                                 onClick={() => setOpen(false)}
//                                 className="flex items-center gap-3 rounded-xl px-3 py-3 text-gray-300 transition hover:bg-white/10 hover:text-white"
//                             >
//                                 <Icon size={18} />
//                                 <span>{item.name}</span>
//                             </Link>
//                         );
//                     })}
//                 </nav>

//                 {/* Bottom */}
//                 <div className="border-t border-white/10 p-4">
//                     <Link
//                         href="/dashboard/profile"
//                         onClick={() => setOpen(false)}
//                         className="mb-2 flex items-center gap-3 rounded-xl px-3 py-3 text-gray-300 transition hover:bg-white/10 hover:text-white"
//                     >
//                         <User size={18} />
//                         <span>My Profile</span>
//                     </Link>

//                     <button
//                         onClick={handleLogout}
//                         className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-red-400 transition hover:bg-red-500/10"
//                     >
//                         <LogOut size={18} />
//                         <span>Sign Out</span>
//                     </button>

//                     <div className="mt-4 border-t border-white/10 pt-4 text-center text-xs text-gray-500">
//                         Startup Dashboard v1.0
//                     </div>
//                 </div>
//             </aside>
//         </>
//     );
// }


// without dashboard responsive
// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import {
//     LayoutDashboard,
//     Rocket,
//     PlusCircle,
//     Settings,
//     ClipboardList,
//     Users,
//     FolderKanban,
//     CreditCard,
//     FileText,
//     User,
//     X,
//     ChevronLeft,
//     LogOut,
// } from "lucide-react";
// import { StarFill } from "@gravity-ui/icons";
// import { signOut, useSession } from "@/lib/auth-client";

// import Image from "next/image";

// export default function DashboardSidebar({ role, isPremium }) {
//     const [open, setOpen] = useState(false);
//     const { data: session } = useSession();

//     const founderLinks = [
//         {
//             name: "Overview",
//             href: "/dashboard/founder",
//             icon: LayoutDashboard,
//         },
//         {
//             name: "My Startup",
//             href: "/dashboard/founder/startup",
//             icon: Rocket,
//         },
//         {
//             name: "Add Opportunity",
//             href: "/dashboard/founder/add-opportunity",
//             icon: PlusCircle,
//         },
//         {
//             name: "Manage Opportunities",
//             href: "/dashboard/founder/manage-opportunities",
//             icon: Settings,
//         },
//         {
//             name: "Applications",
//             href: "/dashboard/founder/applications",
//             icon: ClipboardList,
//         },
//     ];

//     const collaboratorLinks = [
//         {
//             name: "Overview",
//             href: "/dashboard/collaborator",
//             icon: LayoutDashboard,
//         },
//         {
//             name: "My Applications",
//             href: "/dashboard/my-applications",
//             icon: FileText,
//         },
//         {
//             name: "Profile",
//             href: "/dashboard/profile",
//             icon: User,
//         },
//     ];

//     const adminLinks = [
//         {
//             name: "Overview",
//             href: "/dashboard/admin",
//             icon: LayoutDashboard,
//         },
//         {
//             name: "Manage Users",
//             href: "/dashboard/manage-users",
//             icon: Users,
//         },
//         {
//             name: "Manage Startups",
//             href: "/dashboard/manage-startups",
//             icon: FolderKanban,
//         },
//         {
//             name: "Transactions",
//             href: "/dashboard/transactions",
//             icon: CreditCard,
//         },
//     ];

//     const links =
//         role === "admin"
//             ? adminLinks
//             : role === "collaborator"
//                 ? collaboratorLinks
//                 : founderLinks;

//     const roleConfig = {
//         founder: {
//             title: "Founder",
//             color: "bg-blue-500/20 text-blue-400 border-blue-500/30",
//         },
//         collaborator: {
//             title: "Collaborator",
//             color: "bg-green-500/20 text-green-400 border-green-500/30",
//         },
//         admin: {
//             title: "Admin",
//             color: "bg-purple-500/20 text-purple-400 border-purple-500/30",
//         },
//     };

//     const currentRole = roleConfig[role] || roleConfig.founder;

//     const handleLogout = async () => {
//         await signOut();
//         window.location.href = "/";
//     };

//     return (
//         <>
//             {/* Mobile Top Bar */}
//             <div className="flex items-center justify-between border-b border-white/10 bg-[#0f172a] px-4 py-3 text-white lg:hidden">
//                 <h1 className="text-lg font-semibold">Dashboard</h1>

//                 <button
//                     onClick={() => setOpen(true)}
//                     className="rounded-lg bg-white/10 p-2"
//                 >
//                     <ChevronLeft size={20} />
//                 </button>
//             </div>

//             {/* Overlay */}
//             {open && (
//                 <div
//                     onClick={() => setOpen(false)}
//                     className="fixed inset-0 z-40 bg-black/60 lg:hidden"
//                 />
//             )}

//             {/* Sidebar */}
//             <aside
//                 className={`
//                     fixed left-0 top-16 z-50
//                     h-[calc(100vh-64px)]
//                     w-72
//                     bg-[#0f172a]
//                     text-white
//                     flex flex-col
//                     border-r border-white/10
//                     transition-transform duration-300
//                     lg:translate-x-0
//                     ${open ? "translate-x-0" : "-translate-x-full"}
//                 `}
//             >
//                 {/* Mobile Close */}
//                 <div className="flex items-center justify-between border-b border-white/10 p-4 lg:hidden">
//                     <h2 className="font-semibold">Menu</h2>

//                     <button
//                         onClick={() => setOpen(false)}
//                         className="rounded-lg bg-white/10 p-2"
//                     >
//                         <X size={18} />
//                     </button>
//                 </div>

//                 {/* Header */}
//                 <div className="border-b border-white/10 p-5">
//                     <Link
//                         href="/dashboard/profile"
//                         className="mb-4 flex items-center gap-3 rounded-xl p-3 transition hover:bg-white/10"
//                     >
//                         <Image
//                             src={session?.user?.image || "/default-avatar.png"}
//                             alt={session?.user?.name || "User"}
//                             width={48}
//                             height={48}
//                             className="h-12 w-12 rounded-full object-cover border border-white/10"
//                         />

//                         <div className="flex-1 overflow-hidden">
//                             <h3 className="truncate font-semibold text-white">
//                                 {session?.user?.name}
//                             </h3>

//                             <p className="truncate text-xs text-gray-400">
//                                 {session?.user?.email}
//                             </p>

//                             <span
//                                 className={`mt-2 inline-flex items-center gap-1 rounded-full border px-2 py-1 text-xs font-medium ${currentRole.color}`}
//                             >
//                                 {currentRole.title}

//                                 {isPremium && (
//                                     <StarFill
//                                         size={12}
//                                         className="text-yellow-500"
//                                     />
//                                 )}
//                             </span>
//                         </div>
//                     </Link>
//                 </div>

//                 {/* Navigation */}
//                 <nav className="flex-1 overflow-y-auto p-4 space-y-2">
//                     {links.map((item) => {
//                         const Icon = item.icon;

//                         return (
//                             <Link
//                                 key={item.name}
//                                 href={item.href}
//                                 onClick={() => setOpen(false)}
//                                 className="flex items-center gap-3 rounded-xl px-3 py-3 text-gray-300 transition hover:bg-white/10 hover:text-white"
//                             >
//                                 <Icon size={18} />
//                                 {item.name}
//                             </Link>
//                         );
//                     })}
//                 </nav>

//                 {/* Bottom */}
//                 <div className="border-t border-white/10 p-4">
//                     <Link
//                         href="/dashboard/profile"
//                         className="mb-2 flex items-center gap-3 rounded-xl px-3 py-3 text-gray-300 transition hover:bg-white/10 hover:text-white"
//                     >
//                         <User size={18} />
//                         My Profile
//                     </Link>

//                     <button
//                         onClick={handleLogout}
//                         className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-red-400 transition hover:bg-red-500/10"
//                     >
//                         <LogOut size={18} />
//                         Sign Out
//                     </button>

//                     <div className="mt-4 border-t border-white/10 pt-3 text-center text-xs text-gray-500">
//                         Startup Dashboard v1.0
//                     </div>
//                 </div>
//             </aside>
//         </>
//     );
// }



// add opportunity without regester hook
// "use client";

// import { useSession } from "@/lib/auth-client";
// import { Controller, useForm } from "react-hook-form";
// import { useEffect, useState } from "react";
// import { myStartup } from "@/lib/api/startups/data";
// import toast from "react-hot-toast";
// import { addOpportunities } from "@/lib/api/opportunities/actions";
// import { useRouter } from "next/navigation";

// // Fully updated HeroUI v3 Imports including DatePicker/Calendar composition pieces
// import {
//     Button,
//     Card,
//     CardHeader,
//     Form,
//     Select,
//     Label,
//     ListBox,
//     DatePicker,
//     DateField,
//     Calendar,
// } from "@heroui/react";

// const AddOpportunityForm = () => {
//     const { data: session } = useSession();
//     const [startup, setStartup] = useState(null);
//     const router = useRouter();

//     const {
//         control,
//         handleSubmit,
//         watch,
//         reset,
//         formState: { errors },
//     } = useForm({
//         defaultValues: {
//             startup_id: "",
//             role_title: "",
//             required_skills: [],
//             work_type: "",
//             commitment_level: "",
//             deadline: null,
//         },
//     });

//     useEffect(() => {
//         if (!session?.user?.email) return;

//         const loadStartup = async () => {
//             const result = await myStartup(session.user.email);
//             setStartup(result);
//         };

//         loadStartup();
//     }, [session]);

//     const onSubmit = async (data) => {
//         if (!startup?._id) {
//             toast.error("Startup not found");
//             return;
//         }

//         const formattedDeadline = data.deadline ? data.deadline.toString() : "";

//         const opportunityData = {
//             startup_id: startup._id,
//             founder_email: session.user.email,
//             role_title: data.role_title,
//             required_skills: data.required_skills,
//             work_type: data.work_type,
//             commitment_level: data.commitment_level,
//             deadline: formattedDeadline,
//         };

//         const result = await addOpportunities(opportunityData);

//         if (result.insertedId) {
//             toast.success("Opportunity Published");
//             reset();
//             router.push("/opportunities");
//         } else {
//             toast.error("Something went wrong");
//         }
//     };

//     const selectedSkills = watch("required_skills");

//     const ROLES = [
//         "Frontend Developer", "Backend Developer", "Full Stack Developer",
//         "Mobile App Developer", "UI/UX Designer", "Graphic Designer",
//         "Product Designer", "Product Manager", "Project Manager",
//         "Marketing Specialist", "Digital Marketer", "Growth Hacker",
//         "Sales Executive", "Business Development", "Content Writer",
//         "Copywriter", "SEO Specialist", "Data Analyst", "Data Scientist",
//         "AI/ML Engineer", "DevOps Engineer", "Cloud Engineer",
//         "Cyber Security Specialist", "QA Engineer", "Video Editor",
//         "Motion Designer", "Community Manager", "Customer Support",
//         "HR / Recruiter", "Finance & Accounts", "Legal Advisor", "Other",
//     ];

//     const WORK_TYPES = ["Remote", "Hybrid", "On-site"];

//     const COMMITMENT_LEVELS = [
//         "Full Time", "Part Time", "Internship", "Contract",
//         "Freelance", "Volunteer", "Equity Only"
//     ];

//     const SKILLS = [
//         "React", "Next.js", "Node.js", "Express.js", "MongoDB",
//         "PostgreSQL", "Firebase", "Tailwind CSS", "TypeScript",
//         "JavaScript", "Python", "Java", "C++", "Flutter",
//         "React Native", "Figma", "Adobe XD", "Photoshop",
//         "Illustrator", "UI Design", "UX Research", "SEO",
//         "Digital Marketing", "Content Writing", "Sales",
//         "Business Development", "Project Management", "Product Management",
//         "Data Analysis", "Machine Learning", "Cloud Computing", "AWS",
//         "Docker", "Kubernetes", "Git", "Communication", "Leadership"
//     ];

//     return (
//         <div className="mt-8 max-w-4xl mx-auto">
//             <Card
//                 radius="lg"
//                 className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,.45)]"
//             >
//                 <CardHeader className="flex flex-col items-start gap-2 border-b border-white/10 bg-gradient-to-r from-[#081C3A] via-[#0B2447] to-[#123C69] p-8">
//                     <h2 className="text-3xl font-bold text-white">
//                         Create New Opportunity
//                     </h2>
//                     <p className="max-w-xl text-sm text-slate-300">
//                         Publish an opportunity and connect with developers,
//                         designers, marketers, and talented professionals who are
//                         excited to build your startup.
//                     </p>
//                 </CardHeader>

//                 <div className="p-8">
//                     <Form
//                         onSubmit={handleSubmit(onSubmit)}
//                         className="grid grid-cols-1 gap-6 md:grid-cols-2"
//                     >
//                         {/* ================= Role Title ================= */}
//                         <div className="space-y-2">
//                             <Controller
//                                 name="role_title"
//                                 control={control}
//                                 rules={{ required: "Role title is required" }}
//                                 render={({ field }) => (
//                                     <Select
//                                         className="w-full text-white"
//                                         placeholder="Select Role"
//                                         value={field.value || null}
//                                         onChange={field.onChange}
//                                     >
//                                         <Label className="text-slate-300 text-sm font-medium">Role Title</Label>
//                                         <Select.Trigger className="w-full flex items-center justify-between rounded-xl border border-white/10 bg-slate-800/40 p-3 text-left">
//                                             <Select.Value />
//                                             <Select.Indicator />
//                                         </Select.Trigger>
//                                         <Select.Popover className="border border-white/10 bg-slate-900 rounded-xl shadow-xl">
//                                             <ListBox className="p-2 text-white">
//                                                 {ROLES.map((role) => (
//                                                     <ListBox.Item id={role} key={role} textValue={role} className="rounded-lg px-3 py-2 hover:bg-white/10 cursor-pointer">
//                                                         {role}
//                                                     </ListBox.Item>
//                                                 ))}
//                                             </ListBox>
//                                         </Select.Popover>
//                                     </Select>
//                                 )}
//                             />
//                             {errors.role_title && (
//                                 <p className="text-sm text-red-500">{errors.role_title.message}</p>
//                             )}
//                         </div>

//                         {/* ================= Work Type ================= */}
//                         <div className="space-y-2">
//                             <Controller
//                                 name="work_type"
//                                 control={control}
//                                 rules={{ required: "Work type is required" }}
//                                 render={({ field }) => (
//                                     <Select
//                                         className="w-full text-white"
//                                         placeholder="Select Work Type"
//                                         value={field.value || null}
//                                         onChange={field.onChange}
//                                     >
//                                         <Label className="text-slate-300 text-sm font-medium">Work Type</Label>
//                                         <Select.Trigger className="w-full flex items-center justify-between rounded-xl border border-white/10 bg-slate-800/40 p-3 text-left">
//                                             <Select.Value />
//                                             <Select.Indicator />
//                                         </Select.Trigger>
//                                         <Select.Popover className="border border-white/10 bg-slate-900 rounded-xl shadow-xl">
//                                             <ListBox className="p-2 text-white">
//                                                 {WORK_TYPES.map((type) => (
//                                                     <ListBox.Item id={type} key={type} textValue={type} className="rounded-lg px-3 py-2 hover:bg-white/10 cursor-pointer">
//                                                         {type}
//                                                     </ListBox.Item>
//                                                 ))}
//                                             </ListBox>
//                                         </Select.Popover>
//                                     </Select>
//                                 )}
//                             />
//                             {errors.work_type && (
//                                 <p className="text-sm text-red-500">{errors.work_type.message}</p>
//                             )}
//                         </div>

//                         {/* ================= Commitment Level ================= */}
//                         <div className="space-y-2">
//                             <Controller
//                                 name="commitment_level"
//                                 control={control}
//                                 rules={{ required: "Commitment level is required" }}
//                                 render={({ field }) => (
//                                     <Select
//                                         className="w-full text-white"
//                                         placeholder="Select Commitment Level"
//                                         value={field.value || null}
//                                         onChange={field.onChange}
//                                     >
//                                         <Label className="text-slate-300 text-sm font-medium">Commitment Level</Label>
//                                         <Select.Trigger className="w-full flex items-center justify-between rounded-xl border border-white/10 bg-slate-800/40 p-3 text-left">
//                                             <Select.Value />
//                                             <Select.Indicator />
//                                         </Select.Trigger>
//                                         <Select.Popover className="border border-white/10 bg-slate-900 rounded-xl shadow-xl">
//                                             <ListBox className="p-2 text-white">
//                                                 {COMMITMENT_LEVELS.map((item) => (
//                                                     <ListBox.Item id={item} key={item} textValue={item} className="rounded-lg px-3 py-2 hover:bg-white/10 cursor-pointer">
//                                                         {item}
//                                                     </ListBox.Item>
//                                                 ))}
//                                             </ListBox>
//                                         </Select.Popover>
//                                     </Select>
//                                 )}
//                             />
//                             {errors.commitment_level && (
//                                 <p className="text-sm text-red-500">{errors.commitment_level.message}</p>
//                             )}
//                         </div>

//                         {/* ================= Deadline (Corrected HeroUI v3 Structure) ================= */}
//                         <div className="space-y-2">
//                             <Controller
//                                 name="deadline"
//                                 control={control}
//                                 rules={{ required: "Deadline is required" }}
//                                 render={({ field }) => (
//                                     <DatePicker
//                                         className="w-full text-white"
//                                         value={field.value}
//                                         onChange={field.onChange}
//                                     >
//                                         <Label className="text-slate-300 text-sm font-medium">Application Deadline</Label>
//                                         <DateField.Group className="w-full flex items-center justify-between rounded-xl border border-white/10 bg-slate-800/40 p-3 text-left">
//                                             <DateField.Input>
//                                                 {(segment) => <DateField.Segment segment={segment} className="text-white focus:bg-blue-600 rounded" />}
//                                             </DateField.Input>
//                                             <DateField.Suffix>
//                                                 <DatePicker.Trigger className="p-1 hover:bg-white/10 rounded-lg transition-colors">
//                                                     <DatePicker.TriggerIndicator className="text-slate-400" />
//                                                 </DatePicker.Trigger>
//                                             </DateField.Suffix>
//                                         </DateField.Group>
//                                         <DatePicker.Popover className="border border-white/10 bg-slate-900 rounded-xl shadow-xl p-3">
//                                             <Calendar aria-label="Deadline Calendar" className="text-white">
//                                                 <Calendar.Header>
//                                                     <Calendar.Heading />
//                                                     <Calendar.NavButton slot="previous" />
//                                                     <Calendar.NavButton slot="next" />
//                                                 </Calendar.Header>
//                                                 <Calendar.Grid>
//                                                     <Calendar.GridHeader>
//                                                         {(day) => <Calendar.HeaderCell className="text-slate-400 font-medium">{day}</Calendar.HeaderCell>}
//                                                     </Calendar.GridHeader>
//                                                     <Calendar.GridBody>
//                                                         {(date) => <Calendar.Cell date={date} className="p-1 text-center hover:bg-white/10 rounded-lg cursor-pointer" />}
//                                                     </Calendar.GridBody>
//                                                 </Calendar.Grid>
//                                             </Calendar>
//                                         </DatePicker.Popover>
//                                     </DatePicker>
//                                 )}
//                             />
//                             {errors.deadline && (
//                                 <p className="text-sm text-red-500">{errors.deadline.message}</p>
//                             )}
//                         </div>

//                         {/* ================= Required Skills (Multiple) ================= */}
//                         <div className="md:col-span-2 space-y-2">
//                             <Controller
//                                 name="required_skills"
//                                 control={control}
//                                 rules={{ required: "Please select at least one skill" }}
//                                 render={({ field }) => (
//                                     <Select
//                                         className="w-full text-white"
//                                         placeholder="Select Required Skills"
//                                         selectionMode="multiple"
//                                         value={field.value || []}
//                                         onChange={field.onChange}
//                                     >
//                                         <Label className="text-slate-300 text-sm font-medium">Required Skills</Label>
//                                         <Select.Trigger className="w-full flex items-center justify-between rounded-xl border border-white/10 bg-slate-800/40 p-3 text-left">
//                                             <Select.Value />
//                                             <Select.Indicator />
//                                         </Select.Trigger>
//                                         <Select.Popover className="border border-white/10 bg-slate-900 rounded-xl shadow-xl">
//                                             <ListBox className="p-2 text-white max-h-60 overflow-y-auto">
//                                                 {SKILLS.map((skill) => (
//                                                     <ListBox.Item id={skill} key={skill} textValue={skill} className="rounded-lg px-3 py-2 hover:bg-white/10 cursor-pointer">
//                                                         {skill}
//                                                     </ListBox.Item>
//                                                 ))}
//                                             </ListBox>
//                                         </Select.Popover>
//                                     </Select>
//                                 )}
//                             />
//                             <p className="text-xs text-slate-500">
//                                 You can select multiple skills.
//                             </p>

//                             {selectedSkills?.length > 0 && (
//                                 <div className="flex flex-wrap gap-2 pt-2">
//                                     {selectedSkills.map((skill) => (
//                                         <span
//                                             key={skill}
//                                             className="rounded-full border border-blue-700 bg-blue-900/50 px-3 py-1 text-xs text-blue-200"
//                                         >
//                                             {skill}
//                                         </span>
//                                     ))}
//                                 </div>
//                             )}

//                             {errors.required_skills && (
//                                 <p className="text-sm text-red-500">{errors.required_skills.message}</p>
//                             )}
//                         </div>

//                         {/* ================= Submit Button ================= */}
//                         <div className="pt-2 md:col-span-2">
//                             <Button
//                                 type="submit"
//                                 radius="lg"
//                                 className="h-14 w-full bg-gradient-to-r from-[#081C3A] via-[#0B2447] to-[#123C69] text-base font-semibold text-white shadow-xl hover:opacity-90"
//                             >
//                                 Publish Opportunity
//                             </Button>
//                         </div>
//                     </Form>
//                 </div>
//             </Card>
//         </div>
//     );
// };

// export default AddOpportunityForm;


// with chrom and usabe

// "use client";

// import { useSession } from "@/lib/auth-client";
// import {
//     Button,
//     Card,
//     CardHeader,
//     Form,
// } from "@heroui/react";
// import { useEffect, useState } from "react";
// import { myStartup } from "@/lib/api/startups/data";
// import toast from "react-hot-toast";

// import { useForm } from "react-hook-form";
// import { addOpportunities } from "@/lib/api/opportunities/actions";
// import { redirect } from "next/navigation";

// const AddOpportunityForm = () => {
//     const { data: session } = useSession();
//     const [startup, setStartup] = useState(null);
//     const {
//         register,
//         handleSubmit,
//         setValue,
//         watch,
//         reset,
//         formState: { errors },
//     } = useForm({
//         defaultValues: {
//             startup_id: "",
//             role_title: "",
//             required_skills: [],
//             work_type: "",
//             commitment_level: "",
//             deadline: "",
//         },
//     });

//     useEffect(() => {
//         if (!session?.user?.email) return;

//         const loadStartup = async () => {
//             const result = await myStartup(session.user.email);
//             setStartup(result);
//         };

//         loadStartup();
//     }, [session]);

//     const onSubmit = async (data) => {
//         if (!startup?._id) {
//             toast.error("Startup not found");
//             return;
//         }

//         const opportunityData = {
//             startup_id: startup._id,
//             founder_email: session.user.email,
//             role_title: data.role_title,
//             required_skills: data.required_skills,
//             work_type: data.work_type,
//             commitment_level: data.commitment_level,
//             deadline: data.deadline,
//         };

//         console.log(opportunityData);

//         const result = await addOpportunities(opportunityData);

//         if (result.insertedId) {
//             toast.success("Opportunity Published");
//             reset();
//             redirect("/opportunities")
//         } else {
//             toast.error("Something went wrong");
//         }
//     };

//     const selectedSkills = watch("required_skills");

//     const ROLES = [
//         "Frontend Developer",
//         "Backend Developer",
//         "Full Stack Developer",
//         "Mobile App Developer",
//         "UI/UX Designer",
//         "Graphic Designer",
//         "Product Designer",
//         "Product Manager",
//         "Project Manager",
//         "Marketing Specialist",
//         "Digital Marketer",
//         "Growth Hacker",
//         "Sales Executive",
//         "Business Development",
//         "Content Writer",
//         "Copywriter",
//         "SEO Specialist",
//         "Data Analyst",
//         "Data Scientist",
//         "AI/ML Engineer",
//         "DevOps Engineer",
//         "Cloud Engineer",
//         "Cyber Security Specialist",
//         "QA Engineer",
//         "Video Editor",
//         "Motion Designer",
//         "Community Manager",
//         "Customer Support",
//         "HR / Recruiter",
//         "Finance & Accounts",
//         "Legal Advisor",
//         "Other",
//     ];

//     const WORK_TYPES = [
//         "Remote",
//         "Hybrid",
//         "On-site",
//     ];

//     const COMMITMENT_LEVELS = [
//         "Full Time",
//         "Part Time",
//         "Internship",
//         "Contract",
//         "Freelance",
//         "Volunteer",
//         "Equity Only",
//     ];

//     const SKILLS = [
//         "React",
//         "Next.js",
//         "Node.js",
//         "Express.js",
//         "MongoDB",
//         "PostgreSQL",
//         "Firebase",
//         "Tailwind CSS",
//         "TypeScript",
//         "JavaScript",
//         "Python",
//         "Java",
//         "C++",
//         "Flutter",
//         "React Native",
//         "Figma",
//         "Adobe XD",
//         "Photoshop",
//         "Illustrator",
//         "UI Design",
//         "UX Research",
//         "SEO",
//         "Digital Marketing",
//         "Content Writing",
//         "Sales",
//         "Business Development",
//         "Project Management",
//         "Product Management",
//         "Data Analysis",
//         "Machine Learning",
//         "Cloud Computing",
//         "AWS",
//         "Docker",
//         "Kubernetes",
//         "Git",
//         "Communication",
//         "Leadership",
//     ];

//     return (
//         <div className="mt-8 max-w-4xl mx-auto">
//             <Card
//                 radius="lg"
//                 className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,.45)]"
//             >
//                 <CardHeader className="flex flex-col items-start gap-2 border-b border-white/10 bg-gradient-to-r from-[#081C3A] via-[#0B2447] to-[#123C69] p-8">
//                     <h2 className="text-3xl font-bold text-white">
//                         Create New Opportunity
//                     </h2>

//                     <p className="max-w-xl text-sm text-slate-300">
//                         Publish an opportunity and connect with developers,
//                         designers, marketers, and talented professionals who are
//                         excited to build your startup.
//                     </p>
//                 </CardHeader>

//                 <div className="p-8">
//                     <Form
//                         onSubmit={handleSubmit(onSubmit)}
//                         className="grid grid-cols-1 gap-6 md:grid-cols-2"
//                     >
//                         {/* Role */}
//                         <div className="space-y-2">
//                             <label className="text-sm font-medium text-slate-300">
//                                 Role Title
//                             </label>

//                             <select
//                                 {...register("role_title", {
//                                     required: "Role title is required",
//                                 })}
//                                 className="h-14 w-full rounded-xl border border-slate-700 bg-[#0b1220] px-4 text-white outline-none transition focus:border-[#1E3A8A]"
//                             >
//                                 <option value="">Select Role</option>

//                                 {ROLES.map((role) => (
//                                     <option key={role} value={role}>
//                                         {role}
//                                     </option>
//                                 ))}
//                             </select>

//                             {errors.role_title && (
//                                 <p className="text-sm text-red-500">
//                                     {errors.role_title.message}
//                                 </p>
//                             )}
//                         </div>

//                         {/* Work Type */}
//                         <div className="space-y-2">
//                             <label className="text-sm font-medium text-slate-300">
//                                 Work Type
//                             </label>

//                             <select
//                                 {...register("work_type", {
//                                     required: "Work type is required",
//                                 })}
//                                 className="h-14 w-full rounded-xl border border-slate-700 bg-[#0b1220] px-4 text-white outline-none transition focus:border-[#1E3A8A]"
//                             >
//                                 <option value="">Select Work Type</option>

//                                 {WORK_TYPES.map((type) => (
//                                     <option key={type} value={type}>
//                                         {type}
//                                     </option>
//                                 ))}
//                             </select>

//                             {errors.work_type && (
//                                 <p className="text-sm text-red-500">
//                                     {errors.work_type.message}
//                                 </p>
//                             )}
//                         </div>

//                         {/* Commitment */}
//                         <div className="space-y-2">
//                             <label className="text-sm font-medium text-slate-300">
//                                 Commitment Level
//                             </label>

//                             <select
//                                 {...register("commitment_level", {
//                                     required: "Commitment level is required",
//                                 })}
//                                 className="h-14 w-full rounded-xl border border-slate-700 bg-[#0b1220] px-4 text-white outline-none transition focus:border-[#1E3A8A]"
//                             >
//                                 <option value="">Select Commitment</option>

//                                 {COMMITMENT_LEVELS.map((item) => (
//                                     <option key={item} value={item}>
//                                         {item}
//                                     </option>
//                                 ))}
//                             </select>

//                             {errors.commitment_level && (
//                                 <p className="text-sm text-red-500">
//                                     {errors.commitment_level.message}
//                                 </p>
//                             )}
//                         </div>

//                         {/* Deadline */}
//                         <div className="space-y-2">
//                             <label className="text-sm font-medium text-slate-300">
//                                 Application Deadline
//                             </label>

//                             <input
//                                 type="date"
//                                 {...register("deadline", {
//                                     required: "Deadline is required",
//                                 })}
//                                 className="h-14 w-full  rounded-xl border border-slate-700 bg-[#0b1220] px-4 text-white outline-none transition focus:border-[#1E3A8A]"
//                             />

//                             {errors.deadline && (
//                                 <p className="text-sm text-red-500">
//                                     {errors.deadline.message}
//                                 </p>
//                             )}
//                         </div>

//                         {/* Required Skills */}
//                         <div className="md:col-span-2 space-y-2">
//                             <label className="text-sm font-medium text-slate-300">
//                                 Required Skills
//                             </label>

//                             <select
//                                 multiple
//                                 {...register("required_skills", {
//                                     required: "Please select at least one skill",
//                                 })}
//                                 className="h-48 w-full rounded-xl border border-slate-700 bg-[#0b1220] p-4 text-white outline-none transition focus:border-[#1E3A8A]"
//                             >
//                                 {SKILLS.map((skill) => (
//                                     <option key={skill} value={skill}>
//                                         {skill}
//                                     </option>
//                                 ))}
//                             </select>

//                             <p className="text-xs text-slate-500">
//                                 Hold Ctrl (Windows) or Cmd (Mac) to select multiple
//                                 skills.
//                             </p>

//                             {selectedSkills?.length > 0 && (
//                                 <div className="flex flex-wrap gap-2 pt-2">
//                                     {selectedSkills.map((skill) => (
//                                         <span
//                                             key={skill}
//                                             className="rounded-full bg-blue-900/50 border border-blue-700 px-3 py-1 text-xs text-blue-200"
//                                         >
//                                             {skill}
//                                         </span>
//                                     ))}
//                                 </div>
//                             )}

//                             {errors.required_skills && (
//                                 <p className="text-sm text-red-500">
//                                     {errors.required_skills.message}
//                                 </p>
//                             )}
//                         </div>

//                         {/* Submit */}
//                         <div className="pt-2 md:col-span-2">
//                             <Button
//                                 type="submit"
//                                 radius="lg"
//                                 className="h-14 w-full bg-gradient-to-r from-[#081C3A] via-[#0B2447] to-[#123C69] text-base font-semibold text-white shadow-xl hover:opacity-90"
//                             >
//                                 Publish Opportunity
//                             </Button>
//                         </div>
//                     </Form>
//                 </div>
//             </Card>
//         </div>
//     );
// };

// export default AddOpportunityForm;







{/* Backend*/ }
{/*get by id*/ }
// app.get("/api/opportunities/:startupId", async (req, res) => {
//     const { startupId } = req.params;

//     const result = await opportunitiesCollection
//         .find({ startup_id: startupId })
//         .toArray();

//     res.send(result);
// });



// app.get("/api/opportunities/:startupId", async (req, res) => {
//             const { startupId } = req.params;

//             const result = await opportunitiesCollection
//                 .find({ startup_id: startupId })
//                 .toArray();

//             res.send(result);
//         });

//         // // Get all opportunities of a startup
//         app.get("/api/opportunities/startup/:startupId", async (req, res) => {
//             const { startupId } = req.params;

//             const result = await opportunitiesCollection
//                 .find({ startup_id: startupId })
//                 .toArray();

//             res.send(result);
//         });



// Create opportunity
// app.post("/api/opportunities", async (req, res) => {
//     const data = req.body;

//     const result = await opportunitiesCollection.insertOne(data);

//     res.send(result);
// });