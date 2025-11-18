import InstallationStep from '../InstallationStep';
import exampleImage from '@assets/image_1763387579547_1763395919144.png';

export default function InstallationStepExample() {
  return (
    <div className="p-8">
      <InstallationStep
        stepNumber={1}
        title="Download the Extension Files"
        description="Navigate to the Meme Studio GitHub repository and download the latest release as a ZIP file."
        imagePath={exampleImage}
        imageAlt="GitHub repository download page"
        caption="Click on the 'Source code (zip)' link to download"
        tip="Make sure to download from the official repository to ensure you get the latest stable version."
      />
    </div>
  );
}
