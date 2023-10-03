import React from "react";
import { Routes, Route } from "react-router-dom";
import Classmates from "./pages/Classmates";
import Graduated from "./pages/Graduated";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <div className="container mx-auto w-full px-6 sm:px-0 md:w-[40rem] py-14">
                <Routes>
                    <Route path="/" element={<Classmates />} />
                    <Route path="graduated" element={<Graduated />} />
                </Routes>
                <Footer />
            </div>
        </>
    );
}

export default App;
