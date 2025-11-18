import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import FeatureCard from "@/components/FeatureCard";
import { Search, TrendingUp, Upload, Type, Sparkles, Download } from "lucide-react";
import { SiGooglechrome } from "react-icons/si";
import { Link } from "wouter";

import searchImg from '@assets/image_1763396346008.png';
import trendingImg from '@assets/image_1763396368126.png';
import createImg from '@assets/image_1763396428855.png';
import textImg from '@assets/image_1763396491105.png';
import filtersImg from '@assets/image_1763396698299.png';

const features = [
  {
    icon: Search,
    title: "Search Meme Templates",
    description: "Quickly find the perfect meme template by searching with keywords. Access thousands of popular meme formats including Hindi memes and international favorites.",
    imagePath: searchImg,
  },
  {
    icon: TrendingUp,
    title: "Browse Trending Memes",
    description: "Explore trending memes from any subreddit by simply entering the subreddit name. Connect to Reddit's vast meme library or use other API sources to stay updated with the latest viral content.",
    imagePath: trendingImg,
  },
  {
    icon: Upload,
    title: "Upload Your Own Images",
    description: "Create custom memes by uploading images from your device or meme folder. Easy-to-use interface makes it simple to start creating personalized content in seconds.",
    imagePath: createImg,
  },
  {
    icon: Type,
    title: "Advanced Text Editor",
    description: "Add custom text to any meme with powerful editing tools. Choose from multiple fonts, adjust size, position text anywhere with drag-and-drop, and customize appearance to match your style.",
    imagePath: textImg,
  },
  {
    icon: Sparkles,
    title: "Image Filters & Effects",
    description: "Enhance your memes with professional filters. Adjust brightness, contrast, saturation, and blur to create the perfect visual effect. Make your memes stand out with customizable image enhancements.",
    imagePath: filtersImg,
  },
];

export default function Features() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-12 md:py-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto max-w-6xl px-6 md:px-8">
            <div className="flex flex-col items-center text-center gap-6">
              <Badge variant="secondary" className="px-4 py-1.5 gap-2" data-testid="badge-extension">
                <SiGooglechrome className="h-4 w-4" />
                Chrome Extension
              </Badge>

              <h1 className="text-4xl md:text-5xl font-bold tracking-tight max-w-3xl">
                Create Amazing Memes with Powerful Editing Tools
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Meme Studio is a modern Chrome extension crafted for true meme lovers. It blends a clean, intuitive interface with powerful editing tools, making meme creation fun and effortless.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
                <Button size="lg" asChild data-testid="button-download">
                  <a 
                    href="https://github.com/Jignesh1236/Meme-studio/releases/tag/meme" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="gap-2"
                  >
                    <Download className="h-5 w-5" />
                    Download Extension
                  </a>
                </Button>
                <Link href="/install">
                  <Button size="lg" variant="outline" className="gap-2" data-testid="button-installation-guide">
                    Installation Guide
                  </Button>
                </Link>
                <Button size="lg" variant="outline" asChild data-testid="button-view-github">
                  <a 
                    href="https://github.com/Jignesh1236/Meme-studio" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="gap-2"
                  >
                    <SiGooglechrome className="h-5 w-5" />
                    View on GitHub
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto max-w-6xl px-6 md:px-8">
            <div className="flex flex-col gap-8 mb-12">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-3">Key Features</h2>
                <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  Everything you need to create, customize, and share viral-worthy memes
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container mx-auto max-w-4xl px-6 md:px-8">
            <div className="flex flex-col items-center text-center gap-6">
              <h2 className="text-2xl md:text-3xl font-semibold">
                Ready to Start Creating?
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-xl">
                Install Meme Studio in just a few minutes and join thousands of meme creators using powerful tools to make their content stand out.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button size="lg" asChild data-testid="button-download-now">
                  <a 
                    href="https://github.com/Jignesh1236/Meme-studio/releases/tag/meme" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="gap-2"
                  >
                    <Download className="h-5 w-5" />
                    Download Now
                  </a>
                </Button>
                <Link href="/install">
                  <Button size="lg" variant="outline" className="gap-2" data-testid="button-view-guide">
                    View Installation Guide
                  </Button>
                </Link>
              </div>
            </div>
            <div className="text-center mt-8 text-sm text-muted-foreground">
              Developed by Jignesh D Maru.
              <a href="https://github.com/Jignesh1236/" target="_blank" rel="noopener noreferrer" className="hover:underline ml-1">
                GitHub Profile
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}