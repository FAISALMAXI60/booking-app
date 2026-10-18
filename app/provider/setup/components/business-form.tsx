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

const timeZone = [
    { label: "Europe/Lodon", value: null },
    { label: "Pacific Time", value: "UTC-8" },
] as const;

export default function BusinessForm({ current, setCurrent }: { current: number, setCurrent: (value: number) => void }) {
    return (
        <div>
            <div className="grid grid-cols-2 gap-20">
                <div>
                    <form>
                        <FieldGroup className="w-full">
                            <FieldSet>
                                <FieldLegend className="font-bold">
                                    Tell customers who you are
                                </FieldLegend>
                                <FieldDescription className="text-xs">
                                    This is what appears on your booking page.
                                </FieldDescription>
                                <RadioGroup defaultValue="plus">
                                    <div className="grid grid-cols-2 gap-2">
                                        <div>
                                            <FieldLabel htmlFor="barber">
                                                <Field orientation="horizontal">
                                                    <FieldContent>
                                                        <FieldTitle>Barber</FieldTitle>
                                                        <FieldDescription>
                                                            Cuts, Fades, Shaves
                                                        </FieldDescription>
                                                    </FieldContent>
                                                    <RadioGroupItem value="Barber" id="barber" />
                                                </Field>
                                            </FieldLabel>
                                        </div>
                                        <div>
                                            <FieldLabel htmlFor="tutor">
                                                <Field orientation="horizontal">
                                                    <FieldContent>
                                                        <FieldTitle>Tutor</FieldTitle>
                                                        <FieldDescription>
                                                            Lessons by the hour.
                                                        </FieldDescription>
                                                    </FieldContent>
                                                    <RadioGroupItem value="Tutor" id="tutor" />
                                                </Field>
                                            </FieldLabel>
                                        </div>
                                    </div>
                                </RadioGroup>
                                <Field orientation="vertical">
                                    <Label htmlFor="bussiness-name">Business Name</Label>
                                    <Input id="bussiness-name" type="text" placeholder="Marlo Barbers" required />
                                </Field>
                                <Field>
                                    <FieldLabel htmlFor="business-description">Short Description</FieldLabel>
                                    <Textarea id="business-description" placeholder="Skin fades and beard work in a one-chair shop." />
                                </Field>
                                <div className="grid grid-cols-2 gap-2">
                                    <Field>
                                        <FieldLabel htmlFor="location">Location</FieldLabel>
                                        <Input id="location" placeholder="eg. City center, Belfast" required />
                                    </Field>
                                    <Field>
                                        <FieldLabel htmlFor="time-zone">
                                            Time Zone
                                        </FieldLabel>
                                        <Select items={timeZone}>
                                            <SelectTrigger id="time-zone">
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    {timeZone.map((item) => (
                                                        <SelectItem key={item.value} value={item.value}>
                                                            {item.label}
                                                        </SelectItem>
                                                    ))}
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </Field>
                                </div>
                                <div>
                                    <Button variant="outline" className="mr-2" onClick={() => setCurrent(current - 1)}>
                                        Back
                                    </Button>
                                    <Button onClick={() => setCurrent(current + 1)} className="bg-green-700 hover:bg-green-800 text-white">
                                        Continue
                                    </Button>
                                </div>
                            </FieldSet>
                        </FieldGroup>
                    </form>
                </div>
                <div>
                    <p className="text-xs text-muted-foreground uppercase font-semibold mb-4">
                        How customers see you
                    </p>
                    <div className="bg-[#E4E3DC] rounded-lg p-4 mb-4">
                        <Card className="w-full">
                            <CardHeader>
                                <CardAction></CardAction>
                                {/* <CardTitle className="mb-3">What you get</CardTitle> */}
                                <CardDescription>
                                    <div className="flex items-center gap-3">
                                        <div className="flex items-center justify-center text-green-700 bg-green-100 font-bold p-4 rounded-md size-12">
                                            MB
                                        </div>
                                        <div>
                                            <h2 className="font-semibold text-black text-md">Marlow Barbers</h2>
                                            <p className="text-sm text-muted-foreground">Barber. [Your Area]</p>
                                            <p>Skin fades and beard work in a one-chair shop.</p>
                                        </div>
                                    </div>
                                </CardDescription>
                            </CardHeader>
                        </Card>
                        <p className="text-xs pt-2 font-semibold text-muted-foreground">
                            Services and next free time appear here once you add them.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}