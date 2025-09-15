interface CtaProps {
  title: string;
  subtitle: string;
  anchor?: string;
  primaryColor: string;
  secondaryColor: string;
  $bgColor?: string;
  active?: boolean;
}

export default function Cta(data: CtaProps) {
  const { subtitle, anchor, title, $bgColor, active } = data;
  if (active === false) return null;
  return (
    <section className="py-16" id={anchor} style={{ background: $bgColor }}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2
            className="text-3xl lg:text-4xl font-bold"
            style={{ color: "#000", lineHeight: "1.15" }}
          >
            {title}
          </h2>
          <p className="text-lg leading-relaxed">{subtitle}</p>
        </div>
      </div>
    </section>
  );
}
