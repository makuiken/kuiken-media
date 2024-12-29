import { useState, useEffect } from 'react';
import { contentfulClient } from '../lib/contentfulClient.js'; 
// ^ Adjust import path as needed

import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';

const PhotoGallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [galleryItems, setGalleryItems] = useState<any[]>([]);

  useEffect(() => {
    // Fetch entries from the 'imageGallery' content type
    contentfulClient
      .getEntries({ content_type: 'imageGallery' })
      .then((response) => {
        const items = response.items.map((entry: any) => {
          const { title, type, url, thumbnail, orientation } = entry.fields;
          return {
            title,
            type,        // "photo" or "video"
            url,         // direct link (image or YouTube)
            thumbnail,   // for video only (optional for photos)
            orientation, // "horizontal" or "vertical"
          };
        });
        setGalleryItems(items);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="relative">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {galleryItems.map((item, index) => (
              <CarouselItem 
                key={index} 
                className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3"
              >
                <Card className="border-0">
                  <CardContent className="p-0">
                    <div
                      className="relative overflow-hidden rounded-lg aspect-[3/4]"
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      {/* If it's a video, show the thumbnail; otherwise show the image's url */}
                      <img
                        src={item.type === 'video' ? item.thumbnail : item.url}
                        alt={item.title}
                        loading="lazy"
                        className={`w-full h-full transition-transform duration-500 hover:scale-110 ${
                          item.type === 'photo' && item.orientation === 'vertical'
                            ? 'object-contain'
                            : 'object-cover'
                        }`}
                      />
                      <div
                        className={`absolute inset-0 bg-black/50 flex flex-col items-center justify-center gap-4 transition-opacity duration-300 ${
                          hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                        }`}
                      >
                        <h3 className="text-white text-2xl font-bold text-center px-4">
                          {item.title}
                        </h3>
                        {item.type === 'video' && (
                          <Play className="w-12 h-12 text-white" />
                        )}
                      </div>
                      {/* Clickable overlay if it’s a video (YouTube link or similar) */}
                      {item.type === 'video' && (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute inset-0"
                          aria-label={`Watch ${item.title}`}
                        />
                      )}
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-8 mt-8">
            <CarouselPrevious className="relative inset-0 translate-y-0 h-10 w-10 rounded-full border-2 border-gold bg-black/20 hover:bg-gold hover:text-black transition-all duration-300">
              <ChevronLeft className="h-6 w-6" />
            </CarouselPrevious>
            <CarouselNext className="relative inset-0 translate-y-0 h-10 w-10 rounded-full border-2 border-gold bg-black/20 hover:bg-gold hover:text-black transition-all duration-300">
              <ChevronRight className="h-6 w-6" />
            </CarouselNext>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default PhotoGallery;