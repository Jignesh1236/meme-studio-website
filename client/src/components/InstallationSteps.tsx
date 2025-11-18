import InstallationStep from "./InstallationStep";
import img1 from '@assets/image_1763387579547_1763395919144.png';
import img2 from '@assets/image_1763387642627_1763395919144.png';
import img3 from '@assets/image_1763387651842_1763395919144.png';
import img4 from '@assets/image_1763387665892_1763395919144.png';
import img5 from '@assets/image_1763387673747_1763395919143.png';
import img6 from '@assets/image_1763387682803_1763395919145.png';
import img7 from '@assets/image_1763387710123_1763395919145.png';
import img8 from '@assets/image_1763387716275_1763395919145.png';
import img9 from '@assets/image_1763387725019_1763395919142.png';
import img10 from '@assets/image_1763387734771_1763395919143.png';
import img11 from '@assets/image_1763387741867_1763395919143.png';
import img12 from '@assets/image_1763387748195_1763395919143.png';

const steps = [
  {
    stepNumber: 1,
    title: "Visit the GitHub Release Page",
    description: "Navigate to the official Meme Studio release page at github.com/Jignesh1236/Meme-studio/releases/tag/meme. Scroll down to the Assets section at the bottom of the page.",
    imagePath: img1,
    imageAlt: "GitHub release page showing Assets section",
    caption: "The Assets section contains downloadable files",
  },
  {
    stepNumber: 2,
    title: "Download Source Code",
    description: "In the Assets section, click on 'Source code (zip)' to download the extension files to your computer.",
    imagePath: img2,
    imageAlt: "Downloading source code from GitHub",
    caption: "Click 'Source code (zip)' to start the download",
  },
  {
    stepNumber: 3,
    title: "Locate the Downloaded File",
    description: "Find the downloaded ZIP file in your Downloads folder. It should be named 'Meme-studio-meme.zip'.",
    imagePath: img3,
    imageAlt: "Downloaded ZIP file in Downloads folder",
    caption: "The file appears in your Downloads folder",
  },
  {
    stepNumber: 4,
    title: "Extract the ZIP Archive",
    description: "Right-click on the downloaded ZIP file and select 'Extract All...' from the context menu.",
    imagePath: img4,
    imageAlt: "Right-click menu showing Extract All option",
    caption: "Choose 'Extract All...' to unzip the files",
  },
  {
    stepNumber: 5,
    title: "Choose Extraction Location",
    description: "Select a destination folder where you want to extract the files. Click 'Extract' to complete the process.",
    imagePath: img5,
    imageAlt: "Extraction dialog showing destination path",
    caption: "Select a memorable location for the extracted folder",
    tip: "Keep the extracted folder in a permanent location. Moving it later will break the extension.",
  },
  {
    stepNumber: 6,
    title: "Verify Extracted Folder",
    description: "After extraction, you should see a new folder named 'Meme-studio-meme' containing all the extension files.",
    imagePath: img6,
    imageAlt: "Extracted folder showing extension files",
    caption: "The extracted folder contains all necessary files",
  },
  {
    stepNumber: 7,
    title: "Open Chrome Extensions Page",
    description: "Open Google Chrome, click the three-dot menu in the top-right corner, then navigate to Extensions.",
    imagePath: img7,
    imageAlt: "Chrome menu showing Extensions option",
    caption: "Navigate to Extensions through the Chrome menu",
    tip: "You can also type 'chrome://extensions' directly in the address bar.",
  },
  {
    stepNumber: 8,
    title: "Access Extension Settings",
    description: "In the Extensions submenu, click on 'Manage Extensions' to open the extensions management page.",
    imagePath: img8,
    imageAlt: "Extensions submenu with Manage Extensions option",
    caption: "Click 'Manage Extensions' to proceed",
  },
  {
    stepNumber: 9,
    title: "Enable Developer Mode",
    description: "On the Extensions page, locate the 'Developer mode' toggle in the top-right corner and turn it on.",
    imagePath: img9,
    imageAlt: "Extensions page showing Developer mode toggle",
    caption: "Toggle Developer mode to ON",
  },
  {
    stepNumber: 10,
    title: "Developer Mode Enabled",
    description: "Once enabled, you'll see new options appear including 'Load unpacked', 'Pack extension', and 'Update'.",
    imagePath: img10,
    imageAlt: "Developer mode enabled showing new buttons",
    caption: "New options appear when Developer mode is active",
  },
  {
    stepNumber: 11,
    title: "Load Unpacked Extension",
    description: "Click the 'Load unpacked' button that appeared after enabling Developer mode.",
    imagePath: img11,
    imageAlt: "Load unpacked button highlighted",
    caption: "Click 'Load unpacked' to select your extension folder",
  },
  {
    stepNumber: 12,
    title: "Select Extension Folder",
    description: "Browse to the location where you extracted the files, select the 'Meme-studio-meme' folder, and click 'Select Folder'.",
    imagePath: img12,
    imageAlt: "Folder selection dialog",
    caption: "Navigate to and select the extracted Meme Studio folder",
  },
];

export default function InstallationSteps() {
  return (
    <section className="py-12 md:py-16" id="installation">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12">
          Installation Steps
        </h2>
        <div className="space-y-8 md:space-y-12">
          {steps.map((step, index) => (
            <InstallationStep key={index} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}