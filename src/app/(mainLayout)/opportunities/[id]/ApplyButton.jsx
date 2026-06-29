"use client";

import { useState } from "react";
import { useSession } from "@/lib/auth-client";
import { baseUrl } from "@/lib/api/basrUrl";

import {
    Modal,
    Button,
    Input,
    Label,
    TextField,
    Surface,
} from "@heroui/react";

import {
    BriefcaseBusiness,
    Send,
} from "lucide-react";

export default function ApplyModal({ opportunity }) {
    const { data: session } = useSession();

    const [portfolio, setPortfolio] = useState("");
    const [motivation, setMotivation] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const applicantEmail = session?.user?.email;

    const handleApply = async () => {
        if (!portfolio || !motivation) {
            setMessage("Please fill all fields.");
            return;
        }

        try {
            setLoading(true);
            setMessage("");

            const applicationData = {
                opportunity_id: opportunity._id,
                applicant_email: applicantEmail,
                portfolio_link: portfolio,
                motivation,
            };

            const res = await fetch(`${baseUrl}/api/applications`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(applicationData),
            });

            const data = await res.json();

            if (!res.ok) {
                setMessage(data.message || "Application failed.");
                return;
            }

            setMessage("Application submitted successfully.");
            setPortfolio("");
            setMotivation("");
        } catch (err) {
            console.log(err);
            setMessage("Something went wrong.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Modal>
            <Button
                radius="xl"
                className="group flex-1 h-12 w-full bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white font-bold text-sm shadow-xl hover:opacity-95"
            >
                Apply Now
            </Button>

            <Modal.Backdrop>
                <Modal.Container placement="center">
                    <Modal.Dialog className="sm:max-w-2xl rounded-3xl bg-slate-900 border border-white/10 text-white">
                        <Modal.CloseTrigger />

                        <Modal.Header>
                            <Modal.Icon className="bg-blue-500/20 text-blue-400">
                                <BriefcaseBusiness size={22} />
                            </Modal.Icon>
                            <Modal.Heading>
                                Apply for {opportunity?.role_title}
                            </Modal.Heading>
                            <p className="text-sm text-slate-400 mt-2">
                                Submit your application for this opportunity.
                            </p>
                        </Modal.Header>

                        <Modal.Body className="p-6">
                            <Surface variant="default" className="bg-transparent border-0 p-0">
                                <div className="space-y-5">
                                    <TextField
                                        className="w-full"
                                        variant="secondary"
                                    >
                                        <Label className="text-slate-300 text-sm font-medium mb-1.5 block">Email</Label>

                                        <Input
                                            value={applicantEmail || ""}
                                            readOnly
                                            className="bg-slate-950/20 border border-white/5 text-slate-500 rounded-xl cursor-not-allowed select-none"
                                        />
                                    </TextField>

                                    <TextField
                                        className="w-full"
                                        variant="secondary"
                                    >
                                        <Label className="text-slate-300 text-sm font-medium mb-1.5 block">Portfolio Link</Label>
                                        <Input
                                            placeholder="https://github.com/username 0r Portfolio URL"
                                            value={portfolio}
                                            onChange={(e) => setPortfolio(e.target.value)}
                                            className="bg-slate-950/40 border border-white/10 text-white rounded-xl focus-within:border-blue-500/50"
                                        />
                                    </TextField>

                                    <TextField
                                        className="w-full"
                                        variant="secondary"
                                    >
                                        <Label className="text-slate-300 text-sm font-medium mb-1.5 block">Why do you want to join?</Label>
                                        <Input
                                            as="textarea"
                                            rows={6}
                                            placeholder="Write your motivation..."
                                            value={motivation}
                                            onChange={(e) => setMotivation(e.target.value)}
                                            className="bg-slate-950/40 border border-white/10 text-white rounded-xl focus-within:border-blue-500/50 p-3 min-h-[120px] resize-y"
                                        />
                                    </TextField>

                                    {message && (
                                        <p className={`text-sm font-medium ${message.includes("successfully") ? "text-emerald-400" : "text-red-400"
                                            }`}>
                                            {message}
                                        </p>
                                    )}
                                </div>
                            </Surface>
                        </Modal.Body>

                        <Modal.Footer className="gap-3">
                            <Button
                                slot="close"
                                variant="secondary"
                                className="border border-white/10 text-slate-300 hover:bg-slate-800 rounded-xl"
                            >
                                Cancel
                            </Button>

                            <Button
                                onPress={handleApply}
                                isLoading={loading}
                                className="bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl"
                                endContent={!loading && <Send size={16} />}
                            >
                                Submit Application
                            </Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}