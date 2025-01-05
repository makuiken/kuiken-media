import { useState, useEffect } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  sizes = "100vw",
}: OptimizedImageProps) => {
  const [loading, setLoading] = useState(!priority);
  const [error, setError] = useState(false);

  // Generate srcSet for responsive images
  const generateSrcSet = () => {
    const widths = [640, 750, 828, 1080, 1200, 1920, 2048];
    return widths
      .map((w) => {
        const imageUrl = new URL(src);
        imageUrl.searchParams.set("width", w.toString());
        imageUrl.searchParams.set("quality", "75");
        return `${imageUrl.toString()} ${w}w`;
      })
      .join(", ");
  };

  useEffect(() => {
    if (priority) {
      const img = new Image();
      img.src = src;
      img.onload = () => setLoading(false);
      img.onerror = () => setError(true);
    }
  }, [src, priority]);

  if (error) {
    return (
      <div
        className="bg-gray-200 animate-pulse"
        style={{ width, height }}
      />
    );
  }

  return (
    <div
      className={`relative ${className}`}
      style={{ aspectRatio: width && height ? width / height : "auto" }}
    >
      {loading && (
        <div
          className="absolute inset-0 bg-gray-200 animate-pulse"
          aria-hidden="true"
        />
      )}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        onLoad={() => setLoading(false)}
        onError={() => setError(true)}
        sizes={sizes}
        srcSet={generateSrcSet()}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
      />
    </div>
  );
};

export default OptimizedImage;
