import { useState, useEffect } from "react";
import { ModeToggle } from "@/components/mode-toggle";
import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { amikomLight, amikomDark, amikom } from "@/components/assets/assets";
import SheetNavbar from '@/components/layout/navbar/sheet-navbar';
import DialogForm from "@/components/layout/navbar/dialog-form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Navbar() {
  const { theme } = useTheme();
  const [logo, setLogo] = useState(amikom);

  useEffect(() => {
    if (theme === "light") {
      setLogo(amikomDark);
    } else if (theme === "dark") {
      setLogo(amikomLight);
    } else {
      setLogo(amikom);
    }
  }, [theme]);

  return (
    <header>
      <nav className="fixed top-0 left-0 w-full z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 max-w-[56rem]">
          <div className="flex flex-row justify-normal sm:justify-between items-center w-full py-3.5 sm:py-4">
            <div className="basis-0 sm:basis-1/4">
              <button
                className="btn btn-sm btn-ghost normal-case text-base font-semibold tracking-wide hover:bg-transparent hidden sm:block"
              >
                <img
                  src={logo}
                  alt="Amikom Yogyakarta"
                  draggable="false"
                  className="h-10 w-full object-contain"
                />
              </button>
            </div>

            <div className="flex basis-full sm:basis-2/4 items-center gap-2">
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex flex-row justify-between items-center font-normal w-full"
                  >
                    <p className="text-muted-foreground">looking for photos?</p>
                    <kbd className="hidden sm:inline-flex pointer-events-none h-6 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                      <span className="text-xs">⌘</span>k
                    </kbd>
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader className="mb-4">
                    <DialogTitle>Looking for photos?</DialogTitle>
                    <DialogDescription>
                      Just fill in this field to get started!
                    </DialogDescription>
                  </DialogHeader>
                  <DialogForm />
                </DialogContent>
              </Dialog>
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
