import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CareersSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[var(--section-light)] rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Image */}
            <div className="flex justify-center">
              <div
                className="w-48 h-48 rounded-full bg-cover bg-center"
                style={{
                  backgroundImage: "url('/professional-solar-engineer-portrait.jpg')",
                }}
              />
            </div>

            {/* Content */}
            <div>
              <p className="text-sm font-medium text-[var(--navy)] uppercase tracking-wider mb-2">
                <span className="inline-block w-2 h-2 bg-[var(--brand)] rounded-full mr-2" />
                Career
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--navy)] mb-4">
                Our <span className="italic font-serif text-[var(--brand)]">career</span> Possibilities
              </h2>
              <p className="text-[var(--testimonial-text)] leading-relaxed mb-6">
                Join a mission-driven team dedicated to reshaping the future of energy. At Energiesol, we offer a
                dynamic environment where your work directly contributes to a sustainable planet. Whether you are an
                engineer, a consultant, or a creative thinker, your talent helps homes across the nation achieve true
                energy independence. Be part of the transition to a greener tomorrow.
              </p>
              <Button className="bg-[var(--brand)] hover:bg-[var(--brand-hover)] text-[var(--brand-foreground)] rounded-full px-6">
                See All Positions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
