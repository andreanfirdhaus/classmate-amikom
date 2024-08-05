import { cn } from '@/lib/utils';
import { NavLink } from "react-router-dom";
import { useTheme } from "@/components/theme-provider";
import { useEffect, useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import DialogForm from "@/layout/navbar/dialog-form";
import { Suit, Toga, Sun, Moon, Search } from '@/assets/assets';

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
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        setCurrentTheme(newTheme);
    };

    const myColor = currentTheme === 'light' ? '#fafafa' : '#09090b';

    return (
        <footer className={cn("fixed left-0 right-0 bottom-3.5 z-50 block sm:hidden", className)}>
            <div className="flex justify-center items-center gap-2 h-16 mx-auto w-[238px] bg-primary rounded-full">
                <div className='flex justify-center items-center gap-2'>
                    <NavLink to="/"
                        className={({ isActive }) =>
                            isActive ? "size-12 bg-testprimary flex items-center justify-center rounded-full" : "size-12 flex items-center justify-center rounded-full"
                        }
                    >
                        <Suit fill={myColor} stroke={myColor} />
                    </NavLink>
                    <NavLink to="/graduated"
                        className={({ isActive }) =>
                            isActive ? "size-12 bg-testprimary flex items-center justify-center rounded-full" : "size-12 flex items-center justify-center rounded-full"
                        }
                    >
                        <Toga fill={myColor} />
                    </NavLink>
                    <div className="size-12 flex items-center justify-center rounded-full" onClick={toggleTheme}>
                        {currentTheme === 'light' ? (
                            <Sun fill={myColor} className="transition-all" />
                        ) : (
                            <Moon fill={myColor} className="transition-all" />
                        )}
                        <span className="sr-only">Toggle theme</span>
                    </div>
                    <div className=" size-12 flex items-center justify-center rounded-full">
                        <Dialog>
                            <DialogTrigger asChild>
                                <Search fill={myColor} />
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader className="mb-4">
                                    <DialogTitle>Looking For Pics?</DialogTitle>
                                    <DialogDescription>
                                        Just fill in this form to commence!
                                    </DialogDescription>
                                </DialogHeader>
                                <DialogForm />
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>
            </div>
        </footer>
    )
}
