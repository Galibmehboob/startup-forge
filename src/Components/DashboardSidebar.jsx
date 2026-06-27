"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import {
    LayoutDashboard,
    Rocket,
    PlusCircle,
    Settings,
    ClipboardList,
    Users,
    FolderKanban,
    CreditCard,
    FileText,
    User,
    X,
    Menu,
    LogOut,
} from "lucide-react";

import { ChevronLeft, StarFill } from "@gravity-ui/icons";
import { signOut, useSession } from "@/lib/auth-client";

export default function DashboardSidebar({ role, isPremium }) {
    const [open, setOpen] = useState(false);

    const { data: session } = useSession();

    const founderLinks = [
        {
            name: "Overview",
            href: "/dashboard/founder",
            icon: LayoutDashboard,
        },
        {
            name: "My Startup",
            href: "/dashboard/founder/startup",
            icon: Rocket,
        },
        {
            name: "Add Opportunity",
            href: "/dashboard/founder/add-opportunity",
            icon: PlusCircle,
        },
        {
            name: "Manage Opportunities",
            href: "/dashboard/founder/manage-opportunities",
            icon: Settings,
        },
        {
            name: "Applications",
            href: "/dashboard/founder/applications",
            icon: ClipboardList,
        },
    ];

    const collaboratorLinks = [
        {
            name: "Overview",
            href: "/dashboard/collaborator",
            icon: LayoutDashboard,
        },
        {
            name: "My Applications",
            href: "/dashboard/my-applications",
            icon: FileText,
        },
        {
            name: "Profile",
            href: "/dashboard/profile",
            icon: User,
        },
    ];

    const adminLinks = [
        {
            name: "Overview",
            href: "/dashboard/admin",
            icon: LayoutDashboard,
        },
        {
            name: "Manage Users",
            href: "/dashboard/manage-users",
            icon: Users,
        },
        {
            name: "Manage Startups",
            href: "/dashboard/manage-startups",
            icon: FolderKanban,
        },
        {
            name: "Transactions",
            href: "/dashboard/transactions",
            icon: CreditCard,
        },
    ];



    const links =
        role === "admin"
            ? adminLinks
            : role === "collaborator"
                ? collaboratorLinks
                : founderLinks;



    const roleConfig = {
        founder: {
            title: "Founder",
            color: "bg-blue-500/20 text-blue-400 border-blue-500/30",
        },
        collaborator: {
            title: "Collaborator",
            color: "bg-green-500/20 text-green-400 border-green-500/30",
        },
        admin: {
            title: "Admin",
            color: "bg-purple-500/20 text-purple-400 border-purple-500/30",
        },
    };

    const currentRole = roleConfig[role] || roleConfig.collaborator;

    const handleLogout = async () => {
        await signOut();
        window.location.href = "/";
    };
    return (
        <>
            {/* Floating Toggle Button (Mobile) */}
            <button
                onClick={() => setOpen(true)}
                className="fixed top-20 right-4 z-[60] flex h-12 w-12 items-center justify-center rounded-full bg-[#1f325b] text-white shadow-xl transition hover:scale-105 lg:hidden"
            >
                <ChevronLeft size={22} />
            </button>

            {/* Overlay */}
            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 z-40 bg-black/60 lg:hidden"
                />
            )}

            {/* Sidebar */}
            <aside
                className={`
                fixed
                left-0
                top-0
                z-50
                h-screen
                w-72
                bg-[#0f172a]
                text-white
                flex
                flex-col
                border-r
                border-white/10
                transition-transform
                duration-300
                lg:top-16
                lg:h-[calc(100vh-64px)]
                lg:translate-x-0
                ${open ? "translate-x-0" : "-translate-x-full"}
            `}
            >
                {/* Mobile Close */}
                <div className="flex items-center justify-between border-b border-white/10 p-5 lg:hidden">
                    <h2 className="font-semibold">Menu</h2>

                    <button
                        onClick={() => setOpen(false)}
                        className="rounded-lg bg-white/10 p-2"
                    >
                        <X size={18} />
                    </button>
                </div>

                {/* User Header */}
                <div className="border-b border-white/10 p-5">
                    <Link
                        href="/dashboard/profile"
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-3 rounded-xl p-2 transition hover:bg-white/10"
                    >
                        <Image
                            src={session?.user?.image || "/default-avatar.png"}
                            alt={session?.user?.name || "User"}
                            width={52}
                            height={52}
                            className="h-13 w-13 rounded-full border border-white/10 object-cover"
                        />

                        <div className="min-w-0 flex-1">
                            <h3 className="truncate font-semibold">
                                {session?.user?.name}
                            </h3>

                            <p className="truncate text-xs text-gray-400">
                                {session?.user?.email}
                            </p>

                            <span
                                className={`mt-2 inline-flex items-center gap-1 rounded-full border px-2 py-1 text-xs ${currentRole.color}`}
                            >
                                {currentRole.title}

                                {isPremium && (
                                    <StarFill
                                        size={12}
                                        className="text-yellow-500"
                                    />
                                )}
                            </span>
                        </div>
                    </Link>
                </div>


                {/* Navigation */}
                <nav className="flex-1 overflow-y-auto p-4 space-y-2">
                    {links.map((item) => {
                        const Icon = item.icon;

                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setOpen(false)}
                                className="flex items-center gap-3 rounded-xl px-3 py-3 text-gray-300 transition hover:bg-white/10 hover:text-white"
                            >
                                <Icon size={18} />
                                <span>{item.name}</span>
                            </Link>
                        );
                    })}
                </nav>

                {/* Bottom */}
                <div className="border-t border-white/10 p-4">
                    <Link
                        href="/dashboard/profile"
                        onClick={() => setOpen(false)}
                        className="mb-2 flex items-center gap-3 rounded-xl px-3 py-3 text-gray-300 transition hover:bg-white/10 hover:text-white"
                    >
                        <User size={18} />
                        <span>My Profile</span>
                    </Link>

                    <button
                        onClick={handleLogout}
                        className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-red-400 transition hover:bg-red-500/10"
                    >
                        <LogOut size={18} />
                        <span>Sign Out</span>
                    </button>

                    <div className="mt-4 border-t border-white/10 pt-4 text-center text-xs text-gray-500">
                        Startup Dashboard v1.0
                    </div>
                </div>
            </aside>
        </>
    );
}