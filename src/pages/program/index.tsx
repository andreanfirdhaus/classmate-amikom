import { Fragment, useState } from "react";
import { ExternalLink } from "lucide-react";
import MetaData from "@/components/meta-data";
import { PRODI_LIST, FAKULTAS_LIST, getFakultasName, type Prodi } from "@/constants/prodi";
import { Button } from "@/components/ui/button";

export default function ProdiPage() {
    const [selectedFakultas, setSelectedFakultas] = useState<string | null>(null);

    const filteredProdi = selectedFakultas
        ? PRODI_LIST.filter(p => p.id_fakultas === selectedFakultas && p.status === 'Y')
        : PRODI_LIST.filter(p => p.status === 'Y');

    return (
        <Fragment>
            <MetaData
                title="Program Studi - Classmate Amikom"
                description="Daftar Program Studi di Universitas Amikom Yogyakarta"
                name="Classmate Amikom"
                type="website"
                domain="https://classmate-amikom.vercel.app/prodi"
            />

            <section className="mt-24 mb-24 sm:mb-12 space-y-8">
                <div className="h-14 sm:h-28 flex flex-col justify-center items-center text-center">
                    <h1 className="text-2xl font-bold text-foreground capitalize">
                        Program Studi
                    </h1>
                    <p className="text-base text-muted-foreground mt-1.5">
                        {PRODI_LIST.filter(p => p.status === 'Y').length} program studi tersedia
                    </p>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-col items-center gap-4">
                    <div className="flex flex-wrap gap-2 justify-center">
                        <Button
                            variant={selectedFakultas === null ? "default" : "outline"}
                            size="sm"
                            className="rounded-full"
                            onClick={() => setSelectedFakultas(null)}
                        >
                            Semua
                        </Button>
                        {FAKULTAS_LIST.map(fakultas => (
                            <Button
                                key={fakultas.id}
                                variant={selectedFakultas === fakultas.id ? "default" : "outline"}
                                size="sm"
                                className="rounded-full"
                                onClick={() => setSelectedFakultas(fakultas.id)}
                            >
                                {fakultas.nama}
                            </Button>
                        ))}
                    </div>
                    {selectedFakultas && (
                        <a
                            href={FAKULTAS_LIST.find(f => f.id === selectedFakultas)?.website}
                            target="_blank"
                            rel="noreferrer"
                            className="text-sm text-primary hover:underline flex items-center gap-2"
                        >
                            {FAKULTAS_LIST.find(f => f.id === selectedFakultas)?.nama}
                            <ExternalLink className="w-4 h-4" />
                        </a>
                    )}
                </div>

                {/* Prodi Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {filteredProdi.map(prodi => (
                        <ProdiCard key={prodi.id} prodi={prodi} />
                    ))}
                </div>
            </section>
        </Fragment>
    );
}

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

function ProdiCard({ prodi }: { prodi: Prodi }) {
    return (
        <Card className="hover:shadow-md transition-shadow h-full flex flex-col">
            <CardHeader className="p-4 pb-2">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-medium border border-primary/20">
                        {prodi.jenjang}
                    </span>
                    <span className="text-xs font-mono text-muted-foreground bg-muted px-2 py-0.5 rounded">
                        Kode: {prodi.kode}
                    </span>
                </div>
                <CardTitle className="text-base font-semibold text-foreground line-clamp-2 leading-tight">
                    {prodi.nama_prodi}
                </CardTitle>
            </CardHeader>

            <CardFooter className="p-4 pt-3 pb-4 bg-muted/40 border-t mt-auto">
                <p className="w-full text-xs text-muted-foreground font-medium line-clamp-1 flex items-center justify-between gap-1">
                    <span className="opacity-70">Fakultas:</span>
                    <span>
                        {getFakultasName(prodi.id_fakultas)}
                    </span>
                </p>
            </CardFooter>
        </Card>
    );
}
