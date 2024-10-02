import DialogForm from "@/components/dialog-form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { useState } from 'react';

export default function FormDialog({
  children,
}: {
  children: React.ReactNode;
}) {

  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader className="mb-2.5">
          <DialogTitle className="text-2xl">Looking For Pics?</DialogTitle>
          <DialogDescription>
            Just fill in this form to commence!
          </DialogDescription>
        </DialogHeader>
        <DialogForm onSubmitClose={handleClose} />
      </DialogContent>
    </Dialog>
  );
}
