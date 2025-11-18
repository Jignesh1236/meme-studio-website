import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import ImageZoom from "./ImageZoom";
import { useState } from 'react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  imagePath?: string;
}

export default function FeatureCard({ icon: Icon, title, description, imagePath }: FeatureCardProps) {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <>
      <Card className="p-6 md:p-8 hover-elevate" data-testid={`card-feature-${title.toLowerCase().replace(/\s+/g, '-')}`}>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 flex flex-col gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Icon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {description}
              </p>
            </div>
          </div>
          {imagePath && (
            <ImageZoom
              src={imagePath}
              alt={`${title} feature screenshot`}
              className="w-full h-auto hover:scale-105 transition-transform duration-300"
              containerClassName="w-full md:w-72 flex-shrink-0 overflow-hidden rounded-lg border"
              isOpen={isZoomed}
              onClose={() => setIsZoomed(false)}
              onClick={() => setIsZoomed(true)}
            />
          )}
        </div>
      </Card>
    </>
  );
}