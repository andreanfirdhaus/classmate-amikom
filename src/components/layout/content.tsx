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
import { ImageNotFound } from "@/components/assets/assets";

function Content({ data }: { data: FormDataValues }) {
    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        e.currentTarget.src = ImageNotFound;
    };

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