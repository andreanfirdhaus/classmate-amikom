import { useEffect, useRef, useState } from 'react';
import { useErrorImageContext } from '@/context/error-context';
import { useTheme } from "@/components/theme-provider";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
    LazyLoadImage,
    trackWindowScroll,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface ContentProps {
    data: string[];
}

function Content({ data }: ContentProps) {
    const { validUrls, setUrls } = useErrorImageContext();
    const prevDataRef = useRef<string[]>([]);
    const [isPrefetching, setIsPrefetching] = useState(true);

    const { theme } = useTheme();

    useEffect(() => {
        const prefetchImages = async () => {
            setIsPrefetching(true);
            const newErrorUrls: string[] = [];
            const newValidUrls: string[] = [];

            const promises = data.map(url => {
                return new Promise<void>((resolve) => {
                    const img = new Image();
                    img.src = url;
                    img.onload = () => {
                        newValidUrls.push(url);
                        resolve();
                    };
                    img.onerror = () => {
                        newErrorUrls.push(url);
                        resolve();
                    };
                });
            });

            await Promise.all(promises);

            setUrls(newValidUrls, newErrorUrls);
            prevDataRef.current = data;
            setIsPrefetching(false);
        };

        prefetchImages();
    }, [data, setUrls]);

    if (isPrefetching) {
        return (
            <>
                {Array.from({ length: 4 }).map((_, index) => (
                    <Card key={index} className='px-0 py-0'>
                        <CardHeader className='px-0 py-0'>
                            <Skeleton className="h-56 w-full rounded-t-lg rounded-b-none" />
                        </CardHeader>
                        <CardContent className='pt-4 pb-4 px-4 flex justify-center items-center'>
                            <Skeleton className="h-4 w-3/4" />
                        </CardContent>
                    </Card>
                ))}
            </>
        );
    }

    const filteredUrls = data.filter(url => validUrls.includes(url));

    if (filteredUrls.length === 0) {
        return (
            <div className="col-span-2 sm:col-span-4 flex justify-center items-center py-10 opacity-70">
                <p className="text-center text-muted-foreground w-3/4">
                    The photo you are looking for was not found. Either the photo does not exist or the input you entered is incorrect.
                </p>
            </div>
        );
    }

    return (
        <>
            {filteredUrls.map((url: string, index: number) => {
                const splitData = url
                    .split("/")
                    .pop()
                    ?.replace(/\.[a-zA-Z]+$/, "")
                    .replace(/_/g, ".") || "";


                return (
                    <Card key={index} className='px-0 py-0'>
                        <CardHeader className='px-0 py-0'>
                            <LazyLoadImage
                                src={url}
                                alt={splitData}
                                effect="blur"
                                draggable="false"
                                className="rounded-t-lg h-56 w-full object-cover"
                            />
                        </CardHeader>
                        <CardContent className='pb-2.5 text-center'>
                            <CardTitle className='text-sm'>{splitData}</CardTitle>
                        </CardContent>
                    </Card>
                );
            })}
        </>
    );
}

export default trackWindowScroll(Content);