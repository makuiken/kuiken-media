type ImageFormat = "webp" | "avif" | "jpeg";

interface ImageOptions {
  width?: number;
  height?: number;
  quality?: number;
  format?: string;
}

export const transformImageUrl = (url: string, options: ImageOptions) => {
  try {
    const imageUrl = new URL(url);

    // Set default options
    const {
      width = null,
      height = null,
      quality = 75,
      format = "webp",
    } = options;

    // Add transformation parameters
    if (width) imageUrl.searchParams.set("width", width.toString());
    if (height) imageUrl.searchParams.set("height", height.toString());
    imageUrl.searchParams.set("quality", quality.toString());
    imageUrl.searchParams.set("format", format);

    return imageUrl.toString();
  } catch (error) {
    console.error("Error transforming image URL:", error);
    return url;
  }
};

export const getImageDimensions = async (
  url: string
): Promise<{ width: number; height: number }> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      resolve({
        width: img.naturalWidth,
        height: img.naturalHeight,
      });
    };
    img.onerror = reject;
    img.src = url;
  });
};
