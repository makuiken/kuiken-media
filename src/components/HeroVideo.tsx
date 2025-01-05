import { useEffect, useRef, useState } from "react";
import { contentfulClient } from "../lib/contentfulClient";

interface HeroVideoData {
  title: string;
  mp4Ref: string;
  webmRef?: string;
  posterImage?: string;
}

const HeroVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoData, setVideoData] = useState<HeroVideoData | null>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const fetchHeroVideo = async () => {
      try {
        const response = await contentfulClient.getEntries({
          content_type: "heroVideo",
          limit: 1,
          select: [
            "fields.title",
            "fields.mp4Ref",
            "fields.webmRef",
            "fields.posterImage",
          ],
        });

        if (response.items.length > 0) {
          const fields = response.items[0].fields as HeroVideoData;
          setVideoData(fields);
        }
      } catch (error) {
        console.error("Error fetching hero video:", error);
      }
    };

    fetchHeroVideo();
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
      {!isVideoLoaded && videoData?.posterImage && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${videoData.posterImage})`,
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
        poster={videoData?.posterImage}
        className={`absolute inset-0 w-full h-full object-cover ${
          isVideoLoaded ? "opacity-100" : "opacity-0"
        } transition-opacity duration-500`}
      >
        {videoData?.webmRef && (
          <source
            src={videoData.webmRef}
            type="video/webm"
          />
        )}
        {videoData?.mp4Ref && (
          <source
            src={videoData.mp4Ref}
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
