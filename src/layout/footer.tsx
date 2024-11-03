import { Moon, Search, Suit, Sun, Toga } from "@/assets/icons";
import FormDialog from "@/components/partial/form-dialog";
import { useTheme } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

interface FooterProps {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  const { theme, setTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState(theme);

  useEffect(() => {
    setCurrentTheme(theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setTheme(newTheme);
    setCurrentTheme(newTheme);
  };

  const fillColor = currentTheme === "light" ? "#27272A" : "#fafafa";

  return (
    <footer
      className={cn(
        "fixed left-0 right-0 bottom-[18px] z-50 block sm:hidden",
        className,
      )}
    >
      <div className="flex justify-center items-center h-[56px] mx-auto w-[184px] bg-footer border border-input rounded-full shadow-2xl">
        <div className="flex justify-center items-center gap-[2px]">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `size-[40px] flex items-center justify-center rounded-full transition ease-in-out ${isActive ? `transition-transform duration-300 transform scale-105 bg-activefooter` : ""
              }`
            }
          >
            <Suit fill={fillColor} stroke={fillColor} />
          </NavLink>
          <NavLink
            to="/graduated"
            className={({ isActive }) =>
              `size-[40px] flex items-center justify-center rounded-full transition ease-in-out ${isActive ? `transition-transform duration-300 transform scale-105 bg-activefooter` : ""
              }`
            }
          >
            <Toga fill={fillColor} />
          </NavLink>
          <div
            className="size-[40px] flex items-center justify-center rounded-full"
            onClick={toggleTheme}
          >
            {currentTheme === "light" ? (
              <Sun fill={fillColor} className="transition-all" />
            ) : (
              <Moon fill={fillColor} className="transition-all" />
            )}
            <span className="sr-only">Toggle theme</span>
          </div>
          <div className="size-[40px] flex items-center justify-center rounded-full">
            <FormDialog>
              <Search fill={fillColor} />
            </FormDialog>
          </div>
        </div>
      </div>
    </footer>
  );
}
