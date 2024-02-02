import React from "react";
import { Routes, Route } from "react-router-dom";
import Classmates from "./pages/Classmates";
import Graduated from "./pages/Graduated";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
    return (
        <>
            <Navbar title="Amikom" />
            <Routes>
                <Route path="/" element={<Classmates />} />
                <Route path="graduated" element={<Graduated />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
