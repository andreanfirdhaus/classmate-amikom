interface HeroProps {
    vectorComponent?: React.ReactNode;
    title: string;
    desc: string;
}

export default function Hero({ vectorComponent, title, desc }: HeroProps) {
    return (
        <div className="flex flex-col items-center justify-center text-center h-screen">
            {vectorComponent && (
                <div className="flex justify-center h-72 sm:h-80">
                    {vectorComponent}
                </div>
            )}

            <div className={`flex flex-col items-center gap-1.5 ${vectorComponent ? 'mt-8' : ''}`}>
                <h1 className="text-3xl font-bold text-foreground">
                    {title}
                </h1>

                <p className="text-base sm:text-lg font-medium text-muted-foreground px-4 sm:px-0">
                    {desc}
                </p>
            </div>
        </div>
    )
}
