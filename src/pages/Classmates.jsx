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
            const newUrl = [];
            for (let i = startNIM; i <= endNIM; i++) {
                const url = getUrl(year, classOf, major, i).classmates;
                newUrl.push(url);
            }
            setData(newUrl); // Set newUrl (the updated URL of the modal form) into setData

            // Save newUrl (Updated URL) to localStorage
            localStorage.setItem("dataClassmates", JSON.stringify(newUrl));
        };
        if (modalClicked) {
            fetchData(startNIM, endNIM);
        }
    }, [startNIM, endNIM, modalClicked]);

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
            <Navbar title="kla·smayt" />
            <Modal updatePathURL={handleModalSubmit} />
            <Card pathURL={data} desc="Your classmates photo" />
        </>
    );
}

export default Classmates;
