export default function NotFound() {
    return (
        <div className="container mx-auto px-4 max-w-194 h-screen flex flex-col justify-center items-center text-center gap-4">
            <h1 className='text-3xl font-bold text-foreground'>Oops!</h1>
            <p className='text-lg text-muted-foreground'>This page is not available.</p>
        </div>
    );
}
