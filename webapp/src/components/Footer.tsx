interface FooterProps {
  copyright: string;
}

export default function Footer({ copyright }: FooterProps) {
  return (
    <footer className="py-8 bg-gradient-to-r from-gray-100 to-gray-200">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-gray-600 text-sm">{copyright}</p>
        </div>
      </div>
    </footer>
  );
}
