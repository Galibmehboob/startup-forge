"use client";

import Link from "next/link";

import { motion } from "framer-motion";
import { House, SearchX } from "lucide-react";
import { Button } from "@heroui/react";
import { ChevronLeft } from "@gravity-ui/icons";

export default function NotFound() {
    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#020617] px-6">
            {/* Background Glow */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1f325b]/30 blur-3xl" />
                <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
                <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />
            </div>

            <div className="relative z-10 mx-auto max-w-3xl text-center">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 inline-flex rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
                >
                    <SearchX
                        size={70}
                        className="text-blue-400"
                    />
                </motion.div>

                <motion.h1
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="mb-3 text-7xl font-black tracking-tight text-white md:text-9xl"
                >
                    404
                </motion.h1>

                <motion.h2
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mb-4 text-2xl font-bold text-white md:text-4xl"
                >
                    Page Not Found
                </motion.h2>

                <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mx-auto mb-10 max-w-xl text-gray-400"
                >
                    The page you,re looking for doesn,t exist, may have
                    been moved, or is temporarily unavailable.
                </motion.p>

                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col items-center justify-center gap-4 sm:flex-row"
                >


                    <Button
                        size="lg"
                        variant="tertiary"

                        className="border-white/20 text-white"
                        onPress={() => window.history.back()}
                    >

                        <ChevronLeft size={18} />Back Home
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}