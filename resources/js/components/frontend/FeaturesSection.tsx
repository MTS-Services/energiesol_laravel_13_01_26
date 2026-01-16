import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const features = [
  {
    image: "/solar-panel-installation-workers.jpg",
    title: "Built on Industry Expertise",
    description:
      "Leverage the stability and deep knowledge of a global energy leader. Our solutions are backed by decades of experience, ensuring your transition to renewable power is secure and long-lasting.",
    cta: "Discover Our History",
    ctaVariant: "outline" as const,
  },
  {
    image: "/modern-solar-panels-on-roof.jpg",
    title: "Premium Quality, Fair Value",
    description:
      "By utilizing fully digitized processes, we reduce overhead to offer you top-tier solar technology at a competitive price. Get the best performance-to-cost ratio in the industry.",
    cta: "Get A Free Estimate",
    ctaVariant: "outline" as const,
  },
  {
    image: "/solar-panel-consultant-with-homeowner.jpg",
    title: "Transparent Expert Guidance",
    description:
      "We pride ourselves on providing honest, transparent, and pressure-free advice. Our consultations are tailored to your specific home needs, helping you make a confident decision for your future.",
    cta: "Book a Consultation",
    ctaVariant: "default" as const,
  },
]

export default function FeaturesSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--navy)]">
            Smart and Reliable Paths to <span className="italic font-serif text-[var(--brand)]">Energy</span>
            <br />
            Independence
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[var(--card-bg)] rounded-2xl overflow-hidden border border-[var(--card-border)] shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url('${feature.image}')` }} />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[var(--navy)] mb-3">{feature.title}</h3>
                <p className="text-[var(--testimonial-text)] text-sm leading-relaxed mb-4">{feature.description}</p>
                <Button
                  variant={feature.ctaVariant}
                  className={`rounded-full ${
                    feature.ctaVariant === "default"
                      ? "bg-[var(--navy)] hover:bg-[var(--navy-dark)] text-white"
                      : "border-[var(--navy)] text-[var(--navy)] hover:bg-[var(--navy)] hover:text-white"
                  }`}
                >
                  {feature.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
