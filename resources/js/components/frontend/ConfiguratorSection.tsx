"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Minus, Plus } from "lucide-react"

export default function ConfiguratorSection() {
  const [roofSize, setRoofSize] = useState(80)

  return (
    <section className="bg-[var(--section-gray)] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <p className="text-sm font-medium text-[var(--navy)] uppercase tracking-wider mb-2">
              <span className="inline-block w-2 h-2 bg-[var(--brand)] rounded-full mr-2" />3 MIN Setup
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--navy)] mb-4">
              PV system in <span className="italic font-serif text-[var(--brand)]">only 3 minutes</span>
              <br />
              configured
            </h2>
            <p className="text-[var(--testimonial-text)] leading-relaxed mb-8">
              Receive a free, personalized solar cost estimate—including a detailed profitability calculation—designed
              specifically for your roof and energy usage.
            </p>

            {/* Configurator Input */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center bg-white rounded-full border border-[var(--card-border)] overflow-hidden">
                <button
                  onClick={() => setRoofSize(Math.max(0, roofSize - 10))}
                  className="p-3 hover:bg-gray-100 transition-colors"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="px-6 py-3 font-semibold text-[var(--navy)]">{roofSize}</span>
                <button onClick={() => setRoofSize(roofSize + 10)} className="p-3 hover:bg-gray-100 transition-colors">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <span className="text-[var(--testimonial-text)]">m²</span>
              <Button className="bg-[var(--brand)] hover:bg-[var(--brand-hover)] text-[var(--brand-foreground)] rounded-full px-6">
                Start Configurator
              </Button>
            </div>
          </div>

          {/* Image */}
          <div
            className="h-[400px] rounded-2xl bg-cover bg-center"
            style={{
              backgroundImage: "url('/solar-panel-installation.png')",
            }}
          />
        </div>
      </div>
    </section>
  )
}
