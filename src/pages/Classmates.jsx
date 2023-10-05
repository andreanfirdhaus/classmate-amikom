import React, { useState, useEffect } from "react";
import Navbar from "./../components/Navbar";
import Card from "../components/Card";
import getUrl from "../config/getUrl";
import Modal from "../components/modal/Modal";

function Classmates() {
    const [data, setData] = useState([]);
    const [modalClicked, setModalClicked] = useState(false);

    const [year, setYear] = useState("");
    const [classOf, setClassOf] = useState("");
    const [major, setMajor] = useState("");
    const [startNIM, setStartNIM] = useState("");
    const [endNIM, setEndNIM] = useState("");

    useEffect(() => {
        const fetchData = async (startNIM, endNIM) => {
            if (classOf) {
                const newUrl = [];
                for (let i = startNIM; i <= endNIM; i++) {
                    const url = getUrl(year, classOf, major, i).classmates;
                    newUrl.push(url);
                }
                setData(newUrl);
            }
        };
        if (modalClicked) {
            fetchData(startNIM, endNIM);
        }
    }, [classOf, startNIM, endNIM, modalClicked]);

    const handleModalSubmit = (
        yearCode,
        classOfCode,
        majorCode,
        startNIM,
        endNIM
    ) => {
        setYear(yearCode);
        setClassOf(classOfCode);
        setMajor(majorCode);
        setStartNIM(startNIM);
        setEndNIM(endNIM);
        setModalClicked(true);
    };

    return (
        <>
            <Navbar title="Informatika-09" />
            <Modal updatePathURL={handleModalSubmit} />

            {modalClicked ? (
                <Card pathURL={data} />
            ) : (
                <div className="flex items-center h-[40rem] sm:h-[48rem]">
                    <div className="hero h-96 bg-base-200">
                        <div className="hero-content text-center">
                            <div className="max-w-md">
                                <p className="p-6">Your classmate's photo</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Classmates;
