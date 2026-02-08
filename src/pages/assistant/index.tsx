import { DataContext } from "@/context/data-context";
import { useErrorImageContext } from "@/context/error-context";
import Content from "@/layout/content";
import Hero from "@/layout/hero";
import MetaData from "@/components/meta-data";
import { Fragment, useContext } from "react";
import { useUrlGenerator } from "@/utils/hooks/useUrl";

export default function Assistant() {
    const { data } = useContext(DataContext);
    const { errorUrls } = useErrorImageContext();
    const { urls, loading } = useUrlGenerator(data, "assistant");

    if (loading) return <></>;

    return (
        <Fragment>
            <MetaData
                title="Assistant - Classmate Amikom"
                description="View Lab Assistants at Amikom University Yogyakarta"
                name="Classmate Amikom"
                type="website"
                domain="https://classmate-amikom.vercel.app/assistant"
            />
            {urls.length === 0 ? (
                <Hero
                    title="Assistant"
                    desc="View lab assistants photos"
                />
            ) : (
                <section className="mt-24 mb-24 sm:mb-12 space-y-8">
                    <div className="h-14 sm:h-28 flex flex-col justify-center items-center text-center">
                        <h1 className="text-2xl font-bold text-foreground capitalize">
                            assistant
                        </h1>
                        <p className="text-base text-muted-foreground mt-1.5">
                            {errorUrls.length > 0
                                ? `${urls.length - errorUrls.length} of ${urls.length - 1} photos found`
                                : `${urls.length} photos found`
                            }
                            <span className="mx-2">•</span>
                            from {data.nimAwal} - {data.nimAkhir}
                        </p>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5 content-center">
                        <Content data={urls} />
                    </div>
                </section>
            )
            }
        </Fragment >
    );
}
