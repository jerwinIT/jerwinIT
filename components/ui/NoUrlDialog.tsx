import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface NoUrlDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

/**
 * Informs the user when a project has no demo URL available.
 */
export function NoUrlDialog({ open, onOpenChange }: NoUrlDialogProps) {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>URL not available</AlertDialogTitle>
          <AlertDialogDescription>
            No demo URL is available right now for this project.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction>OK</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
