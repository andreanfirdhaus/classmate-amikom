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
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
    tahunAngkatan: z.string(),
    programStudi: z.string(),
    nimAwal: z.string().min(1, { message: "Field NIM is required." }),
    nimAkhir: z.string().min(1, { message: "Field NIM is required." }),
});

export default function DialogForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            nimAwal: "",
            nimAkhir: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                {/* tahun angkatan */}
                <FormField
                    control={form.control}
                    name="tahunAngkatan"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Tahun Angkatan</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select an tahun angkatan" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {[2018, 2019, 2020, 2021, 2022, 2023].map((year) => {
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
                            <FormLabel>Program Studi</FormLabel>
                            <FormControl>
                                <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select prodi" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="11">Informatika</SelectItem>
                                        <SelectItem value="12">Sistem Informasi</SelectItem>
                                        <SelectItem value="95">Hubungan Internasional</SelectItem>
                                        <SelectItem value="67">
                                            Ilmu Komunikasi Internasional
                                        </SelectItem>
                                        <SelectItem value="82">Teknologi Informasi</SelectItem>
                                        <SelectItem value="96">Ilmu Komunikasi</SelectItem>
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
                            <FormLabel>NIM Awal</FormLabel>
                            <FormControl>
                                <Input placeholder="xxxx" type="number" {...field} />
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
                            <FormLabel>NIM Akhir</FormLabel>
                            <FormControl>
                                <Input placeholder="xxxx" type="number" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {/* button submit */}
                <Button type="submit" className="w-full">
                    Check
                </Button>
            </form>
        </Form>
    );
}
