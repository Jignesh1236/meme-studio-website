import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function SuccessBox() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto max-w-5xl px-6 md:px-8">
        <Card className="p-8 md:p-12 border-2 border-primary/20 bg-primary/5" data-testid="card-success">
          <div className="flex flex-col items-center text-center gap-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <CheckCircle2 className="h-10 w-10 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-3">
                Installation Complete!
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed max-w-xl mx-auto">
                Meme Studio has been successfully installed. The extension should now appear in your Chrome toolbar. You're ready to start creating amazing memes!
              </p>
            </div>
            <Button size="lg" className="gap-2" asChild data-testid="button-back-features">
              <Link href="/">
                <ArrowLeft className="h-5 w-5" />
                Back to Features
              </Link>
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}
