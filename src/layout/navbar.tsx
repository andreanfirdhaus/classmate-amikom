import { useEffect, useState } from "react"
import { Link, NavLink } from 'react-router-dom';
import { amikomDark, amikomLight } from "@/assets/assets";
import DialogForm from "@/components/dialog-form";
import { ModeToggle } from "@/components/mode-toggle";
import { useTheme } from "@/components/theme-provider";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { AlignRight, Users, GraduationCap, UserCog, BookOpen, Github } from 'lucide-react';

export default function Navbar() {
  const { theme } = useTheme();
  const [logo, setLogo] = useState("");
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (theme === "light") {
      setLogo(amikomDark);
    } else {
      setLogo(amikomLight);
    }
  }, [theme]);

  return (
    <header>
      <nav className="fixed top-0 w-full z-10 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex flex-row justify-normal sm:justify-between items-center w-full py-3.5 sm:py-4">
            <div className="basis-0 sm:basis-1/4">
              <NavLink to="/" className="btn btn-sm btn-ghost normal-case text-base font-semibold tracking-wide hover:bg-transparent hidden sm:block">
                <img
                  src={logo}
                  alt="Amikom Yogyakarta"
                  draggable="false"
                  className="h-10 w-full object-contain"
                />
              </NavLink>
            </div>

            <div className="flex basis-full sm:basis-2/4 justify-end items-center gap-2">
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="flex flex-row justify-between items-center w-56 sm:max-w-xs pl-4 h-9 sm:h-8"
                  >
                    Search photo...
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogForm onSubmitClose={handleClose} />
                </DialogContent>
              </Dialog>

              <div className="flex items-center gap-1.5">
                <ModeToggle className="w-9 h-9 sm:w-8 sm:h-8" />

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon" className="w-9 h-9 sm:w-8 sm:h-8">
                      <AlignRight />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuItem asChild>
                      <NavLink to="/" className={({ isActive }) =>
                        isActive ? "font-medium" : "text-foreground"
                      }>
                        <Users className="mr-2 h-4 w-4" />
                        Classmate
                      </NavLink>
                    </DropdownMenuItem>

                    <DropdownMenuItem disabled className="cursor-not-allowed text-muted-foreground w-full">
                      <GraduationCap className="mr-2 h-4 w-4" />
                      Graduated
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <NavLink to="/assistant" className={({ isActive }) =>
                        isActive ? "font-medium" : "text-foreground"
                      }>
                        <UserCog className="mr-2 h-4 w-4" />
                        Assistant
                      </NavLink>
                    </DropdownMenuItem>

                    <DropdownMenuItem asChild>
                      <NavLink to="/prodi" className={({ isActive }) =>
                        isActive ? "font-medium" : "text-foreground"
                      }>
                        <BookOpen className="mr-2 h-4 w-4" />
                        Academic Program
                      </NavLink>
                    </DropdownMenuItem>

                    <DropdownMenuSeparator />

                    <DropdownMenuItem asChild>
                      <Link to="https://github.com/andreanfirdhaus/classmate-amikom" target='_blank' rel='noopener noreferrer'>
                        <Github className="mr-2 h-4 w-4" />
                        repository
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
