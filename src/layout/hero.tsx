import FormDialog from '@/components/partial/form-dialog';
import { Button } from '@/components/ui/button';

interface HeroProps {
    vectorComponent: React.ReactNode;
    title: string;
    desc: string;
}

export default function Hero({ vectorComponent, title, desc }: HeroProps) {
    return (
        <>
            <div className="fixed left-[50%] top-[46%] sm:top-[50%] translate-x-[-50%] translate-y-[-50%] z-50 text-center w-full max-w-lg">
                <div className="flex justify-center h-80">
                    {vectorComponent}
                </div>
                <div className="flex flex-col items-center gap-2 mt-4">
                    <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
                        {title}
                    </h1>
                    <p className="text-base sm:text-lg text-muted-foreground px-4 sm:px-0">
                        {desc}
                    </p>
                    <div>
                        <FormDialog>
                            <Button
                                variant="default"
                                size="lg"
                                className="mt-4 px-[18px] capitalize text-base font-normal sm:text-lg rounded-full"
                            >
                                Search
                            </Button>
                        </FormDialog>
                    </div>
                </div>
            </div>
        </>
    )
}
