import { DefaultCardComp } from '@/components/cards/default-card-comp';


export default function Resposiblity() {
    const item = {
        slogan: 'SOLAR SOLUTIONS',
        title: {
            initial: 'Your Home, Our ',
            middle: 'Responsibility',
        },
       
        description: 'At Energiesol, we believe energy is more than just electricity; it’s about protecting the environment for the next generation. We take full responsibility for powering your home with clean, renewable solar energy. Our mission is to provide you with peace of mind through sustainable solutions that contribute to a brighter and greener tomorrow for your family.',
        image: '/images/responsiblity.png',
        btn: {
            label: 'Start configurator',
            href: '#',
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
