# Meme Studio Documentation Website

## Project Overview
A comprehensive documentation website for Meme Studio, a Chrome extension for creating memes. The site features two main pages:
1. **Features Page** - Showcases the key capabilities of Meme Studio
2. **Installation Page** - Step-by-step guide for installing the Chrome extension

## Current State
- ✅ Fully responsive documentation site with modern design
- ✅ Two-page navigation structure (Features + Installation)
- ✅ Professional UI using shadcn components and Tailwind CSS
- ✅ All 12 installation screenshots integrated
- ✅ 5 feature screenshots with descriptions
- ✅ Interactive navigation with active states
- ✅ Troubleshooting accordion with common issues
- ✅ Mobile-friendly responsive design

## Project Structure

### Pages
- `/` - Features page highlighting Meme Studio's capabilities
- `/install` - Installation guide with step-by-step instructions

### Key Features Documented
1. **Search Meme Templates** - Keyword search with Hindi meme support
2. **Browse Trending Memes** - Reddit integration for subreddit meme browsing
3. **Upload Your Own Images** - Custom image upload from device
4. **Advanced Text Editor** - Font customization, positioning, and styling
5. **Image Filters & Effects** - Brightness, contrast, saturation, and blur controls

### Components
- `Header.tsx` - Navigation header with active page highlighting
- `Footer.tsx` - Site footer with GitHub link
- `Hero.tsx` - Hero section for installation page
- `Prerequisites.tsx` - Requirements before installation
- `InstallationSteps.tsx` - 12-step installation walkthrough
- `InstallationStep.tsx` - Reusable step component
- `SuccessBox.tsx` - Installation completion message
- `Troubleshooting.tsx` - FAQ accordion
- `FeatureCard.tsx` - Reusable feature showcase card

### Tech Stack
- React with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- shadcn/ui component library
- Wouter for client-side routing
- Express backend (minimal, serves static assets)

## Design Guidelines
Following the design guidelines in `design_guidelines.md`:
- Clean documentation-focused design inspired by Stripe Docs and GitHub Docs
- Inter font for body text, JetBrains Mono for code
- Purple primary color (#7c3aed / hsl(262 83% 58%))
- Generous spacing and clear visual hierarchy
- Sticky header for easy navigation
- Smooth scroll behavior between sections

## Recent Changes (November 17, 2025)
- Created two-page structure separating features from installation
- Added all feature screenshots from the extension
- Implemented navigation with active state highlighting
- Updated routing to support multi-page navigation
- Fixed nested anchor tag issues in navigation
- **Added dark/light/system theme toggle** with persistent storage
- **Implemented click-to-zoom functionality** for all screenshots
- Updated image sizes for better vertical image display
- Added theme toggle dropdown in header with Sun/Moon/Monitor icons
- Integrated all GitHub links (repository, releases, issues)

## Features
- 🌓 **Theme Support** - Dark, Light, and System theme modes with toggle in header
- 🔍 **Image Zoom** - Click any screenshot to view full-size in modal
- 📱 **Responsive Design** - Optimized layouts for mobile and desktop
- ⚡ **Fast Navigation** - Client-side routing with active state highlighting
- 🎨 **Modern UI** - Purple primary color with shadcn components

## Future Enhancements
- Search functionality across documentation
- Video tutorial integration
- Additional pages for keyboard shortcuts and advanced features
- FAQ section expansion
