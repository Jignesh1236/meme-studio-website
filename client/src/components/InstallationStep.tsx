import { Card } from "@/components/ui/card";
import { InfoIcon } from "lucide-react";
import ImageZoom from "./ImageZoom";
import { useState } from "react";

interface InstallationStepProps {
  stepNumber: number;
  title: string;
  description: string;
  imagePath: string;
  imageAlt: string;
  caption?: string;
  tip?: string;
}

export default function InstallationStep({
  stepNumber,
  title,
  description,
  imagePath,
  imageAlt,
  caption,
  tip,
}: InstallationStepProps) {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <div className="flex flex-col gap-6" data-testid={`step-${stepNumber}`}>
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 md:h-14 md:w-14 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <span className="text-xl md:text-2xl font-bold">{stepNumber}</span>
        </div>
        <div className="flex-1 pt-2">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-base leading-relaxed text-muted-foreground">{description}</p>
        </div>
      </div>

      <div className="ml-0 md:ml-16 flex justify-center">
        <ImageZoom
          src={imagePath}
          alt={imageAlt}
          className="w-full h-auto"
          containerClassName="max-w-md overflow-hidden rounded-lg border transition-transform duration-200"
          onClick={() => setIsZoomed(true)}
        />
      </div>
      {caption && (
        <p className="mt-2 text-sm text-muted-foreground text-center ml-0 md:ml-16">{caption}</p>
      )}

      {tip && (
        <div className="ml-0 md:ml-16">
          <div className="flex gap-3 rounded-r-lg border-l-4 border-l-primary bg-primary/5 p-4">
            <InfoIcon className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium mb-1">Pro Tip</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{tip}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}