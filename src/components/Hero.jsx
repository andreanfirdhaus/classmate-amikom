import React from "react";

export default function Hero({ desc }) {
    return (
        <>
            <div className="flex items-center h-[32rem] sm:h-[36rem]">
                <div className="hero h-96 bg-base-200">
                    <div className="hero-content text-center">
                        <div className="max-w-md">
                            <h1 className="p-6">{desc}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
