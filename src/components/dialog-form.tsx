import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '@/context/data-context';
import { Turnstile } from '@marsidev/react-turnstile'
import type { TurnstileInstance } from '@marsidev/react-turnstile'
import { useTheme } from './theme-provider';

const formSchema = z.object({
    tahunAngkatan: z.string({
        required_error: "Academic Period ID  is required"
    }),
    programStudi: z.string({
        required_error: "Academic Program ID  is required"
    }),
    nimAwal: z.string({
        required_error: "First Student ID  is required"
    }).min(4, { message: "First Student ID must have at least 4 digits." }).max(4, { message: "First Student ID must be a maximum of 4 digits." }),
    nimAkhir: z.string({
        required_error: "Last Student ID is required"
    }).min(4, { message: "Last Student ID must have at least 4 digits." }).max(4, { message: "Last Student ID must be a maximum of 4 digits." }),
});

type formSchemaValues = z.infer<typeof formSchema>

export default function DialogForm({ onSubmitClose }: { onSubmitClose: () => void }) {
    const { setData } = useContext(DataContext);
    const { theme } = useTheme()
    const ref = React.useRef<TurnstileInstance | null>(null)
    const siteKey = import.meta.env.VITE_SITE_KEY_TURNSTILE;

    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
    const [isCaptchaSuccess, setIsCaptchaSuccess] = useState(false);
    const [showTurnstile, setShowTurnstile] = useState(false)
    const [hideCheckbox, setHideCheckbox] = useState(false)

    const turnstileTheme = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)
        ? 'dark'
        : 'light'

    const form = useForm<formSchemaValues>({
        resolver: zodResolver(formSchema),
    });

    function onSubmit(data: formSchemaValues) {
        setData(data);
        onSubmitClose();
    }

    useEffect(() => {
        let timeout: number;
        if (isCheckboxChecked) {
            timeout = window.setTimeout(() => {
                setShowTurnstile(true)
                setHideCheckbox(true)
            }, 500)
        }
        return () => clearTimeout(timeout)
    }, [isCheckboxChecked])

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 pb-2">
                {/* tahun angkatan */}
                <FormField
                    control={form.control}
                    name="tahunAngkatan"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel >Academic Period</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="2019" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {[2018, 2019, 2020, 2021, 2022, 2023, 2024].map((year) => {
                                        return (
                                            <SelectItem value={year.toString()} key={year}>
                                                {year}
                                            </SelectItem>
                                        );
                                    })}
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {/* program studi */}
                <FormField
                    control={form.control}
                    name="programStudi"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Academic Program</FormLabel>
                            <FormControl>
                                <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Informatika" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="84">Arsitektur</SelectItem> {/* pass */}
                                        <SelectItem value="21">BCIT</SelectItem> {/* pass */}
                                        <SelectItem value="95">Hubungan Internasional</SelectItem> {/* pass */}
                                        <SelectItem value="96">Ilmu Komunikasi</SelectItem> {/* pass */}
                                        <SelectItem value="94">Ilmu Pemerintahan</SelectItem> {/* pass */}
                                        <SelectItem value="11">Informatika</SelectItem> {/* pass */}
                                        <SelectItem value="12">Sistem Informasi</SelectItem> {/* pass */}
                                        <SelectItem value="82">Teknologi Informasi</SelectItem> {/* pass */}
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {/* nim awal */}
                <FormField
                    control={form.control}
                    name="nimAwal"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>First Student ID</FormLabel>
                            <FormControl>
                                <Input placeholder="3119" type="number" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {/* nim akhir */}
                <FormField
                    control={form.control}
                    name="nimAkhir"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Last Student ID</FormLabel>
                            <FormControl>
                                <Input placeholder="3182" type="number" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* checkbox is visible by default, but it will be hidden */}
                <div className={hideCheckbox ? 'hidden' : ''}>
                    <Label
                        htmlFor="verify"
                        className="hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-3 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950 transition-all duration-300"
                    >
                        <Checkbox
                            id="verify"
                            checked={isCheckboxChecked}
                            onCheckedChange={(checked: boolean) => setIsCheckboxChecked(checked)}
                            className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700 transition duration-300"
                        />
                        <div className="grid gap-1.5 font-normal">
                            <p className="text-sm leading-none font-medium">Let’s make sure it’s really you.</p>
                            <p className="text-muted-foreground text-sm">Quick verification needed to proceed.</p>
                        </div>
                    </Label>
                </div>

                {/* render Turnstile component after delay */}
                {showTurnstile && (
                    <Turnstile
                        ref={ref}
                        siteKey={siteKey}
                        options={{
                            action: 'submit-form',
                            theme: turnstileTheme,
                            size: 'flexible',
                            language: 'en',
                            refreshExpired: 'manual',
                        }}
                        onSuccess={(token) => setIsCaptchaSuccess(true)}
                        onExpire={() => {
                            ref.current?.reset()
                            setIsCaptchaSuccess(false)
                        }}
                        scriptOptions={{
                            async: true,
                            defer: true,
                            appendTo: 'head',
                        }}
                    />
                )}

                {/* submit button is only active if Turnstile component is rendered. */}
                <Button
                    type="submit"
                    size="lg"
                    variant="default"
                    className="w-full rounded-full"
                    disabled={!isCaptchaSuccess}
                >
                    Check
                </Button>
            </form>
        </Form>
    );
}
