import { DefaultCardComp } from '@/components/cards/default-card-comp';


export default function Resposiblity() {
    const item = {
        slogan: 'ZUKUNFT',
        title: {
            initial: 'Ihr Zuhause, unsere ',
            middle: 'Verantwortung.',
        },
       
        description: 'Bei Energiesol glauben wir, dass Energie mehr ist als nur Strom – es geht darum, die Umwelt für die nächste Generation zu schützen. Wir übernehmen die volle Verantwortung dafür, Ihr Zuhause mit sauberer, erneuerbarer Solarenergie zu versorgen. Unsere Mission ist es, Ihnen durch nachhaltige Lösungen ein gutes Gefühl zu geben und gemeinsam zu einer helleren und grüneren Zukunft für Ihre Familie beizutragen.',
        image: '/images/responsiblity.png',
        btn: {
            label: 'Konfigurator starten',
            href: route('configurator') ,
        }
    };

    return (
        <div className="relative">
            <div
                className="absolute inset-y-0 right-0 z-0 h-full w-1/2"
                style={{
                    backgroundImage: "url('images/frame_dot.png')",
                    backgroundSize: 'contain',
                    backgroundPosition: 'right center',
                    backgroundRepeat: 'no-repeat',
                }}
            ></div>
            <DefaultCardComp
                slogan={item.slogan}
                title={item.title}
                description={item.description}
                btn={item.btn}
                image={item.image}
            >
            </DefaultCardComp>
        </div>
    );
}

export { Resposiblity };
