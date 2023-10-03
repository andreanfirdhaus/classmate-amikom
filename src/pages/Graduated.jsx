import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import getUrl from "../config/getUrl";

function Graduated() {
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        const newUrl = [];
        for (let i = 3119; i <= 3182; i++) {
            const url = getUrl(i).graduated;
            newUrl.push(url);
        }
        setData(newUrl);
    }, []);

    return (
        <>
            <Navbar title="Informatika-09" />
            <Card pathURL={data} />
        </>
    );
}

export default Graduated;
