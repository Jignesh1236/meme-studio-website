import { Github, Code } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t py-12">
      <div className="container mx-auto px-6 md:px-8 max-w-7xl">
        <div className="flex flex-col gap-8">
          {/* Developer Attribution */}
          <div className="flex flex-col items-center gap-4 pb-8 border-b">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Code className="h-5 w-5" />
              <span className="text-sm font-medium">Built with ❤️ by</span>
            </div>
            <a 
              href="https://github.com/Jignesh1236/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-2xl md:text-3xl font-bold text-foreground hover:text-primary transition-colors"
            >
              Jignesh D Maru
            </a>
            <div className="flex flex-col items-center gap-2">
              <p className="text-base text-muted-foreground font-medium">
                Solo Developer
              </p>
              <p className="text-sm text-muted-foreground text-center max-w-md">
                Creator of Meme Studio - A powerful Chrome extension for meme enthusiasts
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-sm text-muted-foreground text-center md:text-left">
              <p>&copy; 2024 Meme Studio. All rights reserved.</p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 md:gap-6 items-center">
              <a 
                href="https://github.com/Jignesh1236/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
              >
                <Github className="h-5 w-5" />
                <span className="text-sm">GitHub Profile</span>
              </a>
              <a 
                href="https://github.com/Jignesh1236/meme-studio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Extension Repo
              </a>
              <a 
                href="https://github.com/Jignesh1236/meme-studio/issues" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Report Issues
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}