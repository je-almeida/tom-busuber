interface CtaProps {
  title: string;
  subtitle: string;
  anchor?: string;
  primaryColor: string;
  $bgColor?: string;
}

export default function Cta({
  title,
  subtitle,
  anchor,
  primaryColor,
  $bgColor,
}: CtaProps) {
  return (
    <section
      className="py-16"
      id={anchor}
      style={{ backgroundColor: $bgColor || "white" }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2
            className="text-3xl lg:text-4xl font-bold"
            style={{ color: "#000", lineHeight: "1.15" }}
          >
            Pronto para{" "}
            <span style={{ color: primaryColor }}>
              transformar o transporte
            </span>{" "}
            da sua empresa?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">{subtitle}</p>
        </div>
      </div>
    </section>
  );
}
