"use client";

// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { AlignRight } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { NavLink } from "react-router-dom";

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
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
    tahunAngkatan: z.string({
        required_error: "Please select an tahun angkatan to display.",
    }),
    // tahunAngkatan: z.string({required_error: "Please select an tahun angkatan to display.",}),
    // tahunAngkatan: z.string().min(1, {
    //     message: "Tahun angkatan is required.",
    // }),
    programStudi: z.string().min(1, { message: "Program studi is required." }),
    nimAwal: z.string().min(1, { message: "Field NIM is required." })
});

export default function Navbar() {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            tahunAngkatan: "",
            programStudi: "",
            nimAwal: "",
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values);
    }

    const refresh = () => {
        sessionStorage.removeItem("dataClassmates"); // Remove data from sessionStorage
        sessionStorage.removeItem("dataGraduated"); // Remove data from sessionStorage

        window.location.reload(); // And reload the page
    };

    const { theme } = useTheme();
    const [logo, setLogo] = useState("../components/assets/amikom-logo.png");

    useEffect(() => {
        // Set the logo source based on the current theme
        if (theme === "light") {
            import("../components/assets/amikom-dark.png").then((module) => {
                setLogo(module.default);
            });
        } else if (theme === "dark") {
            import("../components/assets/amikom-light.png").then((module) => {
                setLogo(module.default);
            });
        } else {
            import("../components/assets/amikom.png").then((module) => {
                setLogo(module.default);
            });
        }
    }, [theme]);

    return (
        <header>
            <nav className="fixed top-0 left-0 w-full z-10">
                <div className="container mx-auto px-4 w-full md:w-[56rem]">
                    <div className="flex  flex-row justify-normal sm:justify-between items-center w-full py-4">
                        <div className="basis 0 sm:basis-1/4">
                            <button
                                className="btn btn-sm btn-ghost normal-case text-base font-semibold tracking-wide hover:bg-transparent hidden sm:block"
                                onClick={refresh}
                            >
                                <img
                                    src={logo}
                                    alt="Amikom Yogyakarta"
                                    draggable="false"
                                    className="h-10 w-full object-contain"
                                />
                            </button>
                        </div>

                        <div className="flex basis-full sm:basis-2/4 items-center gap-2">
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="flex flex-row justify-between items-center font-normal w-full"
                                    >
                                        <p className="text-muted-foreground">
                                            looking for photos?
                                        </p>
                                        <kbd className="hidden sm:inline-flex pointer-events-none h-6 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                                            <span className="text-xs">⌘</span>k
                                        </kbd>
                                    </Button>
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader className="mb-4">
                                        <DialogTitle>
                                            Looking for photos?
                                        </DialogTitle>
                                        <DialogDescription>
                                            Just fill in this field to get
                                            started!
                                        </DialogDescription>
                                    </DialogHeader>
                                    <Form {...form}>
                                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                                            <FormField
                                                control={form.control}
                                                name="tahunAngkatan"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Tahun Angkatan</FormLabel>
                                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                            <FormControl>
                                                                <SelectTrigger>
                                                                    <SelectValue placeholder="Select year" />
                                                                </SelectTrigger>
                                                                <SelectContent>
                                                                    <SelectItem value="2018">
                                                                        2018
                                                                    </SelectItem>
                                                                    <SelectItem value="2019">
                                                                        2019
                                                                    </SelectItem>
                                                                    <SelectItem value="2020">
                                                                        2020
                                                                    </SelectItem>
                                                                    <SelectItem value="2021">
                                                                        2021
                                                                    </SelectItem>
                                                                    <SelectItem value="2022">
                                                                        2022
                                                                    </SelectItem>
                                                                    <SelectItem value="2023">
                                                                        2023
                                                                    </SelectItem>
                                                                </SelectContent>
                                                            </FormControl>
                                                        </Select>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            {/* <FormField
                                                control={form.control}
                                                name="programStudi"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Program Studi</FormLabel>
                                                        <FormControl>
                                                            <Select {...field}>
                                                                <SelectTrigger>
                                                                    <SelectValue placeholder="Select prodi" />
                                                                </SelectTrigger>
                                                                <SelectContent>
                                                                    <SelectItem value="11">
                                                                        Informatika
                                                                    </SelectItem>
                                                                    <SelectItem value="12">
                                                                        Sistem Informasi
                                                                    </SelectItem>
                                                                    <SelectItem value="95">
                                                                        Hubungan Internasional
                                                                    </SelectItem>
                                                                    <SelectItem value="67">
                                                                        Ilmu Komunikasi Internasional
                                                                    </SelectItem>
                                                                    <SelectItem value="82">
                                                                        Teknologi Informasi
                                                                    </SelectItem>
                                                                    <SelectItem value="96">
                                                                        Ilmu Komunikasi
                                                                    </SelectItem>
                                                                </SelectContent>
                                                            </Select>
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="nimAwal"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>NIM Awal</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="xxxx" type='number' {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            /> */}
                                            <Button type="submit" className='w-full'>Check</Button>
                                        </form>
                                    </Form>
                                    {/* <form action="">
                                        <div className="grid w-full items-center gap-4">
                                            <div className="flex flex-col gap-3.5">
                                                <Label htmlFor="tahun-angkatan">
                                                    Tahun Angkatan
                                                </Label>
                                                <Select>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select year" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="2018">
                                                            2018
                                                        </SelectItem>
                                                        <SelectItem value="2019">
                                                            2019
                                                        </SelectItem>
                                                        <SelectItem value="2020">
                                                            2020
                                                        </SelectItem>
                                                        <SelectItem value="2021">
                                                            2021
                                                        </SelectItem>
                                                        <SelectItem value="2022">
                                                            2022
                                                        </SelectItem>
                                                        <SelectItem value="2023">
                                                            2023
                                                        </SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                            <div className="flex flex-col gap-3.5">
                                                <Label htmlFor="program-studi">
                                                    Program Studi
                                                </Label>
                                                <Select>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select prodi" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="11">
                                                            Informatika
                                                        </SelectItem>
                                                        <SelectItem value="12">
                                                            Sistem Informasi
                                                        </SelectItem>
                                                        <SelectItem value="95">
                                                            Hubungan
                                                            Internasional
                                                        </SelectItem>
                                                        <SelectItem value="67">
                                                            Ilmu Komunikasi
                                                            Internasional
                                                        </SelectItem>
                                                        <SelectItem value="82">
                                                            Teknologi Informasi
                                                        </SelectItem>
                                                        <SelectItem value="96">
                                                            Ilmu Komunikasi
                                                        </SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                            <div className="flex flex-col gap-3.5">
                                                <Label htmlFor="nim-awal">
                                                    NIM Awal
                                                </Label>
                                                <Input
                                                    type="number"
                                                    placeholder="xxxx"
                                                />
                                            </div>
                                            <div className="flex flex-col gap-3.5">
                                                <Label htmlFor="nim-akhir">
                                                    NIM Akhir
                                                </Label>
                                                <Input
                                                    type="number"
                                                    placeholder="xxxx"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-3.5 mt-8">
                                            <Button>Check</Button>
                                        </div>
                                    </form> */}
                                </DialogContent>
                            </Dialog>
                            <div className="flex">
                                <ModeToggle />
                                <Sheet>
                                    <SheetTrigger>
                                        <Button variant="ghost" size="icon">
                                            <AlignRight />
                                        </Button>
                                    </SheetTrigger>
                                    <SheetContent>
                                        <SheetHeader>
                                            {/* <SheetTitle>Navigation</SheetTitle> */}
                                            {/* <SheetDescription>
                                                description
                                            </SheetDescription> */}
                                        </SheetHeader>
                                        <div className="flex flex-col h-screen gap-6 justify-center items-center">
                                            <NavLink to="/">
                                                <p className="text-base font-medium capitalize">
                                                    my homie
                                                </p>
                                            </NavLink>
                                            <NavLink to="/graduated">
                                                <p className="text-base font-medium capitalize">
                                                    who&apos;s graduated
                                                </p>
                                            </NavLink>
                                        </div>
                                    </SheetContent>
                                </Sheet>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
