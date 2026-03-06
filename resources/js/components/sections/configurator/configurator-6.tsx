import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Icon } from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { Link, router, useForm } from '@inertiajs/react';
import { ArrowLeft, ArrowRight, Check, CircleCheckBig } from 'lucide-react';
import { FormEvent, useMemo } from 'react';
import { storeEstimate } from '@/actions/App/Http/Controllers/Frontend/HomeController'
import InputError from '@/components/input-error';

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
        battery: Boolean(battery),
        charger: Boolean(charger),
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        consentEmail: false,
        consentPhone: false,
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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
          post(route('store.estimate'), {
            onSuccess: () => {
              reset()
            }
          })
    };

    return (
           <div className="pt-20 pb-10 md:pt-40">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-10">
                    <Link href={route('configurator.step5', { area: area, solar_id: solar_id, inverter_id: inverter_id, battery:battery})}>
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
                                placeholder="Max"
                                value={data.first_name}
                                onChange={(e) =>
                                    setData('first_name', e.target.value)
                                }
                                className="block! h-auto! rounded-xl border border-white/30 px-6! py-4! font-montserrat text-base text-secondary shadow-[0_10px_30px_rgba(0,0,0,0.12)] placeholder:text-secondary/50"
                            />
                            {errors.first_name && (
                                <InputError message={errors.first_name} className='mt-2' />
                            )}
                        </div>
                        <div>
                            <label className="mb-4 inline-block font-montserrat text-base font-semibold text-secondary lg:text-xl">
                                Nachname{' '}
                                <span className="text-red-600">*</span>
                            </label>
                            <Input
                                placeholder="Mustermann"
                                value={data.last_name}
                                onChange={(e) =>
                                    setData('last_name', e.target.value)
                                }
                                className="block! h-auto! rounded-xl border border-white/30 px-6! py-4! font-montserrat text-base text-secondary shadow-[0_10px_30px_rgba(0,0,0,0.12)] placeholder:text-secondary/50"
                            />
                            {errors.last_name && (
                                <InputError message={errors.last_name} className='mt-2' />
                            )}
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
                            {errors.email && (
                                <InputError message={errors.email} className='mt-2' />
                            )}
                        </div>
                        <div>
                            <label className="mb-4 inline-block font-montserrat text-base font-semibold text-secondary lg:text-xl">
                                Telefonnummer <span className="text-red-600">*</span>
                            </label>
                            <Input
                                type="tel"
                                placeholder="(+49) 40 123 456"
                                value={data.phone}
                                onChange={(e) =>
                                    setData('phone', e.target.value)
                                }
                                className="block! h-auto! rounded-xl border border-white/30 px-6! py-4! font-montserrat text-base text-secondary shadow-[0_10px_30px_rgba(0,0,0,0.12)] placeholder:text-secondary/50"
                            />
                            {errors.phone && (
                                <InputError message={errors.phone} className='mt-2' />
                            )}

                        </div>
                    </div>

                    <div className="mt-6 space-y-4 text-sm text-slate-600">
                        <label className="flex flex-row items-start gap-3">
                            <Checkbox
                                checked={data.consentEmail}
                                onCheckedChange={(checked) =>
                                    setData('consentEmail', checked ? true : false)
                                }
                                className="mt-2 h-6 w-6 border border-secondary"
                            />
                            <div className="ml-3 font-open-sans text-base leading-relaxed">
                                <p className="mb-1 font-semibold">
                                    (BUTTON 1) Einwilligung E-Mail
                                </p>
                                <p className="mb-4">
                                    Ich bin damit einverstanden, dass die von mir
                                    angegebenen Daten zur Bearbeitung meiner
                                    Anfrage verwendet werden und ich die
                                    Ergebnisse des Solarkonfigurators sowie
                                    Informationen zu meiner Anfrage (z. B.
                                    Terminbestätigungen) per E-Mail von
                                    energiesol erhalte.
                                </p>
                            </div>
                        </label>

                        <label className="flex flex-row items-start gap-3">
                            <Checkbox
                                checked={data.consentPhone}
                                onCheckedChange={(checked) =>
                                    setData('consentPhone', checked ? true : false)
                                }
                                className="mt-2 h-6 w-6 border border-secondary"
                            />
                            <div className="ml-3 font-open-sans text-base leading-relaxed">
                                <p className="mb-1 font-semibold">
                                    (BUTTON 2) Einwilligung Telefon
                                </p>
                                <p className="mb-4">
                                    Ich bin außerdem damit einverstanden, dass
                                    mich energiesol telefonisch kontaktiert, um
                                    meine Anfrage zu besprechen, offene Fragen zu
                                    klären oder gegebenenfalls einen
                                    Vor-Ort-Termin zu vereinbaren.
                                </p>
                            </div>
                        </label>

                        <p className="mt-2 font-open-sans text-base font-semibold text-red-600">
                            Beide Einwilligungen müssen erteilt werden, um
                            fortzufahren.
                        </p>

                        <div className="mt-4 font-open-sans text-base leading-relaxed">
                            <p className="mb-2 font-semibold">Widerruf</p>
                            <p className="mb-4">
                                Ich kann meine Einwilligung jederzeit mit Wirkung
                                für die Zukunft widerrufen, z. B. per E-Mail oder
                                schriftlich an energiesol. Die Rechtmäßigkeit der
                                bis zum Widerruf erfolgten Verarbeitung bleibt
                                davon unberührt.
                            </p>
                            <p className="mb-2 font-semibold">
                                Datenschutzhinweis
                            </p>
                            <p>
                                Weitere Informationen zur Verarbeitung meiner
                                personenbezogenen Daten und zu meinen Rechten
                                finde ich in der Datenschutzerklärung.
                            </p>
                        </div>
                    </div>

                   <div className="mt-8 flex justify-start">
                    <Button 
                        variant={'default'}
                        disabled={!data.consentEmail || !data.consentPhone}
                        className="disabled:opacity-50 disabled:cursor-not-allowed"
                        type='submit'
                    >
                        <Icon iconNode={ArrowRight} variant={'circle'} className='bg-primary!' iconClassName='text-secondary!' />
                        Holen Sie sich Ihr Kostenangebot
                    </Button>
                   
                </div>
                </form>

                <div className="mt-10 p-6 sm:p-10 ">
                    <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                        <div className="flex flex-col justify-center">
                            <h3 className="font-montserrat text-2xl font-semibold text-secondary sm:text-3xl">
                                Ihr persönliches Solar-Angebot - kostenlos & unverbindlich
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
                        <div className="rounded-3xl p-6 bg-linear-to-r from-btn-primary/20 to-info/20">
                            <div className="relative mt-4 overflow-hidden rounded-2xl">
                                <img
                                    src="/images/logo-2.png"
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
