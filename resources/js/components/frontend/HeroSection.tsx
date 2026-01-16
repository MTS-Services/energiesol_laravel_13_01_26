import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative min-h-[600px] flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/solar-panels-on-green-mountain-landscape.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-[var(--hero-overlay)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <p className="text-[var(--brand-light)] text-sm font-medium uppercase tracking-wider mb-4">
            Email & SMS list optimization with AI
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--hero-text)] leading-tight mb-6">
            <span className="italic font-serif">Premium</span> Solar Quality
            <br />
            Made Affordable
          </h1>
          <p className="text-lg text-gray-200 mb-8">
            Calculate your home&apos;s energy potential and receive a personalized savings report in under 3 minutes.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <Button className="bg-[var(--brand)] hover:bg-[var(--brand-hover)] text-[var(--brand-foreground)] rounded-full px-8 py-6 text-lg">
              Configurator
            </Button>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-white bg-gray-300"
                  style={{
                    backgroundImage: `url('/person-portrait---i-.jpg')`,
                    backgroundSize: "cover",
                  }}
                />
              ))}
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <span className="text-white font-semibold">5</span>
              <span className="text-gray-300">(150k)</span>
            </div>
          </div>
        </div>

        {/* Badge */}
        <div className="absolute top-20 right-10 hidden lg:block">
          <div className="bg-[var(--accent-orange)] text-white rounded-full w-32 h-32 flex flex-col items-center justify-center text-center p-4 rotate-12">
            <span className="text-xs">New:</span>
            <span className="text-sm font-bold">10 Years extended warranty for PV systems</span>
          </div>
        </div>
      </div>
    </section>
  )
}
