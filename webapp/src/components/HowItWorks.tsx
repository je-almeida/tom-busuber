interface Step {
  number: string;
  title: string;
  description: string;
}

interface HowItWorksProps {
  title: string;
  steps: Step[];
  primaryColor: string;
}

export default function HowItWorks({
  title,
  steps,
  primaryColor,
}: HowItWorksProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-800">
            <span className="text-gray-600">Veja como é</span>{" "}
            <span style={{ color: primaryColor }}>fácil e rápido</span>{" "}
            <span className="text-gray-600">começar!</span>
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center space-y-6">
              {/* Number */}
              <div
                className="text-6xl font-bold"
                style={{ color: primaryColor }}
              >
                {step.number}
              </div>

              {/* Title */}
              <h3
                className="text-xl lg:text-2xl font-bold leading-tight"
                style={{ color: primaryColor }}
              >
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-lg">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
