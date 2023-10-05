import React from "react";
import Button from "./modal/Button";
import { PiMoonDuotone, PiSunBold } from "react-icons/pi";

function Navbar({ title }) {
    const [theme, setTheme] = React.useState("dark");
    const toggleTheme = () => {
        setTheme(theme === "cmyk" ? "dark" : "cmyk");
    };

    React.useEffect(() => {
        document.querySelector("html").setAttribute("data-theme", theme);
    }, [theme]);
    return (
        <div>
            <div className="fixed top-0 left-0 w-full z-10">
                <div className="container mx-auto w-full md:w-[45rem] flex justify-center">
                    <div className="menu menu-horizontal bg-base-100 w-full rounded-box sm:rounded-none">
                        <div className="flex-1">
                            <a className="btn btn-sm btn-ghost normal-case text-base font-bold tracking-wide">
                                {title}
                            </a>
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
                                    />

                                    {/* sun icon */}
                                    <PiSunBold
                                        size={25}
                                        className="swap-off fill-current"
                                    />

                                    {/* moon icon */}
                                    <PiMoonDuotone
                                        size={25}
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
