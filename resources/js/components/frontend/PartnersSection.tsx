const partners = [
  { name: "ECOFLOW", logo: "/frontend/icon.svg" },
  { name: "HUAWEI", logo: "/frontend/icon.svg" },
  { name: "SiGENERGY", logo: "/frontend/icon.svg" },
  { name: "Zajadacz", logo: "/frontend/icon.svg" },
]

export default function PartnersSection() {
  return (
    <section className="bg-section-light py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="text-2xl font-bold text-[var(--navy)] opacity-60 hover:opacity-100 transition-opacity"
            >
              <img src={partner.logo} alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
