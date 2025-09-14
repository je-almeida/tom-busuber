import Image from "next/image";
import Link from "next/link";

interface FinalCtaProps {
  title: string;
  description: string;
  image: string;
  ctaText: string;
  ctaLink: string;
  primaryColor: string;
  $bgColor?: string;
  active?: boolean;
}

export default function FinalCta(data: FinalCtaProps) {
  const {
    title,
    description,
    image,
    ctaText,
    ctaLink,
    primaryColor,
    $bgColor,
    active,
  } = data;
  if (active === false) return null;
  return (
    <section className="py-16" style={{ background: $bgColor }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4 flex justify-center">
            <Image
              src={image}
              alt="Telemóvel GOLFFOX"
              width={300}
              height={392}
              className="max-w-full h-auto"
            />
          </div>
          {/* Content */}
          <div className="lg:col-span-8 space-y-6">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 leading-tight">
              {title}
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
              {description}
            </p>

            <div className="pt-4">
              <Link
                href={ctaLink}
                className="inline-block px-8 py-4 text-white font-semibold rounded-lg transition-colors hover:opacity-90"
                style={{ backgroundColor: primaryColor }}
              >
                {ctaText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
