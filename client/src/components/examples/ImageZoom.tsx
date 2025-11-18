import ImageZoom from '../ImageZoom';
import exampleImage from '@assets/image_1763396346008.png';

export default function ImageZoomExample() {
  return (
    <div className="p-8">
      <ImageZoom
        src={exampleImage}
        alt="Example screenshot"
        className="w-full h-auto"
        containerClassName="max-w-sm overflow-hidden rounded-lg border"
      />
    </div>
  );
}
