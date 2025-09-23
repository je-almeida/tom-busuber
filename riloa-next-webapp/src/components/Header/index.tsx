import { HeaderType } from "../../types/SiteData";

export default function Header(data: Readonly<HeaderType>) {
  return (
    <header className="w-full sticky top-0 bg-black text-white h-[64px] flex items-center px-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">
          {data.logo && <img src={data.logo} alt="Logo" className="h-8" />}
        </div>
        <nav>
          <ul className="flex space-x-4">
            {data.items.map((item, index) => (
              <li key={index}>
                <a href={item.link}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
