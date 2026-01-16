import { Button } from "@/components/ui/button"

export default function SuccessStoriesSection() {
  return (
    <section className="relative min-h-[500px] flex items-center">
      <img src="/frontend/success-stories.jpg" alt="" />
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/aerial-view-solar-panels-on-multiple-houses.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-[var(--success-overlay)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-[var(--success-text)] mb-6">
          Proven Solar{" "}
          <span className="italic font-serif text-[var(--success-accent)] line-through decoration-[var(--accent-orange)]">
            Success
          </span>{" "}
          Stories
          <br />
          Near You
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
          Join countless German homeowners who have taken control of their energy future. Our dedicated team and
          comprehensive photo support help you select the right technology—and track your journey toward independence.
        </p>
        <Button className="bg-[var(--brand)] hover:bg-[var(--brand-hover)] text-[var(--brand-foreground)] rounded-full px-8 py-6">
          Configurator
        </Button>
      </div>
    </section>
  )
}
