import { Fragment } from 'react';

export default function PageNotFound() {
    return (
        <Fragment>
            <div className="container mx-auto px-4 max-w-[48.5rem] h-screen flex flex-col justify-center items-center text-center gap-4">
                <h1 className='text-3xl font-bold text-foreground'>Oops!</h1>
                <p className='text-lg text-muted-foreground'>Get the f**k outta here!</p>
            </div>
        </Fragment>
    );
}
