import Image from "next/image";
import Link from "next/link";

interface SolutionBenefitsProps {
  title: string;
  description: string;
  image: string;
  ctaText: string;
  primaryColor: string;
  $bgColor?: string;
  active?: boolean;
}

export default function SolutionBenefits({
  title,
  description,
  image,
  ctaText,
  primaryColor,
  $bgColor,
  active,
}: SolutionBenefitsProps) {
  if (active === false) return null;
  return (
    <section className="py-16" style={{ background: $bgColor }}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          {/* Title */}
          <h2
            className="text-2xl lg:text-3xl font-bold leading-tight"
            style={{ color: primaryColor }}
          >
            {title}
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            {description}
          </p>

          {/* Image */}
          <div className="py-8">
            <Image
              src={image}
              alt="Mapa de Rotas Otimizadas"
              width={900}
              height={538}
              className="mx-auto max-w-full h-auto rounded-lg shadow-sm"
            />
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <Link
              href="#contacto"
              className="inline-block px-8 py-4 text-white font-semibold rounded-lg transition-colors hover:opacity-90"
              style={{ backgroundColor: primaryColor }}
            >
              {ctaText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
