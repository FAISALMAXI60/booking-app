import Link from "next/link"

import {
    Field,
    FieldContent,
    FieldDescription,
    FieldGroup,
    FieldLabel,
    FieldLegend,
    FieldSet,
    FieldTitle,
} from "@/components/ui/field"
import {
    Card,
    CardAction,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { X, Plus } from "lucide-react"
import { Separator } from "@/components/ui/separator"

const total_length = [
    { label: "total length", value: null },
    { label: "30 min", value: "30" },
    { label: "15 min", value: "15" },
    { label: "20 min", value: "20" },
    { label: "40 min", value: "40" },
] as const;

const suggestions = ["Haircut and beard", "Kids cut", "Hot towel shave"];


export default function Services({ current, setCurrent }: { current: number, setCurrent: (value: number) => void }) {
    return (
        <div>
            <div className="grid grid-cols-2 gap-20">
                <div>
                    <h3 className="font-bold">
                        What can customers book?
                    </h3>
                    <p className="text-xs text-muted-foreground pb-3">
                        Add at least one service. The length sets how long each slot is.
                    </p>
                    <Card className="w-full">
                        <CardHeader>
                            <CardTitle>Add a service</CardTitle>
                            <CardDescription className="mt-2">
                                <p className="text-sm text-muted-foreground pb-2">Popular with barbers</p>
                                <div className="flex flex-wrap gap-2">
                                    {suggestions.map((s) => (
                                        <Button
                                            key={s}
                                            type="button"
                                            variant="outline"
                                            size="sm"
                                            className="rounded-full font-normal"
                                        >
                                            <Plus /> {s}
                                        </Button>
                                    ))}
                                </div>
                            </CardDescription>
                            <form>
                                <FieldGroup className="w-full pt-3">
                                    <FieldSet>
                                        <Field orientation="vertical">
                                            <Label htmlFor="service-name">Name</Label>
                                            <Input id="service-name" type="text" placeholder="Skin Fade" required />
                                        </Field>
                                        <div className="grid grid-cols-2 gap-2">
                                            <Field>
                                                <FieldLabel htmlFor="time-zone">
                                                    Length
                                                </FieldLabel>
                                                <Select items={total_length}>
                                                    <SelectTrigger id="time-zone">
                                                        <SelectValue />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectGroup>
                                                            {total_length.map((item) => (
                                                                <SelectItem key={item.value} value={item.value}>
                                                                    {item.label}
                                                                </SelectItem>
                                                            ))}
                                                        </SelectGroup>
                                                    </SelectContent>
                                                </Select>
                                            </Field>
                                            <Field>
                                                <FieldLabel htmlFor="service_price">Price (£)</FieldLabel>
                                                <Input id="service_price" type="number" defaultValue="0" required />
                                            </Field>
                                        </div>
                                        <div>
                                            <Button type="submit" className="w-full bg-black hover:bg-gray-800 text-white">
                                                Add Serice
                                            </Button>
                                        </div>
                                    </FieldSet>
                                </FieldGroup>
                            </form>
                        </CardHeader>
                    </Card>
                </div>
                <div>
                    <div className="flex justify-between items-center mb-4">
                        <h4 className="text-sm font-semibold">Your services</h4>
                        <p className="text-xs font-semibold text-muted-foreground">
                            2 services
                        </p>
                    </div>
                    <Card className="w-full p-0">
                        <CardHeader className="p-0">
                            <CardDescription>
                                <div className="flex justify-between items-center p-4">
                                    <div>
                                        <h4 className="text-md font-semibold text-black">Skin Fade</h4>
                                        <span className="text-sm text-muted-foreground">
                                            30 min . £15.00
                                        </span>
                                    </div>
                                    <div>
                                        <Button variant="outline" size="sm" className="py-4">
                                            <X className="size-4" />
                                        </Button>
                                    </div>
                                </div>
                                <Separator />
                                <div className="flex justify-between items-center p-4">
                                    <div>
                                        <h4 className="text-md font-semibold text-black">Skin Fade</h4>
                                        <span className="text-sm text-muted-foreground">
                                            30 min . £15.00
                                        </span>
                                    </div>
                                    <div>
                                        <Button variant="outline" size="sm" className="py-4">
                                            <X className="size-4" />
                                        </Button>
                                    </div>
                                </div>
                            </CardDescription>
                        </CardHeader>
                    </Card>
                    <div className="mt-4">
                        <Button variant="outline" className="mr-2" onClick={() => setCurrent(current - 1)}>
                            Back
                        </Button>
                        <Button onClick={() => setCurrent(current + 1)} className="bg-green-700 hover:bg-green-800 text-white">
                            Continue
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}