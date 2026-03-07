import FrontendLayout from '@/layouts/frontend-layout';

export default function PrivacyPolicy() {
    return (
        <FrontendLayout>
            <div className="relative z-10 mx-auto max-w-7xl px-6 pb-8 lg:gap-x-10 lg:px-8 lg:py-42 lg:pb-20">
                <div className="mx-auto px-6 lg:px-8">
                    <div className="rounded-3xl bg-white p-8 lg:p-12">
                        <h1 className="mb-8 text-center font-playfair-display text-3xl font-semibold text-secondary md:text-4xl">
                            Datenschutzerklärung
                        </h1>

                        <div className="space-y-6">
                            <section>
                                <h2 className="mb-3 font-montserrat text-xl font-semibold text-secondary">
                                    1. Allgemeine Hinweise
                                </h2>
                                <p className="font-open-sans text-base text-secondary/80 leading-relaxed">
                                    Der Schutz Ihrer persönlichen Daten ist uns wichtig.
                                    Nachfolgend informieren wir Sie über die Verarbeitung
                                    personenbezogener Daten beim Besuch dieser Website.
                                </p>
                            </section>

                            <section>
                                <h2 className="mb-3 font-montserrat text-xl font-semibold text-secondary">
                                    2. Verantwortliche Stelle
                                </h2>
                                <div className="font-open-sans text-base text-secondary/80 leading-relaxed">
                                    <p>Energie Solution Nord</p>
                                    <p>Inhaberin: Patricia Schubert</p>
                                    <p>Hauptstr. 24</p>
                                    <p>22885 Barsbüttel</p>
                                    <p className="mt-2">
                                        E-Mail:{' '}
                                        <a
                                            href="mailto:info@energiesolutionnord.de"
                                            className="text-info hover:underline transition-colors"
                                        >
                                            info@energiesolutionnord.de
                                        </a>
                                    </p>
                                    <p>Telefon: 040 / 764 84 844</p>
                                </div>
                            </section>

                            <section>
                                <h2 className="mb-3 font-montserrat text-xl font-semibold text-secondary">
                                    3. Server-Logfiles
                                </h2>
                                <p className="font-open-sans text-base text-secondary/80 leading-relaxed">
                                    Beim Aufrufen dieser Website werden durch den
                                    Hostinganbieter automatisch Informationen erfasst (z. B.
                                    IP-Adresse, Browsertyp, Uhrzeit). Diese Daten dienen der
                                    technischen Bereitstellung und Sicherheit der Website
                                    und werden nicht zur Profilbildung verwendet.
                                </p>
                            </section>

                            <section>
                                <h2 className="mb-3 font-montserrat text-xl font-semibold text-secondary">
                                    4. Kontaktaufnahme
                                </h2>
                                <p className="font-open-sans text-base text-secondary/80 leading-relaxed">
                                    Wenn Sie uns telefonisch oder per E-Mail kontaktieren,
                                    werden Ihre Angaben zur Bearbeitung der Anfrage
                                    gespeichert. Die Daten werden nicht ohne Ihre
                                    Einwilligung weitergegeben.
                                </p>
                            </section>

                            <section>
                                <h2 className="mb-3 font-montserrat text-xl font-semibold text-secondary">
                                    5. Ihre Rechte
                                </h2>
                                <p className="font-open-sans text-base text-secondary/80 leading-relaxed">
                                    Sie haben jederzeit das Recht auf Auskunft,
                                    Berichtigung, Löschung oder Einschränkung der
                                    Verarbeitung Ihrer gespeicherten Daten sowie ein
                                    Beschwerderecht bei der zuständigen Aufsichtsbehörde.
                                </p>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </FrontendLayout>
    );
}
