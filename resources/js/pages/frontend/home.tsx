import Header from "@/components/frontend/Header"
import Footer from "@/components/frontend/Footer"
import HeroSection from "@/components/frontend/HeroSection"
import PartnersSection from "@/components/frontend/PartnersSection"
import FeaturesSection from "@/components/frontend/FeaturesSection"
import SuccessStoriesSection from "@/components/frontend/SuccessStoriesSection"
import TestimonialsSection from "@/components/frontend/TestimonialsSection"
import CoverageSection from "@/components/frontend/CoverageSection"
import StatsSection from "@/components/frontend/StatsSection"
import ConfiguratorSection from "@/components/frontend/ConfiguratorSection"
import CareersSection from "@/components/frontend/CareersSection"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* <HeroSection />
        <PartnersSection />
        <FeaturesSection />
        <SuccessStoriesSection />
        <TestimonialsSection />
        <CoverageSection />
        <StatsSection />
        <ConfiguratorSection />
        <CareersSection /> */}
      </main>
      <Footer />
    </div>
  )
}
