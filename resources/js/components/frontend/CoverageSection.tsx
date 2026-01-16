import { Button } from "@/components/ui/button"

export default function CoverageSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <p className="text-sm font-medium text-[var(--navy)] uppercase tracking-wider mb-2">
              <span className="inline-block w-2 h-2 bg-[var(--brand)] rounded-full mr-2" />
              Nationwide Solar Coverage
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--navy)] mb-4">
              We deliver energy independence in north{" "}
              <span className="italic font-serif text-[var(--brand)]">Germany</span>
            </h2>
            <p className="text-[var(--testimonial-text)] leading-relaxed mb-4">
              Every home has its own specific energy requirements. We provide manufacturer-independent planning and
              connect you with our specialized regional teams to ensure the perfect fit for your roof.
            </p>
            <p className="text-[var(--testimonial-text)] leading-relaxed mb-6">
              From your initial inquiry and technical planning to the final installation, we are by your side every step
              of the way. Our commitment doesn&apos;t end with the installation—you can rely on our expert support for
              years to come.
            </p>
            <Button className="bg-[var(--brand)] hover:bg-[var(--brand-hover)] text-[var(--brand-foreground)] rounded-full px-8">
              Configurator
            </Button>
          </div>

          {/* Map */}
          <div className="relative">
            <div
              className="w-full h-[400px] bg-contain bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('/germany-map-with-location-pins-solar-energy.jpg')",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
