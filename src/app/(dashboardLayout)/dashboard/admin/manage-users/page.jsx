"use client";

import React, { useEffect, useState } from "react";
import {
    Users,
    Shield,
    Ban,
    CheckCircle,
    Search
} from "lucide-react";

import { Button, Input } from "@heroui/react";

const ManageUsers = () => {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch("https://startup-forge-server-rho.vercel.app/api/admin/users")
            .then(res => res.json())
            .then(data => {
                setUsers(data || []);
            })
            .catch(err => console.error("Error fetching users:", err));
    }, []);

    const filteredUsers = users.filter(user =>
        user.email
            ?.toLowerCase()
            .includes(search.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-slate-950 p-6 text-white">
            {/* Header */}
            <div className="mb-8">
                <div className="flex items-center gap-3">
                    <Users
                        size={35}
                        className="text-purple-400"
                    />
                    <div>
                        <h1 className="text-3xl font-bold">
                            Manage Users
                        </h1>
                        <p className="text-slate-400">
                            Control platform users
                        </p>
                    </div>
                </div>
            </div>

            {/* Search - Standard Primitive Input Wrapper Architecture */}
            <div className="mb-6 max-w-md">
                <div className="flex items-center gap-2 border border-white/10 rounded-xl bg-white/5 px-3 focus-within:border-purple-500/50 transition-colors">
                    <div className="text-slate-400 shrink-0">
                        <Search size={18} />
                    </div>
                    <Input
                        placeholder="Search by email..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="bg-transparent border-0 outline-none text-white w-full py-2.5 text-sm focus:ring-0 placeholder:text-slate-500"
                    />
                </div>
            </div>

            {/* Users Table */}
            <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5">
                <table className="w-full">
                    <thead className="border-b border-white/10">
                        <tr className="text-left text-sm text-slate-400">
                            <th className="p-4">User</th>
                            <th className="p-4">Role</th>
                            <th className="p-4">Premium</th>
                            <th className="p-4">Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {filteredUsers.map(user => (
                            <tr
                                key={user._id}
                                className="border-b border-white/5"
                            >
                                <td className="p-4">
                                    <div>
                                        <p className="font-semibold">
                                            {user.name || "User"}
                                        </p>
                                        <p className="text-xs text-slate-400">
                                            {user.email}
                                        </p>
                                    </div>
                                </td>

                                <td className="p-4">
                                    <span className="rounded-full bg-purple-500/20 px-3 py-1 text-xs text-purple-300">
                                        {user.role}
                                    </span>
                                </td>

                                <td className="p-4">
                                    {user.isPremium ? (
                                        <span className="flex items-center gap-1 text-green-400">
                                            <CheckCircle size={15} />
                                            Premium
                                        </span>
                                    ) : (
                                        <span className="text-slate-400">
                                            Free
                                        </span>
                                    )}
                                </td>

                                <td className="p-4">
                                    <Button
                                        size="sm"
                                        color={user.isBlocked ? "success" : "danger"}
                                        className={`font-semibold ${user.isBlocked
                                            ? "bg-emerald-600/20 text-emerald-400 border border-emerald-500/20 hover:bg-emerald-600/30"
                                            : "bg-red-600/20 text-red-400 border border-red-500/20 hover:bg-red-600/30"
                                            }`}
                                    >
                                        <span className="flex items-center gap-1">
                                            {user.isBlocked ? (
                                                <>
                                                    <CheckCircle size={15} />
                                                    Unblock
                                                </>
                                            ) : (
                                                <>
                                                    <Ban size={15} />
                                                    Block
                                                </>
                                            )}
                                        </span>
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;