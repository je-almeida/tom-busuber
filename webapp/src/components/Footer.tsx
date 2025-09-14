interface FooterProps {
  copyright: string;
  $bgColor?: string;
}

export default function Footer({ copyright, $bgColor }: FooterProps) {
  return (
    <footer className="py-8" style={{ backgroundColor: $bgColor || "#f3f4f6" }}>
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-gray-600 text-sm">{copyright}</p>
        </div>
      </div>
    </footer>
  );
}
