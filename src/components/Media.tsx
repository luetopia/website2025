import React from 'react';
import { Video, PlayCircle } from 'lucide-react';

interface MediaItem {
  id: number;
  title: string;
  description: string;
  youtubeId: string;
  date: string;
}

const mediaItems: MediaItem[] = [
  {
    id: 1,
    title: "Lecture: Global History from the Margins",
    description: "A discussion on the importance of peripheral perspectives in global historical narratives.",
    youtubeId: "your-youtube-id-1",
    date: "2024"
  },
  // Add more media items as needed
];

const MediaItem: React.FC<{ item: MediaItem }> = ({ item }) => {
  return (
    <div className="mb-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
      <div className="aspect-w-16 aspect-h-9 relative">
        <iframe
          src={`https://www.youtube.com/embed/${item.youtubeId}`}
          title={item.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-[300px]"
        ></iframe>
      </div>
      <div className="p-6">
        <h3 className="font-serif text-xl text-gray-800 mb-2">{item.title}</h3>
        <p className="text-gray-600 mb-2">{item.description}</p>
        <p className="text-sm text-blue-900">{item.date}</p>
      </div>
    </div>
  );
};

const Media: React.FC = () => {
  return (
    <section id="media" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Video className="w-8 h-8 text-blue-900 mr-3" />
            <h2 className="font-serif text-3xl md:text-4xl text-blue-900">Media</h2>
          </div>
          <p className="max-w-3xl mx-auto text-gray-600">
            Watch lectures, interviews, and other media content related to my research and teaching.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {mediaItems.map(item => (
            <MediaItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Media;