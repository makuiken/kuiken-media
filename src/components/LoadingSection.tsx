interface LoadingSectionProps {
  className?: string;
}

const LoadingSection = ({ className }: LoadingSectionProps) => {
  return (
    <div
      className={`min-h-screen flex items-center justify-center ${className}`}
    >
      {/* Loading content */}
    </div>
  );
};

export default LoadingSection;
