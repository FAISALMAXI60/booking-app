import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function PageLive({ current, setCurrent }: { current: number, setCurrent: (value: number) => void }) {
    return (
        <div className="flex items-center flex-col">
            <div>
                <Check className="bg-green-100 rounded-full text-green-700 size-15 p-2" />
            </div>
            <h1 className="text-3xl font-bold py-2">Marlow Barbers is taking bookings</h1>
            <p className="text-muted-foreground text-sm">2 services, open 5 days a week. Share your link and you're set.</p>
            <Button
                className="bg-green-700 text-white py-6 px-10 mt-5"
                onClick={() => setCurrent(current - 1)}
            >
                Go to dashboard
            </Button>
        </div>
    )
}