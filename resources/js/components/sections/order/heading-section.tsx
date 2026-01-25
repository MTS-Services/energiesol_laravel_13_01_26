import { SectionHeader } from '@/components/cards/section-header';
import { Icon } from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';

function HeadingSection() {
    const SectionHeaderData = {
        title: {
            initial:
                'ENERGIE SOLUTION NORD Ihr zuverlässiger Partner für nachhaltige Energielösungen.',
        },
        description:
            'Füllen Sie das untenstehende Formular aus, um Ihre persönliche Energiekostenabschätzung direkt in Ihrem Posteingang zu erhalten.',
    };
    return (
        <div>
            <div className="relative z-10 mx-auto max-w-7xl px-6 pb-24 lg:gap-x-10 lg:px-8 lg:py-40">
                <div>
                    <div className="block mt-15 lg:mt-0">
                        <img
                            src="/images/order-page-image.png"
                            alt="Order Page Image"
                            className="px-10 lg:px-75"
                        />
                    </div>
                    <div className="pt-12">
                        <SectionHeader item={SectionHeaderData}>
                            <div className="flex items-center justify-center">
                                <Link href="#" className="inline-block pt-10">
                                    <Button variant="default">
                                        <Icon
                                            iconNode={ArrowRight}
                                            variant="circle"
                                            iconClassName="text-secondary!"
                                            className="bg-primary!"
                                        />
                                        Termin buchen
                                    </Button>
                                </Link>
                            </div>
                        </SectionHeader>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { HeadingSection };
