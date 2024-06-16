import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
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
            isActive ? "text-muted-foreground" : ""
          }>
            <p className="text-base font-medium capitalize tracking-normal hover:text-muted-foreground">my homie</p>
          </NavLink>
          <NavLink to="/graduated" className={({ isActive }) =>
            isActive ? "text-muted-foreground" : ""
          }>
            <p className="text-base font-medium capitalize tracking-normal hover:text-muted-foreground">
              who&apos;s graduated
            </p>
          </NavLink>
        </div>
      </SheetContent>
    </Sheet>
  );
}
