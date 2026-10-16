"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

import { Check } from "lucide-react";
import AccountForm from "./components/account-form";
import Navbar from "../../Components/Navbar";

const steps = [
    { title: "Account", description: "Your Account" },
    { title: "business", description: "About you" },
    { title: "Services", description: "services" },
    { title: "Hours", description: "hours" },
];

export default function Stepper() {
    const [current, setCurrent] = useState(0);

    return (
        <div>
            <Navbar />
            <div className="lg:mx-20 p-6 space-y-8">
                {/* Indicators */}
                <ol className="flex items-center">
                    {steps.map((step, i) => (
                        <li key={step.title} className="flex flex-1 items-center last:flex-none">
                            <div className="flex flex-col items-center gap-1">
                                <div
                                    className={cn(
                                        "flex size-9 items-center justify-center rounded-full border-2 text-sm font-medium",
                                        i < current && "bg-green-700 border-green-700 text-primary-foreground",
                                        i === current && "border-green-700 text-green-700",
                                        i > current && "border-green-700 text-green-700"
                                    )}
                                >
                                    {i < current ? <Check className="size-4" /> : i + 1}
                                </div>
                                <span className="text-xs font-medium text-green-700">{step.title}</span>
                            </div>
                            {i < steps.length - 1 && (
                                <div className={cn("mx-2 h-0.5 flex-1", i < current ? "bg-green-700" : "bg-muted")} />
                            )}
                        </li>
                    ))}
                </ol>

                {/* Content */}
                <div>
                    {current === 0 && <AccountForm />}
                    {current === 1 && <p>Business form here</p>}
                    {current === 2 && <p>Services form here</p>}
                    {current === 3 && <p>Hours form here</p>}
                </div>
            </div>
        </div>
    );
}