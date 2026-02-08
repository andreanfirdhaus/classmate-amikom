import { Outlet } from "react-router-dom";
import Navbar from "@/layout/navbar";

export default function Layout() {
    return (
        <>
            <Navbar />
            <main className="container mx-auto px-4 max-w-194">
                <Outlet />
            </main>
        </>
    );
}
