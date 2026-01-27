function CardFive() {
    return (
        <div className="z-10 mx-auto max-w-7xl px-6 py-15 lg:px-0 lg:py-30">
            <div className="rounded-md border border-secondary/20 py-20">
                <div className="flex flex-col items-center justify-center border-b border-secondary/20 px-6 lg:px-64">
                    <div className="mb-3 flex flex-row items-center justify-start gap-3">
                        <span className='relative inline-block h-5 w-5 rounded-[3px] bg-btn-primary after:absolute after:top-1 after:left-1 after:h-5 after:w-5 after:rounded-[3px] after:bg-info after:content-[""]'></span>
                        <p className="mt-1 text-sm font-normal uppercase md:text-base md:text-secondary">
                            INTELLIGENTE MOBILITÄT
                        </p>
                    </div>
                    <div className="mt-2">
                        <h2 className="text-seoncary text-center font-montserrat text-3xl font-semibold lg:text-[40px]">
                            <span className="font-playfair-display text-info italic">
                                Bequemes und effizientes{' '}
                            </span>{' '}
                            <br className="hidden lg:block" /> Laden
                        </h2>
                    </div>
                    <div className="mt-2 pb-7">
                        <p className="text-center font-open-sans text-base text-secondary/70 lg:text-lg">
                            Laden Sie Ihr Fahrzeug mit sauberer, kostengünstiger
                            Solarenergie. Unsere kompakten Energiesol Wallboxen
                            bieten eine schnelle und sichere Alternative zur
                            herkömmlichen Steckdose. Durch die direkte Anbindung
                            an Ihre Photovoltaikanlage laden Sie Ihr Auto mit
                            Ihrem eigenen Solarstrom.
                        </p>
                    </div>
                </div>
                <div className="mt-7 flex flex-col items-center justify-center px-6 lg:px-40">
                    <div className="mt-2">
                        <h2 className="text-seoncary font-montserrat text-2xl font-semibold lg:text-[32px]">
                            Ihre Vorteile
                        </h2>
                    </div>
                    <div className="mt-3">
                        <ul className="justify-centertext-base flex flex-col items-center gap-2 text-center font-open-sans text-secondary/70 lg:text-lg">
                            <li className="">
                                <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-secondary/70"></span>
                                <span className="text-secondary">
                                    Nachhaltiges Laden:{' '}
                                </span>{' '}
                                Nutzen Sie selbst erzeugten Solarstrom, um
                                kostenlos zu fahren.
                            </li>

                            <li className="">
                                <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-secondary/70"></span>
                                <span className="text-secondary">
                                    App-Steuerung:{' '}
                                </span>{' '}
                                Überwachen und verwalten Sie Ihre Ladevorgänge
                                von überall aus per App.
                            </li>

                            <li className="">
                                <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-secondary/70"></span>
                                <span className="text-secondary">
                                    Hohe Sicherheit:{' '}
                                </span>{' '}
                                Eingebaute Sensoren und eine robuste Bauweise
                                garantieren eine zuverlässige, tägliche Nutzun
                            </li>

                            <li className="">
                                <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-secondary/70"></span>
                                <span className="text-secondary">
                                    Anpassbare Leistung:{' '}
                                </span>{' '}
                                Flexible Einstellungen zur Abstimmung auf den
                                Energiebedarf Ihres Hauses.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { CardFive };
