
import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ZoomIn } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface ImageZoomProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  isOpen?: boolean;
  onClose?: () => void;
  onClick?: () => void;
}

export default function ImageZoom({ 
  src, 
  alt, 
  className, 
  containerClassName,
  isOpen: externalIsOpen,
  onClose,
  onClick
}: ImageZoomProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  
  const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;
  const handleClose = onClose || (() => setInternalIsOpen(false));
  const handleClick = onClick || (() => setInternalIsOpen(true));

  // If being used as a controlled dialog only, don't render the clickable image
  if (externalIsOpen !== undefined && onClick === undefined) {
    return (
      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 overflow-hidden">
          <VisuallyHidden>
            <DialogTitle>{alt}</DialogTitle>
          </VisuallyHidden>
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <img 
              src={src} 
              alt={alt}
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <>
      <div 
        className={`relative group cursor-pointer ${containerClassName || ''}`}
        onClick={handleClick}
      >
        <img 
          src={src} 
          alt={alt}
          className={className}
        />
        <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg">
          <div className="bg-primary text-primary-foreground rounded-full p-3">
            <ZoomIn className="h-6 w-6" />
          </div>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 overflow-hidden">
          <VisuallyHidden>
            <DialogTitle>{alt}</DialogTitle>
          </VisuallyHidden>
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <img 
              src={src} 
              alt={alt}
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
