"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Phone,
    MapPin,
    MessageSquare,
    ArrowRight,
    Sparkles,
    HelpCircle
} from "lucide-react";
import { Card, Button, Input } from "@heroui/react";
import toast from "react-hot-toast";

const ContactUs = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success("Thank you! Startup Forge team will contact you shortly.");
    };

    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <div className="min-h-screen bg-slate-950 bg-gradient-to-b from-slate-955 via-slate-900 to-[#081C3A] text-white overflow-x-hidden selection:bg-blue-500/30">

            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-1/4 w-72 md:w-96 h-72 md:h-96 bg-blue-600/10 rounded-full blur-[100px] md:blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-cyan-500/5 rounded-full blur-[120px] md:blur-[150px] pointer-events-none" />

            {/* 1. Hero Section */}
            <div className="relative max-w-7xl mx-auto px-4 md:px-6 pt-20 md:pt-24 pb-12 md:pb-16 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs md:text-sm font-medium mb-6"
                >
                    <Sparkles size={14} className="md:size-4" />
                    <span>Connect with Startup Forge</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-3xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent max-w-3xl mx-auto leading-tight"
                >
                    Let’s Forge Your Startup Into an <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Empire</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-4 md:mt-6 text-base md:text-xl text-slate-400 max-w-2xl mx-auto px-2"
                >
                    Have a disruptive idea, investment query, or want to join our ecosystem? Reach out to Startup Forge. We build, scale, and accelerate future tech giants.
                </motion.p>
            </div>

            {/* 2. Main Content: Info & Form */}
            <div className="max-w-7xl mx-auto px-4 md:px-6 pb-20 md:pb-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

                    {/* Left Column: Contact Cards */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="lg:col-span-5 space-y-4 md:space-y-6"
                    >
                        <motion.div variants={fadeInUp}>
                            <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2 text-slate-200">Forge HQ Touchpoints</h3>
                            <p className="text-slate-400 text-xs md:text-sm">Direct channels to sync up with our incubation and acceleration teams.</p>
                        </motion.div>

                        {/* Card 1: Support / General */}
                        <motion.div variants={fadeInUp} whileHover={{ y: -4 }} className="group">
                            <Card className="p-5 md:p-6 border border-white/10 bg-slate-900/40 backdrop-blur-xl rounded-2xl md:rounded-3xl transition-all duration-300 group-hover:border-blue-500/30">
                                <div className="flex items-start gap-4 text-white">
                                    <div className="p-2.5 md:p-3 rounded-xl md:rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 shrink-0">
                                        <MessageSquare size={20} className="md:size-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold">Incubation & Helpdesk</h4>
                                        <p className="text-xs md:text-sm text-slate-400 mt-1">Get instant guidance on how to submit pitching proposals or operational queries.</p>
                                        <span className="inline-flex items-center gap-1 text-xs md:text-sm font-semibold text-blue-400 mt-3 group-hover:text-blue-300">
                                            hello@startupforge.com <ArrowRight size={12} className="md:size-3.5" />
                                        </span>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>

                        {/* Card 2: Phone */}
                        <motion.div variants={fadeInUp} whileHover={{ y: -4 }} className="group">
                            <Card className="p-5 md:p-6 border border-white/10 bg-slate-900/40 backdrop-blur-xl rounded-2xl md:rounded-3xl transition-all duration-300 group-hover:border-cyan-500/30">
                                <div className="flex items-start gap-4 text-white">
                                    <div className="p-2.5 md:p-3 rounded-xl md:rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300 shrink-0">
                                        <Phone size={20} className="md:size-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold">Call Our Venture Desk</h4>
                                        <p className="text-xs md:text-sm text-slate-400 mt-1">Available for founders & institutional investors (Mon-Fri | 9am - 6pm).</p>
                                        <span className="inline-flex items-center gap-1 text-xs md:text-sm font-semibold text-cyan-400 mt-3 group-hover:text-cyan-300">
                                            +880 1700-ForgeHQ <ArrowRight size={12} className="md:size-3.5" />
                                        </span>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>

                        {/* Card 3: Location */}
                        <motion.div variants={fadeInUp} whileHover={{ y: -4 }} className="group">
                            <Card className="p-5 md:p-6 border border-white/10 bg-slate-900/40 backdrop-blur-xl rounded-2xl md:rounded-3xl transition-all duration-300 group-hover:border-indigo-500/30">
                                <div className="flex items-start gap-4 text-white">
                                    <div className="p-2.5 md:p-3 rounded-xl md:rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300 shrink-0">
                                        <MapPin size={20} className="md:size-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold">Innovation Lab Address</h4>
                                        <p className="text-xs md:text-sm text-slate-400 mt-1">Suite 702, Tech Frontier Tower, Kawran Bazar, Dhaka, Bangladesh.</p>
                                        <span className="inline-flex items-center gap-1 text-xs md:text-sm font-semibold text-indigo-400 mt-3 group-hover:text-indigo-300">
                                            Navigate Hub Location <ArrowRight size={12} className="md:size-3.5" />
                                        </span>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    </motion.div>

                    {/* Right Column: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-7"
                    >
                        <Card className="overflow-hidden rounded-2xl md:rounded-3xl border border-white/10 bg-slate-900/20 backdrop-blur-2xl p-5 sm:p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] text-white">
                            <div className="mb-6 md:mb-8">
                                <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">Pitch or Inquiry Form</h3>
                                <p className="text-slate-400 text-xs md:text-sm mt-1.5 md:mt-2">Let us know what you are building. The Startup Forge evaluation board responds within 12 hours.</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                                    <div className="space-y-1.5 md:space-y-2">
                                        <label className="text-xs md:text-sm font-medium text-slate-300">First Name</label>
                                        <Input
                                            required
                                            type="text"
                                            placeholder="Elon"
                                            variant="bordered"
                                            className="w-full text-white bg-slate-800/40 border-white/10 rounded-xl h-11 md:h-12 text-sm"
                                        />
                                    </div>
                                    <div className="space-y-1.5 md:space-y-2">
                                        <label className="text-xs md:text-sm font-medium text-slate-300">Last Name</label>
                                        <Input
                                            required
                                            type="text"
                                            placeholder="Musk"
                                            variant="bordered"
                                            className="w-full text-white bg-slate-800/40 border-white/10 rounded-xl h-11 md:h-12 text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1.5 md:space-y-2">
                                    <label className="text-xs md:text-sm font-medium text-slate-300">Email Address</label>
                                    <Input
                                        required
                                        type="email"
                                        placeholder="founder@startup.com"
                                        variant="bordered"
                                        className="w-full text-white bg-slate-800/40 border-white/10 rounded-xl h-11 md:h-12 text-sm"
                                    />
                                </div>

                                <div className="space-y-1.5 md:space-y-2">
                                    <label className="text-xs md:text-sm font-medium text-slate-300">Startup Name / Subject</label>
                                    <Input
                                        required
                                        type="text"
                                        placeholder="e.g., TechForge AI - Partnership query"
                                        variant="bordered"
                                        className="w-full text-white bg-slate-800/40 border-white/10 rounded-xl h-11 md:h-12 text-sm"
                                    />
                                </div>

                                {/* Styled Native Textarea */}
                                <div className="space-y-1.5 md:space-y-2">
                                    <label className="text-xs md:text-sm font-medium text-slate-300">Describe Your Concept / Message</label>
                                    <textarea
                                        required
                                        rows={5}
                                        placeholder="Tell us about your product, target industry, or how Startup Forge can help scale your idea..."
                                        className="w-full bg-slate-800/40 border border-white/10 p-3 md:p-4 rounded-xl text-white placeholder:text-neutral-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200 resize-none text-xs md:text-sm backdrop-blur-md"
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full h-12 md:h-14 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white text-sm md:text-base font-semibold rounded-xl shadow-xl hover:opacity-90 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200"
                                    endContent={<ArrowRight size={16} className="md:size-4.5" />}
                                >
                                    Submit to Startup Forge
                                </Button>
                            </form>
                        </Card>
                    </motion.div>

                </div>
            </div>

            {/* 3. Section: Startup Forge Track Record */}
            <div className="border-t border-b border-white/10 bg-slate-900/30 backdrop-blur-sm py-10 md:py-16">
                <div className="max-w-7xl mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
                        <div>
                            <h3 className="text-2xl md:text-5xl font-extrabold text-blue-400">120+</h3>
                            <p className="text-[10px] md:text-sm text-slate-400 mt-1 md:mt-2 uppercase tracking-widest">Startups Forged</p>
                        </div>
                        <div>
                            <h3 className="text-2xl md:text-5xl font-extrabold text-cyan-400">$45M+</h3>
                            <p className="text-[10px] md:text-sm text-slate-400 mt-1 md:mt-2 uppercase tracking-widest">Total Seed Funding</p>
                        </div>
                        <div>
                            <h3 className="text-2xl md:text-5xl font-extrabold text-indigo-400">15+</h3>
                            <p className="text-[10px] md:text-sm text-slate-400 mt-1 md:mt-2 uppercase tracking-widest">Micro-Exits</p>
                        </div>
                        <div>
                            <h3 className="text-2xl md:text-5xl font-extrabold text-purple-400">24h</h3>
                            <p className="text-[10px] md:text-sm text-slate-400 mt-1 md:mt-2 uppercase tracking-widest">Proposal Evaluation</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 4. FAQ Section for Founders */}
            <div className="max-w-5xl mx-auto px-4 md:px-6 py-16 md:py-24">
                <div className="text-center mb-10 md:mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white">Startup Forge Ecosystem FAQ</h2>
                    <p className="text-slate-400 text-xs md:text-sm mt-2">Answers regarding our incubator pipelines, programs, and ecosystem networks.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <div className="p-5 md:p-6 rounded-xl md:rounded-2xl border border-white/5 bg-slate-900/20">
                        <h4 className="flex items-center gap-2 font-bold text-white text-base md:text-lg">
                            <HelpCircle size={16} className="text-blue-400 shrink-0" />
                            What kind of startups does Startup Forge accept?
                        </h4>
                        <p className="text-slate-400 text-xs md:text-sm mt-2.5 md:mt-3 leading-relaxed">
                            We primarily review and accept early-stage technology innovations, including FinTech, SaaS, Deep-tech, AI infrastructure, and scalable hardtech innovations.
                        </p>
                    </div>

                    <div className="p-5 md:p-6 rounded-xl md:rounded-2xl border border-white/5 bg-slate-900/20">
                        <h4 className="flex items-center gap-2 font-bold text-white text-base md:text-lg">
                            <HelpCircle size={16} className="text-cyan-400" />
                            Does Startup Forge take equity in our company?
                        </h4>
                        <p className="text-slate-400 text-xs md:text-sm mt-2.5 md:mt-3 leading-relaxed">
                            Our core incubation model offers flexible pathways. Depending on the customized cohort acceleration program you join, it ranges from minor equity options to zero-equity structures.
                        </p>
                    </div>

                    <div className="p-5 md:p-6 rounded-xl md:rounded-2xl border border-white/5 bg-slate-900/20">
                        <h4 className="flex items-center gap-2 font-bold text-white text-base md:text-lg">
                            <HelpCircle size={16} className="text-indigo-400" />
                            Can international founders apply?
                        </h4>
                        <p className="text-slate-400 text-xs md:text-sm mt-2.5 md:mt-3 leading-relaxed">
                            Absolutely. Startup Forge features a fully remote-friendly infrastructure allowing validation, funding access, and mentorship frameworks for global digital teams.
                        </p>
                    </div>

                    <div className="p-5 md:p-6 rounded-xl md:rounded-2xl border border-white/5 bg-slate-900/20">
                        <h4 className="flex items-center gap-2 font-bold text-white text-base md:text-lg">
                            <HelpCircle size={16} className="text-purple-400" />
                            How secure is our pitching documentation?
                        </h4>
                        <p className="text-slate-400 text-xs md:text-sm mt-2.5 md:mt-3 leading-relaxed">
                            We highly respect intellectual property. All submission documents, decks, and concepts shared inside the Startup Forge portal are guarded under strict non-disclosure policies.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ContactUs;