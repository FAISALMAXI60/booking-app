import Link from "next/link"

import {
    Field,
    FieldContent,
    FieldDescription,
    FieldGroup,
    FieldLabel,
    FieldLegend,
    FieldSet,
} from "@/components/ui/field"
import {
    Card,
    CardAction,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { Calendar, Check, ChartNoAxesColumn } from "lucide-react";

export default function AccountForm({ current, setCurrent }: { current: number, setCurrent: (value: number) => void }) {
    return (
        <div>
            <div className="grid grid-cols-3 gap-2">
                <div className="col-span-2">
                    <form>
                        <FieldSet>
                            <FieldLegend className="font-bold">
                                Take bookings without back-and-forth
                            </FieldLegend>
                            <FieldDescription className="text-xs">
                                Set up your page in about five minutes. You can change everything later.
                            </FieldDescription>
                            <FieldGroup className="w-full max-w-sm">
                                <Field orientation="responsive">
                                    <Label htmlFor="name">Name</Label>
                                    <Input id="name" type="text" placeholder="Your Name" required />
                                </Field>
                                <Field orientation="responsive">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" type="email" placeholder="you@example.com" required />
                                </Field>
                                <Field orientation="responsive">
                                    <Label htmlFor="password">Password</Label>
                                    <Input id="password" type="password" placeholder="••••••••" required />
                                </Field>
                                <Field orientation="horizontal">
                                    <Checkbox
                                        id="terms-checkbox-desc"
                                        name="terms-checkbox-desc"
                                        required
                                    />
                                    <FieldContent>
                                        <FieldLabel htmlFor="terms-checkbox-desc" className="text-xs gap-1 text-muted-foreground font-normal">
                                            I agree to the
                                            <Link href="/terms" className="underline text-green-700">
                                                terms
                                            </Link>and<Link href="/privacy" className="underline text-green-700">
                                                conditions
                                            </Link>
                                        </FieldLabel>
                                    </FieldContent>
                                </Field>
                                <Field orientation="responsive">
                                    <Button onClick={() => setCurrent(1)} className="bg-green-700 hover:bg-green-800 text-white">
                                        Create Account
                                    </Button>
                                </Field>
                            </FieldGroup>
                        </FieldSet>
                    </form>
                </div>
                <div>
                    <Card className="w-full max-w-sm bg-[#17181C]  text-white">
                        <CardHeader>
                            <CardAction>
                            </CardAction>
                            <CardTitle className="mb-3">What you get</CardTitle>
                            <CardDescription className="text-white">
                                <div className="flex items-center gap-1 mb-3">
                                    <div className="flex items-center justify-center rounded-md bg-green-700 size-6">
                                        <Calendar className="size-4" />
                                    </div>
                                    <div className="pl-2">
                                        <p className="font-semibold">A booking page of your own</p>
                                        <p className="text-xs">Customers see only the times you're free.</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1 mb-3">
                                    <div className="flex items-center justify-center rounded-md bg-green-700 size-6">
                                        <Check className="size-4" />
                                    </div>
                                    <div className="pl-2">
                                        <p className="font-semibold">No double bookings</p>
                                        <p className="text-xs">Two people can never take the same slot.</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1 mb-3">
                                    <div className="flex items-center justify-center rounded-md bg-green-700 size-6">
                                        <ChartNoAxesColumn className="size-4" />
                                    </div>
                                    <div className="pl-2">
                                        <p className="font-semibold">Your week at a glance</p>
                                        <p className="text-xs">Today's list, takings and no-shows in one place.</p>
                                    </div>
                                </div>
                                <Separator className="bg-gray-600 my-4" />
                                <div>
                                    <p className="text-xs">
                                        free while in beta. Customer will pay you in person.
                                    </p>
                                </div>
                            </CardDescription>
                        </CardHeader>
                    </Card>
                </div>
            </div>
        </div>
    )
}