import { stripe } from "@/lib/stripe";
import Link from "next/link";

import {
    Card,
    CardHeader,
    Button,
} from "@heroui/react";

import {
    CheckCircle2,
    Crown,
    CalendarDays,
    CreditCard,
    Mail,
    ArrowRight,
    Sparkles
} from "lucide-react";
import { baseUrl } from "@/lib/api/basrUrl";


export default async function PremiumSuccess({ searchParams }) {
    const { session_id } = await searchParams;

    if (!session_id) {
        throw new Error("Please provide a valid session_id (`cs_test_...`)");
    }

    const session = await stripe.checkout.sessions.retrieve(session_id, {
        expand: ["line_items", "payment_intent"],
    });

    const res = await fetch(`${baseUrl}/api/user/upgrade-premium/${session.customer_email}`,
        {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            }
        }
    )

    const customerEmail = session.customer_email || "your email registered account";
    const amountTotal = session.amount_total ? (session.amount_total / 100).toFixed(2) : "0.00";
    const paymentStatus = session.payment_status || "pending";
    const transactionId = typeof session.payment_intent === 'object' ? session.payment_intent?.id : session.payment_intent;





    const data = await res.json()
    console.log(data);




    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4 py-12 relative overflow-hidden text-white selection:bg-emerald-500/30">

            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

            <Card className="w-full max-w-2xl border border-emerald-500/20 bg-slate-900/40 backdrop-blur-2xl rounded-[32px] p-2 sm:p-4 shadow-[0_32px_80px_rgba(0,0,0,0.65)] overflow-visible">

                <CardHeader className="flex flex-col items-center gap-4 pt-8 pb-4 text-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/30 shadow-[0_0_40px_rgba(16,185,129,0.15)] relative">
                        <CheckCircle2 size={44} className="text-emerald-400 z-10" />
                        <div className="absolute inset-0 rounded-full bg-emerald-500/5 animate-ping opacity-60" />
                    </div>

                    <div className="flex items-center gap-1.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono text-xs font-bold uppercase tracking-wider h-7 px-3 rounded-full">
                        <Sparkles size={12} className="text-emerald-400" />
                        <span>Premium Activated</span>
                    </div>

                    <div className="space-y-2 mt-2">
                        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                            Payment Successful 🎉
                        </h1>
                        <p className="max-w-md text-slate-400 text-sm leading-relaxed">
                            We appreciate your business! Welcome to <span className="text-slate-200 font-semibold">StartupForge Premium</span> ecosystem layer.
                        </p>
                    </div>
                </CardHeader>

                <div className="space-y-6 px-6 sm:px-8 pb-8 pt-2">
                    <div className="rounded-2xl border border-white/5 bg-slate-950/40 backdrop-blur-md p-5 space-y-4 shadow-inner">

                        <div className="flex items-center justify-between gap-4 border-b border-white/5 pb-3.5">
                            <div className="flex items-center gap-2.5 text-slate-400 text-sm">
                                <Mail size={16} className="text-slate-500" />
                                <span>Customer Account</span>
                            </div>
                            <span className="text-slate-200 font-medium text-sm truncate max-w-[240px] sm:max-w-xs">
                                {customerEmail}
                            </span>
                        </div>

                        <div className="flex items-center justify-between gap-4 border-b border-white/5 pb-3.5">
                            <div className="flex items-center gap-2.5 text-slate-400 text-sm">
                                <CreditCard size={16} className="text-slate-500" />
                                <span>Payment Status</span>
                            </div>
                            <span className="text-emerald-400 font-bold text-xs uppercase tracking-wider bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-md">
                                {paymentStatus}
                            </span>
                        </div>

                        {transactionId && (
                            <div className="flex items-center justify-between gap-4 border-b border-white/5 pb-3.5">
                                <div className="flex items-center gap-2.5 text-slate-400 text-sm">
                                    <CalendarDays size={16} className="text-slate-500" />
                                    <span>Transaction Ref</span>
                                </div>
                                <span className="text-slate-400 font-mono text-xs truncate max-w-[180px] sm:max-w-xs">
                                    {transactionId}
                                </span>
                            </div>
                        )}

                        <div className="flex items-center justify-between gap-4 pt-1">
                            <div className="flex items-center gap-2.5 text-slate-400 text-sm">
                                <Crown size={16} className="text-yellow-500/80" />
                                <span className="font-medium text-slate-300">Amount Charged</span>
                            </div>
                            <span className="text-yellow-400 font-black text-xl tracking-tight">
                                ${amountTotal}
                            </span>
                        </div>
                    </div>

                    <p className="text-xs text-center text-slate-500 leading-relaxed px-4">
                        A confirmation email has been forwarded to <span className="text-slate-400 font-medium">{customerEmail}</span>.
                        If you have queries, approach our support grid via{' '}
                        <a href="mailto:orders@example.com" className="text-blue-400 hover:underline transition-colors duration-150">orders@example.com</a>.
                    </p>

                    {/* Fixed Component Navigation Layer with standard Link wrapper tags */}
                    <div className="grid gap-3 sm:grid-cols-2 pt-2">
                        <Link href="/dashboard/founder" className="w-full block">
                            <Button className="h-12 w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm rounded-xl shadow-lg transition-all duration-200 active:scale-[0.98]">
                                Go to Dashboard
                            </Button>
                        </Link>

                        <Link href="/opportunities" className="w-full block">
                            <Button
                                variant="bordered"
                                endContent={<ArrowRight size={15} className="text-slate-400 group-hover:text-white" />}
                                className="h-12 w-full border-white/10 bg-slate-900/40 text-slate-200 hover:bg-slate-900 hover:border-white/20 transition-all duration-200 font-medium text-sm rounded-xl group active:scale-[0.98]"
                            >
                                Browse Opportunities
                            </Button>
                        </Link>
                    </div>

                </div>
            </Card>
        </section>
    );
}