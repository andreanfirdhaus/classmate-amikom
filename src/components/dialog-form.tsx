import { useContext, useMemo, useRef, useState } from "react"
import { z } from "zod"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Field,
    FieldGroup,
    FieldLabel,
    FieldLegend,
    FieldDescription,
    FieldSet,
    FieldError,
} from "@/components/ui/field"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Form } from "@/components/ui/form"

import { DataContext } from "@/context/data-context"
import { getProdiOptions, getAcademicYearOptions } from "@/constants/prodi"
import { ENV } from "@/config/env"
import { useTheme } from "./theme-provider"

import { Turnstile } from "@marsidev/react-turnstile"
import type { TurnstileInstance } from "@marsidev/react-turnstile"

const formSchema = z.object({
    tahunAngkatan: z.string({ required_error: "Academic Period is required" }),
    programStudi: z.string({ required_error: "Academic Program is required" }),
    nimAwal: z.string().length(4, "First Student ID must be 4 digits"),
    nimAkhir: z.string().length(4, "Last Student ID must be 4 digits"),
}).refine(data => data.nimAwal <= data.nimAkhir, {
    message: "First ID must be less than Last ID",
    path: ["nimAkhir"],
}).refine(
    (data) => {
        const start = Number(data.nimAwal)
        const end = Number(data.nimAkhir)
        return end - start <= 100
    },
    {
        message: "Student ID range must not exceed 100",
        path: ["nimAkhir"],
    }
)


type FormValues = z.infer<typeof formSchema>

export default function DialogForm({ onSubmitClose }: { onSubmitClose: () => void }) {
    const { data, setData } = useContext(DataContext)
    const { theme } = useTheme()

    const [isCaptchaSuccess, setIsCaptchaSuccess] = useState(false)
    const ref = useRef<TurnstileInstance | null>(null)

    const prodiOptions = useMemo(() => getProdiOptions(), [])
    const academicYears = useMemo(() => getAcademicYearOptions(), [])

    const turnstileTheme =
        theme === "dark" ||
            (theme === "system" &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
            ? "dark"
            : "light"

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            tahunAngkatan: data?.tahunAngkatan || "",
            programStudi: data?.programStudi || "",
            nimAwal: data?.nimAwal || "",
            nimAkhir: data?.nimAkhir || "",
        },
    })


    function onSubmit(data: FormValues) {
        if (!isCaptchaSuccess) return
        setData(data as any)
        onSubmitClose()
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <FieldGroup>
                    <FieldSet>
                        <FieldLegend>Less go</FieldLegend>
                        <FieldDescription>
                            Just fill in this form to commence!
                        </FieldDescription>

                        <FieldGroup>
                            <Field>
                                <FieldLabel>Academic Period</FieldLabel>
                                <Controller
                                    name="tahunAngkatan"
                                    control={form.control}
                                    render={({ field }) => (
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Academic Period" />
                                            </SelectTrigger>
                                            <SelectContent
                                                position="popper"
                                                className="z-50 bg-background max-h-60 overflow-y-auto border shadow-xl"
                                            >
                                                <SelectGroup>
                                                    {academicYears.map((year) => (
                                                        <SelectItem key={year} value={year.toString()}>
                                                            {year}
                                                        </SelectItem>
                                                    ))}
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    )}
                                />
                                <FieldError>
                                    {form.formState.errors.tahunAngkatan?.message}
                                </FieldError>
                            </Field>

                            <Field>
                                <FieldLabel>Academic Program</FieldLabel>
                                <Controller
                                    name="programStudi"
                                    control={form.control}
                                    render={({ field }) => (
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Academic Program" />
                                            </SelectTrigger>
                                            <SelectContent
                                                position="popper"
                                                className="z-50 bg-background max-h-60 overflow-y-auto border shadow-xl"
                                            >
                                                <SelectGroup>
                                                    {prodiOptions.map((prodi) => (
                                                        <SelectItem key={prodi.value} value={prodi.value}>
                                                            {prodi.label}
                                                        </SelectItem>
                                                    ))}
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    )}
                                />
                                <FieldError>
                                    {form.formState.errors.programStudi?.message}
                                </FieldError>
                            </Field>

                            <Field>
                                <FieldLabel>First Student ID</FieldLabel>
                                <Input
                                    inputMode="numeric"
                                    placeholder="0001"
                                    maxLength={4}
                                    {...form.register("nimAwal")}
                                />
                                <FieldError>
                                    {form.formState.errors.nimAwal?.message}
                                </FieldError>
                            </Field>

                            <Field>
                                <FieldLabel>Last Student ID</FieldLabel>
                                <Input
                                    inputMode="numeric"
                                    placeholder="0004"
                                    maxLength={4}
                                    {...form.register("nimAkhir")}
                                />
                                <FieldError>
                                    {form.formState.errors.nimAkhir?.message}
                                </FieldError>
                            </Field>
                        </FieldGroup>
                    </FieldSet>

                    <Field>
                        <Turnstile
                            ref={ref}
                            siteKey={ENV.turnstile.siteKey}
                            options={{
                                action: "submit-form",
                                theme: turnstileTheme,
                                size: "flexible",
                            }}
                            onSuccess={() => setIsCaptchaSuccess(true)}
                            onExpire={() => {
                                ref.current?.reset()
                                setIsCaptchaSuccess(false)
                            }}
                        />
                    </Field>

                    <Field>
                        <Button
                            type="submit"
                            variant="outline"
                            className={`w-full ${isCaptchaSuccess ? 'cursor-pointer' : 'cursor-not-allowed'}`}
                            disabled={!isCaptchaSuccess}
                        >
                            Submit
                        </Button>
                    </Field>
                </FieldGroup>
            </form>
        </Form>
    )
}
