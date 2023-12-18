import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import getUrl from "../config/getUrl";
import Modal from "../components/modal/Modal";

function Graduated() {
    const [url, setUrl] = React.useState([]);
    const [modalClicked, setModalClicked] = useState(false);

    const [year, setYear] = useState("");
    const [grade, setGrade] = useState("");
    const [program, setProgram] = useState("");

    const [startNIM, setStartNIM] = useState("");
    const [endNIM, setEndNIM] = useState("");

    useEffect(() => {
        const fetchData = async (nim_awal, nim_akhir) => {
            const newUrl = [];
            for (let i = nim_awal; i <= nim_akhir; i++) {
                const url = getUrl(year, grade, program, i).graduated;
                newUrl.push(url);
            }
            setUrl(newUrl);

            sessionStorage.setItem("dataGraduated", JSON.stringify(newUrl));
        };
        if (modalClicked) {
            fetchData(startNIM, endNIM);
        }
    }, [startNIM, endNIM, modalClicked]);

    const handleModalSubmit = (
        tahun_angkatan,
        kode_prodi,
        nim_awal,
        nim_akhir
    ) => {
        setYear(tahun_angkatan);
        setGrade(tahun_angkatan.slice(2));
        setProgram(kode_prodi);

        setStartNIM(nim_awal);
        setEndNIM(nim_akhir);
        setModalClicked(true);
    };

    return (
        <>
            <Navbar title="Graduates" />
            <Modal updatePathURL={handleModalSubmit} />
            <Card
                pathURL={url}
                desc="your classmates photo who have graduated"
            />
        </>
    );
}

export default Graduated;
