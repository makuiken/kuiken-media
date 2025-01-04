import { Instagram, Youtube, Linkedin } from "lucide-react";
import { TiktokIcon, XIcon } from "./CustomIcons";

interface SocialLinksProps {
  className?: string;
}

const SocialLinks = ({ className }: SocialLinksProps) => {
  const socials = [
    {
      icon: <Instagram size={20} />,
      href: "https://www.instagram.com/kuiken_media/",
      label: "Instagram",
    },
    {
      icon: <XIcon size={20} />,
      href: "https://x.com/kuiken_media",
      label: "X",
    },
    {
      icon: <Youtube size={20} />,
      href: "https://www.youtube.com/channel/UCcMS--UTQ2ocsltx3NYYzrA",
      label: "Youtube",
    },
    {
      icon: <TiktokIcon size={20} />,
      href: "https://www.tiktok.com/Kuiken_media",
      label: "TikTok",
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/in/caleb-kuiken-a83b59237/",
      label: "LinkedIn",
    },
  ];

  return (
    <div
      className={`fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-6 ${className}`}
    >
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          className="text-gray-400 hover:text-white transition-colors"
          aria-label={social.label}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
