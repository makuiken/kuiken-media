import { useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Play } from 'lucide-react';

const PhotoGallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Example content - replace with your actual content
  const content = [
    {
      type: 'video',
      url: 'https://www.youtube.com/watch?v=example1',
      thumbnail: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81',
      title: 'Studio Setup Video',
    },
    {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
      title: 'Production Shot',
      orientation: 'vertical'
    },
    {
      type: 'video',
      url: 'https://www.youtube.com/watch?v=example2',
      thumbnail: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334',
      title: 'Post Production Tutorial',
    },
    {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952',
      title: 'Live Broadcasting',
      orientation: 'horizontal'
    },
  ];

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
            {content.map((item, index) => (
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
                      <img
                        src={item.type === 'video' ? item.thumbnail : item.url}
                        alt={item.title}
                        className={`w-full h-full transition-transform duration-500 hover:scale-110 ${
                          item.type === 'image' && item.orientation === 'vertical' ? 'object-contain' : 'object-cover'
                        }`}
                      />
                      <div
                        className={`absolute inset-0 bg-black/50 flex flex-col items-center justify-center gap-4 transition-opacity duration-300 ${
                          hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                        }`}
                      >
                        <h3 className="text-white text-2xl font-bold text-center px-4">{item.title}</h3>
                        {item.type === 'video' && (
                          <Play className="w-12 h-12 text-white" />
                        )}
                      </div>
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
          <div className="flex justify-center gap-4 mt-6">
            <CarouselPrevious className="static translate-y-0 hover:bg-white/20 transition-colors duration-200" />
            <CarouselNext className="static translate-y-0 hover:bg-white/20 transition-colors duration-200" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default PhotoGallery;