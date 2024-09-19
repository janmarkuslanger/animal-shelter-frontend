"use client"

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardFooter,
} from "@/components/ui/card";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import Image from 'next/image'

const formSchema = z.object({
    username: z.string().min(5, "Nutzername muss mindestens 5 Buchstaben lang sein").max(50, "Nutzername darf maximal 50 Buchstaben lang sein"),
    password: z.string().min(5, "Passwort muss mindestens 5 Buchstaben lang sein").max(50, "Passwort darf maximal 50 Buchstaben lang sein"),
});


export default function LoginForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            password: "",
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Anmelden</CardTitle>
            </CardHeader>
            <CardContent>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Username</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Username" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Passwort</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Passwort" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit">Anmelden</Button>
                    </form>
                </Form>
            </CardContent>
            <CardFooter className="flex justify-items-center w-full justify-center">
                <Image src="/logo.svg" width="139" height="22" alt="nuris.shelter Logo" />
            </CardFooter>
        </Card>
    );
}
