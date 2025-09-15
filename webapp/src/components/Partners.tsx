import Image from "next/image";

interface Partner {
  name: string;
  logo: string;
}

interface PartnersProps {
  $bgColor?: string;
  items: Partner[];
  active?: boolean;
}

export default function Partners(data: PartnersProps) {
  const { items, $bgColor, active } = data;
  if (active === false) return null;
  return (
    <section className="py-12" style={{ background: $bgColor }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {items.map((partner, index) => (
            <div key={index} className="flex justify-center items-center">
              <Image
                src={partner.logo}
                alt={partner.name}
                width={150}
                height={80}
                className="max-w-full h-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
