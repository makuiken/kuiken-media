import { useEffect, useRef, useState } from "react";
import { contentfulClient } from "../lib/contentfulClient";

interface HeroVideo {
  fields: {
    title: string;
    mp4Ref: string;
    webmRef?: string;
    posterImage?: {
      fields: {
        file: {
          url: string;
        };
      };
    };
  };
}

const HeroVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoData, setVideoData] = useState<HeroVideo | null>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const fetchHeroVideo = async () => {
      try {
        const response = await contentfulClient.getEntries({
          content_type: "heroVideo",
          select: [
            "fields.title",
            "fields.mp4Ref",
            "fields.webmRef",
            "fields.posterImage",
          ],
          include: 2, // Include linked assets
        });

        if (response.items.length > 0) {
          return response.items[0] as HeroVideo;
        }
        return null;
      } catch (error) {
        console.error("Error fetching hero video:", error);
        return null;
      }
    };

    fetchHeroVideo().then((data) => {
      if (data) {
        setVideoData(data);
      }
    });
  }, []);

  useEffect(() => {
    if (!videoRef.current || !videoData) return;

    const video = videoRef.current;

    video.preload = "metadata";

    const loadVideo = () => {
      if (!isVideoLoaded) {
        video.preload = "auto";
        video.load();
        setIsVideoLoaded(true);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadVideo();
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, [videoData, isVideoLoaded]);

  return (
    <>
      {!isVideoLoaded && videoData?.fields.posterImage && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(https:${videoData.fields.posterImage.fields.file.url})`,
            backgroundColor: "black",
          }}
          aria-hidden="true"
        />
      )}

      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        poster={videoData?.fields.posterImage?.fields.file.url}
        className={`absolute inset-0 w-full h-full object-cover ${
          isVideoLoaded ? "opacity-100" : "opacity-0"
        } transition-opacity duration-500`}
      >
        {videoData?.fields.webmRef && (
          <source
            src={videoData.fields.webmRef}
            type="video/webm"
          />
        )}
        {videoData?.fields.mp4Ref && (
          <source
            src={videoData.fields.mp4Ref}
            type="video/mp4"
          />
        )}
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black/50" />
    </>
  );
};

export default HeroVideo;
