interface FooterProps {
  copyright: string;
  $bgColor?: string;
  active?: boolean;
}

export default function Footer({ copyright, $bgColor, active }: FooterProps) {
  if (active === false) return null;

  return (
    <footer className="py-8" style={{ background: $bgColor }}>
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-gray-600 text-sm">{copyright}</p>
        </div>
      </div>
    </footer>
  );
}
