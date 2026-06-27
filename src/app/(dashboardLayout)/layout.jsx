"use client";

import DashboardSidebar from "@/Components/DashboardSidebar";
import { useSession } from "@/lib/auth-client";

const DashBoardLayout = ({ children }) => {
    const { data: session, isPending } = useSession();

    if (isPending) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                Loading...
            </div>
        );
    }

    return (
        <div className="mx-auto flex max-w-screen-2xl">

            {/* Sidebar */}
            <aside className="hidden lg:block w-72 shrink-0">
                <div className="sticky top-16 h-[calc(100vh-64px)]">
                    <DashboardSidebar
                        role={session?.user?.role}
                        isPremium={session?.user?.isPremium}
                    />
                </div>
            </aside>

            {/* Mobile Sidebar */}
            <div className="lg:hidden">
                <DashboardSidebar
                    role={session?.user?.role}
                    isPremium={session?.user?.isPremium}
                />
            </div>

            {/* Content */}
            <main className="min-w-0 flex-1">
                {children}
            </main>

        </div>
    );
};

export default DashBoardLayout;