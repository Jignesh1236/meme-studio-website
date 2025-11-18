import { Badge } from "@/components/ui/badge";
import { Clock, Chrome } from "lucide-react";
import { SiGooglechrome } from "react-icons/si";

export default function Hero() {
  return (
    <section className="py-12 md:py-16 lg:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl">
        <div className="text-center space-y-4 md:space-y-6">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Meme Studio
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto px-4">
            Create amazing memes with our powerful Chrome extension
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 md:gap-4 pt-4 px-4">
            <a href="/install" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Get Started
              </button>
            </a>
            <a href="https://github.com/Jignesh1236/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-6 py-3 border border-border rounded-lg font-semibold hover:bg-accent transition-colors">
                View Developer
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}