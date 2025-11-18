import FeatureCard from '../FeatureCard';
import { Search } from 'lucide-react';

export default function FeatureCardExample() {
  return (
    <div className="p-8">
      <FeatureCard
        icon={Search}
        title="Search Memes"
        description="Search through thousands of popular meme templates with keyword search."
      />
    </div>
  );
}
