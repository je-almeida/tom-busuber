import { SuggestionType } from "../../types/SiteData";

export default function Suggestions(data: Readonly<SuggestionType>) {
  return (
    <section className="w-full py-12 m-0" id={data.id}>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
        </div>
      </div>
      {/* até 3 itens por linha */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 mt-8">
        {data.items.map((item, index) => (
          <div
            key={index}
            className="flex flex-row items-center mb-8 bg-gray-200 min-h-[160px] rounded-md "
          >
            <div className="w-1/2 text-left p-4 pr-0">
              <h2 className="text-lg font-semibold mb-1">{item.title}</h2>
              <p className="mb-4 h-[40px] overflow-hidden text-sm text-ellipsis">
                {item.text}
              </p>
              <a
                className="bg-white text-black px-4 py-2 font-semibold hover:bg-gray-100 rounded-3xl"
                href={item.btn.link}
              >
                {item.btn.label}
              </a>
            </div>
            <div className="w-1/2 mt-0 p-4">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-auto max-w-[128px] max-h-[128px] ml-auto"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
