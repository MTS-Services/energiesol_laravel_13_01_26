import FrontendLayout from '@/layouts/frontend-layout';

export default function Legal() {
    return (
        <FrontendLayout>
            <div className="relative z-10 mx-auto max-w-7xl px-6 pb-8 lg:gap-x-10 lg:px-8 lg:py-42 lg:pb-20">
                <div className="mx-auto px-6 lg:px-8">
                    <div className="rounded-3xl bg-white p-8 lg:p-12">
                        <h1 className="mb-8 text-center font-playfair-display text-3xl font-semibold text-secondary md:text-4xl">
                            Impressum
                        </h1>

                        <div className="space-y-6">
                            <section>
                                <h2 className="mb-3 font-montserrat text-xl font-semibold text-secondary">
                                    Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz)
                                </h2>
                                <div className="font-open-sans text-base text-secondary/80 leading-relaxed">
                                    <p>Energie Solution Nord</p>
                                    <p>Inhaberin: Patricia Schubert</p>
                                    <p>Hauptstr. 24</p>
                                    <p>22885 Barsbüttel</p>
                                    <p>Deutschland</p>
                                </div>
                            </section>

                            <section>
                                <h2 className="mb-3 font-montserrat text-xl font-semibold text-secondary">
                                    Kontakt
                                </h2>
                                <div className="font-open-sans text-base text-secondary/80 leading-relaxed">
                                    <p>Telefon: 040 / 764 84 844</p>
                                    <p>
                                        E-Mail:{' '}
                                        <a
                                            href="mailto:info@energiesolutionnord.de"
                                            className="text-info hover:underline transition-colors"
                                        >
                                            info@energiesolutionnord.de
                                        </a>
                                    </p>
                                </div>
                            </section>

                            <section>
                                <h2 className="mb-3 font-montserrat text-xl font-semibold text-secondary">
                                    Umsatzsteuer-Identifikationsnummer
                                </h2>
                                <p className="font-open-sans text-base text-secondary/80 leading-relaxed">
                                    Derzeit nicht vorhanden.
                                </p>
                            </section>

                            <section>
                                <h2 className="mb-3 font-montserrat text-xl font-semibold text-secondary">
                                    Registereintrag
                                </h2>
                                <p className="font-open-sans text-base text-secondary/80 leading-relaxed">
                                    Nicht im Handelsregister eingetragen.
                                </p>
                            </section>

                            <section>
                                <h2 className="mb-3 font-montserrat text-xl font-semibold text-secondary">
                                    Tätigkeit
                                </h2>
                                <p className="font-open-sans text-base text-secondary/80 leading-relaxed">
                                    Vermittlung und Energieberatung im Bereich erneuerbare Energien.
                                    Es besteht keine Eintragung in der Handwerksrolle, da keine handwerklichen Leistungen selbst ausgeführt werden.
                                </p>
                            </section>

                            <section>
                                <h2 className="mb-3 font-montserrat text-xl font-semibold text-secondary">
                                    Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
                                </h2>
                                <div className="font-open-sans text-base text-secondary/80 leading-relaxed">
                                    <p>Patricia Schubert</p>
                                    <p>Anschrift wie oben</p>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </FrontendLayout>
    );
}
