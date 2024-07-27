import {
    LazyLoadImage,
    trackWindowScroll,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { ImageNotFound } from "@/assets/assets";
import { useEffect, useRef } from 'react';
import { useErrorImageContext } from '@/context/error-context';

function Content({ data }: { data: FormDataValues }) {
    const { setUrls } = useErrorImageContext();
    const prevDataRef = useRef<string[]>([]);

    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        e.currentTarget.src = ImageNotFound;
    };

    useEffect(() => {
        const prefetchImages = async () => {
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
        };

        prefetchImages();
    }, [data, setUrls]);

    return (
        <>
            {
                data.map((data: string, index: number) => {
                    const splitData = data.split("/")
                        .pop()
                        .split(".")[0]
                        .replace(/_/g, ".");

                    return (
                        <Card key={index}>
                            <CardHeader>
                                <LazyLoadImage
                                    src={data}
                                    alt={splitData}
                                    effect="blur"
                                    draggable="false"
                                    className="rounded-t-lg h-56 w-full object-cover"
                                    onError={handleImageError}
                                />
                            </CardHeader>
                            <CardContent>
                                <CardTitle>
                                    {splitData}
                                </CardTitle>
                            </CardContent>
                        </Card>
                    )
                })
            }
        </>
    )
}
export default trackWindowScroll(Content);