import { FooterType } from "../../types/SiteData";

export default function Footer(data: FooterType) {
  return (
    <footer className="w-full bg-gray-800 text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
            {data.links.map((link, index) => (
              <a
                key={index}
                href={link.link}
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex gap-4">
            {data.socials.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-2"
                aria-label={social.platform}
              >
                {social.icon && (
                  <img
                    src={social.icon}
                    alt={social.platform}
                    className="w-5 h-5"
                  />
                )}
                <span>{social.platform}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="border-t border-gray-700 mt-6 pt-6 text-center">
          <p className="text-gray-400">{data.text}</p>
        </div>
      </div>
    </footer>
  );
}
