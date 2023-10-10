import React, { useState, useEffect } from "react";
import Button from "./modal/Button";
import { PiMoonDuotone, PiSunBold } from "react-icons/pi";
import Logo from "../components/assets/amikom.png";

function Navbar({ title }) {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "cmyk"
    );
    const [checked, setChecked] = useState(theme === "cmyk" ? false : true);

    const toggleTheme = (e) => {
        if (e.target.checked) {
            setTheme("dark");
        } else {
            setTheme("cmyk");
        }
    };

    const refresh = () => {
        sessionStorage.removeItem("dataClassmates"); // Remove data from sessionStorage
        sessionStorage.removeItem("dataGraduated"); // Remove data from sessionStorage

        window.location.reload(); // And reload the page
    };

    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localStorageTheme = localStorage.getItem("theme");
        document
            .querySelector("html")
            .setAttribute("data-theme", localStorageTheme);
    }, [theme]);

    return (
        <>
            <div className="fixed top-0 left-0 w-full z-10">
                <div className="container mx-auto w-full md:w-[45rem]">
                    <div className="flex items-center bg-base-100 py-1">
                        <div className="navbar-start">
                            <button
                                className="btn btn-sm btn-ghost normal-case text-base font-semibold tracking-wide"
                                onClick={refresh}
                            >
                                <span>
                                    <img
                                        src={Logo}
                                        alt="Logo"
                                        draggable="false"
                                        className="h-7"
                                    />
                                </span>
                                {title}
                            </button>
                        </div>
                        <div className="navbar-end flex items-center">
                            <ul className="menu menu-horizontal px-1">
                                <li>
                                    <Button />
                                </li>

                                <li>
                                    <label className="swap swap-rotate btn-sm">
                                        {/* this hidden checkbox controls the state */}
                                        <input
                                            type="checkbox"
                                            onClick={toggleTheme}
                                            checked={checked}
                                            onChange={(e) =>
                                                setChecked(e.target.checked)
                                            }
                                        />

                                        {/* sun icon */}
                                        <PiSunBold
                                            size={23.5}
                                            className="swap-off fill-current"
                                        />

                                        {/* moon icon */}

                                        <PiMoonDuotone
                                            size={23.5}
                                            className="swap-on fill-current"
                                        />
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
