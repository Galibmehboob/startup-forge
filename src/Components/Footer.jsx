"use client";

import Link from "next/link";
import { Send } from "lucide-react";
import { LogoDocker, LogoFacebook, LogoGithub, LogoLinkedin, Rocket } from "@gravity-ui/icons";

export default function Footer() {
    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Listings", href: "/listings" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <footer className="relative  border-t border-white/10 bg-black/20 backdrop-blur-xl">

            {/* Top Blur Effect */}
            <div className="absolute inset-0 bg-linear-to-b from-white/3 to-transparent pointer-events-none" />

            <div className="relative mx-auto max-w-7xl px-4 py-14 md:px-6">

                {/* Main Footer */}
                <div className="grid gap-10 md:grid-cols-3">

                    {/* Logo & Description */}
                    <div>
                        <Link href="/" className="flex items-center gap-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-[#1f325b] to-blue-500 text-lg font-bold text-white shadow-lg">
                                <Rocket size={20} />
                            </div>

                            <div>
                                <h2 className="text-xl font-bold text-white">
                                    StartupForge
                                </h2>
                                <p className="text-xs text-gray-400">
                                    Find Your Perfect place
                                </p>
                            </div>
                        </Link>

                        <p className="mt-5 max-w-sm text-sm leading-7 text-gray-400">
                            A modern hiring platform that makes it easy for talent and recruiters to connect, communicate, and grow—fast and efficiently.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="mb-5 text-lg font-semibold text-white">
                            Quick Links
                        </h3>

                        <ul className="space-y-3">
                            {navLinks.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-sm text-gray-400 transition duration-300 hover:text-white"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="mb-5 text-lg font-semibold text-white">
                            Stay Updated
                        </h3>

                        <p className="mb-5 text-sm text-gray-400">
                            Get updates about new listings and features.
                        </p>

                        <div className="flex items-center overflow-hidden rounded-full border border-white/10 bg-white/10 backdrop-blur-xl">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full bg-transparent px-4 py-3 text-sm text-white placeholder:text-gray-400 outline-none"
                            />

                            <button className="flex h-11 w-11 items-center justify-center bg-[#1f325b] text-white transition hover:bg-[#2b477c]">
                                <Send size={18} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="my-10 h-px w-full bg-white/10" />

                {/* Bottom Footer */}
                <div className="flex flex-col items-center justify-between gap-5 md:flex-row">

                    {/* Copyright */}
                    <p className="text-sm text-gray-400">
                        © {new Date().getFullYear()} Stage Forge. All rights reserved.
                    </p>

                    {/* Social Icons */}
                    <div className="flex items-center gap-3">
                        <Link
                            href="#"
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-gray-300 backdrop-blur-lg transition hover:bg-white/20 hover:text-white"
                        >
                            <LogoFacebook size={18} />
                        </Link>

                        <Link
                            href="#"
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-gray-300 backdrop-blur-lg transition hover:bg-white/20 hover:text-white"
                        >
                            <LogoGithub size={18} />
                        </Link>

                        <Link
                            href="#"
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-gray-300 backdrop-blur-lg transition hover:bg-white/20 hover:text-white"
                        >
                            <LogoDocker size={18} />
                        </Link>

                        <Link
                            href="#"
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-gray-300 backdrop-blur-lg transition hover:bg-white/20 hover:text-white"
                        >
                            <LogoLinkedin size={18} />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}