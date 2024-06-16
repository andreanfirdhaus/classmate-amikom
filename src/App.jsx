import React from "react";
import { Outlet } from "react-router-dom";
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
          <main className="container mx-auto px-4 max-w-[48.5rem]">
            <Outlet />
          </main>
        </HelmetProvider>
      </DataProvider>
    </ThemeProvider>
  );
}

export default App;
