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
import siteData from "../../data/site.json";
import Stats from "../../components/Stats";
import Faq from "../../components/FAQ";
export default function SitePage() {
  const { branding, ...data } = siteData;

  return (
    <main className="min-h-screen">
      {/* Header */}
      <Header logo={data.header.logo} />

      {/* Hero Section */}
      <Hero
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        ctaText={data.hero.ctaText}
        ctaLink={data.hero.ctaLink}
        image={data.hero.image}
        primaryColor={branding.primaryColor}
      />

      {/* Partners Section */}
      <Partners partners={data.partners} />

      {/* CTA Section */}
      <Cta
        title={data.cta1.title}
        subtitle={data.cta1.subtitle}
        anchor={data.cta1.anchor}
        primaryColor={branding.primaryColor}
      />

      {/* Contact Form */}
      <ContactForm
        title={data.contactForm.title}
        subtitle={data.contactForm.subtitle}
        fields={data.contactForm.fields}
        consent={data.contactForm.consent}
        submitText={data.contactForm.submitText}
        primaryColor={branding.primaryColor}
      />

      {/* Problem Solution Section */}
      <ProblemSolution
        problems={data.problemSolution.problems}
        solution={data.problemSolution.solution}
        description={data.problemSolution.description}
        image={data.problemSolution.image}
        primaryColor={branding.primaryColor}
      />

      {/* Solution Benefits */}
      <SolutionBenefits
        title={data.solutionBenefits.title}
        description={data.solutionBenefits.description}
        image={data.solutionBenefits.image}
        ctaText={data.solutionBenefits.ctaText}
        primaryColor={branding.primaryColor}
      />

      {/* Tech Features */}
      <TechFeatures
        features={data.techFeatures}
        primaryColor={branding.primaryColor}
      />

      {/* Benefits */}
      <Benefits
        title={data.benefits.title}
        items={data.benefits.items}
        primaryColor={branding.primaryColor}
      />

      {/* Stats */}
      <Stats
        title={data.stats.title}
        metrics={data.stats.metrics}
        primaryColor={branding.primaryColor}
      />

      {/* Testimonials */}
      <Testimonials
        title={data.testimonials.title}
        items={data.testimonials.items}
      />

      {/* How It Works */}
      <HowItWorks
        title={data.howItWorks.title}
        steps={data.howItWorks.steps}
        primaryColor={branding.primaryColor}
      />

      {/* Final CTA */}
      <FinalCta
        title={data.finalCta.title}
        description={data.finalCta.description}
        image={data.finalCta.image}
        ctaText={data.finalCta.ctaText}
        ctaLink={data.finalCta.ctaLink}
        primaryColor={branding.primaryColor}
      />

      {/* ESG Commitment */}
      <EsgCommitment
        title={data.esgCommitment.title}
        subtitle={data.esgCommitment.subtitle}
        certificationTitle={data.esgCommitment.certificationTitle}
        certificationDescription={data.esgCommitment.certificationDescription}
        certificationImage={data.esgCommitment.certificationImage}
        logos={data.esgCommitment.logos}
        primaryColor={branding.primaryColor}
      />

      {/* FAQ */}
      <Faq
        title={data.faq.title}
        items={data.faq.items}
        primaryColor={branding.primaryColor}
      />

      {/* Footer */}
      <Footer copyright={data.footer.copyright} />
    </main>
  );
}
