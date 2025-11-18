import { Card } from "@/components/ui/card";
import { Chrome, Settings } from "lucide-react";
import { SiGooglechrome } from "react-icons/si";

const prerequisites = [
  {
    icon: SiGooglechrome,
    title: "Chrome Browser",
    description: "Google Chrome version 88 or higher installed on your computer.",
  },
  {
    icon: Settings,
    title: "Developer Mode Access",
    description: "Ability to enable Developer Mode in Chrome extensions settings.",
  },
];

export default function Prerequisites() {
  return (
    <section id="prerequisites" className="py-12 md:py-16 scroll-mt-20 bg-muted/30">
      <div className="container mx-auto max-w-5xl px-6 md:px-8">
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-2">Prerequisites</h2>
            <p className="text-muted-foreground leading-relaxed">
              Before you begin, make sure you have the following:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {prerequisites.map((prereq, index) => (
              <Card key={index} className="p-6 md:p-8 hover-elevate" data-testid={`card-prerequisite-${index}`}>
                <div className="flex flex-col gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <prereq.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{prereq.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {prereq.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
