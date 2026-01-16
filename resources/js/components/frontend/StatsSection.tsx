import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const stats = [
  { value: "100%", label: "Green Energy Output" },
  { value: "320+", label: "Installation Zones" },
  { value: "25 years", label: "Performance Guarantee" },
  { value: "100k+", label: "Homes Powered" },
]

export default function StatsSection() {
  return (
    <section className="bg-[var(--section-cream)] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <p className="text-sm font-medium text-[var(--navy)] uppercase tracking-wider mb-2">
              <span className="inline-block w-2 h-2 bg-[var(--brand)] rounded-full mr-2" />
              Sustainable Tomorrow
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--navy)] mb-4">
              For <span className="italic font-serif text-[var(--brand)]">our generation</span>
              <br />
              and the ones after us
            </h2>
            <p className="text-[var(--testimonial-text)] leading-relaxed mb-6">
              Our photovoltaic systems generate 100% clean electricity—empowering families to protect the climate while
              investing in a sustainable future.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-[var(--navy)] hover:bg-[var(--navy-dark)] text-white rounded-full px-6">
                Inquire today
              </Button>
              <Button
                variant="outline"
                className="border-[var(--navy)] text-[var(--navy)] rounded-full px-6 bg-transparent"
              >
                About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-[var(--stats-bg)] rounded-2xl p-6 text-center shadow-sm">
                <p className="text-3xl md:text-4xl font-bold text-[var(--stats-number)]">{stat.value}</p>
                <p className="text-sm text-[var(--stats-label)]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
