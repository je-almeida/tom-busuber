import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  logo: {
    src: string;
    alt: string;
    link: string;
    width: number;
    height: number;
  };
  $bgColor?: string;
  active?: boolean;
}

export default function Header({ logo, $bgColor, active }: HeaderProps) {
  if (active === false) return null;
  return (
    <header className="shadow-sm" style={{ background: $bgColor }}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-center">
          <Link href={logo.link} className="flex items-center">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="h-auto max-w-full"
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
