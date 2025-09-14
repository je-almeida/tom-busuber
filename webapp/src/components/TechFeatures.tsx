import Image from "next/image";

interface TechFeature {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  bgColor: string;
}

interface TechFeaturesProps {
  features: TechFeature[];
  primaryColor: string;
}

export default function TechFeatures({
  features,
  primaryColor,
}: TechFeaturesProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-800">
            Tecnologia que otimiza o transporte corporativo
          </h2>
        </div>

        {/* Features Grid */}
        <div className="space-y-16">
          {features.map((feature, index) => {
            const isEven = index % 2 === 0;
            const isMultiOperadores =
              feature.title === "Gestão Multi-operadores";
            const isReportsIA = feature.title === "Reports IA";

            // Multi-operadores and Multi-Site in same row
            if (isMultiOperadores) {
              const multiSiteFeature = features.find(
                (f) => f.title === "Gestão Multi-Site"
              );
              return (
                <div
                  key={index}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                >
                  {/* Multi-operadores - 5 columns */}
                  <div className="lg:col-span-5">
                    <div
                      className="rounded-3xl p-8"
                      style={{ backgroundColor: feature.bgColor }}
                    >
                      <h3
                        className="text-xl font-bold mb-2"
                        style={{ color: primaryColor }}
                      >
                        {feature.title}
                      </h3>
                      <h4 className="text-lg font-bold mb-4 leading-tight">
                        {feature.subtitle}
                      </h4>
                      <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                        {feature.description}
                      </p>
                      <div className="text-center">
                        <Image
                          src={feature.image}
                          alt={feature.title}
                          width={427}
                          height={206}
                          className="mx-auto max-w-full h-auto"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Multi-Site - 7 columns */}
                  {multiSiteFeature && (
                    <div className="lg:col-span-7">
                      <div
                        className="rounded-3xl p-8 pb-0"
                        style={{ backgroundColor: multiSiteFeature.bgColor }}
                      >
                        <h3
                          className="text-xl font-bold mb-2"
                          style={{ color: primaryColor }}
                        >
                          {multiSiteFeature.title}
                        </h3>
                        <h4 className="text-lg font-bold mb-4 leading-tight">
                          {multiSiteFeature.subtitle}
                        </h4>
                        <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                          {multiSiteFeature.description}
                        </p>
                        <div className="text-center">
                          <Image
                            src={multiSiteFeature.image}
                            alt={multiSiteFeature.title}
                            width={636}
                            height={223}
                            className="mx-auto max-w-full h-auto"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            // Skip Multi-Site as it's rendered with Multi-operadores
            if (feature.title === "Gestão Multi-Site") {
              return null;
            }

            // Reports IA and Rotas Otimizadas in same row
            if (isReportsIA) {
              const rotasFeature = features.find(
                (f) => f.title === "Rotas Otimizadas"
              );
              return (
                <div
                  key={index}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
                >
                  {/* Reports IA - 7 columns */}
                  <div className="lg:col-span-7">
                    <div
                      className="rounded-3xl p-8"
                      style={{ backgroundColor: feature.bgColor }}
                    >
                      <h3
                        className="text-xl font-bold mb-2"
                        style={{ color: primaryColor }}
                      >
                        {feature.title}
                      </h3>
                      <h4 className="text-lg font-bold mb-4 leading-tight">
                        {feature.subtitle}
                      </h4>
                      <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                        {feature.description}
                      </p>
                      <div className="text-center">
                        <Image
                          src={feature.image}
                          alt={feature.title}
                          width={287}
                          height={247}
                          className="mx-auto max-w-full h-auto"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Rotas Otimizadas - 5 columns */}
                  {rotasFeature && (
                    <div className="lg:col-span-5">
                      <div
                        className="rounded-3xl p-8 pb-0"
                        style={{ backgroundColor: rotasFeature.bgColor }}
                      >
                        <h3
                          className="text-xl font-bold mb-2"
                          style={{ color: primaryColor }}
                        >
                          {rotasFeature.title}
                        </h3>
                        <h4 className="text-lg font-bold mb-4 leading-tight">
                          {rotasFeature.subtitle}
                        </h4>
                        <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                          {rotasFeature.description}
                        </p>
                        <div className="text-center">
                          <Image
                            src={rotasFeature.image}
                            alt={rotasFeature.title}
                            width={221}
                            height={292}
                            className="mx-auto max-w-full h-auto"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            // Skip Rotas Otimizadas as it's rendered with Reports IA
            if (feature.title === "Rotas Otimizadas") {
              return null;
            }

            return null;
          })}
        </div>
      </div>
    </section>
  );
}
