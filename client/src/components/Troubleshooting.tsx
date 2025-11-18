import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const troubleshootingItems = [
  {
    question: "Extension not loading or showing errors",
    answer: "Make sure you've selected the correct folder containing the manifest.json file. The folder should be the extracted 'Meme-studio-meme' directory, not the parent folder or the ZIP file itself. If errors persist, try removing and re-adding the extension.",
  },
  {
    question: "Developer mode toggle is grayed out",
    answer: "This usually happens if your Chrome browser is managed by an organization (school or workplace). Contact your IT administrator to request permission to enable Developer mode, or use Chrome on a personal device.",
  },
  {
    question: "Load unpacked button is missing",
    answer: "The 'Load unpacked' button only appears when Developer mode is enabled. Make sure the toggle in the top-right corner of the Extensions page is turned ON. If you still don't see it, try refreshing the page or restarting Chrome.",
  },
  {
    question: "Extension appears but doesn't work",
    answer: "First, try removing and re-installing the extension. Make sure you're using the latest version downloaded from the official GitHub repository. Check the browser console (F12) for any error messages that might indicate what's wrong.",
  },
  {
    question: "Extension disappeared after restarting Chrome",
    answer: "This happens when the extension folder is moved or deleted. Make sure the extracted folder remains in its original location. If you need to move it, remove the extension first, move the folder, then re-add it using 'Load unpacked'.",
  },
  {
    question: "Can't find the extension icon in the toolbar",
    answer: "Click the puzzle piece icon in Chrome's toolbar to see all extensions. Find Meme Studio in the list and click the pin icon next to it to permanently display it in your toolbar.",
  },
];

export default function Troubleshooting() {
  return (
    <section id="troubleshooting" className="py-12 md:py-16 scroll-mt-20 bg-muted/30">
      <div className="container mx-auto max-w-5xl px-6 md:px-8">
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-2">Troubleshooting</h2>
            <p className="text-muted-foreground leading-relaxed">
              Common issues and their solutions. Click on a question to see the answer.
            </p>
          </div>
          
          <Accordion type="single" collapsible className="w-full" data-testid="accordion-troubleshooting">
            {troubleshootingItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left" data-testid={`accordion-trigger-${index}`}>
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed" data-testid={`accordion-content-${index}`}>
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
