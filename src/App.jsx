import { Outlet } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/layout/navbar/navbar";
import Footer from "@/components/layout/footer";
import { DataProvider } from "@/context/data-context";
import { ErrorImageProvider } from "@/context/error-context";
import { HelmetProvider } from "react-helmet-async";

function App() {
  const helmetContext = {};
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <DataProvider>
        <ErrorImageProvider>
          <HelmetProvider context={helmetContext}>
            <Navbar />
            <main className="container mx-auto px-4 max-w-[48.5rem]">
              <Outlet />
            </main>
            {/* <Footer /> */}
          </HelmetProvider>
        </ErrorImageProvider>
      </DataProvider>
    </ThemeProvider>
  );
}

export default App;
