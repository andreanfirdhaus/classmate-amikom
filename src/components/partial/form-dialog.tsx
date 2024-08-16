import DialogForm from "@/layout/navbar/dialog-form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

export default function FormDialog({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader className="mb-2.5">
          <DialogTitle className="text-2xl">Looking For Pics?</DialogTitle>
          <DialogDescription>
            Just fill in this form to commence!
          </DialogDescription>
        </DialogHeader>
        <DialogForm />
      </DialogContent>
    </Dialog>
  );
}
