import { useState, useEffect } from "react";
import { contentfulClient } from "../lib/contentfulClient.js";
import { motion } from "motion/react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

interface GalleryItem {
  title: string;
  type: "photo" | "video";
  imageUrl: string;
  youtubeUrl?: string;
  thumbnailUrl?: string;
  orientation: "vertical" | "horizontal";
}

const PhotoGallery = () => {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [api, setApi] = useState<CarouselApi>();
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const plugin = Autoplay({ delay: 3000 });

  useEffect(() => {
    if (isVisible) {
      contentfulClient
        .getEntries({ content_type: "imageGallery" })
        .then((response) => {
          const items = response.items.map((entry: any) => {
            const { title, type, image, youtubeUrl, thumbnail, orientation } =
              entry.fields;

            const imageUrl = image?.fields?.file?.url
              ? `https:${image.fields.file.url}`
              : "";

            const thumbnailUrl = thumbnail?.fields?.file?.url
              ? `https:${thumbnail.fields.file.url}`
              : "";

            return {
              title,
              type,
              imageUrl,
              youtubeUrl,
              thumbnailUrl,
              orientation,
            };
          });
          setGalleryItems(items);
        })
        .catch((err) => {
          console.error("Error fetching imageGallery entries:", err);
        });
    }
  }, [isVisible]);

  return (
    <div
      ref={ref}
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[plugin]}
        setApi={setApi}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {galleryItems.map((item, index) => {
            const isVideo = item.type === "video";
            const displayUrl = isVideo
              ? item.thumbnailUrl || item.imageUrl || "/placeholder-video.jpg"
              : item.imageUrl;

            return (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="border-0">
                    <CardContent className="p-0">
                      <div
                        className="relative group"
                        onMouseEnter={() => {
                          setHoveredIndex(index);
                          plugin?.stop();
                        }}
                        onMouseLeave={() => {
                          setHoveredIndex(null);
                          plugin?.play();
                        }}
                      >
                        {/* Gradient border overlay */}
                        <div className="absolute -inset-[1px] bg-gradient-to-br from-sky-500/50 via-zinc-800/50 to-amber-500/50 rounded-lg opacity-70 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Image container */}
                        <div className="relative rounded-lg overflow-hidden aspect-[3/4]">
                          <div className="absolute inset-[1px] bg-zinc-900 rounded-lg overflow-hidden">
                            <img
                              src={displayUrl}
                              alt={item.title}
                              loading={index < 2 ? "eager" : "lazy"}
                              className="w-full h-full object-cover transition-opacity duration-300"
                            />

                            {/* Content overlay */}
                            <div
                              className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-300 flex flex-col items-center justify-center gap-4 ${
                                hoveredIndex === index
                                  ? "opacity-100"
                                  : "opacity-0"
                              }`}
                            >
                              <h3 className="text-white text-2xl font-bold text-center px-4 transform transition-transform duration-300 translate-y-0 group-hover:-translate-y-2">
                                {item.title}
                              </h3>
                              {isVideo && (
                                <Play className="w-12 h-12 text-white transform transition-transform duration-300 translate-y-0 group-hover:-translate-y-2" />
                              )}
                            </div>

                            {/* Clickable overlay for videos */}
                            {isVideo && item.youtubeUrl && (
                              <a
                                href={item.youtubeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute inset-0"
                                aria-label={`Watch ${item.title}`}
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            );
          })}
        </CarouselContent>

        {/* Carousel Navigation */}
        <div className="flex justify-center gap-8 mt-8">
          <CarouselPrevious
            className="relative inset-0 translate-y-0 h-10 w-10 rounded-full
            bg-gradient-to-r from-amber-500 to-amber-400
            text-black transition-all duration-300 
            hover:from-amber-400 hover:to-amber-300
            transform hover:scale-105 hover:shadow-lg 
            hover:shadow-amber-500/20"
          >
            <ChevronLeft className="h-6 w-6" />
          </CarouselPrevious>
          <CarouselNext
            className="relative inset-0 translate-y-0 h-10 w-10 rounded-full
            bg-gradient-to-r from-amber-500 to-amber-400
            text-black transition-all duration-300 
            hover:from-amber-400 hover:to-amber-300
            transform hover:scale-105 hover:shadow-lg 
            hover:shadow-amber-500/20"
          >
            <ChevronRight className="h-6 w-6" />
          </CarouselNext>
        </div>
      </Carousel>
    </div>
  );
};

export default PhotoGallery;
