import React, { useEffect, useState } from "react";
import {
    LazyLoadImage,
    trackWindowScroll,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Card({ pathURL, desc }) {
    const [getLocalStorageClassmates, setGetLocalStorageClassmates] = useState(
        []
    );
    const [getLocalStorageGraduated, setGetLocalStorageGraduated] = useState(
        []
    );
    const [currentPath, setCurrentPath] = useState("");

    const setPathURL = () => {
        const currentPath = window.location.pathname;
        setCurrentPath(currentPath);
    };

    useEffect(() => {
        setPathURL();

        // Retrieves data from "dataClassmates" in sessionStorage
        const classmatesData = JSON.parse(
            sessionStorage.getItem("dataClassmates")
        );
        if (classmatesData && classmatesData.length > 0) {
            setGetLocalStorageClassmates(classmatesData);
        } else {
            setGetLocalStorageClassmates(null);
        }

        // Retrieves data from "dataGraduated" in sessionStorage
        const graduatedData = JSON.parse(
            sessionStorage.getItem("dataGraduated")
        );
        if (graduatedData && graduatedData.length > 0) {
            setGetLocalStorageGraduated(graduatedData);
        } else {
            setGetLocalStorageGraduated(null);
        }
    }, [pathURL]);

    return (
        <>
            {currentPath === "/" ? (
                getLocalStorageClassmates ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6 content-center">
                        {getLocalStorageClassmates.map((url, index) => {
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
                                        <div className="text-sm font-medium">
                                            {url
                                                .split("/")
                                                .pop()
                                                .split(".")[0]
                                                .replace(/_/g, ".")}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    // If the data from "dataClassmates" is null/does not exist, then display the following elements
                    <div className="flex items-center h-[40rem] sm:h-[48rem]">
                        <div className="hero h-96 bg-base-200">
                            <div className="hero-content text-center">
                                <div className="max-w-md">
                                    <p className="p-6">{desc}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            ) : currentPath === "/graduated" ? (
                getLocalStorageGraduated ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6 content-center">
                        {getLocalStorageGraduated.map((urlGraduated, index) => {
                            return (
                                <div
                                    className="card w-full bg-base-100 shadow-xl"
                                    key={index}
                                >
                                    <figure>
                                        <LazyLoadImage
                                            src={urlGraduated}
                                            effect="blur"
                                            draggable="false"
                                            className="w-52 h-52 sm:w-56 sm:h-56 object-cover object-top rounded-md"
                                        />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <div className="text-sm font-medium">
                                            {urlGraduated
                                                .split("/")
                                                .pop()
                                                .split(".")[0]
                                                .replace(/_/g, ".")}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    // If the data from "dataGraduated" is null/does not exist, then display the following elements
                    <div className="flex items-center h-[40rem] sm:h-[48rem]">
                        <div className="hero h-96 bg-base-200">
                            <div className="hero-content text-center">
                                <div className="max-w-sm">
                                    <p className="p-6">{desc}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            ) : null}
        </>
    );
}

export default trackWindowScroll(Card);
