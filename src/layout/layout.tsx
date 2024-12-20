import { Outlet } from "react-router-dom";
import Navbar from "@/layout/navbar";
import Footer from "@/layout/footer";

export default function Layout() {
    return (
        <>
            <Navbar />
            <main className="container mx-auto px-6 max-w-[48.5rem]">
                <Outlet />
            </main>
            <Footer />
        </>
    );
}
