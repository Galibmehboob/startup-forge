"use client";

import { Skeleton } from "@heroui/react";

export default function Loading() {
    return (
        <div className="mx-auto max-w-7xl px-5 py-10">

            {/* Hero */}
            <div className="space-y-5">
                <Skeleton className="h-12 w-96 rounded-xl" />
                <Skeleton className="h-6 w-full rounded-xl" />
                <Skeleton className="h-6 w-3/4 rounded-xl" />
                <Skeleton className="h-14 w-44 rounded-xl" />
            </div>

            {/* Cards */}
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[...Array(6)].map((_, i) => (
                    <div
                        key={i}
                        className="space-y-4 rounded-2xl border border-white/10 p-5"
                    >
                        <Skeleton className="h-48 w-full rounded-xl" />
                        <Skeleton className="h-6 w-2/3 rounded-lg" />
                        <Skeleton className="h-4 w-full rounded-lg" />
                        <Skeleton className="h-4 w-4/5 rounded-lg" />
                        <Skeleton className="h-10 w-32 rounded-xl" />
                    </div>
                ))}
            </div>

        </div>
    );
}