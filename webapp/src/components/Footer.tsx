import Image from "next/image";

interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

interface AppStoreLink {
  name: string;
  url: string;
  image: string;
}

interface ContactInfo {
  email?: string;
  phone?: string;
  address?: string;
}

interface FooterProps {
  copyright: string;
  $bgColor?: string;
  active?: boolean;
  socialLinks?: SocialLink[];
  appStoreLinks?: AppStoreLink[];
  contactInfo?: ContactInfo;
}

export default function Footer({
  copyright,
  $bgColor,
  active,
  socialLinks = [],
  appStoreLinks = [],
  contactInfo,
}: FooterProps) {
  if (active === false) return null;

  return (
    <footer className="py-12" style={{ background: $bgColor }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          {contactInfo && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Contato
              </h3>
              {contactInfo.email && (
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 text-gray-600">
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              )}

              {contactInfo.phone && (
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 text-gray-600">
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              )}

              {contactInfo.address && (
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 text-gray-600 mt-0.5">
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-600">{contactInfo.address}</span>
                </div>
              )}
            </div>
          )}

          {/* Social Links */}
          {socialLinks.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Redes Sociais
              </h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                    aria-label={social.name}
                  >
                    <Image
                      src={social.icon}
                      alt={social.name}
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* App Store Links */}
          {appStoreLinks.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Baixe o App
              </h3>
              <div className="flex flex-col space-y-3">
                {appStoreLinks.map((app, index) => (
                  <a
                    key={index}
                    href={app.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block hover:opacity-80 transition-opacity"
                  >
                    <Image
                      src={app.image}
                      alt={app.name}
                      width={140}
                      height={42}
                      className="h-12 w-auto"
                    />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-600 text-sm">{copyright}</p>
        </div>
      </div>
    </footer>
  );
}
