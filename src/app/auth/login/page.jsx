"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import {
    Card,
    CardHeader,
    CardContent,
    Input,
    Button,
    Label,
    Form,
} from "@heroui/react";

import {
    FaEnvelope,
    FaLock,
    FaGoogle,
} from "react-icons/fa";

import {
    Eye,
    EyeOff,
} from "lucide-react";

import {
    ArrowRight,
    Rocket,
} from "@gravity-ui/icons";

import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

export default function LoginPage() {
    const router = useRouter();

    const [loading, setLoading] = useState(false);
    const [googleLoading, setGoogleLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = async (data) => {
        try {
            setLoading(true);

            const { error } = await authClient.signIn.email({
                email: data.email,
                password: data.password,
            });

            if (error) {
                toast.error(error.message);
                return;
            }

            toast.success("Login successful!");
            router.push("/");
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleLogin = async () => {
        try {
            await authClient.signIn.social({
                provider: "google",
                callbackURL: "/",
            });
        } catch (err) {
            console.error(err);
            toast.error("Google login failed");
        }
    };

    return (
        <section className="min-h-screen bg-black">
            <div className="grid min-h-screen lg:grid-cols-2">

                {/* Left */}
                <div className="relative hidden lg:flex overflow-hidden">

                    <Image
                        src="/signin.png"
                        alt="signin"
                        fill
                        sizes="100vw"
                        className="object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-[#1f325b]/80" />

                    <div className="relative z-10 flex h-full flex-col justify-center px-16 text-white">

                        <div className="mb-4 flex items-center gap-2 uppercase tracking-[4px] text-blue-400">
                            <Rocket />
                            StartupForge
                        </div>

                        <h1 className="max-w-xl text-5xl font-bold leading-tight">
                            Build Your Dream Startup Team With Talented People.
                        </h1>

                        <p className="mt-6 max-w-lg text-slate-300">
                            Connect with founders, discover opportunities and
                            collaborate with passionate professionals.
                        </p>

                    </div>

                </div>

                {/* Right */}
                <div className="flex items-center justify-center px-4 py-10">

                    <Card className="w-full max-w-lg border border-white/10 bg-slate-950 p-6 shadow-2xl">

                        <CardHeader className="flex flex-col items-center text-center">

                            <h1 className="bg-gradient-to-r from-white via-slate-200 to-blue-400 bg-clip-text text-3xl font-bold text-transparent">
                                Welcome Back
                            </h1>

                            <p className="mt-2 text-sm text-slate-400">
                                Sign in to continue your StartupForge journey.
                            </p>

                        </CardHeader>

                        <CardContent>

                            <Button
                                onPress={handleGoogleLogin}
                                isLoading={googleLoading}
                                variant="bordered"
                                className="h-12 w-full border-white/10 text-white"
                            >
                                <FaGoogle />
                                Continue with Google
                            </Button>

                            <div className="my-6 flex items-center">
                                <div className="h-px flex-1 bg-white/10" />
                                <span className="px-4 text-xs text-slate-500">OR</span>
                                <div className="h-px flex-1 bg-white/10" />
                            </div>

                            <Form
                                onSubmit={handleSubmit(onSubmit)}
                                className="flex flex-col gap-5"
                            >
                                {/* Email */}
                                <div className="w-full">
                                    <Label htmlFor="email">
                                        Email Address
                                    </Label>

                                    <div className="relative mt-2">
                                        <FaEnvelope className="absolute left-3 top-1/2 z-10 -translate-y-1/2 text-slate-500" />

                                        <Input
                                            {...register("email", {
                                                required: "Email is required",
                                                pattern: {
                                                    value:
                                                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/,
                                                    message: "Enter a valid email",
                                                },
                                            })}
                                            id="email"
                                            type="email"
                                            defaultValue=""
                                            placeholder="john@example.com"
                                            className="w-full pl-10"
                                        />
                                    </div>

                                    {errors.email && (
                                        <p className="mt-1 text-sm text-red-400">
                                            {errors.email.message}
                                        </p>
                                    )}
                                </div>

                                {/* Password */}
                                <div className="w-full">
                                    <Label htmlFor="password">
                                        Password
                                    </Label>

                                    <div className="relative mt-2">

                                        <FaLock className="absolute left-3 top-1/2 z-10 -translate-y-1/2 text-slate-500" />

                                        <Input
                                            {...register("password", {
                                                required: "Password is required",
                                                minLength: {
                                                    value: 8,
                                                    message:
                                                        "Password must be at least 8 characters",
                                                },
                                            })}
                                            id="password"
                                            defaultValue=""
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Enter your password"
                                            className="w-full pl-10 pr-12"
                                        />

                                        <button
                                            type="button"
                                            onClick={() =>
                                                setShowPassword(!showPassword)
                                            }
                                            className="absolute right-3 top-1/2 z-20 -translate-y-1/2 text-slate-500 hover:text-white"
                                        >
                                            {showPassword ? (
                                                <EyeOff size={18} />
                                            ) : (
                                                <Eye size={18} />
                                            )}
                                        </button>

                                    </div>

                                    {errors.password && (
                                        <p className="mt-1 text-sm text-red-400">
                                            {errors.password.message}
                                        </p>
                                    )}
                                </div>

                                <div className="flex justify-end w-full">
                                    <Link
                                        href="/forgot-password"
                                        className="text-sm text-blue-400 hover:underline"
                                    >
                                        Forgot Password?
                                    </Link>
                                </div>
                                <Button
                                    type="submit"
                                    isLoading={loading}
                                    className="h-12 w-full bg-[#1f325b] text-white"
                                >
                                    {loading ? "Signing in..." : "Sign In"}
                                    {!loading && <ArrowRight className="ml-2" />}
                                </Button>
                            </Form>

                            <div className="my-6 flex items-center">
                                <div className="h-px flex-1 bg-white/10" />

                                <span className="px-4 text-xs text-slate-500">
                                    OR
                                </span>

                                <div className="h-px flex-1 bg-white/10" />
                            </div>



                            <p className="mt-6 text-center text-sm text-slate-400">
                                Don,t have an account?
                                <Link
                                    href="/auth/signup"
                                    className="ml-2 text-blue-400 hover:underline"
                                >
                                    Create Account
                                </Link>
                            </p>

                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}