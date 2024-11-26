import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Link, NavLink } from "react-router-dom";
import { AlignRight } from "lucide-react";

export default function SheetNavbar() {
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost" size="icon">
          <AlignRight />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col h-screen gap-6 justify-center items-center">
          <NavLink to="/" className={({ isActive }) =>
            isActive ? "font-bold" : "text-foreground"
          }>
            <p className="text-base capitalize tracking-normal">classmate</p>
          </NavLink>
          <NavLink to="/graduated" className={({ isActive }) =>
            isActive ? "font-bold" : "text-foreground"
          }>
            <p className="text-base capitalize tracking-normal">
              graduated
            </p>
          </NavLink>
          <Link to="https://github.com/andreanfirdhaus/classmate-amikom" target='_blank' rel='noopener noreferrer'>
            <p className="text-base capitalize tracking-normal">
              repository
            </p>
          </Link>
        </div>
      </SheetContent>
    </Sheet >
  );
}
