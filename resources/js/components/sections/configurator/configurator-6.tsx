import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Icon } from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { Link, router, useForm } from '@inertiajs/react';
import { ArrowLeft, ArrowRight, Check, CircleCheckBig } from 'lucide-react';
import { FormEvent, useMemo } from 'react';

export default function Configurator6({
    area,
    solar_id,
    inverter_id,
    battery,
    charger,
}: {
    area: number;
    solar_id: number;
    inverter_id: number;
    battery: boolean;
    charger: boolean;
}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        area: area,
        solar_id: solar_id,
        inverter_id: inverter_id,
        battery: battery,
        charger: charger,
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        notes: '',
        consent: false,
    });

    const benefits = useMemo(
        () => [
            'Klare Kostenaufstellung – alle Installationskosten inklusive.',
            'Sofortige Ergebnisse – ohne Anmeldung, Login oder Verpflichtung.',
            'Übersicht über Energieeinsparungen und Amortisation.',
            'Schneller, nahtloser Zugriff auf Ihre Ergebnisse in Echtzeit.',
        ],
        [],
    );

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        router.visit(route('contact'));
    };

    return (
        <div className="mx-auto max-w-7xl py-16 sm:py-20 lg:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-10">
                    <Link href={route('configurator.step5')}>
                        <Button variant="ghost">
                            <ArrowLeft className="mr-2 h-5 w-5" />
                            Zurück
                        </Button>
                    </Link>
                </div>

                <div className="text-center">
                    <h1 className="px-7 font-montserrat text-3xl font-semibold text-secondary lg:px-15 lg:text-[40px]">
                        Energie Solution Nord – Ihr vertrauenswürdiger Partner
                        für nachhaltige Energielösungen.
                    </h1>
                    <p className="mx-auto mt-3 px-20 text-base lg:px-28 lg:text-xl">
                        Füllen Sie das untenstehende Formular aus, um Ihre
                        persönliche Energiekostenabschätzung direkt in Ihrem
                        Posteingang zu erhalten.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="mt-20 px-10">
                    <div className="grid gap-6 md:grid-cols-2">
                        <div>
                            <label className="mb-4 inline-block font-montserrat text-base font-semibold text-secondary lg:text-xl">
                               Vorname{' '}
                                <span className="text-red-600">*</span>
                            </label>
                            <Input
                                placeholder="John"
                                value={data.first_name}
                                onChange={(e) =>
                                    setData('first_name', e.target.value)
                                }
                                className="block! h-auto! rounded-xl border border-white/30 px-6! py-4! font-montserrat text-base text-secondary shadow-[0_10px_30px_rgba(0,0,0,0.12)] placeholder:text-secondary/50"
                            />
                        </div>
                        <div>
                            <label className="mb-4 inline-block font-montserrat text-base font-semibold text-secondary lg:text-xl">
                                Nachname{' '}
                                <span className="text-red-600">*</span>
                            </label>
                            <Input
                                placeholder="Doe"
                                value={data.last_name}
                                onChange={(e) =>
                                    setData('last_name', e.target.value)
                                }
                                className="block! h-auto! rounded-xl border border-white/30 px-6! py-4! font-montserrat text-base text-secondary shadow-[0_10px_30px_rgba(0,0,0,0.12)] placeholder:text-secondary/50"
                            />
                        </div>
                        <div>
                            <label className="mb-4 inline-block font-montserrat text-base font-semibold text-secondary lg:text-xl">
                               E-Mail-Adresse <span className="text-red-600">*</span>
                            </label>
                            <Input
                                type="email"
                                placeholder="example@gmail.com"
                                value={data.email}
                                onChange={(e) =>
                                    setData('email', e.target.value)
                                }
                                className="block! h-auto! rounded-xl border border-white/30 px-6! py-4! font-montserrat text-base text-secondary shadow-[0_10px_30px_rgba(0,0,0,0.12)] placeholder:text-secondary/50"
                            />
                        </div>
                        <div>
                            <label className="mb-4 inline-block font-montserrat text-base font-semibold text-secondary lg:text-xl">
                                Telefonnummer <span className="text-red-600">*</span>
                            </label>
                            <Input
                                type="tel"
                                placeholder="(406) 555-0120"
                                value={data.phone}
                                onChange={(e) =>
                                    setData('phone', e.target.value)
                                }
                                className="block! h-auto! rounded-xl border border-white/30 px-6! py-4! font-montserrat text-base text-secondary shadow-[0_10px_30px_rgba(0,0,0,0.12)] placeholder:text-secondary/50"
                            />
                        </div>
                    </div>

                    <div className="mt-6 space-y-4 text-sm text-slate-600">
                        <label className=" items-start gap-3 flex flex-row">
                            <Checkbox
                                checked={data.consent}
                                onCheckedChange={(checked) =>
                                    setData('consent', checked ? true : false)
                                }
                                className="w-6 h-6 border border-secondary mt-2"
                            />
                            <div className="ml-3 font-open-sans text-base leading-relaxed">
                                <p className='mb-6'>
                                   Ich bin damit einverstanden, die Ergebnisse dieses Solarkonfigurators sowie zusätzliche Informationen zu meiner Anfrage (z. B. Terminbestätigungen) von energiesol per E-Mail zu erhalten, basierend auf den von mir angegebenen Daten.
                                </p>
                                <p className='mb-6'>
                                    Ich bin außerdem damit einverstanden, telefonisch kontaktiert zu werden, um erste Fragen zu klären, gegebenenfalls einen Vor-Ort-Termin zu vereinbaren und an Kundenzufriedenheitsumfragen per E-Mail teilzunehmen.
                                </p>
                                <p className='mb-6'>
                                   Sie können Ihre Einwilligung jederzeit ohne Angabe von Gründen widerrufen, indem Sie energiesol per E-Mail oder schriftlich kontaktieren.
                                </p>
                                <p>
                                   Weitere Einzelheiten zur Verarbeitung Ihrer personenbezogenen Daten und zu Ihren Rechten als betroffene Person finden Sie in unserer Datenschutzerklärung.
                                </p>
                            </div>
                        </label>
                    </div>

                    <div className="mt-8 flex justify-start">
                        <Button variant={'default'}>
                            <Icon iconNode={ArrowRight} variant={'circle'} className='bg-primary!' iconClassName='text-secondary!' />
                            Holen Sie sich Ihr Kostenangebot
                        </Button>
                    </div>
                </form>

                <div className="mt-10 p-6 sm:p-10">
                    <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                        <div className="flex flex-col justify-center">
                            <h3 className="font-montserrat text-2xl font-semibold text-secondary sm:text-3xl">
                                Your Personalized Cost Estimate
                            </h3>
                            <ul className="mt-3 space-y-4 text-base text-secondary font-open-sans font-normal  ">
                                {benefits.map((item) => (
                                    <li
                                        key={item}
                                        className="flex items-start gap-3"
                                    >
                                        <Icon iconNode={CircleCheckBig} variant={'default'}  iconClassName='text-info!' />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="rounded-3xl bg-white p-6">
                            <div className="relative mt-4 overflow-hidden rounded-2xl">
                                <img
                                    src="/images/configurator/energie-solution.png"
                                    alt="Energie Solution Nord"
                                    className="w-full object-cover sm:h-72 lg:h-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
