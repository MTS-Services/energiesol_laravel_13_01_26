import React, { FormEvent, useMemo, useState } from "react";
import { Link, router } from "@inertiajs/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, ArrowRight, Check, Shield } from "lucide-react";

export default function Configurator6() {
    const [formData, setFormData] = useState({
        firstName: "John",
        lastName: "Doe",
        email: "example@gmail.com",
        phone: "(406) 555-0120",
        notes: "",
        consentEmail: false,
        consentPhone: false,
    });

    const benefits = useMemo(
        () => [
            "Detailed and transparent cost breakdown covering every installation cost.",
            "Instantly available results with no registration, login, or commitment required.",
            "Clear insights into yearly energy savings and system amortization timeline.",
            "Quick access to your personalized results delivered in real time.",
        ],
        []
    );

    const handleChange = (field: keyof typeof formData, value: string | boolean) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        router.visit(route("contact"));
    };

    return (
        <div className="bg-white py-16 sm:py-20 lg:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-10">
                    <Link href={route("configurator.step5")}>
                        <Button variant="ghost" >
                            <ArrowLeft className="mr-2 h-5 w-5" />
                            Back
                        </Button>
                    </Link>
                </div>

                <div className="text-center ">
                    <h1 className="mx-auto max-w-7xl text-2xl font-montserrat font-semibold text-secondary sm:text-3xl md:text-4xl lg:text-[40px]">
                        Energie Solution Nord — Your Trusted Partner for Sustainable Energy Solutions.
                    </h1>
                    <p className="mx-auto mt-3 max-w-4xl text-sm  sm:text-base md:text-lg lg:text-xl">
                        Complete the form below to receive your personalized energy estimate directly in your inbox.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="mt-20 px-10">
                    <div className="grid gap-6 md:grid-cols-2">
                        <div>
                            <label className="text-sm md:text-base lg:text-lg xl:text-2xl font-montserrat font-semibold text-secondary">First name*</label>
                            <Input
                                value={formData.firstName}
                                onChange={(e) => handleChange("firstName", e.target.value)}
                                className="mt-2 h-12 rounded-2xl border-slate-200 bg-bg-primary/60 shadow-md text-secondary"
                            />
                        </div>
                        <div>
                            <label className="text-sm md:text-base lg:text-lg xl:text-2xl font-montserrat font-semibold text-secondary">Last name*</label>
                            <Input
                                value={formData.lastName}
                                onChange={(e) => handleChange("lastName", e.target.value)}
                                className="mt-2 h-12 rounded-2xl border-slate-200 bg-bg-primary/60 shadow-md text-secondary"
                            />
                        </div>
                        <div>
                            <label className="text-sm md:text-base lg:text-lg xl:text-2xl font-montserrat font-semibold text-secondary">Email*</label>
                            <Input
                                type="email"
                                value={formData.email}
                                onChange={(e) => handleChange("email", e.target.value)}
                                className="mt-2 h-12 rounded-2xl border-slate-200 bg-bg-primary/60 shadow-md text-secondary"
                            />
                        </div>
                        <div>
                            <label className="text-sm md:text-base lg:text-lg xl:text-2xl font-montserrat font-semibold text-secondary">Number*</label>
                            <Input
                                type="tel"
                                value={formData.phone}
                                onChange={(e) => handleChange("phone", e.target.value)}
                                className="mt-2 h-12 rounded-2xl border-slate-200 bg-bg-primary/60 shadow-md text-secondary"
                            />
                        </div>
                    </div>

                    <div className="mt-6 space-y-4 text-sm text-slate-600">
                        <label className="flex items-start gap-3">
                            <Checkbox
                                checked={formData.consentEmail}
                                onCheckedChange={(checked) => handleChange("consentEmail", !!checked)}
                                className="mt-1 border border-slate-200"
                            />
                            <div className="space-y-2 text-base font-open-sans leading-relaxed">
                                <p>
                                    I agree to receive the results generated by this solar configurator as well as additional information related to my inquiry (such as appointment
                                    confirmations) from energiesol via email, based on the details I have provided.
                                </p>
                                <p>
                                    I also consent to being contacted by telephone for the purpose of clarifying initial questions, arranging an on-site appointment if required, and
                                    participating in customer satisfaction surveys conducted via email.
                                </p>
                                <p>
                                    You may withdraw your consent at any time without providing a reason by contacting energiesol via email or written communication.
                                </p>
                                <p>
                                    Further details regarding the processing of your personal data and your rights as a data subject are available in our Privacy Policy.
                                </p>
                            </div>
                        </label>
                    </div>

                    <div className="mt-8 flex justify-start">
                        <Button
                            type="submit"
                            size="lg"
                            className="group flex items-center gap-3 rounded-full bg-btn-primary  py-6 text-base font-semibold text-white shadow-md transition hover:translate-x-0.5"
                        >
                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-btn-primary transition group-hover:translate-x-0.5">
                                <ArrowRight className="h-4 w-4" />
                            </span>
                            Get Your Cost Estimate

                        </Button>
                    </div>
                </form>

                <div className="mt-10 p-6 sm:p-10">
                    <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                        <div className="flex flex-col justify-center">
                            <h3 className="text-2xl font-montserrat font-semibold text-secondary sm:text-3xl">Your Personalized Cost Estimate</h3>
                            <ul className="mt-8 space-y-4 text-base text-secondary/80">
                                {benefits.map((item) => (
                                    <li key={item} className="flex items-start gap-3">
                                        <span className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#2dd36f] bg-white text-[#2dd36f] shadow-[0_6px_18px_rgba(45,211,111,0.25)]">
                                            <Check className="h-5 w-5" />
                                        </span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="rounded-3xl bg-white p-6">
                            <div className="relative mt-4 overflow-hidden rounded-2xl">
                                <img
                                    src="/images/configurator/energie-solution.png"
                                    alt="Energie Solution Nord"
                                    className=" w-full object-cover sm:h-72 lg:h-full"
                                />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
