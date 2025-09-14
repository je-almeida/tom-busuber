import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Partners from "../../components/Partners";
import Cta from "../../components/Cta";
import ContactForm from "../../components/ContactForm";
import ProblemSolution from "../../components/ProblemSolution";
import SolutionBenefits from "../../components/SolutionBenefits";
import TechFeatures from "../../components/TechFeatures";
import Benefits from "../../components/Benefits";
import Testimonials from "../../components/Testimonials";
import HowItWorks from "../../components/HowItWorks";
import FinalCta from "../../components/FinalCta";
import EsgCommitment from "../../components/EsgCommitment";
import Footer from "../../components/Footer";
import Stats from "../../components/Stats";
import Faq from "../../components/FAQ";
// import { fetchSchema } from "../../actions/page-data/schema-bus";
import pagedata from "../../data/pagedata.json";
import { sanitizeTwCls } from "../../utils/sanitizeTwCls";
export default async function SitePage() {
  // const schema = await fetchSchema().catch((error) => {
  //   console.error("Error fetching schema:", error);
  //   return null;
  // });
  const schema: any = pagedata;
  if (!schema) {
    return <div>Error loading page</div>;
  }

  // find recursive in schema all $bgColor or bgColor, replace to $bgColor
  // if searched bgColor apply sanitizeTwCls
  const replaceBgColor = (obj: any): any => {
    if (obj && typeof obj === "object") {
      for (const key in obj) {
        if (key === "bgColor") {
          obj["$bgColor"] = sanitizeTwCls(obj[key]);
          delete obj[key];
        } else if (typeof obj[key] === "object") {
          replaceBgColor(obj[key]);
        }
      }
    }
    return obj;
  };

  const { branding, ...data } = schema.bus_page_data;
  console.log("Fetched schema:", schema);
  return (
    <main className="min-h-screen">
      <Header {...data.header} />

      <Hero {...data.hero} />

      <Partners {...data.partners} />

      <Cta {...data.cta1} />

      <ContactForm
        {...data.contactForm}
        primaryColor={branding?.primaryColor}
        secondaryColor={branding?.secondaryColor}
      />

      <ProblemSolution
        {...data.problemSolution}
        primaryColor={branding.primaryColor}
      />

      <SolutionBenefits
        {...data.solutionBenefits}
        primaryColor={branding.primaryColor}
      />

      <TechFeatures {...data.techFeatures} />

      <Benefits {...data.benefits} primaryColor={branding.primaryColor} />

      <Stats {...data.stats} primaryColor={branding.primaryColor} />

      <Testimonials {...data.testimonials} />

      <HowItWorks {...data.howItWorks} primaryColor={branding.primaryColor} />

      <FinalCta {...data.finalCta} primaryColor={branding.primaryColor} />

      <EsgCommitment
        {...data.esgCommitment}
        primaryColor={branding.primaryColor}
      />

      <Faq {...data.faq} primaryColor={branding.primaryColor} />

      <Footer {...data.footer} />
    </main>
  );
}
