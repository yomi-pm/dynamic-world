import type { Metadata } from "next";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ResourceCategories from "@/components/ResourceCategories";
import FeaturedResources from "@/components/FeaturedResources";
import FeaturedCaseStudy from "@/components/FeaturedCaseStudy";
import HowItHelps from "@/components/HowItHelps";
import ServicesPreview from "@/components/ServicesPreview";
import CTA from "@/components/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <FeaturedResources />
      <ResourceCategories />
      <HowItHelps />
      <FeaturedCaseStudy />
      <ServicesPreview />
      <CTA />
    </>
  );
}

export const metadata: Metadata = {
  title: "Research Resources. Expert Support.",

  description:
    "Research Desk helps students, academics and researchers with research topics, methodology, data analysis, bioinformatics, academic writing and publication support.",
};
