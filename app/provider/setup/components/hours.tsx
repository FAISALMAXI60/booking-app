import Link from "next/link"

import {
    Field,
    FieldContent,
    FieldGroup,
    FieldLabel,
    FieldSet,
} from "@/components/ui/field"
import {
    Card,
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
import { X, Plus } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react"

interface weekDay {
    label: string,
    value: string,
    isChecked: boolean
}

const total_length = [
    { label: "Minimum Notice", value: null },
    { label: "30 min", value: "30" },
    { label: "15 min", value: "15" },
    { label: "20 min", value: "20" },
    { label: "40 min", value: "40" },
] as const;

export default function Hours({ current, setCurrent }: { current: number, setCurrent: (value: number) => void }) {
    const [weekDaysForToggle, setWeekDaysForToggle] = useState<weekDay[]>([
        { label: "Monday", value: "monday", isChecked: false },
        { label: "Tuesday", value: "tuesday", isChecked: true },
        { label: "Wednesday", value: "wednesday", isChecked: true },
        { label: "Thursday", value: "thursday", isChecked: true },
        { label: "Friday", value: "friday", isChecked: true },
        { label: "Saturday", value: "saturday", isChecked: false },
        { label: "Sunday", value: "sunday", isChecked: false },
    ])

    const weekDaysToggle = (item: weekDay) => {
        setWeekDaysForToggle((prev) =>
            prev.map((day) => day.value === item.value
                ? { ...day, isChecked: !day.isChecked }
                : day)
        )
    }

    return (
        <div>
            <h3 className="font-bold">
                When can people book you?
            </h3>
            <p className="text-xs text-muted-foreground pb-3">
                Your usual week, in UK time. Holidays and one-off breaks come later.
            </p>
            <div className="grid grid-cols-3 gap-x-10">
                <div className="col-span-2">
                    <Card className="w-full">
                        <CardHeader className="p-0">
                            <CardTitle className="flex justify-between items-center px-3">
                                <h3>Weekly hours</h3>
                                <div className="flex gap-2">
                                    <div className="text-xs border rounded-full py-1 px-2">Tue–Sat, 9–6</div>
                                    <div className="text-xs border rounded-full py-1 px-2">Weekday evenings</div>
                                </div>
                            </CardTitle>
                            <CardDescription className="mt-2">
                                <form>
                                    <FieldGroup className="w-full">
                                        <FieldSet className="gap-0">
                                            {weekDaysForToggle.map((item: weekDay, index: number) => (
                                                <div key={index} className="">
                                                    <Separator />
                                                    <div className="flex items-center p-3">
                                                        <Field orientation="horizontal">
                                                            <Checkbox
                                                                id={item.value}
                                                                name={item.value}
                                                                checked={item.isChecked}
                                                                onCheckedChange={() => weekDaysToggle(item)}
                                                                required
                                                            />
                                                            <FieldContent>
                                                                <FieldLabel htmlFor={item.value} className="text-xs text-black gap-1 font-semibold">
                                                                    {item.label}
                                                                </FieldLabel>
                                                            </FieldContent>
                                                        </Field>
                                                        <div>
                                                            {item.isChecked ?
                                                                <div className="flex gap-2 items-center">
                                                                    <Field className="w-32">
                                                                        <Input
                                                                            type="time"
                                                                            id="time-picker-optional"
                                                                            step="1"
                                                                            defaultValue="10:30:00"
                                                                            className="appearance-none bg-background [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                                                                        />
                                                                    </Field> <p>to</p>
                                                                    <Field className="w-32">
                                                                        <Input
                                                                            type="time"
                                                                            id="time-picker-optional"
                                                                            step="1"
                                                                            defaultValue="10:30:00"
                                                                            className="appearance-none bg-background [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                                                                        />
                                                                    </Field>
                                                                </div>
                                                                : "Closed"}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </FieldSet>
                                    </FieldGroup>
                                </form>
                            </CardDescription>
                        </CardHeader>
                    </Card>
                    <div className="mt-4">
                        <Button variant="outline" className="mr-2" onClick={() => setCurrent(current - 1)}>
                            Back
                        </Button>
                        <Button onClick={() => setCurrent(current + 1)} className="bg-green-700 hover:bg-green-800 text-white">
                            Publish my page
                        </Button>
                    </div>
                </div>
                <div>
                    <Card className="w-full">
                        <CardHeader className="">
                            <CardDescription>
                                <h3 className="font-medium text-md text-black">Your week</h3>
                                <div className="flex gap-20 py-4">
                                    <div>
                                        <h5 className="text-xs">Days open</h5>
                                        <h1 className="font-bold text-2xl text-black">5</h1>
                                    </div>
                                    <div>
                                        <h5 className="text-xs">Hours</h5>
                                        <h1 className="font-bold text-2xl text-black">44h</h1>
                                    </div>
                                </div>
                                <p>That's up to 88 half-hour slots a week</p>
                            </CardDescription>
                        </CardHeader>
                    </Card>
                    <Card className="w-full mt-4">
                        <CardHeader className="">
                            <CardDescription>
                                <div>
                                    <Field>
                                        <FieldLabel className="text-black" htmlFor="min-notice">
                                            Minimum notice
                                        </FieldLabel>
                                        <Select items={total_length}>
                                            <SelectTrigger id="min-notice">
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
                                    <p className="text-xs pt-2">Stops last-minute bookings you can't prepare for.</p>
                                </div>
                            </CardDescription>
                        </CardHeader>
                    </Card>
                </div>
            </div>
        </div>
    )
}