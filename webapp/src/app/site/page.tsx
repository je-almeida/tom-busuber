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
import { fetchSchema } from "../../actions/page-data/schema-bus";
export default async function SitePage() {
  const schema = await fetchSchema();
  const { branding, ...data } = schema.bus_page_data;
  console.log("Fetched schema:", schema);
  return (
    <main className="min-h-screen">
      <Header logo={data.header.logo} $bgColor={branding.bgColor} />
      <Hero
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        ctaText={data.hero.ctaText}
        ctaLink={data.hero.ctaLink}
        image={data.hero.image}
        primaryColor={branding.primaryColor}
        $bgColor={branding.bgColor}
      />

      <Partners partners={data.partners} $bgColor={branding.bgColor} />

      <Cta
        title={data.cta1.title}
        subtitle={data.cta1.subtitle}
        anchor={data.cta1.anchor}
        primaryColor={branding.primaryColor}
      />

      <ContactForm
        title={data.contactForm.title}
        subtitle={data.contactForm.subtitle}
        fields={data.contactForm.fields}
        consent={data.contactForm.consent}
        submitText={data.contactForm.submitText}
        primaryColor={branding.primaryColor}
      />

      <ProblemSolution
        problems={data.problemSolution.problems}
        solution={data.problemSolution.solution}
        description={data.problemSolution.description}
        image={data.problemSolution.image}
        primaryColor={branding.primaryColor}
      />

      <SolutionBenefits
        title={data.solutionBenefits.title}
        description={data.solutionBenefits.description}
        image={data.solutionBenefits.image}
        ctaText={data.solutionBenefits.ctaText}
        primaryColor={branding.primaryColor}
      />

      <TechFeatures
        features={data.techFeatures}
        primaryColor={branding.primaryColor}
      />

      <Benefits
        title={data.benefits.title}
        items={data.benefits.items}
        primaryColor={branding.primaryColor}
      />

      <Stats
        title={data.stats.title}
        metrics={data.stats.metrics}
        primaryColor={branding.primaryColor}
      />

      <Testimonials
        title={data.testimonials.title}
        items={data.testimonials.items}
      />

      <HowItWorks
        title={data.howItWorks.title}
        steps={data.howItWorks.steps}
        primaryColor={branding.primaryColor}
      />

      <FinalCta
        title={data.finalCta.title}
        description={data.finalCta.description}
        image={data.finalCta.image}
        ctaText={data.finalCta.ctaText}
        ctaLink={data.finalCta.ctaLink}
        primaryColor={branding.primaryColor}
      />

      <EsgCommitment
        title={data.esgCommitment.title}
        subtitle={data.esgCommitment.subtitle}
        certificationTitle={data.esgCommitment.certificationTitle}
        certificationDescription={data.esgCommitment.certificationDescription}
        certificationImage={data.esgCommitment.certificationImage}
        logos={data.esgCommitment.logos}
        primaryColor={branding.primaryColor}
      />

      <Faq
        title={data.faq.title}
        items={data.faq.items}
        primaryColor={branding.primaryColor}
      />

      <Footer copyright={data.footer.copyright} />
    </main>
  );
}
