import { useEffect, useState } from 'react';
import { contentfulClient } from '../lib/contentfulClient';

interface HeroVideoData {
  title: string;
  mp4Ref: string;
  webmRef?: string;
}

const HeroVideo = () => {
  const [videoData, setVideoData] = useState<HeroVideoData | null>(null);

  useEffect(() => {
    const fetchHeroVideo = async () => {
      try {
        const response = await contentfulClient.getEntries({
          content_type: 'heroVideo',
          limit: 1,
        });

        if (response.items.length > 0) {
          const fields = response.items[0].fields as HeroVideoData;
          setVideoData(fields);
        }
      } catch (error) {
        console.error('Error fetching hero video:', error);
      }
    };

    fetchHeroVideo();
  }, []);

  return (
    <>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        {videoData?.webmRef && (
          <source src={videoData.webmRef} type="video/webm" />
        )}
        {videoData?.mp4Ref && (
          <source src={videoData.mp4Ref} type="video/mp4" />
        )}
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/50" />
    </>
  );
};

export default HeroVideo; 