import React from 'react';
import { BookOpen, FileText, BookMarked } from 'lucide-react';

interface Publication {
  id: number;
  title: string;
  journal?: string;
  publisher?: string;
  year: number;
  coauthors?: string;
  type: 'book' | 'article' | 'chapter';
  url?: string;
  coverImage?: string;
}

const publications: Publication[] = [
  {
    id: 1,
    title: "Staatsbildung und Legitimation im Himalaya: Eine Verflechtungsgeschichte des Gorkhā-Staates im überlangen 19. Jahrhundert",
    publisher: "Springer",
    year: 2024,
    type: 'book',
    url: "https://link.springer.com/book/10.1007/978-3-658-44422-8",
    coverImage: "/images/CoverBookWebsite.webp"
  },
  {
    id: 2,
    title: "Review of: Bajracharya, Manik (Hrsg.): Slavery and Unfree Labour in Nepal. Documents from the 18th to Early 20th Century",
    journal: "H-Soz-Kult",
    year: 2023,
    type: 'article',
    url: "https://www.hsozkult.de/publicationreview/id/reb-133408",
    coverImage: "/images/coverreviewhsozkult.png"
  },
  {
    id: 3,
    title: "Review of Hindu Kingship Rituals: Power Relation and Historical Revolution by Nawaraj Chaulagain",
    journal: "HIMALAYA - The Journal of the Association for Nepal and Himalayan Studies, 42(1), p. 169-172",
    year: 2023,
    type: 'article',
    url: "https://journals.ed.ac.uk/himalaya/article/view/8857",
    coverImage: "/images/coverHIMALAYA421.webp"
  },
  {
    id: 4,
    title: "Of Education, Humanism and Civilizational Progress: An Explorative Study of Jaya Prithvi Bahadur Singh s Life and Work from the Perspective of Global Intellectual History",
    journal: "HIMALAYA - The Journal of the Association for Nepal and Himalayan Studies, 40(1), p. 59-78",
    year: 2021,
    type: 'article',
    url: "https://journals.ed.ac.uk/himalaya/article/view/6591",
    coverImage: "/images/coverHIMALAYA401.webp"
  },
  {
    id: 5,
    title: "»Globaler Süden« in der Wissenschaft",
    journal: "Forum Wissenschaft 38 (3), p. 4-7",
    year: 2021,
    type: 'article',
    url: "https://www.bdwi.de/forum/archiv/archiv/11020962.html",
    coverImage: "/images/ForumWissenschaftCover.jpg"
  },
  {
    id: 6,
    title: "Grenzen wissenschaftlicher Erkenntnis – Wissensproduktion und Wissensdiskurse um Ethnizität in Nepal",
    journal: "Südasien – Chronik / South Asia – Chronicle 3, p. 242–270",
    year: 2021,
    type: 'article',
    url: "https://edoc.hu-berlin.de/server/api/core/bitstreams/0731d0cd-46eb-438a-975e-9a8fdf1d6bb1/content",
    coverImage: "/images/SACover.png"
  }
];

const PublicationItem: React.FC<{ publication: Publication }> = ({ publication }) => {
  const { title, journal, publisher, year, coauthors, type, url, coverImage } = publication;
  
  const TypeIcon = type === 'book' ? BookOpen : type === 'chapter' ? BookMarked : FileText;

  return (
    <div className="mb-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {coverImage && (
          <div className="md:w-1/3">
            <img 
              src={coverImage} 
              alt={title}
              className="w-full h-48 md:h-full object-cover"
            />
          </div>
        )}
        <div className={`p-6 ${coverImage ? 'md:w-2/3' : 'w-full'}`}>
          <div className="flex items-center mb-3">
            <TypeIcon className="w-5 h-5 text-blue-900 mr-2" />
            <span className="text-sm text-blue-900 font-medium">{type.charAt(0).toUpperCase() + type.slice(1)}</span>
          </div>
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-blue-900 transition-colors"
          >
            <h3 className="text-lg font-medium mb-2">{title}</h3>
          </a>
          <p className="text-gray-700">
            {type === 'book' ? (
              <>{publisher}, {year}</>
            ) : (
              <>{journal}, {year}</>
            )}
            {coauthors && <span> {coauthors}</span>}
          </p>
        </div>
      </div>
    </div>
  );
};

const Publications: React.FC = () => {
  return (
    <section id="publications" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <BookOpen className="w-8 h-8 text-blue-900 mr-3" />
            <h2 className="font-serif text-3xl md:text-4xl text-blue-900">Publications</h2>
          </div>
          <p className="max-w-3xl mx-auto text-gray-600">
            A selection of my recent academic publications in the field of European intellectual history.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {publications.map(publication => (
            <PublicationItem key={publication.id} publication={publication} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;