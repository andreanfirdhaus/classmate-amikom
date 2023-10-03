import React from "react";
import {
    LazyLoadImage,
    trackWindowScroll,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Card({ pathURL }) {
    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6 content-center">
                {pathURL.map((url, index) => {
                    return (
                        <div
                            className="card w-full bg-base-100 shadow-xl"
                            key={index}
                        >
                            <figure>
                                <LazyLoadImage
                                    src={url}
                                    effect="blur"
                                    draggable="false"
                                    className="w-52 h-52 sm:w-56 sm:h-56 object-cover object-top rounded-md"
                                />
                            </figure>
                            <div className="card-body items-center text-center">
                                <p className="tracking-wide text-sm font-medium">{`19.11.${
                                    3119 + index
                                }`}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default trackWindowScroll(Card);
