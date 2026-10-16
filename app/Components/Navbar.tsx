import { Calendar } from "lucide-react";

export default function Navbar() {
    return (
        <div className="p-4 border-b border-b-muted-foreground/10">
            <div className="flex items-center gap-2">
                <div className="flex items-center justify-center p-2 rounded-md bg-green-700 size-10">
                    <Calendar className="size-6 text-white" />
                </div>
                <p className="text-lg font-bold">Slotted</p>
            </div>
        </div>
    )
}