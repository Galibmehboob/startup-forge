"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { Menu, Moon, Sun, X } from "lucide-react";
import { ArrowRightFromSquare, Rocket } from "@gravity-ui/icons";
import { Button } from "@heroui/react";
import { AnimatePresence, motion } from "framer-motion";

import { useSession, signOut } from "@/lib/auth-client";

export default function Navbar() {
    const { data: session, isPending } = useSession();

    const user = session?.user;

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);

    const profileRef = useRef(null);

    const navLinks = [
        {
            name: "Home",
            href: "/",
        },
        {
            name: "Startups",
            href: "/startups",
        },
        {
            name: "Opportunities",
            href: "/opportunities",
        },
        {
            name: "Contact",
            href: "/contact",
        },
    ];

    const handleSignOut = async () => {
        setProfileOpen(false);

        await signOut({
            fetchOptions: {
                onSuccess: () => {
                    window.location.href = "/auth/login";
                },
            },
        });
    };

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (
                profileRef.current &&
                !profileRef.current.contains(e.target)
            ) {
                setProfileOpen(false);
            }
        };

        document.addEventListener(
            "mousedown",
            handleOutsideClick
        );

        return () =>
            document.removeEventListener(
                "mousedown",
                handleOutsideClick
            );
    }, []);

    if (isPending) {
        return (
            <nav className="sticky top-0 z-50 h-16 border-b border-white/10 bg-black/30 backdrop-blur-xl" />
        );
    }

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/20 backdrop-blur-xl">

            <div className="mx-auto flex h-16 max-w-[90%] items-center justify-between">

                {/* Logo */}
                <Link
                    href="/"
                    className="flex items-center gap-3"
                >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#1f325b] to-blue-500 text-white">
                        <Rocket size={20} />
                    </div>

                    <div>
                        <h1 className="text-lg font-bold text-white">
                            StartupForge
                        </h1>

                        <p className="text-xs text-gray-400">
                            Find Your Place
                        </p>
                    </div>
                </Link>

                {/* Desktop */}
                <div className="hidden items-center gap-6 md:flex">

                    <ul className="flex items-center gap-5 rounded-full border border-white/10 bg-white/10 px-5 py-2 backdrop-blur-xl">

                        {navLinks.map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className="text-sm text-gray-200 transition hover:text-white"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}

                    </ul>

                    <div className="h-8 w-px bg-white/20" />

                    <button
                        onClick={() =>
                            setDarkMode(!darkMode)
                        }
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white"
                    >
                        {darkMode ? (
                            <Sun size={18} />
                        ) : (
                            <Moon size={18} />
                        )}
                    </button>

                    {user ? (

                        <div
                            className="relative"
                            ref={profileRef}
                        >

                            <button
                                onClick={() =>
                                    setProfileOpen(
                                        !profileOpen
                                    )
                                }
                            >

                                <Image
                                    src={
                                        user.image ||
                                        "/avatar.png"
                                    }
                                    width={40}
                                    height={40}
                                    alt="profile"
                                    className="h-10 w-10 rounded-full border border-white/20 object-cover"
                                />

                            </button>

                            <AnimatePresence>

                                {profileOpen && (
                                    <motion.div
                                        initial={{
                                            opacity: 0,
                                            y: -10,
                                            scale: .95,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                            scale: 1,
                                        }}
                                        exit={{
                                            opacity: 0,
                                            y: -10,
                                            scale: .95,
                                        }}
                                        className="absolute right-0 top-14 w-72 overflow-hidden rounded-2xl border border-white/10 bg-[#0f172a] shadow-2xl"
                                    >

                                        <div className="flex items-center gap-3 border-b border-white/10 p-4">

                                            <Image
                                                src={
                                                    user.image ||
                                                    "/avatar.png"
                                                }
                                                width={48}
                                                height={48}
                                                alt="user"
                                                className="rounded-full object-cover"
                                            />

                                            <div>

                                                <p className="font-semibold text-white">
                                                    {user.name}
                                                </p>

                                                <p className="text-xs text-gray-400">
                                                    {user.email}
                                                </p>

                                            </div>

                                        </div>

                                        <div className="p-2">
                                            <Link
                                                href={`/dashboard/${user.role}`}
                                                className="block rounded-xl px-3 py-2 text-sm text-gray-200 hover:bg-white/10"
                                            >
                                                Dashboard
                                            </Link>

                                            <Link
                                                href="/profile"
                                                className="block rounded-xl px-3 py-2 text-sm text-gray-200 hover:bg-white/10"
                                            >
                                                Profile
                                            </Link>

                                            <button
                                                onClick={handleSignOut}
                                                className="mt-1 w-full flex items-center gap-1 rounded-xl px-3 py-2 text-left text-sm text-red-400 hover:bg-red-500/10"
                                            >
                                                Logout <ArrowRightFromSquare />
                                            </button>
                                        </div>

                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ) : (<>
                        <Link
                            href="/auth/login"
                            className="text-sm font-medium text-gray-200 hover:text-white"
                        >
                            Login
                        </Link>

                        <Link
                            href="/auth/signup"
                            className="rounded-full bg-[#1f325b] px-5 py-2 text-sm font-medium text-white transition hover:bg-[#29457c]"
                        >
                            Sign Up
                        </Link>
                    </>
                    )}
                </div>

                {/* Mobile */}
                <div className="flex items-center gap-2 md:hidden">
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white"
                    >
                        {darkMode ? (
                            <Sun size={18} />
                        ) : (
                            <Moon size={18} />
                        )}
                    </button>

                    <button
                        onClick={() =>
                            setIsMenuOpen(!isMenuOpen)
                        }
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white"
                    >
                        {isMenuOpen ? (
                            <X size={20} />
                        ) : (
                            <Menu size={20} />
                        )}
                    </button>
                </div>

            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="border-t border-white/10 bg-black/30 backdrop-blur-2xl md:hidden">
                    <div className="space-y-4 px-5 py-5">
                        <ul className="space-y-3">
                            {navLinks.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        onClick={() =>
                                            setIsMenuOpen(false)
                                        }
                                        className="block text-sm text-gray-200 hover:text-white"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <div className="h-px bg-white/10" />

                        <div className="flex flex-col gap-3">
                            {session ? (
                                <>
                                    <div className="flex items-center gap-3">
                                        <Image
                                            src={
                                                session.user.image ||
                                                "/avatar.png"
                                            }
                                            width={42}
                                            height={42}
                                            alt="user"
                                            className="h-10 w-10 rounded-full object-cover"
                                        />

                                        <div>
                                            <p className="text-sm font-medium text-white">
                                                {session.user.name}
                                            </p>

                                            <p className="text-xs text-gray-400">
                                                {session.user.email}
                                            </p>
                                        </div>
                                    </div>

                                    <Link
                                        href={`/dashboard/${session.user.role}`}
                                        onClick={() =>
                                            setIsMenuOpen(false)
                                        }
                                        className="rounded-full bg-white/10 px-4 py-2 text-center text-white"
                                    >
                                        Dashboard
                                    </Link>

                                    <Link
                                        href="/profile"
                                        onClick={() =>
                                            setIsMenuOpen(false)
                                        }
                                        className="rounded-full bg-white/10 px-4 py-2 text-center text-white"
                                    >
                                        Profile
                                    </Link>

                                    <Button
                                        onPress={handleSignOut}
                                        variant="ghost"
                                        className="text-red-400"
                                    >
                                        Logout <ArrowRightFromSquare />
                                    </Button>
                                </>
                            ) : (<>
                                <Link
                                    href="/auth/login"
                                    onClick={() =>
                                        setIsMenuOpen(false)
                                    }
                                    className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-center text-white"
                                >
                                    Login
                                </Link>

                                <Link
                                    href="/auth/signup"
                                    onClick={() =>
                                        setIsMenuOpen(false)
                                    }
                                    className="rounded-full bg-[#1f325b] px-4 py-2 text-center text-white"
                                >
                                    Sign Up
                                </Link>
                            </>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}