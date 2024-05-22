import React from "react";
import { Routes, Route } from "react-router-dom";
import Classmates from "./pages/Classmates";
import Graduated from "./pages/Graduated";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/layout/navbar";
import { DataProvider } from "@/components/data-context";
import { HelmetProvider } from "react-helmet-async";

function App() {
  const helmetContext = {};
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <DataProvider>
        <HelmetProvider context={helmetContext}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Classmates />} />
            <Route path="graduated" element={<Graduated />} />
          </Routes>
        </HelmetProvider>
      </DataProvider>
    </ThemeProvider>
  );
}

export default App;
