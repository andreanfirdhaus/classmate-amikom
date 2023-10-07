import React, { useState, useEffect } from "react";
import Button from "./modal/Button";
import { PiMoonDuotone, PiSunBold } from "react-icons/pi";

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
        localStorage.removeItem("dataClassmates"); // Remove data from localStorage
        localStorage.removeItem("dataGraduated"); // Remove data from localStorage

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
        <div>
            <div className="fixed top-0 left-0 w-full z-10">
                <div className="container mx-auto w-full md:w-[45rem] flex justify-center">
                    <div className="menu menu-horizontal bg-base-100 w-full rounded-box sm:rounded-none">
                        <div className="flex-1">
                            <button
                                className="btn btn-sm btn-ghost normal-case text-sm font-semibold tracking-wide"
                                onClick={refresh}
                            >
                                {title}
                            </button>
                        </div>

                        <div className="flex px-5 justify-center items-center">
                            <Button />
                        </div>

                        <div className="flex-none mr-2 sm:mr-0">
                            <button className="btn btn-sm btn-square btn-ghost">
                                <label className="swap swap-rotate">
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
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
