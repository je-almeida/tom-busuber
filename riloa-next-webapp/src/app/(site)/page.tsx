"use server";
import Template from "../../components/Template";
import Banner from "../../components/Banner";
import { getDataSite } from "../actions/site-data";
import datasite from "../../constants/datasite.json";
import Suggestions from "../../components/Suggestions";
import { SiteData } from "../../types/SiteData";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactForm from "../../components/ContactForm";
export default async function Home() {
  const dataSite = await getDataSite();
  const data = dataSite.dados_site as SiteData;
  // const data = datasite as SiteData;

  if (!data) {
    return <div>Erro...</div>;
  }

  return (
    <Template
      header={<Header logo={data.logo} items={data.header.items} />}
      footer={
        <Footer
          text={data.footer.text}
          links={data.footer.links}
          socials={data.footer.socials}
        />
      }
    >
      {data.items.map((item, index) => {
        if (item.type === "banner") {
          return (
            <Banner
              id={item.id}
              key={index}
              title={item.title}
              text={item.text}
              btn1={item.btn1}
              btn2={item.btn2}
              imageUrl={item.imageUrl}
              inverted={item.inverted}
            />
          );
        } else if (item.type === "suggestions") {
          return (
            <Suggestions
              id={item.id}
              key={index}
              title={item.title}
              items={item.items}
            />
          );
        } else if (item.type === "form") {
          return (
            <ContactForm
              key={index}
              id={item.id}
              active={true}
              title={item.title}
              subtitle={item.subtitle}
              fields={item.fields}
              submitText={item.submitText || "Enviar"}
              primaryColor={item.primaryColor}
              secondaryColor={item.secondaryColor}
              $bgColor={item.$bgColor}
            />
          );
        }
      })}
    </Template>
  );
}
