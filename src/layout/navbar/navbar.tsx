import { amikomDark, amikomLight } from "@/assets/assets";
import { ModeToggle } from "@/components/mode-toggle";
import FormDialog from "@/components/partial/form-dialog";
import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import SheetNavbar from "@/layout/navbar/sheet-navbar";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { theme } = useTheme();
  const [logo, setLogo] = useState("");

  useEffect(() => {
    if (theme === "light") {
      setLogo(amikomDark);
    } else {
      setLogo(amikomLight);
    }
  }, [theme]);

  return (
    <header className="hidden sm:block">
      <nav className="fixed top-0 left-0 w-full z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 max-w-[56rem]">
          <div className="flex flex-row justify-normal sm:justify-between items-center w-full py-3.5 sm:py-4">
            <div className="basis-0 sm:basis-1/4">
              <button className="btn btn-sm btn-ghost normal-case text-base font-semibold tracking-wide hover:bg-transparent hidden sm:block">
                <img
                  src={logo}
                  alt="Amikom Yogyakarta"
                  draggable="false"
                  className="h-10 w-full object-contain"
                />
              </button>
            </div>

            <div className="flex basis-full sm:basis-2/4 items-center gap-2">
              <FormDialog>
                <Button
                  variant="outline"
                  size="lg"
                  className="flex flex-row justify-between items-center font-normal w-full rounded-full px-4"
                >
                  <p className="text-muted-foreground">looking for photos?</p>
                  <kbd className="hidden sm:inline-flex pointer-events-none h-6 select-none items-center gap-1 rounded-full border bg-muted px-2 font-mono text-[12px] font-medium text-muted-foreground opacity-100">
                    <span className="text-sm">⌘</span>k
                  </kbd>
                </Button>
              </FormDialog>
              <div className="flex">
                <ModeToggle />
                <SheetNavbar />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
