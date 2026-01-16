import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonial = {
  quote:
    "Working with this team on our home's energy transition was a seamless experience. They were proactive, highly knowledgeable, and designed a solar system that truly exceeded our savings goals. The energy monitoring app they provided is both clean and incredibly easy to use. I wouldn't hesitate to recommend them to any homeowner looking for a reliable, long-term power solution.",
  author: "Jenna Carvalho",
  role: "Homeowner & Eco-Advocate",
  rating: 5,
  image: "/happy-family-in-front-of-house-with-solar-panels.jpg",
}

export default function TestimonialsSection() {
  return (
    <section className="bg-[var(--section-light)] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-[var(--navy)] uppercase tracking-wider mb-2">
            <span className="inline-block w-2 h-2 bg-[var(--brand)] rounded-full mr-2" />
            Client Stories
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--navy)]">
            Our clients love to
            <br />
            <span className="italic font-serif text-[var(--brand)]">Recommend</span> us
          </h2>
        </div>

        <div className="bg-[var(--testimonial-bg)] rounded-3xl overflow-hidden shadow-lg">
          <div className="grid md:grid-cols-2">
            {/* Image */}
            <div
              className="h-64 md:h-auto bg-cover bg-center"
              style={{ backgroundImage: `url('${testimonial.image}')` }}
            />

            {/* Content */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <Quote className="h-10 w-10 text-[var(--testimonial-quote)] mb-6" />
              <p className="text-[var(--testimonial-text)] leading-relaxed mb-6">{testimonial.quote}</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-[var(--testimonial-author)]">{testimonial.author}</p>
                  <p className="text-sm text-[var(--testimonial-text)]">{testimonial.role}</p>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-4 mt-8">
          <Button variant="outline" size="icon" className="rounded-full bg-transparent">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full bg-transparent">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
