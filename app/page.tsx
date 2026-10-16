"use client"

import { useRouter } from 'next/navigation'
import Link from "next/link"

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import Navbar from './Components/Navbar'

export default function Home() {
  const router = useRouter()

  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
          <form>
            <FieldSet>
              <FieldLegend>Sing in to book</FieldLegend>
              <FieldDescription>Use the email and password you booked with</FieldDescription>
              <FieldGroup className="w-full max-w-sm">
                <Field orientation="responsive">
                  <Input id="email" type="email" placeholder="you@example.com" required />
                </Field>
                <Field orientation="responsive">
                  <Input id="password" type="password" placeholder="••••••••" required />
                </Field>
                <Field orientation="responsive">
                  <Button type="submit" className="bg-green-700 hover:bg-green-800 text-white">
                    Submit
                  </Button>
                </Field>
              </FieldGroup>
            </FieldSet>
          </form>
          <div className="overflow-hidden py-4">
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                New here? <Link href="/signup" className="underline">
                  Create an account
                </Link>
              </p>
            </div>
            <div className="flex items-center justify-center gap-4 mt-4">
              <Separator />
              <span className="text-sm text-muted-foreground">or</span>
              <Separator />
            </div>
          </div>
          <div>
            <Button className="w-full" variant="outline" onClick={() => router.push("/browse")}>
              Browse without signing in
            </Button>
          </div>
          <Separator className="my-10" />
          <div className="w-full max-w-md bg-gray-100 rounded-xl p-4">
            <p className="text-sm font-semibold">
              Are you a barber or a tutor?
            </p>
            <Link href="/provider/setup" className="underline text-sm text-green-700">
              Set up your provider account
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
