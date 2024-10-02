import { useEffect, useRef } from 'react';
import { useErrorImageContext } from '@/context/error-context';
import { useTheme } from "@/components/theme-provider";
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

interface ImageNotFound {
    backgroundFill: string;
    fillContent: string;
}

function Content({ data }) {
    const { setUrls } = useErrorImageContext();
    const prevDataRef = useRef<string[]>([]);

    const { theme } = useTheme();
    const currentTheme = theme;

    const generateImageNotFound = ({ backgroundFill, fillContent }: ImageNotFound) => {
        return `
            <svg width="403" height="512" viewBox="0 0 403 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="403" height="512" fill='${backgroundFill}'/>
                <path d="M250.421 192.535V168.92H244.491V164H203.971V168.92H199.029V201.39H194.088V206.31H186.182V211.23H178.275V216.15H173.334V221.07H164.439V216.15H159.497V211.23H154.556V201.39H148.626V231.893H153.469V236.813H158.41V242.717H163.352V247.636H168.293V252.556H173.235V272.235H184.106V266.332H179.165V262.396H184.106V257.476H189.048V252.556H193.989V257.476H198.931V272.235H209.802V266.332H204.86V247.636H209.802V242.717H214.744V234.845H219.685V217.134H223.638V222.053H229.568V211.23H219.685V202.374H239.451V196.471H224.627V192.535H250.421ZM214.842 176.791H208.913V170.888H214.842V176.791Z" fill='${fillContent}'/>
                <path d="M158.509 251.572H117V254.524H158.509V251.572Z" fill='${fillContent}'/>
                <path d="M143.684 261.412H131.825V264.364H143.684V261.412Z" fill='${fillContent}'/>
                <path d="M127.871 269.283H117V272.235H127.871V269.283Z" fill='${fillContent}'/>
                <path d="M158.509 269.283H152.579V272.235H158.509V269.283Z" fill='${fillContent}'/>
                <path d="M230.655 266.332H227.394V270.268H230.655V266.332Z" fill='${fillContent}'/>
                <path d="M256.351 269.283H245.381V272.235H256.351V269.283Z" fill='${fillContent}'/>
                <path d="M271.175 259.444H262.281V262.396H271.175V259.444Z" fill='${fillContent}'/>
                <path d="M286 251.572H214.842V254.524H286V251.572Z" fill='${fillContent}'/>
                <path d="M174.321 334.224V317.497H160.485V321.433H156.532V325.369H152.579H151.59V326.353V330.289H147.637V340.128H165.427V347.901H174.42V340.128H179.362V334.224H174.321ZM166.415 335.208H156.532V330.289H160.485V325.369H166.415V335.208Z" fill='${fillContent}'/>
                <path d="M245.183 334.224V317.497H231.346V321.433H227.393V325.369H223.44H222.452V326.353V330.289H218.499V340.128H236.288V347.901H245.282V340.128H250.223V334.224H245.183ZM237.276 335.208H227.393V330.289H231.346V325.369H237.276V335.208Z" fill='${fillContent}'/>
                <path d="M210.889 325.369V321.433H205.947V317.497H192.111V321.433H188.158V325.369H183.216V340.128H188.158V344.064H192.111V348H205.947V344.064H210.889V340.128H214.842V325.369H210.889ZM205.947 343.08H197.053V339.144H193.099V322.417H201.006V326.353H205.947V343.08Z" fill='${fillContent}'/>
            </svg>
        `;
    };

    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        const backgroundFill = currentTheme === "light" ? "#F4F4F5" : "#27272A";
        const fillContent = currentTheme === "light" ? "#71717A" : "#F6F6F6"
        const imageNotFoundURI = `data:image/svg+xml;base64,${btoa(generateImageNotFound({ backgroundFill, fillContent }))}`;

        e.currentTarget.onerror = null;
        e.currentTarget.src = imageNotFoundURI;
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

    useEffect(() => {
        const errorImages = document.querySelectorAll('img[src^="data:image/svg+xml"]');
        errorImages.forEach((img) => {
            const backgroundFill = currentTheme === "light" ? "#F4F4F5" : "#27272A";
            const fillContent = currentTheme === "light" ? "#71717A" : "#F6F6F6"
            const imageNotFoundURI = `data:image/svg+xml;base64,${btoa(generateImageNotFound({ backgroundFill, fillContent }))}`;
            img.setAttribute('src', imageNotFoundURI);
        });
    }, [currentTheme]);

    return (
        <>
            {data.map((data: string, index: number) => {
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
                            <CardTitle>{splitData}</CardTitle>
                        </CardContent>
                    </Card>
                );
            })}
        </>
    );
}

export default trackWindowScroll(Content);