import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
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
            <ScrollRestoration
              getKey={(location) => {
                // If the location.state has noRestore, just return a new random key every time so it never restores
                if (location.state?.noRestore) {
                  return Math.random().toString(36).substr(2, 8);
                }
                // Otherwise restore all other navigations to /path1 to the prior /path1 scroll position
                if (location.pathname === "/graduated") {
                  return location.pathname;
                }
                // Otherwise restore by location.key
                return location.key;
              }}
            />
          </main>
        </HelmetProvider>
      </DataProvider>
    </ThemeProvider>
  );
}

export default App;
