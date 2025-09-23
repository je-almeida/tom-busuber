import { BannerType } from "../../types/SiteData";

type Button = {
  label: string;
  link: string;
};

const TextCard = (data: Readonly<BannerType>) => (
  <div className="md:w-1/2 text-center md:text-left mx-4">
    <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
    <p className="mb-6">{data.text}</p>
    <div className="space-x-4">
      {data.btn1 && (
        <a
          className="bg-gray-800 pointer text-white px-4 py-2 rounded hover:bg-gray-600"
          href={data.btn1.link}
        >
          {data.btn1.label}
        </a>
      )}
      {data.btn2 && (
        <a
          className="bg-gray-800 pointer text-white px-4 py-2 rounded hover:bg-gray-600"
          href={data.btn2.link}
        >
          {data.btn2.label}
        </a>
      )}
    </div>
  </div>
);

const ImageCard = (data: Readonly<BannerType>) => (
  <div className="hidden md:block md:w-1/2 mt-8 md:mt-0 mx-4">
    <img src={data.imageUrl} alt="Banner Image" className="w-full h-auto" />
  </div>
);

export default function Banner(data: Readonly<BannerType>) {
  return (
    <section className="w-full py-12" id={data.id}>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {data.inverted ? (
          <>
            <ImageCard {...data} />
            <TextCard {...data} />
          </>
        ) : (
          <>
            <TextCard {...data} />
            <ImageCard {...data} />
          </>
        )}
      </div>
    </section>
  );
}
