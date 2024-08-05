import React from 'react';
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { HelmetProvider } from "react-helmet-async";
import { DataProvider } from "@/context/data-context";
import { ErrorImageProvider } from "@/context/error-context";
import { routes } from "./routes";

const router = createBrowserRouter(routes);
const helmetContext = {};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <DataProvider>
        <ErrorImageProvider>
          <HelmetProvider context={helmetContext}>
            <RouterProvider router={router} />
          </HelmetProvider>
        </ErrorImageProvider>
      </DataProvider>
    </ThemeProvider>
  </React.StrictMode>
);
