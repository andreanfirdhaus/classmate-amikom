import React from "react";
import { Routes, Route } from "react-router-dom";
import Classmates from "./pages/Classmates";
import Graduated from "./pages/Graduated";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "./components/Navbar";

function App() {
    return (
        <>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Classmates />} />
                    <Route path="graduated" element={<Graduated />} />
                </Routes>
            </ThemeProvider>
        </>
    );
}

export default App;
