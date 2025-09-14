import Image from "next/image";

interface Logo {
  name: string;
  image: string;
}

interface EsgCommitmentProps {
  title: string;
  subtitle: string;
  certificationTitle: string;
  certificationDescription: string;
  certificationImage: string;
  logos: Logo[];
  primaryColor: string;
}

export default function EsgCommitment({
  title,
  subtitle,
  certificationTitle,
  certificationDescription,
  certificationImage,
  logos,
  primaryColor,
}: EsgCommitmentProps) {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl text-gray-600 mb-2">{title}</h3>
              <h2 className="text-2xl lg:text-4xl font-bold">
                Seu melhor aliado para atingir suas{" "}
                <span style={{ color: primaryColor }}>metas ESG</span>
              </h2>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            {/* EPA Logo */}
            <div className="text-center">
              <Image
                src="/img/2560px-EPA_logo.svg.png"
                alt="EPA Logo"
                width={101}
                height={31}
                className="mx-auto mb-2"
              />
              <p className="text-gray-600 text-sm">
                Scope 3 Emissions Planning and Reporting
              </p>
            </div>

            {/* Certification Logos */}
            <div className="grid grid-cols-3 gap-4 items-center">
              {logos.slice(1, 4).map((logo, index) => (
                <div key={index} className="flex justify-center">
                  <Image
                    src={logo.image}
                    alt={logo.name}
                    width={90}
                    height={60}
                    className="max-w-full h-auto object-contain"
                  />
                </div>
              ))}
            </div>

            {/* EcoVadis Certification */}
            <div className="flex items-start gap-4">
              <Image
                src={certificationImage}
                alt="EcoVadis Certification"
                width={143}
                height={144}
                className="flex-shrink-0"
              />
              <div>
                <h4
                  className="text-lg font-bold mb-2"
                  style={{ color: primaryColor }}
                >
                  {certificationTitle}
                </h4>
                <p className="text-gray-600">{certificationDescription}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
