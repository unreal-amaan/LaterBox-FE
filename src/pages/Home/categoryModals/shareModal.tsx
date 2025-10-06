import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { RiShareForwardLine } from "react-icons/ri";
import { Check, Copy } from "lucide-react";

type ShareModalProps = {
  isPublic: boolean;
  link: string;
};

const ShareModal = ({ isPublic, link }: ShareModalProps) => {
  const [copied, setCopied] = useState(false);

  const fullLink = `${import.meta.env.VITE_REACT_APP_URL}/share/public/${link}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(fullLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button type="button" disabled={!isPublic}>
          <RiShareForwardLine
            className={`${
              isPublic
                ? "icon-hover dark:icon-hover"
                : "cursor-not-allowed text-gray-400"
            }`}
            title={isPublic ? "Share" : "Make category public to share"}
          />
        </button>
      </DialogTrigger>

      <DialogContent className="bg-accent dark:bg-secondary text-secondary dark:text-light sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-sora text-2xl font-bold">
            Share Category
          </DialogTitle>
          <DialogDescription className="font-inter text-sm">
            Anyone with this link will be able to view the category.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4 flex flex-col gap-4">
          <Label htmlFor="link" className="font-inter font-semibold">
            Shareable Link
          </Label>
          <div className="flex items-center gap-2">
            <Input
              id="link"
              value={fullLink}
              readOnly
              className="bg-light/50 dark:bg-secondary font-inter dark:border-primary rounded-md border"
            />
            <Button
              type="button"
              size="icon"
              variant="ghost"
              onClick={handleCopy}
              className="dark:border-primary dark:hover:bg-primary/50 border"
            >
              {copied ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>

        <DialogFooter className="font-inter text-md mt-6 font-semibold">
          <DialogClose asChild>
            <Button
              variant="outline"
              className="bg-light/50 hover:accent/50 dark:border-primary dark:bg-secondary dark:hover:bg-primary/50 cursor-pointer border-2"
            >
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ShareModal;
