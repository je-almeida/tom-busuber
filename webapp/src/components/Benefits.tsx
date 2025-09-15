import Image from "next/image";
import { twMerge } from "tw-merge";

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

interface BenefitsProps {
  title: string;
  active?: boolean;
  items: Benefit[];
  primaryColor: string;
  $bgColor?: string;
}

export default function Benefits(data: BenefitsProps) {
  const { active, title, items, $bgColor } = data;

  if (active === false) {
    return null;
  }

  return (
    <section className={twMerge(`py-16`)} style={{ background: $bgColor }}>
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-800">
            {title}
          </h2>
        </div>
        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {items.map((benefit, index) => (
            <div key={index} className="rounded-3xl p-8 shadow-sm border">
              <div className="text-center space-y-4">
                {/* Icon */}
                <div className="mb-6">
                  <Image
                    src={benefit.icon}
                    alt={benefit.title}
                    width={80}
                    height={80}
                    className="mx-auto"
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
