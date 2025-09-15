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
import { Strapi } from "../../utils/strapi";
export default async function SitePage() {
  const schema = await Strapi.public("config", {
    next: { revalidate: 120 },
    cache: "force-cache",
  }).catch((error) => {
    console.error("Error fetching schema:", error);
    return null;
  });

  if (!schema) {
    return <div>Error loading page</div>;
  }

  const { branding, ...data } = schema.bus_page_data;

  return (
    <main className="min-h-screen">
      <Header {...data.header} />

      <Hero {...data.hero} primaryColor={branding?.primaryColor} />

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

      <Testimonials
        {...data.testimonials}
        primaryColor={branding.primaryColor}
        secondaryColor={branding.secondaryColor}
      />

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
