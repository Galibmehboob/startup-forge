"use client";

import Link from "next/link";
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
    FaUser,
    FaEnvelope,
    FaLock,
    FaImage,
    FaGoogle,
} from "react-icons/fa";

import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { handleImageUpload } from "@/utils/uploadeImg";
import { Pen } from "lucide-react";


export default function SignupPage() {
    // useForm
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: "",
            email: "",
            image: "",
            password: "",
            role: "",
            isBlocked: false,
        },
    });

    const fileInputRef = useRef(null);
    const router = useRouter();
    const [uploading, setUploading] = useState(false);
    const [preview, setPreview] = useState("");
    const [loading, setLoading] = useState(false);


    // const handleImageUpload = async (e) => {
    //     const image = e.target.files?.[0];

    //     if (!image) return;

    //     try {
    //         setUploading(true);

    //         const formData = new FormData();
    //         formData.append("image", image);

    //         const res = await fetch(
    //             `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
    //             {
    //                 method: "POST",
    //                 body: formData,
    //             }
    //         );

    //         const result = await res.json();

    //         if (!result.success) {
    //             toast.error("Image upload failed");
    //             return;
    //         }

    //         const imageUrl = result.data.display_url;

    //         setPreview(imageUrl);

    //         setValue("image", imageUrl, {
    //             shouldValidate: true,
    //             shouldDirty: true,
    //         });

    //         toast.success("Image uploaded");
    //     } catch (err) {
    //         console.log(err);
    //         toast.error("Upload failed");
    //     } finally {
    //         setUploading(false);
    //     }
    // };

    // Role Watch
    const selectedRole = watch("role");


    // Submit
    const onSubmit = async (data) => {
        console.log("Form Data:", data);
        setLoading(true);

        const { data: signUpData, error } = await authClient.signUp.email({
            email: data.email,
            password: data.password,
            name: data.name,
            image: data.image,
            role: data.role,
        });

        console.log("Signup Data:", signUpData);
        console.log("Signup Error:", error);

        if (error) {
            toast.error(error.message || "Signup failed");
            return;
        }

        toast.success("Account created successfully!");
        router.push("/");
    };
    return (
        <div className="min-h-screen bg-black">
            <div className="grid min-h-screen lg:grid-cols-2">

                {/* Left Image Section */}
                <div className="relative hidden overflow-hidden lg:flex">

                    <Image
                        src="/reg.png"
                        alt="StartupForge"
                        fill
                        sizes="100"
                        priority
                        className="object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-[#1f325b]/80" />

                    <div className="relative z-10 flex flex-col justify-center px-16 text-white">

                        <p className="mb-4 text-sm uppercase tracking-[4px] text-blue-400">
                            StartupForge
                        </p>

                        <h1 className="max-w-xl text-5xl font-bold leading-tight">
                            Build Your Dream Startup Team With Talented People.
                        </h1>

                        <p className="mt-6 max-w-lg text-lg text-slate-300">
                            Connect with founders, discover opportunities,
                            collaborate with talented professionals and
                            launch amazing startups together.
                        </p>

                        <div className="mt-10 grid grid-cols-3 gap-4">

                            <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                                <h2 className="text-3xl font-bold">15K+</h2>
                                <p className="mt-1 text-sm text-slate-300">
                                    Members
                                </p>
                            </div>

                            <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                                <h2 className="text-3xl font-bold">4K+</h2>
                                <p className="mt-1 text-sm text-slate-300">
                                    Startups
                                </p>
                            </div>

                            <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                                <h2 className="text-3xl font-bold">98%</h2>
                                <p className="mt-1 text-sm text-slate-300">
                                    Success
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

                {/* Right Form */}
                <div className="flex items-center justify-center px-4 py-10">

                    <Card className="w-full max-w-lg border border-white/10 bg-slate-950 p-6 shadow-2xl">
                        <CardHeader className="flex flex-col items-center text-center">
                            <h1 className="bg-gradient-to-r from-white via-slate-200 to-blue-400 bg-clip-text text-3xl font-bold text-transparent">
                                Create Account
                            </h1>

                            <p className="mt-2 text-sm text-slate-400">
                                Join StartupForge and connect with founders &
                                collaborators.
                            </p>
                        </CardHeader>

                        <CardContent>
                            <Form
                                onSubmit={handleSubmit(onSubmit)}
                                className="flex flex-col gap-5"
                            >
                                {/* Name */}
                                <div className="w-full">
                                    <Label htmlFor="name">
                                        Full Name
                                    </Label>

                                    <div className="relative mt-2">
                                        <FaUser className="absolute left-3 top-1/2 z-10 -translate-y-1/2 text-slate-500" />

                                        <Input
                                            {...register("name", {
                                                required:
                                                    "Full Name Required",
                                            })}
                                            id="name"
                                            defaultValue=""
                                            placeholder="Enter your full name"
                                            className="w-full pl-10"
                                        />
                                    </div>

                                    {errors.name && (
                                        <p className="mt-1 text-sm text-red-400">
                                            {errors.name.message}
                                        </p>
                                    )}
                                </div>

                                {/* Email */}
                                <div className="w-full">
                                    <Label htmlFor="email">
                                        Email Address
                                    </Label>

                                    <div className="relative mt-2">
                                        <FaEnvelope className="absolute left-3 top-1/2 z-10 -translate-y-1/2 text-slate-500" />

                                        <Input
                                            {...register("email", {
                                                required:
                                                    "Email is required",
                                                pattern: {
                                                    value:
                                                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/,
                                                    message:
                                                        "Enter a valid email",
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

                                {/* Image */}
                                <div className="w-full">
                                    <Label>Profile Image</Label>

                                    {/* File Input */}
                                    <input
                                        ref={fileInputRef}
                                        type="file"
                                        accept="image/*"
                                        hidden
                                        onChange={(e) =>
                                            handleImageUpload(
                                                e,
                                                setUploading,
                                                setPreview,
                                                setValue
                                            )
                                        }
                                    />

                                    {/* Hidden field for React Hook Form */}
                                    <input
                                        type="hidden"
                                        {...register("image", {
                                            required: "Profile image required",
                                        })}
                                    />

                                    <div className="mt-4 flex items-center gap-4">
                                        {preview ? (
                                            <Image
                                                src={preview}
                                                alt="preview"
                                                width={70}
                                                height={70}
                                                className="h-[70px] w-[70px] rounded-full border object-cover"
                                            />
                                        ) : (
                                            <div className="flex h-[70px] w-[70px] items-center justify-center rounded-full border border-dashed border-slate-500">
                                                <FaImage className="text-2xl text-slate-500" />
                                            </div>
                                        )}

                                        <Button
                                            type="button"
                                            onPress={() => fileInputRef.current?.click()}
                                            isLoading={uploading}
                                            variant="bordered"
                                        >
                                            {uploading ? "Uploading..." : "Upload Image"}


                                        </Button>
                                    </div>

                                    {errors.image && (
                                        <p className="mt-2 text-sm text-red-400">
                                            {errors.image.message}
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
                                                required:
                                                    "Password is required",
                                                minLength: {
                                                    value: 8,
                                                    message:
                                                        "Password must be at least 8 characters",
                                                },
                                                pattern: {
                                                    value:
                                                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
                                                    message:
                                                        "Must contain uppercase, lowercase and number",
                                                },
                                            })}
                                            id="password"
                                            type="password"
                                            defaultValue=""
                                            placeholder="Create a secure password"
                                            className="w-full pl-10"
                                        />
                                    </div>



                                    {errors.password && (
                                        <p className="mt-1 text-sm text-red-400">
                                            {
                                                errors.password
                                                    .message
                                            }
                                        </p>
                                    )}
                                </div>

                                {/* Role */}
                                <div className="w-full">
                                    <Label>Select Role</Label>

                                    <div className="mt-3 grid grid-cols-2 gap-4">
                                        <label className="cursor-pointer">
                                            <input
                                                {...register("role", {
                                                    required: "Select Role",
                                                })}
                                                type="radio"
                                                value="collaborator"
                                                defaultChecked
                                                className="hidden"
                                            />

                                            <div
                                                className={`rounded-xl border p-4 transition-all duration-300 ${selectedRole === "collaborator"
                                                    ? "border-blue-500 bg-blue-500/10 ring-2 ring-blue-500/30"
                                                    : "border-white/10 bg-white/5 hover:border-white/20"
                                                    }`}
                                            >
                                                <h3 className="font-semibold text-white">
                                                    Collaborator
                                                </h3>

                                                <p className="mt-1 text-xs text-slate-400">
                                                    Join startups & contribute your skills.
                                                </p>
                                            </div>
                                        </label>

                                        <label className="cursor-pointer">
                                            <input
                                                {...register("role", {
                                                    required: "Select Role",
                                                })}
                                                type="radio"
                                                value="founder"
                                                className="hidden"
                                            />

                                            <div
                                                className={`rounded-xl border p-4 transition-all duration-300 ${selectedRole === "founder"
                                                    ? "border-blue-500 bg-blue-500/10 ring-2 ring-blue-500/30"
                                                    : "border-white/10 bg-white/5 hover:border-white/20"
                                                    }`}
                                            >
                                                <h3 className="font-semibold text-white">
                                                    Founder
                                                </h3>

                                                <p className="mt-1 text-xs text-slate-400">
                                                    Build a startup and recruit collaborators.
                                                </p>
                                            </div>
                                        </label>
                                    </div>

                                    {errors.role && (
                                        <p className="mt-2 text-sm text-red-400">
                                            {errors.role.message}
                                        </p>
                                    )}
                                </div>
                                <Button
                                    type="submit"
                                    className="h-12 w-full bg-[#1f325b] text-white"
                                    isLoading={loading}
                                >
                                    {loading ? "Creating Account..." : "Create Account"}
                                    {!loading && <Pen className="ml-2" />}

                                </Button>
                            </Form>

                            <div className="my-6 flex items-center">
                                <div className="h-px flex-1 bg-white/10" />

                                <span className="px-4 text-xs text-slate-500">
                                    OR
                                </span>

                                <div className="h-px flex-1 bg-white/10" />
                            </div>

                            <Button
                                variant="bordered"
                                className="h-12 w-full border-white/10 text-white"
                            >
                                <FaGoogle />
                                Continue with Google
                            </Button>

                            <p className="mt-6 text-center text-sm text-slate-400">
                                Already have an account?
                                <Link
                                    href="/auth/login"
                                    className="ml-2 text-blue-400 hover:underline"
                                >
                                    Sign In
                                </Link>
                            </p>
                        </CardContent>
                    </Card>
                </div>


            </div>
        </div>
    );
}