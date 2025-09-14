import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  image: string;
  primaryColor: string;
}

export default function Hero({
  title,
  subtitle,
  ctaText,
  ctaLink,
  image,
  primaryColor,
}: HeroProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h1
              className="text-4xl lg:text-5xl font-bold leading-tight"
              style={{ lineHeight: "0.8" }}
            >
              {title}
            </h1>
            <p
              className="text-xl leading-relaxed"
              style={{ color: primaryColor, lineHeight: "1.15" }}
            >
              {subtitle}
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

          {/* Image */}
          <div className="flex justify-center">
            <Image
              src={image}
              alt="Bus Banner"
              width={707}
              height={599}
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
