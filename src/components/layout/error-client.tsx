import React, { Fragment } from 'react';

export default function PageNotFound() {
    return (
        <Fragment>
            <div className="container mx-auto px-4 max-w-[48.5rem] h-screen flex flex-col justify-center items-center text-center gap-8">
                <h1 className='text-3xl font-semibold'>Oops!</h1>
                <p className='text-base'>This shit isn't here, broh. Get the f**k outta here!</p>
            </div>
        </Fragment>
    );
}
