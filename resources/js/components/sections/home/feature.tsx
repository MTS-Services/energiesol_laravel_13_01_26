import { BoxCard } from '@/components/cards/box-card';
import { SectionHeader } from '@/components/cards/section-header';

interface Props {
    features?:
        | {
              title?: string | null;
              description?: string | null;
              image?: string | null;
              action_text?: string | null;
              action_url?: string | null;
          }[]
        | null;
}

export default function Feature({ features }: Props) {
    const SectionHeaderData = {
        title: {
            initial: 'Intelligente und zuverlässige Wege zur ',
            middle: 'Energieunabhängigkeit',
            breakPoint: {
                after: true,
            },
        },
    };

    return (
        <div>
            <div className="z-10 mx-auto max-w-7xl px-6 py-15 lg:px-0 lg:py-30">
                <SectionHeader
                    item={SectionHeaderData}
                    className={'px-0 lg:px-50'}
                />

                <div className="features grid grid-cols-1 gap-6 pt-6 sm:grid-cols-2 lg:grid-cols-3 lg:pt-10">
                    {features?.map((item, index) => {
                        const enhancedItem = {
                            ...item,
                            btn: {
                                label: item.action_text,
                                href: item.action_url || '#',
                            },
                        };

                        return <BoxCard key={index} item={enhancedItem} />;
                    })}
                </div>
            </div>
        </div>
    );
}