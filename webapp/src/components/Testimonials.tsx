import Image from "next/image";

interface Testimonial {
  quote: string;
  company: string;
}

interface TestimonialsProps {
  title: string;
  items: Testimonial[];
  $bgColor?: string;
}

export default function Testimonials({
  title,
  items,
  $bgColor,
}: TestimonialsProps) {
  return (
    <section className="py-16" style={{ backgroundColor: $bgColor || "white" }}>
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
                  <Image
                    src="/img/quote.svg"
                    alt="Quote"
                    width={58}
                    height={40}
                    className="mb-4"
                  />
                </div>

                {/* Quote Text */}
                <p className="text-gray-700 leading-relaxed text-lg">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Company */}
                <div className="text-sm font-bold" style={{ color: "#00bf6f" }}>
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
