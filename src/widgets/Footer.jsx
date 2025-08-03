import { Github, Instagram } from "lucide-react";
import { SiNotion } from "react-icons/si";

const Footer = () => {
  const links = [
    {
      icon: <Github />,
      href: "https://github.com/LGSZZM77",
    },
    {
      icon: <SiNotion size={22} />,
      href: "https://www.notion.so/2336a2071d5d804db92cfd0fe005b653?source=copy_link",
    },
    {
      icon: <Instagram />,
      href: "https://www.instagram.com/igyuseong2859",
    },
  ];
  return (
    <footer className="h-16 bg-bg text-text flex justify-center items-center">
      <ul className="flex gap-6 items-center">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              {link.icon}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
