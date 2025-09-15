import { QuoteIcon } from "lucide-react";
import Image from "next/image";

interface Testimonial {
  quote: string;
  company: string;
}

interface TestimonialsProps {
  title: string;
  items: Testimonial[];
  $bgColor?: string;
  primaryColor: string;
  secondaryColor: string;
  active?: boolean;
}

export default function Testimonials({
  title,
  items,
  $bgColor,
  primaryColor,
  secondaryColor,
  active,
}: TestimonialsProps) {
  if (active === false) return null;

  return (
    <section className="py-16" style={{ background: $bgColor }}>
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-800">
            {title}
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {items.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-sm border"
            >
              <div className="space-y-6">
                {/* Quote Icon */}
                <div>
                  <QuoteIcon color={primaryColor} />
                </div>

                {/* Quote Text */}
                <p className="text-gray-700 leading-relaxed text-lg">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Company */}
                <div
                  className="text-sm font-bold"
                  style={{ color: secondaryColor }}
                >
                  {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
